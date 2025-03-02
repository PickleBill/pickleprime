
import React from "react";
import EngagementMetrics from "./EngagementMetrics";
import PlayerSocialActivity from "./PlayerSocialActivity";
import MatchInsights from "./MatchInsights";
import ContentCalendar from "./ContentCalendar";
import PremiumUpgrade from "./PremiumUpgrade";

const PremiumAnalyticsTab: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* First column - Social Engagement */}
      <EngagementMetrics />
      
      {/* Second column - Player Social Feed */}
      <PlayerSocialActivity />
      
      {/* Third column - Advanced Stats & Scheduling */}
      <div className="space-y-4">
        <MatchInsights />
        <ContentCalendar />
        <PremiumUpgrade />
      </div>
    </div>
  );
};

export default PremiumAnalyticsTab;
