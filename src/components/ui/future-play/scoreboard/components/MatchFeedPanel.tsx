
import React from "react";
import { BarChart2, Activity, Share2 } from "lucide-react";
import MatchFeed from "../MatchFeed";

interface MatchFeedPanelProps {
  matchFeedItems: any[];
}

const MatchFeedPanel: React.FC<MatchFeedPanelProps> = ({
  matchFeedItems
}) => {
  return (
    <div className="bg-[#001a2c] rounded-lg overflow-hidden border border-[#0a2d4a] shadow-lg flex-1">
      <div className="py-2 px-3 bg-[#0a2d4a] text-white flex items-center justify-between">
        <h3 className="font-medium text-sm uppercase">Match Feed</h3>
        <div className="flex items-center gap-2">
          <button className="p-1 rounded bg-[#0a2d4a]/70 text-white/70 hover:bg-[#0a2d4a] transition-colors">
            <BarChart2 className="w-4 h-4" />
          </button>
          <button className="p-1 rounded bg-[#0a2d4a]/70 text-white/70 hover:bg-[#0a2d4a] transition-colors">
            <Activity className="w-4 h-4" />
          </button>
          <button className="p-1 rounded bg-[#0a2d4a]/70 text-white/70 hover:bg-[#0a2d4a] transition-colors relative">
            <Share2 className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></span>
          </button>
        </div>
      </div>
      
      <div className="overflow-y-auto max-h-52">
        <MatchFeed matchFeedItems={matchFeedItems} />
      </div>
    </div>
  );
};

export default MatchFeedPanel;
