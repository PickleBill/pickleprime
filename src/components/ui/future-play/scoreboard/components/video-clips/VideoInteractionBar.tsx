
import React from "react";
import { Heart, MessageSquare, Share2 } from "lucide-react";
import { motion } from "framer-motion";

interface VideoInteractionBarProps {
  currentVideo: number;
}

const VideoInteractionBar: React.FC<VideoInteractionBarProps> = ({ currentVideo }) => {
  return (
    <div className="flex items-center justify-between mt-3 px-1">
      <div className="flex items-center gap-3">
        <motion.button 
          className="flex items-center gap-1 text-white/60 hover:text-white/90"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Heart className="w-4 h-4" />
          <span className="text-xs">{20 + currentVideo}</span>
        </motion.button>
        
        <motion.button 
          className="flex items-center gap-1 text-white/60 hover:text-white/90"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageSquare className="w-4 h-4" />
          <span className="text-xs">{7 + currentVideo}</span>
        </motion.button>
      </div>
      
      <motion.button 
        className="flex items-center gap-1 text-white/60 hover:text-white/90"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Share2 className="w-4 h-4" />
        <span className="text-xs">Share</span>
      </motion.button>
    </div>
  );
};

export default VideoInteractionBar;
