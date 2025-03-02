
import React from "react";
import { ExternalLink } from "lucide-react";

const PremiumUpgrade: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#FFD700]/20 to-[#FFD700]/10 border border-[#FFD700]/30 rounded-lg p-4">
      <h4 className="text-md font-medium text-white/90 mb-2">Upgrade to Premium</h4>
      <p className="text-sm text-white/70 mb-3">
        Get full access to all premium features including AI-powered content suggestions, competitor analysis, and more.
      </p>
      <button className="w-full py-2 bg-[#FFD700] text-navy-dark rounded-md text-sm font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-1">
        Subscribe Now
        <ExternalLink className="w-4 h-4" />
      </button>
    </div>
  );
};

export default PremiumUpgrade;
