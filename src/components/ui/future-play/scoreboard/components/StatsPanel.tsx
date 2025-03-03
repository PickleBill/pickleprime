
import React from 'react';
import StatComparisonItem from './StatComparisonItem';
import ShotDistributionSection from './ShotDistributionSection';
import WinProbabilitySection from './WinProbabilitySection';
import { Activity, ZapIcon, Target, Clock, BarChart2, TrendingUp } from 'lucide-react';

interface StatsPanelProps {
  player1Stats: any;
  player2Stats: any;
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
  // Define common colors for consistent theming
  const player1Color = "#4CAF50";
  const player2Color = "#33C3F0";
  
  return (
    <div className="h-full flex flex-col">
      <div className="overflow-y-auto flex-1 space-y-5 pr-1">
        {/* Player comparison score header - modernized */}
        <div className="grid grid-cols-3 bg-gradient-to-r from-[#001a2c] to-[#00233c] px-4 py-3 rounded-md shadow-md border border-[#1a3b55]">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4CAF50] to-[#388E3C] flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">AC</span>
              </div>
              <span className="text-[#4CAF50] font-bold text-3xl text-shadow">
                {player1Score}
              </span>
            </div>
            <span className="text-white/90 text-base mt-1.5 font-medium">Alex Chen</span>
            <span className="text-white/60 text-xs flex items-center gap-1 mt-0.5">
              <TrendingUp className="w-3 h-3 text-green-400" />
              71% win rate
            </span>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center">
              <span className="text-white/90 text-lg font-semibold bg-[#001223] px-3 py-1 rounded-md">SET {currentSet}</span>
              <span className="text-white/70 text-base mt-2">11 - 9</span>
            </div>
          </div>
          
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-2 justify-end">
              <span className="text-[#33C3F0] font-bold text-3xl text-shadow">
                {player2Score}
              </span>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#33C3F0] to-[#0891b2] flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">JS</span>
              </div>
            </div>
            <span className="text-white/90 text-base mt-1.5 font-medium">Jordan Smith</span>
            <span className="text-white/60 text-xs flex items-center gap-1 mt-0.5 justify-end">
              <TrendingUp className="w-3 h-3 text-blue-400" />
              62% win rate
            </span>
          </div>
        </div>
        
        {/* Stats section - grouped and optimized */}
        <div className="space-y-4 px-1">
          {/* Core Stats Group */}
          <div className="space-y-2.5">
            <h4 className="text-white/80 text-xs uppercase tracking-wider font-medium px-1 mb-1 flex items-center">
              <BarChart2 className="w-3.5 h-3.5 text-primary mr-1.5" />
              Core Stats
            </h4>
            
            <StatComparisonItem
              icon={<ZapIcon className="w-5 h-5 text-yellow-400" />}
              label="TOP SPEED"
              player1Value={player1Stats.topSpeed}
              player2Value={player2Stats.topSpeed}
              unit="mph"
              player1Color={player1Color}
              player2Color={player2Color}
            />
            
            <StatComparisonItem
              icon={<Target className="w-5 h-5 text-purple-400" />}
              label="ACCURACY"
              player1Value={player1Stats.accuracy}
              player2Value={player2Stats.accuracy}
              unit="%"
              player1Color={player1Color}
              player2Color={player2Color}
            />
            
            <StatComparisonItem
              icon={<Activity className="w-5 h-5 text-blue-400" />}
              label="SPIN RATE"
              player1Value={player1Stats.spinRate}
              player2Value={player2Stats.spinRate}
              unit="rpm"
              player1Color={player1Color}
              player2Color={player2Color}
            />
            
            <StatComparisonItem
              icon={<Clock className="w-5 h-5 text-green-400" />}
              label="REACTION"
              player1Value={player1Stats.reactionTime}
              player2Value={player2Stats.reactionTime}
              unit="s"
              player1Color={player1Color}
              player2Color={player2Color}
            />
          </div>
          
          {/* Current ball speed - in its own section */}
          <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-[#001a2c] to-[#001223] rounded-md shadow-md border border-[#1a3b55]">
            <div className="p-1.5 bg-yellow-500/20 rounded-full">
              <ZapIcon className="w-5 h-5 text-yellow-400 animate-pulse" />
            </div>
            <span className="text-white/90 text-base font-medium">Current ball speed: </span>
            <span className="text-yellow-400 font-bold text-xl ml-auto">{Math.round(ballVelocity)} mph</span>
          </div>
          
          {/* Shot Distribution - reused component */}
          <ShotDistributionSection />
          
          {/* Win Probability - reused component */}
          <WinProbabilitySection 
            player1Probability={65} 
            player2Probability={35}
            player1Color={player1Color}
            player2Color={player2Color}
          />

          {/* Match Details section with improved layout */}
          <div className="mt-4">
            <h4 className="text-white/80 text-xs uppercase tracking-wider font-medium px-1 mb-2 flex items-center">
              <BarChart2 className="w-3.5 h-3.5 text-primary mr-1.5" />
              Match Details
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <MatchDetailCard label="Points Won" player1Value="14" player2Value="12" player1Color={player1Color} player2Color={player2Color} />
              <MatchDetailCard label="Winners" player1Value="8" player2Value="6" player1Color={player1Color} player2Color={player2Color} />
              <MatchDetailCard label="Unforced Errors" player1Value="4" player2Value="7" player1Color={player1Color} player2Color={player2Color} />
              <MatchDetailCard label="Net Play Win %" player1Value="78%" player2Value="65%" player1Color={player1Color} player2Color={player2Color} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Extracted component for match detail cards
interface MatchDetailCardProps {
  label: string;
  player1Value: string;
  player2Value: string;
  player1Color: string;
  player2Color: string;
}

const MatchDetailCard: React.FC<MatchDetailCardProps> = ({ label, player1Value, player2Value, player1Color, player2Color }) => (
  <div className="bg-gradient-to-r from-[#001a2c] to-[#001223] p-3 rounded-md shadow-md border border-[#1a3b55]/50 hover:border-[#1a3b55] transition-all duration-300">
    <span className="text-white/70 text-xs">{label}</span>
    <div className="flex justify-between mt-1.5">
      <span className="font-semibold text-base" style={{ color: player1Color }}>{player1Value}</span>
      <span className="font-semibold text-base" style={{ color: player2Color }}>{player2Value}</span>
    </div>
  </div>
);

export default StatsPanel;
