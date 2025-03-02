
import React from "react";
import { motion } from "framer-motion";
import WinRateCard from "./metrics/WinRateCard";
import ShotAccuracyCard from "./metrics/ShotAccuracyCard";
import { Progress } from "@/components/ui/progress";
import { Clock } from "lucide-react";

const AverageTimeCard: React.FC = () => {
  const averageTime = 42; // minutes

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="flex-1 bg-navy-light/30 backdrop-blur-sm border border-white/5 rounded-lg p-4"
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="p-1.5 rounded-full bg-[#4CAF50]/20">
          <Clock className="w-4 h-4 text-[#4CAF50]" />
        </div>
        <h4 className="text-sm font-medium text-white">Avg. Match Time</h4>
      </div>
      
      <div className="mt-3">
        <div className="flex items-end justify-between mb-1">
          <div className="text-2xl font-bold text-white">{averageTime}<span className="text-sm font-normal text-white/60 ml-1">min</span></div>
        </div>
        <Progress value={70} className="h-2 bg-navy-light" />
        <div className="flex justify-between mt-1">
          <span className="text-xs text-white/60">Season avg: 38min</span>
          <span className="text-xs text-white/60">↑ 4min</span>
        </div>
      </div>
    </motion.div>
  );
};

const MetricsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
      <WinRateCard />
      <ShotAccuracyCard />
      <AverageTimeCard />
    </div>
  );
};

export default MetricsGrid;
