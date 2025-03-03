
import { useState, useEffect, useRef } from 'react';
import { BallState } from '../../types';
import { ballConfig } from '../../constants/courtConfig';

export const useBallTrail = () => {
  // Store previous positions for electric trail effect
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
      velocity = (distance / timeDelta) * 1500; // Higher multiplier for more dramatic effect
    }
    
    // Update refs for next calculation
    setLastUpdate(now);
    prevPositionRef.current = { x: ballPosition.x, y: ballPosition.y };
    
    // Update velocity state with smoothing
    setTrailVelocity(prev => {
      const smoothingFactor = 0.6; // Less smoothing for more responsive changes
      return prev * smoothingFactor + velocity * (1 - smoothingFactor);
    });
    
    // Update position history with the new position
    setPositionHistory(prev => {
      // Dynamic trail length based on velocity
      const baseTrailLength = ballConfig.trailLength;
      const velocityFactor = Math.min(1, trailVelocity / 100);
      const trailLength = Math.floor(baseTrailLength + velocityFactor * 10); // Longer trails when moving fast
      
      // Add current position to history
      const newHistory = [
        { 
          x: ballPosition.x, 
          y: ballPosition.y, 
          opacity: 1.0 
        },
        ...prev.slice(0, trailLength - 1)
      ];
      
      // Enhanced electric trail effect
      return newHistory.map((pos, index) => {
        const normalizedIndex = index / trailLength;
        // Electric effect - sharper falloff with occasional "pulses"
        const electricEffect = Math.pow(1 - normalizedIndex, 1.5);
        
        // Add some random variation for positions beyond the first one
        const jitter = index > 0 ? (Math.random() * 0.15) - 0.075 : 0;
        
        return {
          ...pos,
          // More electric-style trail with non-linear falloff and jitter
          opacity: Math.max(0.1, electricEffect * (1.0 + jitter))
        };
      });
    });
  };
  
  return { positionHistory, updateTrail, trailVelocity };
};

export default useBallTrail;
