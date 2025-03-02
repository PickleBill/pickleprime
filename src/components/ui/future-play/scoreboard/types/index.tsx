
import { ReactNode } from "react";

export interface Position {
  x: number;
  y: number;
}

export interface BallState {
  x: number;
  y: number;
  z?: number;
}

export interface BallTrajectory {
  points: Position[];
  type: "drive" | "lob" | "smash" | "slice";
  speed: number;
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
