
import React from "react";
import CourtVisualization from "./CourtVisualization";
import Scoreboard from "./Scoreboard";
import MatchFeed from "./MatchFeed";
import { PlayerStats } from "./types";

interface GameViewProps {
  player1Stats: PlayerStats;
  player2Stats: PlayerStats;
  player1Score: number;
  player2Score: number;
  currentSet: number;
  triggerHighlight: () => void;
}

const GameView: React.FC<GameViewProps> = ({
  player1Stats,
  player2Stats,
  player1Score,
  player2Score,
  currentSet,
  triggerHighlight
}) => {
  return (
    <div className="flex-1 flex flex-col md:flex-row p-6 gap-6">
      {/* Court Visualization (Left Side) */}
      <CourtVisualization />
      
      {/* Scoreboard and Stats (Right Side) */}
      <div className="w-full md:w-96 flex flex-col gap-4">
        {/* Score Display */}
        <Scoreboard 
          player1Stats={player1Stats}
          player2Stats={player2Stats}
          player1Score={player1Score}
          player2Score={player2Score}
          currentSet={currentSet}
        />
        
        {/* Game Feed & Highlights */}
        <MatchFeed triggerHighlight={triggerHighlight} />
      </div>
    </div>
  );
};

export default GameView;
