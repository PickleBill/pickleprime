
import React from "react";
import { Award } from "lucide-react";

const MatchInsights: React.FC = () => {
  return (
    <div className="bg-navy-light/20 border border-white/10 rounded-lg p-4 space-y-3">
      <h3 className="text-lg font-medium text-white/90 flex items-center gap-2">
        <Award className="w-5 h-5 text-[#FFD700]" />
        Match Insights
      </h3>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-navy/40 p-3 rounded-lg">
          <p className="text-xs text-white/60">Top Ball Speed</p>
          <p className="text-2xl font-bold text-white">72 mph</p>
        </div>
        <div className="bg-navy/40 p-3 rounded-lg">
          <p className="text-xs text-white/60">Highlight Views</p>
          <p className="text-2xl font-bold text-white">1.3K</p>
        </div>
        <div className="bg-navy/40 p-3 rounded-lg">
          <p className="text-xs text-white/60">Sponsor Mentions</p>
          <p className="text-2xl font-bold text-white">23</p>
        </div>
        <div className="bg-navy/40 p-3 rounded-lg">
          <p className="text-xs text-white/60">Fan Engagement</p>
          <p className="text-2xl font-bold text-white">86%</p>
        </div>
      </div>
    </div>
  );
};

export default MatchInsights;
