
import React, { useState } from "react";
import { Position, BallState, BallTrajectory } from "../types";
import CourtViewPanel from "./CourtViewPanel";
import MatchFeedPanel from "./MatchFeedPanel";
import ShareModal from "./ShareModal";
import { Share } from "lucide-react";

interface GameViewPanelProps {
  ballPosition: BallState; // Changed from Position to BallState to match expected type
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

  return (
    <div className="flex flex-col h-full space-y-4">
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
      
      {/* Match Feed Panel */}
      <div className="relative">
        <MatchFeedPanel
          matchFeedItems={matchFeedItems}
        />
        
        {/* Share Button - Now opens the advanced share modal directly */}
        <button 
          onClick={() => setShowShareModal(true)}
          className="absolute top-2 right-2 bg-primary/80 hover:bg-primary text-white p-2 rounded-full transition-colors"
          aria-label="Share match update"
        >
          <Share className="h-4 w-4" />
        </button>
      </div>

      {/* Advanced Share Modal */}
      <ShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        player1Score={21}
        player2Score={18}
        gameTime={180}
      />
    </div>
  );
};

export default GameViewPanel;
