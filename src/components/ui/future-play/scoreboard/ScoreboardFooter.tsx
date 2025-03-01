
import React from "react";
import { Share2, Video } from "lucide-react";

export interface ScoreboardFooterProps {
  onViewHighlights: () => void;
}

const ScoreboardFooter: React.FC<ScoreboardFooterProps> = ({ onViewHighlights }) => {
  return (
    <div className="w-full py-3 px-4 bg-navy-dark border-t border-white/5 flex items-center justify-between">
      <div className="flex-1"></div>
      
      <div className="flex items-center gap-2">
        <button 
          onClick={onViewHighlights}
          className="py-1.5 px-3 rounded-md bg-primary/10 text-primary flex items-center text-sm gap-1.5 hover:bg-primary/20 transition-colors"
        >
          <Video className="w-4 h-4" />
          <span>View Highlights</span>
        </button>
        
        <button className="py-1.5 px-3 rounded-md bg-white/5 text-white/80 flex items-center text-sm gap-1.5 hover:bg-white/10 transition-colors">
          <Share2 className="w-4 h-4" />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default ScoreboardFooter;
