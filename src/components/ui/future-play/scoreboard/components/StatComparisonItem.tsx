
import React from 'react';

interface StatComparisonItemProps {
  icon: React.ReactNode;
  label: string;
  player1Value: number;
  player2Value: number;
  unit: string;
  player1Color: string;
  player2Color: string;
}

const StatComparisonItem: React.FC<StatComparisonItemProps> = ({
  icon,
  label,
  player1Value,
  player2Value,
  unit,
  player1Color,
  player2Color
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center mb-2">
        {icon}
        <span className="ml-2 text-white/80 text-sm font-semibold tracking-wider">{label}</span>
        <span className="text-white/60 text-xs ml-1.5">vs</span>
      </div>
      
      <div className="flex justify-between items-center">
        <span className="text-lg md:text-xl font-bold" style={{ color: player1Color }}>
          {player1Value} <span className="text-white/70 text-sm">{unit}</span>
        </span>
        
        <span className="text-lg md:text-xl font-bold" style={{ color: player2Color }}>
          {player2Value} <span className="text-white/70 text-sm">{unit}</span>
        </span>
      </div>
      
      {/* Visual comparison bar */}
      <div className="mt-1.5 h-1.5 bg-[#001a2c] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${(player1Value / (player1Value + player2Value)) * 100}%`,
            background: `linear-gradient(to right, ${player1Color}, ${player1Color})`
          }}
        />
      </div>
    </div>
  );
};

export default StatComparisonItem;
