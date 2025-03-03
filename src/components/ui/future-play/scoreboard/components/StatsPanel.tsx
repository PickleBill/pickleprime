
import React from 'react';
import StatComparisonItem from './StatComparisonItem';
import ShotDistributionSection from './ShotDistributionSection';
import WinProbabilitySection from './WinProbabilitySection';
import { Activity, ZapIcon, Target, Clock, BarChart2, TrendingUp, Award, Users } from 'lucide-react';

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
      <div className="overflow-y-auto flex-1 space-y-6 pr-1 py-2">
        {/* Player comparison score header - modernized with glow effects */}
        <div className="relative overflow-hidden bg-gradient-to-r from-[#001a2c] to-[#00233c] px-5 py-4 rounded-xl shadow-lg border border-[#1a3b55]/70">
          {/* Subtle background glow effect */}
          <div className="absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-r from-transparent via-[#ffffff08] to-transparent blur-xl"></div>
          
          <div className="grid grid-cols-3 relative z-10">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#4CAF50] to-[#388E3C] flex items-center justify-center shadow-lg border border-[#5fcf63]/30">
                  <span className="text-white font-bold text-lg">AC</span>
                </div>
                <div>
                  <span className="text-[#4CAF50] font-bold text-4xl drop-shadow-[0_0_3px_rgba(76,175,80,0.3)]">
                    {player1Score}
                  </span>
                  <div className="text-white/90 text-sm mt-0.5 font-medium">Alex Chen</div>
                </div>
              </div>
              <span className="text-white/60 text-xs flex items-center gap-1 mt-1.5 ml-1">
                <TrendingUp className="w-3 h-3 text-green-400" />
                71% win rate
              </span>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center">
                <span className="text-white/90 text-lg font-semibold bg-[#001223] px-3 py-1 rounded-md border border-[#1a3b55]/50">SET {currentSet}</span>
                <span className="text-white/70 text-base mt-2">11 - 9</span>
              </div>
            </div>
            
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-3 justify-end">
                <div>
                  <span className="text-[#33C3F0] font-bold text-4xl drop-shadow-[0_0_3px_rgba(51,195,240,0.3)]">
                    {player2Score}
                  </span>
                  <div className="text-white/90 text-sm mt-0.5 font-medium text-right">Jordan Smith</div>
                </div>
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#33C3F0] to-[#0891b2] flex items-center justify-center shadow-lg border border-[#5addff]/30">
                  <span className="text-white font-bold text-lg">JS</span>
                </div>
              </div>
              <span className="text-white/60 text-xs flex items-center gap-1 mt-1.5 justify-end mr-1">
                <TrendingUp className="w-3 h-3 text-blue-400" />
                62% win rate
              </span>
            </div>
          </div>
        </div>
        
        {/* Current ball speed - in its own section with enhanced design */}
        <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#001a2c] to-[#001223] rounded-xl shadow-lg border border-[#1a3b55]/70 relative overflow-hidden">
          {/* Animated background pulse for high speeds */}
          {ballVelocity > 35 && (
            <div className="absolute inset-0 bg-yellow-500/5 animate-pulse"></div>
          )}
          
          <div className="p-2.5 bg-yellow-500/20 rounded-full border border-yellow-500/30">
            <ZapIcon className="w-6 h-6 text-yellow-400 animate-pulse" />
          </div>
          <span className="text-white/90 text-lg font-medium flex-1">Current ball speed</span>
          <div className="flex items-baseline">
            <span className="text-yellow-400 font-bold text-2xl">{Math.round(ballVelocity)}</span>
            <span className="text-yellow-400/80 ml-1 text-sm">mph</span>
          </div>
        </div>
        
        {/* Core Stats Group - with enhanced styling */}
        <div className="space-y-3">
          <h4 className="text-white/90 text-sm uppercase tracking-wider font-medium px-1 mb-2 flex items-center">
            <BarChart2 className="w-4 h-4 text-primary mr-2" />
            Live Performance Metrics
          </h4>
          
          <div className="grid grid-cols-1 gap-4">
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

        {/* Match Details section with enhanced styling */}
        <div className="mt-4">
          <h4 className="text-white/90 text-sm uppercase tracking-wider font-medium px-1 mb-3 flex items-center">
            <Award className="w-4 h-4 text-yellow-400 mr-2" />
            Match Insights
          </h4>
          <div className="grid grid-cols-2 gap-3">
            <MatchDetailCard 
              label="Points Won" 
              player1Value="14" 
              player2Value="12" 
              player1Color={player1Color} 
              player2Color={player2Color} 
              icon={<Award className="w-4 h-4 text-yellow-300" />}
            />
            <MatchDetailCard 
              label="Winners" 
              player1Value="8" 
              player2Value="6" 
              player1Color={player1Color} 
              player2Color={player2Color} 
              icon={<Target className="w-4 h-4 text-green-300" />}
            />
            <MatchDetailCard 
              label="Unforced Errors" 
              player1Value="4" 
              player2Value="7" 
              player1Color={player1Color} 
              player2Color={player2Color} 
              icon={<Activity className="w-4 h-4 text-red-300" />}
            />
            <MatchDetailCard 
              label="Net Play Win %" 
              player1Value="78%" 
              player2Value="65%" 
              player1Color={player1Color} 
              player2Color={player2Color}
              icon={<Users className="w-4 h-4 text-blue-300" />} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Extracted component for match detail cards with enhanced design
interface MatchDetailCardProps {
  label: string;
  player1Value: string;
  player2Value: string;
  player1Color: string;
  player2Color: string;
  icon?: React.ReactNode;
}

const MatchDetailCard: React.FC<MatchDetailCardProps> = ({ 
  label, 
  player1Value, 
  player2Value, 
  player1Color, 
  player2Color,
  icon
}) => (
  <div className="bg-gradient-to-r from-[#001a2c] to-[#001223] p-3.5 rounded-lg shadow-md border border-[#1a3b55]/50 hover:border-[#1a3b55] transition-all duration-300 group">
    <div className="flex items-center gap-2 mb-2">
      {icon && <div className="opacity-70 group-hover:opacity-100 transition-opacity">{icon}</div>}
      <span className="text-white/70 text-xs font-medium">{label}</span>
    </div>
    <div className="flex justify-between items-baseline mt-1">
      <span className="font-semibold text-base" style={{ color: player1Color }}>{player1Value}</span>
      <span className="text-white/40 text-xs">vs</span>
      <span className="font-semibold text-base" style={{ color: player2Color }}>{player2Value}</span>
    </div>
  </div>
);

export default StatsPanel;
