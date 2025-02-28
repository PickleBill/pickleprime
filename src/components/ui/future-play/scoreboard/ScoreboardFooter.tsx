
import React from 'react';
import { Video } from 'lucide-react';
import { Sponsor } from './types';

interface ScoreboardFooterProps {
  onHighlightClick: () => void;
  sponsors: Sponsor[];
}

const ScoreboardFooter: React.FC<ScoreboardFooterProps> = ({
  onHighlightClick,
  sponsors
}) => {
  return (
    <div className="w-full py-3 px-4 bg-navy-dark/80 backdrop-blur-sm border-t border-white/10 flex items-center justify-between">
      <div className="text-white/40 text-xs uppercase">
        SWINGNET
      </div>
      
      <div className="flex items-center gap-4">
        <div className="text-white/60 text-sm">
          <span className="uppercase text-xs mr-2">Sponsored by</span>
          {sponsors.map((sponsor, index) => (
            <React.Fragment key={sponsor.id}>
              {index > 0 && <span className="mx-2 text-white/30">•</span>}
              <span className="uppercase">{sponsor.name}</span>
            </React.Fragment>
          ))}
        </div>
        
        <button 
          onClick={onHighlightClick}
          className="flex items-center gap-1 py-1 px-3 bg-[#0C8068]/20 text-[#0C8068] rounded hover:bg-[#0C8068]/30 transition-colors"
        >
          <Video className="w-4 h-4" />
          <span>Highlights</span>
        </button>
      </div>
    </div>
  );
};

export default ScoreboardFooter;
