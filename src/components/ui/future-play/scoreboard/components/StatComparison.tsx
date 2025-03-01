
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatComparisonProps {
  player1Value: string;
  player2Value: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}

const StatComparison: React.FC<StatComparisonProps> = ({
  player1Value,
  player2Value,
  label,
  icon,
  color
}) => {
  return (
    <div className="grid grid-cols-3 items-center">
      <div className="text-[#176840] text-xl font-semibold">{player1Value}</div>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-1 mb-1">
          {icon}
          <span className="text-white/80 text-xs uppercase">{label}</span>
        </div>
        <span className="text-white/50 text-xs">vs</span>
      </div>
      <div className="text-[#0A4D73] text-xl font-semibold text-right">{player2Value}</div>
    </div>
  );
};

export default StatComparison;
