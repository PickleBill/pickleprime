
import React from "react";
import { Activity, Award } from "lucide-react";
import { motion } from "framer-motion";
import AnalyticsDashboardHeader from "../components/analytics/AnalyticsDashboardHeader";
import AnalyticsFilters from "../components/analytics/AnalyticsFilters";
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
      className="bg-gradient-to-br from-navy-dark/90 to-navy/90 backdrop-blur-lg rounded-lg p-6 mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <AnalyticsDashboardHeader />
      
      <div className="space-y-4">
        <AnalyticsFilters 
          selectedStat={selectedStat}
          setSelectedStat={setSelectedStat}
          selectedTimeRange={selectedTimeRange}
          setSelectedTimeRange={setSelectedTimeRange}
        />
        
        <motion.div 
          className="grid grid-cols-2 gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <PerformanceTrendChart />
          
          <MetricsGrid />
          
          <KeyStatsSection />
        </motion.div>
        
        <PremiumBadge />
      </div>
    </motion.div>
  );
};

export default AnalyticsView;
