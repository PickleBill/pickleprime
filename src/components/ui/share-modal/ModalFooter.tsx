
import React from "react";
import FooterActions from "./footer/FooterActions";

interface ModalFooterProps {
  onClose: () => void;
}

const ModalFooter: React.FC<ModalFooterProps> = ({ onClose }) => {
  return (
    <div className="border-t border-white/10 p-3 bg-navy-dark/60">
      <FooterActions onClose={onClose} />
    </div>
  );
};

export default ModalFooter;
