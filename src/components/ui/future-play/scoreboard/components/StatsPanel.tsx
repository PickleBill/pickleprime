
import React from "react";
import { BarChart2, Clock, Zap, Activity } from "lucide-react";
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
  return (
    <div className="bg-navy-dark rounded-lg overflow-hidden border border-navy/20 shadow-lg">
      <div className="py-2 px-3 bg-gradient-to-r from-primary to-primary-dark text-white">
        <h3 className="font-medium text-sm">MATCH STATISTICS</h3>
      </div>
      
      <div className="p-4">
        {/* Players and Score */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary ring-2 ring-primary/30">
              <img 
                src={player1Stats.avatar} 
                alt={player1Stats.name} 
                className="w-full h-full object-cover" 
              />
            </div>
            <div>
              <div className="text-white text-sm font-semibold">{player1Stats.name}</div>
              <div className="text-primary text-xs">{player1Stats.winRate} win rate</div>
            </div>
          </div>
          
          <div className="flex items-center gap-1">
            <span className="text-primary text-4xl font-bold">{player1Score}</span>
            <span className="text-white/50 text-xl">-</span>
            <span className="text-[#0EA5E9] text-4xl font-bold">{player2Score}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <div>
              <div className="text-white text-sm font-semibold text-right">{player2Stats.name}</div>
              <div className="text-[#0EA5E9] text-xs text-right">{player2Stats.winRate} win rate</div>
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#0EA5E9] ring-2 ring-[#0EA5E9]/30">
              <img 
                src={player2Stats.avatar} 
                alt={player2Stats.name} 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
        
        {/* Current Set */}
        <div className="flex justify-center mb-6 text-white/70">
          <div className="px-3 py-1 rounded-full bg-navy/40 border border-white/10">
            <span className="text-sm">SET {currentSet}: <span className="text-primary-foreground font-medium">11</span> - <span className="text-primary-foreground font-medium">9</span></span>
          </div>
        </div>
        
        {/* Stats Comparisons */}
        <div className="space-y-6">
          {/* Top Speed */}
          <div className="grid grid-cols-3 items-center">
            <div className="text-primary text-xl font-semibold">47 mph</div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 mb-1">
                <Zap className="w-4 h-4 text-[#F97316]" />
                <span className="text-white/80 text-xs uppercase">Top Speed</span>
              </div>
              <div className="px-2 py-0.5 rounded-full bg-navy-light/40 text-white/50 text-xs">vs</div>
            </div>
            <div className="text-[#0EA5E9] text-xl font-semibold text-right">52 mph</div>
          </div>
          
          {/* Accuracy */}
          <div className="grid grid-cols-3 items-center">
            <div className="text-primary text-xl font-semibold">92%</div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 mb-1">
                <div className="w-4 h-4 flex items-center justify-center rounded-full border border-[#D946EF] text-[#D946EF]">●</div>
                <span className="text-white/80 text-xs uppercase">Accuracy</span>
              </div>
              <div className="px-2 py-0.5 rounded-full bg-navy-light/40 text-white/50 text-xs">vs</div>
            </div>
            <div className="text-[#0EA5E9] text-xl font-semibold text-right">88%</div>
          </div>
          
          {/* Spin Rate */}
          <div className="grid grid-cols-3 items-center">
            <div className="text-primary text-xl font-semibold">1800 rpm</div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 mb-1">
                <Activity className="w-4 h-4 text-[#0EA5E9]" />
                <span className="text-white/80 text-xs uppercase">Spin Rate</span>
              </div>
              <div className="px-2 py-0.5 rounded-full bg-navy-light/40 text-white/50 text-xs">vs</div>
            </div>
            <div className="text-[#0EA5E9] text-xl font-semibold text-right">2100 rpm</div>
          </div>
          
          {/* Reaction Time */}
          <div className="grid grid-cols-3 items-center">
            <div className="text-primary text-xl font-semibold">0.4s</div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 mb-1">
                <Clock className="w-4 h-4 text-[#D946EF]" />
                <span className="text-white/80 text-xs uppercase">Reaction</span>
              </div>
              <div className="px-2 py-0.5 rounded-full bg-navy-light/40 text-white/50 text-xs">vs</div>
            </div>
            <div className="text-[#0EA5E9] text-xl font-semibold text-right">0.5s</div>
          </div>
        </div>
        
        {/* Shot Distribution */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-white/90 text-sm font-medium">Shot Distribution</h4>
            <BarChart2 className="w-3.5 h-3.5 text-white/50" />
          </div>
          
          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-white/70 text-xs">Dinks</span>
                <span className="text-white/90 text-xs">65%</span>
              </div>
              <div className="h-2 bg-navy/80 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary-dark to-primary" style={{ width: '65%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-white/70 text-xs">Drives</span>
                <span className="text-white/90 text-xs">24%</span>
              </div>
              <div className="h-2 bg-navy/80 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#0A4D73] to-[#0EA5E9]" style={{ width: '24%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-white/70 text-xs">Volleys</span>
                <span className="text-white/90 text-xs">11%</span>
              </div>
              <div className="h-2 bg-navy/80 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#F97316] to-[#FDBA74]" style={{ width: '11%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Win Probability */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-white/90 text-sm font-medium">Win Probability</h4>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <div className="w-2 h-2 rounded-full bg-[#0EA5E9]"></div>
            </div>
          </div>
          
          <div className="flex items-center text-xs text-white/70 mb-1">
            <span className="flex-1">Team Green</span>
            <span className="flex-1 text-right">Team Blue</span>
          </div>
          
          <div className="h-5 bg-navy/80 rounded-full overflow-hidden flex">
            <div className="h-full bg-gradient-to-r from-primary-dark to-primary flex items-center justify-end px-1.5" style={{ width: '65%' }}>
              <span className="text-white text-[10px] font-bold">65%</span>
            </div>
            <div className="h-full bg-gradient-to-r from-[#3182CE] to-[#0EA5E9] flex items-center justify-start px-1.5" style={{ width: '35%' }}>
              <span className="text-white text-[10px] font-bold">35%</span>
            </div>
          </div>
        </div>
        
        {/* Footer Stats Summary */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs">
          <div className="flex-1 flex items-center bg-navy-light/30 rounded-full px-3 py-1.5">
            <Zap className="w-3 h-3 mr-1 text-[#F97316]" />
            <span className="text-white/80">Current ball speed: <span className="text-white font-medium">{Math.round(ballVelocity)} mph</span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPanel;
