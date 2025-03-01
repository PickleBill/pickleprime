
import React from 'react';
import DistributionBar from './DistributionBar';

interface ShotDistributionProps {
  distributions: {
    label: string;
    percentage: number;
    gradientFrom: string;
    gradientTo: string;
  }[];
}

const ShotDistribution: React.FC<ShotDistributionProps> = ({ distributions }) => {
  return (
    <div>
      <h4 className="text-white/90 text-sm mb-2">Shot Distribution</h4>
      
      <div className="space-y-3">
        {distributions.map((dist, index) => (
          <DistributionBar
            key={index}
            label={dist.label}
            percentage={dist.percentage}
            gradientFrom={dist.gradientFrom}
            gradientTo={dist.gradientTo}
          />
        ))}
      </div>
    </div>
  );
};

export default ShotDistribution;
