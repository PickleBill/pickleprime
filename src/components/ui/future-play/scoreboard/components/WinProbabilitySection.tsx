
import React from "react";

interface WinProbabilityProps {
  player1Probability?: number;
  player2Probability?: number;
  player1Color?: string;
  player2Color?: string;
}

const WinProbabilitySection: React.FC<WinProbabilityProps> = ({ 
  player1Probability = 65, 
  player2Probability = 35,
  player1Color = "#4CAF50",
  player2Color = "#1a9dc3"
}) => {
  return (
    <div className="mt-2 animate-fade-in">
      <div className="flex items-center justify-between mb-1">
        <h4 className="text-white/90 text-[10px] font-medium">Win Probability</h4>
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: player1Color }}></div>
            <span className="text-[9px] text-white/70">Team Green</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: player2Color }}></div>
            <span className="text-[9px] text-white/70">Team Blue</span>
          </div>
        </div>
      </div>
      
      <div className="h-4 bg-navy/80 rounded-full overflow-hidden flex shadow-inner">
        <div 
          className="h-full flex items-center justify-end px-1.5 transition-all duration-1000" 
          style={{ 
            width: `${player1Probability}%`,
            background: `linear-gradient(to right, ${player1Color}aa, ${player1Color})`
          }}
        >
          <span className="text-white text-[9px] font-bold">{player1Probability}%</span>
        </div>
        <div 
          className="h-full flex items-center justify-start px-1.5 transition-all duration-1000" 
          style={{ 
            width: `${player2Probability}%`,
            background: `linear-gradient(to left, ${player2Color}aa, ${player2Color})`
          }}
        >
          <span className="text-white text-[9px] font-bold">{player2Probability}%</span>
        </div>
      </div>
    </div>
  );
};

export default WinProbabilitySection;
