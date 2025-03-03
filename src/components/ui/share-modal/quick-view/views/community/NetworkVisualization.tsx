
import React from "react";
import { motion } from "framer-motion";
import NetworkGraph from "./NetworkGraph";

const NetworkVisualization: React.FC = () => {
  return (
    <motion.div 
      className="relative h-[200px] mb-6 bg-gradient-to-b from-navy-dark/80 to-navy/60 rounded-lg overflow-hidden border border-purple-500/20 shadow-lg"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <NetworkGraph 
        centralNodeColor="bg-teal-400"
        friendNodeColor="bg-purple-400"
        centralNodeSize={8}
        friendNodeSize={5}
        pulseColor="border-teal-400/30"
        connectionColor="from-teal-400/70 to-purple-400/70"
        animationDuration={3.5}
        nodeAnimationDelay={0.25}
        showLegend={false}
      />
      
      <motion.div 
        className="absolute top-3 right-3 bg-navy-dark/80 text-white text-xs py-1 px-2.5 rounded-full border border-white/20 backdrop-blur-sm"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Your Network
      </motion.div>
      
      <motion.div 
        className="absolute bottom-3 left-3 flex items-center gap-2 bg-navy-dark/70 py-1 px-2 rounded-full backdrop-blur-sm"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-teal-400 border border-white/30"></div>
        <span className="text-white/80 text-xs">You</span>
        <div className="w-2.5 h-2.5 rounded-full bg-purple-400 border border-white/30 ml-1"></div>
        <span className="text-white/80 text-xs">Friends</span>
      </motion.div>
    </motion.div>
  );
};

export default NetworkVisualization;
