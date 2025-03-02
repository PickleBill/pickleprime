import React, { useState, useEffect } from 'react';
import CourtSurface from './CourtSurface';
import PlayerAvatar from './PlayerAvatar';
import Ball from './Ball';
import { PlayerPosition } from '../types';

const CourtViewPanel = () => {
  // Define initial positions of players
  const [player1Position, setPlayer1Position] = useState<PlayerPosition>({ 
    x: 100, 
    y: 150,
    targetX: 100,
    targetY: 150
  });
  const [player2Position, setPlayer2Position] = useState<PlayerPosition>({ 
    x: 300, 
    y: 150,
    targetX: 300,
    targetY: 150
  });
  const [player3Position, setPlayer3Position] = useState<PlayerPosition>({ 
    x: 100, 
    y: 450,
    targetX: 100,
    targetY: 450
  });
  const [player4Position, setPlayer4Position] = useState<PlayerPosition>({ 
    x: 300, 
    y: 450,
    targetX: 300,
    targetY: 450
  });
  
  // Ball position
  const [ballPosition, setBallPosition] = useState({ x: 200, y: 300 });
  const [ballVisible, setBallVisible] = useState(true);
  
  // Animation for the ball
  useEffect(() => {
    const interval = setInterval(() => {
      // Random movement for the ball
      setBallPosition(prev => ({
        x: prev.x + (Math.random() - 0.5) * 30,
        y: prev.y + (Math.random() - 0.5) * 30
      }));
      
      // Keep the ball within court boundaries
      if (ballPosition.x < 50) setBallPosition(prev => ({ ...prev, x: 50 }));
      if (ballPosition.x > 350) setBallPosition(prev => ({ ...prev, x: 350 }));
      if (ballPosition.y < 100) setBallPosition(prev => ({ ...prev, y: 100 }));
      if (ballPosition.y > 500) setBallPosition(prev => ({ ...prev, y: 500 }));
      
      // Occasionally hide/show the ball to simulate hits
      if (Math.random() > 0.9) {
        setBallVisible(false);
        setTimeout(() => setBallVisible(true), 300);
      }
      
      // Random player movements
      if (Math.random() > 0.7) {
        const randomMovement = () => (Math.random() - 0.5) * 40;
        
        setPlayer1Position(prev => ({
          ...prev,
          targetX: Math.max(50, Math.min(150, prev.x + randomMovement())),
          targetY: Math.max(100, Math.min(200, prev.y + randomMovement()))
        }));
        
        setPlayer2Position(prev => ({
          ...prev,
          targetX: Math.max(250, Math.min(350, prev.x + randomMovement())),
          targetY: Math.max(100, Math.min(200, prev.y + randomMovement()))
        }));
        
        setPlayer3Position(prev => ({
          ...prev,
          targetX: Math.max(50, Math.min(150, prev.x + randomMovement())),
          targetY: Math.max(400, Math.min(500, prev.y + randomMovement()))
        }));
        
        setPlayer4Position(prev => ({
          ...prev,
          targetX: Math.max(250, Math.min(350, prev.x + randomMovement())),
          targetY: Math.max(400, Math.min(500, prev.y + randomMovement()))
        }));
      }
      
      // Move players toward their target positions
      const moveTowardTarget = (current: PlayerPosition): PlayerPosition => {
        const dx = (current.targetX - current.x) * 0.1;
        const dy = (current.targetY - current.y) * 0.1;
        
        return {
          ...current,
          x: current.x + dx,
          y: current.y + dy
        };
      };
      
      setPlayer1Position(prev => moveTowardTarget(prev));
      setPlayer2Position(prev => moveTowardTarget(prev));
      setPlayer3Position(prev => moveTowardTarget(prev));
      setPlayer4Position(prev => moveTowardTarget(prev));
      
    }, 200);
    
    return () => clearInterval(interval);
  }, [ballPosition]);
  
  return (
    <div className="bg-navy-light rounded-lg p-3 h-full">
      <div className="relative w-full h-[600px] overflow-hidden rounded-lg bg-green-800">
        <CourtSurface id="main-court" />
        
        {/* Players */}
        <PlayerAvatar playerPosition={player1Position} playerId="1" side="top" />
        <PlayerAvatar playerPosition={player2Position} playerId="2" side="top" />
        <PlayerAvatar playerPosition={player3Position} playerId="3" side="bottom" />
        <PlayerAvatar playerPosition={player4Position} playerId="4" side="bottom" />
        
        {/* Ball */}
        {ballVisible && (
          <Ball position={ballPosition} />
        )}
      </div>
    </div>
  );
};

export default CourtViewPanel;
