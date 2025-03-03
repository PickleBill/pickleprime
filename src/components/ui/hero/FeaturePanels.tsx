
import React from "react";
import FeaturePanel from "./FeaturePanel";

interface FeaturePanelsProps {
  onFacilityClick: () => void;
  onPlayerClick: () => void;
  onAnalyticsClick: () => void;
}

const FeaturePanels: React.FC<FeaturePanelsProps> = ({
  onFacilityClick,
  onPlayerClick,
  onAnalyticsClick
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {/* Left panel - For Facilities */}
      <FeaturePanel
        title="For Facilities"
        description="Turn your courts into data-driven engagement centers that attract and retain players."
        buttonText="QuantumCourt Peek"
        buttonColor="bg-gradient-to-r from-[#2BCB6E] to-[#22A358] button-pulse"
        onClick={onFacilityClick}
      />
      
      {/* Middle panel - For Players */}
      <FeaturePanel
        title="For Players"
        description="Take your game to the next level with AI-powered insights and social competition."
        buttonText="Ready Player One?"
        buttonColor="bg-gradient-to-r from-[#1a9dc3] to-[#0c7a9b]"
        onClick={onPlayerClick}
      />
      
      {/* Right panel - For Pros */}
      <FeaturePanel
        title="For Pros"
        description="Elevate your professional performance with advanced analytics and AI-powered coaching."
        buttonText="Your AI Coach"
        buttonColor="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB]"
        borderColor="border-[#9b87f5]/30"
        onClick={onAnalyticsClick}
      />
    </div>
  );
};

export default FeaturePanels;
