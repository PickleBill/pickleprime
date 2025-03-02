
import React, { useState, useEffect } from "react";
import { Position, BallState, BallTrajectory, PlayerPosition } from "../types";
import useBallAnimation from "./useBallAnimation";
import usePlayerAnimation from "./usePlayerAnimation";

export const useGameAnimations = (isHighlightActive: boolean = false) => {
  // Initialize ball position, trajectory, and velocity
  const [ballPosition, setBallPosition] = useState<BallState>({
    x: 50,
    y: 50,
    z: 0
  });
  
  const [ballTrajectory, setBallTrajectory] = useState<BallTrajectory>({
    points: [],
    type: "drive",
    speed: 10,
    stage: "rising",
    bounces: 0
  });
  
  const [ballVelocity, setBallVelocity] = useState(0);
  
  // Initialize player positions
  const [player1, setPlayer1] = useState<PlayerPosition>({ x: 25, y: 25, rotation: 0 });
  const [player2, setPlayer2] = useState<PlayerPosition>({ x: 75, y: 25, rotation: 180 });
  const [player3, setPlayer3] = useState<PlayerPosition>({ x: 25, y: 75, rotation: 0 });
  const [player4, setPlayer4] = useState<PlayerPosition>({ x: 75, y: 75, rotation: 180 });
  
  // Use our animation hooks for ball and player movement
  const animateBall = useBallAnimation();
  const animatePlayers = usePlayerAnimation();
  
  // Animation frame effect
  useEffect(() => {
    if (isHighlightActive) return;
    
    let animationFrameId: number;
    let lastTimestamp = 0;
    
    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      
      // Animate ball
      const newBallState = animateBall({
        position: ballPosition,
        trajectory: ballTrajectory,
        velocity: ballVelocity
      }, deltaTime);
      
      setBallPosition(newBallState.position);
      setBallTrajectory(newBallState.trajectory);
      setBallVelocity(newBallState.velocity);
      
      // Animate players
      const newPlayerPositions = animatePlayers({
        positions: [player1, player2, player3, player4],
        ballPosition
      }, deltaTime);
      
      setPlayer1(newPlayerPositions[0]);
      setPlayer2(newPlayerPositions[1]);
      setPlayer3(newPlayerPositions[2]);
      setPlayer4(newPlayerPositions[3]);
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [
    isHighlightActive,
    ballPosition, 
    ballTrajectory, 
    ballVelocity,
    player1, 
    player2, 
    player3, 
    player4,
    animateBall,
    animatePlayers
  ]);
  
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

export default useGameAnimations;
