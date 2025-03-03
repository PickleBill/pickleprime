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
      
      // Improved player movement function with more pickleball strategy
      const movePlayerForPickleball = (
        player: PlayerPosition, 
        isLeftSide: boolean,
        isTopSide: boolean
      ): PlayerPosition => {
        // Define quadrant boundaries with flexibility for realistic movement
        const minX = isLeftSide ? 10 : courtBoundaries.centerLine + 2;
        const maxX = isLeftSide ? courtBoundaries.centerLine - 2 : 90;
        const minY = isTopSide ? 10 : 40;
        const maxY = isTopSide ? 60 : 90;
        
        // Calculate distance to ball
        const dx = ballPosition.x - player.x;
        const dy = ballPosition.y - player.y;
        const distanceToBall = Math.sqrt(dx * dx + dy * dy);
        
        // Direction vector to ball
        const dirX = distanceToBall > 0 ? dx / distanceToBall : 0;
        const dirY = distanceToBall > 0 ? dy / distanceToBall : 0;
        
        // Higher base speed for more dynamic movement
        const baseSpeed = 0.4 * (deltaTime / 16);
        
        // Speed based on distance to ball - players move faster when ball is further away
        let speed = baseSpeed * (0.8 + (distanceToBall / 100) * 2);
        
        // Apply random deviations for more natural movement (occasionally)
        let finalDirX = dirX;
        let finalDirY = dirY;
        
        if (Math.random() > 0.85) {
          // Occasional slight deviation from direct path to ball (more human-like)
          finalDirX += (Math.random() - 0.5) * 0.3;
          finalDirY += (Math.random() - 0.5) * 0.3;
          
          // Normalize direction again
          const length = Math.sqrt(finalDirX * finalDirX + finalDirY * finalDirY);
          if (length > 0) {
            finalDirX /= length;
            finalDirY /= length;
          }
        }
        
        // Calculate new position - moving towards ball with some randomness
        let newX = player.x + finalDirX * speed;
        let newY = player.y + finalDirY * speed;
        
        // Constrain to quadrant boundaries
        newX = Math.max(minX, Math.min(maxX, newX));
        newY = Math.max(minY, Math.min(maxY, newY));
        
        // Keep base rotation for player facing direction
        const baseRotation = isLeftSide ? 0 : 180;
        
        return {
          x: newX,
          y: newY,
          rotation: baseRotation // Fixed rotation based on which side they're on
        };
      };
      
      // Position readjustments for better pickleball gameplay
      const moveBackToReadyPosition = (
        player: PlayerPosition,
        homeX: number,
        homeY: number
      ): PlayerPosition => {
        // If ball is far from player's quadrant, move back toward ready position
        const distanceFromBall = Math.sqrt(
          Math.pow(player.x - ballPosition.x, 2) + 
          Math.pow(player.y - ballPosition.y, 2)
        );
        
        // Only move back if ball is far enough away
        if (distanceFromBall > 40) {
          const dirX = homeX - player.x;
          const dirY = homeY - player.y;
          const distToHome = Math.sqrt(dirX * dirX + dirY * dirY);
          
          if (distToHome > 5) { // Only move if significantly away from home position
            const normDirX = dirX / distToHome;
            const normDirY = dirY / distToHome;
            
            const returnSpeed = 0.2 * (deltaTime / 16);
            
            return {
              x: player.x + normDirX * returnSpeed,
              y: player.y + normDirY * returnSpeed,
              rotation: player.rotation
            };
          }
        }
        
        // If ball is close to player's quadrant, chase the ball
        return movePlayerForPickleball(
          player, 
          player.x < courtBoundaries.centerLine, 
          player.y < courtBoundaries.kitchenBottom - 10
        );
      };
      
      // Update all players with improved movement
      setPlayer1(moveBackToReadyPosition(player1, 25, 25));
      setPlayer2(moveBackToReadyPosition(player2, 25, 75));
      setPlayer3(moveBackToReadyPosition(player3, 75, 25));
      setPlayer4(moveBackToReadyPosition(player4, 75, 75));
      
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
