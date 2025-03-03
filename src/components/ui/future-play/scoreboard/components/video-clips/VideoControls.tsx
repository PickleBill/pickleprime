
import React from "react";
import { Play, Pause, Volume2, Download } from "lucide-react";
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
            {currentVideo.title}
            <span className="text-xs text-white/60 ml-2">
              {videoRef.current ? 
                `${Math.floor(videoRef.current.currentTime / 60)}:${Math.floor(videoRef.current.currentTime % 60).toString().padStart(2, '0')}` : 
                '00:00'} / {currentVideo.duration}
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
                  onChange={(e) => setVolume(Number(e.target.value))}
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
          className="h-full bg-[#ea384c]" 
          style={{ width: `${progress}%` }}
        ></motion.div>
      </div>
    </div>
  );
};

export default VideoControls;
