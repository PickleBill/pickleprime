
// Shared types for the scoreboard components

export interface ScoreboardContainerProps {
  onBackClick: () => void;
  onHighlightClick: () => void;
  showHighlight: boolean;
  highlightTimer: number;
  gameTime: number;
  player1Score: number;
  player2Score: number;
  currentSet: number;
}

export interface MobileScoreboardViewProps extends ScoreboardContainerProps {
  ballPosition: { x: number, y: number };
  ballTrajectory: Array<{ x: number, y: number }>;
  ballVelocity: number;
  player1: { x: number, y: number };
  player2: { x: number, y: number };
  player3: { x: number, y: number };
  player4: { x: number, y: number };
  player1Stats: PlayerStats;
  player2Stats: PlayerStats;
  matchFeedItems: MatchFeedItem[];
  sponsors: Sponsor[];
}

export interface PlayerStats {
  name: string;
  winRate: string;
  topSpeed: string;
  reactionTime: string;
  shotAccuracy: string;
  stamina?: string; // Optional
  spinRate: string;
  avatar: string;
}

export interface MatchFeedItem {
  id: number;
  type: 'highlight' | 'achievement' | 'stat';
  content: string;
  time: string;
  likes?: number; // Optional for highlight items
}

export interface Sponsor {
  id: number;
  name: string;
  logo?: string; // Optional
}
