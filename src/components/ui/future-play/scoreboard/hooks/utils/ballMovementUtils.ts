import { Position, BallTrajectory } from "../../types";
import { courtBoundaries } from "../../constants/courtConfig";

// Calculate ball's next position and handle boundary bounces
export function calculateNextBallPosition(
  position: Position, 
  direction: { x: number, y: number },
  setBallDirection: (dir: { x: number, y: number }) => void,
  setBallVelocity: (vel: number) => void,
  setBallTrajectory: (traj: BallTrajectory) => void
): Position {
  const nextX = position.x + direction.x;
  const nextY = position.y + direction.y;
  
  let newDirX = direction.x;
  let newDirY = direction.y;
  let hitBoundary = false;
  
  // Bounce off court boundaries with more realistic angles
  if (nextX <= courtBoundaries.left || nextX >= courtBoundaries.right) {
    newDirX = -direction.x;
    hitBoundary = true;
    
    // Add some randomness to the y direction when hitting side walls
    if (Math.random() > 0.5) {
      newDirY = direction.y + (Math.random() * 2 - 1);
      // Keep y direction within reasonable bounds
      newDirY = Math.max(-4, Math.min(4, newDirY));
    }
  }
  
  if (nextY <= courtBoundaries.top || nextY >= courtBoundaries.bottom) {
    newDirY = -direction.y;
    hitBoundary = true;
    
    // Add some randomness to the x direction when hitting top/bottom walls
    if (Math.random() > 0.5) {
      newDirX = direction.x + (Math.random() * 2 - 1);
      // Keep x direction within reasonable bounds
      newDirX = Math.max(-4, Math.min(4, newDirX));
    }
  }
  
  // Special case for net hits - bounce with more dramatic angle change
  if ((position.y < courtBoundaries.net.top && nextY >= courtBoundaries.net.top) || 
      (position.y > courtBoundaries.net.bottom && nextY <= courtBoundaries.net.bottom)) {
    if (nextX > 40 && nextX < 60) {
      newDirY = -direction.y * 1.2; // Stronger vertical bounce
      newDirX = direction.x * 0.8; // Slight reduction in horizontal momentum
      hitBoundary = true;
    }
  }
  
  // Update direction with occasional speed variations
  if (hitBoundary) {
    // Occasionally change ball speed after bouncing
    if (Math.random() < 0.3) {
      setBallVelocity(Math.floor(Math.random() * 15) + 30);
      
      // Apply a more dramatic direction change 20% of the time
      if (Math.random() < 0.2) {
        newDirX = newDirX * (0.8 + Math.random() * 0.4); // 0.8-1.2 multiplier
        newDirY = newDirY * (0.8 + Math.random() * 0.4); // 0.8-1.2 multiplier
      }
    }
    
    setBallDirection({ x: newDirX, y: newDirY });
  }
  
  const newPos = { 
    x: Math.max(courtBoundaries.left, Math.min(courtBoundaries.right, nextX)),
    y: Math.max(courtBoundaries.top, Math.min(courtBoundaries.bottom, nextY))
  };
  
  // Update trajectory
  setBallTrajectory({
    endX: newPos.x + newDirX * 5,
    endY: newPos.y + newDirY * 5
  });
  
  return newPos;
}

// Create random direction changes to simulate player hits
export function createRandomDirectionChange(): { x: number, y: number } {
  const newX = (Math.random() * 6 - 3);
  const newY = (Math.random() * 6 - 3);
  return { x: newX, y: newY };
}
