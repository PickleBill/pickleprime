
import { useState, useEffect } from 'react';
import { Position, PlayerPosition } from '../types';
import { animatePlayer } from './utils/playerMovementUtils';

// Custom hook for player animation
const usePlayerAnimation = (initialPositions: {
  player1: Position,
  player2: Position,
  player3: Position,
  player4: Position
}) => {
  const [player1, setPlayer1] = useState<PlayerPosition>({ ...initialPositions.player1, rotation: 0, targetX: undefined, targetY: undefined });
  const [player2, setPlayer2] = useState<PlayerPosition>({ ...initialPositions.player2, rotation: 0, targetX: undefined, targetY: undefined });
  const [player3, setPlayer3] = useState<PlayerPosition>({ ...initialPositions.player3, rotation: 0, targetX: undefined, targetY: undefined });
  const [player4, setPlayer4] = useState<PlayerPosition>({ ...initialPositions.player4, rotation: 0, targetX: undefined, targetY: undefined });

  // Effect for animating players
  useEffect(() => {
    const interval = setInterval(() => {
      // Update player positions with random movement
      const updatePlayer = (player: PlayerPosition) => {
        // Random position change
        const randomX = player.x + (Math.random() - 0.5) * 10;
        const randomY = player.y + (Math.random() - 0.5) * 5;
        
        // Update player with random target
        return animatePlayer({
          ...player,
          targetX: randomX,
          targetY: randomY
        });
      };
      
      setPlayer1(updatePlayer(player1));
      setPlayer2(updatePlayer(player2));
      setPlayer3(updatePlayer(player3));
      setPlayer4(updatePlayer(player4));
    }, 1000); // Move players randomly every second
    
    return () => clearInterval(interval);
  }, [player1, player2, player3, player4]);

  return { player1, player2, player3, player4 };
};

export default usePlayerAnimation;
