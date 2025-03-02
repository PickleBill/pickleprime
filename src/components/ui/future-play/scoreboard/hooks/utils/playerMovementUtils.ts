import { PlayerPosition } from '../../types';

// Animate player movement based on target position
export const animatePlayer = (player: PlayerPosition): PlayerPosition => {
  // If no target is set, return the player unchanged
  if (player.targetX === undefined || player.targetY === undefined) {
    return player;
  }
  
  // Calculate direction to target
  const dx = player.targetX - player.x;
  const dy = player.targetY - player.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  
  // If already close to target, return player unchanged
  if (distance < 0.1) {
    return {
      ...player,
      targetX: undefined,
      targetY: undefined
    };
  }
  
  // Move a fraction of the way to the target
  const moveSpeed = 0.2;
  const newX = player.x + (dx * moveSpeed);
  const newY = player.y + (dy * moveSpeed);
  
  // Calculate rotation based on movement direction
  const rotation = Math.atan2(dy, dx) * (180 / Math.PI);
  
  return {
    x: newX,
    y: newY,
    rotation,
    targetX: player.targetX,
    targetY: player.targetY
  };
};

// Generate random movement target for player
export const generateRandomMovement = (player: PlayerPosition, bounds: {
  minX: number,
  maxX: number,
  minY: number,
  maxY: number
}): PlayerPosition => {
  // Generate random target within bounds
  const targetX = bounds.minX + Math.random() * (bounds.maxX - bounds.minX);
  const targetY = bounds.minY + Math.random() * (bounds.maxY - bounds.minY);
  
  return {
    ...player,
    targetX,
    targetY
  };
};
