import React, { useState, useEffect } from "react";
import MatchFeed from "../MatchFeed";
import { MatchFeedItem } from "../types";

interface MatchFeedPanelProps {
  matchFeedItems: MatchFeedItem[];
}

const MatchFeedPanel: React.FC<MatchFeedPanelProps> = ({
  matchFeedItems: initialMatchFeedItems
}) => {
  const [matchFeedItems, setMatchFeedItems] = useState<MatchFeedItem[]>(initialMatchFeedItems);
  
  useEffect(() => {
    const generateNewFeedItem = () => {
      const types = ["highlight", "achievement", "stat"];
      const randomType = types[Math.floor(Math.random() * types.length)] as "highlight" | "achievement" | "stat";
      
      const getRandomTime = () => {
        const mins = Math.floor(Math.random() * 60);
        const secs = Math.floor(Math.random() * 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
      };
      
      const getRandomContent = () => {
        const highlightContents = [
          "Amazing cross-court shot by P1! Pure precision.",
          "P3 with an incredible diving save at the net!",
          "P2 and P4 engaged in an intense volley battle.",
          "Spectacular overhead smash by P3!",
          "P1 with a perfect drop shot that caught everyone by surprise."
        ];
        
        const achievementContents = [
          "P2 has reached 10 successful net plays this match!",
          "P4 just set a new personal record for shot accuracy!",
          "Team Blue has scored 5 consecutive points.",
          "P1 achieved the fastest serve of the match at 48 mph!",
          "P3 has successfully executed 3 perfect lobs this game."
        ];
        
        const statContents = [
          "Team Green showing 94% accuracy on backhand returns.",
          "P4's reaction time has improved to 0.42s in the last 5 points.",
          "Team Blue dominating with 68% court coverage this match.",
          "P1 has hit 8 consecutive successful returns.",
          "Ball velocity average has increased to 42 mph in this set."
        ];
        
        switch(randomType) {
          case "highlight": return highlightContents[Math.floor(Math.random() * highlightContents.length)];
          case "achievement": return achievementContents[Math.floor(Math.random() * achievementContents.length)];
          case "stat": return statContents[Math.floor(Math.random() * statContents.length)];
        }
      };
      
      const newFeedItem: MatchFeedItem = {
        id: `feed-${Date.now()}`,
        type: randomType,
        time: getRandomTime(),
        content: getRandomContent(),
        likes: randomType === "highlight" ? Math.floor(Math.random() * 50) + 5 : undefined
      };
      
      setMatchFeedItems(prev => {
        const updated = [newFeedItem, ...prev];
        return updated.slice(0, 5);
      });
    };
    
    const intervalTime = Math.floor(Math.random() * 7000) + 8000;
    const interval = setInterval(generateNewFeedItem, intervalTime);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="bg-[#0A2B3D] rounded-lg overflow-hidden border border-white/10 shadow-lg" style={{ height: "40%" }}>
      <div className="py-2 px-3 bg-gradient-to-r from-[#1A4258] to-[#0A2B3D] text-white flex items-center justify-between">
        <h3 className="font-medium text-sm">MATCH FEED</h3>
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="h-2 w-2 bg-emerald-500 rounded-full absolute -top-1 -right-1 animate-ping"></div>
            <div className="h-2 w-2 bg-emerald-500 rounded-full"></div>
          </div>
          <span className="text-xs text-emerald-400">LIVE</span>
        </div>
      </div>
      
      <div className="overflow-y-auto h-[calc(100%-32px)]">
        <MatchFeed matchFeedItems={matchFeedItems} />
      </div>
    </div>
  );
};

export default MatchFeedPanel;
