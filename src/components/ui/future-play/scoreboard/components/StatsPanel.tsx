
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
  return (
    <div className="h-full flex flex-col">
      <div className="overflow-y-auto flex-1 space-y-5">
        {/* Player comparison score header */}
        <div className="grid grid-cols-3 bg-[#0a2d4a]/80 px-4 py-4 rounded-md">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-[#4CAF50] flex items-center justify-center">
                <span className="text-white font-bold text-base">AC</span>
              </div>
              <span className="text-[#4CAF50] font-bold text-xl">
                {player1Score}
              </span>
            </div>
            <span className="text-white/80 text-sm mt-1">Alex Chen</span>
            <span className="text-white/60 text-xs">71% win rate</span>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center">
              <span className="text-white/90 text-base font-medium">SET {currentSet}</span>
              <span className="text-white/70 text-sm">11 - 9</span>
            </div>
          </div>
          
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-2 justify-end">
              <span className="text-[#33C3F0] font-bold text-xl">
                {player2Score}
              </span>
              <div className="w-9 h-9 rounded-full bg-[#33C3F0] flex items-center justify-center">
                <span className="text-white font-bold text-base">JS</span>
              </div>
            </div>
            <span className="text-white/80 text-sm mt-1">Jordan Smith</span>
            <span className="text-white/60 text-xs">71% win rate</span>
          </div>
        </div>
        
        {/* Stat comparison section */}
        <div className="space-y-5 px-1">
          {/* Top Speed */}
          <StatComparisonItem
            icon={<ZapIcon className="w-5 h-5 text-orange-400" />}
            label="TOP SPEED"
            player1Value={player1Stats.topSpeed}
            player2Value={player2Stats.topSpeed}
            unit="mph"
            player1Color="#4CAF50"
            player2Color="#33C3F0"
          />
          
          {/* Accuracy */}
          <StatComparisonItem
            icon={<Target className="w-5 h-5 text-purple-400" />}
            label="ACCURACY"
            player1Value={player1Stats.accuracy}
            player2Value={player2Stats.accuracy}
            unit="%"
            player1Color="#4CAF50"
            player2Color="#33C3F0"
          />
          
          {/* Spin rate */}
          <StatComparisonItem
            icon={<Activity className="w-5 h-5 text-blue-400" />}
            label="SPIN RATE"
            player1Value={player1Stats.spinRate}
            player2Value={player2Stats.spinRate}
            unit="rpm"
            player1Color="#4CAF50"
            player2Color="#33C3F0"
          />
          
          {/* Reaction time */}
          <StatComparisonItem
            icon={<Clock className="w-5 h-5 text-green-400" />}
            label="REACTION"
            player1Value={player1Stats.reactionTime}
            player2Value={player2Stats.reactionTime}
            unit="s"
            player1Color="#4CAF50"
            player2Color="#33C3F0"
          />
          
          {/* Current ball speed */}
          <div className="flex items-center gap-2 px-3 py-3 mt-3 bg-[#0a2d4a]/30 rounded-md">
            <ZapIcon className="w-5 h-5 text-yellow-400" />
            <span className="text-white/80 text-sm font-medium">Current ball speed: </span>
            <span className="text-yellow-400 font-bold text-base">{Math.round(ballVelocity)} mph</span>
          </div>
          
          <ShotDistributionSection />
          
          <WinProbabilitySection 
            player1Probability={65} 
            player2Probability={35}
            player1Color="#4CAF50"
            player2Color="#33C3F0"
          />

          {/* Additional stats to utilize the extra space */}
          <div className="mt-6">
            <h4 className="text-white/90 text-sm font-medium mb-3">Match Details</h4>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#0a2d4a]/30 p-3 rounded-md">
                  <span className="text-white/70 text-sm">Points Won</span>
                  <div className="flex justify-between mt-2">
                    <span className="text-[#4CAF50] font-medium text-base">14</span>
                    <span className="text-[#33C3F0] font-medium text-base">12</span>
                  </div>
                </div>
                <div className="bg-[#0a2d4a]/30 p-3 rounded-md">
                  <span className="text-white/70 text-sm">Winners</span>
                  <div className="flex justify-between mt-2">
                    <span className="text-[#4CAF50] font-medium text-base">8</span>
                    <span className="text-[#33C3F0] font-medium text-base">6</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#0a2d4a]/30 p-3 rounded-md">
                  <span className="text-white/70 text-sm">Unforced Errors</span>
                  <div className="flex justify-between mt-2">
                    <span className="text-[#4CAF50] font-medium text-base">4</span>
                    <span className="text-[#33C3F0] font-medium text-base">7</span>
                  </div>
                </div>
                <div className="bg-[#0a2d4a]/30 p-3 rounded-md">
                  <span className="text-white/70 text-sm">Net Play Win %</span>
                  <div className="flex justify-between mt-2">
                    <span className="text-[#4CAF50] font-medium text-base">78%</span>
                    <span className="text-[#33C3F0] font-medium text-base">65%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPanel;
