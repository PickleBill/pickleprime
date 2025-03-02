
import React, { useState, useEffect } from "react";
import ScoreboardViewContainer from "@/components/ui/future-play/scoreboard";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

const Scoreboard = () => {
  const navigate = useNavigate();
  const [showHighlight, setShowHighlight] = useState(false);
  const [highlightTimer, setHighlightTimer] = useState(0);
  const [gameTime, setGameTime] = useState(0);
  const [player1Score, setPlayer1Score] = useState(20);
  const [player2Score, setPlayer2Score] = useState(18);
  const [currentSet, setCurrentSet] = useState(1);

  // Game clock effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (!showHighlight) {
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
  }, [showHighlight]);
  
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

  const handleBackClick = () => {
    navigate('/');
  };
  
  const triggerHighlight = () => {
    setShowHighlight(true);
    setHighlightTimer(0);
    
    // Show a toast when highlight is triggered
    toast({
      title: "Highlight Captured!",
      description: "This moment has been saved to your highlights reel.",
      duration: 3000,
    });
  };

  return (
    <div className="h-screen flex flex-col bg-navy-dark">
      <ScoreboardViewContainer 
        onBackClick={handleBackClick}
        onHighlightClick={triggerHighlight}
        showHighlight={showHighlight}
        highlightTimer={highlightTimer}
        gameTime={gameTime}
        player1Score={player1Score}
        player2Score={player2Score}
        currentSet={currentSet}
      />
    </div>
  );
};

export default Scoreboard;
