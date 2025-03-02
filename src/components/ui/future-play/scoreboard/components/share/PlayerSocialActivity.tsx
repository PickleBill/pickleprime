
import React from "react";
import { Users } from "lucide-react";

const PlayerSocialActivity: React.FC = () => {
  return (
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
  );
};

export default PlayerSocialActivity;
