
import { useState, useEffect } from "react";
import { PlayerPosition, BallState, BallTrajectory } from "../types";
import { calculateNextBallPosition, createRandomDirectionChange } from "./utils/ballMovementUtils";
import { setPlayerTargetsBasedOnBall } from "./utils/playerMovementUtils";
import { courtBoundaries } from "../constants/courtConfig";

export function useBallAnimation(
  showHighlight: boolean,
  setPlayer1: (fn: (prev: PlayerPosition) => PlayerPosition) => void,
  setPlayer2: (fn: (prev: PlayerPosition) => PlayerPosition) => void,
  setPlayer3: (fn: (prev: PlayerPosition) => PlayerPosition) => void,
  setPlayer4: (fn: (prev: PlayerPosition) => PlayerPosition) => void
) {
  // Initialize ball on the left side with a right-moving trajectory
  const [ballPosition, setBallPosition] = useState<BallState>({ 
    x: 25, 
    y: 50, 
    z: 0, 
    rotation: 0 
  });
  const [ballDirection, setBallDirection] = useState({ x: 3, y: -0.5 });
  const [ballTrajectory, setBallTrajectory] = useState<BallTrajectory>({ 
    endX: 30, 
    endY: 49.5,
    dx: 3,
    dy: -0.5
  });
  const [ballVelocity, setBallVelocity] = useState(35);
  
  // Ball movement animation
  useEffect(() => {
    if (showHighlight) return;
    
    const moveBall = () => {
      setBallPosition(prev => {
        const newPos = calculateNextBallPosition(
          prev, 
          ballDirection, 
          setBallDirection, 
          setBallVelocity, 
          setBallTrajectory
        );
        
        // Set new target for players when the ball moves
        if (Math.random() < 0.1) {
          setPlayerTargetsBasedOnBall(
            newPos,
            setPlayer1,
            setPlayer2,
            setPlayer3,
            setPlayer4
          );
        }
        
        return newPos;
      });
    };
    
    // Smoother animation with requestAnimationFrame
    let animationId: number;
    let lastTime = 0;
    const frameRate = 24; // Frames per second
    const frameInterval = 1000 / frameRate;
    
    const animate = (timestamp: number) => {
      if (!lastTime) lastTime = timestamp;
      const elapsed = timestamp - lastTime;
      
      if (elapsed > frameInterval) {
        moveBall();
        lastTime = timestamp;
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [ballDirection, showHighlight, setPlayer1, setPlayer2, setPlayer3, setPlayer4]);

  // Occasionally change ball direction to simulate player hits
  useEffect(() => {
    if (showHighlight) return;
    
    const directionInterval = setInterval(() => {
      // Occasional random direction change to simulate player hits
      if (Math.random() < 0.08) {
        setBallDirection(createRandomDirectionChange());
      }
    }, 3000);
    
    return () => clearInterval(directionInterval);
  }, [showHighlight]);

  return {
    ballPosition,
    ballTrajectory,
    ballVelocity,
    setBallPosition,
    setBallDirection,
    setBallTrajectory,
    setBallVelocity
  };
}
