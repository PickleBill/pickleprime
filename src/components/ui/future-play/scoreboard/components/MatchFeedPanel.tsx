
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
    <div className="bg-navy-dark rounded-lg overflow-hidden border border-white/10 shadow-lg flex-1" style={{ height: "40%" }}>
      <div className="py-2 px-3 bg-[#1E3A8A] text-white flex items-center justify-between">
        <h3 className="font-medium text-sm">MATCH FEED</h3>
        <div className="flex items-center gap-2">
          <button className="p-1 rounded bg-navy/50 text-white/70 hover:bg-navy/70 transition-colors">
            <BarChart2 className="w-4 h-4" />
          </button>
          <button className="p-1 rounded bg-navy/50 text-white/70 hover:bg-navy/70 transition-colors">
            <Activity className="w-4 h-4" />
          </button>
          <button className="p-1 rounded bg-navy/50 text-white/70 hover:bg-navy/70 transition-colors relative">
            <Share2 className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"></span>
          </button>
        </div>
      </div>
      
      <div className="overflow-y-auto" style={{ maxHeight: "calc(100% - 40px)" }}>
        <div className="p-2 bg-primary/10 border-l-2 border-primary mx-2 my-2 rounded text-xs text-white/90">
          <span className="font-semibold">NEW!</span> Share match updates directly to your social profiles with our updated sharing tools.
        </div>
        <MatchFeed matchFeedItems={matchFeedItems} />
      </div>
    </div>
  );
};

export default MatchFeedPanel;
