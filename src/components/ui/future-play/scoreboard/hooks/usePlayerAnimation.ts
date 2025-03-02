
import { useCallback } from 'react';
import { PlayerPosition } from '../types';

// Animation utility function for player movement
const usePlayerAnimation = () => {
  const animatePlayers = useCallback((props: {
    positions: PlayerPosition[];
    ballPosition: { x: number; y: number; };
  }, deltaTime: number) => {
    const { positions, ballPosition } = props;
    
    // Create a copy of all positions to avoid directly mutating state
    const newPositions = positions.map(position => {
      const newPos = { ...position };
      
      // If the player has target coordinates, move toward them
      if (typeof newPos.targetX === 'number' && typeof newPos.targetY === 'number') {
        const dx = newPos.targetX - newPos.x;
        const dy = newPos.targetY - newPos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > 0.5) {
          // Move toward target at a rate proportional to distance
          const speed = Math.min(distance * 0.1, 1) * (deltaTime / 100);
          newPos.x += dx * speed;
          newPos.y += dy * speed;
          
          // Update rotation to face direction of movement
          if (dx !== 0 || dy !== 0) {
            newPos.rotation = Math.atan2(dy, dx) * (180 / Math.PI);
          }
        } else {
          // Target reached, clear it
          newPos.targetX = undefined;
          newPos.targetY = undefined;
        }
      }
      
      return newPos;
    });
    
    return newPositions;
  }, []);
  
  return animatePlayers;
};

export default usePlayerAnimation;
