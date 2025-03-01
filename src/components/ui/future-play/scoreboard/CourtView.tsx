
import React from "react";
import { PlayerPosition, BallTrajectory } from "./types";
import Ball from "./components/Ball";
import CourtSurface from "./components/CourtSurface";
import Players from "./components/Players";

interface CourtViewProps {
  ballPosition: { x: number; y: number };
  ballTrajectory: BallTrajectory;
  player1: PlayerPosition;
  player2: PlayerPosition;
  player3: PlayerPosition;
  player4: PlayerPosition;
}

const CourtView: React.FC<CourtViewProps> = ({
  ballPosition,
  ballTrajectory,
  player1,
  player2,
  player3,
  player4
}) => {
  return (
    <div className="relative h-full w-full">
      <CourtSurface />
      
      {/* Players */}
      <Players 
        player1={player1}
        player2={player2}
        player3={player3}
        player4={player4}
      />
      
      {/* Ball and trajectory */}
      <Ball
        position={ballPosition}
        trajectory={ballTrajectory}
      />
    </div>
  );
};

export default CourtView;
