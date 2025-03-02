
import React, { useState, useEffect } from "react";
import { Video, Activity, Trophy, BarChart2 } from "lucide-react";
import { AnimatePresence } from "framer-motion";

// Import view components
import VideoView from "./views/VideoView";
import AnalyticsView from "./views/AnalyticsView";
import TournamentsView from "./views/TournamentsView";
import StatsView from "./views/StatsView";
import ViewContainer from "./views/ViewContainer";

interface QuickViewContentProps {
  contentType: string | null;
  onClose: () => void;
  inScoreboard?: boolean;
}

const QuickViewContent: React.FC<QuickViewContentProps> = ({ 
  contentType, 
  onClose,
  inScoreboard = false
}) => {
  // State for video player functionality
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [volume, setVolume] = useState(80);
  const [selectedStat, setSelectedStat] = useState('all');
  const [selectedTimeRange, setSelectedTimeRange] = useState('match');

  // Add effect to handle Escape key
  useEffect(() => {
    if (!contentType) return;
    
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    
    // Clean up the event listener
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [contentType, onClose]);

  if (!contentType) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (inScoreboard && e.target === e.currentTarget) {
      onClose();
    }
  };

  const getContent = () => {
    switch (contentType) {
      case 'video':
        return (
          <ViewContainer onClose={onClose}>
            <VideoView 
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              currentVideo={currentVideo}
              setCurrentVideo={setCurrentVideo}
              volume={volume}
              setVolume={setVolume}
            />
          </ViewContainer>
        );
        
      case 'analytics':
        return (
          <ViewContainer onClose={onClose}>
            <AnalyticsView 
              selectedStat={selectedStat}
              setSelectedStat={setSelectedStat}
              selectedTimeRange={selectedTimeRange}
              setSelectedTimeRange={setSelectedTimeRange}
            />
          </ViewContainer>
        );
        
      case 'tournaments':
        return (
          <ViewContainer onClose={onClose}>
            <TournamentsView />
          </ViewContainer>
        );
        
      case 'stats':
        return (
          <ViewContainer onClose={onClose}>
            <StatsView />
          </ViewContainer>
        );
      
      default:
        return null;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <div 
        className={`${inScoreboard ? 'fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50' : 'relative'}`}
        onClick={handleBackdropClick}
      >
        {getContent()}
      </div>
    </AnimatePresence>
  );
};

export default QuickViewContent;
