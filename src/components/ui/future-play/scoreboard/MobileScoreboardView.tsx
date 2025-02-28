
import React from 'react';
import ScoreboardHeader from './ScoreboardHeader';
import ScoreboardStats from './ScoreboardStats';
import MatchFeed from './MatchFeed';
import CourtView from './CourtView';
import HighlightView from './HighlightView';
import ScoreboardFooter from './ScoreboardFooter';
import { MobileScoreboardProps } from './types';
import { Activity, Users2, BarChart2, Heart, Video } from 'lucide-react';

const MobileScoreboardView: React.FC<MobileScoreboardProps> = ({
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
  // Team colors
  const greenTeamColor = "#176840"; // Darker green
  const blueTeamColor = "#0A4D73"; // Darker blue
  
  // Carolina blue court color
  const carolinaBlue = "#33C3F0";

  if (showHighlight) {
    return (
      <HighlightView 
        highlightTimer={highlightTimer} 
      />
    );
  }

  return (
    <div className="flex flex-col h-full bg-navy-darker text-white">
      {/* Top header with back button, title, and game details */}
      <ScoreboardHeader 
        onBackClick={onBackClick} 
        player1Score={player1Score}
        player2Score={player2Score}
        gameTime={gameTime}
        currentSet={currentSet}
        player1Avatar={player1Stats.avatar}
        player2Avatar={player2Stats.avatar}
        player1Name={player1Stats.name}
        player2Name={player2Stats.name}
      />
      
      {/* Main content - side by side on desktop, stacked on mobile */}
      <div className="flex-1 flex flex-col lg:flex-row p-3 gap-3 overflow-hidden">
        {/* Left Column - Match Statistics */}
        <div className="lg:w-1/2 bg-navy-dark rounded-lg overflow-hidden border border-white/10 flex flex-col">
          <div className="py-2 px-3 bg-[#0C8068] font-medium text-sm uppercase">
            Match Statistics
          </div>
          
          <div className="p-4 flex-1 flex flex-col">
            {/* Player Avatars and Score */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#176840]">
                  <img src={player1Stats.avatar} alt={player1Stats.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{player1Stats.name}</h3>
                  <div className="flex items-center gap-1 text-[#176840]/80 text-xs">
                    <Activity className="w-3 h-3" />
                    <span>Win Rate: {player1Stats.winRate}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-5">
                <span className="text-[#176840] text-5xl font-bold">{player1Score}</span>
                <span className="text-white/50 text-2xl">-</span>
                <span className="text-[#0A4D73] text-5xl font-bold">{player2Score}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div>
                  <h3 className="text-white font-semibold text-right">{player2Stats.name}</h3>
                  <div className="flex items-center justify-end gap-1 text-[#0A4D73]/80 text-xs">
                    <Activity className="w-3 h-3" />
                    <span>Win Rate: {player2Stats.winRate}</span>
                  </div>
                </div>
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#0A4D73]">
                  <img src={player2Stats.avatar} alt={player2Stats.name} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            
            {/* Set Score */}
            <div className="text-center mb-6">
              <span className="text-white mr-2">SET 1:</span>
              <span className="text-[#176840] font-bold">11</span>
              <span className="text-white/50 mx-1">-</span>
              <span className="text-[#0A4D73] font-bold">9</span>
            </div>
            
            {/* Stats Comparison Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-4 h-4 text-[#1a9dc3]" />
                  <span className="text-white/70 text-xs uppercase">Top Speed</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#176840] font-bold">{player1Stats.topSpeed}</span>
                  <span className="text-white/50 text-xs">vs</span>
                  <span className="text-[#0A4D73] font-bold">{player2Stats.topSpeed}</span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-4 h-4 text-[#1a9dc3]" />
                  <span className="text-white/70 text-xs uppercase">Accuracy</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#176840] font-bold">{player1Stats.shotAccuracy}</span>
                  <span className="text-white/50 text-xs">vs</span>
                  <span className="text-[#0A4D73] font-bold">{player2Stats.shotAccuracy}</span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-4 h-4 text-[#1a9dc3]" />
                  <span className="text-white/70 text-xs uppercase">Spin Rate</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#176840] font-bold">{player1Stats.spinRate}</span>
                  <span className="text-white/50 text-xs">vs</span>
                  <span className="text-[#0A4D73] font-bold">{player2Stats.spinRate}</span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-4 h-4 text-[#1a9dc3]" />
                  <span className="text-white/70 text-xs uppercase">Reaction Time</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#176840] font-bold">{player1Stats.reactionTime}</span>
                  <span className="text-white/50 text-xs">vs</span>
                  <span className="text-[#0A4D73] font-bold">{player2Stats.reactionTime}</span>
                </div>
              </div>
            </div>
            
            {/* Shot Distribution */}
            <div className="mb-6">
              <h3 className="text-white text-sm font-semibold mb-2">Shot Distribution</h3>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white/70 text-xs">Dinks</span>
                    <span className="text-white/70 text-xs">65%</span>
                  </div>
                  <div className="w-full h-2 bg-navy-darker rounded-full">
                    <div className="h-full bg-[#176840] rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white/70 text-xs">Drives</span>
                    <span className="text-white/70 text-xs">24%</span>
                  </div>
                  <div className="w-full h-2 bg-navy-darker rounded-full">
                    <div className="h-full bg-[#0A4D73] rounded-full" style={{ width: '24%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white/70 text-xs">Volleys</span>
                    <span className="text-white/70 text-xs">11%</span>
                  </div>
                  <div className="w-full h-2 bg-navy-darker rounded-full">
                    <div className="h-full bg-[#e89e25] rounded-full" style={{ width: '11%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Win Probability */}
            <div className="mt-auto">
              <h3 className="text-white text-sm font-semibold mb-2">Win Probability</h3>
              <div className="flex items-center">
                <div className="w-20 text-[#176840] font-bold text-right pr-2">Alex</div>
                <div className="flex-1 h-3 bg-navy-darker rounded-full overflow-hidden relative">
                  <div className="h-full bg-[#176840] rounded-l-full absolute left-0" style={{ width: '65%' }}></div>
                  <div className="h-full bg-[#0A4D73] rounded-r-full absolute right-0" style={{ width: '35%' }}></div>
                </div>
                <div className="w-20 text-[#0A4D73] font-bold pl-2">Jordan</div>
              </div>
              <div className="flex justify-center mt-1">
                <span className="text-white/70 text-xs">65% - 35%</span>
              </div>
            </div>
            
            {/* Stats Footer */}
            <div className="mt-4 pt-2 border-t border-white/10">
              <div className="flex items-center text-white/60 text-xs">
                <Activity className="w-3 h-3 mr-1" />
                <span>Shot accuracy: 92% | Speed: 52 mph</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column - Court and Feed */}
        <div className="lg:w-1/2 flex flex-col gap-3">
          {/* Court View */}
          <div className="relative w-full aspect-[4/3] bg-[#124C22] rounded-lg overflow-hidden border border-white/10">
            <div className="absolute top-2 left-2 bg-[#176840]/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-white border border-[#176840]/40 z-10">
              TEAM GREEN
            </div>
            
            <div className="absolute bottom-2 right-2 bg-[#0A4D73]/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-white border border-[#0A4D73]/40 z-10">
              TEAM BLUE
            </div>
            
            <CourtView 
              ballPosition={ballPosition}
              ballTrajectory={ballTrajectory}
              ballVelocity={ballVelocity}
              player1={player1}
              player2={player2}
              player3={player3}
              player4={player4}
              courtColor={carolinaBlue}
            />
          </div>
          
          {/* Match Feed */}
          <div className="flex-1 min-h-0 bg-navy-dark rounded-lg overflow-hidden border border-white/10 flex flex-col">
            <div className="py-2 px-3 bg-navy/80 border-b border-white/10 flex items-center justify-between">
              <h3 className="text-white font-medium text-sm">Match Feed</h3>
              <div className="flex items-center gap-2">
                <button className="text-white/70 hover:text-white transition-colors">
                  <Users2 className="w-4 h-4" />
                </button>
                <button className="text-white/70 hover:text-white transition-colors">
                  <BarChart2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-2">
              {matchFeedItems.map(item => (
                <div 
                  key={item.id} 
                  className="mb-2 bg-navy/50 rounded-lg overflow-hidden border border-white/10"
                >
                  <div className="p-3">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        {item.type === "highlight" ? (
                          <Video className="w-3.5 h-3.5 text-[#2BCB6E]" />
                        ) : item.type === "achievement" ? (
                          <Activity className="w-3.5 h-3.5 text-[#e89e25]" />
                        ) : (
                          <Activity className="w-3.5 h-3.5 text-[#1a9dc3]" />
                        )}
                        <span className="uppercase text-xs font-semibold text-white/80">
                          {item.type === "highlight" ? "Highlight" : 
                          item.type === "achievement" ? "Achievement" : "Stat Alert"}
                        </span>
                      </div>
                      <span className="text-white/50 text-xs">{item.time}</span>
                    </div>
                    
                    <p className="text-white text-sm mb-2">{item.content}</p>
                    
                    {item.type === "highlight" && item.likes && (
                      <div className="flex items-center justify-between">
                        <button className="flex items-center gap-1 text-white/60 hover:text-white text-xs transition-colors">
                          <Heart className="w-3 h-3" />
                          <span>{item.likes}</span>
                        </button>
                        <button className="text-xs py-1 px-3 bg-[#0C8068]/20 text-[#0C8068] rounded hover:bg-[#0C8068]/30 transition-colors">
                          VIEW
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom footer with sponsors and highlights button */}
      <ScoreboardFooter 
        onHighlightClick={onHighlightClick}
        sponsors={sponsors}
      />
    </div>
  );
};

export default MobileScoreboardView;
