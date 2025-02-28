
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

// Player position type
interface PlayerPosition {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
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
  
  // State for player positions - now with 4 players (2 per side)
  const [player1, setPlayer1] = useState<PlayerPosition>({ x: 25, y: 75, targetX: 25, targetY: 75 });
  const [player2, setPlayer2] = useState<PlayerPosition>({ x: 75, y: 25, targetX: 75, targetY: 25 });
  const [player3, setPlayer3] = useState<PlayerPosition>({ x: 15, y: 60, targetX: 15, targetY: 60 });
  const [player4, setPlayer4] = useState<PlayerPosition>({ x: 85, y: 40, targetX: 85, targetY: 40 });
  
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
  
  // Court boundaries for better bounce mechanics
  // Modified to reflect a more realistic pickleball court ratio (more elongated vertically)
  const courtBoundaries = {
    top: 15, // Top court boundary (%) - moved up slightly
    bottom: 85, // Bottom court boundary (%) - moved down slightly
    left: 10, // Left court boundary (%)
    right: 90, // Right court boundary (%)
    net: { top: 48, bottom: 52 }, // Net position (%)
    midLine: 50 // Middle line of the court (%)
  };

  // Ball movement animation with enhanced trajectory tracking
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
        let hitBoundary = false;
        
        // Bounce off court boundaries with more realistic angles
        if (nextX <= courtBoundaries.left || nextX >= courtBoundaries.right) {
          newDirX = -ballDirection.x;
          hitBoundary = true;
          
          // Add some randomness to the y direction when hitting side walls
          if (Math.random() > 0.5) {
            newDirY = ballDirection.y + (Math.random() * 2 - 1);
            // Keep y direction within reasonable bounds
            newDirY = Math.max(-4, Math.min(4, newDirY));
          }
        }
        
        if (nextY <= courtBoundaries.top || nextY >= courtBoundaries.bottom) {
          newDirY = -ballDirection.y;
          hitBoundary = true;
          
          // Add some randomness to the x direction when hitting top/bottom walls
          if (Math.random() > 0.5) {
            newDirX = ballDirection.x + (Math.random() * 2 - 1);
            // Keep x direction within reasonable bounds
            newDirX = Math.max(-4, Math.min(4, newDirX));
          }
        }
        
        // Special case for net hits - bounce with more dramatic angle change
        if ((prev.y < courtBoundaries.net.top && nextY >= courtBoundaries.net.top) || 
            (prev.y > courtBoundaries.net.bottom && nextY <= courtBoundaries.net.bottom)) {
          if (nextX > 40 && nextX < 60) {
            newDirY = -ballDirection.y * 1.2; // Stronger vertical bounce
            newDirX = ballDirection.x * 0.8; // Slight reduction in horizontal momentum
            hitBoundary = true;
          }
        }
        
        // Update direction with occasional speed variations
        if (hitBoundary) {
          // Occasionally change ball speed after bouncing
          if (Math.random() < 0.3) {
            setBallVelocity(Math.floor(Math.random() * 15) + 30);
            
            // Apply a more dramatic direction change 20% of the time
            if (Math.random() < 0.2) {
              newDirX = newDirX * (0.8 + Math.random() * 0.4); // 0.8-1.2 multiplier
              newDirY = newDirY * (0.8 + Math.random() * 0.4); // 0.8-1.2 multiplier
            }
          }
          
          setBallDirection({ x: newDirX, y: newDirY });
        }
        
        const newPos = { 
          x: Math.max(courtBoundaries.left, Math.min(courtBoundaries.right, nextX)),
          y: Math.max(courtBoundaries.top, Math.min(courtBoundaries.bottom, nextY))
        };
        
        // Add to trajectory (keeping last 12 points)
        setBallTrajectory(prev => {
          const newTrajectory = [...prev, newPos];
          if (newTrajectory.length > 12) {
            return newTrajectory.slice(newTrajectory.length - 12);
          }
          return newTrajectory;
        });
        
