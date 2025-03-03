
/**
 * Players Component
 * 
 * Renders player silhouettes on the court with:
 * - Team-based color coding
 * - Player position and rotation
 * - Glow effects for better visibility
 * - Player labels
 * - Animation trails for movement
 * 
 * Uses SVG silhouettes for player representation.
 */
import React, { useEffect, useRef } from 'react';
import { Position } from '../types';
import PlayerContainer from './player/PlayerContainer';
import PlayerTrail from './player/PlayerTrail';
import { usePlayerTrails } from './player/usePlayerTrails';

interface PlayersProps {
  player1: Position;
  player2: Position;
  player3: Position;
  player4: Position;
}

const Players: React.FC<PlayersProps> = ({
  player1,
  player2,
  player3,
  player4
}) => {
  // Use custom hook for trail positions
  const { trailPositions, updateTrails } = usePlayerTrails();
  
  // Use refs to track previous positions to avoid unnecessary updates
  const prevPositionsRef = useRef({
    player1: { x: 0, y: 0 },
    player2: { x: 0, y: 0 },
    player3: { x: 0, y: 0 },
    player4: { x: 0, y: 0 }
  });
  
  // Update trail positions when player positions change significantly
  useEffect(() => {
    const positions = { player1, player2, player3, player4 };
    const prevPositions = prevPositionsRef.current;
    
    // For each player, only update trails if position changed by a minimum threshold
    // This reduces the number of state updates
    const threshold = 0.5; // Minimum movement threshold to trigger an update
    
    Object.entries(positions).forEach(([playerId, position]) => {
      const prevPos = prevPositions[playerId as keyof typeof prevPositions];
      const dx = Math.abs(position.x - prevPos.x);
      const dy = Math.abs(position.y - prevPos.y);
      
      // Only update if moved more than threshold
      if (dx > threshold || dy > threshold) {
        updateTrails(playerId, position);
        // Update reference with current position
        prevPositions[playerId as keyof typeof prevPositions] = { ...position };
      }
    });
  }, [player1.x, player1.y, player2.x, player2.y, player3.x, player3.y, player4.x, player4.y, updateTrails]);
  
  return (
    <>
      {/* Render trails first for each player */}
      <PlayerTrail trails={trailPositions.player1} teamId={1} />
      <PlayerTrail trails={trailPositions.player2} teamId={1} />
      <PlayerTrail trails={trailPositions.player3} teamId={2} />
      <PlayerTrail trails={trailPositions.player4} teamId={2} />
      
      {/* Render player containers with silhouettes */}
      {/* Team 1 (Green) on left side */}
      <PlayerContainer position={player1} teamId={1} playerLabel="P1" playerIndex={0} />
      <PlayerContainer position={player2} teamId={1} playerLabel="P2" playerIndex={1} />
      
      {/* Team 2 (Blue) on right side */}
      <PlayerContainer position={player3} teamId={2} playerLabel="P3" playerIndex={0} />
      <PlayerContainer position={player4} teamId={2} playerLabel="P4" playerIndex={1} />
    </>
  );
};

export default Players;
