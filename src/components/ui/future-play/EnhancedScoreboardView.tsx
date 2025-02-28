
import React, { useState, useEffect, useRef } from "react";
import { Play, ChevronLeft, Activity, Trophy, Clock, Zap, Users2, Award, Heart, BarChart2, MessageSquare, Share2, Video, Image } from "lucide-react";
import AnimatedButton from "../AnimatedButton";

interface EnhancedScoreboardViewProps {
  onBackClick: () => void;
  onHighlightClick: () => void;
  showHighlight: boolean;
  highlightTimer: number;
  gameTime: number;
  player1Score: number;
  player2Score: number;
  currentSet: number;
}

const EnhancedScoreboardView: React.FC<EnhancedScoreboardViewProps> = ({
  onBackClick,
  onHighlightClick,
  showHighlight,
  highlightTimer,
  gameTime,
  player1Score,
  player2Score,
  currentSet
}) => {
  // State for ball animation
  const [ballPosition, setBallPosition] = useState({ x: 25, y: 75 });
  const [ballDirection, setBallDirection] = useState({ x: 3, y: -3 });
  const [ballTrajectory, setBallTrajectory] = useState<{x: number, y: number}[]>([]);
  const [ballVelocity, setBallVelocity] = useState(38);
  const [activeTab, setActiveTab] = useState("scoreboard");
  const [matchFeedItems, setMatchFeedItems] = useState([
    {
      id: 1,
      type: "highlight",
      content: "Amazing cross-court winner by Alex!",
      time: "00:34",
      likes: 24
    },
    {
      id: 2,
      type: "achievement",
      content: "Jordan reached 50+ mph serve for the first time!",
      time: "01:12"
    },
    {
      id: 3,
      type: "stat",
      content: "Alex winning 80% of rallies longer than 8 shots.",
      time: "02:45"
    }
  ]);
  const courtRef = useRef<HTMLDivElement>(null);

  // Ball movement animation with trajectory tracking
  useEffect(() => {
    if (showHighlight) return;
    
    const courtElem = courtRef.current;
    if (!courtElem) return;
    
    const moveBall = () => {
      setBallPosition(prev => {
        const nextX = prev.x + ballDirection.x;
        const nextY = prev.y + ballDirection.y;
        
        let newDirX = ballDirection.x;
        let newDirY = ballDirection.y;
        
        // Bounce off edges
        if (nextX <= 0 || nextX >= 100) {
          newDirX = -ballDirection.x;
        }
        
        if (nextY <= 0 || nextY >= 100) {
          newDirY = -ballDirection.y;
        }
        
        // Update direction
        if (newDirX !== ballDirection.x || newDirY !== ballDirection.y) {
          setBallDirection({ x: newDirX, y: newDirY });
        }
        
        const newPos = { 
          x: nextX <= 0 ? 0 : nextX >= 100 ? 100 : nextX,
          y: nextY <= 0 ? 0 : nextY >= 100 ? 100 : nextY
        };
        
        // Add to trajectory (keeping last 12 points)
        setBallTrajectory(prev => {
          const newTrajectory = [...prev, newPos];
          if (newTrajectory.length > 12) {
            return newTrajectory.slice(newTrajectory.length - 12);
          }
          return newTrajectory;
        });
        
        return newPos;
      });
    };
    
    const animationInterval = setInterval(moveBall, 40);
    return () => clearInterval(animationInterval);
  }, [ballDirection, showHighlight]);

  // Randomly change ball velocity
  useEffect(() => {
    if (showHighlight) return;
    
    const velocityInterval = setInterval(() => {
      if (Math.random() < 0.2) {
        setBallVelocity(Math.floor(Math.random() * 15) + 25);
      }
    }, 2000);
    
    return () => clearInterval(velocityInterval);
  }, [showHighlight]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Player stats
  const player1Stats = {
    name: "Alex Chen",
    winRate: "78%",
    topSpeed: "47 mph",
    reactionTime: "0.4s",
    shotAccuracy: "92%",
    stamina: "89%",
    spinRate: "1800 rpm",
    avatar: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=150&h=150&crop=faces&auto=format&fit=crop"
  };
  
  const player2Stats = {
    name: "Jordan Smith",
    winRate: "71%",
    topSpeed: "52 mph",
    reactionTime: "0.5s",
    shotAccuracy: "88%",
    stamina: "94%",
    spinRate: "2100 rpm",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&crop=faces&auto=format&fit=crop"
  };

  const sponsors = [
    { name: "Pickleville Sports", id: 1 },
    { name: "Paddle Tech Pro", id: 2 },
    { name: "Court Kings", id: 3 }
  ];

  if (showHighlight) {
    return (
      <div className="flex-1 relative overflow-hidden animate-fade-in">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-dark/90"></div>
        
        {/* Highlight video background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511067007398-7e4b90cfa4bc')] bg-center bg-cover">
          <div className="absolute inset-0 bg-navy-dark/40 backdrop-blur-[2px]"></div>
        </div>
        
        {/* Highlight overlay data */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary/80 to-[#1a9dc3]/80 text-white px-8 py-2 rounded-full font-bold backdrop-blur-sm border border-white/20 text-lg flex items-center gap-3">
          <Zap className="w-5 h-5" />
          INSTANT HIGHLIGHT DETECTED
        </div>
        
        <div className="absolute bottom-20 left-0 right-0 px-10 flex justify-between items-end">
          <div className="bg-navy-dark/80 backdrop-blur-sm rounded-xl p-4 border border-white/10 max-w-xs">
            <h3 className="text-primary font-bold mb-2">AI ANALYSIS</h3>
            <p className="text-white/90 text-sm">
              Perfect topspin shot from Alex with 78° approach angle and 1890 RPM. Ball velocity: 43 mph.
            </p>
          </div>
          
          <div className="bg-navy-dark/80 backdrop-blur-sm rounded-xl p-4 border border-white/10 flex flex-col items-center">
            <div className="text-3xl font-bold text-white mb-2">
              +15 <span className="text-primary text-lg">XP</span>
            </div>
            <span className="text-white/70 text-sm">TOP 5% SHOTS TODAY</span>
          </div>
        </div>
        
        {/* Highlight progress bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
          <div 
            className="h-full bg-primary transition-all duration-100"
            style={{ width: `${highlightTimer}%` }}
          ></div>
        </div>
        
        {/* Video controls */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
          <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors">
            <Play className="w-6 h-6" />
          </button>
          <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <ChevronLeft className="w-5 h-5 rotate-180" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-[#061620]">
      {/* Top Bar with logos, time, and indicators */}
      <div className="w-full px-6 py-3 flex items-center justify-between bg-[#092435]/70 backdrop-blur-sm border-b border-[#1A4258]/50">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBackClick}
            className="px-4 py-2 bg-[#092435]/80 hover:bg-[#092435] border border-[#1A4258]/50 rounded-full text-white/80 flex items-center gap-2 backdrop-blur-sm transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
          
          <div className="flex items-center gap-2">
            <span className="text-white/70 text-sm">LIVE</span>
            <span className="animate-pulse flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-[#092435]/80 px-3 py-1 rounded-full border border-[#1A4258]/50">
            <Clock className="w-4 h-4 text-white/70" />
            <span className="text-white/90 text-sm font-mono">{formatTime(gameTime)}</span>
          </div>
          
          <div className="text-white/60 text-sm">SET {currentSet}</div>
          
          <div className="flex items-center gap-2">
            <span className="text-white/60 text-sm">PICKLEVILLE COURTS</span>
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-white/60 text-sm">COURT 3</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full bg-[#092435]/80 border border-[#1A4258]/50 text-white/80 hover:bg-[#092435] transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full bg-[#092435]/80 border border-[#1A4258]/50 text-white/80 hover:bg-[#092435] transition-colors">
            <MessageSquare className="w-5 h-5" />
          </button>
          <button className="px-4 py-2 rounded-full bg-[#0C8068]/20 text-[#0C8068] border border-[#0C8068]/30 hover:bg-[#0C8068]/30 transition-colors">
            UPGRADE VIEW
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex gap-4 p-4">
        {/* Left Side - Court View */}
        <div className="flex-1 relative bg-[#092435] rounded-lg overflow-hidden border border-[#1A4258]/50" ref={courtRef}>
          {/* Dark gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#092435] to-[#061620]"></div>
          
          {/* Pickleball Court with proper colors */}
          <div className="absolute inset-8 rounded-lg overflow-hidden">
            {/* Green outer area (pickleball court surroundings) */}
            <div className="absolute inset-0 bg-[#4CAF50]/20 shadow-inner"></div>
            
            {/* Blue court area */}
            <div className="absolute inset-3 bg-[#0EA5E9]/70 rounded-sm">
              {/* White lines */}
              <div className="absolute inset-0 border-2 border-white/90"></div>
              
              {/* Non-volley zone (kitchen) - top and bottom */}
              <div className="absolute top-0 left-0 right-0 h-[22%] border-b-2 border-white/90 bg-[#0EA5E9]/80"></div>
              <div className="absolute bottom-0 left-0 right-0 h-[22%] border-t-2 border-white/90 bg-[#0EA5E9]/80"></div>
              
              {/* Center line */}
              <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/90 -translate-x-[0.25px]"></div>
              
              {/* Net */}
              <div className="absolute top-[48%] bottom-[48%] left-0 right-0 bg-black/30 backdrop-blur-[1px]">
                <div className="h-full w-full border-t border-b border-white/90 bg-white/10"></div>
              </div>
            </div>
          </div>
          
          {/* Ball trajectory line - enhanced with glowing effect */}
          {ballTrajectory.length > 1 && (
            <svg className="absolute inset-0 z-10 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Glowing trajectory effect - blur under */}
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              
              <path 
                d={`M${ballTrajectory.map(point => `${point.x} ${point.y}`).join(' L')}`}
                fill="none" 
                stroke="#2BCB6E" 
                strokeWidth="0.8" 
                strokeDasharray="2 1"
                filter="url(#glow)"
                className="animate-pulse"
              />
            </svg>
          )}
          
          {/* Ball velocity indicator near the ball */}
          <div 
            className="absolute z-10 px-2 py-1 bg-[#092435]/80 text-white text-xs rounded backdrop-blur-sm border border-[#1A4258]/50"
            style={{ 
              left: `${ballPosition.x}%`,
              top: `${ballPosition.y + 5}%`,
              transform: 'translateX(-50%)'
            }}
          >
            {ballVelocity} mph
          </div>
          
          {/* Animated ball with trail effect */}
          <div 
            className="absolute z-20 w-3 h-3 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            style={{ 
              left: `${ballPosition.x}%`, 
              top: `${ballPosition.y}%`,
              transform: 'translate(-50%, -50%)',
              transition: 'left 0.05s linear, top 0.05s linear'
            }}
          ></div>
          
          {/* Ball trails for more dynamic movement */}
          {ballTrajectory.length > 2 && (
            <div 
              className="absolute z-10 w-3 h-3 rounded-full bg-white/20 blur-sm"
              style={{ 
                left: `${ballTrajectory[ballTrajectory.length - 2]?.x || ballPosition.x}%`, 
                top: `${ballTrajectory[ballTrajectory.length - 2]?.y || ballPosition.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
            ></div>
          )}
          
          {/* Player positions - enhanced with better colors and visual elements */}
          {/* P1 Position */}
          <div 
            className="absolute bottom-[40%] left-[25%] flex items-center justify-center"
            style={{ filter: 'drop-shadow(0 0 10px rgba(26, 157, 195, 0.5))' }}
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <div className="absolute w-12 h-12 bg-[#1a9dc3]/40 rounded-full animate-pulse"></div>
              <div className="z-10 bg-[#1a9dc3] text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center border-2 border-white/70">
                P1
              </div>
            </div>
          </div>
          
          {/* P2 Position */}
          <div 
            className="absolute top-[40%] right-[25%] flex items-center justify-center"
            style={{ filter: 'drop-shadow(0 0 10px rgba(43, 203, 110, 0.5))' }}
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <div className="absolute w-12 h-12 bg-primary/40 rounded-full animate-pulse"></div>
              <div className="z-10 bg-primary text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center border-2 border-white/70">
                P2
              </div>
            </div>
          </div>
          
          {/* Score overlay */}
          <div 
            className="absolute top-6 left-1/2 transform -translate-x-1/2 flex items-center gap-8 bg-[#092435]/90 backdrop-blur-sm px-8 py-4 rounded-full border border-[#1A4258]/50 z-20"
            style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)' }}
          >
            <span className="text-[#1a9dc3] font-bold text-3xl">{player1Score}</span>
            <span className="text-white/50 text-2xl">-</span>
            <span className="text-primary font-bold text-3xl">{player2Score}</span>
          </div>
          
          {/* Real-time insights overlay at the bottom */}
          <div className="absolute left-0 right-0 bottom-0 bg-[#092435]/90 backdrop-blur-sm border-t border-[#1A4258]/50 z-20">
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#1a9dc3]" />
                  <h3 className="text-white uppercase font-semibold text-sm tracking-wide">Real-time insights</h3>
                </div>
                <span className="text-[#1a9dc3]/70 text-xs uppercase">Updating Live</span>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#0A2B3D] p-3 rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className="w-4 h-4 text-[#1a9dc3]" />
                    <span className="text-white/70 text-xs uppercase">Rally Length</span>
                  </div>
                  <div className="text-white text-lg font-bold">12 SHOTS</div>
                  <div className="text-[#2BCB6E] text-xs">+2 FROM AVG</div>
                </div>
                
                <div className="bg-[#0A2B3D] p-3 rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className="w-4 h-4 text-[#1a9dc3]" />
                    <span className="text-white/70 text-xs uppercase">Top Speed</span>
                  </div>
                  <div className="text-white text-lg font-bold">52 MPH</div>
                  <div className="text-[#2BCB6E] text-xs">NEW MATCH HIGH</div>
                </div>
                
                <div className="bg-[#0A2B3D] p-3 rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <Activity className="w-4 h-4 text-[#1a9dc3]" />
                    <span className="text-white/70 text-xs uppercase">Shot Selection</span>
                  </div>
                  <div className="text-white text-lg font-bold">DINKS: 65%</div>
                  <div className="text-[#e89e25] text-xs">DRIVES: 35%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side Panel */}
        <div className="w-96 flex flex-col gap-4">
          {/* Live Scoreboard */}
          <div className="bg-[#092435] rounded-lg overflow-hidden border border-[#1A4258]/50 flex flex-col">
            <div className="bg-[#0C8068] py-3 px-4 uppercase text-white font-semibold">
              Live Scoreboard
            </div>
            
            <div className="p-4 flex flex-col">
              {/* Player Scores */}
              <div className="flex items-center justify-between mb-6">
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
              
              {/* Set Score */}
              <div className="bg-[#0A2B3D] px-4 py-2 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-sm mr-2">SET 1:</span>
                <span className="text-[#1a9dc3] font-bold mr-1">11</span>
                <span className="text-white/50 mr-1">-</span>
                <span className="text-primary font-bold">9</span>
              </div>
              
              {/* Stats Comparison */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white text-sm">{player1Stats.topSpeed}</span>
                  <div className="w-32 h-2 bg-[#0A2B3D] rounded-full overflow-hidden mx-2">
                    <div className="h-full bg-[#1a9dc3] rounded-full" style={{ width: '47%' }}></div>
                  </div>
                  <span className="text-white text-sm">{player2Stats.topSpeed}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-white text-sm">{player1Stats.shotAccuracy}</span>
                  <div className="w-32 h-2 bg-[#0A2B3D] rounded-full overflow-hidden mx-2">
                    <div className="h-full bg-[#1a9dc3] rounded-full" style={{ width: '92%' }}></div>
                  </div>
                  <span className="text-white text-sm">{player2Stats.shotAccuracy}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-white text-sm">{player1Stats.spinRate}</span>
                  <div className="w-32 h-2 bg-[#0A2B3D] rounded-full overflow-hidden mx-2">
                    <div className="h-full bg-[#1a9dc3] rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  <span className="text-white text-sm">{player2Stats.spinRate}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Match Feed */}
          <div className="flex-1 bg-[#092435] rounded-lg overflow-hidden border border-[#1A4258]/50 flex flex-col">
            <div className="py-3 px-4 flex items-center justify-between border-b border-[#1A4258]/50">
              <span className="uppercase text-white font-semibold">Match Feed</span>
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
                  className="mb-2 bg-[#0A2B3D] rounded-lg overflow-hidden border border-[#1A4258]/30"
                >
                  <div className="p-3">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        {item.type === "highlight" ? (
                          <Video className="w-4 h-4 text-[#2BCB6E]" />
                        ) : item.type === "achievement" ? (
                          <Trophy className="w-4 h-4 text-[#e89e25]" />
                        ) : (
                          <Activity className="w-4 h-4 text-[#1a9dc3]" />
                        )}
                        <span className="uppercase text-xs font-semibold text-white/80">
                          {item.type === "highlight" ? "Highlight" : 
                           item.type === "achievement" ? "Achievement" : "Stat Alert"}
                        </span>
                      </div>
                      <span className="text-white/50 text-xs">{item.time}</span>
                    </div>
                    
                    <p className="text-white text-sm mb-2">{item.content}</p>
                    
                    {item.type === "highlight" && (
                      <div className="flex items-center justify-between">
                        <button className="flex items-center gap-1 text-white/60 hover:text-white text-xs transition-colors">
                          <Heart className="w-3 h-3" />
                          <span>{item.likes}</span>
                        </button>
                        <button className="text-xs py-1 px-2 bg-[#0C8068]/20 text-[#0C8068] rounded hover:bg-[#0C8068]/30 transition-colors">
                          CLICK TO VIEW
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
      
      {/* Sponsor Footer */}
      <div className="w-full py-3 px-6 bg-[#092435]/70 backdrop-blur-sm border-t border-[#1A4258]/50 flex items-center justify-between">
        <div className="text-white/40 text-xs uppercase">
          Powered by SwingNet
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-white/40 text-xs uppercase mr-2">Sponsored by</span>
          <div className="flex items-center gap-6">
            {sponsors.map(sponsor => (
              <span key={sponsor.id} className="text-white/80 uppercase text-sm">{sponsor.name}</span>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="w-6 h-1 bg-primary rounded-full"></div>
          <div className="w-6 h-1 bg-white/30 rounded-full"></div>
          <div className="w-6 h-1 bg-white/30 rounded-full"></div>
        </div>
      </div>
      
      {/* Bottom action bar */}
      <div className="w-full px-6 py-3 bg-[#092435]/90 backdrop-blur-sm border-t border-[#1A4258]/50 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <Activity className="w-5 h-5 text-[#1a9dc3]" />
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-white text-sm font-medium uppercase">Real-time Analytics</h4>
                <span className="animate-pulse flex h-1.5 w-1.5 rounded-full bg-[#1a9dc3]"></span>
              </div>
              <p className="text-white/60 text-xs">Shot accuracy: 92% | Rally length: 8.3 | Top speed: 52 mph</p>
            </div>
          </div>
        </div>
        
        <div className="flex gap-3">
          <button 
            className="py-1.5 px-3 rounded bg-[#0C8068]/20 text-[#0C8068] text-sm flex items-center gap-1.5 hover:bg-[#0C8068]/30 transition-colors"
            onClick={onHighlightClick}
          >
            <Video className="w-4 h-4" />
            <span>View Highlights</span>
          </button>
          
          <button className="py-1.5 px-3 rounded bg-white/10 text-white/80 text-sm flex items-center gap-1.5 hover:bg-white/20 transition-colors">
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnhancedScoreboardView;
