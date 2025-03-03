
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
      <div className="bg-[#0a2d4a] rounded-lg overflow-hidden border border-[#1a3b55] shadow-md" style={{ height: "63%" }}>
        <div className="grid grid-cols-2">
          <div className="bg-[#4CAF50] text-white py-1.5 px-4">
            <h3 className="font-medium uppercase tracking-wider">Team Green</h3>
          </div>
          <div className="bg-[#1A70C5] text-white py-1.5 px-4 text-right">
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
