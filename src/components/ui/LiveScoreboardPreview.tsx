
import React, { useState, useEffect } from "react";
import { Play, Video, Activity, Trophy, Zap, Heart, Award, BarChart2, ChevronRight } from "lucide-react";
import AnimatedButton from "./AnimatedButton";

interface LiveScoreboardPreviewProps {
  onLaunchFullView: () => void;
}

const LiveScoreboardPreview: React.FC<LiveScoreboardPreviewProps> = ({ 
  onLaunchFullView 
}) => {
  const [player1Score, setPlayer1Score] = useState(7);
  const [player2Score, setPlayer2Score] = useState(5);
  const [gameTime, setGameTime] = useState(10);

  // Game clock effect with accelerated scoring for preview
  useEffect(() => {
    const interval = setInterval(() => {
      setGameTime(prev => (prev + 1) % 60);
      
      // Higher chance for score to increase in preview
      if (Math.random() < 0.2) {
        if (Math.random() > 0.5) {
          setPlayer1Score(prev => prev + 1);
        } else {
          setPlayer2Score(prev => prev + 1);
        }
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-navy-dark rounded-xl overflow-hidden border border-white/10 relative">
      {/* Header bar */}
      <div className="bg-gradient-to-r from-primary/20 to-[#1a9dc3]/20 px-4 py-2 border-b border-white/10 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-primary font-bold text-sm">SWINGNET</span>
          <div className="w-px h-4 bg-white/20"></div>
          <span className="text-white/70 text-xs">LIVE</span>
          <span className="animate-pulse flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
          </span>
        </div>
        <div className="text-white/60 text-xs">{formatTime(gameTime)}</div>
      </div>
      
      {/* Content */}
      <div className="p-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxMTE4MjgiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6TTAgMzBoMzB2MzBIMHoiIGZpbGw9IiMyQkNCNkUiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')]"></div>
        
        {/* Background gradients */}
        <div className="absolute inset-0 bg-navy-dark"
          style={{
            backgroundImage: `
              radial-gradient(circle at 85% 15%, rgba(26, 157, 195, 0.1), transparent 40%),
              radial-gradient(circle at 15% 85%, rgba(43, 203, 110, 0.1), transparent 40%)
            `,
            backgroundSize: "100% 100%"
          }}
        ></div>
        
        {/* Scoreboard */}
        <div className="relative z-10">
          <div className="flex justify-center items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="text-[#1a9dc3] text-4xl font-bold">{player1Score}</div>
              <div className="text-white/30 text-lg">-</div>
              <div className="text-primary text-4xl font-bold">{player2Score}</div>
            </div>
          </div>
          
          {/* Stats preview in a row */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="bg-navy-light/50 rounded-lg p-2">
              <div className="flex items-center gap-1 mb-1">
                <Zap className="w-3 h-3 text-[#1a9dc3]" />
                <span className="text-white/70 text-xs">TOP SPEED</span>
              </div>
              <div className="text-white font-bold text-sm">52 MPH</div>
            </div>
            
            <div className="bg-navy-light/50 rounded-lg p-2">
              <div className="flex items-center gap-1 mb-1">
                <Trophy className="w-3 h-3 text-[#e89e25]" />
                <span className="text-white/70 text-xs">ACHIEVEMENTS</span>
              </div>
              <div className="text-white font-bold text-sm">3 UNLOCKED</div>
            </div>
            
            <div className="bg-navy-light/50 rounded-lg p-2">
              <div className="flex items-center gap-1 mb-1">
                <Activity className="w-3 h-3 text-primary" />
                <span className="text-white/70 text-xs">ACCURACY</span>
              </div>
              <div className="text-white font-bold text-sm">92%</div>
            </div>
          </div>
        </div>
        
        {/* Call to action overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/70 to-transparent flex flex-col items-center justify-end p-4">
          <AnimatedButton onClick={onLaunchFullView} size="sm" className="mb-2">
            <span className="flex items-center gap-1">
              <Play className="w-4 h-4" />
              Launch Live Scoreboard
            </span>
          </AnimatedButton>
          <p className="text-white/50 text-xs text-center max-w-xs">
            Experience our futuristic digital court displays with real-time stats and AI highlights
          </p>
        </div>
      </div>
    </div>
  );
};

export default LiveScoreboardPreview;
