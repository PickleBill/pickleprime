
import React from 'react';
import { Video } from 'lucide-react';

interface Sponsor {
  id: number;
  name: string;
}

interface ScoreboardFooterProps {
  onHighlightClick: () => void;
  sponsors: Sponsor[];
}

const ScoreboardFooter: React.FC<ScoreboardFooterProps> = ({ 
  onHighlightClick,
  sponsors
}) => {
  return (
    <div className="w-full bg-navy-dark border-t border-white/10 py-2 px-3">
      <div className="flex items-center justify-between">
        {/* Sponsor list */}
        <div className="flex-1 overflow-hidden">
          <div className="flex gap-4 items-center text-white/60 text-xs">
            {sponsors.map((sponsor) => (
              <span key={sponsor.id}>{sponsor.name}</span>
            ))}
          </div>
        </div>
        
        {/* Highlights button */}
        <button 
          onClick={onHighlightClick}
          className="flex items-center gap-1.5 bg-navy-dark/80 border border-white/10 px-3 py-1.5 rounded-full text-white text-sm hover:bg-white/10 transition-colors"
        >
          <Video className="w-4 h-4 text-[#33C3F0]" />
          <span>Highlights</span>
        </button>
      </div>
    </div>
  );
};

export default ScoreboardFooter;
