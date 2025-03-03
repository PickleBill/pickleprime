
import React, { useState } from "react";
import { Position, BallState, BallTrajectory } from "../types";
import CourtViewPanel from "./CourtViewPanel";
import ShareModal from "./ShareModal";
import { Share } from "lucide-react";

interface GameViewPanelProps {
  ballPosition: BallState;
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
  const [showShareModal, setShowShareModal] = useState(false);

  // Add default rotation value if not provided
  const getPlayerWithRotation = (player: Position) => {
    return {
      x: player.x,
      y: player.y,
      rotation: player.rotation || 0 // Default to 0 if rotation is not provided
    };
  };

  return (
    <div className="flex flex-col h-full">
      {/* Court View Panel */}
      <div className="relative w-full h-full">
        <CourtViewPanel 
          ballPosition={ballPosition}
          ballTrajectory={ballTrajectory}
          ballVelocity={ballVelocity}
          player1={getPlayerWithRotation(player1)}
          player2={getPlayerWithRotation(player2)}
          player3={getPlayerWithRotation(player3)}
          player4={getPlayerWithRotation(player4)}
        />
        
        {/* Share Button - Positioned in the top right corner */}
        <button 
          onClick={() => setShowShareModal(true)}
          className="absolute top-2 right-2 bg-gradient-to-r from-primary to-[#1a9dc3] text-white p-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-primary/20 animate-pulse-slow hover:scale-105"
          aria-label="Share match update"
        >
          <Share className="h-4 w-4" />
        </button>
      </div>

      {/* Enhanced Share Modal */}
      <ShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        player1Score={20}
        player2Score={18}
        gameTime={180}
      />
    </div>
  );
};

export default GameViewPanel;
