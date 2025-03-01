
import { useState, useEffect } from 'react';
import { getBallTrajectory, updateBallPosition } from './utils/ballMovementUtils';
import { updatePlayerPositions } from './utils/playerMovementUtils';
import { PlayerPosition, BallTrajectory } from '../types';
import { courtConfig } from '../constants/courtConfig';

export const useGameAnimations = (
  showHighlight: boolean = false
) => {
  // Ball state
  const [ballPosition, setBallPosition] = useState({ x: 50, y: 50 });
  const [ballTrajectory, setBallTrajectory] = useState<BallTrajectory>({
    endX: 75,
    endY: 75,
    points: [{ x: 50, y: 50 }]
  });
  const [ballVelocity, setBallVelocity] = useState(45);

  // Player positions
  const [player1, setPlayer1] = useState<PlayerPosition>({ 
    x: 25, y: 25, targetX: 25, targetY: 25 
  });
  const [player2, setPlayer2] = useState<PlayerPosition>({ 
    x: 75, y: 25, targetX: 75, targetY: 25 
  });
  const [player3, setPlayer3] = useState<PlayerPosition>({ 
    x: 25, y: 75, targetX: 25, targetY: 75 
  });
  const [player4, setPlayer4] = useState<PlayerPosition>({ 
    x: 75, y: 75, targetX: 75, targetY: 75 
  });

  // Ball movement animation
  useEffect(() => {
    if (showHighlight) return;
    
    const interval = setInterval(() => {
      // Update ball position based on current trajectory
      setBallPosition(prev => {
        return updateBallPosition(prev, ballTrajectory);
      });
      
      // Occasionally change trajectory
      if (Math.random() < 0.05) {
        // Generate new trajectory
        const newTrajectory = getBallTrajectory(
          ballPosition,
          courtConfig
        );
        
        setBallTrajectory(newTrajectory);
        
        // Sometimes change ball velocity
        if (Math.random() < 0.3) {
          setBallVelocity(Math.floor(Math.random() * 20) + 35);
        }
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, [ballPosition, ballTrajectory, showHighlight]);

  // Player movement animation
  useEffect(() => {
    if (showHighlight) return;
    
    const interval = setInterval(() => {
      // Update player positions
      const { newPlayer1, newPlayer2, newPlayer3, newPlayer4 } = updatePlayerPositions(
        player1, player2, player3, player4, ballPosition, courtConfig
      );
      
      setPlayer1(newPlayer1);
      setPlayer2(newPlayer2);
      setPlayer3(newPlayer3);
      setPlayer4(newPlayer4);
      
      // Set new random target for one player
      if (Math.random() < 0.1) {
        const whichPlayer = Math.floor(Math.random() * 4) + 1;
        
        switch (whichPlayer) {
          case 1:
            setPlayer1(prev => ({
              ...prev,
              targetX: Math.min(45, Math.max(15, prev.x + (Math.random() * 16 - 8))),
              targetY: Math.min(40, Math.max(15, prev.y + (Math.random() * 16 - 8)))
            }));
            break;
          case 2:
            setPlayer2(prev => ({
              ...prev,
              targetX: Math.min(85, Math.max(55, prev.x + (Math.random() * 16 - 8))),
              targetY: Math.min(40, Math.max(15, prev.y + (Math.random() * 16 - 8)))
            }));
            break;
          case 3:
            setPlayer3(prev => ({
              ...prev,
              targetX: Math.min(45, Math.max(15, prev.x + (Math.random() * 16 - 8))),
              targetY: Math.min(85, Math.max(60, prev.y + (Math.random() * 16 - 8)))
            }));
            break;
          case 4:
            setPlayer4(prev => ({
              ...prev,
              targetX: Math.min(85, Math.max(55, prev.x + (Math.random() * 16 - 8))),
              targetY: Math.min(85, Math.max(60, prev.y + (Math.random() * 16 - 8)))
            }));
            break;
        }
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, [player1, player2, player3, player4, ballPosition, showHighlight]);

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
