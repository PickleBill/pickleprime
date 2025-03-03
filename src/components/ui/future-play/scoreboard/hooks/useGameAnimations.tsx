
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
  
  // Animation frame effect
  useEffect(() => {
    if (isHighlightActive) return;
    
    let animationFrameId: number;
    let lastTimestamp = 0;
    
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
      
      // Constrain player movements to their respective court sides
      const movePlayerTowardBall = (player: PlayerPosition, speed: number, isLeftSide: boolean): PlayerPosition => {
        // Create a target that's influenced by the ball but stays on player's side
        const targetX = isLeftSide 
          ? Math.min(courtBoundaries.centerLine - 5, ballPosition.x) // Left side boundary
          : Math.max(courtBoundaries.centerLine + 5, ballPosition.x); // Right side boundary
          
        const targetY = Math.max(15, Math.min(85, ballPosition.y)); // Vertical constraint
        
        const dx = targetX - player.x;
        const dy = targetY - player.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > 5) { // Only move if somewhat far from target
          const moveX = (dx / distance) * speed * (deltaTime / 100);
          const moveY = (dy / distance) * speed * (deltaTime / 100);
          
          // Calculate new position and enforce court boundaries
          const newX = isLeftSide 
            ? Math.max(15, Math.min(courtBoundaries.centerLine - 5, player.x + moveX))
            : Math.max(courtBoundaries.centerLine + 5, Math.min(85, player.x + moveX));
            
          const newY = Math.max(15, Math.min(85, player.y + moveY));
          
          return {
            x: newX,
            y: newY,
            rotation: Math.atan2(dy, dx) * (180 / Math.PI)
          };
        }
        return player;
      };
      
      // Move players more frequently for more dynamic animation
      if (Math.random() > 0.4) {
        // Team 1 (Green) on left side
        setPlayer1(movePlayerTowardBall(player1, 1.2, true));
        setPlayer2(movePlayerTowardBall(player2, 1.0, true));
        
        // Team 2 (Blue) on right side
        setPlayer3(movePlayerTowardBall(player3, 1.1, false));
        setPlayer4(movePlayerTowardBall(player4, 0.9, false));
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
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
    player4
  };
};

export default useGameAnimations;
