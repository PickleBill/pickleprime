
import React, { useState, useEffect } from "react";
import ScoreboardViewContainer from "@/components/ui/future-play/scoreboard";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import QuickViewContent from "@/components/ui/share-modal/quick-view/QuickViewContent";
import SocialDashboard from "@/components/SocialDashboard";

const Scoreboard = () => {
  const navigate = useNavigate();
  const [showHighlight, setShowHighlight] = useState(false);
  const [showSocialDashboard, setShowSocialDashboard] = useState(false);
  const [highlightTimer, setHighlightTimer] = useState(0);
  const [gameTime, setGameTime] = useState(0);
  const [player1Score, setPlayer1Score] = useState(20);
  const [player2Score, setPlayer2Score] = useState(18);
  const [currentSet, setCurrentSet] = useState(1);
  const [activeQuickView, setActiveQuickView] = useState<string | null>(null);

  // Game clock effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (!showHighlight && !showSocialDashboard && !activeQuickView) {
      interval = setInterval(() => {
        setGameTime(prev => prev + 1);
        
        // Increased chance for score to increase for a more dynamic demo
        if (Math.random() < 0.07) {
          if (Math.random() > 0.5) {
            setPlayer1Score(prev => prev + 1);
          } else {
            setPlayer2Score(prev => prev + 1);
          }
        }
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [showHighlight, showSocialDashboard, activeQuickView]);
  
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

  // Social dashboard timer to auto-close after a period
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (showSocialDashboard) {
      timeout = setTimeout(() => {
        setShowSocialDashboard(false);
      }, 8000); // Show for 8 seconds
    }
    
    return () => clearTimeout(timeout);
  }, [showSocialDashboard]);

  const handleBackClick = () => {
    navigate('/');
  };
  
  const handleCommunityClick = () => {
    setShowSocialDashboard(true);
    
    // Show a toast notification
    toast({
      title: "Community Connection Established!",
      description: "Connecting to your community and social networks...",
      duration: 3000,
    });
  };

  const handleActionButtonClick = (viewType: string) => {
    setActiveQuickView(viewType);
    
    // Show a toast notification
    toast({
      title: `${viewType.charAt(0).toUpperCase() + viewType.slice(1)} View Activated`,
      description: `Exploring ${viewType} data and insights...`,
      duration: 2000,
    });
  };

  const closeQuickView = () => {
    setActiveQuickView(null);
  };

  if (showSocialDashboard) {
    return (
      <SocialDashboard
        onReturn={() => setShowSocialDashboard(false)}
        player1Score={player1Score}
        player2Score={player2Score}
        gameTime={gameTime}
      />
    );
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-navy-dark">
      <ScoreboardViewContainer 
        onBackClick={handleBackClick}
        onHighlightClick={handleCommunityClick}
        onActionButtonClick={handleActionButtonClick}
        showHighlight={showHighlight}
        highlightTimer={highlightTimer}
        gameTime={gameTime}
        player1Score={player1Score}
        player2Score={player2Score}
        currentSet={currentSet}
      />
      
      {activeQuickView && (
        <QuickViewContent 
          contentType={activeQuickView} 
          onClose={closeQuickView}
        />
      )}
    </div>
  );
};

export default Scoreboard;
