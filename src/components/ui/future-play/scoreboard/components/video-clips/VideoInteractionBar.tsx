
import React from "react";
import { Heart, MessageSquare, Share2 } from "lucide-react";
import { motion } from "framer-motion";

interface VideoInteractionBarProps {
  currentVideo: number;
}

const VideoInteractionBar: React.FC<VideoInteractionBarProps> = () => {
  return (
    <div className="flex items-center justify-between mt-3 px-1">
      <div className="flex items-center gap-5">
        <motion.button 
          className="flex items-center gap-1.5 text-white/80 hover:text-white/100"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Heart className="w-5 h-5" />
          <span className="text-sm">24</span>
        </motion.button>
        
        <motion.button 
          className="flex items-center gap-1.5 text-white/80 hover:text-white/100"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageSquare className="w-5 h-5" />
          <span className="text-sm">8</span>
        </motion.button>
      </div>
      
      <motion.button 
        className="flex items-center gap-1.5 text-white/80 hover:text-white/100"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Share2 className="w-5 h-5" />
        <span className="text-sm">Share</span>
      </motion.button>
    </div>
  );
};

export default VideoInteractionBar;
