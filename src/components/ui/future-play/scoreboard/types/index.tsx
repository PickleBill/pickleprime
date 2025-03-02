
// This file contains all the type definitions for the scoreboard components

export interface Position {
  x: number;
  y: number;
}

export interface PlayerPosition extends Position {
  targetX: number;
  targetY: number;
}

export interface BallTrajectory {
  endX: number;
  endY: number;
  dx: number;
  dy: number;
}

export interface MatchFeedItem {
  id: string;
  type: 'highlight' | 'achievement' | 'stat';
  time: string;
  content: string;
  likes?: number;
}

export interface PlayerStats {
  name: string;
  avatar: string;
  winRate: string;
  shots: number;
  accuracy: string;
  topSpeed: string;
  spinRate: string;
  reactionTime: string;
  stamina?: string; // Optional field for backward compatibility
}

export interface ScoreboardContainerProps {
  onBackClick: () => void;
  onHighlightClick: () => void;
  showHighlight: boolean;
  highlightTimer: number;
  gameTime: number;
  player1Score: number;
  player2Score: number;
  currentSet: number;
  courtId?: string; // Add optional courtId
}

export interface MobileScoreboardViewProps extends ScoreboardContainerProps {
  ballPosition: Position;
  ballTrajectory: BallTrajectory;
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

export interface Sponsor {
  id: number;
  name: string;
}
