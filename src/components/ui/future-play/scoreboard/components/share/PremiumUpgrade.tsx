
import React from "react";
import { Lock, ChevronRight } from "lucide-react";

interface PremiumUpgradeProps {
  onUpgrade?: () => void;
}

const PremiumUpgrade: React.FC<PremiumUpgradeProps> = ({ onUpgrade = () => {} }) => {
  return (
    <div className="bg-gradient-to-br from-navy-light/30 to-primary/10 border border-[#FFD700]/20 rounded-lg p-4">
      <div className="flex items-start gap-3">
        <div className="bg-[#FFD700]/20 rounded-full p-2">
          <Lock className="w-5 h-5 text-[#FFD700]" />
        </div>
        <div className="flex-1">
          <h3 className="text-white font-medium">Premium Analytics & Sharing</h3>
          <p className="text-sm text-white/70 mt-1">
            Unlock advanced analytics, audience insights, and premium sharing tools.
          </p>
        </div>
      </div>
      <button 
        onClick={onUpgrade}
        className="w-full mt-4 bg-[#FFD700] hover:bg-[#F0C800] text-navy-dark font-medium py-2 rounded-md flex items-center justify-center gap-1 transition-colors"
      >
        Upgrade to Premium <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default PremiumUpgrade;
