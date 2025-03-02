
import React from "react";
import { Menu, Share2 } from "lucide-react";

interface MobileNavButtonsProps {
  setIsMenuOpen: (isOpen: boolean) => void;
  setShowShareModal: (show: boolean) => void;
}

const MobileNavButtons: React.FC<MobileNavButtonsProps> = ({
  setIsMenuOpen,
  setShowShareModal,
}) => {
  return (
    <div className="flex items-center gap-3 md:hidden">
      <button
        onClick={() => setShowShareModal(true)}
        className="text-navy mr-2"
        aria-label="Share Match Update"
      >
        <Share2 className="w-5 h-5" />
      </button>
      <button
        onClick={() => setIsMenuOpen(true)}
        className="text-navy"
        aria-label="Toggle menu"
      >
        <Menu className="w-6 h-6" />
      </button>
    </div>
  );
};

export default MobileNavButtons;
