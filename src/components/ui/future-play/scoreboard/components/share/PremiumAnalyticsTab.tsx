
import React, { useState } from "react";
import { TrendingUp, Users, Award, Calendar, ChevronRight, CheckCircle2, Lock } from "lucide-react";
import EngagementMetrics from "./EngagementMetrics";
import PlayerSocialActivity from "./PlayerSocialActivity";
import MatchInsights from "./MatchInsights";
import ContentCalendar from "./ContentCalendar";
import PremiumUpgrade from "./PremiumUpgrade";

interface PremiumAnalyticsTabProps {
  isMatchShare?: boolean;
}

const PremiumAnalyticsTab: React.FC<PremiumAnalyticsTabProps> = ({ isMatchShare = false }) => {
  const [isPremium, setIsPremium] = useState(false);
  
  // Simulate upgrading to premium
  const handleUpgrade = () => {
    setIsPremium(true);
  };
  
  return (
    <div className="bg-navy px-4 py-6 space-y-8">
      {!isPremium && <PremiumUpgrade onUpgrade={handleUpgrade} />}
      
      <div className={`${!isPremium ? "opacity-40 pointer-events-none" : ""} space-y-8`}>
        {/* Enhanced Analytics Dashboard Preview */}
        {!isPremium && (
          <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
            <div className="bg-navy-dark/80 backdrop-blur-sm rounded-xl p-6 text-center max-w-sm">
              <Lock className="w-12 h-12 text-[#FFD700] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Premium Analytics</h3>
              <p className="text-white/70 mb-4">
                Unlock comprehensive analytics and advanced sharing tools to maximize your social media impact.
              </p>
            </div>
          </div>
        )}
        
        {/* Analytics Dashboard */}
        <div className="space-y-8">
          <div className="bg-navy-light/20 border border-white/10 rounded-lg p-4">
            <h3 className="text-lg font-medium text-white/90 mb-4">Analytics Dashboard</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-navy/40 p-3 rounded-lg">
                <p className="text-xs text-white/60">Post Reach</p>
                <p className="text-2xl font-bold text-white">24.7K</p>
                <p className="text-xs text-green-400">↑ 18% from last match</p>
              </div>
              <div className="bg-navy/40 p-3 rounded-lg">
                <p className="text-xs text-white/60">Conversion Rate</p>
                <p className="text-2xl font-bold text-white">8.2%</p>
                <p className="text-xs text-green-400">↑ 3.5% from average</p>
              </div>
              <div className="bg-navy/40 p-3 rounded-lg">
                <p className="text-xs text-white/60">New Followers</p>
                <p className="text-2xl font-bold text-white">487</p>
                <p className="text-xs text-green-400">↑ 34% from last match</p>
              </div>
              <div className="bg-navy/40 p-3 rounded-lg">
                <p className="text-xs text-white/60">Audience Growth</p>
                <p className="text-2xl font-bold text-white">12.3%</p>
                <p className="text-xs text-green-400">↑ 5.7% from last month</p>
              </div>
            </div>
          </div>
          
          <EngagementMetrics />
          
          {isMatchShare && <PlayerSocialActivity />}
          
          {isMatchShare && <MatchInsights />}
          
          {/* Audience Demographics - New Section */}
          <div className="bg-navy-light/20 border border-white/10 rounded-lg p-4 space-y-4">
            <h3 className="text-lg font-medium text-white/90 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-400" />
              Audience Demographics
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm text-white/70 mb-2">Age Distribution</h4>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-xs text-white/80 mb-1">
                      <span>18-24</span>
                      <span>32%</span>
                    </div>
                    <div className="w-full bg-navy h-2 rounded-full">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '32%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-white/80 mb-1">
                      <span>25-34</span>
                      <span>41%</span>
                    </div>
                    <div className="w-full bg-navy h-2 rounded-full">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '41%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-white/80 mb-1">
                      <span>35-44</span>
                      <span>18%</span>
                    </div>
                    <div className="w-full bg-navy h-2 rounded-full">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '18%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-white/80 mb-1">
                      <span>45+</span>
                      <span>9%</span>
                    </div>
                    <div className="w-full bg-navy h-2 rounded-full">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '9%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm text-white/70 mb-2">Geographic Reach</h4>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-xs text-white/80 mb-1">
                      <span>United States</span>
                      <span>64%</span>
                    </div>
                    <div className="w-full bg-navy h-2 rounded-full">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '64%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-white/80 mb-1">
                      <span>Canada</span>
                      <span>12%</span>
                    </div>
                    <div className="w-full bg-navy h-2 rounded-full">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '12%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-white/80 mb-1">
                      <span>Europe</span>
                      <span>15%</span>
                    </div>
                    <div className="w-full bg-navy h-2 rounded-full">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-white/80 mb-1">
                      <span>Other</span>
                      <span>9%</span>
                    </div>
                    <div className="w-full bg-navy h-2 rounded-full">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '9%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <ContentCalendar />
          
          {/* AI-Powered Recommendations - New Section */}
          <div className="bg-navy-light/20 border border-white/10 rounded-lg p-4 space-y-4">
            <h3 className="text-lg font-medium text-white/90 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-purple-400" />
              AI-Powered Recommendations
            </h3>
            
            <div className="space-y-3">
              <div className="bg-navy/40 p-3 rounded-lg border-l-4 border-purple-500">
                <h4 className="text-sm font-medium text-white mb-1">Optimal Posting Time</h4>
                <p className="text-xs text-white/70">
                  Based on your audience activity, post your match highlights on Tuesday between 7-8 PM for maximum engagement.
                </p>
                <div className="flex items-center gap-1 mt-2 text-xs text-purple-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>87% confidence</span>
                </div>
              </div>
              
              <div className="bg-navy/40 p-3 rounded-lg border-l-4 border-purple-500">
                <h4 className="text-sm font-medium text-white mb-1">Content Optimization</h4>
                <p className="text-xs text-white/70">
                  Including the term "championship match" in your posts increases engagement by 24%. Try adding this to your next share.
                </p>
                <div className="flex items-center gap-1 mt-2 text-xs text-purple-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>92% confidence</span>
                </div>
              </div>
              
              <div className="bg-navy/40 p-3 rounded-lg border-l-4 border-purple-500">
                <h4 className="text-sm font-medium text-white mb-1">Platform Focus</h4>
                <p className="text-xs text-white/70">
                  Your Instagram posts receive 40% more engagement than other platforms. Consider prioritizing this channel.
                </p>
                <div className="flex items-center gap-1 mt-2 text-xs text-purple-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>89% confidence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumAnalyticsTab;
