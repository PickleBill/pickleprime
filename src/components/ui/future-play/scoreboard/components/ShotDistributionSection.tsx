
import React from "react";
import { BarChart2 } from "lucide-react";

const ShotDistributionSection: React.FC = () => {
  return (
    <div className="mt-2">
      <div className="flex items-center justify-between mb-1">
        <h4 className="text-white/90 text-[10px] font-medium">Shot Distribution</h4>
        <BarChart2 className="w-3 h-3 text-white/50" />
      </div>
      
      <div className="space-y-1">
        <div>
          <div className="flex items-center justify-between mb-0.5">
            <span className="text-white/70 text-[9px]">Dinks</span>
            <span className="text-white/90 text-[9px]">65%</span>
          </div>
          <div className="h-1.5 bg-navy/80 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary-dark to-primary" style={{ width: '65%' }}></div>
          </div>
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-0.5">
            <span className="text-white/70 text-[9px]">Drives</span>
            <span className="text-white/90 text-[9px]">24%</span>
          </div>
          <div className="h-1.5 bg-navy/80 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#0A4D73] to-[#0EA5E9]" style={{ width: '24%' }}></div>
          </div>
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-0.5">
            <span className="text-white/70 text-[9px]">Volleys</span>
            <span className="text-white/90 text-[9px]">11%</span>
          </div>
          <div className="h-1.5 bg-navy/80 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#F97316] to-[#FDBA74]" style={{ width: '11%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShotDistributionSection;
