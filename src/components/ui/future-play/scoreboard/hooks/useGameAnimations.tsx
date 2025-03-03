
import React, { useCallback, useEffect, useState } from "react";
import { useBallMovement } from "./movement/useBallMovement";
import { usePlayerMovement } from "./movement/usePlayerMovement";
import { useAnimationManager } from "./useAnimationManager";

export const useGameAnimations = (isHighlightActive: boolean = false) => {
  // Use our custom hooks for ball and player movement
  const { 
    ballPosition, 
    ballTrajectory, 
    ballVelocity, 
    updateBallPosition 
  } = useBallMovement(isHighlightActive);
  
  const { 
    player1, 
    player2, 
    player3, 
    player4, 
    poseCycleCounter,
    updatePlayerPositions,
    updatePoseCycle,
    activePlayers
  } = usePlayerMovement(ballPosition);
  
  // Animation callback function
  const animateGame = useCallback((deltaTime: number) => {
    // Update ball position
    updateBallPosition(deltaTime);
    
    // Update player positions
    updatePlayerPositions(deltaTime);
  }, [updateBallPosition, updatePlayerPositions]);
  
  // Use animation manager
  const { registerInterval } = useAnimationManager(isHighlightActive, animateGame);
  
  // Set up pose change interval
  useEffect(() => {
    if (isHighlightActive) return;
    
    // Set up pose change interval (every 2-5 seconds)
    return registerInterval(updatePoseCycle, 2000 + Math.random() * 3000);
  }, [isHighlightActive, registerInterval, updatePoseCycle]);
  
  return {
    ballPosition,
    ballTrajectory,
    ballVelocity,
    player1,
    player2,
    player3,
    player4,
    poseCycleCounter,
    activePlayers
  };
};

export default useGameAnimations;
