
import React from "react";
import { Share2, Video, User } from "lucide-react";

interface ActionFooterProps {
  onHighlightClick: () => void;
  onPlayerProfileClick: () => void;
  onShareClick: () => void;
}

const ActionFooter: React.FC<ActionFooterProps> = ({
  onHighlightClick,
  onPlayerProfileClick,
  onShareClick
}) => {
  return (
    <div className="w-full bg-navy-dark py-4">
      <div className="flex items-center justify-center gap-6">
        <button 
          onClick={onHighlightClick}
          className="flex items-center gap-2 py-3 px-6 bg-[#19a974] text-white rounded-md text-base font-medium hover:opacity-90 transition-opacity"
        >
          <Video className="w-5 h-5" />
          <span>View Highlights</span>
        </button>
        
        <button 
          onClick={onPlayerProfileClick}
          className="flex items-center gap-2 py-3 px-6 bg-[#3db5e6] text-white rounded-md text-base font-medium hover:opacity-90 transition-opacity"
        >
          <User className="w-5 h-5" />
          <span>Player Profile</span>
        </button>
        
        <button 
          onClick={onShareClick}
          className="p-3 rounded-full bg-navy/70 text-white/80 hover:bg-navy/90 hover:text-white transition-colors"
        >
          <Share2 className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default ActionFooter;
