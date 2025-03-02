
import React from "react";
import { Settings } from "lucide-react";
import { motion } from "framer-motion";

interface AnalyticsFiltersProps {
  selectedStat: string;
  setSelectedStat: React.Dispatch<React.SetStateAction<string>>;
  selectedTimeRange: string;
  setSelectedTimeRange: React.Dispatch<React.SetStateAction<string>>;
}

const AnalyticsFilters: React.FC<AnalyticsFiltersProps> = ({
  selectedStat,
  setSelectedStat,
  selectedTimeRange,
  setSelectedTimeRange
}) => {
  return (
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
  );
};

export default AnalyticsFilters;
