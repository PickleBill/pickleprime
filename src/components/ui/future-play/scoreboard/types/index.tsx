
// Player types
export interface PlayerPosition {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
}

export interface PlayerData {
  id: string;
  name: string;
  avatar: string;
  stats: {
    wins: number;
    losses: number;
    winRate: string;
  };
}

// Ball types
export interface BallPosition {
  x: number;
  y: number;
}

// Game types
export interface GameStats {
  player1Score: number;
  player2Score: number;
  currentSet: number;
  gameTime: number;
  shotCount: number;
  rallyLength: number;
  winProbability: {
    player1: number;
    player2: number;
  };
}

// Shot distribution types
export interface ShotDistribution {
  topLeft: number;
  topRight: number;
  bottomLeft: number;
  bottomRight: number;
}

// Stat comparison types
export interface StatItem {
  label: string;
  player1Value: number;
  player2Value: number;
  total?: number;
  unit?: string;
}

// Feed item types
export interface FeedItem {
  id: string;
  type: 'point' | 'stat' | 'highlight';
  title: string;
  description: string;
  timestamp: string;
  player?: string;
  value?: string | number;
  highlight?: boolean;
}
