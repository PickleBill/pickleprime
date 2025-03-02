
import { ReactNode } from "react";

export interface Position {
  x: number;
  y: number;
  rotation?: number;  // Make rotation optional for backwards compatibility
}

export interface BallState {
  x: number;
  y: number;
  z?: number;
  rotation?: number;  // Add optional rotation for ball state
}

export interface BallTrajectory {
  points: Position[];
  type: "drive" | "lob" | "smash" | "slice";
  speed: number;
  dx?: number;  // Add optional dx for direction vector
  dy?: number;  // Add optional dy for direction vector
  endX?: number;  // Add optional endX for trajectory
  endY?: number;  // Add optional endY for trajectory
}

export interface ScoreboardContainerProps {
  onBackClick: () => void;
  onHighlightClick: () => void;
  onActionButtonClick?: (viewType: string) => void;
  showHighlight: boolean;
  highlightTimer: number;
  gameTime: number;
  player1Score: number;
  player2Score: number;
  currentSet: number;
}

export interface MobileScoreboardViewProps extends ScoreboardContainerProps {
  ballPosition: BallState;
  ballTrajectory: BallTrajectory;
  ballVelocity: number;
  player1: Position;
  player2: Position;
  player3: Position;
  player4: Position;
  player1Stats: any;
  player2Stats: any;
  matchFeedItems: any[];
  sponsors: Sponsor[];
}

export interface Sponsor {
  id: number;
  name: string;
  logo: string;
}

// Add these types needed by other components
export interface PlayerStats {
  accuracy: number;
  power: number;
  consistency: number;
  speed: number;
  winProbability: number;
}

export interface MatchFeedItem {
  id: string;
  type: "highlight" | "achievement" | "stat";
  time: string;
  content: string;
  likes?: number;
}

export interface PlayerPosition extends Position {
  rotation: number;
}
