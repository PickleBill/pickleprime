
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlayerModal from "./ui/PlayerModal";
import FacilityModal from "./ui/FacilityModal";
import ShareMatchModal from "./ui/share-modal";
import Background from "./ui/hero/Background";
import HeadingSection from "./ui/hero/HeadingSection";
import FeaturePanels from "./ui/hero/FeaturePanels";
import CTAButtons from "./ui/hero/CTAButtons";
import ScrollIndicator from "./ui/hero/ScrollIndicator";

const Hero = () => {
  const navigate = useNavigate();
  const [showPlayerModal, setShowPlayerModal] = useState(false);
  const [showFacilityModal, setShowFacilityModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showAnalyticsView, setShowAnalyticsView] = useState(false);
  
  // Direct access to scoreboard page
  const handleFuturePlayClick = () => {
    navigate('/scoreboard');
  };

  // Function to handle external facility link
  const handleFacilityClick = () => {
    window.open('https://quantcourt.lovable.app/analytics', '_blank');
  };

  // Function to show analytics view
  const handleAnalyticsClick = () => {
    setShowShareModal(true);
    // Set timeout to ensure modal is open before switching to analytics view
    setTimeout(() => {
      // Simulate clicking on the Stats tab which shows the analytics
      const statsButtons = document.querySelectorAll('button');
      const statsButton = Array.from(statsButtons).find(button => 
        button.textContent?.includes('Stats')
      );
      if (statsButton) {
        statsButton.click();
      }
    }, 300);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Decoration */}
      <Background />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading and Description */}
          <HeadingSection />
          
          {/* Feature Panels */}
          <FeaturePanels 
            onFacilityClick={handleFacilityClick}
            onPlayerClick={() => setShowShareModal(true)}
            onAnalyticsClick={handleAnalyticsClick}
          />
          
          {/* CTA Buttons */}
          <CTAButtons onFuturePlayClick={handleFuturePlayClick} />
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Player Modal */}
      <PlayerModal 
        isOpen={showPlayerModal}
        onClose={() => setShowPlayerModal(false)}
      />

      {/* Facility Modal */}
      <FacilityModal 
        isOpen={showFacilityModal}
        onClose={() => setShowFacilityModal(false)}
      />

      {/* Share Match Modal */}
      <ShareMatchModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
      />
    </section>
  );
};

export default Hero;
