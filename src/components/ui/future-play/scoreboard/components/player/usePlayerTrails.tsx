import { useState, useEffect } from 'react';
import { Position } from '../../types';

export const usePlayerTrails = () => {
  // Keep track of previous positions for trails
  const [trailPositions, setTrailPositions] = useState<{
    [key: string]: { x: number; y: number; opacity: number }[];
  }>({
    player1: [],
    player2: [],
    player3: [],
    player4: []
  });
  
  // Update trail positions based on player position changes
  const updateTrails = (playerId: string, position: Position) => {
    setTrailPositions(prev => {
      // Get current trails and add new position
      const currentTrails = [...prev[playerId]];
      
      // Add new position with full opacity
      currentTrails.unshift({ x: position.x, y: position.y, opacity: 0.9 });
      
      // Limit trail length and decrease opacity for older positions
      return {
        ...prev,
        [playerId]: currentTrails
          .slice(0, 5)
          .map((pos, index) => ({ 
            ...pos, 
            opacity: Math.max(0.1, 0.9 - index * 0.2) 
          }))
      };
    });
  };
  
  return { trailPositions, updateTrails };
};
