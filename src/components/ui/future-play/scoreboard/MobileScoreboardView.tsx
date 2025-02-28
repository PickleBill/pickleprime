
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
    <div className="flex flex-col h-full bg-[#061620] overflow-auto">
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

      <div className="flex flex-col flex-1 p-3 gap-3 sm:flex-row sm:p-4 overflow-auto">
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
        
        <div className="w-full sm:w-96 flex flex-col gap-3 sm:h-[calc(100%-40px)]">
          <ScoreboardStats 
            player1Stats={player1Stats}
            player2Stats={player2Stats}
          />
          
          <MatchFeed 
            feedItems={matchFeedItems}
          />
        </div>
      </div>

      <ScoreboardFooter 
        onHighlightClick={onHighlightClick}
        sponsors={sponsors}
      />
    </div>
  );
};

export default MobileScoreboardView;
