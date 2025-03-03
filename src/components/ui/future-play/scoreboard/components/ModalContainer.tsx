
import React, { ReactNode, useState } from 'react';
import SponsorsBanner from './SponsorsBanner';
import ActionFooter from './ActionFooter';
import ShareModal from './ShareModal';
import VideoClipsModal from './VideoClipsModal';
import CommunityModal from './CommunityModal';
import SocialBettingModal from './SocialBettingModal';
import { Sponsor } from '../types';

interface ModalContainerProps {
  children: ReactNode;
  onBackClick: () => void;
  onHighlightClick: () => void;
  onPlayerProfileClick: () => void;
  onShareClick: () => void;
  onActionButtonClick?: (viewType: string) => void;
  gameTime: number;
  player1Score: number;
  player2Score: number;
  currentSet: number;
  sponsors: Sponsor[];
}

const ModalContainer: React.FC<ModalContainerProps> = ({
  children,
  onBackClick,
  onHighlightClick,
  onPlayerProfileClick,
  onShareClick,
  onActionButtonClick,
  gameTime,
  player1Score,
  player2Score,
  currentSet,
  sponsors
}) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isCommunityModalOpen, setIsCommunityModalOpen] = useState(false);
  
  const handleActionButtonClick = (viewType: string) => {
    if (viewType === "video") {
      setIsVideoModalOpen(true);
    } else if (viewType === "community") {
      setIsCommunityModalOpen(true);
    } else if (onActionButtonClick) {
      onActionButtonClick(viewType);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#001a2c]">
      {/* Top sponsors banner with back button and score */}
      <SponsorsBanner 
        sponsors={sponsors} 
        onBackClick={onBackClick}
        gameTime={gameTime}
        player1Score={player1Score}
        player2Score={player2Score}
        currentSet={currentSet}
        onPlayerProfileClick={onPlayerProfileClick}
      />
      
      {/* Main content */}
      <div className="flex-1 overflow-hidden">
        {children}
      </div>
      
      {/* Footer with carousel-style actions */}
      <ActionFooter 
        onHighlightClick={onHighlightClick}
        onPlayerProfileClick={onPlayerProfileClick}
        onShareClick={onShareClick}
        onActionButtonClick={handleActionButtonClick}
        onSocialBettingClick={() => onActionButtonClick && onActionButtonClick("betting")}
      />

      {/* Modals */}
      <VideoClipsModal 
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        player1Score={player1Score}
        player2Score={player2Score}
        gameTime={gameTime}
      />

      <CommunityModal 
        isOpen={isCommunityModalOpen}
        onClose={() => setIsCommunityModalOpen(false)}
      />
    </div>
  );
};

export default ModalContainer;
