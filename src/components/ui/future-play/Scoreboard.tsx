
import React from "react";
import { PlayerStats } from "./types";

interface ScoreboardProps {
  player1Stats: PlayerStats;
  player2Stats: PlayerStats;
  player1Score: number;
  player2Score: number;
  currentSet: number;
}

const Scoreboard: React.FC<ScoreboardProps> = ({
  player1Stats,
  player2Stats,
  player1Score,
  player2Score,
  currentSet
}) => {
  return (
    <div className="bg-navy-light/30 rounded-2xl overflow-hidden border border-white/10">
      <div className="bg-gradient-to-r from-primary/20 to-[#1a9dc3]/20 px-6 py-3 border-b border-white/10">
        <h2 className="text-white font-bold text-center">LIVE SCOREBOARD</h2>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#1a9dc3] mb-2">
              <img src={player1Stats.avatar} alt="Player 1" className="w-full h-full object-cover" />
            </div>
            <div className="text-white font-medium">{player1Stats.name}</div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="text-[#1a9dc3] text-6xl font-bold">{player1Score}</div>
            <div className="text-white/30 text-xl">-</div>
            <div className="text-primary text-6xl font-bold">{player2Score}</div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary mb-2">
              <img src={player2Stats.avatar} alt="Player 2" className="w-full h-full object-cover" />
            </div>
            <div className="text-white font-medium">{player2Stats.name}</div>
          </div>
        </div>
        
        {/* Set History */}
        <div className="flex justify-center gap-4 mb-6">
          <div className="bg-navy-dark/50 px-3 py-1 rounded-lg border border-white/10 flex items-center gap-2">
            <span className="text-white/70 text-sm">SET 1:</span>
            <span className="text-[#1a9dc3] font-medium">11</span>
            <span className="text-white/50">-</span>
            <span className="text-primary font-medium">9</span>
          </div>
          {currentSet > 1 && (
            <div className="bg-navy-dark/50 px-3 py-1 rounded-lg border border-white/10 flex items-center gap-2">
              <span className="text-white/70 text-sm">SET 2:</span>
              <span className="text-[#1a9dc3] font-medium">7</span>
              <span className="text-white/50">-</span>
              <span className="text-primary font-medium">5</span>
            </div>
          )}
        </div>
        
        {/* Stats comparison */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="text-right text-white/80 text-sm w-24">{player1Stats.topSpeed}</div>
            <div className="flex-1 h-2 bg-navy-dark/50 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#1a9dc3] to-primary" style={{ width: "65%" }}></div>
            </div>
            <div className="text-left text-white/80 text-sm w-24">{player2Stats.topSpeed}</div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="text-right text-white/80 text-sm w-24">{player1Stats.shotAccuracy}</div>
            <div className="flex-1 h-2 bg-navy-dark/50 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#1a9dc3] to-primary" style={{ width: "92%" }}></div>
            </div>
            <div className="text-left text-white/80 text-sm w-24">{player2Stats.shotAccuracy}</div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="text-right text-white/80 text-sm w-24">{player1Stats.spinRate}</div>
            <div className="flex-1 h-2 bg-navy-dark/50 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#1a9dc3] to-primary" style={{ width: "45%" }}></div>
            </div>
            <div className="text-left text-white/80 text-sm w-24">{player2Stats.spinRate}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
