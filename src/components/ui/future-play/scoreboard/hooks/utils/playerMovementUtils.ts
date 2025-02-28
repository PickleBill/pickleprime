
import { PlayerPosition, Position } from "../../types";
import { courtBoundaries } from "../../constants/courtConfig";

// Move player towards target with given speed
export function movePlayerTowardsTarget(
  player: PlayerPosition, 
  moveSpeed: number
): PlayerPosition {
  const dirX = player.targetX - player.x;
  const dirY = player.targetY - player.y;
  const dist = Math.sqrt(dirX * dirX + dirY * dirY);
  
  if (dist > 1) {
    return {
      ...player,
      x: player.x + (dirX / dist) * moveSpeed,
      y: player.y + (dirY / dist) * moveSpeed
    };
  }
  return player;
}

// Set targets for players based on ball position
export function setPlayerTargetsBasedOnBall(
  ballPosition: Position,
  setPlayer1: (fn: (prev: PlayerPosition) => PlayerPosition) => void,
  setPlayer2: (fn: (prev: PlayerPosition) => PlayerPosition) => void,
  setPlayer3: (fn: (prev: PlayerPosition) => PlayerPosition) => void,
  setPlayer4: (fn: (prev: PlayerPosition) => PlayerPosition) => void
): void {
  // If ball is on left side (player 1 & 3 side)
  if (ballPosition.x < courtBoundaries.midLine) {
    // Set target for player 1 or 3 to intercept based on position
    if (ballPosition.y < courtBoundaries.net.top) {
      setPlayer1(prev => ({ ...prev, targetX: ballPosition.x + 5, targetY: ballPosition.y + 5 }));
    } else {
      setPlayer3(prev => ({ ...prev, targetX: ballPosition.x + 5, targetY: ballPosition.y - 5 }));
    }
  } 
  // If ball is on right side (player 2 & 4 side)
  else {
    // Set target for player 2 or 4 to intercept based on position
    if (ballPosition.y < courtBoundaries.net.top) {
      setPlayer2(prev => ({ ...prev, targetX: ballPosition.x - 5, targetY: ballPosition.y + 5 }));
    } else {
      setPlayer4(prev => ({ ...prev, targetX: ballPosition.x - 5, targetY: ballPosition.y - 5 }));
    }
  }
}

// Generate random court positions for players
export function generateRandomPlayerPositions(
  setPlayer1: (fn: (prev: PlayerPosition) => PlayerPosition) => void,
  setPlayer2: (fn: (prev: PlayerPosition) => PlayerPosition) => void,
  setPlayer3: (fn: (prev: PlayerPosition) => PlayerPosition) => void,
  setPlayer4: (fn: (prev: PlayerPosition) => PlayerPosition) => void
): void {
  // Player 1 - Front left
  setPlayer1(prev => ({
    ...prev,
    targetX: Math.random() * 20 + 15, // 15-35%
    targetY: Math.random() * 20 + 20, // 20-40%
  }));
  
  // Player 2 - Front right
  setPlayer2(prev => ({
    ...prev,
    targetX: Math.random() * 20 + 65, // 65-85%
    targetY: Math.random() * 20 + 20, // 20-40%
  }));
  
  // Player 3 - Back left
  setPlayer3(prev => ({
    ...prev,
    targetX: Math.random() * 20 + 15, // 15-35%
    targetY: Math.random() * 20 + 60, // 60-80%
  }));
  
  // Player 4 - Back right
  setPlayer4(prev => ({
    ...prev,
    targetX: Math.random() * 20 + 65, // 65-85%
    targetY: Math.random() * 20 + 60, // 60-80%
  }));
}
