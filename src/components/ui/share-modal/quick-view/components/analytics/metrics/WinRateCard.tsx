
import React from "react";
import { motion } from "framer-motion";

const WinRateCard: React.FC = () => {
  return (
    <motion.div 
      className="bg-navy-light/30 backdrop-blur-sm border border-white/5 rounded-md p-3"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <h4 className="text-sm font-medium text-white/90 mb-1">Win Rate</h4>
      <div className="h-24 bg-navy-dark/50 rounded flex flex-col items-center justify-center">
        <motion.div 
          className="text-3xl font-bold text-[#1a9dc3]"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          68%
        </motion.div>
        <motion.div 
          className="text-xs text-white/50 mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          +5% vs. last match
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WinRateCard;
