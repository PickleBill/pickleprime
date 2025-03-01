
import React, { useState, useEffect } from "react";
import { Video, Activity, Trophy, Monitor, Users } from "lucide-react";
import EnhancedScoreboardView from "./future-play/EnhancedScoreboardView";
import ModalBackdrop from "./future-play-modal/ModalBackdrop";
import ModalContent from "./future-play-modal/ModalContent";
import { FuturePlayModalProps, PillarData } from "./future-play-modal/types";

const FuturePlayModal: React.FC<FuturePlayModalProps> = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [animationComplete, setAnimationComplete] = useState(false);
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

  if (!isOpen) return null;
  
  // Pillar data
  const pillars: PillarData[] = [
    {
      id: 1,
      title: "AI Video Capture & Highlights",
      icon: <Video className="w-6 h-6" />,
      color: "#2BCB6E",
      bgImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      description: "Smart cameras that track the action and generate instant highlight reels.",
      bullets: [
        "One-touch clip creation & sharing",
        "Auto-tracking of key moments",
        "Custom branding overlays",
        "Social media integration"
      ]
    },
    {
      id: 2,
      title: "Advanced Analytics",
      icon: <Activity className="w-6 h-6" />,
      color: "#1a9dc3",
      bgImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      description: "Real-time performance data to improve player skills and engagement.",
      bullets: [
        "Shot velocity & placement tracking",
        "Performance improvement metrics",
        "Skill level assessment",
        "Personalized coaching insights"
      ]
    },
    {
      id: 3,
      title: "Gamification",
      icon: <Trophy className="w-6 h-6" />,
      color: "#e89e25",
      bgImage: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
      description: "Interactive challenges and competitions that keep players coming back.",
      bullets: [
        "Skill-based achievements",
        "Dynamic leaderboards",
        "Weekly challenges & tournaments",
        "Digital rewards & recognition"
      ]
    },
    {
      id: 4,
      title: "Digital Displays & Fan Engagement",
      icon: <Monitor className="w-6 h-6" />,
      color: "#7b61ff",
      bgImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      description: "Interactive screens that enhance the on-court experience.",
      bullets: [
        "Live scorekeeping & replays",
        "Sponsor integration opportunities",
        "Fan engagement features",
        "Digital signage solutions"
      ]
    },
    {
      id: 5,
      title: "Community & Matchmaking",
      icon: <Users className="w-6 h-6" />,
      color: "#ff617b",
      bgImage: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c",
      description: "Tools to connect players and build thriving racquet sports communities.",
      bullets: [
        "AI-powered skill matching",
        "League & tournament management",
        "Social connections & messaging",
        "Community event planning"
      ]
    }
  ];

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
      <ModalContent
        onClose={onClose}
        pillars={pillars}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        animationComplete={animationComplete}
        handlePlayButtonClick={handlePlayButtonClick}
      />
    </div>
  );
};

export default FuturePlayModal;
