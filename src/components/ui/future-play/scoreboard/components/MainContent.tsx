
import React from 'react';
import StatsPanel from './StatsPanel';
import GameFeedPanel from './GameFeedPanel';
import { PlayerStats, MatchFeedItem, BallState, BallTrajectory, Position } from '../types';

interface MainContentProps {
  player1Stats: PlayerStats;
  player2Stats: PlayerStats;
  player1Score: number;
  player2Score: number;
  currentSet: number;
  ballVelocity: number;
  ballPosition: BallState;
  ballTrajectory: BallTrajectory;
  player1: Position;
  player2: Position;
  player3: Position;
  player4: Position;
  matchFeedItems: MatchFeedItem[];
  onHighlightClick: () => void;
}

const MainContent: React.FC<MainContentProps> = ({
  player1Stats,
  player2Stats,
  player1Score,
  player2Score,
  currentSet,
  ballVelocity,
  ballPosition,
  ballTrajectory,
  player1,
  player2,
  player3,
  player4,
  matchFeedItems,
  onHighlightClick
}) => {
  return (
    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 overflow-y-auto pb-20">
      {/* Left Panel - Match Statistics - Elongated by 22% */}
      <div className="bg-[#0a2d4a] rounded-lg overflow-hidden border border-[#1a3b55] shadow-md flex flex-col h-full">
        <div className="py-2 px-4 bg-[#00654B] text-white">
          <h3 className="font-medium uppercase tracking-wider">Match Statistics</h3>
        </div>
        
        <div className="p-3 flex-1 overflow-y-auto">
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
      <GameFeedPanel 
        ballPosition={ballPosition}
        ballTrajectory={ballTrajectory}
        ballVelocity={ballVelocity}
        player1={player1}
        player2={player2}
        player3={player3}
        player4={player4}
        matchFeedItems={matchFeedItems}
        onHighlightClick={onHighlightClick}
      />
    </div>
  );
};

export default MainContent;
