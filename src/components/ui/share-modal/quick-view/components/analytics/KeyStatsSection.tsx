
import React from "react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Award } from "lucide-react";

const KeyStatsSection: React.FC = () => {
  // Stats data
  const stats = [
    { name: "Aces", value: 8, percent: 80, improvement: "+3 vs last match", color: "#4CAF50" },
    { name: "First Serve %", value: "65%", percent: 65, improvement: "+5% this season", color: "#1a9dc3" },
    { name: "Break Points", value: "4/6", percent: 67, improvement: "67% conversion rate", color: "#9333EA" }
  ];

  return (
    <motion.div 
      className="bg-navy-light/30 backdrop-blur-sm border border-white/5 rounded-lg p-4 shadow-lg"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="p-1.5 rounded-full bg-[#FFD700]/20">
          <Award className="w-4 h-4 text-[#FFD700]" />
        </div>
        <h4 className="text-base font-medium text-white/90">Key Performance Indicators</h4>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            className="space-y-2 bg-navy-dark/40 p-3 rounded-lg shadow-inner border border-white/5"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2 + (index * 0.1) }}
          >
            <div className="flex justify-between items-center">
              <span className="text-sm text-white/70">{stat.name}</span>
              <span className="text-base font-medium text-white">{stat.value}</span>
            </div>
            <Progress 
              value={stat.percent} 
              className="h-1.5 bg-white/10" 
              // Use a properly styled indicator via CSS
              style={{ 
                '--indicator-color': stat.color 
              } as React.CSSProperties}
            />
            <div className="text-xs text-white/50">{stat.improvement}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default KeyStatsSection;
