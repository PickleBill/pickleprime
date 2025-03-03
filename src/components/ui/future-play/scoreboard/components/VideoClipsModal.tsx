
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ShareFooter from "./share-modal/ShareFooter";
import ModalHeader from "./video-clips/ModalHeader";
import VideoPlayer from "./video-clips/VideoPlayer";
import ThumbnailGrid from "./video-clips/ThumbnailGrid";
import { videoClipsData } from "./video-clips/types";

interface VideoClipsModalProps {
  isOpen: boolean;
  onClose: () => void;
  player1Score: number;
  player2Score: number;
  gameTime: number;
}

const VideoClipsModal: React.FC<VideoClipsModalProps> = ({
  isOpen,
  onClose,
  player1Score,
  player2Score,
  gameTime
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [volume, setVolume] = useState(75);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [progress, setProgress] = useState(0);

  if (!isOpen) return null;

  const handleCloseClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleShare = () => {
    console.log("Sharing video clip:", videoClipsData[currentVideo]);
    onClose();
  };

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videoClipsData.length);
    setIsPlaying(false);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videoClipsData.length) % videoClipsData.length);
    setIsPlaying(false);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 animate-fade-in"
      onClick={handleCloseClick}
    >
      <div className="relative bg-navy-dark/90 rounded-xl border border-white/10 w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col">
        {/* Header */}
        <ModalHeader onClose={onClose} />

        {/* Main content */}
        <div className="flex-1 overflow-y-auto p-5">
          {/* Video player */}
          <VideoPlayer 
            currentVideo={currentVideo}
            videoClips={videoClipsData}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            volume={volume}
            setVolume={setVolume}
            progress={progress}
            setProgress={setProgress}
            showVolumeSlider={showVolumeSlider}
            setShowVolumeSlider={setShowVolumeSlider}
            prevVideo={prevVideo}
            nextVideo={nextVideo}
          />
          
          {/* Thumbnail grid */}
          <ThumbnailGrid 
            videoClips={videoClipsData}
            currentVideo={currentVideo}
            setCurrentVideo={setCurrentVideo}
            setIsPlaying={setIsPlaying}
          />
        </div>
        
        {/* Footer */}
        <ShareFooter 
          onClose={onClose} 
          handleShare={handleShare} 
          isScheduling={false} 
        />
      </div>
    </div>
  );
};

export default VideoClipsModal;
