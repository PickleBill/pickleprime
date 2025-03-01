
import { ReactNode } from "react";

// Player position type
export interface PlayerPosition {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
}

// Basic position type
export interface Position {
  x: number;
  y: number;
}

// Ball trajectory type
export interface BallTrajectory {
  endX: number;
  endY: number;
  points: { x: number; y: number }[];
  dx?: number;
  dy?: number;
}

// Main Scoreboard Container Props
export interface ScoreboardViewProps {
  onBackClick: () => void;
  onHighlightClick: () => void;
  showHighlight: boolean;
  highlightTimer: number;
  gameTime: number;
  player1Score: number;
  player2Score: number;
  currentSet?: number;
}

// Player Stats type
export interface PlayerStats {
  name: string;
  winRate: string;
  topSpeed: string;
  reactionTime: string;
  accuracy: string;
  stamina: string;
  spinRate: string;
  shots: number;
  avatar: string;
}

// Match Feed Item type
export interface MatchFeedItem {
  id: string;
  type: "highlight" | "achievement" | "stat";
  content: string;
  time: string;
  likes?: number;
}

// Sponsor type
export interface Sponsor {
  id: number;
  name: string;
}
