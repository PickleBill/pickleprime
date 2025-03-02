
import React from "react";
import EngagementMetrics from "./EngagementMetrics";
import PlayerSocialActivity from "./PlayerSocialActivity";
import MatchInsights from "./MatchInsights";
import ContentCalendar from "./ContentCalendar";
import PremiumUpgrade from "./PremiumUpgrade";

interface PremiumAnalyticsTabProps {
  isMatchShare?: boolean;
}

const PremiumAnalyticsTab: React.FC<PremiumAnalyticsTabProps> = ({ isMatchShare = false }) => {
  return (
    <div className="bg-navy px-4 py-6 space-y-8">
      <PremiumUpgrade />
      
      <div className="opacity-40 pointer-events-none">
        <div className="space-y-8">
          <EngagementMetrics />
          
          {isMatchShare && <PlayerSocialActivity />}
          
          {isMatchShare && <MatchInsights />}
          
          <ContentCalendar />
        </div>
      </div>
    </div>
  );
};

export default PremiumAnalyticsTab;
