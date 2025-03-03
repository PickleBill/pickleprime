
import React from "react";
import { Video, X } from "lucide-react";

interface ModalHeaderProps {
  onClose: () => void;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ onClose }) => {
  return (
    <div className="border-b border-white/10 p-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-full bg-[#ea384c]/20">
          <Video className="w-5 h-5 text-[#ea384c]" />
        </div>
        <h3 className="text-xl font-semibold text-white">Video Clips</h3>
      </div>
      <button 
        onClick={onClose}
        className="text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ModalHeader;
