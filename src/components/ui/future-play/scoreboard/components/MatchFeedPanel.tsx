
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
    <div className="bg-[#132f45] rounded-lg overflow-hidden border border-[#1a3b55] shadow-md">
      <div className="py-2 px-3 bg-[#1a3b55] text-white flex items-center justify-between">
        <h3 className="font-medium text-sm uppercase tracking-wider">Match Feed</h3>
        <div className="flex items-center gap-2">
          <button className="p-1 rounded hover:bg-[#254a68] transition-colors text-white/80 hover:text-white">
            <BarChart2 className="w-4 h-4" />
          </button>
          <button className="p-1 rounded hover:bg-[#254a68] transition-colors text-white/80 hover:text-white">
            <Activity className="w-4 h-4" />
          </button>
          <button className="p-1 rounded hover:bg-[#254a68] transition-colors text-white/80 hover:text-white relative">
            <Share2 className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></span>
          </button>
        </div>
      </div>
      
      <div className="overflow-y-auto max-h-52 scrollbar-thin scrollbar-thumb-[#254a68] scrollbar-track-[#132f45]">
        <MatchFeed matchFeedItems={matchFeedItems} />
      </div>
    </div>
  );
};

export default MatchFeedPanel;
