
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
  initialView?: string;
}

const ShareMatchModal: React.FC<ShareMatchModalProps> = ({ 
  isOpen, 
  onClose,
  initialView = null 
}) => {
  const [gameTime, setGameTime] = useState(180); // 3 minutes in seconds
  const [player1Score, setPlayer1Score] = useState(20);
  const [player2Score, setPlayer2Score] = useState(18);
  const [showAdvancedView, setShowAdvancedView] = useState(false);
  const [quickViewContent, setQuickViewContent] = useState<string | null>(initialView);
  
  // Set the initial view when the modal opens
  useEffect(() => {
    if (isOpen && initialView) {
      setQuickViewContent(initialView);
    }
  }, [isOpen, initialView]);
  
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
  
  // If quick view content is showing, render both the modal and the quick view
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
      <div className="bg-navy-dark/90 backdrop-blur-md rounded-xl w-full max-w-[73%] md:max-w-[510px] lg:max-w-[580px] overflow-hidden flex flex-col border border-white/10 max-h-[90vh]">
        {/* Header */}
        <ModalHeader onClose={onClose} />
        
        {/* Content */}
        <div className="px-4 py-3 flex-1 overflow-auto scrollbar-hide">
          {/* Match Status Card (compressed vertically) */}
          <div className="mb-3 w-full">
            <MatchStatusCard 
              player1Score={player1Score}
              player2Score={player2Score}
              gameTime={gameTime}
            />
          </div>
          
          {/* Premium Analytics Card (now full width below match status) */}
          <div className="mb-3 w-full">
            <PremiumAnalyticsCard 
              onExploreClick={() => setShowAdvancedView(true)}
            />
          </div>
          
          <h3 className="text-base font-semibold text-white mb-2 text-center">Share to</h3>
          
          <div className="mb-3">
            <SocialShareButtons onClose={onClose} />
          </div>
          
          {/* Feature Exploration Section */}
          <div className="mb-1">
            <FeatureExploreSection onFeatureClick={handleFeatureClick} />
          </div>
        </div>
        
        {/* Footer */}
        <ModalFooter onClose={onClose} />
      </div>

      {/* Render QuickViewContent overlay when a feature is selected */}
      {quickViewContent && (
        <QuickViewContent 
          contentType={quickViewContent} 
          onClose={() => setQuickViewContent(null)} 
        />
      )}
    </div>
  );
};

export default ShareMatchModal;
