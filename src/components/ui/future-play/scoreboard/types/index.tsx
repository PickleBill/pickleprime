
import React from "react";

// Player position type
export interface PlayerPosition {
  x: number;
  y: number;
  rotation: number;
  targetX?: number;
  targetY?: number;
}

// Ball position and trajectory
export interface BallState {
  x: number;
  y: number;
  z: number;
  rotation: number;
  // Additional properties needed for animations
  dx?: number;
  dy?: number;
  endX?: number;
  endY?: number;
}

// Ball trajectory type
export type BallTrajectory = BallState[];

// Sponsor type
export interface Sponsor {
  id: number;
  name: string;
  logo: string;
}

// Player stats type
export interface PlayerStats {
  aces: number;
  winners: number;
  unforcedErrors: number;
  firstServePercentage: number;
  breakPointsConverted: number;
  // Additional properties needed by the components
  name: string;
  winRate: string;
  topSpeed: string;
  reactionTime: string;
  accuracy: string;
  stamina: string;
  spinRate: string;
  avatar: string;
  shots?: number;
}

// Match feed item type
export interface MatchFeedItem {
  id: string | number;
  type: "highlight" | "achievement" | "stat";
  content: string;
  time: string;
  likes?: number;
  timestamp?: string;
  message?: string;
}

// Props for the mobile scoreboard view
export interface MobileScoreboardViewProps {
  onBackClick: () => void;
  onHighlightClick: () => void;
  showHighlight: boolean;
  highlightTimer: number;
  gameTime: number;
  player1Score: number;
  player2Score: number;
  currentSet: number;
  ballPosition: BallState;
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

// Props for the scoreboard container
export interface ScoreboardContainerProps {
  showHighlight: boolean;
  onBackClick: () => void;
  onHighlightClick: () => void;
  highlightTimer: number;
  gameTime: number;
  player1Score: number;
  player2Score: number;
  currentSet: number;
}
