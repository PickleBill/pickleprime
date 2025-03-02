import React from "react";
import ScoreboardHeader from "./ScoreboardHeader";
import CourtView from "./CourtView";
import ScoreboardFooter from "./ScoreboardFooter";
import { ShareModal } from "./components/share";
import ActionFooter from "./components/ActionFooter";

interface MobileScoreboardViewProps {
  courtId: string;
}

const MobileScoreboardView: React.FC<MobileScoreboardViewProps> = ({ courtId }) => {
  const [isShareModalOpen, setIsShareModalOpen] = React.useState(false);

  const handleShareClick = () => {
    setIsShareModalOpen(true);
  };

  const handleCloseShareModal = () => {
    setIsShareModalOpen(false);
  };

  return (
    <div className="flex flex-col h-screen">
      <ScoreboardHeader onShareClick={handleShareClick} />
      <div className="flex-grow overflow-y-auto">
        <CourtView courtId={courtId} />
      </div>
      <ScoreboardFooter />
      <ActionFooter />
      <ShareModal isOpen={isShareModalOpen} onClose={handleCloseShareModal} isMatchShare={true} />
    </div>
  );
};

export default MobileScoreboardView;
