
import React, { useEffect, useState } from "react";
import { Trophy } from "lucide-react";

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
  player2Color = "#33C3F0"
}) => {
  // Animate the probability bars on mount
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="mt-2 bg-gradient-to-r from-[#001a2c] to-[#001223] rounded-md p-3 shadow-md border border-[#1a3b55]/50">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <div className="p-1 bg-yellow-500/20 rounded-full mr-1.5">
            <Trophy className="w-3.5 h-3.5 text-yellow-400" />
          </div>
          <h4 className="text-white/80 text-xs uppercase tracking-wider font-medium">Win Probability</h4>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: player1Color }}></div>
            <span className="text-[10px] text-white/70">Team 1</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: player2Color }}></div>
            <span className="text-[10px] text-white/70">Team 2</span>
          </div>
        </div>
      </div>
      
      <div className="h-6 bg-navy/40 rounded-full overflow-hidden flex shadow-inner">
        <div 
          className="h-full flex items-center justify-end px-1.5 transition-all duration-1000" 
          style={{ 
            width: animate ? `${player1Probability}%` : '50%',
            background: `linear-gradient(to right, ${player1Color}80, ${player1Color})`,
            opacity: animate ? 1 : 0.5,
            transition: 'all 0.8s ease-out',
            boxShadow: `0 0 10px ${player1Color}40 inset`
          }}
        >
          <span className="text-white text-xs font-bold drop-shadow-md">{player1Probability}%</span>
        </div>
        <div 
          className="h-full flex items-center justify-start px-1.5 transition-all duration-1000" 
          style={{ 
            width: animate ? `${player2Probability}%` : '50%',
            background: `linear-gradient(to left, ${player2Color}80, ${player2Color})`,
            opacity: animate ? 1 : 0.5,
            transition: 'all 0.8s ease-out',
            boxShadow: `0 0 10px ${player2Color}40 inset`
          }}
        >
          <span className="text-white text-xs font-bold drop-shadow-md">{player2Probability}%</span>
        </div>
      </div>
    </div>
  );
};

export default WinProbabilitySection;
