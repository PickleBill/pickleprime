
import React, { useState, useEffect } from "react";
import { Position, BallState, BallTrajectory, PlayerPosition } from "../types";

// Default initial values
const defaultBallPosition: BallState = { x: 50, y: 50, z: 0 };
const defaultPlayer1: PlayerPosition = { x: 25, y: 25, rotation: 0 };
const defaultPlayer2: PlayerPosition = { x: 75, y: 25, rotation: 180 };
const defaultPlayer3: PlayerPosition = { x: 25, y: 75, rotation: 0 };
const defaultPlayer4: PlayerPosition = { x: 75, y: 75, rotation: 180 };

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
      
      // Simple ball animation
      const newBallPosition = { ...ballPosition };
      
      // Move in a simple pattern
      if (Math.random() > 0.95) {
        newBallPosition.x = 30 + Math.random() * 40;
        newBallPosition.y = 30 + Math.random() * 40;
        setBallVelocity(10 + Math.random() * 20);
      }
      
      setBallPosition(newBallPosition);
      
      // Simple player movement - move slightly toward the ball
      const movePlayerTowardBall = (player: PlayerPosition, speed: number): PlayerPosition => {
        const dx = ballPosition.x - player.x;
        const dy = ballPosition.y - player.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > 10) {
          const moveX = (dx / distance) * speed * (deltaTime / 100);
          const moveY = (dy / distance) * speed * (deltaTime / 100);
          return {
            x: player.x + moveX,
            y: player.y + moveY,
            rotation: Math.atan2(dy, dx) * (180 / Math.PI)
          };
        }
        return player;
      };
      
      // Only move players sometimes for more natural movement
      if (Math.random() > 0.7) {
        setPlayer1(movePlayerTowardBall(player1, 1));
        setPlayer2(movePlayerTowardBall(player2, 0.8));
        setPlayer3(movePlayerTowardBall(player3, 0.9));
        setPlayer4(movePlayerTowardBall(player4, 1.1));
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
