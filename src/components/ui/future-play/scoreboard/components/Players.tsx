
import React from 'react';
import { motion } from 'framer-motion';

interface PlayerProps {
  player1: {
    x: number;
    y: number;
    rotation: number;
  };
  player2: {
    x: number;
    y: number;
    rotation: number;
  };
  player3: {
    x: number;
    y: number;
    rotation: number;
  };
  player4: {
    x: number;
    y: number;
    rotation: number;
  };
}

const Players: React.FC<PlayerProps> = ({
  player1,
  player2,
  player3,
  player4
}) => {
  // Increased avatar size by 23%
  const avatarSize = 32 * 1.23; // base size * 1.23 (23% increase)
  
  // Team colors
  const team1Color = '#2BCB6E'; // Green team (player 1 & 3)
  const team2Color = '#3B82F6'; // Blue team (player 2 & 4)
  
  // Create a player avatar with trail effect
  const PlayerAvatar = ({ 
    x, 
    y, 
    rotation, 
    teamColor, 
    playerNumber 
  }: { 
    x: number, 
    y: number, 
    rotation: number, 
    teamColor: string, 
    playerNumber: number 
  }) => {
    return (
      <>
        {/* Player motion trail */}
        <div
          className="absolute rounded-full opacity-40 blur-sm"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
            width: `${avatarSize * 1.4}px`,
            height: `${avatarSize * 1.4}px`,
            backgroundColor: `${teamColor}30`,
            boxShadow: `0 0 20px 5px ${teamColor}40`,
            zIndex: 15,
            transition: 'all 0.3s ease-out'
          }}
        />
        
        {/* Player glow effect */}
        <div
          className="absolute rounded-full opacity-60"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
            width: `${avatarSize * 1.2}px`,
            height: `${avatarSize * 1.2}px`,
            backgroundColor: `${teamColor}20`,
            boxShadow: `0 0 15px 3px ${teamColor}60`,
            zIndex: 16,
            transition: 'all 0.2s ease-out'
          }}
        />
        
        {/* Player avatar */}
        <motion.div
          className="absolute rounded-full border-2 flex items-center justify-center text-xs font-bold text-white shadow-lg"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
            width: `${avatarSize}px`,
            height: `${avatarSize}px`,
            backgroundColor: teamColor,
            borderColor: 'white',
            zIndex: 20,
            transition: 'all 0.15s linear'
          }}
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              `0 0 0 0px ${teamColor}00`,
              `0 0 0 3px ${teamColor}30`,
              `0 0 0 0px ${teamColor}00`
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          P{playerNumber}
        </motion.div>
      </>
    );
  };

  return (
    <>
      {/* Green Team (Left Side) */}
      <PlayerAvatar 
        x={player1.x} 
        y={player1.y} 
        rotation={player1.rotation} 
        teamColor={team1Color} 
        playerNumber={1} 
      />
      
      <PlayerAvatar 
        x={player3.x} 
        y={player3.y} 
        rotation={player3.rotation} 
        teamColor={team1Color} 
        playerNumber={3} 
      />
      
      {/* Blue Team (Right Side) */}
      <PlayerAvatar 
        x={player2.x} 
        y={player2.y} 
        rotation={player2.rotation} 
        teamColor={team2Color} 
        playerNumber={2} 
      />
      
      <PlayerAvatar 
        x={player4.x} 
        y={player4.y} 
        rotation={player4.rotation} 
        teamColor={team2Color} 
        playerNumber={4} 
      />
    </>
  );
};

export default Players;
