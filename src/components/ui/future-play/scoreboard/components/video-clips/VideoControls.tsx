
import React from "react";
import { Pause, Play, Volume2, Download } from "lucide-react";
import { motion } from "framer-motion";
import { VideoClip } from "./types";

interface VideoControlsProps {
  isPlaying: boolean;
  togglePlayback: () => void;
  volume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
  progress: number;
  showVolumeSlider: boolean;
  setShowVolumeSlider: React.Dispatch<React.SetStateAction<boolean>>;
  currentVideo: VideoClip;
  videoRef: React.RefObject<HTMLVideoElement>;
}

const VideoControls: React.FC<VideoControlsProps> = ({
  isPlaying,
  togglePlayback,
  volume,
  setVolume,
  progress,
  showVolumeSlider,
  setShowVolumeSlider,
  currentVideo,
  videoRef
}) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.button 
            onClick={togglePlayback}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-white/20 backdrop-blur-md rounded-full"
          >
            {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
          </motion.button>
          
          <div className="text-sm text-white">
            <div className="font-medium">{currentVideo.title}</div>
            <div className="text-xs text-white/70">
              {videoRef.current ? 
                `${Math.floor(videoRef.current.currentTime / 60)}:${Math.floor(videoRef.current.currentTime % 60).toString().padStart(2, '0')}` :
                '00:00'} / {currentVideo.duration}
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <motion.button
              onClick={() => setShowVolumeSlider(!showVolumeSlider)}
              className="p-2 text-white/80 hover:text-white rounded-full hover:bg-white/10"
            >
              <Volume2 className="w-5 h-5" />
            </motion.button>
            
            {showVolumeSlider && (
              <div className="absolute bottom-full mb-2 bg-navy-dark/90 p-2 rounded-md">
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={volume} 
                  onChange={(e) => setVolume(parseInt(e.target.value))} 
                  className="w-24 accent-[#1a9dc3]"
                />
              </div>
            )}
          </div>
          
          <motion.button 
            className="p-2 text-white/80 hover:text-white rounded-full hover:bg-white/10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Download className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="w-full h-1.5 bg-white/30 rounded-full mt-3 overflow-hidden">
        <motion.div 
          className="h-full bg-[#ea384c]" 
          style={{ width: `${progress}%` }}
        ></motion.div>
      </div>
    </div>
  );
};

export default VideoControls;
