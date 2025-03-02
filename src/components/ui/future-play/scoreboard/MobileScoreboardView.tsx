
import React from "react";
import ScoreboardHeader from "./ScoreboardHeader";
import CourtView from "./CourtView";
import ScoreboardFooter from "./ScoreboardFooter";
import { ShareModal } from "./components/share";
import ActionFooter from "./components/ActionFooter";
import { MobileScoreboardViewProps } from "./types";

const MobileScoreboardView: React.FC<MobileScoreboardViewProps> = ({
  courtId = "default-court",
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
  const [isShareModalOpen, setIsShareModalOpen] = React.useState(false);

  const handleShareClick = () => {
    setIsShareModalOpen(true);
  };

  const handleCloseShareModal = () => {
    setIsShareModalOpen(false);
  };

  const handlePlayerProfileClick = () => {
    console.log("Player profile clicked");
  };

  return (
    <div className="flex flex-col h-screen">
      <ScoreboardHeader onShareClick={handleShareClick} onBackClick={onBackClick} />
      <div className="flex-grow overflow-y-auto">
        <CourtView 
          courtId={courtId}
          ballPosition={ballPosition}
          ballTrajectory={ballTrajectory}
          ballVelocity={ballVelocity}
          player1={player1}
          player2={player2}
          player3={player3}
          player4={player4}
        />
      </div>
      <ScoreboardFooter sponsors={sponsors} />
      <ActionFooter 
        onHighlightClick={onHighlightClick} 
        onPlayerProfileClick={handlePlayerProfileClick}
        onShareClick={handleShareClick}
      />
      <ShareModal isOpen={isShareModalOpen} onClose={handleCloseShareModal} isMatchShare={true} />
    </div>
  );
};

export default MobileScoreboardView;
