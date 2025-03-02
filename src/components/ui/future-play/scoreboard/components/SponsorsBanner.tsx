
import React from "react";
import { ArrowLeft } from "lucide-react";
import { Sponsor } from "../types";

interface SponsorsBannerProps {
  sponsors: Sponsor[];
  onBackClick: () => void;
  gameTime: number;
  player1Score: number;
  player2Score: number;
  currentSet: number;
}

const SponsorsBanner: React.FC<SponsorsBannerProps> = ({
  sponsors,
  onBackClick,
  gameTime,
  player1Score,
  player2Score,
  currentSet
}) => {
  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  
  return (
    <div className="bg-[#001a2c] border-b border-[#0a2d4a] py-2 px-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button 
          onClick={onBackClick} 
          className="text-white hover:text-white/80 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="sr-only">Back</span>
        </button>
        
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-white font-medium text-sm uppercase">LIVE</span>
        </div>
        
        <div className="text-white/80 text-sm">{formatTime(gameTime)}</div>
      </div>
      
      <div className="flex items-center gap-2">
        <span className="text-white/70 text-xs uppercase">SPONSORED BY</span>
        <div className="flex items-center gap-3">
          {sponsors.map(sponsor => (
            <div key={sponsor.id} className="h-5">
              <img 
                src={`/sponsor-${sponsor.id}.png`} 
                alt={sponsor.name}
                className="h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="text-[#4CAF50] font-semibold text-lg">{player1Score}</div>
        <div className="text-white text-sm">-</div>
        <div className="text-[#3db5e6] font-semibold text-lg">{player2Score}</div>
        <div className="text-white/70 text-xs">SET {currentSet}</div>
      </div>
    </div>
  );
};

export default SponsorsBanner;
