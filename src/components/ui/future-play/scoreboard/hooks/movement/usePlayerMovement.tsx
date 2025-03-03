
import { useState, useCallback } from "react";
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
  
  // Tracking if a player is actively chasing the ball
  const [activePlayers, setActivePlayers] = useState({
    player1: false,
    player2: false,
    player3: false,
    player4: false
  });
  
  // Enhanced player movement function with more natural pickleball strategy
  const movePlayerForPickleball = useCallback((
    player: PlayerPosition, 
    isLeftSide: boolean,
    isTopSide: boolean,
    deltaTime: number
  ): PlayerPosition => {
    // Define quadrant boundaries with more flexibility for natural movement
    const minX = isLeftSide ? courtBoundaries.left + 3 : courtBoundaries.centerLine + 3;
    const maxX = isLeftSide ? courtBoundaries.centerLine - 3 : courtBoundaries.right - 3;
    const minY = isTopSide ? courtBoundaries.top + 3 : courtBoundaries.centerLine;
    const maxY = isTopSide ? courtBoundaries.centerLine : courtBoundaries.bottom - 3;
    
    // Calculate distance to ball
    const dx = ballPosition.x - player.x;
    const dy = ballPosition.y - player.y;
    const distanceToBall = Math.sqrt(dx * dx + dy * dy);
    
    // Direction vector to ball
    const dirX = distanceToBall > 0 ? dx / distanceToBall : 0;
    const dirY = distanceToBall > 0 ? dy / distanceToBall : 0;
    
    // Dynamic speed based on ball position and distance
    let baseSpeed = 0.7 * (deltaTime / 16); // Increased base speed
    
    // Speed varies based on ball position - faster when ball is close to player's area
    const ballInPlayerArea = (isLeftSide && ballPosition.x < 50) || (!isLeftSide && ballPosition.x > 50);
    const speedMultiplier = ballInPlayerArea ? 1.5 : 0.8;
    
    // Enhanced speed calculation with urgency factor when ball is close
    let speed = baseSpeed * speedMultiplier;
    
    // Add urgency when ball is very close - creates a sprint effect
    if (distanceToBall < 20) {
      speed *= 1.8; // Sprint to the ball
    }
    
    // Natural movement pattern with realistic anticipation
    let finalDirX = dirX;
    let finalDirY = dirY;
    
    // Add anticipation - players slightly anticipate where ball is going
    if (Math.random() > 0.7) {
      // Add slight anticipation by moving toward a point ahead of the ball
      finalDirX += 0.2;
      
      // Normalize direction again
      const length = Math.sqrt(finalDirX * finalDirX + finalDirY * finalDirY);
      if (length > 0) {
        finalDirX /= length;
        finalDirY /= length;
      }
    }
    
    // Add natural variability to movement - slight randomness for realism
    if (Math.random() > 0.85) {
      finalDirX += (Math.random() - 0.5) * 0.3;
      finalDirY += (Math.random() - 0.5) * 0.3;
      
      // Normalize direction again
      const length = Math.sqrt(finalDirX * finalDirX + finalDirY * finalDirY);
      if (length > 0) {
        finalDirX /= length;
        finalDirY /= length;
      }
    }
    
    // Calculate new position - moving towards ball with natural movement patterns
    let newX = player.x + finalDirX * speed;
    let newY = player.y + finalDirY * speed;
    
    // Constrain to quadrant boundaries with slight flexibility
    newX = Math.max(minX, Math.min(maxX, newX));
    newY = Math.max(minY, Math.min(maxY, newY));
    
    // Keep base rotation for player facing direction
    const baseRotation = isLeftSide ? 0 : 180;
    
    return {
      x: newX,
      y: newY,
      rotation: baseRotation
    };
  }, [ballPosition]);
  
  // Enhanced position readjustments with more natural movement patterns
  const moveBackToReadyPosition = useCallback((
    player: PlayerPosition,
    homeX: number,
    homeY: number,
    deltaTime: number,
    playerKey: string
  ): PlayerPosition => {
    // Determine if this player is the most appropriate to chase the ball
    const isLeftSide = player.x < courtBoundaries.centerLine;
    const isTopSide = player.y < courtBoundaries.centerLine;
    const ballInPlayerSide = isLeftSide === (ballPosition.x < courtBoundaries.centerLine);
    const ballInPlayerVerticalArea = isTopSide === (ballPosition.y < courtBoundaries.centerLine);
    
    // Calculate distance from ball
    const distanceFromBall = Math.sqrt(
      Math.pow(player.x - ballPosition.x, 2) + 
      Math.pow(player.y - ballPosition.y, 2)
    );
    
    // Determine if this player should be the active one to chase the ball
    const shouldChase = ballInPlayerSide && ballInPlayerVerticalArea && distanceFromBall < 40;
    
    // Update active player status
    setActivePlayers(prev => ({
      ...prev,
      [playerKey]: shouldChase
    }));
    
    // If player should chase the ball, move toward it
    if (shouldChase) {
      return movePlayerForPickleball(
        player, 
        isLeftSide, 
        isTopSide,
        deltaTime
      );
    }
    
    // If not chasing, gradually return to ready position
    const dirX = homeX - player.x;
    const dirY = homeY - player.y;
    const distToHome = Math.sqrt(dirX * dirX + dirY * dirY);
    
    // Only move back if sufficiently far from home
    if (distToHome > 5) {
      const normDirX = dirX / distToHome;
      const normDirY = dirY / distToHome;
      
      // More dynamic return speed - slower when farther from ball for more natural movement
      const returnSpeed = 0.2 * (deltaTime / 16) * (1 + (distanceFromBall / 100));
      
      // Apply natural positioning - players tend to position based on ball location
      let adjustedHomeX = homeX;
      let adjustedHomeY = homeY;
      
      // If ball is approaching this player's side, adjust ready position slightly
      if (ballInPlayerSide && distanceFromBall < 50) {
        // Shift ready position slightly toward ball for more natural positioning
        adjustedHomeX = homeX + (ballPosition.x - homeX) * 0.15;
        adjustedHomeY = homeY + (ballPosition.y - homeY) * 0.15;
      }
      
      // Calculate direction to adjusted home position
      const adjDirX = adjustedHomeX - player.x;
      const adjDirY = adjustedHomeY - player.y;
      const adjDistToHome = Math.sqrt(adjDirX * adjDirX + adjDirY * adjDirY);
      
      // Normalize direction
      const adjNormDirX = adjDistToHome > 0 ? adjDirX / adjDistToHome : 0;
      const adjNormDirY = adjDistToHome > 0 ? adjDirY / adjDistToHome : 0;
      
      return {
        x: player.x + adjNormDirX * returnSpeed,
        y: player.y + adjNormDirY * returnSpeed,
        rotation: player.rotation
      };
    }
    
    // If close to home and ball is far, make tiny movements for a natural idle appearance
    if (distanceFromBall > 40) {
      return {
        x: player.x + (Math.random() - 0.5) * 0.2,
        y: player.y + (Math.random() - 0.5) * 0.2,
        rotation: player.rotation
      };
    }
    
    // Return current position if no adjustment needed
    return player;
  }, [ballPosition, movePlayerForPickleball]);
  
  // Function to update all player positions
  const updatePlayerPositions = useCallback((deltaTime: number) => {
    // Update player positions with their respective home positions
    setPlayer1(prev => moveBackToReadyPosition(prev, 25, 25, deltaTime, 'player1'));
    setPlayer2(prev => moveBackToReadyPosition(prev, 25, 75, deltaTime, 'player2'));
    setPlayer3(prev => moveBackToReadyPosition(prev, 75, 25, deltaTime, 'player3'));
    setPlayer4(prev => moveBackToReadyPosition(prev, 75, 75, deltaTime, 'player4'));
  }, [moveBackToReadyPosition]);
  
  // Function to update pose cycle counter
  const updatePoseCycle = useCallback(() => {
    setPoseCycleCounter(prev => prev + 1);
  }, []);
  
  return {
    player1,
    player2,
    player3,
    player4,
    poseCycleCounter,
    updatePlayerPositions,
    updatePoseCycle,
    activePlayers
  };
};

export default usePlayerMovement;
