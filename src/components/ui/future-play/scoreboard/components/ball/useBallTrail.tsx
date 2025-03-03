
import { useState, useEffect } from 'react';
import { BallState } from '../../types';
import { ballConfig } from '../../constants/courtConfig';

export const useBallTrail = () => {
  // Store previous positions for trail effect with extended history
  const [positionHistory, setPositionHistory] = useState<{x: number, y: number, opacity: number}[]>([]);
  
  // Last updated timestamp for velocity calculation
  const [lastUpdate, setLastUpdate] = useState(0);
  const [trailVelocity, setTrailVelocity] = useState(0);
  
  // Update position history when ball moves
  const updateTrail = (ballPosition: BallState) => {
    const now = performance.now();
    let velocity = 0;
    
    // Calculate velocity based on time and distance
    if (lastUpdate > 0 && positionHistory.length > 0) {
      const timeDelta = now - lastUpdate;
      const lastPos = positionHistory[0];
      const dx = ballPosition.x - lastPos.x;
      const dy = ballPosition.y - lastPos.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      velocity = (distance / timeDelta) * 1000; // Scale for more dramatic effect
    }
    
    setLastUpdate(now);
    setTrailVelocity(velocity);
    
    setPositionHistory(prev => {
      // More positions for longer trail at higher velocities
      const trailLength = Math.min(ballConfig.trailLength + Math.floor(velocity / 5), 12);
      
      // Add current position to history
      const newHistory = [
        { 
          x: ballPosition.x, 
          y: ballPosition.y, 
          opacity: 1.0 
        },
        ...prev.slice(0, trailLength - 1)
      ];
      
      // Dynamic opacity based on velocity and position in trail
      return newHistory.map((pos, index) => ({
        ...pos,
        opacity: Math.max(0.1, 1 - ((index / (trailLength)) * (0.8 + (velocity * 0.01))))
      }));
    });
  };
  
  return { positionHistory, updateTrail, trailVelocity };
};

export default useBallTrail;
