
import React from "react";
import PillarItem from "./PillarItem";
import PlayButton from "./PlayButton";
import { PillarData } from "./types";

interface PillarsGridProps {
  pillars: PillarData[];
  activeSection: number | null;
  setActiveSection: (id: number | null) => void;
  animationComplete: boolean;
  handlePlayButtonClick: () => void;
}

const PillarsGrid: React.FC<PillarsGridProps> = ({ 
  pillars, 
  activeSection, 
  setActiveSection, 
  animationComplete,
  handlePlayButtonClick
}) => {
  return (
    <div className="relative mb-6">
      <PlayButton 
        animationComplete={animationComplete} 
        onClick={handlePlayButtonClick} 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 relative">
        {pillars.map((pillar, index) => {
          // Calculate delay for sequential animation
          const animationDelay = 200 + (index * 150);
          
          return (
            <PillarItem
              key={pillar.id}
              id={pillar.id}
              title={pillar.title}
              icon={pillar.icon}
              color={pillar.color}
              bgImage={pillar.bgImage}
              description={pillar.description}
              bullets={pillar.bullets}
              activeSection={activeSection}
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

export default PillarsGrid;
