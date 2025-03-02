
import React, { useState, useEffect } from "react";
import ShareModal from "../future-play/scoreboard/components/ShareModal";
import MatchStatusCard from "./MatchStatusCard";
import PremiumAnalyticsCard from "./PremiumAnalyticsCard";
import SocialShareButtons from "./SocialShareButtons";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import FeatureExploreSection from "./FeatureExploreSection";
import QuickViewContent from "./quick-view/QuickViewContent";

interface ShareMatchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShareMatchModal: React.FC<ShareMatchModalProps> = ({ isOpen, onClose }) => {
  const [gameTime, setGameTime] = useState(180); // 3 minutes in seconds
  const [player1Score, setPlayer1Score] = useState(20);
  const [player2Score, setPlayer2Score] = useState(18);
  const [showAdvancedView, setShowAdvancedView] = useState(false);
  const [quickViewContent, setQuickViewContent] = useState<string | null>(null);
  
  // Add effect to handle Escape key
  useEffect(() => {
    if (!isOpen) return;
    
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (quickViewContent) {
          setQuickViewContent(null);
        } else if (showAdvancedView) {
          setShowAdvancedView(false);
        } else {
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    
    // Clean up the event listener
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, showAdvancedView, quickViewContent]);
  
  // If quick view content is showing, render that
  if (quickViewContent && isOpen) {
    return (
      <QuickViewContent 
        contentType={quickViewContent} 
        onClose={() => setQuickViewContent(null)} 
      />
    );
  }
  
  // If advanced view is showing, render that instead
  if (showAdvancedView && isOpen) {
    return (
      <ShareModal
        isOpen={true}
        onClose={() => setShowAdvancedView(false)}
        player1Score={player1Score}
        player2Score={player2Score}
        gameTime={gameTime}
      />
    );
  }

  if (!isOpen) return null;

  // Add handler for backdrop clicks
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handler for feature card clicks
  const handleFeatureClick = (featureType: string) => {
    setQuickViewContent(featureType);
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="bg-navy-dark/90 backdrop-blur-md rounded-xl w-full max-w-[83%] md:max-w-[580px] lg:max-w-[660px] overflow-hidden flex flex-col border border-white/10 max-h-[90vh]">
        {/* Header */}
        <ModalHeader onClose={onClose} />
        
        {/* Content */}
        <div className="px-4 py-3 flex-1 overflow-auto scrollbar-hide">
          {/* Match Status Card (now full width at the top) */}
          <div className="mb-4 w-full">
            <MatchStatusCard 
              player1Score={player1Score}
              player2Score={player2Score}
              gameTime={gameTime}
            />
          </div>
          
          {/* Premium Analytics Card (now full width below match status) */}
          <div className="mb-4 w-full">
            <PremiumAnalyticsCard 
              onExploreClick={() => setShowAdvancedView(true)}
            />
          </div>
          
          <h3 className="text-lg font-semibold text-white mb-3 text-center">Share to</h3>
          
          <div className="mb-4">
            <SocialShareButtons onClose={onClose} />
          </div>
          
          {/* Feature Exploration Section */}
          <div className="mt-1 mb-2">
            <FeatureExploreSection onFeatureClick={handleFeatureClick} />
          </div>
        </div>
        
        {/* Footer */}
        <ModalFooter onClose={onClose} />
      </div>
    </div>
  );
};

export default ShareMatchModal;
