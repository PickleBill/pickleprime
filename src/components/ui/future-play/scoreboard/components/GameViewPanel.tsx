
import React from "react";
import { Position, BallState, BallTrajectory } from "../types";
import CourtViewPanel from "./CourtViewPanel";
import { ZapIcon, FlameIcon } from "lucide-react";

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

  // Format velocity with more aesthetically pleasing presentation
  const formattedVelocity = Math.round(ballVelocity);
  
  // Determine the velocity class for visual feedback
  const getVelocityClass = () => {
    if (formattedVelocity > 40) return "text-red-400";
    if (formattedVelocity > 30) return "text-yellow-400";
    return "text-green-400";
  };

  // Determine appropriate icon based on velocity
  const VelocityIcon = formattedVelocity > 35 ? FlameIcon : ZapIcon;
  
  return (
    <div className="relative w-full h-full">
      {/* Court View Panel with enhanced styling */}
      <div className="h-full w-full overflow-hidden rounded-xl border-2 border-[#0a2d4a]/60 shadow-[0_0_15px_rgba(0,0,0,0.3)] backdrop-blur-sm">
        <CourtViewPanel 
          ballPosition={ballPosition}
          ballTrajectory={ballTrajectory}
          ballVelocity={ballVelocity}
          player1={getPlayerWithRotation(player1)}
          player2={getPlayerWithRotation(player2)}
          player3={getPlayerWithRotation(player3)}
          player4={getPlayerWithRotation(player4)}
        />
      </div>
      
      {/* Current ball speed indicator with enhanced styling */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-full flex items-center gap-2.5 text-sm border border-yellow-400/40 shadow-lg shadow-yellow-400/20 backdrop-blur-sm">
        <VelocityIcon className={`h-4 w-4 ${getVelocityClass()} ${formattedVelocity > 30 ? 'animate-pulse' : ''}`} />
        <div className="flex items-baseline">
          <span className={`font-bold text-lg ${getVelocityClass()}`}>{formattedVelocity}</span>
          <span className="font-medium ml-1 text-white/80">mph</span>
        </div>
      </div>
    </div>
  );
};

export default GameViewPanel;
