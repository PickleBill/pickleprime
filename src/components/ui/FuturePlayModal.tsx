
import React, { useState, useEffect } from "react";
import EnhancedScoreboardView from "./future-play/EnhancedScoreboardView";
import ModalBackdrop from "./future-play/backdrop/ModalBackdrop";
import ModalContent from "./future-play/content/ModalContent";
import ModalHeader from "./future-play/content/ModalHeader";

interface FuturePlayModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FuturePlayModal = ({ isOpen, onClose }: FuturePlayModalProps) => {
  const [showScoreboard, setShowScoreboard] = useState(false);
  const [gameTime, setGameTime] = useState(0);
  const [player1Score, setPlayer1Score] = useState(20);
  const [player2Score, setPlayer2Score] = useState(18);
  const [currentSet, setCurrentSet] = useState(1);
  const [showHighlight, setShowHighlight] = useState(false);
  const [highlightTimer, setHighlightTimer] = useState(0);

  // Reset states when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setShowScoreboard(false);
      setShowHighlight(false);
      setGameTime(0);
      
      // For direct scoreboard access, we want to open straight to the scoreboard
      // This is handled by the parent component clicking the scoreboard button
    }
  }, [isOpen]);

  // Game clock effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (showScoreboard && !showHighlight) {
      interval = setInterval(() => {
        setGameTime(prev => prev + 1);
        
        // Increased chance to trigger highlights for a more dynamic demo
        if (Math.random() < 0.03) {
          triggerHighlight();
        }
        
        // Increased chance for score to increase for a more dynamic demo
        if (Math.random() < 0.1) {
          if (Math.random() > 0.5) {
            setPlayer1Score(prev => prev + 1);
          } else {
            setPlayer2Score(prev => prev + 1);
          }
        }
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [showScoreboard, showHighlight]);
  
  // Highlight timer effect - faster for demo purposes
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (showHighlight) {
      interval = setInterval(() => {
        setHighlightTimer(prev => {
          if (prev >= 100) {
            setShowHighlight(false);
            return 0;
          }
          return prev + 1.5; // Faster progress for demo
        });
      }, 40); // Faster interval for demo
    }
    
    return () => clearInterval(interval);
  }, [showHighlight]);

  // This function will be called from outside via a ref
  const handlePlayButtonClick = () => {
    setShowScoreboard(true);
  };

  // When back is clicked, directly close the modal instead of showing another step
  const handleBackButtonClick = () => {
    onClose();
  };
  
  const triggerHighlight = () => {
    setShowHighlight(true);
    setHighlightTimer(0);
  };

  if (!isOpen) return null;
  
  // Return futuristic scoreboard if active
  if (showScoreboard) {
    return (
      <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in bg-navy-dark">
        {/* Futuristic background */}
        <div 
          className="absolute inset-0 bg-navy-dark"
          style={{
            backgroundImage: `
              radial-gradient(circle at 85% 15%, rgba(26, 157, 195, 0.15), transparent 40%),
              radial-gradient(circle at 15% 85%, rgba(43, 203, 110, 0.15), transparent 40%)
            `,
            backgroundSize: "100% 100%"
          }}
        >
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxMTE4MjgiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6TTAgMzBoMzB2MzBIMHoiIGZpbGw9IiMyQkNCNkUiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')]"></div>
        </div>

        {/* Main content */}
        <div className="relative w-full h-full flex flex-col">
          <EnhancedScoreboardView 
            onBackClick={handleBackButtonClick}
            onHighlightClick={triggerHighlight}
            showHighlight={showHighlight}
            highlightTimer={highlightTimer}
            gameTime={gameTime}
            player1Score={player1Score}
            player2Score={player2Score}
            currentSet={currentSet}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-4 md:p-0">
      {/* Backdrop with futuristic pattern */}
      <ModalBackdrop onClick={onClose} />

      {/* Modal Content Container */}
      <ModalContent onClose={onClose}>
        <ModalHeader />

        {/* Play Button for testing */}
        <div className="relative p-4 md:p-8 flex items-center justify-center">
          <button 
            className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/90 hover:bg-primary shadow-lg shadow-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-105 backdrop-blur-sm animate-pulse-slow"
            aria-label="Launch Digital Scoreboard"
            onClick={handlePlayButtonClick}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white w-10 h-10 fill-white">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </button>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 text-sm whitespace-nowrap">
            Click to experience live demo
          </div>
        </div>
      </ModalContent>
    </div>
  );
};

export default FuturePlayModal;
