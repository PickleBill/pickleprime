
import React from "react";
import { X } from "lucide-react";

interface PlayerModalHeaderProps {
  onClose: () => void;
}

const PlayerModalHeader = ({ onClose }: PlayerModalHeaderProps) => {
  return (
    <div className="sticky top-0 bg-[#0FA0CE] p-4 border-b border-white/10 flex items-center justify-between z-10">
      <h3 className="text-xl font-bold text-white">PickleBills Player Dashboard</h3>
      <button 
        onClick={onClose}
        className="p-2 rounded-full hover:bg-[#0FA0CE]/80 transition-colors"
        aria-label="Close"
      >
        <X className="w-5 h-5 text-white" />
      </button>
    </div>
  );
};

export default PlayerModalHeader;
