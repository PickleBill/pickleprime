
import React from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const PerformanceTrendChart: React.FC = () => {
  return (
    <div className="bg-navy-light/30 backdrop-blur-sm border border-white/5 rounded-lg p-4 shadow-lg">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-full bg-[#1a9dc3]/20">
            <TrendingUp className="w-4 h-4 text-[#1a9dc3]" />
          </div>
          <h4 className="text-base font-medium text-white/90">Performance Trend</h4>
        </div>
        <span className="text-xs text-white/50 bg-navy-dark/40 px-2 py-0.5 rounded-full">Last 5 matches</span>
      </div>
      
      <div className="h-36 bg-navy-dark/50 rounded-lg overflow-hidden relative shadow-inner border border-navy-light/10">
        {/* Refined line chart with smoother animation */}
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Background grid with fainter lines */}
          <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" />
          <line x1="0" y1="75" x2="100" y2="75" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" />
          
          <line x1="20" y1="0" x2="20" y2="100" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" />
          <line x1="40" y1="0" x2="40" y2="100" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" />
          <line x1="60" y1="0" x2="60" y2="100" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" />
          <line x1="80" y1="0" x2="80" y2="100" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" />
          
          {/* Performance line with smoother animation */}
          <motion.path 
            d="M0,70 L20,65 L40,40 L60,50 L80,30 L100,20" 
            fill="none" 
            stroke="#1a9dc3" 
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
          
          {/* Area under the line with enhanced gradient and smoother animation */}
          <motion.path 
            d="M0,70 L20,65 L40,40 L60,50 L80,30 L100,20 L100,100 L0,100 Z" 
            fill="url(#gradient)"
            opacity="0.3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1.8, delay: 0.5 }}
          />
          
          {/* Enhanced gradient definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1a9dc3" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1a9dc3" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Data points with refined animation and subtle glow */}
        <motion.div 
          className="absolute left-[20%] top-[65%] w-2.5 h-2.5 rounded-full bg-white border-2 border-[#1a9dc3]"
          style={{ boxShadow: '0 0 5px rgba(26,157,195,0.8)' }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7, type: "spring", stiffness: 500, damping: 15 }}
        />
        <motion.div 
          className="absolute left-[40%] top-[40%] w-2.5 h-2.5 rounded-full bg-white border-2 border-[#1a9dc3]"
          style={{ boxShadow: '0 0 5px rgba(26,157,195,0.8)' }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.9, type: "spring", stiffness: 500, damping: 15 }}
        />
        <motion.div 
          className="absolute left-[60%] top-[50%] w-2.5 h-2.5 rounded-full bg-white border-2 border-[#1a9dc3]"
          style={{ boxShadow: '0 0 5px rgba(26,157,195,0.8)' }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.1, type: "spring", stiffness: 500, damping: 15 }}
        />
        <motion.div 
          className="absolute left-[80%] top-[30%] w-2.5 h-2.5 rounded-full bg-white border-2 border-[#1a9dc3]"
          style={{ boxShadow: '0 0 5px rgba(26,157,195,0.8)' }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.3, type: "spring", stiffness: 500, damping: 15 }}
        />
        
        {/* Match labels */}
        <div className="absolute bottom-1 left-[20%] text-[10px] text-white/40 transform -translate-x-1/2">M1</div>
        <div className="absolute bottom-1 left-[40%] text-[10px] text-white/40 transform -translate-x-1/2">M2</div>
        <div className="absolute bottom-1 left-[60%] text-[10px] text-white/40 transform -translate-x-1/2">M3</div>
        <div className="absolute bottom-1 left-[80%] text-[10px] text-white/40 transform -translate-x-1/2">M4</div>
      </div>
      
      {/* Legend */}
      <div className="flex justify-end mt-2">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#1a9dc3]"></div>
          <span className="text-xs text-white/60">Performance Rating</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceTrendChart;
