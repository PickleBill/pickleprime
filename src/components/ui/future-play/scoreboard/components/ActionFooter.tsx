
import React from "react";
import { Video, User, Share2 } from "lucide-react";

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
    <div className="bg-[#001a2c] border-t border-[#0a2d4a] py-3 px-4 w-full">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-white/70 text-sm">Court Visionary™</span>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={onHighlightClick}
            className="flex items-center gap-2 bg-[#1A8D50] hover:bg-[#16793F] text-white py-2 px-4 rounded-md transition-colors"
          >
            <Video className="w-4 h-4" />
            <span className="font-medium text-sm">Highlights</span>
          </button>
          
          <button
            onClick={onPlayerProfileClick}
            className="flex items-center gap-2 bg-[#0a2d4a] hover:bg-[#153c5a] text-white py-2 px-4 rounded-md transition-colors"
          >
            <User className="w-4 h-4" />
            <span className="font-medium text-sm">Player Profile</span>
          </button>
          
          <button
            onClick={onShareClick}
            className="flex items-center gap-2 bg-[#0a2d4a] hover:bg-[#153c5a] text-white py-2 px-4 rounded-md transition-colors"
          >
            <Share2 className="w-4 h-4" />
            <span className="font-medium text-sm">Share</span>
          </button>
        </div>
        
        <div>
          <span className="text-white/70 text-sm">© 2023</span>
        </div>
      </div>
    </div>
  );
};

export default ActionFooter;
