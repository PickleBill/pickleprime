
import React, { useState, useEffect } from "react";
import ModalBackdrop from "./ModalBackdrop";
import ModalContent from "./ModalContent";
import ScoreboardView from "./ScoreboardView";
import { pillarsData, player1Stats, player2Stats } from "./data";
import { FuturePlayModalProps } from "./types";

const FuturePlayModal: React.FC<FuturePlayModalProps> = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [showScoreboard, setShowScoreboard] = useState(false);
  const [gameTime, setGameTime] = useState(0);
  const [player1Score, setPlayer1Score] = useState(7);
  const [player2Score, setPlayer2Score] = useState(5);
  const [currentSet, setCurrentSet] = useState(1);
  const [showHighlight, setShowHighlight] = useState(false);
  const [highlightTimer, setHighlightTimer] = useState(0);

  // Reset states when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setActiveSection(null);
      setAnimationComplete(false);
      setShowScoreboard(false);
      setShowHighlight(false);
      
      // Trigger the sequence animation after the modal appears
      const timer = setTimeout(() => {
        setAnimationComplete(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Game clock effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (showScoreboard && !showHighlight) {
      interval = setInterval(() => {
        setGameTime(prev => prev + 1);
        
        // Random chance to trigger a highlight
        if (Math.random() < 0.01) {
          triggerHighlight();
        }
        
        // Random chance for score to increase (for demo purposes)
        if (Math.random() < 0.05) {
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
  
  // Highlight timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (showHighlight) {
      interval = setInterval(() => {
        setHighlightTimer(prev => {
          if (prev >= 100) {
            setShowHighlight(false);
            return 0;
          }
          return prev + 1;
        });
      }, 50);
    }
    
    return () => clearInterval(interval);
  }, [showHighlight]);

  const handlePlayButtonClick = () => {
    setShowScoreboard(true);
  };

  const handleBackButtonClick = () => {
    setShowScoreboard(false);
    setShowHighlight(false);
  };
  
  const triggerHighlight = () => {
    setShowHighlight(true);
    setHighlightTimer(0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  // Return futuristic scoreboard if active
  if (showScoreboard) {
    return (
      <ScoreboardView 
        handleBackButtonClick={handleBackButtonClick}
        gameTime={gameTime}
        currentSet={currentSet}
        formatTime={formatTime}
        showHighlight={showHighlight}
        highlightTimer={highlightTimer}
        player1Stats={player1Stats}
        player2Stats={player2Stats}
        player1Score={player1Score}
        player2Score={player2Score}
        triggerHighlight={triggerHighlight}
      />
    );
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-4 md:p-0">
      {/* Backdrop with futuristic pattern */}
      <ModalBackdrop onClick={onClose} />

      {/* Modal Content Container */}
      <ModalContent
        onClose={onClose}
        pillars={pillarsData}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        animationComplete={animationComplete}
        handlePlayButtonClick={handlePlayButtonClick}
      />
    </div>
  );
};

export default FuturePlayModal;
