
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
  onActionButtonClick,
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
      
      {/* Main content grid layout - Modified to make the left panel 45% of the width */}
      <div className="flex-1 grid grid-cols-12 gap-4 p-4 overflow-y-auto">
        {/* Left Panel - Match Statistics - Now takes 45% of width (5/12 cols) */}
        <div className="col-span-5 space-y-3">
          {/* Match Statistics Header */}
          <div className="flex items-center">
            <div className="bg-[#4CAF50] text-white py-1.5 px-4 rounded-t-md text-sm uppercase font-medium tracking-wider">
              Match Statistics
            </div>
          </div>
          
          {/* Stats Panel - Set to a more proportional height */}
          <StatsPanel 
            player1Stats={player1Stats}
            player2Stats={player2Stats}
            player1Score={player1Score}
            player2Score={player2Score}
            currentSet={currentSet}
            ballVelocity={ballVelocity}
          />
        </div>
        
        {/* Right Panel - Court View and Match Feed - Takes 7/12 cols */}
        <div className="col-span-7 flex flex-col space-y-3">
          {/* Team Headers */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-[#4CAF50] text-white py-1.5 px-4 rounded-t-md text-sm uppercase font-medium tracking-wider">
              Team Green
            </div>
            <div className="bg-[#3db5e6] text-white py-1.5 px-4 rounded-t-md text-right text-sm uppercase font-medium tracking-wider">
              Team Blue
            </div>
          </div>
          
          {/* Court View Panel - Reduced from 60% to 50% of the vertical space */}
          <div className="h-[50%]">
            <GameViewPanel 
              ballPosition={ballPosition}
              ballTrajectory={ballTrajectory}
              ballVelocity={ballVelocity}
              player1={player1}
              player2={player2}
              player3={player3}
              player4={player4}
              matchFeedItems={[]}
            />
          </div>

          {/* Match Feed Panel - Increased from 40% to 50% of vertical space */}
          <div className="h-[50%]">
            <div className="bg-[#132f45] rounded-lg overflow-hidden border border-[#1a3b55] shadow-md h-full">
              <div className="py-2 px-3 bg-[#1a3b55] text-white flex items-center justify-between">
                <h3 className="font-medium text-sm uppercase tracking-wider">Match Feed</h3>
              </div>
              <div className="overflow-y-auto max-h-[calc(100%-40px)] scrollbar-thin scrollbar-thumb-[#254a68] scrollbar-track-[#132f45]">
                <div className="p-3">
                  {matchFeedItems.map((item, index) => (
                    <div key={item.id || index} className="mb-3 p-2 bg-[#0c1f2e] rounded border border-[#1a3b55]">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-gray-400">{item.time}</span>
                        <span className="text-xs px-2 py-0.5 bg-[#254a68] rounded-full text-white">
                          {item.type}
                        </span>
                      </div>
                      <p className="text-sm text-white">{item.content}</p>
                      {item.likes !== undefined && (
                        <div className="flex items-center mt-1.5">
                          <button className="text-xs text-gray-400 hover:text-primary">
                            ❤️ {item.likes}
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {/* If there are no feed items, show a message */}
                  {(!matchFeedItems || matchFeedItems.length === 0) && (
                    <div className="text-center p-4 text-gray-400">
                      No match updates yet. Stay tuned!
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer with carousel-style actions */}
      <ActionFooter 
        onHighlightClick={onHighlightClick}
        onPlayerProfileClick={() => setShowPlayerModal(true)}
        onShareClick={() => setShowShareModal(true)}
        onActionButtonClick={onActionButtonClick}
      />
    </div>
  );
};

export default MobileScoreboardView;
