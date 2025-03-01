
import React from "react";
import { X } from "lucide-react";
import ModalHeader from "./ModalHeader";
import PillarsGrid from "./PillarsGrid";
import DataFlowAnimation from "./DataFlowAnimation";
import CentralStatement from "./CentralStatement";
import BottomContent from "./BottomContent";
import ModalFooter from "./ModalFooter";
import DecorativeElements from "./DecorativeElements";
import { PillarData } from "./types";

interface ModalContentProps {
  onClose: () => void;
  pillars: PillarData[];
  activeSection: number | null;
  setActiveSection: (id: number | null) => void;
  animationComplete: boolean;
  handlePlayButtonClick: () => void;
}

const ModalContent: React.FC<ModalContentProps> = ({
  onClose,
  pillars,
  activeSection,
  setActiveSection,
  animationComplete,
  handlePlayButtonClick,
}) => {
  return (
    <div 
      className="relative w-full max-w-5xl max-h-[90vh] bg-navy-dark/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-white/10 animate-scale-in"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
        aria-label="Close modal"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Header with tagline */}
      <ModalHeader />

      {/* Main Content */}
      <div className="relative p-4 md:p-8 overflow-auto max-h-[calc(90vh-12rem)]">
        {/* Pillars layout */}
        <PillarsGrid 
          pillars={pillars}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          animationComplete={animationComplete}
          handlePlayButtonClick={handlePlayButtonClick}
        />
        
        {/* Animated data flow visualization */}
        <DataFlowAnimation />
        
        {/* Central statement */}
        <CentralStatement animationComplete={animationComplete} />
        
        {/* Bottom content */}
        <BottomContent />
      </div>
        
      {/* Footer */}
      <ModalFooter onClose={onClose} />
      
      {/* Decorative elements */}
      <DecorativeElements />
    </div>
  );
};

export default ModalContent;
