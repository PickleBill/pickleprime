
import React from "react";
import { Settings, Filter } from "lucide-react";
import { motion } from "framer-motion";

interface AnalyticsFiltersProps {
  selectedStat: string;
  setSelectedStat: React.Dispatch<React.SetStateAction<string>>;
  selectedTimeRange: string;
  setSelectedTimeRange: React.Dispatch<React.SetStateAction<string>>;
}

const FilterButton: React.FC<{
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, isActive, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
        isActive 
          ? 'bg-gradient-to-r from-[#1a9dc3]/90 to-[#1a9dc3]/70 text-white shadow-md' 
          : 'bg-navy-light/30 text-white/70 hover:bg-navy-light/50'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.button>
  );
};

const AnalyticsFilters: React.FC<AnalyticsFiltersProps> = ({
  selectedStat,
  setSelectedStat,
  selectedTimeRange,
  setSelectedTimeRange
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4 bg-navy-dark/40 p-3 rounded-lg border border-white/5">
      <div className="flex items-center gap-2">
        <div className="p-1.5 rounded-full bg-navy-light/30">
          <Filter className="w-3.5 h-3.5 text-white/70" />
        </div>
        <span className="text-sm text-white/70 mr-2">Filters:</span>
        <div className="flex flex-wrap gap-2">
          <FilterButton 
            label="Overview" 
            isActive={selectedStat === 'all'} 
            onClick={() => setSelectedStat('all')} 
          />
          
          <FilterButton 
            label="Personal" 
            isActive={selectedStat === 'personal'} 
            onClick={() => setSelectedStat('personal')} 
          />
          
          <FilterButton 
            label="Team" 
            isActive={selectedStat === 'team'} 
            onClick={() => setSelectedStat('team')} 
          />
        </div>
      </div>
      
      <div className="flex items-center gap-2 ml-auto">
        <motion.select
          className="bg-navy-light/30 border border-white/10 rounded-md text-xs text-white/70 py-1.5 px-2.5 focus:outline-none focus:ring-1 focus:ring-[#1a9dc3]/50"
          onChange={(e) => setSelectedTimeRange(e.target.value)}
          value={selectedTimeRange}
        >
          <option value="match">This Match</option>
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="season">Season</option>
          <option value="year">Year</option>
        </motion.select>
        
        <motion.button
          className="p-1.5 bg-navy-light/30 rounded-md text-white/70 hover:bg-navy-light/50 hover:text-white border border-white/5"
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
