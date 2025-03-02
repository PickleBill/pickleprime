
import React, { useState } from "react";
import { Position, BallTrajectory } from "../types";
import CourtViewPanel from "./CourtViewPanel";
import MatchFeedPanel from "./MatchFeedPanel";
import ShareMatchModal from "@/components/ui/ShareMatchModal";
import { Share } from "lucide-react";

interface GameViewPanelProps {
  ballPosition: Position;
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
        
        {/* Share Button */}
        <button 
          onClick={() => setShowShareModal(true)}
          className="absolute top-2 right-2 bg-primary/80 hover:bg-primary text-white p-2 rounded-full transition-colors"
          aria-label="Share match update"
        >
          <Share className="h-4 w-4" />
        </button>
      </div>

      {/* Share Match Modal */}
      <ShareMatchModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
      />
    </div>
  );
};

export default GameViewPanel;
