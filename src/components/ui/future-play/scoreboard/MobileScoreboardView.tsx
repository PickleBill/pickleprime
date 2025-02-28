
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ChevronLeft, Activity, Trophy, 
  Clock, Zap, BarChart2, Share2, Video
} from "lucide-react";
import ScoreboardHeader from "./ScoreboardHeader";
import ScoreboardFooter from "./ScoreboardFooter";
import HighlightView from "./HighlightView";
import CourtView from "./CourtView";
import MatchFeed from "./MatchFeed";
import ScoreboardStats from "./ScoreboardStats";
import { MobileScoreboardViewProps } from "./types";

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
  const [activeTab, setActiveTab] = useState("court");
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
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
      {/* Header with time, score, etc. */}
      <ScoreboardHeader 
        onBackClick={onBackClick}
        gameTime={gameTime}
        player1Score={player1Score}
        player2Score={player2Score}
        currentSet={currentSet}
        player1Avatar={player1Stats.avatar}
        player2Avatar={player2Stats.avatar}
        player1Name={player1Stats.name}
        player2Name={player2Stats.name}
      />
      
      {/* Main content tabs */}
      <div className="flex-1 flex flex-col">
        <Tabs 
          defaultValue="court" 
          value={activeTab}
          onValueChange={setActiveTab}
          className="flex-1 flex flex-col"
        >
          <TabsList className="bg-navy-light/50 backdrop-blur-sm px-2 py-1 rounded-none border-y border-white/5 grid grid-cols-3">
            <TabsTrigger value="court" className="text-xs h-8">
              Court View
            </TabsTrigger>
            <TabsTrigger value="stats" className="text-xs h-8">
              Statistics
            </TabsTrigger>
            <TabsTrigger value="feed" className="text-xs h-8">
              Match Feed
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="court" className="flex-1 p-0 m-0 data-[state=active]:flex flex-col">
            <div className="flex-1 p-3">
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
            
            {/* Player Stats Summary for Court View */}
            <div className="p-3 bg-navy-light/50 backdrop-blur-sm border-t border-white/5">
              <div className="flex items-center justify-between mb-2">
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
              
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-navy/30 p-2 rounded flex items-center justify-between">
                  <span className="text-white/70 text-xs">Top Speed</span>
                  <span className="text-[#F97316] text-xs font-medium">{player1Stats.topSpeed}</span>
                </div>
                <div className="bg-navy/30 p-2 rounded flex items-center justify-between">
                  <span className="text-white/70 text-xs">Top Speed</span>
                  <span className="text-[#0EA5E9] text-xs font-medium">{player2Stats.topSpeed}</span>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="stats" className="flex-1 p-0 m-0 data-[state=active]:flex flex-col">
            <div className="flex-1 p-3 overflow-y-auto">
              <ScoreboardStats 
                player1Stats={player1Stats}
                player2Stats={player2Stats}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="feed" className="flex-1 p-0 m-0 data-[state=active]:flex flex-col">
            <div className="flex-1 p-3 overflow-y-auto">
              <MatchFeed matchFeedItems={matchFeedItems} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Action bar */}
      <div className="w-full bg-navy-light/60 backdrop-blur-sm border-t border-white/10 px-3 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-[#F97316]" />
          <span className="text-white/70 text-xs">LIVE</span>
        </div>
        
        <div className="flex items-center gap-2">
          <button 
            onClick={onHighlightClick}
            className="flex items-center gap-1 py-1 px-2 bg-[#0C8068]/30 text-[#10B981] rounded text-xs hover:bg-[#0C8068]/40 transition-colors"
          >
            <Video className="w-3 h-3" />
            <span>Highlights</span>
          </button>
          
          <button className="p-1 rounded bg-navy/50 text-white/70 hover:bg-navy/70 transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      {/* Footer with sponsors */}
      <ScoreboardFooter sponsors={sponsors} />
    </div>
  );
};

export default MobileScoreboardView;
