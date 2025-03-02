
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
    <div className="bg-[#9b87f5] border-b-2 border-[#8B5CF6] py-5 px-6 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-4">
        <button 
          onClick={onBackClick} 
          className="text-white hover:text-white/80 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
          <span className="sr-only">Back</span>
        </button>
        
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-white font-semibold text-base uppercase tracking-wider">LIVE</span>
        </div>
        
        <div className="text-white text-base font-medium">{formatTime(gameTime)}</div>
      </div>
      
      <div className="flex items-center gap-3">
        <span className="text-white text-sm uppercase font-medium tracking-wider">SPONSORED BY</span>
        <div className="flex items-center gap-6">
          {sponsors.map((sponsor) => (
            <div 
              key={sponsor.id} 
              className="bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="h-9 object-contain hover:scale-105 transition-transform duration-200"
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="text-[#4CAF50] font-bold text-2xl">{player1Score}</div>
        <div className="text-white text-lg font-light">-</div>
        <div className="text-[#3db5e6] font-bold text-2xl">{player2Score}</div>
        <div className="text-white text-sm font-semibold bg-[#8B5CF6] px-2 py-1 rounded-md">SET {currentSet}</div>
      </div>
    </div>
  );
};

export default SponsorsBanner;
