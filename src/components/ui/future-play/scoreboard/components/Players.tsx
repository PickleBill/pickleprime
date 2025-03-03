
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
import React, { useEffect } from 'react';
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
  
  // Update trail positions when player positions change
  useEffect(() => {
    updateTrails('player1', player1);
    updateTrails('player2', player2);
    updateTrails('player3', player3);
    updateTrails('player4', player4);
  }, [player1, player2, player3, player4]);
  
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
