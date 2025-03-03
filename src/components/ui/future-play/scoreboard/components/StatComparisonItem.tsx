
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
  // Calculate which player has the higher value for visual indication
  const p1Value = typeof player1Value === 'string' ? parseFloat(player1Value) : player1Value;
  const p2Value = typeof player2Value === 'string' ? parseFloat(player2Value) : player2Value;
  const player1Higher = p1Value > p2Value;
  const player2Higher = p2Value > p1Value;
  
  return (
    <div className="grid grid-cols-[30px_1fr_1fr] items-center gap-2 px-4 py-2.5 bg-[#001a2c] rounded-md shadow-inner transition-colors hover:bg-[#001f34]">
      <div className="flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-white/90 text-xs uppercase font-medium mb-0.5">{label}</span>
        <div className="flex items-center">
          <span className="text-sm md:text-base font-semibold" style={{ color: player1Color }}>
            {player1Value}{unit}
          </span>
          {player1Higher && <span className="ml-1 text-green-400 text-xs">▲</span>}
        </div>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-white/90 text-xs uppercase font-medium invisible">.</span>
        <div className="flex items-center">
          {player2Higher && <span className="mr-1 text-green-400 text-xs">▲</span>}
          <span className="text-sm md:text-base font-semibold" style={{ color: player2Color }}>
            {player2Value}{unit}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatComparisonItem;
