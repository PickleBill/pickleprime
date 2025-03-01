
import React, { useState } from "react";
import { 
  ChevronLeft, Activity, Trophy, 
  Clock, Zap, BarChart2, Share2, Video, User
} from "lucide-react";
import ScoreboardHeader from "./ScoreboardHeader";
import ScoreboardFooter from "./ScoreboardFooter";
import HighlightView from "./HighlightView";
import CourtView from "./CourtView";
import MatchFeed from "./MatchFeed";
import ScoreboardStats from "./ScoreboardStats";
import { MobileScoreboardViewProps } from "./types";
import PlayerModal from "../../PlayerModal";

const MobileScoreboardView: React.FC<MobileScoreboardViewProps> = ({
  onBackClick,
  onHighlightClick,
  showHighlight,
  highlightTimer,
  gameTime,
  player1Score,
  player2Score,
  currentSet,
  ballPosition,
  ballTrajectory,
  ballVelocity,
  player1,
  player2,
  player3,
  player4,
  player1Stats,
  player2Stats,
  matchFeedItems,
  sponsors
}) => {
  const [showPlayerModal, setShowPlayerModal] = useState(false);
  
  // If highlight is shown, display the highlight view
  if (showHighlight) {
    return (
      <HighlightView 
        highlightTimer={highlightTimer}
        onBackClick={onBackClick}
      />
    );
  }
  
  return (
    <div className="flex flex-col h-full">
      {/* Player Modal */}
      <PlayerModal 
        isOpen={showPlayerModal} 
        onClose={() => setShowPlayerModal(false)} 
      />
      
      {/* Top sponsors bar with light purple background */}
      <div className="w-full px-4 py-2 bg-[#E5DEFF] flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-[#F97316]" />
          <span className="text-navy-dark/80 text-sm font-medium">LIVE</span>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1 text-navy-dark/70 text-xs">
            <span>SPONSORED BY</span>
          </div>
          <div className="flex items-center gap-5">
            <img 
              src="/lovable-uploads/f4783ae6-927e-4dc0-a01c-3cb8466f4062.png" 
              alt="Joola" 
              className="h-7 w-auto object-contain"
            />
            <img 
              src="/lovable-uploads/73338dad-0d30-4c2b-a39b-b4c1f13ebe72.png" 
              alt="Fanatics" 
              className="h-7 w-auto object-contain"
            />
          </div>
        </div>
      </div>
      
      {/* Header with back button, live indicator and time */}
      <ScoreboardHeader 
        onBackClick={onBackClick}
        gameTime={gameTime}
        player1Score={player1Score}
        player2Score={player2Score}
        currentSet={currentSet}
      />
      
      {/* Main content - 50/50 split */}
      <div className="flex-1 grid grid-cols-2 gap-4 p-4 overflow-y-auto">
        {/* Left Panel - Scoreboard Stats */}
        <div className="bg-navy-dark rounded-lg overflow-hidden border border-white/10 shadow-lg">
          <div className="py-2 px-3 bg-[#00A67E] text-white">
            <h3 className="font-medium text-sm">MATCH STATISTICS</h3>
          </div>
          
          <div className="p-4">
            {/* Players and Score */}
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
              
              <div className="flex items-center gap-1">
                <span className="text-[#176840] text-4xl font-bold">{player1Score}</span>
                <span className="text-white/50 text-xl">-</span>
                <span className="text-[#0A4D73] text-4xl font-bold">{player2Score}</span>
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
            
            {/* Current Set */}
            <div className="flex justify-center mb-6 text-white/70">
              <span className="text-sm">SET {currentSet}: <span className="text-[#5eead4]">11</span> - <span className="text-[#5eead4]">9</span></span>
            </div>
            
            {/* Stats Comparisons */}
            <div className="space-y-6">
              {/* Top Speed */}
              <div className="grid grid-cols-3 items-center">
                <div className="text-[#176840] text-xl font-semibold">47 mph</div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-1 mb-1">
                    <Zap className="w-4 h-4 text-[#F97316]" />
                    <span className="text-white/80 text-xs uppercase">Top Speed</span>
                  </div>
                  <span className="text-white/50 text-xs">vs</span>
                </div>
                <div className="text-[#0A4D73] text-xl font-semibold text-right">52 mph</div>
              </div>
              
              {/* Accuracy */}
              <div className="grid grid-cols-3 items-center">
                <div className="text-[#176840] text-xl font-semibold">92%</div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-1 mb-1">
                    <div className="w-4 h-4 flex items-center justify-center rounded-full border border-[#8B5CF6] text-[#8B5CF6]">●</div>
                    <span className="text-white/80 text-xs uppercase">Accuracy</span>
                  </div>
                  <span className="text-white/50 text-xs">vs</span>
                </div>
                <div className="text-[#0A4D73] text-xl font-semibold text-right">88%</div>
              </div>
              
              {/* Spin Rate */}
              <div className="grid grid-cols-3 items-center">
                <div className="text-[#176840] text-xl font-semibold">1800 rpm</div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-1 mb-1">
                    <Activity className="w-4 h-4 text-[#0EA5E9]" />
                    <span className="text-white/80 text-xs uppercase">Spin Rate</span>
                  </div>
                  <span className="text-white/50 text-xs">vs</span>
                </div>
                <div className="text-[#0A4D73] text-xl font-semibold text-right">2100 rpm</div>
              </div>
              
              {/* Reaction Time */}
              <div className="grid grid-cols-3 items-center">
                <div className="text-[#176840] text-xl font-semibold">0.4s</div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-1 mb-1">
                    <Clock className="w-4 h-4 text-[#D946EF]" />
                    <span className="text-white/80 text-xs uppercase">Reaction</span>
                  </div>
                  <span className="text-white/50 text-xs">vs</span>
                </div>
                <div className="text-[#0A4D73] text-xl font-semibold text-right">0.5s</div>
              </div>
            </div>
            
            {/* Shot Distribution */}
            <div className="mt-6">
              <h4 className="text-white/90 text-sm mb-2">Shot Distribution</h4>
              
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white/70 text-xs">Dinks</span>
                    <span className="text-white/90 text-xs">65%</span>
                  </div>
                  <div className="h-2 bg-navy/80 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#176840] to-[#3DD598]" style={{ width: '65%' }}></div>
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
              <h4 className="text-white/90 text-sm mb-2">Win Probability</h4>
              
              <div className="flex items-center text-xs text-white/70 mb-1">
                <span className="flex-1">Team Green</span>
                <span className="flex-1 text-right">Team Blue</span>
              </div>
              
              <div className="h-4 bg-navy/80 rounded-full overflow-hidden flex">
                <div className="h-full bg-gradient-to-r from-[#176840] to-[#3DD598] flex items-center justify-end px-1.5" style={{ width: '65%' }}>
                  <span className="text-white text-[10px] font-bold">65%</span>
                </div>
                <div className="h-full bg-gradient-to-r from-[#3182CE] to-[#0A4D73] flex items-center justify-start px-1.5" style={{ width: '35%' }}>
                  <span className="text-white text-[10px] font-bold">35%</span>
                </div>
              </div>
            </div>
            
            {/* Footer Stats Summary */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center text-xs text-white/60">
              <Zap className="w-3 h-3 mr-1 text-[#F97316]" />
              <span>Current ball speed: {Math.round(ballVelocity)} mph</span>
            </div>
          </div>
        </div>
        
        {/* Right Panel with Court View (60%) and Match Feed (40%) */}
        <div className="flex flex-col h-full space-y-4">
          {/* Court View Panel - 60% height (with updated background color) */}
          <div className="bg-[#0EA5E9] rounded-lg overflow-hidden border border-white/10 shadow-lg flex-2" style={{ height: "60%" }}>
            <div className="py-2 px-3 bg-[#0C8068] text-white flex items-center justify-between">
              <h3 className="font-medium text-sm">TEAM GREEN</h3>
              <div className="text-right text-xs text-white/70">vs</div>
              <div className="text-right text-xs text-white font-medium">TEAM BLUE</div>
            </div>
            
            <div className="p-3 h-full flex items-center justify-center">
              <CourtView 
                ballPosition={ballPosition}
                ballTrajectory={ballTrajectory}
                ballVelocity={ballVelocity}
                player1={player1}
                player2={player2}
                player3={player3}
                player4={player4}
              />
            </div>
          </div>
          
          {/* Match Feed Panel - 40% height */}
          <div className="bg-navy-dark rounded-lg overflow-hidden border border-white/10 shadow-lg flex-1" style={{ height: "40%" }}>
            <div className="py-2 px-3 bg-[#1E3A8A] text-white flex items-center justify-between">
              <h3 className="font-medium text-sm">MATCH FEED</h3>
              <div className="flex items-center gap-2">
                <button className="p-1 rounded bg-navy/50 text-white/70 hover:bg-navy/70 transition-colors">
                  <BarChart2 className="w-4 h-4" />
                </button>
                <button className="p-1 rounded bg-navy/50 text-white/70 hover:bg-navy/70 transition-colors">
                  <Activity className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="overflow-y-auto" style={{ maxHeight: "calc(100% - 40px)" }}>
              <MatchFeed matchFeedItems={matchFeedItems} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer with actions - increased height, larger buttons */}
      <div className="w-full bg-navy-light/60 backdrop-blur-sm border-t border-white/10 px-3 py-6">
        <div className="flex items-center justify-center gap-6">
          <button 
            onClick={onHighlightClick}
            className="flex items-center gap-2 py-3 px-6 bg-[#0C8068] text-white rounded-md text-base font-medium hover:bg-[#0C8068]/90 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <Video className="w-5 h-5" />
            <span>View Highlights</span>
          </button>
          
          <button 
            onClick={() => setShowPlayerModal(true)}
            className="flex items-center gap-2 py-3 px-6 bg-[#0FA0CE] text-white rounded-md text-base font-medium hover:bg-[#0FA0CE]/90 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <User className="w-5 h-5" />
            <span>Player Profile</span>
          </button>
          
          <button className="p-3 rounded-full bg-navy/70 text-white/80 hover:bg-navy/90 hover:text-white transition-colors">
            <Share2 className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileScoreboardView;
