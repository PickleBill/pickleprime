
import React from 'react';
import { PlayerPosition } from '../types';

interface PlayerAvatarProps {
  playerPosition: PlayerPosition;
  playerId: string;
  side: string;
}

const PlayerAvatar: React.FC<PlayerAvatarProps> = ({ playerPosition, playerId, side }) => {
  const { x, y } = playerPosition;
  
  // Determine color based on player position
  const getPlayerColor = (playerId: string) => {
    switch(playerId) {
      case "1":
        return "bg-blue-500";
      case "2":
        return "bg-green-500";
      case "3":
        return "bg-red-500";
      case "4":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };
  
  return (
    <div 
      className={`absolute w-8 h-8 rounded-full flex items-center justify-center ${getPlayerColor(playerId)} shadow-lg transform -translate-x-1/2 -translate-y-1/2 z-10`}
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    >
      <span className="text-xs font-bold text-white">{playerId}</span>
      
      {/* Player shadow/reflection */}
      <div className="absolute bottom-0 w-6 h-1 bg-black/20 rounded-full"></div>
    </div>
  );
};

export default PlayerAvatar;
