
import { useState, useEffect } from "react";
import { calculatePlayerMovement } from "./utils/playerMovementUtils";
import { PlayerPosition, Position } from "../types";

export const usePlayerAnimation = (ballPosition: Position) => {
  // Initial positions of players
  const [player1, setPlayer1] = useState<PlayerPosition>({ x: 25, y: 75, targetX: 25, targetY: 75 });
  const [player2, setPlayer2] = useState<PlayerPosition>({ x: 75, y: 75, targetX: 75, targetY: 75 });
  const [player3, setPlayer3] = useState<PlayerPosition>({ x: 25, y: 25, targetX: 25, targetY: 25 });
  const [player4, setPlayer4] = useState<PlayerPosition>({ x: 75, y: 25, targetX: 75, targetY: 25 });
  
  // Update player positions based on ball position
  useEffect(() => {
    const interval = setInterval(() => {
      setPlayer1(prev => calculatePlayerMovement(prev, ballPosition, { restrictedZone: 'bottom-left', reaction: 0.03 }));
      setPlayer2(prev => calculatePlayerMovement(prev, ballPosition, { restrictedZone: 'bottom-right', reaction: 0.04 }));
      setPlayer3(prev => calculatePlayerMovement(prev, ballPosition, { restrictedZone: 'top-left', reaction: 0.02 }));
      setPlayer4(prev => calculatePlayerMovement(prev, ballPosition, { restrictedZone: 'top-right', reaction: 0.05 }));
    }, 30);
    
    return () => clearInterval(interval);
  }, [ballPosition]);
  
  return { player1, player2, player3, player4 };
};
