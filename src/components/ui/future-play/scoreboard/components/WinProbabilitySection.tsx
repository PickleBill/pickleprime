
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
    <div className="mt-2">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center">
          <Trophy className="w-3.5 h-3.5 text-yellow-400 mr-1" />
          <h4 className="text-white/80 text-xs uppercase tracking-wider font-medium">Win Probability</h4>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: player1Color }}></div>
            <span className="text-[10px] text-white/70">Green</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: player2Color }}></div>
            <span className="text-[10px] text-white/70">Blue</span>
          </div>
        </div>
      </div>
      
      <div className="h-4 bg-[#001a2c] rounded-full overflow-hidden flex shadow-inner">
        <div 
          className="h-full flex items-center justify-end px-1.5 transition-all duration-1000" 
          style={{ 
            width: animate ? `${player1Probability}%` : '50%',
            background: `linear-gradient(to right, ${player1Color}aa, ${player1Color})`,
            opacity: animate ? 1 : 0.5,
            transition: 'all 0.8s ease-out'
          }}
        >
          <span className="text-white text-[10px] font-bold">{player1Probability}%</span>
        </div>
        <div 
          className="h-full flex items-center justify-start px-1.5 transition-all duration-1000" 
          style={{ 
            width: animate ? `${player2Probability}%` : '50%',
            background: `linear-gradient(to left, ${player2Color}aa, ${player2Color})`,
            opacity: animate ? 1 : 0.5,
            transition: 'all 0.8s ease-out'
          }}
        >
          <span className="text-white text-[10px] font-bold">{player2Probability}%</span>
        </div>
      </div>
    </div>
  );
};

export default WinProbabilitySection;
