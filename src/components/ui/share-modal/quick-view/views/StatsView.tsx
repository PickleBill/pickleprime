
import React from "react";
import { BarChart2, ChevronDown, ChevronUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { motion } from "framer-motion";

interface StatsViewProps {
  // Any props needed for the stats view
}

const StatsView: React.FC<StatsViewProps> = () => {
  return (
    <motion.div 
      className="bg-gradient-to-br from-navy-dark/90 to-navy/90 backdrop-blur-lg rounded-lg p-6 mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-full bg-[#1a9dc3]/20">
            <BarChart2 className="w-5 h-5 text-[#1a9dc3]" />
          </div>
          <h3 className="text-lg font-semibold text-white">Match Statistics</h3>
        </div>
      </div>
      
      <div className="space-y-4">
        <p className="text-white/70">Detailed match statistics and performance metrics.</p>
        
        <div className="space-y-3">
          <div className="bg-navy-light/30 backdrop-blur-sm border border-white/5 rounded-md p-3">
            <h4 className="text-sm font-medium text-white/90 mb-2">Team Comparison</h4>
            
            {['Aces', 'First Serve %', 'Second Serve %', 'Break Points'].map((stat, index) => (
              <motion.div 
                key={stat} 
                className="flex items-center justify-between mb-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <span className="text-xs text-white/70">{stat}</span>
                <div className="flex-1 mx-3">
                  <div className="h-1.5 bg-navy-dark/70 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-[#1a9dc3] to-[#4CAF50]" 
                      style={{ width: `${Math.floor(Math.random() * 70 + 30)}%` }}
                      initial={{ width: "0%" }}
                      animate={{ width: `${Math.floor(Math.random() * 70 + 30)}%` }}
                      transition={{ duration: 0.8, delay: 0.2 * index }}
                    />
                  </div>
                </div>
                <span className="text-xs font-medium text-white/90">{Math.floor(Math.random() * 100)}%</span>
              </motion.div>
            ))}
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <motion.div 
              className="bg-navy-light/30 backdrop-blur-sm border border-white/5 rounded-md p-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h4 className="text-sm font-medium text-white/90 mb-1">Shot Distribution</h4>
              <div className="h-24 bg-navy-dark/50 rounded flex items-center justify-center relative">
                {/* Simple pie chart */}
                <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                  <motion.path
                    d="M50 50 L50 10 A40 40 0 0 1 85 65 Z"
                    fill="#4CAF50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  />
                  <motion.path
                    d="M50 50 L85 65 A40 40 0 0 1 15 65 Z"
                    fill="#FFC107"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  />
                  <motion.path
                    d="M50 50 L15 65 A40 40 0 0 1 50 10 Z"
                    fill="#2196F3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                  />
                </svg>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-navy-light/30 backdrop-blur-sm border border-white/5 rounded-md p-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h4 className="text-sm font-medium text-white/90 mb-1">Win Probability</h4>
              <div className="h-24 bg-navy-dark/50 rounded flex items-center justify-center">
                <motion.div 
                  className="text-2xl font-bold text-[#1a9dc3]"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                >
                  76%
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="flex justify-end mt-2">
          <AnimatedButton variant="glass" size="sm" active={true} glowColor="rgba(26, 157, 195, 0.5)">
            View Full Stats
          </AnimatedButton>
        </div>
      </div>
    </motion.div>
  );
};

export default StatsView;
