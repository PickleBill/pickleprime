
import React from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { VideoClip } from "./videoData";

interface ThumbnailSelectorProps {
  videoClips: VideoClip[];
  currentVideo: number;
  setCurrentVideo: React.Dispatch<React.SetStateAction<number>>;
}

const ThumbnailSelector: React.FC<ThumbnailSelectorProps> = ({
  videoClips,
  currentVideo,
  setCurrentVideo
}) => {
  return (
    <div>
      <h4 className="text-sm font-medium text-white/80 mb-2">More Clips</h4>
      <div className="grid grid-cols-4 gap-2">
        {videoClips.map((clip, index) => (
          <motion.button
            key={clip.id}
            onClick={() => setCurrentVideo(index)}
            className={`aspect-video rounded overflow-hidden relative border-2 ${
              currentVideo === index 
                ? 'border-[#1a9dc3]' 
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
              <Play className="w-4 h-4 text-white/70" />
            </div>
            {currentVideo === index && (
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-1 bg-[#1a9dc3]"
                layoutId="activeVideo"
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ThumbnailSelector;
