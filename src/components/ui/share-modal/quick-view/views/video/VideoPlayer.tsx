
import React from "react";
import { Video, Play, Pause, Volume2, Download, Heart, MessageSquare, Share } from "lucide-react";
import { motion } from "framer-motion";
import { VideoClip } from "./videoData";

interface VideoPlayerProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  currentVideoData: VideoClip;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  volume: number;
  togglePlayback: () => void;
  progress: number;
  showVolumeSlider: boolean;
  setShowVolumeSlider: React.Dispatch<React.SetStateAction<boolean>>;
  currentVideoIndex: number;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoRef,
  currentVideoData,
  isPlaying,
  setIsPlaying,
  volume,
  togglePlayback,
  progress,
  showVolumeSlider,
  setShowVolumeSlider,
  currentVideoIndex
}) => {
  return (
    <div className="relative">
      <div className="aspect-video rounded-lg overflow-hidden relative">
        {/* Video element */}
        <video
          ref={videoRef}
          src={currentVideoData.videoSrc}
          poster={currentVideoData.thumbnail}
          className="w-full h-full object-cover"
          loop
          muted={volume === 0}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        
        {/* Play icon overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={isPlaying ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Video className="w-16 h-16 text-white/70" />
          </motion.div>
        </div>
        
        {/* Video controls overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <motion.button 
                onClick={togglePlayback}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-white/20 backdrop-blur-md rounded-full"
              >
                {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white" />}
              </motion.button>
              
              <div className="text-sm text-white/90">
                {currentVideoData.title}
                <span className="text-xs text-white/60 ml-2">
                  {videoRef.current ? 
                    `${Math.floor(videoRef.current.currentTime / 60)}:${Math.floor(videoRef.current.currentTime % 60).toString().padStart(2, '0')}` : 
                    '00:00'} / {currentVideoData.duration}
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div 
                className="flex items-center gap-1"
                onMouseEnter={() => setShowVolumeSlider(true)}
                onMouseLeave={() => setShowVolumeSlider(false)}
              >
                <Volume2 className="w-3 h-3 text-white/60" />
                {showVolumeSlider && (
                  <div className="absolute bottom-14 right-10 bg-black/70 p-2 rounded-lg">
                    <input 
                      type="range"
                      min="0"
                      max="100"
                      value={volume}
                      className="w-20 h-1"
                    />
                  </div>
                )}
                <div className="w-16 h-1 bg-white/30 rounded-full overflow-hidden">
                  <div className="h-full bg-white" style={{ width: `${volume}%` }}></div>
                </div>
              </div>
              
              <motion.button 
                className="p-1 text-white/60 hover:text-white/90"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Download className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="w-full h-1 bg-white/30 rounded-full mt-3 overflow-hidden">
            <motion.div 
              className="h-full bg-[#1a9dc3]" 
              style={{ width: `${progress}%` }}
            ></motion.div>
          </div>
        </div>
      </div>
      
      {/* Video interaction bar */}
      <div className="flex items-center justify-between mt-3 px-1">
        <div className="flex items-center gap-3">
          <motion.button 
            className="flex items-center gap-1 text-white/60 hover:text-white/90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Heart className="w-4 h-4" />
            <span className="text-xs">24</span>
          </motion.button>
          
          <motion.button 
            className="flex items-center gap-1 text-white/60 hover:text-white/90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageSquare className="w-4 h-4" />
            <span className="text-xs">8</span>
          </motion.button>
        </div>
        
        <motion.button 
          className="flex items-center gap-1 text-white/60 hover:text-white/90"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Share className="w-4 h-4" />
          <span className="text-xs">Share</span>
        </motion.button>
      </div>
    </div>
  );
};

export default VideoPlayer;
