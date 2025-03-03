
import React, { useState, useRef, useEffect } from "react";
import { Video } from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { motion } from "framer-motion";
import VideoPlayer from "./video/VideoPlayer";
import ThumbnailSelector from "./video/ThumbnailSelector";
import { videoClips } from "./video/videoData";

interface VideoViewProps {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  currentVideo: number;
  setCurrentVideo: React.Dispatch<React.SetStateAction<number>>;
  volume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
}

const VideoView: React.FC<VideoViewProps> = ({ 
  isPlaying, 
  setIsPlaying, 
  currentVideo, 
  setCurrentVideo, 
  volume, 
  setVolume 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [progress, setProgress] = useState(0);

  // Update progress bar
  useEffect(() => {
    if (!isPlaying || !videoRef.current) return;
    
    const updateProgress = () => {
      if (videoRef.current) {
        setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
      }
    };
    
    const intervalId = setInterval(updateProgress, 100);
    return () => clearInterval(intervalId);
  }, [isPlaying]);

  // Reset video and pause when changing clips
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setProgress(0);
      if (isPlaying) {
        videoRef.current.play();
      }
    }
  }, [currentVideo, isPlaying]);

  // Toggle video playback
  const togglePlayback = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div 
      className="bg-gradient-to-br from-navy-dark/90 to-navy/90 backdrop-blur-lg rounded-lg p-6 mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-full bg-[#1a9dc3]/20">
            <Video className="w-5 h-5 text-[#1a9dc3]" />
          </div>
          <h3 className="text-lg font-semibold text-white">Video Clips</h3>
        </div>
      </div>
      
      <div className="space-y-4">
        <VideoPlayer 
          videoRef={videoRef}
          currentVideoData={videoClips[currentVideo]}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          volume={volume}
          togglePlayback={togglePlayback}
          progress={progress}
          showVolumeSlider={showVolumeSlider}
          setShowVolumeSlider={setShowVolumeSlider}
          currentVideoIndex={currentVideo}
        />
        
        <ThumbnailSelector 
          videoClips={videoClips}
          currentVideo={currentVideo}
          setCurrentVideo={setCurrentVideo}
        />
        
        <div className="flex justify-end mt-2">
          <AnimatedButton variant="glass" size="sm" active={true} glowColor="rgba(26, 157, 195, 0.5)">
            See All Clips
          </AnimatedButton>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoView;
