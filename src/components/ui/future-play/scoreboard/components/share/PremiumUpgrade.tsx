
import React from "react";
import { Lock, ChevronRight, Crown } from "lucide-react";

interface PremiumUpgradeProps {
  onUpgrade?: () => void;
}

const PremiumUpgrade: React.FC<PremiumUpgradeProps> = ({ onUpgrade = () => {} }) => {
  return (
    <div className="bg-gradient-to-br from-navy-light/30 to-primary/10 border border-[#FFD700]/20 rounded-lg p-4 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#FFD700]/10 blur-xl"></div>
      
      <div className="flex items-start gap-3">
        <div className="bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full p-2 shadow-lg shadow-[#FFD700]/20">
          <Crown className="w-5 h-5 text-navy-dark" />
        </div>
        <div className="flex-1">
          <h3 className="text-white font-semibold">Premium Analytics & Insights</h3>
          <p className="text-sm text-white/70 mt-1">
            Unlock advanced analytics, audience demographics, AI recommendations, and premium sharing tools.
          </p>
        </div>
      </div>
      <button 
        onClick={onUpgrade}
        className="w-full mt-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-navy-dark font-medium py-2.5 rounded-md flex items-center justify-center gap-1 transition-all hover:shadow-lg hover:shadow-[#FFD700]/20 transform hover:-translate-y-0.5"
      >
        Upgrade to Premium <ChevronRight className="w-4 h-4" />
      </button>
      
      {/* Mini features list */}
      <div className="mt-3 grid grid-cols-2 gap-2">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#FFD700]"></div>
          <span className="text-xs text-white/60">Audience Demographics</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#FFD700]"></div>
          <span className="text-xs text-white/60">AI Recommendations</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#FFD700]"></div>
          <span className="text-xs text-white/60">Content Calendar</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#FFD700]"></div>
          <span className="text-xs text-white/60">Advanced Metrics</span>
        </div>
      </div>
    </div>
  );
};

export default PremiumUpgrade;
