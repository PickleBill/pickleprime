
import { BallState, BallTrajectory } from "../../types";
import { courtBoundaries } from "../../constants/courtConfig";

// Calculate ball's next position and handle boundary bounces
export function calculateNextBallPosition(
  position: BallState, 
  direction: { x: number, y: number },
  setBallDirection: (dir: { x: number, y: number }) => void,
  setBallVelocity: (vel: number) => void,
  setBallTrajectory: (traj: BallTrajectory) => void
): BallState {
  const nextX = position.x + direction.x;
  const nextY = position.y + direction.y;
  
  let newDirX = direction.x;
  let newDirY = direction.y;
  let hitBoundary = false;
  
  // Bounce off left and right court boundaries (side walls)
  if (nextX <= courtBoundaries.left || nextX >= courtBoundaries.right) {
    newDirX = -direction.x;
    hitBoundary = true;
    
    // Add some slight randomness to the y direction when hitting side walls
    // to make the ball movement more natural
    newDirY = direction.y + (Math.random() * 1 - 0.5);
    // Keep y direction within reasonable bounds
    newDirY = Math.max(-2, Math.min(2, newDirY));
  }
  
  // Bounce off top and bottom court boundaries (baseline)
  if (nextY <= courtBoundaries.top || nextY >= courtBoundaries.bottom) {
    newDirY = -direction.y;
    hitBoundary = true;
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
  
  // Update direction when hitting a boundary
  if (hitBoundary) {
    // Adjust velocity after bouncing
    if (Math.random() < 0.3) {
      // Keep velocity in a good range for a visible but not too fast ball
      setBallVelocity(Math.floor(Math.random() * 10) + 35);
    }
    
    setBallDirection({ x: newDirX, y: newDirY });
  }
  
  // Update trajectory
  setBallTrajectory({
    endX: nextX + newDirX * 5,
    endY: nextY + newDirY * 5,
    dx: newDirX,
    dy: newDirY
  });
  
  // Return the new position with the required properties for BallState
  return { 
    x: Math.max(courtBoundaries.left, Math.min(courtBoundaries.right, nextX)),
    y: Math.max(courtBoundaries.top, Math.min(courtBoundaries.bottom, nextY)),
    z: position.z,
    rotation: position.rotation
  };
}

// Create random direction changes to simulate player hits
export function createRandomDirectionChange(): { x: number, y: number } {
  // Ensure the ball primarily moves horizontally (left to right and back)
  // with a stronger x component
  const dirX = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 2 + 2); // Stronger horizontal movement
  const dirY = (Math.random() * 2 - 1); // Smaller vertical component
  return { x: dirX, y: dirY };
}
