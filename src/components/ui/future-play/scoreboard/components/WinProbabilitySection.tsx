
import React from "react";

const WinProbabilitySection: React.FC = () => {
  return (
    <div className="mt-2">
      <div className="flex items-center justify-between mb-1">
        <h4 className="text-white/90 text-[10px] font-medium">Win Probability</h4>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]"></div>
        </div>
      </div>
      
      <div className="flex items-center text-[9px] text-white/70 mb-0.5">
        <span className="flex-1">Team Green</span>
        <span className="flex-1 text-right">Team Blue</span>
      </div>
      
      <div className="h-3.5 bg-navy/80 rounded-full overflow-hidden flex">
        <div className="h-full bg-gradient-to-r from-primary-dark to-primary flex items-center justify-end px-1.5" style={{ width: '65%' }}>
          <span className="text-white text-[9px] font-bold">65%</span>
        </div>
        <div className="h-full bg-gradient-to-r from-[#3182CE] to-[#0EA5E9] flex items-center justify-start px-1.5" style={{ width: '35%' }}>
          <span className="text-white text-[9px] font-bold">35%</span>
        </div>
      </div>
    </div>
  );
};

export default WinProbabilitySection;
