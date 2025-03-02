
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
    <div className="flex flex-col h-full bg-[#001a2c]">
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
      
      {/* Main content grid layout */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 overflow-y-auto">
        {/* Left Panel - Match Statistics */}
        <div className="space-y-3">
          {/* Match Statistics Header */}
          <div className="flex items-center">
            <div className="bg-[#4CAF50] text-white py-1.5 px-4 rounded-t-md text-sm uppercase font-medium tracking-wider">
              Match Statistics
            </div>
          </div>
          
          {/* Stats Panel */}
          <StatsPanel 
            player1Stats={player1Stats}
            player2Stats={player2Stats}
            player1Score={player1Score}
            player2Score={player2Score}
            currentSet={currentSet}
            ballVelocity={ballVelocity}
          />
        </div>
        
        {/* Right Panel - Court View and Match Feed */}
        <div className="space-y-3">
          {/* Team Headers */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-[#4CAF50] text-white py-1.5 px-4 rounded-t-md text-sm uppercase font-medium tracking-wider">
              Team Green
            </div>
            <div className="bg-[#3db5e6] text-white py-1.5 px-4 rounded-t-md text-right text-sm uppercase font-medium tracking-wider">
              Team Blue
            </div>
          </div>
          
          {/* Game View Panel */}
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
