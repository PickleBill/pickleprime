
import React from 'react';
import { BallState, BallTrajectory, Position, MatchFeedItem } from '../types';
import GameViewPanel from './GameViewPanel';
import MatchFeedPanel from './MatchFeedPanel';

interface GameFeedPanelProps {
  ballPosition: BallState;
  ballTrajectory: BallTrajectory;
  ballVelocity: number;
  player1: Position;
  player2: Position;
  player3: Position;
  player4: Position;
  matchFeedItems: MatchFeedItem[];
  onHighlightClick: () => void;
}

const GameFeedPanel: React.FC<GameFeedPanelProps> = ({
  ballPosition,
  ballTrajectory,
  ballVelocity,
  player1,
  player2,
  player3,
  player4,
  matchFeedItems,
  onHighlightClick
}) => {
  return (
    <div className="flex flex-col h-full space-y-4">
      {/* Game View Panel - Increased to 63% */}
      <div className="bg-gradient-to-r from-[#0a2d4a] to-[#082540] rounded-lg overflow-hidden border border-[#1a3b55] shadow-lg" style={{ height: "63%" }}>
        <div className="grid grid-cols-2">
          <div className="bg-gradient-to-r from-[#4CAF50] to-[#388E3C] text-white py-1.5 px-4 border-b border-white/10">
            <h3 className="font-medium uppercase tracking-wider">Team Green</h3>
          </div>
          <div className="bg-gradient-to-r from-[#1A70C5] to-[#0c56a0] text-white py-1.5 px-4 text-right border-b border-white/10">
            <h3 className="font-medium uppercase tracking-wider">Team Blue</h3>
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
      
      {/* Match Feed Panel - Reduced to 37% */}
      <MatchFeedPanel 
        matchFeedItems={matchFeedItems} 
        style={{ height: "37%" }}
        onHighlightClick={onHighlightClick}
      />
    </div>
  );
};

export default GameFeedPanel;
