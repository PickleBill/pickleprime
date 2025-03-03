
import { useState, useCallback, useRef } from "react";
import { BallState, BallTrajectory } from "../../types";

export const useBallMovement = (isHighlightActive: boolean = false) => {
  // Initialize ball position, trajectory, and velocity
  const [ballPosition, setBallPosition] = useState<BallState>({ x: 50, y: 50, z: 0 });
  
  const [ballTrajectory, setBallTrajectory] = useState<BallTrajectory>({
    points: [],
    type: "drive",
    speed: 8,
    stage: "rising",
    bounces: 0
  });
  
  const [ballVelocity, setBallVelocity] = useState(0);
  
  // Track ball direction for back-and-forth movement
  const [movingRight, setMovingRight] = useState(Math.random() > 0.5);
  
  // Track which player last hit the ball
  const lastPlayerRef = useRef<number | null>(null);
  
  // Baseline positions
  const leftBaseline = 15;
  const rightBaseline = 85;
  const netPosition = 50;
  
  // Function to update ball position with animation frame
  const updateBallPosition = useCallback((deltaTime: number) => {
    // More fluid ball movement with back and forth over the net
    const newBallPosition = { ...ballPosition };
    
    // Ball speed factors
    const baseSpeed = 0.2 * (deltaTime / 16);
    const randomFactor = 0.6 + (Math.random() * 0.8); // 0.6-1.4 speed variation
    const currentSpeed = baseSpeed * randomFactor;
    
    // Calculate movement
    const moveX = movingRight ? currentSpeed : -currentSpeed;
    const moveY = (Math.random() - 0.5) * currentSpeed * 0.8; // Less vertical movement
    
    // Update position
    newBallPosition.x = Math.max(10, Math.min(90, newBallPosition.x + moveX));
    newBallPosition.y = Math.max(10, Math.min(90, newBallPosition.y + moveY));
    
    // Check if ball hits baseline or players
    if (newBallPosition.x <= leftBaseline) {
      // Hit left baseline - change direction
      setMovingRight(true);
      setBallVelocity(15 + Math.random() * 10); // Bounce effect
    } 
    else if (newBallPosition.x >= rightBaseline) {
      // Hit right baseline - change direction
      setMovingRight(false);
      setBallVelocity(15 + Math.random() * 10); // Bounce effect
    }
    
    // Player zones - simplified detection of when ball is near a player
    const playerZones = [
      { x: 25, y: 25, radius: 10, id: 1 }, // Player 1 (left top)
      { x: 25, y: 75, radius: 10, id: 2 }, // Player 2 (left bottom)
      { x: 75, y: 25, radius: 10, id: 3 }, // Player 3 (right top)
      { x: 75, y: 75, radius: 10, id: 4 }  // Player 4 (right bottom)
    ];
    
    // Check if ball is near any player
    playerZones.forEach(player => {
      const dx = player.x - newBallPosition.x;
      const dy = player.y - newBallPosition.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance <= player.radius && lastPlayerRef.current !== player.id) {
        // Ball hit a player - change direction
        if (player.id <= 2) { // Left side players hit to the right
          setMovingRight(true);
        } else { // Right side players hit to the left
          setMovingRight(false);
        }
        
        lastPlayerRef.current = player.id;
        setBallVelocity(20 + Math.random() * 15); // Hit effect - faster
      }
    });
    
    // Check if ball crosses the net (center)
    if ((ballPosition.x < netPosition && newBallPosition.x >= netPosition) || 
        (ballPosition.x > netPosition && newBallPosition.x <= netPosition)) {
      // Ball crosses net - reset last player hit
      lastPlayerRef.current = null;
    }
    
    // Update ball position
    setBallPosition(newBallPosition);
    
    // Gradually reduce velocity for a natural deceleration
    setBallVelocity(prev => Math.max(8, prev * 0.98));
    
  }, [ballPosition, movingRight]);
  
  return {
    ballPosition,
    ballTrajectory,
    ballVelocity,
    updateBallPosition
  };
};

export default useBallMovement;
