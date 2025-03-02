
import React from 'react';
import { Activity, Trophy, Video, Heart } from 'lucide-react';
import { MatchFeedItem } from './types';

interface MatchFeedProps {
  matchFeedItems: MatchFeedItem[];
}

const MatchFeed: React.FC<MatchFeedProps> = ({ matchFeedItems }) => {
  return (
    <div className="p-2">
      {matchFeedItems.map(item => (
        <div 
          key={item.id} 
          className="mb-2 bg-[#0a2d4a]/70 rounded-lg overflow-hidden border border-[#0a2d4a]"
        >
          <div className="p-2">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-1.5">
                {item.type === "highlight" ? (
                  <Video className="w-3 h-3 text-[#4CAF50]" />
                ) : item.type === "achievement" ? (
                  <Trophy className="w-3 h-3 text-[#FFC107]" />
                ) : (
                  <Activity className="w-3 h-3 text-[#3db5e6]" />
                )}
                <span className="uppercase text-[10px] font-semibold text-white/80">
                  {item.type === "highlight" ? "Highlight" : 
                   item.type === "achievement" ? "Achievement" : "Stat Alert"}
                </span>
              </div>
              <span className="text-white/50 text-[10px]">{item.time}</span>
            </div>
            
            <p className="text-white text-xs mb-2">{item.content}</p>
            
            {item.type === "highlight" && (
              <div className="flex items-center justify-between">
                <button className="flex items-center gap-1 text-white/60 hover:text-white text-[10px] transition-colors">
                  <Heart className="w-2.5 h-2.5" />
                  <span>{item.likes || 24}</span>
                </button>
                <button className="text-[10px] py-0.5 px-1.5 bg-[#4CAF50]/20 text-[#4CAF50] rounded hover:bg-[#4CAF50]/30 transition-colors">
                  VIEW
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MatchFeed;
