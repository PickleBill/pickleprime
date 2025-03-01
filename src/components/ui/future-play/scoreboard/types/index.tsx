
// Player position type
export interface PlayerPosition {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
}

// Ball trajectory type
export interface BallTrajectory {
  endX: number;
  endY: number;
  points: { x: number; y: number }[];
}

// Main Scoreboard Container Props
export interface ScoreboardContainerProps {
  onBackClick?: () => void;
  onHighlightClick?: () => void;
  showHighlight?: boolean;
  highlightTimer?: number;
  gameTime?: number;
  player1Score?: number;
  player2Score?: number;
  currentSet?: number;
}
