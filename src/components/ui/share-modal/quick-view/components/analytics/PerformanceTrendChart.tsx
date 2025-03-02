
import React from "react";
import { motion } from "framer-motion";

const PerformanceTrendChart: React.FC = () => {
  return (
    <div className="col-span-2 bg-navy-light/30 backdrop-blur-sm border border-white/5 rounded-md p-3">
      <div className="flex justify-between items-center mb-1">
        <h4 className="text-sm font-medium text-white/90">Performance Trend</h4>
        <span className="text-xs text-white/50">Last 5 matches</span>
      </div>
      <div className="h-32 bg-navy-dark/50 rounded overflow-hidden relative">
        {/* Mock line chart */}
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Background grid */}
          <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
          <line x1="0" y1="75" x2="100" y2="75" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
          
          <line x1="20" y1="0" x2="20" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
          <line x1="40" y1="0" x2="40" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
          <line x1="60" y1="0" x2="60" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
          <line x1="80" y1="0" x2="80" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
          
          {/* Performance line */}
          <motion.path 
            d="M0,70 L20,65 L40,40 L60,50 L80,30 L100,20" 
            fill="none" 
            stroke="#1a9dc3" 
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          
          {/* Area under the line */}
          <motion.path 
            d="M0,70 L20,65 L40,40 L60,50 L80,30 L100,20 L100,100 L0,100 Z" 
            fill="url(#gradient)"
            opacity="0.3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1a9dc3" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1a9dc3" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Data points */}
        <motion.div 
          className="absolute left-[20%] top-[65%] w-2 h-2 rounded-full bg-white border-2 border-[#1a9dc3]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6 }}
        />
        <motion.div 
          className="absolute left-[40%] top-[40%] w-2 h-2 rounded-full bg-white border-2 border-[#1a9dc3]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8 }}
        />
        <motion.div 
          className="absolute left-[60%] top-[50%] w-2 h-2 rounded-full bg-white border-2 border-[#1a9dc3]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 }}
        />
        <motion.div 
          className="absolute left-[80%] top-[30%] w-2 h-2 rounded-full bg-white border-2 border-[#1a9dc3]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2 }}
        />
      </div>
    </div>
  );
};

export default PerformanceTrendChart;
