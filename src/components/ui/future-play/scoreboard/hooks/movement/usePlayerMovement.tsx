import { useState } from "react";
import { BallState, PlayerPosition } from "../../types";
import { courtBoundaries } from "../../constants/courtConfig";

// Default initial values - positioned correctly
const defaultPlayer1: PlayerPosition = { x: 25, y: 25, rotation: 0 }; // Green team, left side top
const defaultPlayer2: PlayerPosition = { x: 25, y: 75, rotation: 0 }; // Green team, left side bottom
const defaultPlayer3: PlayerPosition = { x: 75, y: 25, rotation: 180 }; // Blue team, right side top 
const defaultPlayer4: PlayerPosition = { x: 75, y: 75, rotation: 180 }; // Blue team, right side bottom

export const usePlayerMovement = (ballPosition: BallState) => {
  // Initialize player positions
  const [player1, setPlayer1] = useState<PlayerPosition>(defaultPlayer1);
  const [player2, setPlayer2] = useState<PlayerPosition>(defaultPlayer2);
  const [player3, setPlayer3] = useState<PlayerPosition>(defaultPlayer3);
  const [player4, setPlayer4] = useState<PlayerPosition>(defaultPlayer4);
  
  // Random pose counter for player silhouettes
  const [poseCycleCounter, setPoseCycleCounter] = useState(0);
  
  // Improved player movement function with more pickleball strategy and ENHANCED MOVEMENT
  const movePlayerForPickleball = (
    player: PlayerPosition, 
    isLeftSide: boolean,
    isTopSide: boolean,
    deltaTime: number
  ): PlayerPosition => {
    // Define quadrant boundaries with INCREASED flexibility for more movement
    const minX = isLeftSide ? 10 : courtBoundaries.centerLine + 2;
    const maxX = isLeftSide ? courtBoundaries.centerLine - 2 : 90;
    const minY = isTopSide ? 10 : 40;
    const maxY = isTopSide ? 60 : 90;
    
    // Calculate distance to ball
    const dx = ballPosition.x - player.x;
    const dy = ballPosition.y - player.y;
    const distanceToBall = Math.sqrt(dx * dx + dy * dy);
    
    // Direction vector to ball
    const dirX = distanceToBall > 0 ? dx / distanceToBall : 0;
    const dirY = distanceToBall > 0 ? dy / distanceToBall : 0;
    
    // INCREASED base speed for more dynamic movement
    const baseSpeed = 0.5 * (deltaTime / 16); // Increased from 0.4
    
    // ENHANCED speed calculation based on distance to ball
    let speed = baseSpeed * (1.0 + (distanceToBall / 100) * 2.5); // Increased modifier
    
    // Apply random deviations for more natural movement (INCREASED frequency)
    let finalDirX = dirX;
    let finalDirY = dirY;
    
    if (Math.random() > 0.75) { // Increased chance from 0.85
      // MORE significant deviation from direct path to ball
      finalDirX += (Math.random() - 0.5) * 0.5; // Increased from 0.3
      finalDirY += (Math.random() - 0.5) * 0.5; // Increased from 0.3
      
      // Normalize direction again
      const length = Math.sqrt(finalDirX * finalDirX + finalDirY * finalDirY);
      if (length > 0) {
        finalDirX /= length;
        finalDirY /= length;
      }
    }
    
    // Calculate new position - moving towards ball with enhanced randomness
    let newX = player.x + finalDirX * speed;
    let newY = player.y + finalDirY * speed;
    
    // Constrain to quadrant boundaries
    newX = Math.max(minX, Math.min(maxX, newX));
    newY = Math.max(minY, Math.min(maxY, newY));
    
    // Keep base rotation for player facing direction
    const baseRotation = isLeftSide ? 0 : 180;
    
    return {
      x: newX,
      y: newY,
      rotation: baseRotation // Fixed rotation based on which side they're on
    };
  };
  
  // ENHANCED position readjustments with more movement
  const moveBackToReadyPosition = (
    player: PlayerPosition,
    homeX: number,
    homeY: number,
    deltaTime: number
  ): PlayerPosition => {
    // Allow more movement by REDUCING the distance threshold
    const distanceFromBall = Math.sqrt(
      Math.pow(player.x - ballPosition.x, 2) + 
      Math.pow(player.y - ballPosition.y, 2)
    );
    
    // Only move back if ball is FURTHER away (increased threshold)
    if (distanceFromBall > 35) { // Reduced from 40
      const dirX = homeX - player.x;
      const dirY = homeY - player.y;
      const distToHome = Math.sqrt(dirX * dirX + dirY * dirY);
      
      // INCREASED movement range before returning to home
      if (distToHome > 10) { // Increased from 5
        const normDirX = dirX / distToHome;
        const normDirY = dirY / distToHome;
        
        // SLOWER return to home position for more time spent moving
        const returnSpeed = 0.15 * (deltaTime / 16); // Reduced from 0.2
        
        return {
          x: player.x + normDirX * returnSpeed,
          y: player.y + normDirY * returnSpeed,
          rotation: player.rotation
        };
      }
    }
    
    // If ball is close to player's quadrant, chase the ball with INCREASED aggression
    return movePlayerForPickleball(
      player, 
      player.x < courtBoundaries.centerLine, 
      player.y < courtBoundaries.kitchenBottom - 10,
      deltaTime
    );
  };
  
  // Function to update all player positions
  const updatePlayerPositions = (deltaTime: number) => {
    // ALLOW MORE FREEDOM with wider movement ranges for each player
    // Team 1 players (Green team on left side)
    setPlayer1(moveBackToReadyPosition(player1, 25, 25, deltaTime));
    setPlayer2(moveBackToReadyPosition(player2, 25, 75, deltaTime));
    // Team 2 players (Blue team on right side)
    setPlayer3(moveBackToReadyPosition(player3, 75, 25, deltaTime));
    setPlayer4(moveBackToReadyPosition(player4, 75, 75, deltaTime));
  };
  
  // Function to update pose cycle counter
  const updatePoseCycle = () => {
    setPoseCycleCounter(prev => prev + 1);
  };
  
  return {
    player1,
    player2,
    player3,
    player4,
    poseCycleCounter,
    updatePlayerPositions,
    updatePoseCycle
  };
};

export default usePlayerMovement;
