
import React from 'react';
import ScoreboardHeader from './ScoreboardHeader';
import CourtView from './CourtView';
import ScoreboardStats from './ScoreboardStats';
import MatchFeed from './MatchFeed';
import ScoreboardFooter from './ScoreboardFooter';
import HighlightView from './HighlightView';

// Importing the types we need
interface PlayerPosition {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
}

interface MatchFeedItem {
  id: number;
  type: string;
  content: string;
  time: string;
  likes?: number;
}

interface Sponsor {
  id: number;
  name: string;
}

interface PlayerStats {
  name: string;
  winRate: string;
  topSpeed: string;
  reactionTime: string;
  shotAccuracy: string;
  stamina: string;
  spinRate: string;
  avatar: string;
}

interface MobileScoreboardViewProps {
  onBackClick: () => void;
  onHighlightClick: () => void;
  showHighlight: boolean;
  highlightTimer: number;
  gameTime: number;
  player1Score: number;
  player2Score: number;
  currentSet: number;
  // The following props would be managed internally in the parent
  ballPosition: { x: number; y: number };
  ballTrajectory: { x: number; y: number }[];
  ballVelocity: number;
  player1: PlayerPosition;
  player2: PlayerPosition;
  player3: PlayerPosition;
  player4: PlayerPosition;
  player1Stats: PlayerStats;
  player2Stats: PlayerStats;
  matchFeedItems: MatchFeedItem[];
  sponsors: Sponsor[];
}

const MobileScoreboardView: React.FC<MobileScoreboardViewProps> = ({
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
  if (showHighlight) {
    return <HighlightView highlightTimer={highlightTimer} />;
  }

  return (
    <div className="flex flex-col h-full bg-[#061620] overflow-hidden">
      {/* Fixed Header */}
      <ScoreboardHeader 
        onBackClick={onBackClick}
        gameTime={gameTime}
        player1Score={player1Score}
        player2Score={player2Score}
        player1Avatar={player1Stats.avatar}
        player2Avatar={player2Stats.avatar}
        player1Name={player1Stats.name}
        player2Name={player2Stats.name}
      />

      {/* Main Content - Different layout for mobile and desktop */}
      <div className="flex-1 overflow-auto">
        {/* Mobile Layout - Stacked vertically */}
        <div className="flex flex-col sm:hidden">
          {/* Court View at top for mobile */}
          <div className="px-2 pt-2">
            <CourtView 
              ballPosition={ballPosition}
              ballTrajectory={ballTrajectory}
              ballVelocity={ballVelocity}
              player1={player1}
              player2={player2}
              player3={player3}
              player4={player4}
              player1Score={player1Score}
              player2Score={player2Score}
            />
          </div>
          
          {/* Stats and Feed stacked on mobile */}
          <div className="p-2 space-y-2">
            <ScoreboardStats 
              player1Stats={player1Stats}
              player2Stats={player2Stats}
            />
            
            <div className="mb-16"> {/* Bottom margin for footer */}
              <MatchFeed 
                feedItems={matchFeedItems}
              />
            </div>
          </div>
        </div>
        
        {/* Desktop Layout - Three-column with scoreboard, court, and match feed */}
        <div className="hidden sm:flex h-full p-4 gap-4">
          {/* Left Column - Scoreboard (Wider on desktop) */}
          <div className="w-[38%] h-[calc(100%-40px)]">
            <ScoreboardStats 
              player1Stats={player1Stats}
              player2Stats={player2Stats}
              expanded={true}
            />
          </div>
          
          {/* Middle Column - Court View */}
          <div className="w-[40%] h-[calc(100%-40px)]">
            <CourtView 
              ballPosition={ballPosition}
              ballTrajectory={ballTrajectory}
              ballVelocity={ballVelocity}
              player1={player1}
              player2={player2}
              player3={player3}
              player4={player4}
              player1Score={player1Score}
              player2Score={player2Score}
            />
          </div>
          
          {/* Right Column - Match Feed (Skinnier on desktop) */}
          <div className="w-[22%] h-[calc(100%-40px)]">
            <MatchFeed 
              feedItems={matchFeedItems}
            />
          </div>
        </div>
      </div>

      {/* Fixed Footer */}
      <div className="absolute bottom-0 left-0 right-0">
        <ScoreboardFooter 
          onHighlightClick={onHighlightClick}
          sponsors={sponsors}
        />
      </div>
    </div>
  );
};

export default MobileScoreboardView;
