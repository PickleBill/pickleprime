
import React from "react";
import { Play } from "lucide-react";
import PillarItem from "./PillarItem";
import { pillarsData } from "../data/pillarsData";

interface PillarsSectionProps {
  activeSection: number | null;
  setActiveSection: (id: number | null) => void;
  animationComplete: boolean;
  handlePlayButtonClick: () => void;
}

const PillarsSection: React.FC<PillarsSectionProps> = ({
  activeSection,
  setActiveSection,
  animationComplete,
  handlePlayButtonClick
}) => {
  return (
    <div className="relative mb-6">
      {/* Overlay Play Button (centered absolute positioning) - moved higher */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className={`${animationComplete ? 'opacity-100 scale-100' : 'opacity-0 scale-50'} transition-all duration-700`}>
          <button 
            className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/90 hover:bg-primary shadow-lg shadow-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-105 backdrop-blur-sm animate-pulse-slow"
            aria-label="Launch Digital Scoreboard"
            onClick={handlePlayButtonClick}
          >
            <Play className="w-10 h-10 md:w-12 md:h-12 text-white fill-white" />
          </button>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 text-sm whitespace-nowrap">
            Click to experience live demo
          </div>
        </div>
      </div>
      
      {/* Pillars in a circle layout */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 relative">
        {pillarsData.map((pillar, index) => (
          <PillarItem
            key={pillar.id}
            {...pillar}
            isActive={activeSection === pillar.id}
            onClick={() => setActiveSection(activeSection === pillar.id ? null : pillar.id)}
            animationComplete={animationComplete}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default PillarsSection;
