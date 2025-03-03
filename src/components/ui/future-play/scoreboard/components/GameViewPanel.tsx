
import React, { useState } from "react";
import { Position, BallState, BallTrajectory } from "../types";
import CourtViewPanel from "./CourtViewPanel";
import ShareModal from "./ShareModal";
import { Share, ZapIcon } from "lucide-react";

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
  const [showShareModal, setShowShareModal] = useState(false);

  return (
    <div className="relative w-full h-full">
      {/* Court View Panel */}
      <CourtViewPanel 
        ballPosition={ballPosition}
        ballTrajectory={ballTrajectory}
        ballVelocity={ballVelocity}
        player1={player1}
        player2={player2}
        player3={player3}
        player4={player4}
      />
      
      {/* Current ball speed indicator with enhanced styling */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-1.5 rounded-full flex items-center gap-2 text-sm border border-yellow-400/30 shadow-lg shadow-yellow-400/20">
        <ZapIcon className="h-4 w-4 text-yellow-400 animate-pulse" />
        <span className="font-medium">{Math.round(ballVelocity)} mph</span>
      </div>
      
      {/* Share Button - Positioned in the top right corner */}
      <button 
        onClick={() => setShowShareModal(true)}
        className="absolute top-2 right-2 bg-gradient-to-r from-primary to-[#1a9dc3] text-white p-2 rounded-full transition-all hover:shadow-lg hover:shadow-primary/20 animate-pulse-slow hover:scale-105"
        aria-label="Share match update"
      >
        <Share className="h-4 w-4" />
      </button>

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
