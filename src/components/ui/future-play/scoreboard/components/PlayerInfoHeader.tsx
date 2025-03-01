
import React from "react";
import { PlayerStats } from "../types";

interface PlayerInfoHeaderProps {
  player1Stats: PlayerStats;
  player2Stats: PlayerStats;
  player1Score: number;
  player2Score: number;
  currentSet: number;
}

const PlayerInfoHeader: React.FC<PlayerInfoHeaderProps> = ({
  player1Stats,
  player2Stats,
  player1Score,
  player2Score,
  currentSet,
}) => {
  return (
    <>
      {/* Players and Score - Compact layout */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1">
          <div className="w-6 h-6 rounded-full overflow-hidden border-2 border-primary ring-1 ring-primary/30">
            <img 
              src={player1Stats.avatar} 
              alt={player1Stats.name} 
              className="w-full h-full object-cover" 
            />
          </div>
          <div>
            <div className="text-white text-[11px] font-semibold">{player1Stats.name}</div>
            <div className="text-primary text-[9px]">{player1Stats.winRate} win rate</div>
          </div>
        </div>
        
        <div className="flex items-center gap-1">
          <span className="text-primary text-xl font-bold">{player1Score}</span>
          <span className="text-white/50 text-lg">-</span>
          <span className="text-[#0EA5E9] text-xl font-bold">{player2Score}</span>
        </div>
        
        <div className="flex items-center gap-1">
          <div>
            <div className="text-white text-[11px] font-semibold text-right">{player2Stats.name}</div>
            <div className="text-[#0EA5E9] text-[9px] text-right">{player2Stats.winRate} win rate</div>
          </div>
          <div className="w-6 h-6 rounded-full overflow-hidden border-2 border-[#0EA5E9] ring-1 ring-[#0EA5E9]/30">
            <img 
              src={player2Stats.avatar} 
              alt={player2Stats.name} 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>
      
      {/* Current Set indicator */}
      <div className="flex justify-center mb-2 text-white/70">
        <div className="px-2 py-0.5 rounded-full bg-navy/40 border border-white/10 text-[9px]">
          <span>SET {currentSet}: <span className="text-primary-foreground font-medium">11</span> - <span className="text-primary-foreground font-medium">9</span></span>
        </div>
      </div>
    </>
  );
};

export default PlayerInfoHeader;
