
import React from "react";
import { Share } from "lucide-react";
import { motion } from "framer-motion";

interface ShareFooterProps {
  onClose: () => void;
  handleShare: () => void;
  isScheduling: boolean;
}

const ShareFooter: React.FC<ShareFooterProps> = ({ 
  onClose, 
  handleShare, 
  isScheduling 
}) => {
  return (
    <div className="p-4 border-t border-white/10 flex justify-between items-center">
      <motion.button 
        onClick={onClose}
        className="relative px-4 py-2 bg-navy/40 hover:bg-navy/60 text-white/80 rounded-md text-sm transition-colors
                   overflow-hidden border border-[#0EA5E9]/30"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Button shine effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: '-100%', opacity: 0 }}
          whileHover={{ x: '200%', opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <span className="relative z-10">Cancel</span>
      </motion.button>
      
      <motion.button 
        onClick={handleShare}
        className="relative px-6 py-2 bg-gradient-to-r from-[#0EA5E9]/90 to-[#1a9dc3]/90 
                   text-white rounded-md text-sm font-medium transition-colors 
                   border border-[#0EA5E9]/40 overflow-hidden flex items-center gap-1"
        whileHover={{ 
          scale: 1.05, 
          boxShadow: '0 0 15px rgba(14, 165, 233, 0.3)'
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Button glow animation */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{ 
            x: ['100%', '-100%'],
            opacity: [0, 1, 0],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            repeatDelay: 3
          }}
        />
        <span className="relative z-10">{isScheduling ? 'Schedule Post' : 'Share Now'}</span>
        <Share className="w-4 h-4 relative z-10" />
      </motion.button>
    </div>
  );
};

export default ShareFooter;
