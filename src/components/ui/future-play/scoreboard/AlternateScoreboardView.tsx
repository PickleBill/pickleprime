
import React from "react";
import MobileScoreboardView from "./MobileScoreboardView";
import { useGameAnimations } from "./hooks/useGameAnimations";
import { mockMatchFeedItems, player1Stats, player2Stats, sponsors } from "./data/mockData";
import { ScoreboardContainerProps } from "./types";

const AlternateScoreboardView: React.FC<ScoreboardContainerProps> = (props) => {
  // Use our custom hook for game animations
  const {
    ballPosition,
    ballTrajectory,
    ballVelocity,
    player1,
    player2,
    player3,
    player4
  } = useGameAnimations(props.showHighlight);
  
  return (
    <div className="flex flex-col h-full bg-navy-darker">
      {/* Header banner */}
      <div className="bg-violet-600 text-white p-3 text-center">
        <h2 className="font-bold">Experimental Scoreboard</h2>
        <p className="text-sm opacity-80">Development branch for iterations</p>
      </div>
      
      {/* Main scoreboard content */}
      <div className="flex-1 overflow-hidden">
        <MobileScoreboardView
          {...props}
          ballPosition={ballPosition}
          ballTrajectory={ballTrajectory}
          ballVelocity={ballVelocity}
          player1={player1}
          player2={player2}
          player3={player3}
          player4={player4}
          player1Stats={player1Stats}
          player2Stats={player2Stats}
          matchFeedItems={mockMatchFeedItems}
          sponsors={sponsors}
        />
      </div>
    </div>
  );
};

export default AlternateScoreboardView;
