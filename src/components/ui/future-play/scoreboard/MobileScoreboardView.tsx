
import React, { useState } from "react";
import HighlightView from "./HighlightView";
import PlayerModal from "../../PlayerModal";
import ShareModal from "./components/ShareModal";
import SocialBettingModal from "./components/SocialBettingModal";
import MainContent from "./components/MainContent";
import ModalContainer from "./components/ModalContainer";
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
  const [showSocialBettingModal, setShowSocialBettingModal] = useState(false);
  
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
    <>
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
      
      {/* Social Betting Modal */}
      <SocialBettingModal
        isOpen={showSocialBettingModal}
        onClose={() => setShowSocialBettingModal(false)}
      />
      
      <ModalContainer
        onBackClick={onBackClick}
        onHighlightClick={onHighlightClick}
        onPlayerProfileClick={() => setShowPlayerModal(true)}
        onShareClick={() => setShowShareModal(true)}
        onActionButtonClick={onActionButtonClick}
        gameTime={gameTime}
        player1Score={player1Score}
        player2Score={player2Score}
        currentSet={currentSet}
        sponsors={sponsors}
      >
        <div className="h-full overflow-hidden">
          <MainContent 
            player1Stats={player1Stats}
            player2Stats={player2Stats}
            player1Score={player1Score}
            player2Score={player2Score}
            currentSet={currentSet}
            ballVelocity={ballVelocity}
            ballPosition={ballPosition}
            ballTrajectory={ballTrajectory}
            player1={player1}
            player2={player2}
            player3={player3}
            player4={player4}
            matchFeedItems={matchFeedItems}
            onHighlightClick={onHighlightClick}
          />
        </div>
      </ModalContainer>
    </>
  );
};

export default MobileScoreboardView;
