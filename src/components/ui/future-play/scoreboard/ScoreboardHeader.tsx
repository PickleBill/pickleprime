
import React from 'react';
import { ChevronLeft, Clock } from 'lucide-react';

export interface ScoreboardHeaderProps {
  onBackClick: () => void;
  gameTime: number;
  player1Score?: number;
  player2Score?: number;
  currentSet?: number;
  player1Avatar?: string;
  player2Avatar?: string;
  player1Name?: string;
  player2Name?: string;
}

const ScoreboardHeader: React.FC<ScoreboardHeaderProps> = ({
  onBackClick,
  gameTime,
  player1Score = 0,
  player2Score = 0,
  currentSet = 1,
  player1Avatar,
  player2Avatar,
  player1Name = "Team Green",
  player2Name = "Team Blue"
}) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full px-4 py-3 flex items-center bg-navy-dark/80 backdrop-blur-sm border-b border-white/10">
      <button 
        onClick={onBackClick}
        className="mr-4 flex items-center text-white/80 hover:text-white transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
        <span className="ml-1">Back</span>
      </button>
      
      <div className="flex items-center gap-2">
        <span className="text-white/70 text-sm uppercase">LIVE</span>
        <span className="animate-pulse flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
        </span>
      </div>
      
      <div className="flex items-center gap-2 ml-4">
        <Clock className="w-4 h-4 text-white/70" />
        <span className="text-white/90 text-sm font-mono">{formatTime(gameTime)}</span>
      </div>
      
      <div className="ml-auto flex items-center gap-3">
        <div className="flex items-center">
          <span className="text-[#176840] font-bold mr-2">{player1Score}</span>
          <span className="text-white/50">-</span>
          <span className="text-[#0A4D73] font-bold ml-2">{player2Score}</span>
        </div>
        <span className="text-white/50 text-sm">SET {currentSet}</span>
      </div>
    </div>
  );
};

export default ScoreboardHeader;
