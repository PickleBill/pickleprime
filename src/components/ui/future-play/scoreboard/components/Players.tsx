
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
  // Render a player with avatar and glow effect
  const renderPlayer = (position: Position, teamId: number, playerLabel: string) => {
    const teamColor = teamId === 1 ? playerConfig.team1Color : playerConfig.team2Color;
    const glowColor = teamId === 1 ? "rgba(76, 175, 80, 0.5)" : "rgba(26, 112, 197, 0.5)";
    
    // Define avatar images based on player position
    const avatarSrc = getPlayerAvatar(teamId, playerLabel);
    
    return (
      <div className="absolute" style={{ 
        left: `${position.x}%`, 
        top: `${position.y}%`,
        transform: 'translate(-50%, -50%)',
        zIndex: 10
      }}>
        {/* Glow effect */}
        <div 
          className="absolute rounded-full"
          style={{ 
            width: `${playerConfig.glowSize * 0.6}rem`,
            height: `${playerConfig.glowSize * 0.6}rem`,
            backgroundColor: glowColor,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(10px)',
            opacity: playerConfig.glowOpacity,
            zIndex: 5
          }}
        />
        
        {/* Player avatar */}
        <div 
          className="relative rounded-full flex items-center justify-center text-white font-bold border-2 overflow-hidden shadow-lg"
          style={{ 
            width: `${playerConfig.size * 0.8}rem`,
            height: `${playerConfig.size * 0.8}rem`,
            borderColor: teamColor,
            zIndex: 10
          }}
        >
          <img 
            src={avatarSrc} 
            alt={`Player ${playerLabel}`}
            className="w-full h-full object-cover"
          />
          
          {/* Player label overlay */}
          <div 
            className="absolute bottom-0 w-full bg-black/50 py-0.5 text-center text-xs"
          >
            {playerLabel}
          </div>
        </div>
      </div>
    );
  };
  
  // Helper function to get player avatar based on team and position
  const getPlayerAvatar = (teamId: number, playerLabel: string): string => {
    // Return avatar images based on player position
    if (teamId === 1) {
      if (playerLabel === "P1") {
        return "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100&h=100";
      } else {
        return "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100";
      }
    } else {
      if (playerLabel === "P3") {
        return "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=100&h=100";
      } else {
        return "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&q=80&w=100&h=100";
      }
    }
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
