
import React from "react";

const NetworkStats: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-6">
      <div className="bg-navy/70 border border-white/10 rounded-lg p-4 text-center">
        <h4 className="text-[#0EA5E9] font-medium mb-1">Network</h4>
        <p className="text-3xl font-bold text-white">12</p>
        <p className="text-xs text-white/60">Total Connections</p>
      </div>
      <div className="bg-navy/70 border border-white/10 rounded-lg p-4 text-center">
        <h4 className="text-[#8B5CF6] font-medium mb-1">Active Now</h4>
        <p className="text-3xl font-bold text-white">5</p>
        <p className="text-xs text-white/60">Players Online</p>
      </div>
      <div className="bg-navy/70 border border-white/10 rounded-lg p-4 text-center">
        <h4 className="text-[#F97316] font-medium mb-1">Matches</h4>
        <p className="text-3xl font-bold text-white">8</p>
        <p className="text-xs text-white/60">This Week</p>
      </div>
    </div>
  );
};

export default NetworkStats;
