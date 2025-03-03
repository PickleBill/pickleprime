
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
    
    // REDUCED threshold for more responsive trails and more trail visibility
    const minDistance = 0.1; // Lower threshold for more visible trails (reduced from 0.15)
    const minTimeDelta = 50; // Lower time between updates for more responsive trails (reduced from 70)
    
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
        
        // Dynamic trail length based on velocity - INCREASED for more visible trails
        const baseTrailLength = 6; // Increased from 5
        const velocityFactor = Math.min(1, velocity / 8);
        const trailLength = Math.floor(baseTrailLength + velocityFactor * 6); // Increased from 4
        
        // Add new position with full opacity
        currentTrails.unshift({ x: position.x, y: position.y, opacity: 0.98 }); // Increased from 0.95
        
        // Create new trail with enhanced electric-like effect
        return {
          ...prev,
          [playerId]: currentTrails
            .slice(0, trailLength)
            .map((pos, index) => {
              // Create more electric-like opacity falloff (adjusted)
              const normalizedIndex = index / trailLength;
              const electricEffect = Math.pow(1 - normalizedIndex, 1.6); // Adjusted from 1.8
              
              // Add stronger random variation for more "electric" effect
              const jitter = index > 0 ? (Math.random() * 0.15) - 0.075 : 0; // Increased from 0.1/-0.05
              
              return { 
                ...pos, 
                // Enhanced electric-style falloff
                opacity: Math.max(0.15, 0.98 * electricEffect + jitter) // Increased base and floor
              };
            })
        };
      });
    }
  }, []);
  
  return { trailPositions, updateTrails };
};

export default usePlayerTrails;
