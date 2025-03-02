
import React from "react";
import { PlayerStats } from "../types";

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
  // Score display
  const scoreDisplay = (
    <div className="flex items-center justify-center mb-8">
      <div className="text-[#4CAF50] text-4xl font-bold">{player1Score}</div>
      <div className="text-white mx-3 text-2xl">-</div>
      <div className="text-[#3db5e6] text-4xl font-bold">{player2Score}</div>
    </div>
  );
  
  // Players section with avatars
  const playersSection = (
    <div className="flex justify-between mb-6">
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#4CAF50]">
          <img src={player1Stats.avatar} alt={player1Stats.name} className="w-full h-full object-cover" />
        </div>
        <div className="ml-2">
          <div className="text-white font-medium">{player1Stats.name}</div>
          <div className="text-[#4CAF50] text-xs">{player1Stats.winRate} win rate</div>
        </div>
      </div>
      
      <div className="flex items-center">
        <div className="mr-2 text-right">
          <div className="text-white font-medium">{player2Stats.name}</div>
          <div className="text-[#3db5e6] text-xs">{player2Stats.winRate} win rate</div>
        </div>
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#3db5e6]">
          <img src={player2Stats.avatar} alt={player2Stats.name} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
  
  // Set indicator
  const setIndicator = (
    <div className="text-center text-sm text-white/80 mb-6">
      <span>SET {currentSet}: </span>
      <span className="text-white font-medium">11 - 9</span>
    </div>
  );
  
  // Stats comparison
  const statsComparison = (
    <div className="space-y-6 mb-6">
      {/* Top Speed */}
      <div className="grid grid-cols-3 items-center">
        <div className="text-right text-[#4CAF50] font-semibold">47 mph</div>
        <div className="text-center text-white/80 text-sm">TOP SPEED</div>
        <div className="text-left text-[#3db5e6] font-semibold">52 mph</div>
      </div>
      
      {/* Accuracy */}
      <div className="grid grid-cols-3 items-center">
        <div className="text-right text-[#4CAF50] font-semibold">92%</div>
        <div className="text-center text-white/80 text-sm">ACCURACY</div>
        <div className="text-left text-[#3db5e6] font-semibold">88%</div>
      </div>
      
      {/* Spin Rate */}
      <div className="grid grid-cols-3 items-center">
        <div className="text-right text-[#4CAF50] font-semibold">1800 rpm</div>
        <div className="text-center text-white/80 text-sm">SPIN RATE</div>
        <div className="text-left text-[#3db5e6] font-semibold">2100 rpm</div>
      </div>
      
      {/* Reaction Time */}
      <div className="grid grid-cols-3 items-center">
        <div className="text-right text-[#4CAF50] font-semibold">0.4s</div>
        <div className="text-center text-white/80 text-sm">REACTION</div>
        <div className="text-left text-[#3db5e6] font-semibold">0.5s</div>
      </div>
    </div>
  );
  
  // Shot Distribution
  const shotDistribution = (
    <div className="mb-6">
      <h4 className="text-white text-sm font-medium mb-2">Shot Distribution</h4>
      
      {/* Dinks */}
      <div className="mb-2">
        <div className="flex justify-between mb-1">
          <span className="text-white/80 text-xs">Dinks</span>
          <span className="text-white text-xs">65%</span>
        </div>
        <div className="h-2 bg-[#0a2d4a] rounded-full overflow-hidden">
          <div className="h-full bg-[#4CAF50]" style={{ width: '65%' }}></div>
        </div>
      </div>
      
      {/* Drives */}
      <div className="mb-2">
        <div className="flex justify-between mb-1">
          <span className="text-white/80 text-xs">Drives</span>
          <span className="text-white text-xs">24%</span>
        </div>
        <div className="h-2 bg-[#0a2d4a] rounded-full overflow-hidden">
          <div className="h-full bg-[#3db5e6]" style={{ width: '24%' }}></div>
        </div>
      </div>
      
      {/* Volleys */}
      <div>
        <div className="flex justify-between mb-1">
          <span className="text-white/80 text-xs">Volleys</span>
          <span className="text-white text-xs">11%</span>
        </div>
        <div className="h-2 bg-[#0a2d4a] rounded-full overflow-hidden">
          <div className="h-full bg-[#FF9800]" style={{ width: '11%' }}></div>
        </div>
      </div>
    </div>
  );
  
  // Win Probability
  const winProbability = (
    <div>
      <h4 className="text-white text-sm font-medium mb-2">Win Probability</h4>
      
      <div className="flex justify-between text-xs text-white/80 mb-1">
        <span>Team Green</span>
        <span>Team Blue</span>
      </div>
      
      <div className="h-4 bg-[#0a2d4a] rounded-full overflow-hidden flex">
        <div className="h-full bg-[#4CAF50] flex items-center justify-end px-2" style={{ width: '65%' }}>
          <span className="text-white text-xs font-bold">65%</span>
        </div>
        <div className="h-full bg-[#3db5e6] flex items-center justify-start px-2" style={{ width: '35%' }}>
          <span className="text-white text-xs font-bold">35%</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#001a2c] rounded-lg overflow-hidden border border-[#0a2d4a] shadow-lg p-4">
      {scoreDisplay}
      {playersSection}
      {setIndicator}
      {statsComparison}
      {shotDistribution}
      {winProbability}
      
      {/* Current Ball Speed */}
      <div className="mt-6 text-center text-white/60 text-sm">
        Current ball speed: <span className="text-[#FF9800] font-medium">{ballVelocity.toFixed(0)} mph</span>
      </div>
    </div>
  );
};

export default StatsPanel;
