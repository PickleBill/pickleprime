
import React, { useState } from "react";
import { Position, BallState, BallTrajectory } from "../types";
import CourtViewPanel from "./CourtViewPanel";
import ShareModal from "./ShareModal";
import { ZapIcon } from "lucide-react";

interface GameViewPanelProps {
  ballPosition: BallState;
  ballTrajectory: BallTrajectory;
  ballVelocity: number;
  player1: Position;
  player2: Position;
  player3: Position;
  player4: Position;
  matchFeedItems: any[]; // We'll keep this prop to maintain interface compatibility
}

const GameViewPanel: React.FC<GameViewPanelProps> = ({
  ballPosition,
  ballTrajectory,
  ballVelocity,
  player1,
  player2,
  player3,
  player4
}) => {
  // Add default rotation value if not provided
  const getPlayerWithRotation = (player: Position) => {
    return {
      x: player.x,
      y: player.y,
      rotation: player.rotation || 0 // Default to 0 if rotation is not provided
    };
  };

  return (
    <div className="relative w-full h-full">
      {/* Court View Panel */}
      <CourtViewPanel 
        ballPosition={ballPosition}
        ballTrajectory={ballTrajectory}
        ballVelocity={ballVelocity}
        player1={getPlayerWithRotation(player1)}
        player2={getPlayerWithRotation(player2)}
        player3={getPlayerWithRotation(player3)}
        player4={getPlayerWithRotation(player4)}
      />
      
      {/* Current ball speed indicator with enhanced styling */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-1.5 rounded-full flex items-center gap-2 text-sm border border-yellow-400/30 shadow-lg shadow-yellow-400/20">
        <ZapIcon className="h-4 w-4 text-yellow-400 animate-pulse" />
        <span className="font-medium">{Math.round(ballVelocity)} mph</span>
      </div>
    </div>
  );
};

export default GameViewPanel;
