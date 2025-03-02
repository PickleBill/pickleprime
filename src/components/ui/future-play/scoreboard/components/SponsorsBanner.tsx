
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
    <div className="bg-[#7E69AB] border-b border-[#6E59A5] py-2 px-4 flex items-center justify-between">
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
        <div className="flex items-center gap-5">
          <img 
            src="/lovable-uploads/93ec8769-f4ff-4eba-aff7-a78b39986907.png" 
            alt="Joola" 
            className="h-6 object-contain"
          />
          <img 
            src="/lovable-uploads/ec4c1855-060c-49cf-afd6-3d56765fb726.png" 
            alt="Fanatics" 
            className="h-6 object-contain"
          />
          <img 
            src="/lovable-uploads/d39d9c68-9778-4a89-b892-24f2e597b654.png" 
            alt="Urban Pickleball Club" 
            className="h-6 object-contain"
          />
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
