
import React from "react";
import { Position, BallTrajectory } from "../types";
import CourtView from "../CourtView";
import MatchFeed from "../MatchFeed";
import { BarChart2, Activity } from "lucide-react";

interface GameViewPanelProps {
  ballPosition: Position;
  ballTrajectory: BallTrajectory;
  ballVelocity: number;
  player1: Position;
  player2: Position;
  player3: Position;
  player4: Position;
  matchFeedItems: any[];
}

const GameViewPanel: React.FC<GameViewPanelProps> = ({
  ballPosition,
  ballTrajectory,
  ballVelocity,
  player1,
  player2,
  player3,
  player4,
  matchFeedItems
}) => {
  return (
    <div className="flex flex-col h-full space-y-4">
      {/* Court View Panel - 60% height (with updated background color to purple) */}
      <div className="bg-[#9b87f5] rounded-lg overflow-hidden border border-white/10 shadow-lg flex-2" style={{ height: "60%" }}>
        <div className="py-2 px-3 bg-[#8B5CF6] text-white flex items-center justify-between">
          <h3 className="font-medium text-sm">TEAM GREEN</h3>
          <div className="text-right text-xs text-white/70">vs</div>
          <div className="text-right text-xs text-white font-medium">TEAM BLUE</div>
        </div>
        
        <div className="p-3 h-full flex items-center justify-center">
          <CourtView 
            ballPosition={ballPosition}
            ballTrajectory={ballTrajectory}
            ballVelocity={ballVelocity}
            player1={player1}
            player2={player2}
            player3={player3}
            player4={player4}
          />
        </div>
      </div>
      
      {/* Match Feed Panel - 40% height */}
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
          </div>
        </div>
        
        <div className="overflow-y-auto" style={{ maxHeight: "calc(100% - 40px)" }}>
          <MatchFeed matchFeedItems={matchFeedItems} />
        </div>
      </div>
    </div>
  );
};

export default GameViewPanel;
