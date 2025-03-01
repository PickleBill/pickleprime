
import React from "react";
import { ChevronLeft, Clock } from "lucide-react";
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
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full px-4 py-3 bg-[#E5DEFF] flex items-center justify-between relative z-10 border-b border-indigo-200">
      <div className="flex items-center gap-3">
        <button 
          onClick={onBackClick}
          className="p-2 rounded-full bg-white/80 hover:bg-white text-indigo-800 transition-colors border border-indigo-200"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        
        <div className="hidden sm:flex items-center gap-4 text-indigo-900/70 text-sm">
          {sponsors.map(sponsor => (
            <span key={sponsor.id}>{sponsor.name}</span>
          ))}
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-full text-indigo-900 border border-indigo-200">
          <Clock className="w-4 h-4 text-indigo-600" />
          <span className="font-mono">{formatTime(gameTime)}</span>
        </div>
        
        <div className="bg-white text-indigo-900 font-bold px-4 py-1.5 rounded-xl border border-indigo-200">
          <span>SET {currentSet}</span>
          <span className="mx-2">•</span>
          <span className="text-green-600">{player1Score}</span>
          <span className="mx-1">-</span>
          <span className="text-blue-600">{player2Score}</span>
        </div>
      </div>
      
      <div className="hidden sm:flex items-center gap-3">
        <div className="px-3 py-1.5 bg-white/80 text-indigo-900 rounded-full text-sm border border-indigo-200">
          LIVE
          <span className="inline-flex ml-2 h-2 w-2 rounded-full bg-red-500"></span>
        </div>
      </div>
    </div>
  );
};

export default SponsorsBanner;
