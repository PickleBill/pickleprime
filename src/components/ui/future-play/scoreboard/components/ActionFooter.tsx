
import React from "react";
import { Share2, Video, User, Globe } from "lucide-react";

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
    <div className="w-full bg-navy-light/60 backdrop-blur-sm border-t border-white/10 px-3 py-6">
      <div className="flex items-center justify-center gap-6">
        <button 
          onClick={onHighlightClick}
          className="flex items-center gap-2 py-3 px-6 bg-[#4CAF50] text-white rounded-md text-base font-medium hover:bg-[#43A047] transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          <Globe className="w-5 h-5" />
          <span>Your Community Connection Conduit</span>
        </button>
        
        <button 
          onClick={onPlayerProfileClick}
          className="flex items-center gap-2 py-3 px-6 bg-[#0FA0CE] text-white rounded-md text-base font-medium hover:bg-[#0FA0CE]/90 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
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
