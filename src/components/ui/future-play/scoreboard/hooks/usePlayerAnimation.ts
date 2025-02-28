
import { useState, useEffect } from "react";
import { PlayerPosition } from "../types";
import { movePlayerTowardsTarget, generateRandomPlayerPositions } from "./utils/playerMovementUtils";

export function usePlayerAnimation(showHighlight: boolean) {
  // State for player positions - now with 4 players (2 per side)
  const [player1, setPlayer1] = useState<PlayerPosition>({ x: 25, y: 75, targetX: 25, targetY: 75 });
  const [player2, setPlayer2] = useState<PlayerPosition>({ x: 75, y: 25, targetX: 75, targetY: 25 });
  const [player3, setPlayer3] = useState<PlayerPosition>({ x: 15, y: 60, targetX: 15, targetY: 60 });
  const [player4, setPlayer4] = useState<PlayerPosition>({ x: 85, y: 40, targetX: 85, targetY: 40 });

  // Player movement animation - moves players toward their targets
  useEffect(() => {
    if (showHighlight) return;
    
    const moveInterval = setInterval(() => {
      // Player 1
      setPlayer1(prev => movePlayerTowardsTarget(prev, 1.2));
      
      // Player 2
      setPlayer2(prev => movePlayerTowardsTarget(prev, 1.2));
      
      // Player 3
      setPlayer3(prev => movePlayerTowardsTarget(prev, 1.1));
      
      // Player 4
      setPlayer4(prev => movePlayerTowardsTarget(prev, 1.1));
      
      // Occasionally set new random targets for players to simulate positioning
      if (Math.random() < 0.05) {
        // Set new random targets within their respective court areas
        generateRandomPlayerPositions(setPlayer1, setPlayer2, setPlayer3, setPlayer4);
      }
    }, 50);
    
    return () => clearInterval(moveInterval);
  }, [showHighlight]);

  return {
    player1,
    player2,
    player3,
    player4,
    setPlayer1,
    setPlayer2,
    setPlayer3,
    setPlayer4
  };
}
