import { BallState, BallTrajectory, Position } from '../../types';

// Calculate ball movement based on trajectory
export const animateBall = (currentState: BallState, trajectory: BallTrajectory) => {
  // Simple animation logic for demo purposes
  let newX = currentState.x;
  let newY = currentState.y;
  let velocity = 0;
  
  // If trajectory has direction vectors, use them
  if (trajectory.dx !== undefined && trajectory.dy !== undefined) {
    newX += trajectory.dx;
    newY += trajectory.dy;
    velocity = Math.sqrt(trajectory.dx * trajectory.dx + trajectory.dy * trajectory.dy);
  } 
  // Otherwise use trajectory points if available
  else if (trajectory.points.length > 1) {
    const nextPoint = trajectory.points[1];
    const dx = nextPoint.x - currentState.x;
    const dy = nextPoint.y - currentState.y;
    
    // Move a fraction of the way to the next point
    newX += dx * 0.1;
    newY += dy * 0.1;
    
    velocity = Math.sqrt(dx * dx + dy * dy) * 0.1;
  }
  
  // Court boundaries (simplified)
  const courtMinX = 50;
  const courtMaxX = 250;
  const courtMinY = 50;
  const courtMaxY = 150;
  
  // Bounce off court boundaries
  if (newX < courtMinX) {
    newX = courtMinX + (courtMinX - newX);
  } else if (newX > courtMaxX) {
    newX = courtMaxX - (newX - courtMaxX);
  }
  
  if (newY < courtMinY) {
    newY = courtMinY + (courtMinY - newY);
  } else if (newY > courtMaxY) {
    newY = courtMaxY - (newY - courtMaxY);
  }
  
  // Calculate rotation based on direction
  const rotation = trajectory.dx !== undefined && trajectory.dy !== undefined
    ? Math.atan2(trajectory.dy, trajectory.dx) * (180 / Math.PI)
    : currentState.rotation || 0;
  
  // Return the new position and velocity
  return {
    newPosition: {
      x: newX,
      y: newY,
      rotation
    },
    velocity
  };
};

// Generate a random ball trajectory for demo purposes
export const generateRandomTrajectory = (startX: number, startY: number): BallTrajectory => {
  // Random direction
  const angle = Math.random() * Math.PI * 2;
  const speed = 1 + Math.random() * 4;
  const dx = Math.cos(angle) * speed;
  const dy = Math.sin(angle) * speed;
  
  // End position after applying direction vector
  const endX = startX + dx * 20;
  const endY = startY + dy * 20;
  
  // Generate a valid BallTrajectory
  return {
    points: [
      { x: startX, y: startY },
      { x: endX, y: endY }
    ],
    type: Math.random() > 0.7 ? "lob" : Math.random() > 0.4 ? "drive" : "smash",
    speed: speed,
    dx: dx,
    dy: dy,
    endX: endX,
    endY: endY
  };
};
