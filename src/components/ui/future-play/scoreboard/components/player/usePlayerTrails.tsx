
import { useState, useCallback, useRef } from 'react';
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
  
  // Last position refs to prevent unnecessary updates
  const lastPositionsRef = useRef<{
    [key: string]: { x: number; y: number; timestamp: number; velocity: number };
  }>({
    player1: { x: 0, y: 0, timestamp: 0, velocity: 0 },
    player2: { x: 0, y: 0, timestamp: 0, velocity: 0 },
    player3: { x: 0, y: 0, timestamp: 0, velocity: 0 },
    player4: { x: 0, y: 0, timestamp: 0, velocity: 0 }
  });
  
  // Update trail positions based on player position changes - memoized with useCallback
  const updateTrails = useCallback((playerId: string, position: Position) => {
    const now = performance.now();
    const lastPosition = lastPositionsRef.current[playerId];
    
    // Calculate distance moved
    const dx = position.x - lastPosition.x;
    const dy = position.y - lastPosition.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Time since last update
    const timeDelta = now - lastPosition.timestamp;
    
    // Only update if moved more than threshold distance or enough time has passed
    const minDistance = 0.15; // Lower threshold for more responsive trails
    const minTimeDelta = 70; // Lower time between updates for more responsive trails
    
    if (distance > minDistance || timeDelta > minTimeDelta) {
      // Calculate velocity for dynamic effects
      const velocity = timeDelta > 0 ? distance / (timeDelta / 1000) : 0;
      
      // Update last position ref with new position and velocity
      lastPositionsRef.current[playerId] = {
        x: position.x,
        y: position.y,
        timestamp: now,
        velocity: velocity
      };
      
      setTrailPositions(prev => {
        // Get current trails
        const currentTrails = [...prev[playerId]];
        
        // Dynamic trail length based on velocity
        const baseTrailLength = 5;
        const velocityFactor = Math.min(1, velocity / 8);
        const trailLength = Math.floor(baseTrailLength + velocityFactor * 4);
        
        // Add new position with full opacity
        currentTrails.unshift({ x: position.x, y: position.y, opacity: 0.95 });
        
        // Create new trail with dynamic electric-like effect
        return {
          ...prev,
          [playerId]: currentTrails
            .slice(0, trailLength)
            .map((pos, index) => {
              // Create more electric-like opacity falloff (less linear)
              const normalizedIndex = index / trailLength;
              const electricEffect = Math.pow(1 - normalizedIndex, 1.8);
              
              // Add slight random variation for "electric" effect
              const jitter = index > 0 ? (Math.random() * 0.1) - 0.05 : 0;
              
              return { 
                ...pos, 
                // Electric-style falloff with some randomness
                opacity: Math.max(0.1, 0.95 * electricEffect + jitter)
              };
            })
        };
      });
    }
  }, []);
  
  return { trailPositions, updateTrails };
};

export default usePlayerTrails;
