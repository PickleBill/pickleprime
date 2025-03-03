
import React from 'react';
import StatComparisonItem from './StatComparisonItem';
import ShotDistributionSection from './ShotDistributionSection';
import WinProbabilitySection from './WinProbabilitySection';
import { Activity, ZapIcon, Target, Clock } from 'lucide-react';

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
      <div className="overflow-y-auto flex-1 space-y-4">
        {/* Player comparison score header */}
        <div className="grid grid-cols-3 bg-[#001a2c] px-4 py-3 rounded-md shadow-inner">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#4CAF50] flex items-center justify-center">
                <span className="text-white font-bold text-lg">AC</span>
              </div>
              <span className="text-[#4CAF50] font-bold text-3xl">
                {player1Score}
              </span>
            </div>
            <span className="text-white/90 text-base mt-1.5 font-medium">Alex Chen</span>
            <span className="text-white/60 text-xs">71% win rate</span>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center">
              <span className="text-white/90 text-lg font-semibold">SET {currentSet}</span>
              <span className="text-white/70 text-base mt-1">11 - 9</span>
            </div>
          </div>
          
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-2 justify-end">
              <span className="text-[#33C3F0] font-bold text-3xl">
                {player2Score}
              </span>
              <div className="w-10 h-10 rounded-full bg-[#33C3F0] flex items-center justify-center">
                <span className="text-white font-bold text-lg">JS</span>
              </div>
            </div>
            <span className="text-white/90 text-base mt-1.5 font-medium">Jordan Smith</span>
            <span className="text-white/60 text-xs">62% win rate</span>
          </div>
        </div>
        
        {/* Stats section - grouped and optimized */}
        <div className="space-y-4 px-1">
          {/* Core Stats Group */}
          <div className="space-y-2">
            <h4 className="text-white/80 text-xs uppercase tracking-wider font-medium px-1 mb-1">Core Stats</h4>
            
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
          <div className="flex items-center gap-3 px-4 py-3 bg-[#001a2c] rounded-md shadow-inner">
            <ZapIcon className="w-6 h-6 text-yellow-400 animate-pulse" />
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
            <h4 className="text-white/80 text-xs uppercase tracking-wider font-medium px-1 mb-2">Match Details</h4>
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
  <div className="bg-[#001a2c] p-3 rounded-md shadow-inner">
    <span className="text-white/70 text-xs">{label}</span>
    <div className="flex justify-between mt-1.5">
      <span className="font-semibold text-base" style={{ color: player1Color }}>{player1Value}</span>
      <span className="font-semibold text-base" style={{ color: player2Color }}>{player2Value}</span>
    </div>
  </div>
);

export default StatsPanel;
