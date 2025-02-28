
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
    <div className="bg-[#092435] rounded-lg overflow-hidden border border-[#1A4258]/50 flex flex-col flex-1">
      <div className="py-2 px-3 flex items-center justify-between border-b border-[#1A4258]/50">
        <span className="uppercase text-white font-semibold text-sm">Match Feed</span>
        <div className="flex items-center gap-2">
          <button className="text-white/70 hover:text-white transition-colors">
            <Users2 className="w-4 h-4" />
          </button>
          <button className="text-white/70 hover:text-white transition-colors">
            <BarChart2 className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="max-h-60 sm:flex-1 overflow-y-auto p-2">
        {feedItems.map(item => (
          <div 
            key={item.id} 
            className="mb-2 bg-[#0A2B3D] rounded-lg overflow-hidden border border-[#1A4258]/30"
          >
            <div className="p-3">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  {item.type === "highlight" ? (
                    <Video className="w-3.5 h-3.5 text-[#2BCB6E]" />
                  ) : item.type === "achievement" ? (
                    <Trophy className="w-3.5 h-3.5 text-[#e89e25]" />
                  ) : (
                    <Activity className="w-3.5 h-3.5 text-[#1a9dc3]" />
                  )}
                  <span className="uppercase text-xs font-semibold text-white/80">
                    {item.type === "highlight" ? "Highlight" : 
                     item.type === "achievement" ? "Achievement" : "Stat Alert"}
                  </span>
                </div>
                <span className="text-white/50 text-xs">{item.time}</span>
              </div>
              
              <p className="text-white text-xs sm:text-sm mb-2">{item.content}</p>
              
              {item.type === "highlight" && (
                <div className="flex items-center justify-between">
                  <button className="flex items-center gap-1 text-white/60 hover:text-white text-xs transition-colors">
                    <Heart className="w-3 h-3" />
                    <span>{item.likes}</span>
                  </button>
                  <button className="text-xs py-1 px-2 bg-[#0C8068]/20 text-[#0C8068] rounded hover:bg-[#0C8068]/30 transition-colors">
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
