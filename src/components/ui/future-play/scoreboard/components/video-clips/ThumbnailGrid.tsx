
import React from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { VideoClip } from "./types";

interface ThumbnailGridProps {
  videoClips: VideoClip[];
  currentVideo: number;
  setCurrentVideo: React.Dispatch<React.SetStateAction<number>>;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThumbnailGrid: React.FC<ThumbnailGridProps> = ({
  videoClips,
  currentVideo,
  setCurrentVideo,
  setIsPlaying
}) => {
  return (
    <div className="mt-6">
      <h4 className="text-lg font-medium text-white mb-3">More Clips</h4>
      <div className="grid grid-cols-4 gap-3">
        {videoClips.map((clip, index) => (
          <motion.button
            key={clip.id}
            onClick={() => {
              setCurrentVideo(index);
              setIsPlaying(false);
            }}
            className={`aspect-video rounded-lg overflow-hidden relative border-2 ${
              currentVideo === index 
                ? 'border-[#ea384c]' 
                : 'border-transparent hover:border-white/30'
            } transition-all duration-300`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src={clip.thumbnail} 
              alt={clip.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <Play className="w-8 h-8 text-white/70" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-1.5">
              <p className="text-xs text-white truncate">{clip.title}</p>
              <p className="text-[10px] text-white/70">{clip.duration}</p>
            </div>
            {currentVideo === index && (
              <motion.div 
                className="absolute bottom-[-2px] left-0 right-0 h-1 bg-[#ea384c]"
                layoutId="activeVideoIndicator"
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ThumbnailGrid;
