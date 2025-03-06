
import React from "react";
import { X } from "lucide-react";
import NavLink from "./NavLink";
import AnimatedButton from "./AnimatedButton";
import { useNavigate } from "react-router-dom";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  setShowShareModal?: (show: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  setShowShareModal = () => {},
}) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-navy-dark bg-opacity-95 backdrop-blur-sm transform transition-transform duration-300 md:hidden">
      <div className="flex flex-col h-full">
        <div className="flex justify-end p-6">
          <button
            onClick={onClose}
            className="text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 space-y-8">
          <NavLink href="#about" label="About" isMobile onClick={onClose} />
          <NavLink href="#solution" label="Solution" isMobile onClick={onClose} />
          <NavLink href="#market" label="Market" isMobile onClick={onClose} />
          <NavLink href="#team" label="Team" isMobile onClick={onClose} />
          <NavLink 
            href="#connectivity" 
            label="Community" 
            isMobile
            onClick={(e) => {
              e.preventDefault();
              onClose();
              if (setShowShareModal) setShowShareModal(true);
            }} 
          />
          <NavLink 
            href="#scoreboard" 
            label="Scoreboard" 
            isMobile
            onClick={(e) => {
              e.preventDefault();
              onClose();
              navigate('/scoreboard');
            }} 
          />
          <NavLink href="#contact" label="Contact" isMobile onClick={onClose} />
          
          <AnimatedButton onClick={onClose}>
            Get Started
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
