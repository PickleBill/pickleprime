
import React, { ReactNode } from 'react';

interface StatComparisonItemProps {
  icon: ReactNode;
  label: string;
  player1Value: string | number;
  player2Value: string | number;
  unit?: string;
  player1Color?: string;
  player2Color?: string;
}

const StatComparisonItem: React.FC<StatComparisonItemProps> = ({
  icon,
  label,
  player1Value,
  player2Value,
  unit = "",
  player1Color = "#4CAF50",
  player2Color = "#33C3F0"
}) => {
  return (
    <div className="grid grid-cols-[30px_1fr_1fr] items-center gap-2 px-4 py-3 bg-[#001a2c] rounded-md shadow-inner">
      <div className="flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-white/90 text-xs uppercase font-medium">{label}</span>
        <span className="text-[#4CAF50] font-bold text-sm md:text-base" style={{ color: player1Color }}>
          {player1Value}{unit}
        </span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-white/90 text-xs uppercase font-medium invisible">.</span>
        <span className="text-[#33C3F0] font-bold text-sm md:text-base" style={{ color: player2Color }}>
          {player2Value}{unit}
        </span>
      </div>
    </div>
  );
};

export default StatComparisonItem;
