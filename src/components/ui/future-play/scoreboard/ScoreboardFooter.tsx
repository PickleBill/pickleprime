
import React from 'react';
import { Sponsor } from './types';

interface ScoreboardFooterProps {
  sponsors: Sponsor[];
  onHighlightClick?: () => void;
}

const ScoreboardFooter: React.FC<ScoreboardFooterProps> = ({ 
  sponsors,
  onHighlightClick 
}) => {
  return (
    <div className="w-full px-4 py-2 bg-navy-dark border-t border-white/10 flex items-center justify-between">
      <div className="flex-1">
        <span className="text-white/50 text-xs block mb-1">SPONSORS</span>
        <div className="flex items-center gap-3">
          {sponsors.map(sponsor => (
            <div key={sponsor.id} className="text-white/80 text-xs font-medium">
              {sponsor.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScoreboardFooter;
