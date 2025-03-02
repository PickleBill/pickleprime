
import React from "react";
import { TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const EngagementMetrics: React.FC = () => {
  return (
    <div className="bg-navy-light/20 border border-white/10 rounded-lg p-4 space-y-4">
      <h3 className="text-lg font-medium text-white/90 flex items-center gap-2">
        <TrendingUp className="w-5 h-5 text-primary" />
        Engagement Metrics
      </h3>
      
      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm text-white/70">Impressions</span>
            <span className="text-sm font-medium text-white">12.4K</span>
          </div>
          <Progress value={78} className="h-2 bg-white/10" />
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm text-white/70">Engagement Rate</span>
            <span className="text-sm font-medium text-white">7.2%</span>
          </div>
          <Progress value={72} className="h-2 bg-white/10" />
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm text-white/70">Click-through Rate</span>
            <span className="text-sm font-medium text-white">3.8%</span>
          </div>
          <Progress value={38} className="h-2 bg-white/10" />
        </div>
      </div>
      
      <div className="bg-navy/40 p-3 rounded-lg">
        <h4 className="text-sm font-medium text-white/90 mb-2">Audience Growth</h4>
        <div className="text-3xl font-bold text-white flex items-baseline gap-2">
          +245
          <span className="text-xs font-normal text-green-400">↑ 18.3%</span>
        </div>
        <p className="text-xs text-white/60 mt-1">New followers this week</p>
      </div>
    </div>
  );
};

export default EngagementMetrics;
