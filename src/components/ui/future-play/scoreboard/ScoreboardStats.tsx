
import React from 'react';
import { PlayerStats } from './types';

interface ScoreboardStatsProps {
  player1Stats: PlayerStats;
  player2Stats: PlayerStats;
}

const ScoreboardStats: React.FC<ScoreboardStatsProps> = ({ 
  player1Stats, 
  player2Stats 
}) => {
  return (
    <div className="bg-navy-dark rounded-lg overflow-hidden border border-white/10">
      <div className="py-2 px-3 bg-navy/80 border-b border-white/10">
        <h3 className="text-white font-medium text-sm">Player Stats</h3>
      </div>
      
      <div className="p-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#176840]">
              <img 
                src={player1Stats.avatar} 
                alt={player1Stats.name} 
                className="w-full h-full object-cover" 
              />
            </div>
            <span className="text-white text-sm">{player1Stats.name}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-white text-sm">{player2Stats.name}</span>
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#0A4D73]">
              <img 
                src={player2Stats.avatar} 
                alt={player2Stats.name} 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-white/70 text-xs">{player1Stats.topSpeed}</span>
            <span className="text-white/50 text-xs mx-2">Top Speed</span>
            <span className="text-white/70 text-xs">{player2Stats.topSpeed}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-white/70 text-xs">{player1Stats.shotAccuracy}</span>
            <span className="text-white/50 text-xs mx-2">Accuracy</span>
            <span className="text-white/70 text-xs">{player2Stats.shotAccuracy}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-white/70 text-xs">{player1Stats.spinRate}</span>
            <span className="text-white/50 text-xs mx-2">Spin Rate</span>
            <span className="text-white/70 text-xs">{player2Stats.spinRate}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-white/70 text-xs">{player1Stats.reactionTime}</span>
            <span className="text-white/50 text-xs mx-2">Reaction</span>
            <span className="text-white/70 text-xs">{player2Stats.reactionTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreboardStats;
