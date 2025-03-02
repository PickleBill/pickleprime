
import React from "react";
import { Award, ArrowRight } from "lucide-react";

const PremiumTeaser: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#0C8068]/30 to-[#0FA0CE]/30 border border-[#FFD700]/20 rounded-lg p-4">
      <div className="flex justify-between items-start mb-3">
        <h4 className="text-md font-medium text-white/90 flex items-center gap-1">
          <Award className="w-4 h-4 text-[#FFD700]" />
          Premium Analytics
        </h4>
        <span className="text-xs bg-[#FFD700]/20 text-[#FFD700] px-2 py-0.5 rounded-full">PRO</span>
      </div>
      
      <p className="text-sm text-white/70 mb-4">
        Get deeper insights about your social reach, engagement metrics, and audience growth.
      </p>
      
      <button 
        onClick={() => {
          const premiumTab = document.querySelector('[data-value="premium"]');
          if (premiumTab) {
            (premiumTab as HTMLElement).click();
          }
        }}
        className="w-full py-2 bg-gradient-to-r from-[#0C8068] to-[#0FA0CE] text-white rounded-md text-sm font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-1"
      >
        Explore Premium Features
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default PremiumTeaser;
