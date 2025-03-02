
import { useState, useEffect } from 'react';
import { BallState, BallTrajectory } from '../types';
import { animateBall } from './utils/ballMovementUtils';

// Custom hook for ball animation
const useBallAnimation = (initialBallState: BallState) => {
  const [ballPosition, setBallPosition] = useState<BallState>(initialBallState);
  const [ballVelocity, setBallVelocity] = useState<number>(0);
  const [ballTrajectory, setBallTrajectory] = useState<BallTrajectory>({
    points: [{ x: initialBallState.x, y: initialBallState.y }],
    type: "drive",
    speed: 0
  });

  // Effect for animating ball movement
  useEffect(() => {
    const interval = setInterval(() => {
      // Generate random direction movement for demo
      const randomDirection = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 3;
      const dx = Math.cos(randomDirection) * speed;
      const dy = Math.sin(randomDirection) * speed;
      
      // Create a valid BallTrajectory object
      const newTrajectory: BallTrajectory = {
        points: [
          { x: ballPosition.x, y: ballPosition.y },
          { x: ballPosition.x + dx * 10, y: ballPosition.y + dy * 10 }
        ],
        type: Math.random() > 0.5 ? "drive" : "lob",
        speed: speed,
        dx: dx,
        dy: dy,
        endX: ballPosition.x + dx * 20,
        endY: ballPosition.y + dy * 20
      };
      
      // Animate the ball
      const { newPosition, velocity } = animateBall(ballPosition, newTrajectory);
      
      setBallPosition(newPosition);
      setBallVelocity(velocity);
      setBallTrajectory(newTrajectory);
    }, 2000); // Slower animation for demo purposes
    
    return () => clearInterval(interval);
  }, [ballPosition]);

  return { ballPosition, ballTrajectory, ballVelocity };
};

export default useBallAnimation;
