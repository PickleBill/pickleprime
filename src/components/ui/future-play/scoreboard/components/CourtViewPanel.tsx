
import React from "react";
import { Position, BallTrajectory } from "../types";
import CourtView from "../CourtView";

interface CourtViewPanelProps {
  ballPosition: Position;
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
    <div className="bg-[#1A1F2C] rounded-lg overflow-hidden border border-white/10 shadow-lg flex-2" style={{ height: "60%" }}>
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
  );
};

export default CourtViewPanel;
