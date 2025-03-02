
import React from "react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

const KeyStatsSection: React.FC = () => {
  return (
    <motion.div 
      className="col-span-2 bg-navy-light/30 backdrop-blur-sm border border-white/5 rounded-md p-3"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.4 }}
    >
      <h4 className="text-sm font-medium text-white/90 mb-3">Key Stats</h4>
      
      <div className="space-y-2">
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-white/70">Aces</span>
            <span className="text-xs font-medium text-white">8</span>
          </div>
          <Progress value={80} className="h-1.5 bg-white/10" />
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-white/70">First Serve %</span>
            <span className="text-xs font-medium text-white">65%</span>
          </div>
          <Progress value={65} className="h-1.5 bg-white/10" />
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-white/70">Break Points</span>
            <span className="text-xs font-medium text-white">4/6</span>
          </div>
          <Progress value={67} className="h-1.5 bg-white/10" />
        </div>
      </div>
    </motion.div>
  );
};

export default KeyStatsSection;
