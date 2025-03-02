
import React from "react";
import ShareModal from "./future-play/scoreboard/components/ShareModal";

interface AdvancedShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdvancedShareModal: React.FC<AdvancedShareModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Use the existing comprehensive ShareModal component with default values
  return (
    <ShareModal
      isOpen={isOpen}
      onClose={onClose}
      player1Score={21}
      player2Score={18}
      gameTime={180}
    />
  );
};

export default AdvancedShareModal;
