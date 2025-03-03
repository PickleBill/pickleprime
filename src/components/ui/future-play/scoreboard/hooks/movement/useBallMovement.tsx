
import { useState } from "react";
import { BallState, BallTrajectory } from "../../types";

export const useBallMovement = (isHighlightActive: boolean = false) => {
  // Initialize ball position, trajectory, and velocity
  const [ballPosition, setBallPosition] = useState<BallState>({ x: 50, y: 50, z: 0 });
  
  const [ballTrajectory, setBallTrajectory] = useState<BallTrajectory>({
    points: [],
    type: "drive",
    speed: 10,
    stage: "rising",
    bounces: 0
  });
  
  const [ballVelocity, setBallVelocity] = useState(0);
  
  // Function to update ball position with animation frame
  const updateBallPosition = (deltaTime: number) => {
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
  };
  
  return {
    ballPosition,
    ballTrajectory,
    ballVelocity,
    updateBallPosition
  };
};

export default useBallMovement;
