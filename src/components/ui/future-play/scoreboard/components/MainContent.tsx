
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
    <div className="h-[calc(100vh-170px)] grid grid-cols-1 md:grid-cols-2 gap-4 p-4 overflow-hidden">
      {/* Left Panel - Match Statistics */}
      <div className="bg-gradient-to-br from-[#0a2d4a] to-[#082540] rounded-lg overflow-hidden border border-[#1a3b55] shadow-lg h-full">
        <div className="py-2 px-4 bg-gradient-to-r from-[#00654B] to-[#00523c] text-white shadow-md">
          <h3 className="font-medium uppercase tracking-wider flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M3 3v18h18" />
              <path d="m19 9-5 5-4-4-3 3" />
            </svg>
            Match Statistics
          </h3>
        </div>
        
        <div className="p-4 h-[calc(100%-40px)] overflow-hidden">
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
      <div className="h-full">
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
    </div>
  );
};

export default MainContent;
