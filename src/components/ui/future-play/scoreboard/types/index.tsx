import React from "react";

// Player position type
export interface PlayerPosition {
  x: number;
  y: number;
  rotation: number;
}

// Ball position and trajectory
export interface BallState {
  x: number;
  y: number;
  z: number;
}

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
}

// Match feed item type
export interface MatchFeedItem {
  id: number;
  timestamp: string;
  message: string;
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
  ballTrajectory: BallState[];
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
}
