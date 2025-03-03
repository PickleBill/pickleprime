
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
    <div className="bg-[#001a2c] rounded-lg overflow-hidden border border-[#0a2d4a] shadow-md h-full flex flex-col">
      <div className="overflow-y-auto flex-1">
        {/* Player comparison score header */}
        <div className="grid grid-cols-3 bg-[#0a2d4a]/80 px-4 py-3">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#4CAF50] flex items-center justify-center">
                <span className="text-white font-bold">AC</span>
              </div>
              <span className="text-[#4CAF50] font-bold text-lg">
                {player1Score}
              </span>
            </div>
            <span className="text-white/70 text-xs">Alex Chen</span>
            <span className="text-white/50 text-xs">71% win rate</span>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center">
              <span className="text-white/90 text-sm font-medium">SET {currentSet}</span>
              <span className="text-white/70 text-xs">11 - 9</span>
            </div>
          </div>
          
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-2 justify-end">
              <span className="text-[#3db5e6] font-bold text-lg">
                {player2Score}
              </span>
              <div className="w-8 h-8 rounded-full bg-[#3db5e6] flex items-center justify-center">
                <span className="text-white font-bold">JS</span>
              </div>
            </div>
            <span className="text-white/70 text-xs">Jordan Smith</span>
            <span className="text-white/50 text-xs">71% win rate</span>
          </div>
        </div>
        
        {/* Stat comparison section */}
        <div className="p-4 space-y-4">
          {/* Top Speed */}
          <StatComparisonItem
            icon={<ZapIcon className="w-4 h-4 text-orange-400" />}
            label="TOP SPEED"
            player1Value={player1Stats.topSpeed}
            player2Value={player2Stats.topSpeed}
            unit="mph"
            player1Color="#4CAF50"
            player2Color="#3db5e6"
          />
          
          {/* Accuracy */}
          <StatComparisonItem
            icon={<Target className="w-4 h-4 text-purple-400" />}
            label="ACCURACY"
            player1Value={player1Stats.accuracy}
            player2Value={player2Stats.accuracy}
            unit="%"
            player1Color="#4CAF50"
            player2Color="#3db5e6"
          />
          
          {/* Spin rate */}
          <StatComparisonItem
            icon={<Activity className="w-4 h-4 text-blue-400" />}
            label="SPIN RATE"
            player1Value={player1Stats.spinRate}
            player2Value={player2Stats.spinRate}
            unit="rpm"
            player1Color="#4CAF50"
            player2Color="#3db5e6"
          />
          
          {/* Reaction time */}
          <StatComparisonItem
            icon={<Clock className="w-4 h-4 text-green-400" />}
            label="REACTION"
            player1Value={player1Stats.reactionTime}
            player2Value={player2Stats.reactionTime}
            unit="s"
            player1Color="#4CAF50"
            player2Color="#3db5e6"
          />
          
          {/* Current ball speed */}
          <div className="flex items-center gap-2 px-1 py-2 mt-2 bg-[#0a2d4a]/30 rounded-md">
            <ZapIcon className="w-4 h-4 text-yellow-400" />
            <span className="text-white/80 text-xs font-medium">Current ball speed: </span>
            <span className="text-yellow-400 font-bold">{Math.round(ballVelocity)} mph</span>
          </div>
          
          <ShotDistributionSection />
          
          <WinProbabilitySection 
            player1Probability={65} 
            player2Probability={35}
            player1Color="#4CAF50"
            player2Color="#3db5e6"
          />

          {/* Additional stats to utilize the extra space */}
          <div className="mt-4">
            <h4 className="text-white/90 text-xs font-medium mb-2">Match Details</h4>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-[#0a2d4a]/30 p-2 rounded-md">
                  <span className="text-white/70">Points Won</span>
                  <div className="flex justify-between mt-1">
                    <span className="text-[#4CAF50] font-medium">14</span>
                    <span className="text-[#3db5e6] font-medium">12</span>
                  </div>
                </div>
                <div className="bg-[#0a2d4a]/30 p-2 rounded-md">
                  <span className="text-white/70">Winners</span>
                  <div className="flex justify-between mt-1">
                    <span className="text-[#4CAF50] font-medium">8</span>
                    <span className="text-[#3db5e6] font-medium">6</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-[#0a2d4a]/30 p-2 rounded-md">
                  <span className="text-white/70">Unforced Errors</span>
                  <div className="flex justify-between mt-1">
                    <span className="text-[#4CAF50] font-medium">4</span>
                    <span className="text-[#3db5e6] font-medium">7</span>
                  </div>
                </div>
                <div className="bg-[#0a2d4a]/30 p-2 rounded-md">
                  <span className="text-white/70">Net Play Win %</span>
                  <div className="flex justify-between mt-1">
                    <span className="text-[#4CAF50] font-medium">78%</span>
                    <span className="text-[#3db5e6] font-medium">65%</span>
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
