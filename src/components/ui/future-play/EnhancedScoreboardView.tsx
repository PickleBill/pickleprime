import React, { useState, useEffect, useRef } from "react";
import { Play, ChevronLeft, Activity, Trophy, Clock, Zap, Users2, Award, Heart, BarChart2, MessageSquare, Share2, Video } from "lucide-react";

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
  const [ballVelocity, setBallVelocity] = useState(35);
  const [activePillar, setActivePillar] = useState(2); // Start with Gamification selected
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

  // Pillar data
  const pillars = [
    {
      id: 1,
      title: "AI Video Capture & Highlights",
      icon: <Video className="w-6 h-6" />,
      color: "#2BCB6E",
      description: "Smart cameras that track the action and generate instant highlight reels.",
      bullets: [
        "One-touch clip creation & sharing",
        "Auto-tracking of key moments",
        "Custom branding overlays",
        "Social media integration"
      ]
    },
    {
      id: 2,
      title: "Advanced Analytics",
      icon: <Activity className="w-6 h-6" />,
      color: "#1a9dc3",
      description: "Real-time performance data to improve player skills and engagement.",
      bullets: [
        "Shot velocity & placement tracking",
        "Performance improvement metrics",
        "Skill level assessment",
        "Personalized coaching insights"
      ]
    },
    {
      id: 3,
      title: "Gamification",
      icon: <Trophy className="w-6 h-6" />,
      color: "#e89e25",
      description: "Achievement systems and challenges that keep players engaged.",
      bullets: [
        "Skill-based achievements",
        "Dynamic leaderboards",
        "Weekly challenges & tournaments",
        "Digital rewards & recognition"
      ]
    },
    {
      id: 4,
      title: "Digital Displays & Fan Engagement",
      icon: <BarChart2 className="w-6 h-6" />,
      color: "#7b61ff",
      description: "Interactive screens that enhance the on-court experience.",
      bullets: [
        "Live scorekeeping & replays",
        "Sponsor integration opportunities",
        "Fan engagement features",
        "Digital signage solutions"
      ]
    },
    {
      id: 5,
      title: "Community & Matchmaking",
      icon: <Users2 className="w-6 h-6" />,
      color: "#ff617b",
      description: "Tools to connect players and build thriving racquet sports communities.",
      bullets: [
        "AI-powered skill matching",
        "League & tournament management",
        "Social connections & messaging",
        "Community event planning"
      ]
    }
  ];

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
    <>
      {/* Back button */}
      <button 
        onClick={onBackClick}
        className="absolute top-5 left-5 z-20 px-4 py-2 bg-navy-light/50 hover:bg-navy-light border border-white/10 rounded-full text-white/80 flex items-center gap-2 backdrop-blur-sm transition-all"
      >
        <ChevronLeft className="w-4 h-4" />
        <span>Back</span>
      </button>

      {/* Top Bar with logos, time, and indicators */}
      <div className="w-full px-6 py-3 border-b border-white/10 flex items-center justify-between bg-navy-dark/70 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <span className="text-primary font-bold">SWINGNET</span>
          <div className="w-px h-6 bg-white/20"></div>
          <span className="text-white/70 text-sm">LIVE</span>
          <span className="animate-pulse flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-navy-light/50 px-3 py-1 rounded-full border border-white/10">
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
      </div>

      {/* Main Game View - Enhanced based on reference image */}
      <div className="flex-1 flex flex-col md:flex-row p-4 md:p-6 gap-4 md:gap-6">
        {/* Court Visualization (Left Side) - Enhanced based on reference */}
        <div className="flex-1 relative bg-navy-dark rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_15px_rgba(43,203,110,0.1)]" ref={courtRef}>
          {/* Dark gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark to-navy-dark/90"></div>
          
          {/* Pickleball Court with proper colors */}
          <div className="absolute inset-8 rounded-lg overflow-hidden">
            {/* Green outer area (pickleball court surroundings) */}
            <div className="absolute inset-0 bg-[#4CAF50]/30 shadow-inner"></div>
            
            {/* Blue court area */}
            <div className="absolute inset-3 bg-[#0EA5E9]/80 rounded-sm">
              {/* White lines */}
              <div className="absolute inset-0 border-2 border-white/90"></div>
              
              {/* Non-volley zone (kitchen) - top and bottom */}
              <div className="absolute top-0 left-0 right-0 h-[22%] border-b-2 border-white/90 bg-[#0EA5E9]/90"></div>
              <div className="absolute bottom-0 left-0 right-0 h-[22%] border-t-2 border-white/90 bg-[#0EA5E9]/90"></div>
              
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
          
          {ballTrajectory.length > 3 && (
            <div 
              className="absolute z-10 w-2 h-2 rounded-full bg-white/10 blur-sm"
              style={{ 
                left: `${ballTrajectory[ballTrajectory.length - 3]?.x || ballPosition.x}%`, 
                top: `${ballTrajectory[ballTrajectory.length - 3]?.y || ballPosition.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
            ></div>
          )}
          
          {/* Player positions - enhanced with better colors and visual elements */}
          {/* P1 Top Left */}
          <div 
            className="absolute top-[25%] left-[25%] flex items-center justify-center"
            style={{ filter: 'drop-shadow(0 0 10px rgba(26, 157, 195, 0.5))' }}
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <div className="absolute w-10 h-10 bg-[#1a9dc3]/40 rounded-full animate-pulse"></div>
              <div className="z-10 bg-[#1a9dc3] text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center border-2 border-white/70">
                P1
              </div>
            </div>
          </div>
          
          {/* P2 Top Right */}
          <div 
            className="absolute top-[25%] right-[25%] flex items-center justify-center"
            style={{ filter: 'drop-shadow(0 0 10px rgba(43, 203, 110, 0.5))' }}
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <div className="absolute w-10 h-10 bg-primary/40 rounded-full animate-pulse"></div>
              <div className="z-10 bg-primary text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center border-2 border-white/70">
                P2
              </div>
            </div>
          </div>
          
          {/* P1 Bottom (Player Duplicate) */}
          <div 
            className="absolute bottom-[25%] left-[25%] flex items-center justify-center"
            style={{ filter: 'drop-shadow(0 0 10px rgba(26, 157, 195, 0.5))' }}
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <div className="absolute w-10 h-10 bg-[#1a9dc3]/40 rounded-full animate-pulse"></div>
              <div className="z-10 bg-[#1a9dc3] text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center border-2 border-white/70">
                P1
              </div>
            </div>
          </div>
          
          {/* P2 Bottom (Player Duplicate) */}
          <div 
            className="absolute bottom-[25%] right-[25%] flex items-center justify-center"
            style={{ filter: 'drop-shadow(0 0 10px rgba(43, 203, 110, 0.5))' }}
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <div className="absolute w-10 h-10 bg-primary/40 rounded-full animate-pulse"></div>
              <div className="z-10 bg-primary text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center border-2 border-white/70">
                P2
              </div>
            </div>
          </div>
          
          {/* Shot velocity indicator */}
          <div 
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-navy-dark/80 backdrop-blur-sm px-4 py-2 rounded text-sm text-white/90 border border-white/10 flex items-center gap-2 z-20"
            style={{ boxShadow: '0 0 15px rgba(26, 157, 195, 0.3)' }}
          >
            <Zap className="w-4 h-4 text-[#0EA5E9]" />
            <span className="font-mono">{ballVelocity} mph</span>
          </div>
          
          {/* Score overlay */}
          <div 
            className="absolute top-6 left-1/2 transform -translate-x-1/2 flex items-center gap-6 bg-navy-dark/80 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 z-20"
            style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)' }}
          >
            <span className="text-[#1a9dc3] font-bold text-2xl">{player1Score}</span>
            <span className="text-white/50 text-xl">-</span>
            <span className="text-primary font-bold text-2xl">{player2Score}</span>
          </div>
        </div>
        
        {/* Right Side Panel - Feature Display */}
        <div className="w-full md:w-96 bg-navy-dark/90 rounded-2xl overflow-hidden border border-white/10 flex flex-col">
          {/* Feature header */}
          <div className="p-6 border-b border-white/10 flex items-center gap-4">
            <div className="p-3 rounded-full" style={{ backgroundColor: `${pillars[activePillar].color}20` }}>
              <div style={{ color: pillars[activePillar].color }}>
                {pillars[activePillar].icon}
              </div>
            </div>
            <div>
              <h3 className="text-white text-xl font-bold">{pillars[activePillar].title}</h3>
              <p className="text-white/70 text-sm">{pillars[activePillar].description}</p>
            </div>
          </div>
          
          {/* Feature detail */}
          <div className="flex-1 p-6">
            <ul className="space-y-4">
              {pillars[activePillar].bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div 
                    className="w-1.5 h-1.5 rounded-full mt-2"
                    style={{ backgroundColor: pillars[activePillar].color }}
                  ></div>
                  <span className="text-white/80">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Navigation dots for features */}
          <div className="px-6 pb-6 flex justify-center">
            <div className="flex gap-2">
              {pillars.map((pillar, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activePillar 
                      ? 'bg-white' 
                      : 'bg-white/20 hover:bg-white/50'
                  }`}
                  onClick={() => setActivePillar(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar with stats */}
      <div className="w-full p-4 border-t border-white/10 bg-navy-dark/80 backdrop-blur-sm">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-full bg-[#1a9dc3]/20">
              <Activity className="w-4 h-4 text-[#1a9dc3]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-white text-sm font-medium">REAL-TIME ANALYTICS</h4>
                <span className="animate-pulse flex h-1.5 w-1.5 rounded-full bg-[#1a9dc3]"></span>
              </div>
              <p className="text-white/60 text-xs">Shot accuracy: 92% | Rally length: 8.3 | Top speed: 52 mph</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <button 
              className="py-1.5 px-3 rounded bg-primary/10 text-primary text-sm flex items-center gap-1.5 hover:bg-primary/20 transition-colors"
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
    </>
  );
};

export default EnhancedScoreboardView;
