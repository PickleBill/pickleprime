
import React, { useState, useEffect } from "react";
import { Position, BallState, BallTrajectory, PlayerPosition } from "../types";
import { courtBoundaries } from "../constants/courtConfig";

// Default initial values - positioned correctly
const defaultBallPosition: BallState = { x: 50, y: 50, z: 0 };
const defaultPlayer1: PlayerPosition = { x: 25, y: 25, rotation: 0 }; // Green team, left side top
const defaultPlayer2: PlayerPosition = { x: 25, y: 75, rotation: 0 }; // Green team, left side bottom
const defaultPlayer3: PlayerPosition = { x: 75, y: 25, rotation: 180 }; // Blue team, right side top 
const defaultPlayer4: PlayerPosition = { x: 75, y: 75, rotation: 180 }; // Blue team, right side bottom

export const useGameAnimations = (isHighlightActive: boolean = false) => {
  // Initialize ball position, trajectory, and velocity
  const [ballPosition, setBallPosition] = useState<BallState>(defaultBallPosition);
  
  const [ballTrajectory, setBallTrajectory] = useState<BallTrajectory>({
    points: [],
    type: "drive",
    speed: 10,
    stage: "rising",
    bounces: 0
  });
  
  const [ballVelocity, setBallVelocity] = useState(0);
  
  // Initialize player positions
  const [player1, setPlayer1] = useState<PlayerPosition>(defaultPlayer1);
  const [player2, setPlayer2] = useState<PlayerPosition>(defaultPlayer2);
  const [player3, setPlayer3] = useState<PlayerPosition>(defaultPlayer3);
  const [player4, setPlayer4] = useState<PlayerPosition>(defaultPlayer4);
  
  // Random pose counter for player silhouettes
  const [poseCycleCounter, setPoseCycleCounter] = useState(0);
  
  // Animation frame effect
  useEffect(() => {
    if (isHighlightActive) return;
    
    let animationFrameId: number;
    let lastTimestamp = 0;
    let poseInterval: NodeJS.Timeout;
    
    // Set up pose change interval (every 2-5 seconds)
    poseInterval = setInterval(() => {
      setPoseCycleCounter(prev => prev + 1);
    }, 2000 + Math.random() * 3000);
    
    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      
      // More dynamic ball animation with sharper movement patterns
      const newBallPosition = { ...ballPosition };
      
      // Occasionally make sharp changes in direction (20% chance)
      if (Math.random() > 0.8) {
        // Create more dramatic movements covering more court area
        newBallPosition.x = 15 + Math.random() * 70; // Use more of the court width
        newBallPosition.y = 15 + Math.random() * 70; // Use more of the court height
        setBallVelocity(25 + Math.random() * 35); // Higher velocity for more intense movement
      } else {
        // More varied small continuous movements
        const moveX = (Math.random() - 0.5) * 3.5; // Larger range for x movement
        const moveY = (Math.random() - 0.5) * 3.5; // Larger range for y movement
        
        newBallPosition.x = Math.max(10, Math.min(90, newBallPosition.x + moveX));
        newBallPosition.y = Math.max(10, Math.min(90, newBallPosition.y + moveY));
      }
      
      setBallPosition(newBallPosition);
      
      // Enhanced player movement function that makes players aggressively chase the ball
      // while still respecting their quadrant boundaries
      const movePlayerTowardsBall = (
        player: PlayerPosition, 
        isLeftSide: boolean,
        isTopSide: boolean,
        aggression: number // How aggressively the player chases the ball (0-1)
      ): PlayerPosition => {
        // Define quadrant boundaries with more flexibility
        const minX = isLeftSide ? 10 : courtBoundaries.centerLine + 2;
        const maxX = isLeftSide ? courtBoundaries.centerLine - 2 : 90;
        const minY = isTopSide ? 10 : 40; // Allow more vertical movement
        const maxY = isTopSide ? 60 : 90; // Allow more vertical movement
        
        // Calculate distance to ball
        const dx = ballPosition.x - player.x;
        const dy = ballPosition.y - player.y;
        const distanceToBall = Math.sqrt(dx * dx + dy * dy);
        
        // Direction vector to ball
        const dirX = distanceToBall > 0 ? dx / distanceToBall : 0;
        const dirY = distanceToBall > 0 ? dy / distanceToBall : 0;
        
        // Higher base speed for more dynamic movement
        const baseSpeed = 0.3 * (deltaTime / 16);
        
        // Speed based on distance to ball - players move faster when ball is further away
        let speed = baseSpeed * (0.8 + (distanceToBall / 100) * 2);
        
        // Apply the aggression factor - higher aggression means player chases ball more directly
        speed *= aggression;
        
        // Calculate new position - moving towards ball
        let newX = player.x + dirX * speed;
        let newY = player.y + dirY * speed;
        
        // Constrain to quadrant boundaries
        newX = Math.max(minX, Math.min(maxX, newX));
        newY = Math.max(minY, Math.min(maxY, newY));
        
        // Calculate rotation to face the ball
        const baseAngle = isLeftSide ? 0 : 180;
        
        // Get angle to ball (in degrees)
        let angleToBall = Math.atan2(dy, dx) * (180 / Math.PI);
        
        // Normalize relative to player's base orientation
        let normalizedAngle = angleToBall - baseAngle;
        while (normalizedAngle > 180) normalizedAngle -= 360;
        while (normalizedAngle < -180) normalizedAngle += 360;
        
        // Limit rotation to ±60 degrees for more realistic movement
        const clampedAngle = Math.max(-60, Math.min(60, normalizedAngle));
        const newRotation = baseAngle + clampedAngle;
        
        return {
          x: newX,
          y: newY,
          rotation: newRotation
        };
      };
      
      // Update player positions with different aggression factors for variety
      setPlayer1(movePlayerTowardsBall(player1, true, true, 0.85)); // Left top aggressive
      setPlayer2(movePlayerTowardsBall(player2, true, false, 0.75)); // Left bottom less aggressive
      setPlayer3(movePlayerTowardsBall(player3, false, true, 0.8)); // Right top aggressive
      setPlayer4(movePlayerTowardsBall(player4, false, false, 0.7)); // Right bottom less aggressive
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(poseInterval);
    };
  }, [
    isHighlightActive,
    ballPosition, 
    ballTrajectory, 
    ballVelocity,
    player1, 
    player2, 
    player3, 
    player4
  ]);
  
  return {
    ballPosition,
    ballTrajectory,
    ballVelocity,
    player1,
    player2,
    player3,
    player4,
    poseCycleCounter
  };
};

export default useGameAnimations;
