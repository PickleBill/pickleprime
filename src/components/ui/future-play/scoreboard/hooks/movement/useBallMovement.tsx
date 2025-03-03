
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
    
    // Ball speed factors - INCREASED SIGNIFICANTLY
    const baseSpeed = 0.50 * (deltaTime / 16); // Increased significantly from 0.35 to 0.50
    const randomFactor = 0.8 + (Math.random() * 0.4); // 0.8-1.2 speed variation
    const currentSpeed = baseSpeed * randomFactor;
    
    // Calculate movement
    const moveX = movingRight ? currentSpeed : -currentSpeed;
    const moveY = (Math.random() - 0.5) * currentSpeed * 0.4; // Reduced vertical randomness for more fluid movement
    
    // Update position
    newBallPosition.x = Math.max(10, Math.min(90, newBallPosition.x + moveX));
    newBallPosition.y = Math.max(10, Math.min(90, newBallPosition.y + moveY));
    
    // Check if ball hits baseline or players
    if (newBallPosition.x <= leftBaseline) {
      // Hit left baseline - change direction
      setMovingRight(true);
      setBallVelocity(35 + Math.random() * 15); // Increased bounce effect on baseline
    } 
    else if (newBallPosition.x >= rightBaseline) {
      // Hit right baseline - change direction
      setMovingRight(false);
      setBallVelocity(35 + Math.random() * 15); // Increased bounce effect on baseline
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
        // Ball hit a player - change direction and add dramatic launch effect
        if (player.id <= 2) { // Left side players hit to the right
          setMovingRight(true);
        } else { // Right side players hit to the left
          setMovingRight(false);
        }
        
        // Enhanced launch effect with faster trajectory
        // Store current position to calculate launch trajectory
        const launchX = newBallPosition.x;
        const launchY = newBallPosition.y;
        
        // Calculate target point (roughly the opposite court's middle)
        const targetX = player.id <= 2 ? 70 : 30;
        const targetY = 40 + (Math.random() * 20); // Random Y in middle area
        
        // Calculate normalized direction vector to target
        const dirX = targetX - launchX;
        const dirY = targetY - launchY;
        const magnitude = Math.sqrt(dirX * dirX + dirY * dirY);
        
        // Apply a much stronger initial "push" in the calculated direction
        // This creates a more dramatic initial trajectory and separation
        const pushStrength = 2.0 + (Math.random() * 1.0); // Increased from 1.2 to much stronger 2.0
        newBallPosition.x += (dirX / magnitude) * pushStrength;
        newBallPosition.y += (dirY / magnitude) * pushStrength;
        
        lastPlayerRef.current = player.id;
        
        // Much faster velocity when hit by a player - dramatic spike
        setBallVelocity(45 + Math.random() * 20); // Increased from 35-50 to 45-65 range
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
    
    // Gradually reduce velocity for a natural deceleration, but maintain higher base speed
    setBallVelocity(prev => Math.max(18, prev * 0.96)); // Slower decay, higher minimum (increased from 12 to 18)
    
  }, [ballPosition, movingRight]);
  
  return {
    ballPosition,
    ballTrajectory,
    ballVelocity,
    updateBallPosition
  };
};

export default useBallMovement;
