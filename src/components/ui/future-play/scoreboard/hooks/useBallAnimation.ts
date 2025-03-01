
import { useState, useEffect } from "react";
import { BallTrajectory } from "../types";

export const useBallAnimation = (isPaused: boolean = false) => {
  // Ball position state
  const [ballPosition, setBallPosition] = useState({ x: 50, y: 50 });
  const [ballDirection, setBallDirection] = useState({ x: 2, y: 1 });
  const [ballVelocity, setBallVelocity] = useState(42); // mph
  
  // Trajectory tracking
  const [ballTrajectory, setBallTrajectory] = useState<BallTrajectory>({
    endX: 70,
    endY: 30,
    points: []
  });
  
  // Court boundaries
  const courtBoundaries = {
    top: 15,
    bottom: 85,
    left: 15, 
    right: 85,
    net: { top: 48, bottom: 52 } // Net position
  };
  
  // Ball animation effect
  useEffect(() => {
    if (isPaused) return;
    
    const updateBall = () => {
      setBallPosition(prev => {
        // Calculate next position
        const nextX = prev.x + ballDirection.x;
        const nextY = prev.y + ballDirection.y;
        
        let newDirX = ballDirection.x;
        let newDirY = ballDirection.y;
        let hitBoundary = false;
        
        // Bounce logic
        if (nextX <= courtBoundaries.left || nextX >= courtBoundaries.right) {
          newDirX = -ballDirection.x;
          hitBoundary = true;
        }
        
        if (nextY <= courtBoundaries.top || nextY >= courtBoundaries.bottom) {
          newDirY = -ballDirection.y;
          hitBoundary = true;
        }
        
        // Net collision
        if ((prev.y < courtBoundaries.net.top && nextY >= courtBoundaries.net.top) || 
            (prev.y > courtBoundaries.net.bottom && nextY <= courtBoundaries.net.bottom)) {
          if (nextX > 40 && nextX < 60) {
            newDirY = -ballDirection.y;
            hitBoundary = true;
          }
        }
        
        // Update direction
        if (hitBoundary) {
          setBallDirection({ x: newDirX, y: newDirY });
          
          // Occasionally change velocity after bounce
          if (Math.random() < 0.3) {
            setBallVelocity(Math.floor(Math.random() * 15) + 35);
          }
        }
        
        // Ensure ball stays within boundaries
        const newPos = { 
          x: Math.max(courtBoundaries.left, Math.min(courtBoundaries.right, nextX)),
          y: Math.max(courtBoundaries.top, Math.min(courtBoundaries.bottom, nextY))
        };
        
        // Update trajectory
        setBallTrajectory(prev => {
          const newPoints = [...prev.points, newPos];
          if (newPoints.length > 10) {
            newPoints.shift(); // Remove oldest point
          }
          return {
            ...prev,
            points: newPoints,
            endX: newPos.x + ballDirection.x * 5,
            endY: newPos.y + ballDirection.y * 5
          };
        });
        
        return newPos;
      });
    };
    
    const interval = setInterval(updateBall, 50);
    return () => clearInterval(interval);
  }, [ballDirection, isPaused]);
  
  // Occasional random direction changes (simulates player hits)
  useEffect(() => {
    if (isPaused) return;
    
    const changeDirectionInterval = setInterval(() => {
      if (Math.random() < 0.1) {
        setBallDirection(prev => {
          const randomX = (Math.random() * 4 - 2);
          const randomY = (Math.random() * 4 - 2);
          return { x: randomX, y: randomY };
        });
        
        setBallVelocity(Math.floor(Math.random() * 20) + 30);
      }
    }, 2000);
    
    return () => clearInterval(changeDirectionInterval);
  }, [isPaused]);
  
  return {
    ballPosition,
    ballTrajectory,
    ballVelocity
  };
};
