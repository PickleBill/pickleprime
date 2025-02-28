import { useState, useEffect } from "react";

// Player position type
interface PlayerPosition {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
}

// Court boundaries for better bounce mechanics
const courtBoundaries = {
  top: 15, // Top court boundary (%)
  bottom: 85, // Bottom court boundary (%)
  left: 10, // Left court boundary (%)
  right: 90, // Right court boundary (%)
  net: { top: 48, bottom: 52 }, // Net position (%)
  midLine: 50 // Middle line of the court (%)
};

export function useGameAnimations(showHighlight: boolean) {
  // State for ball animation
  const [ballPosition, setBallPosition] = useState({ x: 25, y: 75 });
  const [ballDirection, setBallDirection] = useState({ x: 3, y: -3 });
  const [ballTrajectory, setBallTrajectory] = useState<{x: number, y: number}[]>([]);
  const [ballVelocity, setBallVelocity] = useState(38);
  
  // State for player positions - now with 4 players (2 per side)
  const [player1, setPlayer1] = useState<PlayerPosition>({ x: 25, y: 75, targetX: 25, targetY: 75 });
  const [player2, setPlayer2] = useState<PlayerPosition>({ x: 75, y: 25, targetX: 75, targetY: 25 });
  const [player3, setPlayer3] = useState<PlayerPosition>({ x: 15, y: 60, targetX: 15, targetY: 60 });
  const [player4, setPlayer4] = useState<PlayerPosition>({ x: 85, y: 40, targetX: 85, targetY: 40 });

  // Ball movement animation with enhanced trajectory tracking
  useEffect(() => {
    if (showHighlight) return;
    
    const moveBall = () => {
      setBallPosition(prev => {
        const nextX = prev.x + ballDirection.x;
        const nextY = prev.y + ballDirection.y;
        
        let newDirX = ballDirection.x;
        let newDirY = ballDirection.y;
        let hitBoundary = false;
        
        // Bounce off court boundaries with more realistic angles
        if (nextX <= courtBoundaries.left || nextX >= courtBoundaries.right) {
          newDirX = -ballDirection.x;
          hitBoundary = true;
          
          // Add some randomness to the y direction when hitting side walls
          if (Math.random() > 0.5) {
            newDirY = ballDirection.y + (Math.random() * 2 - 1);
            // Keep y direction within reasonable bounds
            newDirY = Math.max(-4, Math.min(4, newDirY));
          }
        }
        
        if (nextY <= courtBoundaries.top || nextY >= courtBoundaries.bottom) {
          newDirY = -ballDirection.y;
          hitBoundary = true;
          
          // Add some randomness to the x direction when hitting top/bottom walls
          if (Math.random() > 0.5) {
            newDirX = ballDirection.x + (Math.random() * 2 - 1);
            // Keep x direction within reasonable bounds
            newDirX = Math.max(-4, Math.min(4, newDirX));
          }
        }
        
        // Special case for net hits - bounce with more dramatic angle change
        if ((prev.y < courtBoundaries.net.top && nextY >= courtBoundaries.net.top) || 
            (prev.y > courtBoundaries.net.bottom && nextY <= courtBoundaries.net.bottom)) {
          if (nextX > 40 && nextX < 60) {
            newDirY = -ballDirection.y * 1.2; // Stronger vertical bounce
            newDirX = ballDirection.x * 0.8; // Slight reduction in horizontal momentum
            hitBoundary = true;
          }
        }
        
        // Update direction with occasional speed variations
        if (hitBoundary) {
          // Occasionally change ball speed after bouncing
          if (Math.random() < 0.3) {
            setBallVelocity(Math.floor(Math.random() * 15) + 30);
            
            // Apply a more dramatic direction change 20% of the time
            if (Math.random() < 0.2) {
              newDirX = newDirX * (0.8 + Math.random() * 0.4); // 0.8-1.2 multiplier
              newDirY = newDirY * (0.8 + Math.random() * 0.4); // 0.8-1.2 multiplier
            }
          }
          
          setBallDirection({ x: newDirX, y: newDirY });
        }
        
        const newPos = { 
          x: Math.max(courtBoundaries.left, Math.min(courtBoundaries.right, nextX)),
          y: Math.max(courtBoundaries.top, Math.min(courtBoundaries.bottom, nextY))
        };
        
        // Add to trajectory (keeping last 12 points)
        setBallTrajectory(prev => {
          const newTrajectory = [...prev, newPos];
          if (newTrajectory.length > 12) {
            return newTrajectory.slice(newTrajectory.length - 12);
          }
          return newTrajectory;
        });
        
        // Set new target for players when the ball moves significantly
        if (Math.random() < 0.1) {
          // If ball is on left side (player 1 & 3 side)
          if (newPos.x < courtBoundaries.midLine) {
            // Set target for player 1 or 3 to intercept based on position
            if (newPos.y < courtBoundaries.net.top) {
              setPlayer1(prev => ({ ...prev, targetX: newPos.x + 5, targetY: newPos.y + 5 }));
            } else {
              setPlayer3(prev => ({ ...prev, targetX: newPos.x + 5, targetY: newPos.y - 5 }));
            }
          } 
          // If ball is on right side (player 2 & 4 side)
          else {
            // Set target for player 2 or 4 to intercept based on position
            if (newPos.y < courtBoundaries.net.top) {
              setPlayer2(prev => ({ ...prev, targetX: newPos.x - 5, targetY: newPos.y + 5 }));
            } else {
              setPlayer4(prev => ({ ...prev, targetX: newPos.x - 5, targetY: newPos.y - 5 }));
            }
          }
        }
        
        return newPos;
      });
    };
    
    const animationInterval = setInterval(moveBall, 40);
    return () => clearInterval(animationInterval);
  }, [ballDirection, showHighlight]);

  // Player movement animation - moves players toward their targets
  useEffect(() => {
    if (showHighlight) return;
    
    const moveInterval = setInterval(() => {
      // Move players by implementing the same movement logic previously used
      // Player 1
      setPlayer1(prev => {
        const dirX = prev.targetX - prev.x;
        const dirY = prev.targetY - prev.y;
        const dist = Math.sqrt(dirX * dirX + dirY * dirY);
        
        if (dist > 1) {
          const moveSpeed = 1.2;
          return {
            ...prev,
            x: prev.x + (dirX / dist) * moveSpeed,
            y: prev.y + (dirY / dist) * moveSpeed
          };
        }
        return prev;
      });
      
      // Player 2
      setPlayer2(prev => {
        const dirX = prev.targetX - prev.x;
        const dirY = prev.targetY - prev.y;
        const dist = Math.sqrt(dirX * dirX + dirY * dirY);
        
        if (dist > 1) {
          const moveSpeed = 1.2;
          return {
            ...prev,
            x: prev.x + (dirX / dist) * moveSpeed,
            y: prev.y + (dirY / dist) * moveSpeed
          };
        }
        return prev;
      });
      
      // Player 3
      setPlayer3(prev => {
        const dirX = prev.targetX - prev.x;
        const dirY = prev.targetY - prev.y;
        const dist = Math.sqrt(dirX * dirX + dirY * dirY);
        
        if (dist > 1) {
          const moveSpeed = 1.1;
          return {
            ...prev,
            x: prev.x + (dirX / dist) * moveSpeed,
            y: prev.y + (dirY / dist) * moveSpeed
          };
        }
        return prev;
      });
      
      // Player 4
      setPlayer4(prev => {
        const dirX = prev.targetX - prev.x;
        const dirY = prev.targetY - prev.y;
        const dist = Math.sqrt(dirX * dirX + dirY * dirY);
        
        if (dist > 1) {
          const moveSpeed = 1.1;
          return {
            ...prev,
            x: prev.x + (dirX / dist) * moveSpeed,
            y: prev.y + (dirY / dist) * moveSpeed
          };
        }
        return prev;
      });
      
      // Occasionally set new random targets for players to simulate positioning
      if (Math.random() < 0.05) {
        // Set new random targets within their respective court areas
        
        // Player 1 - Front left
        setPlayer1(prev => ({
          ...prev,
          targetX: Math.random() * 20 + 15, // 15-35%
          targetY: Math.random() * 20 + 20, // 20-40%
        }));
        
        // Player 2 - Front right
        setPlayer2(prev => ({
          ...prev,
          targetX: Math.random() * 20 + 65, // 65-85%
          targetY: Math.random() * 20 + 20, // 20-40%
        }));
        
        // Player 3 - Back left
        setPlayer3(prev => ({
          ...prev,
          targetX: Math.random() * 20 + 15, // 15-35%
          targetY: Math.random() * 20 + 60, // 60-80%
        }));
        
        // Player 4 - Back right
        setPlayer4(prev => ({
          ...prev,
          targetX: Math.random() * 20 + 65, // 65-85%
          targetY: Math.random() * 20 + 60, // 60-80%
        }));
      }
    }, 50);
    
    return () => clearInterval(moveInterval);
  }, [showHighlight]);

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
        setBallDirection(prev => {
          // Create a new angle that's significantly different
          const newX = (Math.random() * 6 - 3);
          const newY = (Math.random() * 6 - 3);
          return { x: newX, y: newY };
        });
      }
    }, 2000);
    
    return () => clearInterval(velocityInterval);
  }, [showHighlight]);

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
