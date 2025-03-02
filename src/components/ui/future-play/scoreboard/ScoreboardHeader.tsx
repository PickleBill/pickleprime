
import React from 'react';
import { ArrowLeft, Share2 } from 'lucide-react';

interface ScoreboardHeaderProps {
  onBackClick: () => void;
  onShareClick: () => void;
}

const ScoreboardHeader: React.FC<ScoreboardHeaderProps> = ({ onBackClick, onShareClick }) => {
  return (
    <div className="bg-navy-light/30 backdrop-blur-md p-3 flex items-center justify-between border-b border-white/5">
      <button 
        onClick={onBackClick}
        className="text-white/80 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>
      <h1 className="text-white font-semibold">Live Match</h1>
      <button 
        onClick={onShareClick}
        className="text-white/80 hover:text-white transition-colors"
      >
        <Share2 className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ScoreboardHeader;
