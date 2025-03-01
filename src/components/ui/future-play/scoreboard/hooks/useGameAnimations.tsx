
import { useState } from "react";
import { useBallAnimation } from "./useBallAnimation";
import { usePlayerAnimation } from "./usePlayerAnimation";

export function useGameAnimations(showHighlight: boolean) {
  // Use our modular hooks for player and ball animations
  const { player1, player2, player3, player4, setPlayer1, setPlayer2, setPlayer3, setPlayer4 } = 
    usePlayerAnimation(showHighlight);
  
  const { ballPosition, ballTrajectory, ballVelocity } = 
    useBallAnimation(
      showHighlight,
      setPlayer1,
      setPlayer2,
      setPlayer3,
      setPlayer4
    );

  return {
    ballPosition,
    ballTrajectory,
    ballVelocity,
    player1,
    player2,
    player3,
    player4
  };
}
