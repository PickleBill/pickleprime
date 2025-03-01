
import React, { useRef } from "react";
import SponsorsBanner from "./components/SponsorsBanner";
import CourtView from "./CourtView";
import HighlightView from "./HighlightView";
import ScoreboardStats from "./ScoreboardStats";
import MatchFeed from "./MatchFeed";
import ScoreboardFooter from "./ScoreboardFooter";
import FooterStats from "./components/FooterStats";
import { PlayerPosition } from "./types";

interface MobileScoreboardViewProps {
  onBackClick: () => void;
  onHighlightClick: () => void;
  showHighlight: boolean;
  highlightTimer: number;
  gameTime: number;
  player1Score: number;
  player2Score: number;
  currentSet: number;
  ballPosition: { x: number; y: number };
  ballTrajectory: { x: number; y: number }[];
  ballVelocity: number;
  player1: PlayerPosition;
  player2: PlayerPosition;
  player3: PlayerPosition;
  player4: PlayerPosition;
  player1Stats: any;
  player2Stats: any;
  matchFeedItems: any[];
  sponsors: { name: string; id: number }[];
}

const MobileScoreboardView: React.FC<MobileScoreboardViewProps> = ({
  onBackClick,
  onHighlightClick,
  showHighlight,
  highlightTimer,
  gameTime,
  player1Score,
  player2Score,
  currentSet,
  ballPosition,
  ballTrajectory,
  ballVelocity,
  player1,
  player2,
  player3,
  player4,
  player1Stats,
  player2Stats,
  matchFeedItems,
  sponsors
}) => {
  const courtRef = useRef<HTMLDivElement>(null);

  // For rendering the highlight view or main game view
  if (showHighlight) {
    return (
      <HighlightView 
        highlightTimer={highlightTimer} 
      />
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Updated Sponsors Banner - now with combined header functionality */}
      <SponsorsBanner 
        sponsors={sponsors} 
        onBackClick={onBackClick}
        gameTime={gameTime}
        player1Score={player1Score}
        player2Score={player2Score}
        currentSet={currentSet}
      />

      {/* Main Game View */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Court Display */}
        <div 
          ref={courtRef}
          className="relative h-[40vh] md:h-[45vh] bg-navy-dark border-b border-navy-light/20"
        >
          <CourtView
            ballPosition={ballPosition}
            ballTrajectory={ballTrajectory}
            player1={player1}
            player2={player2}
            player3={player3}
            player4={player4}
          />
          <FooterStats ballVelocity={ballVelocity} />
        </div>

        {/* Stats and Feed Section */}
        <div className="flex-1 overflow-y-auto bg-navy-dark/90">
          {/* Player Stats */}
          <ScoreboardStats 
            player1Stats={player1Stats}
            player2Stats={player2Stats}
          />
          
          {/* Match Feed */}
          <MatchFeed 
            matchFeedItems={matchFeedItems} 
          />
        </div>
      </div>

      {/* Footer Actions */}
      <ScoreboardFooter 
        onHighlightClick={onHighlightClick} 
      />
    </div>
  );
};

export default MobileScoreboardView;
