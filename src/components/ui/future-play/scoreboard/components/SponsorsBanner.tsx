
import React from "react";
import { Activity, ChevronLeft, Clock } from "lucide-react";

interface SponsorsBannerProps {
  sponsors: { name: string; id: number }[];
  onBackClick: () => void;
  gameTime?: number;
  player1Score?: number;
  player2Score?: number;
  currentSet?: number;
}

const SponsorsBanner: React.FC<SponsorsBannerProps> = ({ 
  sponsors, 
  onBackClick,
  gameTime,
  player1Score,
  player2Score,
  currentSet 
}) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full px-4 py-2 bg-[#E5DEFF] flex items-center justify-between border-b border-white/10">
      <div className="flex items-center gap-2">
        <button 
          onClick={onBackClick}
          className="flex items-center text-navy-dark/80 hover:text-navy-dark transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="ml-0.5 font-medium">Back</span>
        </button>

        <div className="ml-4 flex items-center gap-2">
          <Activity className="w-4 h-4 text-[#F97316]" />
          <span className="text-navy-dark/80 text-sm font-medium">LIVE</span>
          <span className="animate-pulse flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
          </span>
        </div>

        {gameTime !== undefined && (
          <div className="flex items-center gap-2 ml-4">
            <Clock className="w-4 h-4 text-navy-dark/70" />
            <span className="text-navy-dark/80 text-sm font-mono">{formatTime(gameTime)}</span>
          </div>
        )}
      </div>
      
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-1 text-navy-dark/70 text-xs">
          <span>SPONSORED BY</span>
        </div>
        <div className="flex items-center gap-5">
          <img 
            src="/lovable-uploads/f4783ae6-927e-4dc0-a01c-3cb8466f4062.png" 
            alt="Joola" 
            className="h-7 w-auto object-contain"
          />
          <img 
            src="/lovable-uploads/73338dad-0d30-4c2b-a39b-b4c1f13ebe72.png" 
            alt="Fanatics" 
            className="h-7 w-auto object-contain"
          />
        </div>
      </div>

      {player1Score !== undefined && player2Score !== undefined && currentSet !== undefined && (
        <div className="flex items-center gap-3">
          <div className="flex items-center">
            <span className="text-[#176840] font-bold text-xl">{player1Score}</span>
            <span className="text-navy-dark/50 mx-1">-</span>
            <span className="text-[#0A4D73] font-bold text-xl">{player2Score}</span>
          </div>
          <span className="text-navy-dark/60 text-sm">SET {currentSet}</span>
        </div>
      )}
    </div>
  );
};

export default SponsorsBanner;
