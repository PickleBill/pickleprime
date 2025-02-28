
import React from "react";
import { Video, Activity, Award, Heart, Users2, BarChart2 } from "lucide-react";

interface MatchFeedProps {
  triggerHighlight: () => void;
}

const MatchFeed: React.FC<MatchFeedProps> = ({ triggerHighlight }) => {
  return (
    <div className="bg-navy-light/30 rounded-2xl overflow-hidden border border-white/10 flex-1">
      <div className="bg-gradient-to-r from-primary/20 to-[#1a9dc3]/20 px-6 py-3 border-b border-white/10 flex justify-between items-center">
        <h2 className="text-white font-bold">MATCH FEED</h2>
        <div className="flex gap-2">
          <button className="text-white/60 hover:text-white transition-colors">
            <Users2 className="w-4 h-4" />
          </button>
          <button className="text-white/60 hover:text-white transition-colors">
            <BarChart2 className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="p-4 h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        <div className="space-y-4">
          <div onClick={triggerHighlight} className="bg-navy-dark/50 rounded-lg p-3 border border-white/10 hover:bg-navy-dark/70 transition-colors cursor-pointer">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm">HIGHLIGHT</span>
              </div>
              <span className="text-white/50 text-xs">00:34</span>
            </div>
            <p className="text-white/80 text-sm mb-2">Amazing cross-court winner by Alex!</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button className="text-white/60 hover:text-white transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
                <span className="text-white/60 text-xs">24</span>
              </div>
              <div className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full">
                CLICK TO VIEW
              </div>
            </div>
          </div>
          
          <div className="bg-navy-dark/50 rounded-lg p-3 border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#e89e25]" />
                <span className="text-[#e89e25] font-medium text-sm">ACHIEVEMENT</span>
              </div>
              <span className="text-white/50 text-xs">01:12</span>
            </div>
            <p className="text-white/80 text-sm">Jordan reached 50+ mph serve for the first time!</p>
          </div>
          
          <div className="bg-navy-dark/50 rounded-lg p-3 border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#1a9dc3]" />
                <span className="text-[#1a9dc3] font-medium text-sm">STAT ALERT</span>
              </div>
              <span className="text-white/50 text-xs">02:45</span>
            </div>
            <p className="text-white/80 text-sm">Alex winning 80% of rallies longer than 8 shots.</p>
          </div>
          
          <div onClick={triggerHighlight} className="bg-navy-dark/50 rounded-lg p-3 border border-white/10 hover:bg-navy-dark/70 transition-colors cursor-pointer">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm">HIGHLIGHT</span>
              </div>
              <span className="text-white/50 text-xs">03:17</span>
            </div>
            <p className="text-white/80 text-sm mb-2">Perfect drop shot by Jordan!</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button className="text-white/60 hover:text-white transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
                <span className="text-white/60 text-xs">18</span>
              </div>
              <div className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full">
                CLICK TO VIEW
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchFeed;
