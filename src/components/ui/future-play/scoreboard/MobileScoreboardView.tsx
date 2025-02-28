
import React from 'react';
import ScoreboardHeader from './ScoreboardHeader';
import ScoreboardStats from './ScoreboardStats';
import MatchFeed from './MatchFeed';
import CourtView from './CourtView';
import HighlightView from './HighlightView';
import ScoreboardFooter from './ScoreboardFooter';
import { MobileScoreboardProps } from './types';

const MobileScoreboardView: React.FC<MobileScoreboardProps> = ({
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
  // Team colors
  const greenTeamColor = "#176840"; // Darker green
  const blueTeamColor = "#0A4D73"; // Darker blue
  
  // Carolina blue court color
  const carolinaBlue = "#33C3F0";

  if (showHighlight) {
    return (
      <HighlightView 
        highlightTimer={highlightTimer} 
      />
    );
  }

  return (
    <div className="flex flex-col h-full bg-navy-darker text-white">
      {/* Top header with back button, title, and game details */}
      <ScoreboardHeader 
        onBackClick={onBackClick} 
        player1Score={player1Score}
        player2Score={player2Score}
        gameTime={gameTime}
        currentSet={currentSet}
        player1Avatar={player1Stats.avatar}
        player2Avatar={player2Stats.avatar}
        player1Name={player1Stats.name}
        player2Name={player2Stats.name}
      />
      
      {/* Main content - stacked vertically on mobile */}
      <div className="flex-1 flex flex-col p-3 gap-3 overflow-y-auto">
        {/* Court visualization */}
        <div className="w-full aspect-[4/3] relative bg-navy-dark rounded-lg overflow-hidden">
          <CourtView 
            ballPosition={ballPosition}
            ballTrajectory={ballTrajectory}
            ballVelocity={ballVelocity}
            player1={player1}
            player2={player2}
            player3={player3}
            player4={player4}
            courtColor={carolinaBlue}
          />
        </div>
        
        {/* Player stats comparison */}
        <ScoreboardStats 
          player1Stats={player1Stats}
          player2Stats={player2Stats}
        />
        
        {/* Match feed - key events */}
        <div className="flex-1 bg-navy-dark rounded-lg overflow-hidden border border-white/10">
          <div className="py-2 px-3 bg-navy/80 border-b border-white/10 flex items-center justify-between">
            <h3 className="text-white font-medium text-sm">Match Feed</h3>
          </div>
          
          <div className="max-h-[340px]">
            <MatchFeed matchFeedItems={matchFeedItems} />
          </div>
        </div>
      </div>
      
      {/* Bottom footer with sponsors and highlights button */}
      <ScoreboardFooter 
        onHighlightClick={onHighlightClick}
        sponsors={sponsors}
      />
    </div>
  );
};

export default MobileScoreboardView;
