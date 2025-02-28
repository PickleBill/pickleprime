
import React from 'react';
import { Activity, Video } from 'lucide-react';

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
    <>
      {/* Real-time Analytics Bar */}
      <div className="w-full px-3 sm:px-6 py-2 sm:py-3 bg-[#092435]/90 backdrop-blur-sm border-t border-[#1A4258]/50 flex items-center justify-between sm:-mt-2 relative z-10 shadow-lg">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-[#1a9dc3]" />
          <div>
            <p className="text-white/60 text-xs">Shot accuracy: 92% | Speed: 52 mph</p>
          </div>
        </div>
        
        <button 
          className="py-1 px-2 rounded bg-[#0C8068]/20 text-[#0C8068] text-xs flex items-center gap-1.5 hover:bg-[#0C8068]/30 transition-colors"
          onClick={onHighlightClick}
        >
          <Video className="w-3 h-3" />
          <span className="hidden sm:inline">Highlights</span>
          <span className="sm:hidden">View</span>
        </button>
      </div>
      
      {/* Sponsor Footer */}
      <div className="w-full py-2 px-3 sm:px-6 bg-[#092435]/70 backdrop-blur-sm border-t border-[#1A4258]/50 flex items-center justify-between">
        <div className="text-white/40 text-xs uppercase">
          SwingNet
        </div>
        
        <div className="hidden sm:flex items-center gap-2">
          <span className="text-white/40 text-xs uppercase mr-2">Sponsored by</span>
          <div className="flex items-center gap-6">
            {sponsors.map(sponsor => (
              <span key={sponsor.id} className="text-white/80 uppercase text-sm">{sponsor.name}</span>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-1">
          <div className="w-4 h-1 bg-primary rounded-full"></div>
          <div className="w-4 h-1 bg-white/30 rounded-full"></div>
          <div className="w-4 h-1 bg-white/30 rounded-full"></div>
        </div>
      </div>
    </>
  );
};

export default ScoreboardFooter;
