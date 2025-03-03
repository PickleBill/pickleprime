
import React from "react";
import { BallState, BallTrajectory } from "../types";
import CourtView from "../CourtView";

interface CourtViewPanelProps {
  ballPosition: BallState;
  ballTrajectory: BallTrajectory;
  ballVelocity: number;
  player1: {
    x: number;
    y: number;
    rotation: number;
  };
  player2: {
    x: number;
    y: number;
    rotation: number;
  };
  player3: {
    x: number;
    y: number;
    rotation: number;
  };
  player4: {
    x: number;
    y: number;
    rotation: number;
  };
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
    <div className="bg-[#001a2c] rounded-lg overflow-hidden border border-[#0a2d4a] shadow-md h-full">
      <div className="relative w-full h-full" style={{ aspectRatio: "16/9", maxHeight: "100%" }}>
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
  );
};

export default CourtViewPanel;
