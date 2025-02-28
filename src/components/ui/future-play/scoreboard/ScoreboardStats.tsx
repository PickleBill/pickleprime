
import React from 'react';

interface PlayerStats {
  name: string;
  avatar: string;
  topSpeed: string;
  shotAccuracy: string;
  spinRate: string;
}

interface ScoreboardStatsProps {
  player1Stats: PlayerStats;
  player2Stats: PlayerStats;
}

const ScoreboardStats: React.FC<ScoreboardStatsProps> = ({
  player1Stats,
  player2Stats
}) => {
  return (
    <div className="bg-[#092435] rounded-lg overflow-hidden border border-[#1A4258]/50 flex flex-col">
      <div className="bg-[#0C8068] py-2 px-3 uppercase text-white font-semibold text-sm">
        Live Scoreboard
      </div>
      
      <div className="p-3 flex flex-col">
        {/* Player Scores - Desktop View */}
        <div className="hidden sm:flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#1a9dc3]">
              <img src={player1Stats.avatar} alt={player1Stats.name} className="w-full h-full object-cover" />
            </div>
            <span className="text-white text-sm">{player1Stats.name}</span>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-[#1a9dc3] text-5xl font-bold">9</span>
            <span className="text-white/50">-</span>
            <span className="text-primary text-5xl font-bold">5</span>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-white text-sm">{player2Stats.name}</span>
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
              <img src={player2Stats.avatar} alt={player2Stats.name} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        
        {/* Mobile Player Info */}
        <div className="flex sm:hidden items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#1a9dc3]">
              <img src={player1Stats.avatar} alt={player1Stats.name} className="w-full h-full object-cover" />
            </div>
            <span className="text-white text-xs">{player1Stats.name}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-white text-xs">{player2Stats.name}</span>
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary">
              <img src={player2Stats.avatar} alt={player2Stats.name} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        
        {/* Set Score */}
        <div className="bg-[#0A2B3D] px-3 py-2 rounded-lg flex items-center justify-center mb-3 text-sm">
          <span className="text-white text-xs sm:text-sm mr-2">SET 1:</span>
          <span className="text-[#1a9dc3] font-bold mr-1">11</span>
          <span className="text-white/50 mr-1">-</span>
          <span className="text-primary font-bold">9</span>
        </div>
        
        {/* Stats Comparison */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-white text-xs">{player1Stats.topSpeed}</span>
            <div className="w-24 sm:w-32 h-1.5 bg-[#0A2B3D] rounded-full overflow-hidden mx-2">
              <div className="h-full bg-[#1a9dc3] rounded-full" style={{ width: '47%' }}></div>
            </div>
            <span className="text-white text-xs">{player2Stats.topSpeed}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-white text-xs">{player1Stats.shotAccuracy}</span>
            <div className="w-24 sm:w-32 h-1.5 bg-[#0A2B3D] rounded-full overflow-hidden mx-2">
              <div className="h-full bg-[#1a9dc3] rounded-full" style={{ width: '92%' }}></div>
            </div>
            <span className="text-white text-xs">{player2Stats.shotAccuracy}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-white text-xs">{player1Stats.spinRate}</span>
            <div className="w-24 sm:w-32 h-1.5 bg-[#0A2B3D] rounded-full overflow-hidden mx-2">
              <div className="h-full bg-[#1a9dc3] rounded-full" style={{ width: '45%' }}></div>
            </div>
            <span className="text-white text-xs">{player2Stats.spinRate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreboardStats;
