
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
      
      {/* Main content in a two-card layout */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 overflow-y-auto">
        {/* Left Panel - Match Statistics */}
        <div className="bg-[#0a2d4a] rounded-lg overflow-hidden border border-[#1a3b55] shadow-md">
          <div className="py-2 px-4 bg-[#00654B] text-white">
            <h3 className="font-medium uppercase tracking-wider">Match Statistics</h3>
          </div>
          
          <div className="p-3">
            <StatsPanel 
              player1Stats={player1Stats}
              player2Stats={player2Stats}
              player1Score={player1Score}
              player2Score={player2Score}
              currentSet={currentSet}
              ballVelocity={ballVelocity}
            />
          </div>
        </div>
        
        {/* Right Panel - Game View and Match Feed stacked vertically */}
        <div className="flex flex-col h-full space-y-4">
          {/* Game View Panel */}
          <div className="bg-[#0a2d4a] rounded-lg overflow-hidden border border-[#1a3b55] shadow-md h-3/5">
            <div className="grid grid-cols-2">
              <div className="bg-[#004080] text-white py-1.5 px-4">
                <h3 className="font-medium uppercase tracking-wider">Team Blue</h3>
              </div>
              <div className="bg-[#8B0000] text-white py-1.5 px-4 text-right">
                <h3 className="font-medium uppercase tracking-wider">Team Red</h3>
              </div>
            </div>
            
            <div className="p-2 h-[calc(100%-40px)]">
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
          </div>
          
          {/* Match Feed Panel */}
          <div className="bg-[#0a2d4a] rounded-lg overflow-hidden border border-[#1a3b55] shadow-md h-2/5">
            <div className="py-2 px-4 bg-[#1a3b55] text-white flex items-center justify-between">
              <h3 className="font-medium uppercase tracking-wider">Match Feed</h3>
              <div className="flex space-x-2">
                <button className="text-white/70 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="text-white/70 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 3a2 2 0 012-2h8a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V3zm9 1H7v4h6V4zm0 6H7v4h6v-4z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="overflow-y-auto p-2 h-[calc(100%-40px)]">
              {matchFeedItems.map((item, index) => (
                <div key={item.id || index} className="mb-3 p-2 bg-[#0c1f2e] rounded border border-[#1a3b55]">
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center gap-2">
                      {item.type === 'highlight' && (
                        <div className="text-blue-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                            <path d="M14 6a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
                          </svg>
                        </div>
                      )}
                      {item.type === 'achievement' && (
                        <div className="text-yellow-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                      {item.type === 'stat' && (
                        <div className="text-green-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                          </svg>
                        </div>
                      )}
                      <span className="text-xs text-gray-400">{item.time}</span>
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-[#254a68] rounded-full text-white">
                      {item.type.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-sm text-white">{item.content}</p>
                  {item.likes !== undefined && (
                    <div className="flex items-center mt-1.5">
                      <button className="text-xs text-gray-400 hover:text-primary flex items-center gap-1">
                        <span>❤️</span> {item.likes}
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
