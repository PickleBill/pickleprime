
import React from "react";
import { TrendingUp, Users, Award, Clock, Calendar, ExternalLink } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const PremiumTab: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* First column - Social Engagement */}
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
      
      {/* Second column - Player Social Feed */}
      <div className="bg-navy-light/20 border border-white/10 rounded-lg p-4 space-y-4">
        <h3 className="text-lg font-medium text-white/90 flex items-center gap-2">
          <Users className="w-5 h-5 text-[#0FA0CE]" />
          Player Social Activity
        </h3>
        
        <div className="space-y-3">
          <div className="bg-navy/40 p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-[#0C8068]"></div>
              <div>
                <p className="text-sm font-medium text-white">Alex Johnson</p>
                <p className="text-xs text-white/60">@alexjpickleball</p>
              </div>
            </div>
            <p className="text-sm text-white/80">
              Excited for today's match! The preparation has been intense. #Pickleball #Championship
            </p>
            <div className="flex items-center gap-3 mt-2 text-xs text-white/60">
              <span>2h ago</span>
              <span>•</span>
              <span>345 likes</span>
            </div>
          </div>
          
          <div className="bg-navy/40 p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-[#0FA0CE]"></div>
              <div>
                <p className="text-sm font-medium text-white">Sarah Miller</p>
                <p className="text-xs text-white/60">@sarahpickleballpro</p>
              </div>
            </div>
            <p className="text-sm text-white/80">
              Just finished the first set! Tough competition today. Thanks to all my fans for the support!
            </p>
            <div className="flex items-center gap-3 mt-2 text-xs text-white/60">
              <span>45m ago</span>
              <span>•</span>
              <span>129 likes</span>
            </div>
          </div>
        </div>
        
        <button className="w-full py-2 bg-navy/40 hover:bg-navy/60 text-white/70 rounded-md text-sm transition-colors">
          Show More Activity
        </button>
      </div>
      
      {/* Third column - Advanced Stats & Scheduling */}
      <div className="space-y-4">
        <div className="bg-navy-light/20 border border-white/10 rounded-lg p-4 space-y-3">
          <h3 className="text-lg font-medium text-white/90 flex items-center gap-2">
            <Award className="w-5 h-5 text-[#FFD700]" />
            Match Insights
          </h3>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-navy/40 p-3 rounded-lg">
              <p className="text-xs text-white/60">Top Ball Speed</p>
              <p className="text-2xl font-bold text-white">72 mph</p>
            </div>
            <div className="bg-navy/40 p-3 rounded-lg">
              <p className="text-xs text-white/60">Highlight Views</p>
              <p className="text-2xl font-bold text-white">1.3K</p>
            </div>
            <div className="bg-navy/40 p-3 rounded-lg">
              <p className="text-xs text-white/60">Sponsor Mentions</p>
              <p className="text-2xl font-bold text-white">23</p>
            </div>
            <div className="bg-navy/40 p-3 rounded-lg">
              <p className="text-xs text-white/60">Fan Engagement</p>
              <p className="text-2xl font-bold text-white">86%</p>
            </div>
          </div>
        </div>
        
        <div className="bg-navy-light/20 border border-white/10 rounded-lg p-4 space-y-3">
          <h3 className="text-lg font-medium text-white/90 flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#0C8068]" />
            Content Calendar
          </h3>
          
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-2 bg-navy/40 rounded-lg">
              <div className="w-2 h-2 rounded-full bg-[#0FA0CE]"></div>
              <div className="flex-1">
                <p className="text-sm text-white/80">Match Recap</p>
                <p className="text-xs text-white/60">Today, 8:00 PM</p>
              </div>
              <button className="text-white/60 hover:text-white">
                <Calendar className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex items-center gap-3 p-2 bg-navy/40 rounded-lg">
              <div className="w-2 h-2 rounded-full bg-[#0C8068]"></div>
              <div className="flex-1">
                <p className="text-sm text-white/80">Player Interview</p>
                <p className="text-xs text-white/60">Tomorrow, 10:00 AM</p>
              </div>
              <button className="text-white/60 hover:text-white">
                <Calendar className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <button className="w-full py-2 bg-gradient-to-r from-[#0C8068] to-[#0FA0CE] text-white rounded-md text-sm font-medium hover:opacity-90 transition-opacity">
            Schedule New Post
          </button>
        </div>
        
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
      </div>
    </div>
  );
};

export default PremiumTab;
