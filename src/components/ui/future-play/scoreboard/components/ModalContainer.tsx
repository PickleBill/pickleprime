
import React, { ReactNode } from 'react';
import SponsorsBanner from './SponsorsBanner';
import ActionFooter from './ActionFooter';
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
  return (
    <div className="flex flex-col h-full bg-[#001a2c]">
      {/* Top sponsors banner with back button and score */}
      <SponsorsBanner 
        sponsors={sponsors} 
        onBackClick={onBackClick}
        gameTime={gameTime}
        player1Score={player1Score}
        player2Score={player2Score}
        currentSet={currentSet}
      />
      
      {/* Main content */}
      {children}
      
      {/* Footer with carousel-style actions */}
      <ActionFooter 
        onHighlightClick={onHighlightClick}
        onPlayerProfileClick={onPlayerProfileClick}
        onShareClick={onShareClick}
        onActionButtonClick={onActionButtonClick}
      />
    </div>
  );
};

export default ModalContainer;
