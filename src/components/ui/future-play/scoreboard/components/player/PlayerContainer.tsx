
import React from 'react';
import PlayerSilhouette from './PlayerSilhouette';
import { Position } from '../../types';

interface PlayerContainerProps {
  position: Position;
  teamId: number;
  playerLabel: string;
  playerIndex: number;
}

const PlayerContainer: React.FC<PlayerContainerProps> = ({ 
  position, 
  teamId, 
  playerLabel, 
  playerIndex 
}) => {
  // Function to get more vibrant neon colors for each player
  const getPlayerColor = (teamId: number, playerIndex: number) => {
    // More vibrant neon colors
    const team1Colors = ["#5AFF6E", "#33FF99"]; // Bright neon green variations for left team
    const team2Colors = ["#00F5FF", "#00DDFF"]; // Even brighter neon blue variations for right team
    
    const playerColors = teamId === 1 ? team1Colors : team2Colors;
    return playerColors[playerIndex % playerColors.length];
  };

  const playerColor = getPlayerColor(teamId, playerIndex);
  const glowColor = teamId === 1 
    ? "rgba(90, 255, 110, 0.8)" // Bright green glow for team 1
    : "rgba(0, 245, 255, 0.9)"; // Brighter blue glow for team 2
  
  // Label background color - using team colors
  const labelBgColor = teamId === 1 
    ? "rgba(90, 255, 110, 0.9)" // Green team label background
    : "rgba(0, 245, 255, 0.9)"; // Brighter blue team label background
  
  // Label text color - darker for better contrast
  const labelTextColor = teamId === 1 
    ? "#004D00" // Dark green for green team labels
    : "#003366"; // Dark blue for blue team labels
  
  // Shadow properties for better visibility
  const shadowStyle = {
    filter: `drop-shadow(0 0 12px ${teamId === 1 ? 'rgba(0, 77, 0, 0.9)' : 'rgba(0, 51, 153, 0.9)'})`,
    WebkitFilter: `drop-shadow(0 0 12px ${teamId === 1 ? 'rgba(0, 77, 0, 0.9)' : 'rgba(0, 51, 153, 0.9)'})`
  };
  
  // UPDATED: Both teams face upright (no rotation)
  const fixedRotation = 0; // Changed from team-dependent rotation
  
  // Increased player size
  const sizeMultiplier = 1.23;

  return (
    <div className="absolute" style={{ 
      left: `${position.x}%`, 
      top: `${position.y}%`,
      transform: `translate(-50%, -50%) rotate(${fixedRotation}deg)`,
      zIndex: 10,
      transition: 'all 0.1s linear' // Faster transitions for more responsive movement
    }}>
      {/* Glow effect */}
      <div 
        className="absolute rounded-full animate-pulse-slow"
        style={{ 
          width: `${9 * sizeMultiplier * 1.2}px`, // Increased by 20% + 23%
          height: `${9 * sizeMultiplier * 1.2}px`, // Increased by 20% + 23%
          background: `radial-gradient(circle, ${glowColor} 0%, rgba(0,0,0,0) 70%)`,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(8px)',
          opacity: 0.85, // Increased opacity for more glow
          zIndex: 5,
          transition: 'all 0.1s linear'
        }}
      />
      
      {/* Player silhouette */}
      <div 
        className="relative flex items-center justify-center"
        style={{ 
          width: `${5.75 * 4 * sizeMultiplier * 1.15}px`, // Increased by 15% + 23%
          height: `${5.75 * 6 * sizeMultiplier * 1.15}px`, // Increased by 15% + 23%
          zIndex: 10,
          opacity: 0.95,
          ...shadowStyle, // Added shadow
          transition: 'all 0.1s linear'
        }}
      >
        {/* SVG silhouette of a pickleball player */}
        <div className="w-full h-full" style={{ color: playerColor }}>
          <PlayerSilhouette teamId={teamId} playerIndex={playerIndex} />
        </div>
        
        {/* Player label */}
        <div 
          className="absolute bottom-0 text-center text-[8px] font-bold rounded-sm px-1.5 py-0.5"
          style={{ 
            width: "100%", 
            backgroundColor: labelBgColor,
            color: labelTextColor,
            boxShadow: "0 2px 4px rgba(0,0,0,0.4)", // Enhanced shadow to label
            borderRadius: "4px"
          }}
        >
          {playerLabel}
        </div>
      </div>
    </div>
  );
};

export default PlayerContainer;
