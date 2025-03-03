
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
      <div className="overflow-y-auto flex-1 space-y-6">
        {/* Player comparison score header */}
        <div className="grid grid-cols-3 bg-[#001a2c] px-4 py-4 rounded-md shadow-inner">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-[#4CAF50] flex items-center justify-center">
                <span className="text-white font-bold text-lg">AC</span>
              </div>
              <span className="text-[#4CAF50] font-bold text-3xl">
                {player1Score}
              </span>
            </div>
            <span className="text-white/90 text-base mt-2 font-medium">Alex Chen</span>
            <span className="text-white/70 text-sm">71% win rate</span>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center">
              <span className="text-white/90 text-lg font-semibold">SET {currentSet}</span>
              <span className="text-white/80 text-base mt-1">11 - 9</span>
            </div>
          </div>
          
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-2.5 justify-end">
              <span className="text-[#33C3F0] font-bold text-3xl">
                {player2Score}
              </span>
              <div className="w-10 h-10 rounded-full bg-[#33C3F0] flex items-center justify-center">
                <span className="text-white font-bold text-lg">JS</span>
              </div>
            </div>
            <span className="text-white/90 text-base mt-2 font-medium">Jordan Smith</span>
            <span className="text-white/70 text-sm">71% win rate</span>
          </div>
        </div>
        
        {/* Stat comparison section */}
        <div className="space-y-6 px-1">
          {/* Top Speed */}
          <StatComparisonItem
            icon={<ZapIcon className="w-6 h-6 text-yellow-400" />}
            label="TOP SPEED"
            player1Value={player1Stats.topSpeed}
            player2Value={player2Stats.topSpeed}
            unit="mph"
            player1Color="#4CAF50"
            player2Color="#33C3F0"
          />
          
          {/* Accuracy */}
          <StatComparisonItem
            icon={<Target className="w-6 h-6 text-purple-400" />}
            label="ACCURACY"
            player1Value={player1Stats.accuracy}
            player2Value={player2Stats.accuracy}
            unit="%"
            player1Color="#4CAF50"
            player2Color="#33C3F0"
          />
          
          {/* Spin rate */}
          <StatComparisonItem
            icon={<Activity className="w-6 h-6 text-blue-400" />}
            label="SPIN RATE"
            player1Value={player1Stats.spinRate}
            player2Value={player2Stats.spinRate}
            unit="rpm"
            player1Color="#4CAF50"
            player2Color="#33C3F0"
          />
          
          {/* Reaction time */}
          <StatComparisonItem
            icon={<Clock className="w-6 h-6 text-green-400" />}
            label="REACTION"
            player1Value={player1Stats.reactionTime}
            player2Value={player2Stats.reactionTime}
            unit="s"
            player1Color="#4CAF50"
            player2Color="#33C3F0"
          />
          
          {/* Current ball speed */}
          <div className="flex items-center gap-3 px-4 py-4 mt-3 bg-[#001a2c] rounded-md shadow-inner">
            <ZapIcon className="w-6 h-6 text-yellow-400" />
            <span className="text-white/90 text-base font-medium">Current ball speed: </span>
            <span className="text-yellow-400 font-bold text-xl">{Math.round(ballVelocity)} mph</span>
          </div>
          
          <ShotDistributionSection />
          
          <WinProbabilitySection 
            player1Probability={65} 
            player2Probability={35}
            player1Color="#4CAF50"
            player2Color="#33C3F0"
          />

          {/* Match Details section with enhanced styling */}
          <div className="mt-6">
            <h4 className="text-white/90 text-lg font-semibold mb-4 px-1">Match Details</h4>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#001a2c] p-4 rounded-md shadow-inner">
                  <span className="text-white/80 text-sm">Points Won</span>
                  <div className="flex justify-between mt-2">
                    <span className="text-[#4CAF50] font-semibold text-xl">14</span>
                    <span className="text-[#33C3F0] font-semibold text-xl">12</span>
                  </div>
                </div>
                <div className="bg-[#001a2c] p-4 rounded-md shadow-inner">
                  <span className="text-white/80 text-sm">Winners</span>
                  <div className="flex justify-between mt-2">
                    <span className="text-[#4CAF50] font-semibold text-xl">8</span>
                    <span className="text-[#33C3F0] font-semibold text-xl">6</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#001a2c] p-4 rounded-md shadow-inner">
                  <span className="text-white/80 text-sm">Unforced Errors</span>
                  <div className="flex justify-between mt-2">
                    <span className="text-[#4CAF50] font-semibold text-xl">4</span>
                    <span className="text-[#33C3F0] font-semibold text-xl">7</span>
                  </div>
                </div>
                <div className="bg-[#001a2c] p-4 rounded-md shadow-inner">
                  <span className="text-white/80 text-sm">Net Play Win %</span>
                  <div className="flex justify-between mt-2">
                    <span className="text-[#4CAF50] font-semibold text-xl">78%</span>
                    <span className="text-[#33C3F0] font-semibold text-xl">65%</span>
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
