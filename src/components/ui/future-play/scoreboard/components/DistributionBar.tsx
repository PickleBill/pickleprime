
import React from 'react';

interface DistributionBarProps {
  label: string;
  percentage: number;
  gradientFrom: string;
  gradientTo: string;
}

const DistributionBar: React.FC<DistributionBarProps> = ({
  label,
  percentage,
  gradientFrom,
  gradientTo
}) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-white/70 text-xs">{label}</span>
        <span className="text-white/90 text-xs">{percentage}%</span>
      </div>
      <div className="h-2 bg-navy/80 rounded-full overflow-hidden">
        <div 
          className={`h-full bg-gradient-to-r from-[${gradientFrom}] to-[${gradientTo}]`} 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default DistributionBar;
