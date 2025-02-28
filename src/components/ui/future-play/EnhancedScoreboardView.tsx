
import React, { useState, useEffect, useRef } from "react";
import { Play, ChevronLeft, Activity, Trophy, Clock, Zap, Users2, Award, Heart, BarChart2, MessageSquare, Share2, Video, Image, Target } from "lucide-react";
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
  const [player1, setPlayer1] = useState<PlayerPosition>({ x: 25, y: 40, targetX: 25, targetY: 40 });
  const [player2, setPlayer2] = useState<PlayerPosition>({ x: 75, y: 40, targetX: 75, targetY: 40 });
  const [player3, setPlayer3] = useState<PlayerPosition>({ x: 25, y: 60, targetX: 25, targetY: 60 });
  const [player4, setPlayer4] = useState<PlayerPosition>({ x: 75, y: 60, targetX: 75, targetY: 60 });
  
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
  
  // Updated team colors
  const greenTeamColor = "#176840"; // Darker green
  const blueTeamColor = "#0A4D73"; // Darker blue
  
  // Carolina blue court color - lighter and brighter
  const carolinaBlue = "#33C3F0"; // True Carolina blue shade
  
  // Court boundaries for better bounce mechanics
  // Modified to reflect a more realistic pickleball court ratio (more elongated vertically)
  const courtBoundaries = {
    top: 10, // Top court boundary (%)
    bottom: 90, // Bottom court boundary (%)
    left: 15, // Left court boundary (%)
    right: 85, // Right court boundary (%)
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
            // Set target for player 1 (green team) or 3 (blue team) to intercept based on position
            if (newPos.y < courtBoundaries.net.top) {
              setPlayer1(prev => ({ ...prev, targetX: newPos.x + 5, targetY: newPos.y + 5 }));
            } else {
              setPlayer3(prev => ({ ...prev, targetX: newPos.x + 5, targetY: newPos.y - 5 }));
            }
          } 
          // If ball is on right side (player 2 & 4 side)
          else {
            // Set target for player 2 (green team) or 4 (blue team) to intercept based on position
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
        
        // Player 1 - Green team top left
        setPlayer1(prev => ({
          ...prev,
          targetX: Math.random() * 20 + 15, // 15-35%
          targetY: Math.random() * 20 + 20, // 20-40%
        }));
        
        // Player 2 - Green team top right
        setPlayer2(prev => ({
          ...prev,
          targetX: Math.random() * 20 + 65, // 65-85%
          targetY: Math.random() * 20 + 20, // 20-40%
        }));
        
        // Player 3 - Blue team bottom left
        setPlayer3(prev => ({
          ...prev,
          targetX: Math.random() * 20 + 15, // 15-35%
          targetY: Math.random() * 20 + 60, // 60-80%
        }));
        
        // Player 4 - Blue team bottom right
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

      {/* Main Content - using the new desktop layout with 50/50 split and court/feed in different proportions */}
      <div className="flex-1 flex flex-col sm:flex-row gap-4 p-4 pb-0">
        {/* Mobile Layout - Stacked vertically */}
        <div className="flex-1 flex flex-col gap-4 sm:hidden">
          {/* Court View */}
          <div className="flex-1 relative bg-[#092435] rounded-lg overflow-hidden border border-[#1A4258]/50">
            {/* Same court content as below, but in a stacked layout for mobile */}
            {/* Dark gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#092435] to-[#061620]"></div>
            
            {/* Pickleball Court with updated lighter blue color - elongated vertically */}
            <div className="absolute inset-2 rounded-lg overflow-hidden">
              {/* Green outer area - darker green */}
              <div className="absolute inset-0 bg-[#1E3B20]/90 shadow-inner"></div>
              
              {/* Blue court area - elongated vertically with Carolina blue color */}
              <div className="absolute inset-x-[15%] inset-y-[5%] bg-[#33C3F0]/90 rounded-sm">
                {/* White lines */}
                <div className="absolute inset-0 border border-white/90"></div>
                
                {/* Net area - center gray strip */}
                <div className="absolute top-[48%] bottom-[48%] left-0 right-0 bg-black/40 backdrop-blur-[1px]">
                  <div className="h-full w-full border-t border-b border-white/90 bg-white/10"></div>
                </div>
                
                {/* Non-volley zone (kitchen) - top */}
                <div className="absolute top-0 left-0 right-0 h-[42%] border-b border-white/90">
                  <div className="absolute inset-0 bg-[#33C3F0]/70"></div>
                </div>
                
                {/* Non-volley zone (kitchen) - bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-[42%] border-t border-white/90">
                  <div className="absolute inset-0 bg-[#33C3F0]/70"></div>
                </div>
                
                {/* Center line */}
                <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/90 -translate-x-[0.5px]"></div>
              </div>
              
              {/* Additional green court borders */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-x-[13%] inset-y-[3%] border-2 border-[#2A4F2D]/50 rounded-sm"></div>
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
              className="absolute z-10 px-1.5 py-0.5 bg-[#092435]/80 text-white text-[10px] rounded backdrop-blur-sm border border-[#1A4258]/50"
              style={{ 
                left: `${ballPosition.x}%`,
                top: `${ballPosition.y + 5}%`,
                transform: 'translateX(-50%)'
              }}
            >
              {ballVelocity} mph
            </div>
            
            {/* Animated pickleball */}
            <div 
              className="absolute z-20 w-4 h-4 rounded-full bg-gradient-to-b from-[#F2FCE2] to-[#FEF7CD] shadow-[0_0_8px_rgba(255,255,255,0.8)]"
              style={{ 
                left: `${ballPosition.x}%`, 
                top: `${ballPosition.y}%`,
                transform: 'translate(-50%, -50%)',
                transition: 'left 0.05s linear, top 0.05s linear'
              }}
            >
              {/* Ball texture (holes pattern) */}
              <div className="absolute inset-0 rounded-full overflow-hidden opacity-40">
                <div className="absolute top-1/4 left-1/4 w-0.5 h-0.5 bg-black/20 rounded-full"></div>
                <div className="absolute top-1/4 right-1/4 w-0.5 h-0.5 bg-black/20 rounded-full"></div>
                <div className="absolute bottom-1/4 left-1/4 w-0.5 h-0.5 bg-black/20 rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-0.5 h-0.5 bg-black/20 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 w-0.5 h-0.5 bg-black/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div>
            
            {/* Ball trails for more dynamic movement */}
            {ballTrajectory.length > 2 && (
              <>
                <div 
                  className="absolute z-10 w-4 h-4 rounded-full bg-gradient-to-b from-[#F2FCE2]/40 to-[#FEF7CD]/40 blur-sm"
                  style={{ 
                    left: `${ballTrajectory[ballTrajectory.length - 2]?.x || ballPosition.x}%`, 
                    top: `${ballTrajectory[ballTrajectory.length - 2]?.y || ballPosition.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                ></div>
                <div 
                  className="absolute z-10 w-3 h-3 rounded-full bg-gradient-to-b from-[#F2FCE2]/20 to-[#FEF7CD]/20 blur-sm"
                  style={{ 
                    left: `${ballTrajectory[ballTrajectory.length - 4]?.x || ballPosition.x}%`, 
                    top: `${ballTrajectory[ballTrajectory.length - 4]?.y || ballPosition.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                ></div>
              </>
            )}
            
            {/* Player positions - Green Team (1 & 2) on top, Blue Team (3 & 4) on bottom */}
            {/* Player 1 - Green team, top left */}
            <div 
              className="absolute z-20 flex items-center justify-center transition-all duration-300"
              style={{ 
                left: `${player1.x}%`, 
                top: `25%`,
                transform: 'translate(-50%, -50%)',
                filter: 'drop-shadow(0 0 10px rgba(43, 203, 110, 0.8))'
              }}
            >
              <div className="w-6 h-6 rounded-full flex items-center justify-center">
                <div className="absolute w-full h-full bg-[#176840]/70 rounded-full animate-pulse"></div>
                <div className="z-10 bg-[#176840] text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-[1px] border-white/70">
                  P1
                </div>
              </div>
            </div>
            
            {/* Player 2 - Green team, top right */}
            <div 
              className="absolute z-20 flex items-center justify-center transition-all duration-300"
              style={{ 
                left: `${player2.x}%`, 
                top: `25%`,
                transform: 'translate(-50%, -50%)',
                filter: 'drop-shadow(0 0 10px rgba(43, 203, 110, 0.8))'
              }}
            >
              <div className="w-6 h-6 rounded-full flex items-center justify-center">
                <div className="absolute w-full h-full bg-[#176840]/70 rounded-full animate-pulse"></div>
                <div className="z-10 bg-[#176840] text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-[1px] border-white/70">
                  P2
                </div>
              </div>
            </div>
            
            {/* Player 3 - Blue team, bottom left */}
            <div 
              className="absolute z-20 flex items-center justify-center transition-all duration-300"
              style={{ 
                left: `${player3.x}%`, 
                top: `75%`,
                transform: 'translate(-50%, -50%)',
                filter: 'drop-shadow(0 0 8px rgba(26, 157, 195, 0.8))'
              }}
            >
              <div className="w-5 h-5 rounded-full flex items-center justify-center">
                <div className="absolute w-full h-full bg-[#0A4D73]/70 rounded-full animate-pulse"></div>
                <div className="z-10 bg-[#0A4D73] text-white text-[8px] font-bold w-3 h-3 rounded-full flex items-center justify-center border-[1px] border-white/70">
                  P3
                </div>
              </div>
            </div>
            
            {/* Player 4 - Blue team, bottom right */}
            <div 
              className="absolute z-20 flex items-center justify-center transition-all duration-300"
              style={{ 
                left: `${player4.x}%`, 
                top: `75%`,
                transform: 'translate(-50%, -50%)',
                filter: 'drop-shadow(0 0 8px rgba(26, 157, 195, 0.8))'
              }}
            >
              <div className="w-5 h-5 rounded-full flex items-center justify-center">
                <div className="absolute w-full h-full bg-[#0A4D73]/70 rounded-full animate-pulse"></div>
                <div className="z-10 bg-[#0A4D73] text-white text-[8px] font-bold w-3 h-3 rounded-full flex items-center justify-center border-[1px] border-white/70">
                  P4
                </div>
              </div>
            </div>
            
            {/* Mobile score overlay */}
            <div 
              className="absolute top-3 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-[#092435]/90 backdrop-blur-sm px-4 py-2 rounded-full border border-[#1A4258]/50 z-20"
              style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)' }}
            >
              <span className="text-[#176840] font-bold text-2xl">{player1Score}</span>
              <span className="text-white/50 text-xl">-</span>
              <span className="text-[#0A4D73] font-bold text-2xl">{player2Score}</span>
            </div>
            
            {/* Team labels for clarity - Mobile */}
            <div className="absolute top-12 left-2 bg-[#176840]/30 backdrop-blur-sm px-1.5 py-0.5 rounded text-[10px] text-white border border-[#176840]/40 z-10">
              TEAM GREEN
            </div>
            
            <div className="absolute bottom-12 right-2 bg-[#0A4D73]/30 backdrop-blur-sm px-1.5 py-0.5 rounded text-[10px] text-white border border-[#0A4D73]/40 z-10">
              TEAM BLUE
            </div>
          </div>
          
          {/* Mobile Scoreboard */}
          <div className="bg-[#092435] rounded-lg overflow-hidden border border-[#1A4258]/50 flex flex-col">
            <div className="bg-[#0C8068] py-1.5 px-3 uppercase text-white font-semibold text-xs">
              Live Scoreboard
            </div>
            
            <div className="p-3 flex flex-col">
              {/* Mobile Player Info */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-full overflow-hidden border-[1.5px] border-[#176840]">
                    <img src={player1Stats.avatar} alt={player1Stats.name} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-white text-xs">{player1Stats.name}</span>
                </div>
                
                <div className="flex items-center gap-1.5">
                  <span className="text-white text-xs">{player2Stats.name}</span>
                  <div className="w-6 h-6 rounded-full overflow-hidden border-[1.5px] border-[#0A4D73]">
                    <img src={player2Stats.avatar} alt={player2Stats.name} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              
              {/* Set Score */}
              <div className="bg-[#0A2B3D] px-2 py-1.5 rounded-lg flex items-center justify-center mb-2">
                <span className="text-white text-xs mr-2">SET 1:</span>
                <span className="text-[#176840] font-bold text-sm mr-1">11</span>
                <span className="text-white/50 mr-1">-</span>
                <span className="text-[#0A4D73] font-bold text-sm">9</span>
              </div>
              
              {/* Mobile Stats Comparison */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-white text-xs">{player1Stats.topSpeed}</span>
                  <div className="w-16 h-1 bg-[#0A2B3D] rounded-full overflow-hidden mx-2">
                    <div className="h-full bg-[#176840] rounded-full" style={{ width: '47%' }}></div>
                  </div>
                  <span className="text-white text-xs">{player2Stats.topSpeed}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-white text-xs">{player1Stats.shotAccuracy}</span>
                  <div className="w-16 h-1 bg-[#0A2B3D] rounded-full overflow-hidden mx-2">
                    <div className="h-full bg-[#176840] rounded-full" style={{ width: '92%' }}></div>
                  </div>
                  <span className="text-white text-xs">{player2Stats.shotAccuracy}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-white text-xs">{player1Stats.spinRate}</span>
                  <div className="w-16 h-1 bg-[#0A2B3D] rounded-full overflow-hidden mx-2">
                    <div className="h-full bg-[#176840] rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  <span className="text-white text-xs">{player2Stats.spinRate}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Match Feed */}
          <div className="bg-[#092435] rounded-lg overflow-hidden border border-[#1A4258]/50 flex flex-col mb-16">
            <div className="py-1.5 px-3 flex items-center justify-between border-b border-[#1A4258]/50">
              <span className="uppercase text-white font-semibold text-xs">Match Feed</span>
              <div className="flex items-center gap-2">
                <button className="text-white/70 hover:text-white transition-colors">
                  <Users2 className="w-3.5 h-3.5" />
                </button>
                <button className="text-white/70 hover:text-white transition-colors">
                  <BarChart2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
            
            <div className="max-h-[200px] overflow-y-auto p-2">
              {matchFeedItems.map(item => (
                <div 
                  key={item.id} 
                  className="mb-2 bg-[#0A2B3D] rounded-lg overflow-hidden border border-[#1A4258]/30"
                >
                  <div className="p-2">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-1.5">
                        {item.type === "highlight" ? (
                          <Video className="w-3 h-3 text-[#2BCB6E]" />
                        ) : item.type === "achievement" ? (
                          <Trophy className="w-3 h-3 text-[#e89e25]" />
                        ) : (
                          <Activity className="w-3 h-3 text-[#1a9dc3]" />
                        )}
                        <span className="uppercase text-[10px] font-semibold text-white/80">
                          {item.type === "highlight" ? "Highlight" : 
                           item.type === "achievement" ? "Achievement" : "Stat Alert"}
                        </span>
                      </div>
                      <span className="text-white/50 text-[10px]">{item.time}</span>
                    </div>
                    
                    <p className="text-white text-xs mb-2">{item.content}</p>
                    
                    {item.type === "highlight" && (
                      <div className="flex items-center justify-between">
                        <button className="flex items-center gap-1 text-white/60 hover:text-white text-[10px] transition-colors">
                          <Heart className="w-2.5 h-2.5" />
                          <span>{item.likes}</span>
                        </button>
                        <button className="text-[10px] py-0.5 px-1.5 bg-[#0C8068]/20 text-[#0C8068] rounded hover:bg-[#0C8068]/30 transition-colors">
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
        
        {/* Desktop Layout - Two-column with scoreboard (50%) on left, and court+feed stacked on right (50%) */}
        <div className="hidden sm:flex w-full h-[calc(100%-40px)]">
          {/* Left Column - Scoreboard (50%) */}
          <div className="w-1/2 pr-2">
            <div className="bg-[#092435] rounded-lg overflow-hidden border border-[#1A4258]/50 flex flex-col h-full">
              <div className="bg-[#0C8068] py-1.5 px-3 uppercase text-white font-semibold text-sm">
                Match Statistics
              </div>
              
              <div className="p-4 flex flex-col flex-1 overflow-auto">
                {/* Score Display */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#176840]">
                      <img src={player1Stats.avatar} alt={player1Stats.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{player1Stats.name}</h3>
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
                      <h3 className="text-white font-semibold mb-1 text-right">{player2Stats.name}</h3>
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
                <div className="bg-[#0A2B3D] px-3 py-2 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-sm mr-2">SET 1:</span>
                  <span className="text-[#176840] font-bold text-base mr-1">11</span>
                  <span className="text-white/50 mr-1">-</span>
                  <span className="text-[#0A4D73] font-bold text-base">9</span>
                </div>
                
                {/* Extended Stats */}
                <div className="grid grid-cols-2 gap-4 my-4">
                  <div className="bg-[#0A2B3D] p-3 rounded">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-4 h-4 text-[#1a9dc3]" />
                      <span className="text-white/70 text-xs uppercase">Top Speed</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#176840] font-bold">{player1Stats.topSpeed}</span>
                      <span className="text-white/50 text-xs">vs</span>
                      <span className="text-[#0A4D73] font-bold">{player2Stats.topSpeed}</span>
                    </div>
                  </div>
                  
                  <div className="bg-[#0A2B3D] p-3 rounded">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-[#1a9dc3]" />
                      <span className="text-white/70 text-xs uppercase">Accuracy</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#176840] font-bold">{player1Stats.shotAccuracy}</span>
                      <span className="text-white/50 text-xs">vs</span>
                      <span className="text-[#0A4D73] font-bold">{player2Stats.shotAccuracy}</span>
                    </div>
                  </div>
                  
                  <div className="bg-[#0A2B3D] p-3 rounded">
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
                  
                  <div className="bg-[#0A2B3D] p-3 rounded">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-4 h-4 text-[#1a9dc3]" />
                      <span className="text-white/70 text-xs uppercase">Reaction Time</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#176840] font-bold">{player1Stats.reactionTime}</span>
                      <span className="text-white/50 text-xs">vs</span>
                      <span className="text-[#0A4D73] font-bold">{player2Stats.reactionTime}</span>
                    </div>
                  </div>
                </div>
                
                {/* Shot Distribution Chart */}
                <div className="mt-4">
                  <h3 className="text-white text-sm font-semibold mb-2">Shot Distribution</h3>
                  <div className="bg-[#0A2B3D] rounded p-4 flex items-center justify-center">
                    <div className="w-full">
                      {/* Shot types */}
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white/70 text-xs">Dinks</span>
                        <span className="text-white/70 text-xs">65%</span>
                      </div>
                      <div className="w-full h-2 bg-[#061620] rounded-full mb-3">
                        <div className="h-full bg-[#176840] rounded-full" style={{ width: '65%' }}></div>
                      </div>
                      
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white/70 text-xs">Drives</span>
                        <span className="text-white/70 text-xs">24%</span>
                      </div>
                      <div className="w-full h-2 bg-[#061620] rounded-full mb-3">
                        <div className="h-full bg-[#0A4D73] rounded-full" style={{ width: '24%' }}></div>
                      </div>
                      
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white/70 text-xs">Volleys</span>
                        <span className="text-white/70 text-xs">11%</span>
                      </div>
                      <div className="w-full h-2 bg-[#061620] rounded-full">
                        <div className="h-full bg-[#e89e25] rounded-full" style={{ width: '11%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Win Probability */}
                <div className="mt-6 bg-[#0A2B3D] rounded p-3">
                  <h3 className="text-white text-sm font-semibold mb-2">Win Probability</h3>
                  <div className="flex items-center">
                    <div className="flex-1 text-[#176840] font-bold text-right pr-2">Alex</div>
                    <div className="w-40 h-3 bg-[#061620] rounded-full overflow-hidden">
                      <div className="h-full bg-[#176840] rounded-l-full" style={{ width: '65%' }}></div>
                      <div className="h-full bg-[#0A4D73] rounded-r-full absolute right-0" style={{ width: '35%' }}></div>
                    </div>
                    <div className="flex-1 text-[#0A4D73] font-bold pl-2">Jordan</div>
                  </div>
                  <div className="flex justify-center mt-1">
                    <span className="text-white/70 text-xs">65% - 35%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Stacked Court View (66%) and Match Feed (33%) */}
          <div className="w-1/2 flex flex-col gap-4 pl-2">
            {/* Court View - Upper right - 66% of height */}
            <div className="h-[66%] relative bg-[#092435] rounded-lg overflow-hidden border border-[#1A4258]/50" ref={courtRef}>
              {/* Dark gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#092435] to-[#061620]"></div>
              
              {/* Pickleball Court with proper colors - elongated vertically */}
              <div className="absolute inset-4 rounded-lg overflow-hidden">
                {/* Green outer area - darker green */}
                <div className="absolute inset-0 bg-[#1E3B20]/90 shadow-inner"></div>
                
                {/* Blue court area with Carolina blue color - elongated vertically */}
                <div style={{ position: "absolute", inset: "5% 15%", background: "#33C3F0", opacity: 0.9, borderRadius: "0.125rem" }}>
                  {/* White lines */}
                  <div className="absolute inset-0 border-2 border-white/90"></div>
                  
                  {/* Net area - center gray strip */}
                  <div className="absolute top-[48%] bottom-[48%] left-0 right-0 bg-black/40 backdrop-blur-[1px]">
                    <div className="h-full w-full border-t border-b border-white/90 bg-white/10"></div>
                  </div>
                  
                  {/* Non-volley zone (kitchen) - top */}
                  <div className="absolute top-0 left-0 right-0 h-[42%] border-b-2 border-white/90">
                    <div style={{ position: "absolute", inset: 0, background: "#33C3F0", opacity: 0.7 }}></div>
                  </div>
                  
                  {/* Non-volley zone (kitchen) - bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-[42%] border-t-2 border-white/90">
                    <div style={{ position: "absolute", inset: 0, background: "#33C3F0", opacity: 0.7 }}></div>
                  </div>
                  
                  {/* Center line */}
                  <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/90 -translate-x-[0.25px]"></div>
                </div>
                
                {/* Additional green court borders */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-x-[13%] inset-y-[3%] border-2 border-[#2A4F2D]/50 rounded-sm"></div>
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
              
              {/* Animated pickleball */}
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
              
              {/* Ball trails for more dynamic movement */}
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
              
              {/* Player positions - Green Team (1 & 2) on top, Blue Team (3 & 4) on bottom */}
              {/* Player 1 - Green team, top left */}
              <div 
                className="absolute z-20 flex items-center justify-center transition-all duration-300"
                style={{ 
                  left: `${player1.x}%`, 
                  top: `25%`,
                  transform: 'translate(-50%, -50%)',
                  filter: 'drop-shadow(0 0 10px rgba(43, 203, 110, 0.8))'
                }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center">
                  <div className="absolute w-full h-full bg-[#176840]/70 rounded-full animate-pulse"></div>
                  <div className="z-10 bg-[#176840] text-white text-xs font-bold w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center border-2 border-white/70">
                    P1
                  </div>
                </div>
              </div>
              
              {/* Player 2 - Green team, top right */}
              <div 
                className="absolute z-20 flex items-center justify-center transition-all duration-300"
                style={{ 
                  left: `${player2.x}%`, 
                  top: `25%`,
                  transform: 'translate(-50%, -50%)',
                  filter: 'drop-shadow(0 0 10px rgba(43, 203, 110, 0.8))'
                }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center">
                  <div className="absolute w-full h-full bg-[#176840]/70 rounded-full animate-pulse"></div>
                  <div className="z-10 bg-[#176840] text-white text-xs font-bold w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center border-2 border-white/70">
                    P2
                  </div>
                </div>
              </div>
              
              {/* Player 3 - Blue team, bottom left */}
              <div 
                className="absolute z-20 flex items-center justify-center transition-all duration-300"
                style={{ 
                  left: `${player3.x}%`, 
                  top: `75%`,
                  transform: 'translate(-50%, -50%)',
                  filter: 'drop-shadow(0 0 8px rgba(26, 157, 195, 0.8))'
                }}
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center">
                  <div className="absolute w-full h-full bg-[#0A4D73]/70 rounded-full animate-pulse"></div>
                  <div className="z-10 bg-[#0A4D73] text-white text-xs font-bold w-5 h-5 md:w-7 md:h-7 rounded-full flex items-center justify-center border-2 border-white/70">
                    P3
                  </div>
                </div>
              </div>
              
              {/* Player 4 - Blue team, bottom right */}
              <div 
                className="absolute z-20 flex items-center justify-center transition-all duration-300"
                style={{ 
                  left: `${player4.x}%`, 
                  top: `75%`,
                  transform: 'translate(-50%, -50%)',
                  filter: 'drop-shadow(0 0 8px rgba(26, 157, 195, 0.8))'
                }}
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center">
                  <div className="absolute w-full h-full bg-[#0A4D73]/70 rounded-full animate-pulse"></div>
                  <div className="z-10 bg-[#0A4D73] text-white text-xs font-bold w-5 h-5 md:w-7 md:h-7 rounded-full flex items-center justify-center border-2 border-white/70">
                    P4
                  </div>
                </div>
              </div>
              
              {/* Team labels for clarity */}
              <div className="absolute top-12 left-3 bg-[#176840]/30 backdrop-blur-sm px-2 py-1 rounded text-xs text-white border border-[#176840]/40 z-10">
                TEAM GREEN
              </div>
              
              <div className="absolute bottom-12 right-3 bg-[#0A4D73]/30 backdrop-blur-sm px-2 py-1 rounded text-xs text-white border border-[#0A4D73]/40 z-10">
                TEAM BLUE
              </div>
            </div>
            
            {/* Match Feed - Lower right - 33% of height (less the gap) */}
            <div className="h-[calc(34%-16px)] bg-[#092435] rounded-lg overflow-hidden border border-[#1A4258]/50 flex flex-col">
              <div className="py-1.5 px-3 flex items-center justify-between border-b border-[#1A4258]/50">
                <span className="uppercase text-white font-semibold text-sm">Match Feed</span>
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
                            <Video className="w-3.5 h-3.5 text-[#2BCB6E]" />
                          ) : item.type === "achievement" ? (
                            <Trophy className="w-3.5 h-3.5 text-[#e89e25]" />
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
                      
                      {item.type === "highlight" && (
                        <div className="flex items-center justify-between">
                          <button className="flex items-center gap-1 text-white/60 hover:text-white text-xs transition-colors">
                            <Heart className="w-3 h-3" />
                            <span>{item.likes}</span>
                          </button>
                          <button className="text-xs py-1 px-2 bg-[#0C8068]/20 text-[#0C8068] rounded hover:bg-[#0C8068]/30 transition-colors">
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
      </div>

      {/* Real-time Analytics Bar */}
      <div className="w-full px-6 py-3 bg-[#092435]/90 backdrop-blur-sm border-t border-[#1A4258]/50 flex items-center justify-between relative z-10 shadow-lg">
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
    </div>
  );
};

export default EnhancedScoreboardView;
