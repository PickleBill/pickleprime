
import React from "react";
import { Zap, Activity, Clock } from "lucide-react";
import StatComparisonItem from "./StatComparisonItem";

interface StatsComparisonProps {
  topSpeed1: string;
  topSpeed2: string;
  accuracy1: number;
  accuracy2: number;
  spinRate1: string;
  spinRate2: string;
  reaction1: string;
  reaction2: string;
}

const StatsComparison: React.FC<StatsComparisonProps> = ({
  topSpeed1,
  topSpeed2,
  accuracy1,
  accuracy2,
  spinRate1,
  spinRate2,
  reaction1,
  reaction2
}) => {
  return (
    <div className="space-y-1.5 mb-2">
      {/* Top Speed */}
      <StatComparisonItem
        player1Value={topSpeed1}
        player2Value={topSpeed2}
        icon={<Zap className="w-3 h-3 text-[#F97316]" />}
        label="Top Speed"
        unit="mph"
      />
      
      {/* Accuracy */}
      <StatComparisonItem
        player1Value={accuracy1}
        player2Value={accuracy2}
        icon={<div className="w-3 h-3 flex items-center justify-center rounded-full border border-[#D946EF] text-[#D946EF]">●</div>}
        label="Accuracy"
        unit="%"
      />
      
      {/* Spin Rate */}
      <StatComparisonItem
        player1Value={spinRate1}
        player2Value={spinRate2}
        icon={<Activity className="w-3 h-3 text-[#0EA5E9]" />}
        label="Spin Rate"
        unit="rpm"
      />
      
      {/* Reaction Time */}
      <StatComparisonItem
        player1Value={reaction1}
        player2Value={reaction2}
        icon={<Clock className="w-3 h-3 text-[#D946EF]" />}
        label="Reaction"
        unit="s"
      />
    </div>
  );
};

export default StatsComparison;
