
import { useState, useEffect } from 'react';
import { BallState } from '../../types';
import { ballConfig } from '../../constants/courtConfig';

export const useBallTrail = () => {
  // Store previous positions for trail effect
  const [positionHistory, setPositionHistory] = useState<{x: number, y: number, opacity: number}[]>([]);
  
  // Update position history when ball moves
  const updateTrail = (ballPosition: BallState) => {
    setPositionHistory(prev => {
      // Add current position to history
      const newHistory = [
        { 
          x: ballPosition.x, 
          y: ballPosition.y, 
          opacity: 1.0 
        },
        ...prev.slice(0, ballConfig.trailLength - 1)
      ];
      
      // Update opacity of each trail segment based on its age
      return newHistory.map((pos, index) => ({
        ...pos,
        opacity: Math.max(0.1, 1 - (index * (0.9 / ballConfig.trailLength)))
      }));
    });
  };
  
  return { positionHistory, updateTrail };
};

export default useBallTrail;
