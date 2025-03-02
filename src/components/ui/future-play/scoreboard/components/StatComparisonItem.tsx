
import React, { ReactNode } from "react";

interface StatComparisonItemProps {
  player1Value: string;
  player2Value: string;
  icon: ReactNode;
  label: string;
  unit?: string;
  player1Color?: string;
  player2Color?: string;
}

const StatComparisonItem: React.FC<StatComparisonItemProps> = ({
  player1Value,
  player2Value,
  icon,
  label,
  unit,
  player1Color = "#4CAF50",
  player2Color = "#3db5e6"
}) => {
  return (
    <div className="grid grid-cols-7 items-center">
      <div className="col-span-2 text-primary text-xs font-semibold text-right pr-2" style={{ color: player1Color }}>
        {player1Value}{unit ? ` ${unit}` : ""}
      </div>
      <div className="col-span-3 flex flex-col items-center">
        <div className="flex items-center gap-1 mb-0.5">
          {icon}
          <span className="text-white/80 text-[10px] uppercase">{label}</span>
        </div>
        <div className="px-1.5 py-px rounded-full bg-navy-light/40 text-white/50 text-[8px]">vs</div>
      </div>
      <div className="col-span-2 text-xs font-semibold text-left pl-2" style={{ color: player2Color }}>
        {player2Value}{unit ? ` ${unit}` : ""}
      </div>
    </div>
  );
};

export default StatComparisonItem;
