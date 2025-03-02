
import React from 'react';
import { Activity, Trophy, Video, Heart, Clock } from 'lucide-react';
import { MatchFeedItem } from './types';

interface MatchFeedProps {
  matchFeedItems: MatchFeedItem[];
}

const MatchFeed: React.FC<MatchFeedProps> = ({ matchFeedItems }) => {
  return (
    <div className="p-3 space-y-2">
      {matchFeedItems.map(item => (
        <div 
          key={item.id} 
          className="bg-[#1a3b55]/80 rounded-lg overflow-hidden border border-[#254a68]/60 hover:border-[#254a68] transition-colors"
        >
          <div className="p-2.5">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5">
                {item.type === "highlight" ? (
                  <Video className="w-3.5 h-3.5 text-[#4CAF50]" />
                ) : item.type === "achievement" ? (
                  <Trophy className="w-3.5 h-3.5 text-[#FFC107]" />
                ) : (
                  <Activity className="w-3.5 h-3.5 text-[#3db5e6]" />
                )}
                <span className="uppercase text-xs font-semibold text-white/90">
                  {item.type === "highlight" ? "Highlight" : 
                   item.type === "achievement" ? "Achievement" : "Stat Alert"}
                </span>
              </div>
              <div className="flex items-center gap-1 text-white/50 text-xs">
                <Clock className="w-3 h-3" />
                <span>{item.time}</span>
              </div>
            </div>
            
            <p className="text-white text-sm mb-2">{item.content}</p>
            
            {item.type === "highlight" && (
              <div className="flex items-center justify-between mt-1.5">
                <button className="flex items-center gap-1 text-white/70 hover:text-white text-xs transition-colors">
                  <Heart className="w-3 h-3" />
                  <span>{item.likes || 24}</span>
                </button>
                <button className="text-xs py-0.5 px-2 bg-[#4CAF50]/20 text-[#4CAF50] rounded hover:bg-[#4CAF50]/30 transition-colors font-medium">
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
