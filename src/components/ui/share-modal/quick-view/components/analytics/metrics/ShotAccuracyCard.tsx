
import React from "react";
import { motion } from "framer-motion";

const ShotAccuracyCard: React.FC = () => {
  return (
    <motion.div 
      className="bg-navy-light/30 backdrop-blur-sm border border-white/5 rounded-md p-3"
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <h4 className="text-sm font-medium text-white/90 mb-1">Shot Accuracy</h4>
      <div className="h-24 bg-navy-dark/50 rounded flex items-center justify-center relative">
        {/* Circular progress indicator */}
        <svg className="w-16 h-16" viewBox="0 0 100 100">
          <circle 
            cx="50" 
            cy="50" 
            r="40" 
            fill="none" 
            stroke="rgba(255,255,255,0.1)" 
            strokeWidth="8"
          />
          <motion.circle 
            cx="50" 
            cy="50" 
            r="40" 
            fill="none" 
            stroke="#1a9dc3" 
            strokeWidth="8"
            strokeDasharray="251.2"
            strokeDashoffset="70.336" // 251.2 * (1 - 0.72)
            strokeLinecap="round"
            initial={{ strokeDashoffset: 251.2 }}
            animate={{ strokeDashoffset: 70.336 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          />
        </svg>
        
        <motion.div 
          className="absolute text-2xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          72%
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ShotAccuracyCard;
