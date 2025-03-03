
import React from "react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Percent, Clock, Target } from "lucide-react";

const MetricCard: React.FC<{
  title: string;
  value: string | number;
  subValue: string;
  icon: React.ReactNode;
  bgColor: string;
  iconColor: string;
  progress: number;
  comparison: string;
  delay: number;
}> = ({ title, value, subValue, icon, bgColor, iconColor, progress, comparison, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="bg-navy-light/30 backdrop-blur-sm border border-white/5 rounded-lg p-4 shadow-lg"
    >
      <div className="flex items-center gap-2 mb-2">
        <div className={`p-1.5 rounded-full ${bgColor}`}>
          {icon}
        </div>
        <h4 className="text-sm font-medium text-white">{title}</h4>
      </div>
      
      <div className="mt-3">
        <div className="flex items-baseline justify-between mb-1.5">
          <div className="text-2xl font-bold text-white flex items-baseline gap-1">
            {value}
            {subValue && <span className="text-sm font-normal text-white/60">{subValue}</span>}
          </div>
        </div>
        <Progress 
          value={progress} 
          className="h-2 bg-navy-dark/60" 
          indicatorClassName={`bg-gradient-to-r ${bgColor.replace('bg-', 'from-').replace('/20', '')} to-${iconColor.replace('text-', '')}`}
        />
        <div className="flex justify-between mt-1.5">
          <span className="text-xs text-white/60">{comparison}</span>
          <motion.span 
            className="text-xs text-green-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.2 }}
          >
            Improving
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};

const MetricsGrid: React.FC = () => {
  const metrics = [
    {
      title: "Win Rate",
      value: 68,
      subValue: "%",
      icon: <Percent className="w-4 h-4 text-[#4CAF50]" />,
      bgColor: "bg-[#4CAF50]/20",
      iconColor: "text-[#4CAF50]",
      progress: 68,
      comparison: "Season avg: 63%",
      delay: 0.1
    },
    {
      title: "Shot Accuracy",
      value: 72,
      subValue: "%",
      icon: <Target className="w-4 h-4 text-[#1a9dc3]" />,
      bgColor: "bg-[#1a9dc3]/20",
      iconColor: "text-[#1a9dc3]",
      progress: 72,
      comparison: "Career best: 75%",
      delay: 0.2
    },
    {
      title: "Avg. Match Time",
      value: 42,
      subValue: "min",
      icon: <Clock className="w-4 h-4 text-[#9333EA]" />,
      bgColor: "bg-[#9333EA]/20",
      iconColor: "text-[#9333EA]",
      progress: 70,
      comparison: "Season avg: 38min",
      delay: 0.3
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
};

export default MetricsGrid;
