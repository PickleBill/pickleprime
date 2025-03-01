
import React from "react";
import AnimatedButton from "../AnimatedButton";

interface ModalFooterProps {
  onClose: () => void;
}

const ModalFooter: React.FC<ModalFooterProps> = ({ onClose }) => {
  return (
    <div className="p-6 border-t border-white/10 flex justify-between items-center bg-navy-dark">
      <div className="text-white/60 text-sm">
        Powered by SwingNet AI
      </div>
      <AnimatedButton onClick={onClose} size="md">
        Back to Home
      </AnimatedButton>
    </div>
  );
};

export default ModalFooter;
