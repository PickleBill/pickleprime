
import React from "react";
import { PlayerStats } from "../types";
import PlayerInfoHeader from "./PlayerInfoHeader";
import StatsComparison from "./StatsComparison";
import ShotDistributionSection from "./ShotDistributionSection";
import WinProbabilitySection from "./WinProbabilitySection";
import FooterStats from "./FooterStats";

interface StatsPanelProps {
  player1Stats: PlayerStats;
  player2Stats: PlayerStats;
  player1Score: number;
  player2Score: number;
  currentSet: number;
  ballVelocity: number;
}

const StatsPanel: React.FC<StatsPanelProps> = ({
  player1Stats,
  player2Stats,
  player1Score,
  player2Score,
  currentSet,
  ballVelocity
}) => {
  return (
    <div className="bg-navy-dark rounded-lg overflow-hidden border border-navy/20 shadow-lg">
      <div className="py-1.5 px-3 bg-gradient-to-r from-primary to-primary-dark text-white">
        <h3 className="font-medium text-xs">MATCH STATISTICS</h3>
      </div>
      
      <div className="p-3">
        {/* Player Information and Score */}
        <PlayerInfoHeader 
          player1Stats={player1Stats}
          player2Stats={player2Stats}
          player1Score={player1Score}
          player2Score={player2Score}
          currentSet={currentSet}
        />
        
        {/* Stats Comparisons */}
        <StatsComparison 
          topSpeed1="47 mph"
          topSpeed2="52 mph"
          accuracy1="92%"
          accuracy2="88%"
          spinRate1="1800 rpm"
          spinRate2="2100 rpm"
          reaction1="0.4s"
          reaction2="0.5s"
        />
        
        {/* Shot Distribution */}
        <ShotDistributionSection />
        
        {/* Win Probability */}
        <WinProbabilitySection />
        
        {/* Footer Stats Summary */}
        <FooterStats ballVelocity={ballVelocity} />
      </div>
    </div>
  );
};

export default StatsPanel;
