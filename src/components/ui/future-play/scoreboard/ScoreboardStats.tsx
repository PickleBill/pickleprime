
import React from 'react';
import { Activity, Target, Zap, Clock, Award, BarChart2 } from 'lucide-react';
import { PlayerStats } from './types';
import PlayerAvatar from './components/PlayerAvatar';
import StatComparison from './components/StatComparison';
import ShotDistribution from './components/ShotDistribution';
import WinProbabilityBar from './components/WinProbabilityBar';

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
  
  // Shot distributions data
  const shotDistributions = [
    {
      label: "Dinks",
      percentage: 67,
      gradientFrom: "#176840",
      gradientTo: "#3DD598"
    },
    {
      label: "Drives",
      percentage: 23,
      gradientFrom: "#0A4D73",
      gradientTo: "#0EA5E9"
    },
    {
      label: "Volleys",
      percentage: 10,
      gradientFrom: "#F97316",
      gradientTo: "#FDBA74"
    }
  ];
  
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
          <PlayerAvatar
            name={player1Stats.name}
            avatar={player1Stats.avatar}
            winRate={player1Stats.winRate}
            color="#176840"
          />
          
          <PlayerAvatar
            name={player2Stats.name}
            avatar={player2Stats.avatar}
            winRate={player2Stats.winRate}
            color="#0A4D73"
            rightAlign
          />
        </div>
        
        <div className="space-y-4">
          {/* Top Speed Comparison - higher is better */}
          <StatComparison
            player1Value={player1Stats.topSpeed}
            player2Value={player2Stats.topSpeed}
            label="Top Speed"
            icon={<Zap className="w-3.5 h-3.5 text-[#F97316]" />}
            color={vibrantColors.accent}
            highestValueWins={true}
          />
          
          {/* Shot Accuracy Comparison - higher is better */}
          <StatComparison
            player1Value={player1Stats.accuracy}
            player2Value={player2Stats.accuracy}
            label="Accuracy"
            icon={<Target className="w-3.5 h-3.5 text-[#8B5CF6]" />}
            color={vibrantColors.secondary}
            highestValueWins={true}
          />
          
          {/* Spin Rate Comparison - higher is better */}
          <StatComparison
            player1Value={player1Stats.spinRate}
            player2Value={player2Stats.spinRate}
            label="Spin Rate"
            icon={<Activity className="w-3.5 h-3.5 text-[#0EA5E9]" />}
            color={vibrantColors.primary}
            highestValueWins={true}
          />
          
          {/* Reaction Time Comparison - lower is better */}
          <StatComparison
            player1Value={player1Stats.reactionTime}
            player2Value={player2Stats.reactionTime}
            label="Reaction"
            icon={<Clock className="w-3.5 h-3.5 text-[#D946EF]" />}
            color="#D946EF"
            highestValueWins={false}
          />
        </div>
        
        {/* Shot Type Distribution */}
        <div className="mt-5 pt-4 border-t border-white/10">
          <ShotDistribution distributions={shotDistributions} />
        </div>
        
        {/* Win Probability */}
        <div className="mt-4 bg-navy/50 rounded-lg p-3">
          <WinProbabilityBar
            team1Probability={65}
            team2Probability={35}
            team1Label={player1Stats.name}
            team2Label={player2Stats.name}
          />
        </div>
      </div>
    </div>
  );
};

export default ScoreboardStats;
