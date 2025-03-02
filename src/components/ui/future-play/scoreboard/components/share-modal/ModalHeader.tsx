
import React from "react";
import { Share, X } from "lucide-react";

interface ModalHeaderProps {
  onClose: () => void;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ onClose }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-white/10">
      <div className="flex items-center gap-2">
        <Share className="w-5 h-5 text-primary" />
        <h2 className="text-xl font-semibold text-white">Share Match Update</h2>
      </div>
      <button 
        onClick={onClose}
        className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ModalHeader;
