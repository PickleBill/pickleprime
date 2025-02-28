
import React from 'react';
import { Activity, Target, Zap, Clock, Award, BarChart2 } from 'lucide-react';
import { PlayerStats } from './types';

interface ScoreboardStatsProps {
  player1Stats: PlayerStats;
  player2Stats: PlayerStats;
}

const ScoreboardStats: React.FC<ScoreboardStatsProps> = ({ 
  player1Stats, 
  player2Stats 
}) => {
  // Vibrant color palette
  const vibrantColors = {
    primary: "#0EA5E9", // Ocean blue
    secondary: "#8B5CF6", // Vivid purple
    accent: "#F97316", // Bright orange
    success: "#10B981", // Emerald green
    warning: "#F59E0B", // Amber
    danger: "#EF4444"   // Red
  };
  
  // Generate a percentage for stat visualization
  const getPercentage = (stat1: string, stat2: string, type: 'speed' | 'accuracy' | 'spin' | 'reaction'): [number, number] => {
    // Extract numeric values from stats
    let val1 = parseFloat(stat1.replace(/[^\d.]/g, ''));
    let val2 = parseFloat(stat2.replace(/[^\d.]/g, ''));
    
    // Adjust calculation based on type (lower is better for reaction time)
    if (type === 'reaction') {
      const total = val1 + val2;
      return [Math.round((1 - val1/total) * 100), Math.round((1 - val2/total) * 100)];
    } else {
      const total = val1 + val2;
      return [Math.round((val1/total) * 100), Math.round((val2/total) * 100)];
    }
  };
  
  // Calculate comparison percentages
  const [speedP1, speedP2] = getPercentage(player1Stats.topSpeed, player2Stats.topSpeed, 'speed');
  const [accuracyP1, accuracyP2] = getPercentage(player1Stats.shotAccuracy, player2Stats.shotAccuracy, 'accuracy');
  const [spinP1, spinP2] = getPercentage(player1Stats.spinRate, player2Stats.spinRate, 'spin');
  const [reactionP1, reactionP2] = getPercentage(player1Stats.reactionTime, player2Stats.reactionTime, 'reaction');
  
  return (
    <div className="bg-navy-dark rounded-lg overflow-hidden border border-white/10">
      <div className="py-2 px-3 bg-gradient-to-r from-[#0c4a6e] to-[#0c4a6e]/80 border-b border-white/10">
        <h3 className="text-white font-medium text-sm flex items-center gap-2">
          <Award className="w-4 h-4 text-[#F97316]" />
          Player Statistics
        </h3>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#176840] ring-2 ring-[#176840]/30">
              <img 
                src={player1Stats.avatar} 
                alt={player1Stats.name} 
                className="w-full h-full object-cover" 
              />
            </div>
            <div>
              <div className="text-white text-sm font-semibold">{player1Stats.name}</div>
              <div className="text-[#176840] text-xs">{player1Stats.winRate} win rate</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div>
              <div className="text-white text-sm font-semibold text-right">{player2Stats.name}</div>
              <div className="text-[#0A4D73] text-xs text-right">{player2Stats.winRate} win rate</div>
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#0A4D73] ring-2 ring-[#0A4D73]/30">
              <img 
                src={player2Stats.avatar} 
                alt={player2Stats.name} 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          {/* Top Speed Comparison */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[#176840] text-xs font-medium">{player1Stats.topSpeed}</span>
              <div className="flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-[#F97316]" />
                <span className="text-white/80 text-xs font-medium">Top Speed</span>
              </div>
              <span className="text-[#0A4D73] text-xs font-medium">{player2Stats.topSpeed}</span>
            </div>
            <div className="h-2.5 bg-navy/80 rounded-full overflow-hidden flex">
              <div 
                className="h-full bg-gradient-to-r from-[#176840]/70 to-[#176840]"
                style={{ width: `${speedP1}%` }}
              ></div>
              <div 
                className="h-full bg-gradient-to-l from-[#0A4D73]/70 to-[#0A4D73]"
                style={{ width: `${speedP2}%` }}
              ></div>
            </div>
          </div>
          
          {/* Shot Accuracy Comparison */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[#176840] text-xs font-medium">{player1Stats.shotAccuracy}</span>
              <div className="flex items-center gap-1">
                <Target className="w-3.5 h-3.5 text-[#8B5CF6]" />
                <span className="text-white/80 text-xs font-medium">Accuracy</span>
              </div>
              <span className="text-[#0A4D73] text-xs font-medium">{player2Stats.shotAccuracy}</span>
            </div>
            <div className="h-2.5 bg-navy/80 rounded-full overflow-hidden flex">
              <div 
                className="h-full bg-gradient-to-r from-[#176840]/70 to-[#176840]"
                style={{ width: `${accuracyP1}%` }}
              ></div>
              <div 
                className="h-full bg-gradient-to-l from-[#0A4D73]/70 to-[#0A4D73]"
                style={{ width: `${accuracyP2}%` }}
              ></div>
            </div>
          </div>
          
          {/* Spin Rate Comparison */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[#176840] text-xs font-medium">{player1Stats.spinRate}</span>
              <div className="flex items-center gap-1">
                <Activity className="w-3.5 h-3.5 text-[#0EA5E9]" />
                <span className="text-white/80 text-xs font-medium">Spin Rate</span>
              </div>
              <span className="text-[#0A4D73] text-xs font-medium">{player2Stats.spinRate}</span>
            </div>
            <div className="h-2.5 bg-navy/80 rounded-full overflow-hidden flex">
              <div 
                className="h-full bg-gradient-to-r from-[#176840]/70 to-[#176840]"
                style={{ width: `${spinP1}%` }}
              ></div>
              <div 
                className="h-full bg-gradient-to-l from-[#0A4D73]/70 to-[#0A4D73]"
                style={{ width: `${spinP2}%` }}
              ></div>
            </div>
          </div>
          
          {/* Reaction Time Comparison */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[#176840] text-xs font-medium">{player1Stats.reactionTime}</span>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#D946EF]" />
                <span className="text-white/80 text-xs font-medium">Reaction</span>
              </div>
              <span className="text-[#0A4D73] text-xs font-medium">{player2Stats.reactionTime}</span>
            </div>
            <div className="h-2.5 bg-navy/80 rounded-full overflow-hidden flex">
              <div 
                className="h-full bg-gradient-to-r from-[#176840]/70 to-[#176840]"
                style={{ width: `${reactionP1}%` }}
              ></div>
              <div 
                className="h-full bg-gradient-to-l from-[#0A4D73]/70 to-[#0A4D73]"
                style={{ width: `${reactionP2}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        {/* New feature: Shot Type Distribution */}
        <div className="mt-5 pt-4 border-t border-white/10">
          <div className="flex items-center gap-1 mb-2">
            <BarChart2 className="w-3.5 h-3.5 text-[#F97316]" />
            <h4 className="text-white/90 text-xs font-medium">Shot Distribution</h4>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-navy/50 rounded p-2 text-center">
              <div className="text-[#F97316] text-lg font-bold">67%</div>
              <div className="text-white/70 text-xs">Dinks</div>
            </div>
            <div className="bg-navy/50 rounded p-2 text-center">
              <div className="text-[#8B5CF6] text-lg font-bold">23%</div>
              <div className="text-white/70 text-xs">Drives</div>
            </div>
            <div className="bg-navy/50 rounded p-2 text-center">
              <div className="text-[#0EA5E9] text-lg font-bold">10%</div>
              <div className="text-white/70 text-xs">Volleys</div>
            </div>
          </div>
        </div>
        
        {/* New feature: Win Probability */}
        <div className="mt-4 bg-navy/50 rounded-lg p-3">
          <div className="flex justify-between items-center mb-1">
            <span className="text-[#176840] text-xs">{player1Stats.name}</span>
            <span className="text-white/80 text-xs font-medium">Win Probability</span>
            <span className="text-[#0A4D73] text-xs">{player2Stats.name}</span>
          </div>
          <div className="h-4 bg-navy/80 rounded-full overflow-hidden flex">
            <div className="h-full bg-gradient-to-r from-[#176840]/70 to-[#176840] flex items-center justify-end px-1.5" style={{ width: '65%' }}>
              <span className="text-white text-[10px] font-bold">65%</span>
            </div>
            <div className="h-full bg-gradient-to-l from-[#0A4D73]/70 to-[#0A4D73] flex items-center justify-start px-1.5" style={{ width: '35%' }}>
              <span className="text-white text-[10px] font-bold">35%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreboardStats;
