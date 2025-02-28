
import React from 'react';
import { Position } from '../types';
import { playerConfig } from '../constants/courtConfig';

interface PlayersProps {
  player1: Position;
  player2: Position;
  player3: Position;
  player4: Position;
}

const Players: React.FC<PlayersProps> = ({
  player1,
  player2,
  player3,
  player4
}) => {
  // Render a player with glow effect
  const renderPlayer = (position: Position, teamId: number, playerLabel: string) => {
    const teamColor = teamId === 1 ? playerConfig.team1Color : playerConfig.team2Color;
    const glowColor = teamId === 1 ? "rgba(76, 175, 80, 0.5)" : "rgba(26, 112, 197, 0.5)";
    
    return (
      <div className="absolute" style={{ 
        left: `${position.x}%`, 
        top: `${position.y}%`,
        transform: 'translate(-50%, -50%)',
      }}>
        {/* Glow effect */}
        <div 
          className="absolute rounded-full"
          style={{ 
            width: `${playerConfig.glowSize * 0.4}rem`,
            height: `${playerConfig.glowSize * 0.4}rem`,
            backgroundColor: glowColor,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(10px)',
            opacity: playerConfig.glowOpacity
          }}
        />
        
        {/* Player circle */}
        <div 
          className="relative rounded-full flex items-center justify-center text-white font-bold border-2 border-white shadow-lg z-10"
          style={{ 
            width: `${playerConfig.size * 0.4}rem`,
            height: `${playerConfig.size * 0.4}rem`,
            backgroundColor: teamColor,
          }}
        >
          {playerLabel}
        </div>
      </div>
    );
  };

  return (
    <>
      {renderPlayer(player1, 1, "P1")}
      {renderPlayer(player2, 1, "P2")}
      {renderPlayer(player3, 2, "P3")}
      {renderPlayer(player4, 2, "P4")}
    </>
  );
};

export default Players;
