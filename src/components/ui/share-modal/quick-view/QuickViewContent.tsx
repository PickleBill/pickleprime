
import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import AnalyticsView from "./views/AnalyticsView";
import StatsView from "./views/StatsView";
import TournamentsView from "./views/TournamentsView";
import VideoView from "./views/VideoView";
import CommunityView from "./views/CommunityView";
import SettingsView from "./views/SettingsView";
import ViewContainer from "./views/ViewContainer";

interface QuickViewContentProps {
  contentType: string;
  onClose: () => void;
}

const QuickViewContent: React.FC<QuickViewContentProps> = ({ contentType, onClose }) => {
  // State for filters that will be passed to views
  const [selectedStat, setSelectedStat] = React.useState("overall");
  const [selectedTimeRange, setSelectedTimeRange] = React.useState("7d");
  
  // Video state management
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [volume, setVolume] = useState(80);

  // Determine which view to render based on contentType
  const renderContent = () => {
    switch (contentType) {
      case "analytics":
        return (
          <AnalyticsView
            selectedStat={selectedStat}
            setSelectedStat={setSelectedStat}
            selectedTimeRange={selectedTimeRange}
            setSelectedTimeRange={setSelectedTimeRange}
          />
        );
      case "tournaments":
        return <TournamentsView />;
      case "stats":
        return <StatsView />;
      case "videos":
        return (
          <VideoView 
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            currentVideo={currentVideo}
            setCurrentVideo={setCurrentVideo}
            volume={volume}
            setVolume={setVolume}
          />
        );
      case "community":
        return <CommunityView />;
      case "settings":
        return <SettingsView />;
      default:
        return (
          <div className="bg-gradient-to-br from-navy-dark/90 to-navy/90 backdrop-blur-lg rounded-lg p-6 mb-4">
            <h3 className="text-lg font-semibold text-white mb-4">Feature Unavailable</h3>
            <p className="text-white text-center py-10">This feature is currently unavailable.</p>
          </div>
        );
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="w-full max-w-[600px] max-h-[80vh] overflow-hidden mx-4"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button at top right */}
        <button
          className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content based on type */}
        {renderContent()}
      </motion.div>
    </motion.div>
  );
};

export default QuickViewContent;
