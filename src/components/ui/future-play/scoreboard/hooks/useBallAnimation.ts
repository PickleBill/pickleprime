
import { useState, useEffect } from "react";
import { Position, BallTrajectory } from "../types";
import { calculateNextBallPosition, createRandomDirectionChange } from "./utils/ballMovementUtils";
import { setPlayerTargetsBasedOnBall } from "./utils/playerMovementUtils";
import { courtBoundaries } from "../constants/courtConfig";

export function useBallAnimation(
  showHighlight: boolean,
  setPlayer1: (fn: (prev: any) => any) => void,
  setPlayer2: (fn: (prev: any) => any) => void,
  setPlayer3: (fn: (prev: any) => any) => void,
  setPlayer4: (fn: (prev: any) => any) => void
) {
  // State for ball animation
  const [ballPosition, setBallPosition] = useState<Position>({ x: 25, y: 75 });
  const [ballDirection, setBallDirection] = useState({ x: 3, y: -3 });
  const [ballTrajectory, setBallTrajectory] = useState<BallTrajectory>({ endX: 30, endY: 70 });
  const [ballVelocity, setBallVelocity] = useState(38);
  
  // Ball movement animation with enhanced trajectory tracking
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
        
        // Set new target for players when the ball moves significantly
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
    
    const animationInterval = setInterval(moveBall, 40);
    return () => clearInterval(animationInterval);
  }, [ballDirection, showHighlight, setPlayer1, setPlayer2, setPlayer3, setPlayer4]);

  // Randomly change ball velocity and cause random direction changes
  useEffect(() => {
    if (showHighlight) return;
    
    const velocityInterval = setInterval(() => {
      // Random velocity changes
      if (Math.random() < 0.2) {
        setBallVelocity(Math.floor(Math.random() * 15) + 25);
      }
      
      // Occasional random direction change to simulate player hits
      if (Math.random() < 0.1) {
        setBallDirection(createRandomDirectionChange());
      }
    }, 2000);
    
    return () => clearInterval(velocityInterval);
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
