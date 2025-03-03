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
      
      // Simple ball animation with more dynamic movement
      const newBallPosition = { ...ballPosition };
      
      // Move in a more interesting pattern with occasional sharp changes in direction
      if (Math.random() > 0.95) {
        newBallPosition.x = 25 + Math.random() * 50; // Keep within center area of court
        newBallPosition.y = 25 + Math.random() * 50;
        setBallVelocity(15 + Math.random() * 25); // More variable velocity
      } else {
        // Small continuous movements
        const smallMoveX = (Math.random() - 0.5) * 2;
        const smallMoveY = (Math.random() - 0.5) * 2;
        
        newBallPosition.x = Math.max(15, Math.min(85, newBallPosition.x + smallMoveX));
        newBallPosition.y = Math.max(15, Math.min(85, newBallPosition.y + smallMoveY));
      }
      
      setBallPosition(newBallPosition);
      
      // IMPROVED: Player movement function that keeps players in their quadrants
      // and allows for more organic movement patterns
      const movePlayerInQuadrant = (
        player: PlayerPosition, 
        baseX: number,
        baseY: number,
        isLeftSide: boolean,
        isTopSide: boolean
      ): PlayerPosition => {
        // Define quadrant boundaries
        const minX = isLeftSide ? 15 : courtBoundaries.centerLine + 5;
        const maxX = isLeftSide ? courtBoundaries.centerLine - 5 : 85;
        const minY = isTopSide ? 15 : 50;
        const maxY = isTopSide ? 50 : 85;
        
        // Create movement based on both ball position and random factors
        // Ball influence (60%)
        const targetX = Math.max(minX, Math.min(maxX, ballPosition.x));
        const targetY = Math.max(minY, Math.min(maxY, ballPosition.y));
        
        // Random movement component (40%)
        const randomX = baseX + (Math.random() - 0.5) * 15;
        const randomY = baseY + (Math.random() - 0.5) * 15;
        
        // Combined target with weights
        const weightedTargetX = targetX * 0.6 + randomX * 0.4;
        const weightedTargetY = targetY * 0.6 + randomY * 0.4;
        
        // Final constrained target
        const finalTargetX = Math.max(minX, Math.min(maxX, weightedTargetX));
        const finalTargetY = Math.max(minY, Math.min(maxY, weightedTargetY));
        
        // Calculate direction vector
        const dx = finalTargetX - player.x;
        const dy = finalTargetY - player.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > 3) { // Only move if somewhat far from target
          // Movement speed varies by player (some players move faster than others)
          const speed = 0.8 + Math.random() * 0.7; // Random speed between 0.8 and 1.5
          
          const moveX = (dx / distance) * speed * (deltaTime / 100);
          const moveY = (dy / distance) * speed * (deltaTime / 100);
          
          // Calculate rotation - BUT limit to ±49 degrees from base angle
          // Base angle is 0 for left side, 180 for right side
          const baseAngle = isLeftSide ? 0 : 180;
          const rawAngle = Math.atan2(dy, dx) * (180 / Math.PI);
          
          // Normalize the angle relative to the base
          let normalizedAngle = rawAngle - baseAngle;
          while (normalizedAngle > 180) normalizedAngle -= 360;
          while (normalizedAngle < -180) normalizedAngle += 360;
          
          // Limit rotation to ±49 degrees
          const clampedAngle = Math.max(-49, Math.min(49, normalizedAngle));
          const finalRotation = baseAngle + clampedAngle;
          
          // Apply movement
          return {
            x: player.x + moveX,
            y: player.y + moveY,
            rotation: finalRotation
          };
        }
        
        // If no movement, still update rotation potentially
        const rawAngle = Math.atan2(dy, dx) * (180 / Math.PI);
        const baseAngle = isLeftSide ? 0 : 180;
        
        // Normalize the angle relative to the base
        let normalizedAngle = rawAngle - baseAngle;
        while (normalizedAngle > 180) normalizedAngle -= 360;
        while (normalizedAngle < -180) normalizedAngle += 360;
        
        // Limit rotation to ±49 degrees
        const clampedAngle = Math.max(-49, Math.min(49, normalizedAngle));
        const finalRotation = baseAngle + clampedAngle;
        
        return {
          ...player,
          rotation: finalRotation
        };
      };
      
      // More dynamic player movement - update more frequently
      if (Math.random() > 0.2) { // 80% chance to move each frame
        // Team 1 (Green) players
        setPlayer1(movePlayerInQuadrant(player1, 25, 25, true, true)); // Left top quadrant
        setPlayer2(movePlayerInQuadrant(player2, 25, 75, true, false)); // Left bottom quadrant
        
        // Team 2 (Blue) players
        setPlayer3(movePlayerInQuadrant(player3, 75, 25, false, true)); // Right top quadrant
        setPlayer4(movePlayerInQuadrant(player4, 75, 75, false, false)); // Right bottom quadrant
      }
      
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
