
import React from 'react';
import { Activity, Zap, Target } from 'lucide-react';

interface PlayerStats {
  name: string;
  avatar: string;
  topSpeed: string;
  shotAccuracy: string;
  spinRate: string;
  winRate?: string;
  reactionTime?: string;
  stamina?: string;
}

interface ScoreboardStatsProps {
  player1Stats: PlayerStats;
  player2Stats: PlayerStats;
  expanded?: boolean;
}

const ScoreboardStats: React.FC<ScoreboardStatsProps> = ({
  player1Stats,
  player2Stats,
  expanded = false
}) => {
  // Determine if we should show the expanded desktop view
  const isExpanded = expanded;

  return (
    <div className="bg-[#092435] rounded-lg overflow-hidden border border-[#1A4258]/50 flex flex-col h-full">
      <div className="bg-[#0C8068] py-1.5 px-3 uppercase text-white font-semibold text-xs sm:text-sm">
        {isExpanded ? "Match Statistics" : "Live Scoreboard"}
      </div>
      
      <div className="p-2 sm:p-4 flex flex-col flex-1 overflow-auto">
        {/* Score Display - Desktop */}
        {isExpanded ? (
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#1a9dc3]">
                <img src={player1Stats.avatar} alt={player1Stats.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">{player1Stats.name}</h3>
                <div className="flex items-center gap-1 text-[#1a9dc3]/80 text-xs">
                  <Activity className="w-3 h-3" />
                  <span>Win Rate: {player1Stats.winRate || "78%"}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-5">
              <span className="text-[#1a9dc3] text-5xl font-bold">9</span>
              <span className="text-white/50 text-2xl">-</span>
              <span className="text-primary text-5xl font-bold">5</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div>
                <h3 className="text-white font-semibold mb-1 text-right">{player2Stats.name}</h3>
                <div className="flex items-center justify-end gap-1 text-primary/80 text-xs">
                  <Activity className="w-3 h-3" />
                  <span>Win Rate: {player2Stats.winRate || "71%"}</span>
                </div>
              </div>
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                <img src={player2Stats.avatar} alt={player2Stats.name} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Desktop View - Non-expanded */}
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
            <div className="flex sm:hidden items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-full overflow-hidden border-[1.5px] border-[#1a9dc3]">
                  <img src={player1Stats.avatar} alt={player1Stats.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-white text-xs">{player1Stats.name}</span>
              </div>
              
              <div className="flex items-center gap-1.5">
                <span className="text-white text-xs">{player2Stats.name}</span>
                <div className="w-6 h-6 rounded-full overflow-hidden border-[1.5px] border-primary">
                  <img src={player2Stats.avatar} alt={player2Stats.name} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </>
        )}
        
        {/* Set Score */}
        <div className="bg-[#0A2B3D] px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg flex items-center justify-center mb-2 sm:mb-4">
          <span className="text-white text-xs sm:text-sm mr-2">SET 1:</span>
          <span className="text-[#1a9dc3] font-bold text-sm sm:text-base mr-1">11</span>
          <span className="text-white/50 mr-1">-</span>
          <span className="text-primary font-bold text-sm sm:text-base">9</span>
        </div>
        
        {isExpanded ? (
          <>
            {/* Extended Stats for expanded view */}
            <div className="grid grid-cols-2 gap-4 my-4">
              <div className="bg-[#0A2B3D] p-3 rounded">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-[#1a9dc3]" />
                  <span className="text-white/70 text-xs uppercase">Top Speed</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#1a9dc3] font-bold">{player1Stats.topSpeed}</span>
                  <span className="text-white/50 text-xs">vs</span>
                  <span className="text-primary font-bold">{player2Stats.topSpeed}</span>
                </div>
              </div>
              
              <div className="bg-[#0A2B3D] p-3 rounded">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-[#1a9dc3]" />
                  <span className="text-white/70 text-xs uppercase">Accuracy</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#1a9dc3] font-bold">{player1Stats.shotAccuracy}</span>
                  <span className="text-white/50 text-xs">vs</span>
                  <span className="text-primary font-bold">{player2Stats.shotAccuracy}</span>
                </div>
              </div>
              
              <div className="bg-[#0A2B3D] p-3 rounded">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-4 h-4 text-[#1a9dc3]" />
                  <span className="text-white/70 text-xs uppercase">Spin Rate</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#1a9dc3] font-bold">{player1Stats.spinRate}</span>
                  <span className="text-white/50 text-xs">vs</span>
                  <span className="text-primary font-bold">{player2Stats.spinRate}</span>
                </div>
              </div>
              
              <div className="bg-[#0A2B3D] p-3 rounded">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-[#1a9dc3]" />
                  <span className="text-white/70 text-xs uppercase">Reaction Time</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#1a9dc3] font-bold">{player1Stats.reactionTime || "0.4s"}</span>
                  <span className="text-white/50 text-xs">vs</span>
                  <span className="text-primary font-bold">{player2Stats.reactionTime || "0.5s"}</span>
                </div>
              </div>
            </div>
            
            {/* Shot Distribution Chart - Placeholder for expanded view */}
            <div className="mt-4">
              <h3 className="text-white text-sm font-semibold mb-2">Shot Distribution</h3>
              <div className="bg-[#0A2B3D] rounded p-4 flex items-center justify-center">
                <div className="w-full">
                  {/* Shot types */}
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/70 text-xs">Dinks</span>
                    <span className="text-white/70 text-xs">65%</span>
                  </div>
                  <div className="w-full h-2 bg-[#061620] rounded-full mb-3">
                    <div className="h-full bg-[#1a9dc3] rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/70 text-xs">Drives</span>
                    <span className="text-white/70 text-xs">24%</span>
                  </div>
                  <div className="w-full h-2 bg-[#061620] rounded-full mb-3">
                    <div className="h-full bg-primary rounded-full" style={{ width: '24%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/70 text-xs">Volleys</span>
                    <span className="text-white/70 text-xs">11%</span>
                  </div>
                  <div className="w-full h-2 bg-[#061620] rounded-full">
                    <div className="h-full bg-[#e89e25] rounded-full" style={{ width: '11%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Win Probability */}
            <div className="mt-6 bg-[#0A2B3D] rounded p-3">
              <h3 className="text-white text-sm font-semibold mb-2">Win Probability</h3>
              <div className="flex items-center">
                <div className="flex-1 text-[#1a9dc3] font-bold text-right pr-2">Alex</div>
                <div className="w-40 h-3 bg-[#061620] rounded-full overflow-hidden">
                  <div className="h-full bg-[#1a9dc3] rounded-l-full" style={{ width: '65%' }}></div>
                  <div className="h-full bg-primary rounded-r-full absolute right-0" style={{ width: '35%' }}></div>
                </div>
                <div className="flex-1 text-primary font-bold pl-2">Jordan</div>
              </div>
              <div className="flex justify-center mt-1">
                <span className="text-white/70 text-xs">65% - 35%</span>
              </div>
            </div>
          </>
        ) : (
          // Standard Stats Comparison for non-expanded view
          <div className="space-y-1.5 sm:space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-white text-xs">{player1Stats.topSpeed}</span>
              <div className="w-16 sm:w-24 md:w-32 h-1 sm:h-1.5 bg-[#0A2B3D] rounded-full overflow-hidden mx-2">
                <div className="h-full bg-[#1a9dc3] rounded-full" style={{ width: '47%' }}></div>
              </div>
              <span className="text-white text-xs">{player2Stats.topSpeed}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-white text-xs">{player1Stats.shotAccuracy}</span>
              <div className="w-16 sm:w-24 md:w-32 h-1 sm:h-1.5 bg-[#0A2B3D] rounded-full overflow-hidden mx-2">
                <div className="h-full bg-[#1a9dc3] rounded-full" style={{ width: '92%' }}></div>
              </div>
              <span className="text-white text-xs">{player2Stats.shotAccuracy}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-white text-xs">{player1Stats.spinRate}</span>
              <div className="w-16 sm:w-24 md:w-32 h-1 sm:h-1.5 bg-[#0A2B3D] rounded-full overflow-hidden mx-2">
                <div className="h-full bg-[#1a9dc3] rounded-full" style={{ width: '45%' }}></div>
              </div>
              <span className="text-white text-xs">{player2Stats.spinRate}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScoreboardStats;