        // Set new target for players when the ball moves significantly
        if (Math.random() < 0.1) {
          // If ball is on left side (player 1 & 3 side)
          if (newPos.x < courtBoundaries.midLine) {
            // Set target for player 1 or 3 to intercept based on position
            if (newPos.y < courtBoundaries.net.top) {
              setPlayer1(prev => ({ ...prev, targetX: newPos.x + 5, targetY: newPos.y + 5 }));
            } else {
              setPlayer3(prev => ({ ...prev, targetX: newPos.x + 5, targetY: newPos.y - 5 }));
            }
          } 
          // If ball is on right side (player 2 & 4 side)
          else {
            // Set target for player 2 or 4 to intercept based on position
            if (newPos.y < courtBoundaries.net.top) {
              setPlayer2(prev => ({ ...prev, targetX: newPos.x - 5, targetY: newPos.y + 5 }));
            } else {
              setPlayer4(prev => ({ ...prev, targetX: newPos.x - 5, targetY: newPos.y - 5 }));
            }
          }
        }
        
        return newPos;
      });
    };
    
    const animationInterval = setInterval(moveBall, 40);
    return () => clearInterval(animationInterval);
  }, [ballDirection, showHighlight]);

  // Player movement animation - moves players toward their targets
  useEffect(() => {
    if (showHighlight) return;
    
    const moveInterval = setInterval(() => {
      // Move player 1
      setPlayer1(prev => {
        const dirX = prev.targetX - prev.x;
        const dirY = prev.targetY - prev.y;
        const dist = Math.sqrt(dirX * dirX + dirY * dirY);
        
        // Only move if not too close to target
        if (dist > 1) {
          const moveSpeed = 1.2; // Adjust speed as needed
          return {
            ...prev,
            x: prev.x + (dirX / dist) * moveSpeed,
            y: prev.y + (dirY / dist) * moveSpeed
          };
        }
        
        return prev;
      });
      
      // Move player 2
      setPlayer2(prev => {
        const dirX = prev.targetX - prev.x;
        const dirY = prev.targetY - prev.y;
        const dist = Math.sqrt(dirX * dirX + dirY * dirY);
        
        if (dist > 1) {
          const moveSpeed = 1.2;
          return {
            ...prev,
            x: prev.x + (dirX / dist) * moveSpeed,
            y: prev.y + (dirY / dist) * moveSpeed
          };
        }
        
        return prev;
      });
      
      // Move player 3
      setPlayer3(prev => {
        const dirX = prev.targetX - prev.x;
        const dirY = prev.targetY - prev.y;
        const dist = Math.sqrt(dirX * dirX + dirY * dirY);
        
        if (dist > 1) {
          const moveSpeed = 1.1; // Slightly different speed for variety
          return {
            ...prev,
            x: prev.x + (dirX / dist) * moveSpeed,
            y: prev.y + (dirY / dist) * moveSpeed
          };
        }
        
        return prev;
      });
      
      // Move player 4
      setPlayer4(prev => {
        const dirX = prev.targetX - prev.x;
        const dirY = prev.targetY - prev.y;
        const dist = Math.sqrt(dirX * dirX + dirY * dirY);
        
        if (dist > 1) {
          const moveSpeed = 1.1;
          return {
            ...prev,
            x: prev.x + (dirX / dist) * moveSpeed,
            y: prev.y + (dirY / dist) * moveSpeed
          };
        }
        
        return prev;
      });
      
      // Occasionally set new random targets for players to simulate positioning
      if (Math.random() < 0.05) {
        // Set new random targets within their respective court areas - adjusted for new court dimensions
        
        // Player 1 - Front left
        setPlayer1(prev => ({
          ...prev,
          targetX: Math.random() * 20 + 15, // 15-35%
          targetY: Math.random() * 20 + 20, // 20-40%
        }));
        
        // Player 2 - Front right
        setPlayer2(prev => ({
          ...prev,
          targetX: Math.random() * 20 + 65, // 65-85%
          targetY: Math.random() * 20 + 20, // 20-40%
        }));
        
        // Player 3 - Back left
        setPlayer3(prev => ({
          ...prev,
          targetX: Math.random() * 20 + 15, // 15-35%
          targetY: Math.random() * 20 + 60, // 60-80%
        }));
        
        // Player 4 - Back right
        setPlayer4(prev => ({
          ...prev,
          targetX: Math.random() * 20 + 65, // 65-85%
          targetY: Math.random() * 20 + 60, // 60-80%
        }));
      }
    }, 50);
    
    return () => clearInterval(moveInterval);
  }, [showHighlight]);

  // Randomly change ball velocity and cause random direction changes
  useEffect(() => {
    if (showHighlight) return;
    
    const velocityInterval = setInterval(() => {
      // Random velocity changes
      if (Math.random() < 0.2) {
        setBallVelocity(Math.floor(Math.random() * 15) + 25);
      }
      
      // Occasional random direction change to simulate player hits
      if (Math.random() < 0.1) {
        setBallDirection(prev => {
          // Create a new angle that's significantly different
          const newX = (Math.random() * 6 - 3);
          const newY = (Math.random() * 6 - 3);
          return { x: newX, y: newY };
        });
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

      {/* Main Content - adjusted to be slightly more compressed */}
      <div className="flex-1 flex gap-4 p-4 pb-0">
        {/* Left Side - Court View - slightly reduced height */}
        <div className="flex-1 relative bg-[#092435] rounded-lg overflow-hidden border border-[#1A4258]/50 h-[calc(100%-40px)]" ref={courtRef}>
          {/* Dark gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#092435] to-[#061620]"></div>
          
          {/* Pickleball Court with proper colors - Modified with more padding and vertical extension */}
          <div className="absolute inset-4 rounded-lg overflow-hidden">
            {/* Green outer area (pickleball court surroundings) - Brighter green grass color */}
            <div className="absolute inset-0 bg-[#8BC34A]/70 shadow-inner"></div>
            
            {/* Blue court area - Made more rectangular to reflect pickleball court dimensions */}
            <div className="absolute inset-[10%] bg-[#0EA5E9]/70 rounded-sm">
              {/* White lines */}
              <div className="absolute inset-0 border-2 border-white/90"></div>
              
              {/* Non-volley zone (kitchen) - top and bottom */}
              <div className="absolute top-0 left-0 right-0 h-[20%] border-b-2 border-white/90 bg-[#0EA5E9]/80"></div>
              <div className="absolute bottom-0 left-0 right-0 h-[20%] border-t-2 border-white/90 bg-[#0EA5E9]/80"></div>
              
              {/* Center line */}
              <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/90 -translate-x-[0.25px]"></div>
              
              {/* Net */}
              <div className="absolute top-[48%] bottom-[48%] left-0 right-0 bg-black/30 backdrop-blur-[1px]">
                <div className="h-full w-full border-t border-b border-white/90 bg-white/10"></div>
              </div>
            </div>
            
            {/* Additional green court borders - to create more authentic pickleball court look */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-[8%] border-4 border-[#4CAF50]/30 rounded-sm"></div>
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
          
          {/* Animated pickleball - larger with yellow-green color */}
          <div 
            className="absolute z-20 w-5 h-5 rounded-full bg-gradient-to-b from-[#F2FCE2] to-[#FEF7CD] shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            style={{ 
              left: `${ballPosition.x}%`, 
              top: `${ballPosition.y}%`,
              transform: 'translate(-50%, -50%)',
              transition: 'left 0.05s linear, top 0.05s linear'
            }}
          >
            {/* Ball texture (holes pattern) */}
            <div className="absolute inset-0 rounded-full overflow-hidden opacity-40">
              <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-black/20 rounded-full"></div>
              <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-black/20 rounded-full"></div>
              <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-black/20 rounded-full"></div>
              <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-black/20 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-black/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
          
          {/* Ball trails for more dynamic movement - also colored like pickleballs */}
          {ballTrajectory.length > 2 && (
            <>
              <div 
                className="absolute z-10 w-5 h-5 rounded-full bg-gradient-to-b from-[#F2FCE2]/40 to-[#FEF7CD]/40 blur-sm"
                style={{ 
                  left: `${ballTrajectory[ballTrajectory.length - 2]?.x || ballPosition.x}%`, 
                  top: `${ballTrajectory[ballTrajectory.length - 2]?.y || ballPosition.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              ></div>
              <div 
                className="absolute z-10 w-4 h-4 rounded-full bg-gradient-to-b from-[#F2FCE2]/20 to-[#FEF7CD]/20 blur-sm"
                style={{ 
                  left: `${ballTrajectory[ballTrajectory.length - 4]?.x || ballPosition.x}%`, 
                  top: `${ballTrajectory[ballTrajectory.length - 4]?.y || ballPosition.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              ></div>
            </>
          )}
          
          {/* Player positions - now with 4 players that move dynamically */}
          {/* Team 1 - Left side (blue) */}
          {/* Player 1 - Main player */}
          <div 
            className="absolute z-20 flex items-center justify-center transition-all duration-300"
            style={{ 
              left: `${player1.x}%`, 
              top: `${player1.y}%`,
              transform: 'translate(-50%, -50%)',
              filter: 'drop-shadow(0 0 10px rgba(26, 157, 195, 0.5))'
            }}
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <div className="absolute w-12 h-12 bg-[#1a9dc3]/40 rounded-full animate-pulse"></div>
              <div className="z-10 bg-[#1a9dc3] text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center border-2 border-white/70">
                P1
              </div>
            </div>
          </div>
          
          {/* Player 3 - Second player on left side */}
          <div 
            className="absolute z-20 flex items-center justify-center transition-all duration-300"
            style={{ 
              left: `${player3.x}%`, 
              top: `${player3.y}%`,
              transform: 'translate(-50%, -50%)',
              filter: 'drop-shadow(0 0 8px rgba(26, 157, 195, 0.4))'
            }}
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <div className="absolute w-10 h-10 bg-[#1a9dc3]/40 rounded-full animate-pulse"></div>
              <div className="z-10 bg-[#1a9dc3] text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center border-2 border-white/70">
                P3
              </div>
            </div>
          </div>
          
          {/* Team 2 - Right side (green) */}
          {/* Player 2 - Main player */}
          <div 
            className="absolute z-20 flex items-center justify-center transition-all duration-300"
            style={{ 
              left: `${player2.x}%`, 
              top: `${player2.y}%`,
              transform: 'translate(-50%, -50%)',
              filter: 'drop-shadow(0 0 10px rgba(43, 203, 110, 0.5))'
            }}
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <div className="absolute w-12 h-12 bg-primary/40 rounded-full animate-pulse"></div>
              <div className="z-10 bg-primary text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center border-2 border-white/70">
                P2
              </div>
            </div>
          </div>
          
          {/* Player 4 - Second player on right side */}
          <div 
            className="absolute z-20 flex items-center justify-center transition-all duration-300"
            style={{ 
              left: `${player4.x}%`, 
              top: `${player4.y}%`,
              transform: 'translate(-50%, -50%)',
              filter: 'drop-shadow(0 0 8px rgba(43, 203, 110, 0.4))'
            }}
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <div className="absolute w-10 h-10 bg-primary/40 rounded-full animate-pulse"></div>
              <div className="z-10 bg-primary text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center border-2 border-white/70">
                P4
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
          
          {/* Team labels for clarity */}
          <div className="absolute top-20 left-6 bg-[#1a9dc3]/20 backdrop-blur-sm px-2 py-1 rounded text-xs text-white border border-[#1a9dc3]/30 z-10">
            TEAM BLUE
          </div>
          
          <div className="absolute top-20 right-6 bg-primary/20 backdrop-blur-sm px-2 py-1 rounded text-xs text-white border border-primary/30 z-10">
            TEAM GREEN
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
        
        {/* Right Side Panel - slightly reduced height */}
        <div className="w-96 flex flex-col gap-4 h-[calc(100%-40px)]">
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

      {/* Real-time Analytics Bar - moved above the sponsor footer and slightly overlapping */}
      <div className="w-full px-6 py-3 bg-[#092435]/90 backdrop-blur-sm border-t border-[#1A4258]/50 flex items-center justify-between -mt-2 relative z-10 shadow-lg">
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
      
      {/* Sponsor Footer - now below the real-time analytics bar */}
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
    </div>
  );
};

export default EnhancedScoreboardView;
