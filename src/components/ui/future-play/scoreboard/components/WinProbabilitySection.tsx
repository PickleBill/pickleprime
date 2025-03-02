
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
  player2Color = "#0EA5E9"
}) => {
  return (
    <div className="mt-2">
      <div className="flex items-center justify-between mb-1">
        <h4 className="text-white/90 text-[10px] font-medium">Win Probability</h4>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: player1Color }}></div>
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: player2Color }}></div>
        </div>
      </div>
      
      <div className="flex items-center text-[9px] text-white/70 mb-0.5">
        <span className="flex-1">Team Green</span>
        <span className="flex-1 text-right">Team Blue</span>
      </div>
      
      <div className="h-3.5 bg-navy/80 rounded-full overflow-hidden flex">
        <div className="h-full flex items-center justify-end px-1.5" 
             style={{ 
               width: `${player1Probability}%`,
               background: `linear-gradient(to right, ${player1Color}dd, ${player1Color})`
             }}>
          <span className="text-white text-[9px] font-bold">{player1Probability}%</span>
        </div>
        <div className="h-full flex items-center justify-start px-1.5" 
             style={{ 
               width: `${player2Probability}%`,
               background: `linear-gradient(to right, ${player2Color}dd, ${player2Color})`
             }}>
          <span className="text-white text-[9px] font-bold">{player2Probability}%</span>
        </div>
      </div>
    </div>
  );
};

export default WinProbabilitySection;
