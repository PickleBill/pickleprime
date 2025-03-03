
import React from "react";
import { Activity, Award, Video, Trophy, BarChart2, Users, Settings } from "lucide-react";
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

// Define action button interface
interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  color: string;
  onClick: () => void;
}

// Action Button Component - Enhanced with better visual effects
const ActionButton: React.FC<ActionButtonProps> = ({ icon, label, color, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`relative flex flex-col items-center justify-center text-white p-2.5 rounded-xl overflow-hidden 
                bg-gradient-to-br ${color} shadow-lg border border-white/10
                hover:shadow-xl transition-all duration-300 h-full`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Animated background shine effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 
                  opacity-0 -rotate-45 transform-gpu" 
        initial={{ translateX: '100%' }}
        whileHover={{ 
          translateX: '-250%',
          opacity: 1,
          transition: { duration: 1.2, ease: "easeInOut" }
        }}
      />
      
      <div className="p-2 mb-1 bg-white/10 rounded-full">
        {icon}
      </div>
      <span className="text-xs font-medium mt-1">{label}</span>
    </motion.button>
  );
};

const AnalyticsView: React.FC<AnalyticsViewProps> = ({
  selectedStat,
  setSelectedStat,
  selectedTimeRange,
  setSelectedTimeRange
}) => {
  // Action button handler
  const handleActionClick = (action: string) => {
    console.log(`${action} button clicked`);
    // Here you would implement the actual action
  };

  // Define our action buttons
  const actionButtons = [
    {
      id: "video",
      icon: <Video className="w-5 h-5" />,
      label: "Video Clips",
      color: "from-green-500 to-teal-600",
      handler: () => handleActionClick("Video Clips")
    },
    {
      id: "tournaments",
      icon: <Trophy className="w-5 h-5" />,
      label: "Tournaments",
      color: "from-amber-500 to-orange-600",
      handler: () => handleActionClick("Tournaments")
    },
    {
      id: "stats",
      icon: <BarChart2 className="w-5 h-5" />,
      label: "Stats",
      color: "from-purple-500 to-pink-600",
      handler: () => handleActionClick("Stats")
    },
    {
      id: "community",
      icon: <Users className="w-5 h-5" />,
      label: "Community",
      color: "from-primary to-blue-600",
      handler: () => handleActionClick("Community")
    },
    {
      id: "awards",
      icon: <Award className="w-5 h-5" />,
      label: "Achievements",
      color: "from-yellow-500 to-yellow-700",
      handler: () => handleActionClick("Achievements")
    },
    {
      id: "settings",
      icon: <Settings className="w-5 h-5" />,
      label: "Settings",
      color: "from-gray-500 to-gray-700",
      handler: () => handleActionClick("Settings")
    }
  ];

  return (
    <motion.div 
      className="bg-gradient-to-br from-navy-dark/90 to-navy/90 backdrop-blur-lg rounded-lg p-6 mb-4 border border-blue-500/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <AnalyticsDashboardHeader />
      
      <div className="space-y-5">
        <AnalyticsFilters 
          selectedStat={selectedStat}
          setSelectedStat={setSelectedStat}
          selectedTimeRange={selectedTimeRange}
          setSelectedTimeRange={setSelectedTimeRange}
        />
        
        {/* Main analytics content with fixed layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div 
            className="col-span-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <PerformanceTrendChart />
          </motion.div>
          
          <motion.div 
            className="col-span-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <MetricsGrid />
          </motion.div>
          
          <motion.div 
            className="col-span-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <KeyStatsSection />
          </motion.div>
        </div>
        
        {/* Action Buttons - 2 rows with 3 buttons each */}
        <motion.div 
          className="mt-5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <h4 className="text-sm font-medium text-white/80 mb-3 flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#1a9dc3]" />
            Quick Actions
          </h4>
          <div className="grid grid-cols-3 gap-3">
            {actionButtons.map((button) => (
              <ActionButton
                key={button.id}
                icon={button.icon}
                label={button.label}
                color={button.color}
                onClick={button.handler}
              />
            ))}
          </div>
        </motion.div>
        
        <PremiumBadge />
      </div>
    </motion.div>
  );
};

export default AnalyticsView;
