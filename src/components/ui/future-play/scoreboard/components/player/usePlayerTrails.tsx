
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
    [key: string]: { x: number; y: number; timestamp: number };
  }>({
    player1: { x: 0, y: 0, timestamp: 0 },
    player2: { x: 0, y: 0, timestamp: 0 },
    player3: { x: 0, y: 0, timestamp: 0 },
    player4: { x: 0, y: 0, timestamp: 0 }
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
    // This prevents excessive state updates that could lead to infinite loops
    const minDistance = 0.4; // Minimum movement threshold
    const minTimeDelta = 100; // Minimum time between updates (ms)
    
    if (distance > minDistance || timeDelta > minTimeDelta) {
      // Update last position ref
      lastPositionsRef.current[playerId] = {
        x: position.x,
        y: position.y,
        timestamp: now
      };
      
      // Calculate movement speed for dynamic trail effect
      const speed = timeDelta > 0 ? distance / (timeDelta / 1000) : 0;
      
      setTrailPositions(prev => {
        // Get current trails and add new position
        const currentTrails = [...prev[playerId]];
        
        // Dynamic trail length based on speed
        const baseTrailLength = 5;
        const speedFactor = Math.min(1, speed / 10);
        const trailLength = Math.floor(baseTrailLength + speedFactor * 3);
        
        // Add new position with full opacity
        currentTrails.unshift({ x: position.x, y: position.y, opacity: 0.9 });
        
        // Limit trail length and decrease opacity for older positions
        return {
          ...prev,
          [playerId]: currentTrails
            .slice(0, trailLength)
            .map((pos, index) => ({ 
              ...pos, 
              // Faster opacity falloff for faster movement
              opacity: Math.max(0.1, 0.9 - index * (0.15 + speedFactor * 0.05))
            }))
        };
      });
    }
  }, []);
  
  return { trailPositions, updateTrails };
};

export default usePlayerTrails;
