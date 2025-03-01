
import React from 'react';

interface WinProbabilityBarProps {
  team1Probability: number;
  team2Probability: number;
  team1Label?: string;
  team2Label?: string;
}

const WinProbabilityBar: React.FC<WinProbabilityBarProps> = ({
  team1Probability,
  team2Probability,
  team1Label = "Team Green",
  team2Label = "Team Blue"
}) => {
  return (
    <div>
      <h4 className="text-white/90 text-sm mb-2">Win Probability</h4>
      
      <div className="flex items-center text-xs text-white/70 mb-1">
        <span className="flex-1">{team1Label}</span>
        <span className="flex-1 text-right">{team2Label}</span>
      </div>
      
      <div className="h-4 bg-navy/80 rounded-full overflow-hidden flex">
        <div 
          className="h-full bg-gradient-to-r from-[#176840] to-[#3DD598] flex items-center justify-end px-1.5" 
          style={{ width: `${team1Probability}%` }}
        >
          <span className="text-white text-[10px] font-bold">{team1Probability}%</span>
        </div>
        <div 
          className="h-full bg-gradient-to-r from-[#3182CE] to-[#0A4D73] flex items-center justify-start px-1.5" 
          style={{ width: `${team2Probability}%` }}
        >
          <span className="text-white text-[10px] font-bold">{team2Probability}%</span>
        </div>
      </div>
    </div>
  );
};

export default WinProbabilityBar;
