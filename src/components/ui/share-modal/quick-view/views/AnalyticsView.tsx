
import React from "react";
import { motion } from "framer-motion";
import AnalyticsFilters from "../components/analytics/AnalyticsFilters";
import AnalyticsDashboardHeader from "../components/analytics/AnalyticsDashboardHeader";
import PerformanceTrendChart from "../components/analytics/PerformanceTrendChart";
import MetricsGrid from "../components/analytics/MetricsGrid";
import KeyStatsSection from "../components/analytics/KeyStatsSection";
import PremiumBadge from "../components/analytics/PremiumBadge";

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
      className="bg-navy-dark text-white rounded-lg overflow-hidden max-h-[80vh] overflow-y-auto pb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Header */}
      <div className="p-5 border-b border-white/10 sticky top-0 z-10 bg-navy-dark backdrop-blur-lg bg-opacity-95">
        <AnalyticsDashboardHeader />
        <AnalyticsFilters 
          selectedStat={selectedStat}
          setSelectedStat={setSelectedStat}
          selectedTimeRange={selectedTimeRange}
          setSelectedTimeRange={setSelectedTimeRange}
        />
      </div>
      
      {/* Main content */}
      <div className="p-5 space-y-4">
        {/* Performance Trend Chart */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-base font-medium text-white">Performance Trend</h4>
            <span className="text-xs text-white/60">Last 5 matches</span>
          </div>
          <PerformanceTrendChart />
        </div>
        
        {/* Metrics Grid */}
        <MetricsGrid />
        
        {/* Key Stats Section */}
        <div className="grid grid-cols-2 gap-3">
          <KeyStatsSection />
          
          {/* Premium Badge */}
          <div className="bg-navy-light/30 backdrop-blur-sm border border-white/5 rounded-md p-3 flex items-center justify-center">
            <PremiumBadge />
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="mt-6">
          <h4 className="text-sm font-medium text-white/90 mb-3">Quick Actions</h4>
          <div className="grid grid-cols-3 gap-3">
            <motion.button 
              className="bg-[#4CAF50]/80 backdrop-blur-sm rounded-md p-3 flex flex-col items-center justify-center"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="mb-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="4" width="20" height="16" rx="2" stroke="white" strokeWidth="2"/>
                  <path d="M10 9L15 12L10 15V9Z" fill="white"/>
                </svg>
              </div>
              <span className="text-xs text-white font-medium">Video Clips</span>
            </motion.button>
            
            <motion.button 
              className="bg-[#F5A623]/80 backdrop-blur-sm rounded-md p-3 flex flex-col items-center justify-center"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="mb-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.5 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V7.5L14.5 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 18L9 15L12 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 15H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-xs text-white font-medium">Tournaments</span>
            </motion.button>
            
            <motion.button 
              className="bg-[#9b87f5]/80 backdrop-blur-sm rounded-md p-3 flex flex-col items-center justify-center"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="mb-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 20V10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 20V4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 20V14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-xs text-white font-medium">Stats</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AnalyticsView;
