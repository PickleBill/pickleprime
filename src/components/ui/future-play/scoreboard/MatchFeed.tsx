
import React from 'react';
import { Users2, BarChart2, Video, Trophy, Activity, Heart } from "lucide-react";

interface MatchFeedItem {
  id: number;
  type: string;
  content: string;
  time: string;
  likes?: number;
}

interface MatchFeedProps {
  feedItems: MatchFeedItem[];
}

const MatchFeed: React.FC<MatchFeedProps> = ({ feedItems }) => {
  return (
    <div className="bg-[#092435] rounded-lg overflow-hidden border border-[#1A4258]/50 flex flex-col">
      <div className="py-1.5 px-3 flex items-center justify-between border-b border-[#1A4258]/50">
        <span className="uppercase text-white font-semibold text-xs sm:text-sm">Match Feed</span>
        <div className="flex items-center gap-2">
          <button className="text-white/70 hover:text-white transition-colors">
            <Users2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
          <button className="text-white/70 hover:text-white transition-colors">
            <BarChart2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
      
      <div className="max-h-[280px] sm:max-h-60 overflow-y-auto p-2">
        {feedItems.map(item => (
          <div 
            key={item.id} 
            className="mb-2 bg-[#0A2B3D] rounded-lg overflow-hidden border border-[#1A4258]/30"
          >
            <div className="p-2 sm:p-3">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {item.type === "highlight" ? (
                    <Video className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#2BCB6E]" />
                  ) : item.type === "achievement" ? (
                    <Trophy className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#e89e25]" />
                  ) : (
                    <Activity className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#1a9dc3]" />
                  )}
                  <span className="uppercase text-[10px] sm:text-xs font-semibold text-white/80">
                    {item.type === "highlight" ? "Highlight" : 
                     item.type === "achievement" ? "Achievement" : "Stat Alert"}
                  </span>
                </div>
                <span className="text-white/50 text-[10px] sm:text-xs">{item.time}</span>
              </div>
              
              <p className="text-white text-xs sm:text-sm mb-2">{item.content}</p>
              
              {item.type === "highlight" && (
                <div className="flex items-center justify-between">
                  <button className="flex items-center gap-1 text-white/60 hover:text-white text-[10px] sm:text-xs transition-colors">
                    <Heart className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    <span>{item.likes}</span>
                  </button>
                  <button className="text-[10px] sm:text-xs py-0.5 sm:py-1 px-1.5 sm:px-2 bg-[#0C8068]/20 text-[#0C8068] rounded hover:bg-[#0C8068]/30 transition-colors">
                    VIEW
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchFeed;
