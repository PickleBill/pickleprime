
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
      
      // SLOWED DOWN ball animation with more gradual movement patterns
      const newBallPosition = { ...ballPosition };
      
      // Occasionally make changes in direction (15% chance) - REDUCED from 20%
      if (Math.random() > 0.85) {
        // Create more gradual movements with REDUCED velocity
        newBallPosition.x = 15 + Math.random() * 70; 
        newBallPosition.y = 15 + Math.random() * 70;
        setBallVelocity(15 + Math.random() * 20); // REDUCED velocity range (was 25-60, now 15-35)
      } else {
        // Smaller continuous movements - REDUCED by ~40%
        const moveX = (Math.random() - 0.5) * 2.0; // Reduced from 3.5
        const moveY = (Math.random() - 0.5) * 2.0; // Reduced from 3.5
        
        newBallPosition.x = Math.max(10, Math.min(90, newBallPosition.x + moveX));
        newBallPosition.y = Math.max(10, Math.min(90, newBallPosition.y + moveY));
      }
      
      setBallPosition(newBallPosition);
      
      // Improved player movement function with more pickleball strategy and ENHANCED MOVEMENT
      const movePlayerForPickleball = (
        player: PlayerPosition, 
        isLeftSide: boolean,
        isTopSide: boolean
      ): PlayerPosition => {
        // Define quadrant boundaries with INCREASED flexibility for more movement
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
        
        // INCREASED base speed for more dynamic movement
        const baseSpeed = 0.5 * (deltaTime / 16); // Increased from 0.4
        
        // ENHANCED speed calculation based on distance to ball
        let speed = baseSpeed * (1.0 + (distanceToBall / 100) * 2.5); // Increased modifier
        
        // Apply random deviations for more natural movement (INCREASED frequency)
        let finalDirX = dirX;
        let finalDirY = dirY;
        
        if (Math.random() > 0.75) { // Increased chance from 0.85
          // MORE significant deviation from direct path to ball
          finalDirX += (Math.random() - 0.5) * 0.5; // Increased from 0.3
          finalDirY += (Math.random() - 0.5) * 0.5; // Increased from 0.3
          
          // Normalize direction again
          const length = Math.sqrt(finalDirX * finalDirX + finalDirY * finalDirY);
          if (length > 0) {
            finalDirX /= length;
            finalDirY /= length;
          }
        }
        
        // Calculate new position - moving towards ball with enhanced randomness
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
      
      // ENHANCED position readjustments with more movement
      const moveBackToReadyPosition = (
        player: PlayerPosition,
        homeX: number,
        homeY: number
      ): PlayerPosition => {
        // Allow more movement by REDUCING the distance threshold
        const distanceFromBall = Math.sqrt(
          Math.pow(player.x - ballPosition.x, 2) + 
          Math.pow(player.y - ballPosition.y, 2)
        );
        
        // Only move back if ball is FURTHER away (increased threshold)
        if (distanceFromBall > 35) { // Reduced from 40
          const dirX = homeX - player.x;
          const dirY = homeY - player.y;
          const distToHome = Math.sqrt(dirX * dirX + dirY * dirY);
          
          // INCREASED movement range before returning to home
          if (distToHome > 10) { // Increased from 5
            const normDirX = dirX / distToHome;
            const normDirY = dirY / distToHome;
            
            // SLOWER return to home position for more time spent moving
            const returnSpeed = 0.15 * (deltaTime / 16); // Reduced from 0.2
            
            return {
              x: player.x + normDirX * returnSpeed,
              y: player.y + normDirY * returnSpeed,
              rotation: player.rotation
            };
          }
        }
        
        // If ball is close to player's quadrant, chase the ball with INCREASED aggression
        return movePlayerForPickleball(
          player, 
          player.x < courtBoundaries.centerLine, 
          player.y < courtBoundaries.kitchenBottom - 10
        );
      };
      
      // ALLOW MORE FREEDOM with wider movement ranges for each player
      // Team 1 players (Green team on left side)
      setPlayer1(moveBackToReadyPosition(player1, 25, 25));
      setPlayer2(moveBackToReadyPosition(player2, 25, 75));
      // Team 2 players (Blue team on right side)
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
