
import React, { useState } from "react";
import { Activity, Settings, Filter, Award, ChevronDown, ChevronUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

interface AnalyticsViewProps {
  selectedStat: string;
  setSelectedStat: React.Dispatch<React.SetStateAction<string>>;
  selectedTimeRange: string;
  setSelectedTimeRange: React.Dispatch<React.SetStateAction<string>>;
}

const AnalyticsView: React.FC<AnalyticsViewProps> = ({
  selectedStat,
  setSelectedStat,
  selectedTimeRange,
  setSelectedTimeRange
}) => {
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
            <Activity className="w-5 h-5 text-[#1a9dc3]" />
          </div>
          <h3 className="text-lg font-semibold text-white">Analytics Dashboard</h3>
        </div>
      </div>
      
      <div className="space-y-4">
        {/* Dashboard filters */}
        <div className="flex justify-between items-center mb-4 gap-2">
          <div className="flex gap-2">
            <motion.button
              onClick={() => setSelectedStat('all')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedStat === 'all' 
                  ? 'bg-[#1a9dc3] text-white' 
                  : 'bg-navy-light/30 text-white/70 hover:bg-navy-light/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Overview
            </motion.button>
            
            <motion.button
              onClick={() => setSelectedStat('personal')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedStat === 'personal' 
                  ? 'bg-[#1a9dc3] text-white' 
                  : 'bg-navy-light/30 text-white/70 hover:bg-navy-light/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Personal
            </motion.button>
            
            <motion.button
              onClick={() => setSelectedStat('team')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedStat === 'team' 
                  ? 'bg-[#1a9dc3] text-white' 
                  : 'bg-navy-light/30 text-white/70 hover:bg-navy-light/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Team
            </motion.button>
          </div>
          
          <div className="flex items-center gap-2">
            <motion.select
              className="bg-navy-light/30 border border-white/10 rounded-md text-xs text-white/70 py-1 px-2"
              onChange={(e) => setSelectedTimeRange(e.target.value)}
              value={selectedTimeRange}
            >
              <option value="match">This Match</option>
              <option value="season">Season</option>
              <option value="year">Year</option>
            </motion.select>
            
            <motion.button
              className="p-1.5 bg-navy-light/30 rounded-md text-white/70 hover:bg-navy-light/50 hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Settings className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </div>
        
        {/* Performance metrics */}
        <motion.div 
          className="grid grid-cols-2 gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
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
          
          {/* Key stats section */}
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
        </motion.div>
        
        {/* Premium badge */}
        <motion.div 
          className="bg-gradient-to-r from-[#FFD700]/20 to-[#FFD700]/10 border border-[#FFD700]/30 rounded-lg p-3 mt-2 flex justify-between items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <div className="flex items-start gap-2">
            <Award className="w-5 h-5 text-[#FFD700] mt-0.5" />
            <div>
              <h4 className="text-sm font-medium text-white/90">Advanced Analytics</h4>
              <p className="text-xs text-white/70">Unlock advanced stats and insights</p>
            </div>
          </div>
          
          <motion.button 
            className="px-3 py-1.5 bg-[#FFD700] text-navy-dark rounded text-xs font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Upgrade
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AnalyticsView;
