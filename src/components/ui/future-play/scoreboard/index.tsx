
import React, { useRef } from "react";
import MobileScoreboardView from "./MobileScoreboardView";
import { useGameAnimations } from "./hooks/useGameAnimations";
import { mockMatchFeedItems, player1Stats, player2Stats, sponsors } from "./data/mockData";
import { ScoreboardContainerProps } from "./types";

const ScoreboardViewContainer: React.FC<ScoreboardContainerProps> = (props) => {
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
  
  const courtRef = useRef<HTMLDivElement>(null);
  
  return (
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
  );
};

export default ScoreboardViewContainer;
