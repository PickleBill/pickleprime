
import { useState, useEffect, useRef } from 'react';
import { BallState } from '../../types';
import { ballConfig } from '../../constants/courtConfig';

export const useBallTrail = () => {
  // Store previous positions for trail effect with extended history
  const [positionHistory, setPositionHistory] = useState<{x: number, y: number, opacity: number}[]>([]);
  
  // Last updated timestamp for velocity calculation
  const [lastUpdate, setLastUpdate] = useState(0);
  const [trailVelocity, setTrailVelocity] = useState(0);
  
  // Previous position reference for distance calculation
  const prevPositionRef = useRef<{x: number, y: number} | null>(null);
  
  // Update position history when ball moves
  const updateTrail = (ballPosition: BallState) => {
    const now = performance.now();
    let velocity = 0;
    
    // Calculate velocity based on time and distance
    if (lastUpdate > 0 && prevPositionRef.current) {
      const timeDelta = now - lastUpdate;
      const prevPos = prevPositionRef.current;
      const dx = ballPosition.x - prevPos.x;
      const dy = ballPosition.y - prevPos.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Calculate velocity (scaled for more dramatic effect)
      velocity = (distance / timeDelta) * 1200;
    }
    
    // Update refs for next calculation
    setLastUpdate(now);
    prevPositionRef.current = { x: ballPosition.x, y: ballPosition.y };
    
    // Update velocity state with smoothing
    setTrailVelocity(prev => {
      const smoothingFactor = 0.7; // Higher = more smoothing
      return prev * smoothingFactor + velocity * (1 - smoothingFactor);
    });
    
    // Update position history with the new position
    setPositionHistory(prev => {
      // Dynamic trail length based on velocity
      const baseTrailLength = ballConfig.trailLength;
      const velocityFactor = Math.min(1, trailVelocity / 100);
      const trailLength = Math.floor(baseTrailLength + velocityFactor * 8);
      
      // Add current position to history
      const newHistory = [
        { 
          x: ballPosition.x, 
          y: ballPosition.y, 
          opacity: 1.0 
        },
        ...prev.slice(0, trailLength - 1)
      ];
      
      // Enhanced dynamic opacity for electric trail effect
      return newHistory.map((pos, index) => ({
        ...pos,
        opacity: Math.max(0.1, 1 - ((index / trailLength) * (0.7 + (velocity * 0.005))))
      }));
    });
  };
  
  return { positionHistory, updateTrail, trailVelocity };
};

export default useBallTrail;
