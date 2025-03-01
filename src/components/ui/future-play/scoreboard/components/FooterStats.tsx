
import React from "react";
import { Zap } from "lucide-react";

interface FooterStatsProps {
  ballVelocity: number;
}

const FooterStats: React.FC<FooterStatsProps> = ({ ballVelocity }) => {
  return (
    <div className="mt-2 pt-1.5 border-t border-white/10 flex items-center gap-2 text-xs">
      <div className="flex-1 flex items-center bg-navy-light/30 rounded-full px-2 py-0.5">
        <Zap className="w-3 h-3 mr-1 text-[#F97316]" />
        <span className="text-white/80 text-[9px]">Current ball speed: <span className="text-white font-medium">{Math.round(ballVelocity)} mph</span></span>
      </div>
    </div>
  );
};

export default FooterStats;
