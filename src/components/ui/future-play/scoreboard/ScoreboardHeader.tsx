
import React from "react";
import { ChevronLeft, Clock, Activity } from "lucide-react";

interface ScoreboardHeaderProps {
  onBackClick: () => void;
  gameTime: number;
  player1Score: number;
  player2Score: number;
  player1Avatar: string;
  player2Avatar: string;
  player1Name: string;
  player2Name: string;
}

const ScoreboardHeader: React.FC<ScoreboardHeaderProps> = ({
  onBackClick,
  gameTime,
  player1Score,
  player2Score,
  player1Avatar,
  player2Avatar,
  player1Name,
  player2Name
}) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full px-4 py-3 flex flex-wrap items-center justify-between bg-[#092435]/70 backdrop-blur-sm border-b border-[#1A4258]/50 z-20">
      <div className="flex items-center gap-2 w-full sm:w-auto mb-2 sm:mb-0">
        <button 
          onClick={onBackClick}
          className="px-3 py-1.5 bg-[#092435]/80 hover:bg-[#092435] border border-[#1A4258]/50 rounded-full text-white/80 flex items-center gap-1.5 backdrop-blur-sm transition-all"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="text-sm">Back</span>
        </button>
        
        <div className="flex items-center gap-1.5 ml-2">
          <span className="text-white/70 text-xs">LIVE</span>
          <span className="animate-pulse flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
          </span>
        </div>

        <div className="flex items-center gap-1.5 ml-auto">
          <Clock className="w-3.5 h-3.5 text-white/70" />
          <span className="text-white/90 text-xs font-mono">{formatTime(gameTime)}</span>
        </div>
      </div>
      
      {/* Score display - Now more prominent in header on mobile */}
      <div className="flex items-center justify-center gap-4 w-full sm:hidden bg-[#092435]/90 py-2 rounded-lg border border-[#1A4258]/30">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#1a9dc3]">
            <img src={player1Avatar} alt={player1Name} className="w-full h-full object-cover" />
          </div>
          <span className="text-[#1a9dc3] font-bold text-2xl">{player1Score}</span>
        </div>
        <span className="text-white/50 text-xl">-</span>
        <div className="flex items-center gap-2">
          <span className="text-primary font-bold text-2xl">{player2Score}</span>
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary">
            <img src={player2Avatar} alt={player2Name} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreboardHeader;
