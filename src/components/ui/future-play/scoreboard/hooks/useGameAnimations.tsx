
import { useState, useEffect } from "react";
import { useBallAnimation } from "./useBallAnimation";
import { usePlayerAnimation } from "./usePlayerAnimation";
import { PlayerPosition, BallTrajectory } from "../types";

export const useGameAnimations = (showHighlight: boolean = false) => {
  // Ball animation state
  const {
    ballPosition,
    ballTrajectory,
    ballVelocity
  } = useBallAnimation(showHighlight);
  
  // Player positions using the hook
  const {
    player1,
    player2,
    player3,
    player4
  } = usePlayerAnimation(ballPosition, showHighlight);
  
  return {
    ballPosition,
    ballTrajectory,
    ballVelocity,
    player1,
    player2,
    player3,
    player4
  };
};
