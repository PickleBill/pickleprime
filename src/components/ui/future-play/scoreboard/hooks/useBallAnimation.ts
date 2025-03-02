
import { useCallback } from 'react';
import { BallState, BallTrajectory } from '../types';

// Animation utility function for ball movement
const useBallAnimation = () => {
  const animateBall = useCallback((props: {
    position: BallState;
    trajectory: BallTrajectory;
    velocity: number;
  }, deltaTime: number) => {
    const { position, trajectory, velocity } = props;
    
    // Create a copy of the position to avoid directly mutating state
    const newPosition = { ...position };
    
    // Basic movement logic - can be enhanced for more realistic physics
    if (trajectory.dx && trajectory.dy) {
      // Apply trajectory movement
      newPosition.x += trajectory.dx * (deltaTime / 100);
      newPosition.y += trajectory.dy * (deltaTime / 100);
      
      // Boundary handling - bounce off edges
      if (newPosition.x < 5 || newPosition.x > 95) {
        trajectory.dx = -trajectory.dx;
        newPosition.x = Math.max(5, Math.min(95, newPosition.x));
      }
      
      if (newPosition.y < 5 || newPosition.y > 95) {
        trajectory.dy = -trajectory.dy;
        newPosition.y = Math.max(5, Math.min(95, newPosition.y));
      }
    }
    
    // Add some randomness to the trajectory occasionally
    if (Math.random() > 0.98) {
      trajectory.dx = (Math.random() - 0.5) * 10;
      trajectory.dy = (Math.random() - 0.5) * 10;
    }
    
    return {
      position: newPosition,
      trajectory,
      velocity
    };
  }, []);
  
  return animateBall;
};

export default useBallAnimation;
