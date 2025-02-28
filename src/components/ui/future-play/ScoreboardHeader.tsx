
import React from "react";
import { Clock, Share2, MessageSquare } from "lucide-react";

interface ScoreboardHeaderProps {
  gameTime: number;
  currentSet: number;
  formatTime: (seconds: number) => string;
}

const ScoreboardHeader: React.FC<ScoreboardHeaderProps> = ({ gameTime, currentSet, formatTime }) => {
  return (
    <div className="w-full px-6 py-4 border-b border-white/10 flex items-center justify-between bg-navy-dark/70 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <span className="text-primary font-bold">SWINGNET</span>
        <div className="w-px h-6 bg-white/20"></div>
        <span className="text-white/70 text-sm">LIVE</span>
        <span className="animate-pulse flex h-3 w-3 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
        </span>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-navy-light/50 px-3 py-1 rounded-full border border-white/10">
          <Clock className="w-4 h-4 text-white/70" />
          <span className="text-white/90 text-sm font-mono">{formatTime(gameTime)}</span>
        </div>
        
        <div className="text-white/60 text-sm">SET {currentSet}</div>
        
        <div className="flex items-center gap-2">
          <span className="text-white/60 text-sm">PICKLEVILLE COURTS</span>
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <span className="text-white/60 text-sm">COURT 3</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="text-white/60 hover:text-white transition-colors">
          <Share2 className="w-5 h-5" />
        </button>
        <button className="text-white/60 hover:text-white transition-colors">
          <MessageSquare className="w-5 h-5" />
        </button>
        <button className="bg-white/10 hover:bg-white/20 transition-colors rounded-full px-4 py-1 text-white text-sm backdrop-blur-sm">
          UPGRADE VIEW
        </button>
      </div>
    </div>
  );
};

export default ScoreboardHeader;
