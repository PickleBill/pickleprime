
import React from "react";
import { Position, BallState, BallTrajectory } from "../types";
import CourtView from "../CourtView";

interface CourtViewPanelProps {
  ballPosition: BallState; // Changed from Position to BallState to match expected type
  ballTrajectory: BallTrajectory;
  ballVelocity: number;
  player1: Position;
  player2: Position;
  player3: Position;
  player4: Position;
}

const CourtViewPanel: React.FC<CourtViewPanelProps> = ({
  ballPosition,
  ballTrajectory,
  ballVelocity,
  player1,
  player2,
  player3,
  player4
}) => {
  return (
    <div className="bg-[#001a2c] rounded-lg overflow-hidden border border-[#0a2d4a] shadow-lg flex-1">
      <div className="relative w-full h-full pb-[70%]">
        <div className="absolute inset-0">
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
        <div className="absolute bottom-0 right-0 bg-[#3db5e6] px-3 py-1 text-white text-sm font-medium">
          TEAM BLUE
        </div>
        <div className="absolute bottom-0 left-0 bg-[#4CAF50] px-3 py-1 text-white text-sm font-medium">
          TEAM GREEN
        </div>
      </div>
    </div>
  );
};

export default CourtViewPanel;
