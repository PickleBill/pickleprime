
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
  // Function to get more vibrant neon colors for each player
  const getPlayerColor = (teamId: number, playerIndex: number) => {
    // More vibrant neon colors
    const team1Colors = ["#4AFF5E", "#33FF99"]; // Bright neon green variations
    const team2Colors = ["#33C3F0", "#1EAEDB"]; // Bright neon blue variations
    
    const playerColors = teamId === 1 ? team1Colors : team2Colors;
    return playerColors[playerIndex % playerColors.length];
  };
  
  // Render a player with silhouette style
  const renderPlayer = (position: Position, teamId: number, playerLabel: string, playerIndex: number) => {
    const playerColor = getPlayerColor(teamId, playerIndex);
    const glowColor = teamId === 1 
      ? "rgba(74, 255, 94, 0.6)" // Bright green glow
      : "rgba(51, 195, 240, 0.6)"; // Bright blue glow
    
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
        
        {/* Player silhouette */}
        <div 
          className="relative flex items-center justify-center"
          style={{ 
            width: `${playerConfig.size * 1.2}rem`,
            height: `${playerConfig.size * 1.6}rem`, // Taller for full body silhouette
            zIndex: 10,
            opacity: playerConfig.opacity // Apply opacity setting
          }}
        >
          {/* SVG silhouette of a pickleball player */}
          <div className="w-full h-full" style={{ color: playerColor }}>
            {getPlayerSilhouette(teamId, playerLabel)}
          </div>
          
          {/* Player label */}
          <div 
            className="absolute bottom-0 w-full text-center text-xs font-bold text-white bg-black/50 rounded-sm px-1"
          >
            {playerLabel}
          </div>
        </div>
      </div>
    );
  };
  
  // Helper function to get player silhouette based on team and position
  const getPlayerSilhouette = (teamId: number, playerLabel: string) => {
    // Create different poses for each player
    if (teamId === 1) {
      if (playerLabel === "P1") {
        // Forehand pose (team 1, player 1)
        return (
          <svg viewBox="0 0 100 140" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M50,20 C55,20 59,16 59,11 C59,6 55,2 50,2 C45,2 41,6 41,11 C41,16 45,20 50,20 Z" />
            <path d="M40,25 L60,25 L65,60 L55,60 L60,100 L50,100 L45,60 L35,60 Z" />
            <path d="M60,45 L75,35 L80,40 L65,55 Z" /> {/* Right arm with paddle */}
            <path d="M40,45 L25,55 L20,50 L30,40 Z" /> {/* Left arm */}
            <path d="M50,100 L40,140 L45,140 L50,120 L55,140 L60,140 L50,100 Z" /> {/* Legs */}
          </svg>
        );
      } else {
        // Ready position (team 1, player 2)
        return (
          <svg viewBox="0 0 100 140" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M50,20 C55,20 59,16 59,11 C59,6 55,2 50,2 C45,2 41,6 41,11 C41,16 45,20 50,20 Z" />
            <path d="M35,25 L65,25 L60,60 L55,60 L55,90 L45,90 L45,60 L40,60 Z" />
            <path d="M65,40 L80,45 L75,55 L65,50 Z" /> {/* Right arm */}
            <path d="M35,40 L20,45 L25,55 L35,50 Z" /> {/* Left arm with paddle */}
            <path d="M45,90 L35,130 L40,130 L50,100 L60,130 L65,130 L55,90 Z" /> {/* Legs spread */}
          </svg>
        );
      }
    } else {
      if (playerLabel === "P3") {
        // Backhand pose (team 2, player 3)
        return (
          <svg viewBox="0 0 100 140" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M50,20 C55,20 59,16 59,11 C59,6 55,2 50,2 C45,2 41,6 41,11 C41,16 45,20 50,20 Z" />
            <path d="M40,25 L60,25 L65,60 L55,60 L60,100 L50,100 L45,60 L35,60 Z" />
            <path d="M35,45 L20,35 L15,40 L30,55 Z" /> {/* Left arm with paddle */}
            <path d="M65,45 L80,55 L85,50 L75,40 Z" /> {/* Right arm */}
            <path d="M50,100 L35,140 L45,140 L50,120 L55,140 L65,140 L50,100 Z" /> {/* Legs */}
          </svg>
        );
      } else {
        // Serving position (team 2, player 4)
        return (
          <svg viewBox="0 0 100 140" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M50,20 C55,20 59,16 59,11 C59,6 55,2 50,2 C45,2 41,6 41,11 C41,16 45,20 50,20 Z" />
            <path d="M40,25 L60,25 L62,70 L52,70 L55,100 L45,100 L48,70 L38,70 Z" />
            <path d="M62,35 L85,25 L90,35 L67,45 Z" /> {/* Right arm raised with paddle */}
            <path d="M38,35 L25,45 L20,35 L33,25 Z" /> {/* Left arm */}
            <path d="M50,100 L40,140 L45,140 L50,120 L55,140 L60,140 L50,100 Z" /> {/* Legs */}
          </svg>
        );
      }
    }
  };

  return (
    <>
      {renderPlayer(player1, 1, "P1", 0)}
      {renderPlayer(player2, 1, "P2", 1)}
      {renderPlayer(player3, 2, "P3", 0)}
      {renderPlayer(player4, 2, "P4", 1)}
    </>
  );
};

export default Players;
