
import React from "react";
import { ChevronLeft } from "lucide-react";
import ScoreboardHeader from "./ScoreboardHeader";
import GameView from "./GameView";
import HighlightView from "./HighlightView";
import ScoreboardFooter from "./ScoreboardFooter";
import { PlayerStats } from "./types";

interface ScoreboardViewProps {
  handleBackButtonClick: () => void;
  gameTime: number;
  currentSet: number;
  formatTime: (seconds: number) => string;
  showHighlight: boolean;
  highlightTimer: number;
  player1Stats: PlayerStats;
  player2Stats: PlayerStats;
  player1Score: number;
  player2Score: number;
  triggerHighlight: () => void;
}

const ScoreboardView: React.FC<ScoreboardViewProps> = ({
  handleBackButtonClick,
  gameTime,
  currentSet,
  formatTime,
  showHighlight,
  highlightTimer,
  player1Stats,
  player2Stats,
  player1Score,
  player2Score,
  triggerHighlight
}) => {
  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in bg-navy-dark">
      {/* Futuristic background */}
      <div 
        className="absolute inset-0 bg-navy-dark"
        style={{
          backgroundImage: `
            radial-gradient(circle at 85% 15%, rgba(26, 157, 195, 0.15), transparent 40%),
            radial-gradient(circle at 15% 85%, rgba(43, 203, 110, 0.15), transparent 40%)
          `,
          backgroundSize: "100% 100%"
        }}
      >
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxMTE4MjgiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6TTAgMzBoMzB2MzBIMHoiIGZpbGw9IiMyQkNCNkUiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')]"></div>
      </div>

      {/* Back button */}
      <button 
        onClick={handleBackButtonClick}
        className="absolute top-5 left-5 z-20 px-4 py-2 bg-navy-light/50 hover:bg-navy-light border border-white/10 rounded-full text-white/80 flex items-center gap-2 backdrop-blur-sm transition-all"
      >
        <ChevronLeft className="w-4 h-4" />
        <span>Back</span>
      </button>

      {/* Main content */}
      <div className="relative w-full h-full flex flex-col">
        {/* Top Bar with logos, time, and indicators */}
        <ScoreboardHeader 
          gameTime={gameTime}
          currentSet={currentSet}
          formatTime={formatTime}
        />

        {/* Main Game Area with Scoreboard and Visualizations */}
        {showHighlight ? (
          <HighlightView highlightTimer={highlightTimer} />
        ) : (
          <GameView 
            player1Stats={player1Stats}
            player2Stats={player2Stats}
            player1Score={player1Score}
            player2Score={player2Score}
            currentSet={currentSet}
            triggerHighlight={triggerHighlight}
          />
        )}
        
        {/* Bottom bar with sponsor information */}
        <ScoreboardFooter />
      </div>
    </div>
  );
};

export default ScoreboardView;
