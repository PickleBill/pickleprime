
import React from "react";
import { ArrowRight } from "lucide-react";

interface PremiumAnalyticsCardProps {
  onExploreClick: () => void;
}

const PremiumAnalyticsCard: React.FC<PremiumAnalyticsCardProps> = ({ onExploreClick }) => {
  return (
    <div className="bg-gradient-to-r from-[#0C8068]/30 to-[#0FA0CE]/30 border border-[#FFD700]/20 rounded-lg p-4">
      <div className="flex justify-between items-start mb-1">
        <h4 className="text-md font-medium text-white/90 flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2l-3 14-3-9-3 9-3-14"></path>
          </svg>
          Premium Analytics
        </h4>
        <span className="text-xs bg-[#FFD700]/20 text-[#FFD700] px-2 py-0.5 rounded-full">PRO</span>
      </div>
      
      <p className="text-sm text-white/70 mb-3">
        Get deeper insights about your social reach, engagement metrics, and audience growth.
      </p>
      
      <button 
        onClick={onExploreClick}
        className="w-full py-2 bg-gradient-to-r from-[#0C8068] to-[#0FA0CE] text-white rounded-md text-sm font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-1"
      >
        Explore Premium Features
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default PremiumAnalyticsCard;
