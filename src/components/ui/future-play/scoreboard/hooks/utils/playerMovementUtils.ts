
import { PlayerPosition, Position } from "../../types";

interface MovementOptions {
  restrictedZone: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  reaction: number;
}

// Calculate new player positions based on ball position
export const calculatePlayerMovement = (
  player: PlayerPosition, 
  ball: Position, 
  options: MovementOptions
): PlayerPosition => {
  // Determine boundaries based on player's zone
  const boundaries = getZoneBoundaries(options.restrictedZone);
  
  // Calculate target position (where player wants to go)
  // Players will try to move toward the ball, but within their zone
  let targetX = Math.max(boundaries.minX, Math.min(boundaries.maxX, ball.x));
  let targetY = Math.max(boundaries.minY, Math.min(boundaries.maxY, ball.y));
  
  // Add natural variance so players don't perfectly track the ball
  targetX += (Math.random() - 0.5) * 5;
  targetY += (Math.random() - 0.5) * 5;
  
  // Keep within zone boundaries
  targetX = Math.max(boundaries.minX, Math.min(boundaries.maxX, targetX));
  targetY = Math.max(boundaries.minY, Math.min(boundaries.maxY, targetY));
  
  // Move player toward target with reaction delay
  const newX = player.x + (targetX - player.x) * options.reaction;
  const newY = player.y + (targetY - player.y) * options.reaction;
  
  return {
    x: newX,
    y: newY,
    targetX,
    targetY
  };
};

// Define court boundaries for each zone
function getZoneBoundaries(zone: string) {
  switch(zone) {
    case 'top-left':
      return { minX: 10, maxX: 40, minY: 10, maxY: 40 };
    case 'top-right':
      return { minX: 60, maxX: 90, minY: 10, maxY: 40 };
    case 'bottom-left':
      return { minX: 10, maxX: 40, minY: 60, maxY: 90 };
    case 'bottom-right':
      return { minX: 60, maxX: 90, minY: 60, maxY: 90 };
    default:
      return { minX: 0, maxX: 100, minY: 0, maxY: 100 };
  }
}

// Update all player positions
export const updatePlayerPositions = (
  player1: PlayerPosition, 
  player2: PlayerPosition, 
  player3: PlayerPosition, 
  player4: PlayerPosition, 
  ballPosition: Position,
  courtConfig: any
) => {
  // Apply movement logic to each player
  const newPlayer1 = calculatePlayerMovement(player1, ballPosition, {
    restrictedZone: 'top-left',
    reaction: 0.08
  });
  
  const newPlayer2 = calculatePlayerMovement(player2, ballPosition, {
    restrictedZone: 'top-right',
    reaction: 0.05
  });
  
  const newPlayer3 = calculatePlayerMovement(player3, ballPosition, {
    restrictedZone: 'bottom-left',
    reaction: 0.06
  });
  
  const newPlayer4 = calculatePlayerMovement(player4, ballPosition, {
    restrictedZone: 'bottom-right',
    reaction: 0.07
  });
  
  return { newPlayer1, newPlayer2, newPlayer3, newPlayer4 };
};
