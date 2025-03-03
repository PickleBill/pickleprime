
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
      
      // Calculate velocity (scaled for more dramatic effect but SLOWED DOWN)
      velocity = (distance / timeDelta) * 1000; // Reduced from 1500 for slower effect
    }
    
    // Update refs for next calculation
    setLastUpdate(now);
    prevPositionRef.current = { x: ballPosition.x, y: ballPosition.y };
    
    // Update velocity state with smoothing
    setTrailVelocity(prev => {
      const smoothingFactor = 0.7; // More smoothing for less erratic changes (increased from 0.6)
      return prev * smoothingFactor + velocity * (1 - smoothingFactor);
    });
    
    // Update position history with the new position
    setPositionHistory(prev => {
      // Dynamic trail length based on velocity for more impressive electric effects
      const baseTrailLength = ballConfig.trailLength;
      const velocityFactor = Math.min(1, trailVelocity / 100);
      const dynamicTrailLength = Math.floor(baseTrailLength + velocityFactor * 10); // Increased for more impressive trails
      
      // Add current position to history
      const newHistory = [
        { 
          x: ballPosition.x, 
          y: ballPosition.y, 
          opacity: 1.0 
        },
        ...prev.slice(0, dynamicTrailLength - 1)
      ];
      
      // Enhanced electric trail effect with more varied fading
      return newHistory.map((pos, index) => {
        const normalizedIndex = index / dynamicTrailLength;
        // Electric effect - sharper falloff with occasional "pulses"
        const electricEffect = Math.pow(1 - normalizedIndex, 1.2);
        
        // Enhanced jitter and "energy pulses" for more electric appearance
        // More variance based on index position for a "pulsing" effect
        const pulse = Math.sin(index * 0.4) * 0.15;
        const jitter = index > 0 ? (Math.random() * 0.3) - 0.15 + pulse : 0;
        
        return {
          ...pos,
          // More electric-style trail with enhanced effect
          opacity: Math.max(0.18, electricEffect * (1.0 + jitter))
        };
      });
    });
  };
  
  return { positionHistory, updateTrail, trailVelocity };
};

export default useBallTrail;
