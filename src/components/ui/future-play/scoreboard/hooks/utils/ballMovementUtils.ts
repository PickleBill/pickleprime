
import { BallTrajectory } from "../../types";

interface CourtConfig {
  bounds: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  net: {
    top: number;
    bottom: number;
  };
}

/**
 * Generate a new random ball trajectory
 */
export const getBallTrajectory = (
  currentPosition: { x: number; y: number },
  courtConfig: CourtConfig
): BallTrajectory => {
  const { bounds } = courtConfig;
  
  // Calculate a random end position within court bounds
  const endX = Math.random() * (bounds.right - bounds.left) + bounds.left;
  const endY = Math.random() * (bounds.bottom - bounds.top) + bounds.top;
  
  // Calculate direction vector
  const dx = endX - currentPosition.x;
  const dy = endY - currentPosition.y;
  
  // Generate trajectory points (simplified)
  const points = [{ ...currentPosition }];
  const numPoints = 5;
  
  for (let i = 1; i <= numPoints; i++) {
    const t = i / numPoints;
    points.push({
      x: currentPosition.x + dx * t,
      y: currentPosition.y + dy * t,
    });
  }
  
  return {
    endX,
    endY,
    points,
    dx,
    dy
  };
};

/**
 * Update ball position based on current trajectory
 */
export const updateBallPosition = (
  currentPosition: { x: number; y: number },
  trajectory: BallTrajectory
): { x: number; y: number } => {
  // Simple linear movement towards target with easing
  const { endX, endY, dx = 0, dy = 0 } = trajectory;
  
  // Calculate distance to target
  const distX = endX - currentPosition.x;
  const distY = endY - currentPosition.y;
  const dist = Math.sqrt(distX * distX + distY * distY);
  
  // If very close to target, generate a new trajectory
  if (dist < 1) {
    return { x: endX, y: endY };
  }
  
  // Move towards target with easing
  const easing = 0.05;
  const newX = currentPosition.x + distX * easing;
  const newY = currentPosition.y + distY * easing;
  
  return { x: newX, y: newY };
};
