
import React from "react";
import { Position, BallTrajectory } from "../types";
import CourtViewPanel from "./CourtViewPanel";
import MatchFeedPanel from "./MatchFeedPanel";

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
      {/* Court View Panel */}
      <CourtViewPanel 
        ballPosition={ballPosition}
        ballTrajectory={ballTrajectory}
        ballVelocity={ballVelocity}
        player1={player1}
        player2={player2}
        player3={player3}
        player4={player4}
      />
      
      {/* Match Feed Panel */}
      <MatchFeedPanel
        matchFeedItems={matchFeedItems}
      />
    </div>
  );
};

export default GameViewPanel;
