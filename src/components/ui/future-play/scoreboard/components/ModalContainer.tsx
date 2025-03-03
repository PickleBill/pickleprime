
import React, { ReactNode, useState } from 'react';
import SponsorsBanner from './SponsorsBanner';
import ActionFooter from './ActionFooter';
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
  sponsors
}) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isCommunityModalOpen, setIsCommunityModalOpen] = useState(false);
  const [isSocialBettingModalOpen, setIsSocialBettingModalOpen] = useState(false);
  
  const handleActionButtonClick = (viewType: string) => {
    if (viewType === "video") {
      setIsVideoModalOpen(true);
    } else if (viewType === "community") {
      setIsCommunityModalOpen(true);
    } else if (viewType === "betting") {
      setIsSocialBettingModalOpen(true);
    } else if (onActionButtonClick) {
      onActionButtonClick(viewType);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-[#001a2c] to-[#00131e]">
      {/* Top sponsors banner with back button */}
      <SponsorsBanner 
        sponsors={sponsors} 
        onBackClick={onBackClick}
        gameTime={gameTime}
        onPlayerProfileClick={onPlayerProfileClick}
        onShareClick={onShareClick}
      />
      
      {/* Main content with subtle gradient overlay */}
      <div className="flex-1 overflow-hidden relative">
        {/* Subtle gradient overlays for depth */}
        <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-[#001a2c] to-transparent z-10 pointer-events-none opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#00131e] to-transparent z-10 pointer-events-none opacity-60"></div>
        
        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-40 z-0"></div>
        
        {/* Main content */}
        <div className="relative z-20 h-full">
          {children}
        </div>
      </div>
      
      {/* Footer with carousel-style actions - enhanced focus states */}
      <div className="relative z-20">
        <ActionFooter 
          onHighlightClick={onHighlightClick}
          onPlayerProfileClick={onPlayerProfileClick}
          onShareClick={onShareClick}
          onActionButtonClick={handleActionButtonClick}
          onSocialBettingClick={() => handleActionButtonClick("betting")}
        />
      </div>

      {/* Modals */}
      <VideoClipsModal 
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        player1Score={0}
        player2Score={0}
        gameTime={gameTime}
      />

      <CommunityModal 
        isOpen={isCommunityModalOpen}
        onClose={() => setIsCommunityModalOpen(false)}
      />
      
      <SocialBettingModal
        isOpen={isSocialBettingModalOpen}
        onClose={() => setIsSocialBettingModalOpen(false)}
      />
    </div>
  );
};

export default ModalContainer;
