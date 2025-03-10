
import React from "react";
import { Share, X } from "lucide-react";

interface ModalHeaderProps {
  onClose: () => void;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ onClose }) => {
  return (
    <div className="py-1.5 px-3 bg-navy-light/40 text-white flex justify-between items-center border-b border-white/10">
      <h2 className="text-sm font-bold flex items-center gap-1.5">
        <Share className="w-3.5 h-3.5" />
        Share Match Update
      </h2>
      <button 
        onClick={onClose}
        className="text-white/70 hover:text-white transition-colors p-1"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};

export default ModalHeader;
