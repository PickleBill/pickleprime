
import { useState, useCallback } from "react";
import { BallState, BallTrajectory } from "../../types";

export const useBallMovement = (isHighlightActive: boolean = false) => {
  // Initialize ball position, trajectory, and velocity
  const [ballPosition, setBallPosition] = useState<BallState>({ x: 50, y: 50, z: 0 });
  
  const [ballTrajectory, setBallTrajectory] = useState<BallTrajectory>({
    points: [],
    type: "drive",
    speed: 8, // Reduced speed from 10
    stage: "rising",
    bounces: 0
  });
  
  const [ballVelocity, setBallVelocity] = useState(0);
  
  // Function to update ball position with animation frame
  const updateBallPosition = useCallback((deltaTime: number) => {
    // FURTHER SLOWED DOWN ball animation with more realistic pickleball movement
    const newBallPosition = { ...ballPosition };
    
    // Reduced chance of direction change for smoother movement (10% chance)
    if (Math.random() > 0.90) {
      // Create more gradual movements with FURTHER REDUCED velocity
      newBallPosition.x = 15 + Math.random() * 70; 
      newBallPosition.y = 15 + Math.random() * 70;
      setBallVelocity(12 + Math.random() * 15); // Further reduced velocity range (was 15-35, now 12-27)
    } else {
      // Even smaller continuous movements
      const moveX = (Math.random() - 0.5) * 1.5; // Reduced from 2.0
      const moveY = (Math.random() - 0.5) * 1.5; // Reduced from 2.0
      
      newBallPosition.x = Math.max(10, Math.min(90, newBallPosition.x + moveX));
      newBallPosition.y = Math.max(10, Math.min(90, newBallPosition.y + moveY));
    }
    
    setBallPosition(newBallPosition);
  }, [ballPosition]);
  
  return {
    ballPosition,
    ballTrajectory,
    ballVelocity,
    updateBallPosition
  };
};

export default useBallMovement;
