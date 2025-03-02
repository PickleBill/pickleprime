
import React, { useState } from "react";
import HighlightView from "./HighlightView";
import PlayerModal from "../../PlayerModal";
import ShareModal from "./components/ShareModal";
import SponsorsBanner from "./components/SponsorsBanner";
import StatsPanel from "./components/StatsPanel";
import GameViewPanel from "./components/GameViewPanel";
import ActionFooter from "./components/ActionFooter";
import { MobileScoreboardViewProps } from "./types";

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
  const [showPlayerModal, setShowPlayerModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  
  // If highlight is shown, display the highlight view
  if (showHighlight) {
    return (
      <HighlightView 
        highlightTimer={highlightTimer}
        onBackClick={onBackClick}
      />
    );
  }
  
  return (
    <div className="flex flex-col h-full">
      {/* Player Modal */}
      <PlayerModal 
        isOpen={showPlayerModal} 
        onClose={() => setShowPlayerModal(false)} 
      />
      
      {/* Share Modal */}
      <ShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        player1Score={player1Score}
        player2Score={player2Score}
        gameTime={gameTime}
      />
      
      {/* Top sponsors banner with back button and score */}
      <SponsorsBanner 
        sponsors={sponsors} 
        onBackClick={onBackClick}
        gameTime={gameTime}
        player1Score={player1Score}
        player2Score={player2Score}
        currentSet={currentSet}
      />
      
      {/* Main content - 50/50 split */}
      <div className="flex-1 grid grid-cols-2 gap-4 p-4 overflow-y-auto">
        {/* Left Panel - Scoreboard Stats */}
        <StatsPanel 
          player1Stats={player1Stats}
          player2Stats={player2Stats}
          player1Score={player1Score}
          player2Score={player2Score}
          currentSet={currentSet}
          ballVelocity={ballVelocity}
        />
        
        {/* Right Panel with Court View and Match Feed */}
        <GameViewPanel 
          ballPosition={ballPosition}
          ballTrajectory={ballTrajectory}
          ballVelocity={ballVelocity}
          player1={player1}
          player2={player2}
          player3={player3}
          player4={player4}
          matchFeedItems={matchFeedItems}
        />
      </div>
      
      {/* Footer with actions */}
      <ActionFooter 
        onHighlightClick={onHighlightClick}
        onPlayerProfileClick={() => setShowPlayerModal(true)}
        onShareClick={() => setShowShareModal(true)}
      />
    </div>
  );
};

export default MobileScoreboardView;
