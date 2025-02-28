
import React from "react";
import PillarCard from "./PillarCard";
import { Play } from "lucide-react";
import { PillarData } from "./types";

interface PillarsSectionProps {
  pillars: PillarData[];
  activeSection: number | null;
  setActiveSection: (id: number | null) => void;
  animationComplete: boolean;
  handlePlayButtonClick: () => void;
}

const PillarsSection: React.FC<PillarsSectionProps> = ({ 
  pillars, 
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
            className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/90 hover:bg-primary shadow-lg shadow-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            aria-label="Launch Digital Scoreboard"
            onClick={handlePlayButtonClick}
          >
            <Play className="w-10 h-10 md:w-12 md:h-12 text-white fill-white" />
          </button>
        </div>
      </div>
      
      {/* Pillars in a grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 relative">
        {pillars.map((pillar, index) => {
          // Calculate delay for sequential animation
          const animationDelay = 200 + (index * 150);
          
          return (
            <PillarCard
              key={pillar.id}
              pillar={pillar}
              active={activeSection === pillar.id}
              animationComplete={animationComplete}
              animationDelay={animationDelay}
              onClick={() => setActiveSection(activeSection === pillar.id ? null : pillar.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PillarsSection;
