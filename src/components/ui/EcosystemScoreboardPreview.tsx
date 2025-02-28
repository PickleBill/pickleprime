
import React, { useState, useEffect, useRef } from "react";
import { Play, Video, Activity, Trophy, Zap, Heart, Award, BarChart2, ChevronRight, ChevronLeft, Users } from "lucide-react";
import AnimatedButton from "./AnimatedButton";

interface EcosystemScoreboardPreviewProps {
  onLaunchFullView: () => void;
}

const EcosystemScoreboardPreview: React.FC<EcosystemScoreboardPreviewProps> = ({ 
  onLaunchFullView 
}) => {
  const [player1Score, setPlayer1Score] = useState(7);
  const [player2Score, setPlayer2Score] = useState(5);
  const [gameTime, setGameTime] = useState(10);
  const [ballPosition, setBallPosition] = useState({ x: 25, y: 75 });
  const [ballDirection, setBallDirection] = useState({ x: 3, y: -3 }); // Faster ball movement
  const [activePillar, setActivePillar] = useState(0);
  const [activeView, setActiveView] = useState(0);
  const courtRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Screen views for the carousel
  const screenViews = [
    {
      id: 1,
      title: "Live Court View",
      image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea",
      description: "Real-time analytics and court visualization"
    },
    {
      id: 2,
      title: "Player Stats",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d",
      description: "Comprehensive performance tracking"
    },
    {
      id: 3,
      title: "Match Highlights",
      image: "https://images.unsplash.com/photo-1511067007398-7e4b90cfa4bc",
      description: "AI-generated video clips of key moments"
    },
    {
      id: 4,
      title: "Community Feed",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      description: "Social engagement and player connections"
    }
  ];

  // Pillars to showcase in the rotating display
  const pillars = [
    {
      id: 1,
      title: "AI Video Analysis",
      icon: <Video className="w-5 h-5" />,
      color: "#2BCB6E",
      description: "Smart cameras tracking shots and generating highlights in real-time"
    },
    {
      id: 2,
      title: "Performance Analytics",
      icon: <Activity className="w-5 h-5" />,
      color: "#1a9dc3",
      description: "Real-time metrics on speed, spin rate, and shot placement"
    },
    {
      id: 3,
      title: "Gamification",
      icon: <Trophy className="w-5 h-5" />,
      color: "#e89e25",
      description: "Achievement systems and challenges that keep players engaged"
    },
    {
      id: 4,
      title: "Digital Displays",
      icon: <BarChart2 className="w-5 h-5" />,
      color: "#7b61ff",
      description: "Interactive court-side screens enhancing the live experience"
    },
    {
      id: 5,
      title: "Community",
      icon: <Users className="w-5 h-5" />,
      color: "#ff617b",
      description: "Social connections and skill-based matchmaking"
    }
  ];

  // Game clock effect with accelerated scoring for preview - faster updates
  useEffect(() => {
    const interval = setInterval(() => {
      setGameTime(prev => (prev + 1) % 60);
      
      // Higher chance for score to increase in preview (increased probability)
      if (Math.random() < 0.25) { // Increased from 0.15
        if (Math.random() > 0.5) {
          setPlayer1Score(prev => prev + 1);
        } else {
          setPlayer2Score(prev => prev + 1);
        }
      }
      
      // Rotate through pillars faster
      setActivePillar(prev => (prev + 1) % pillars.length);
    }, 2000); // Reduced from 3000ms to 2000ms
    
    return () => clearInterval(interval);
  }, []);

  // Screen view carousel rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveView(prev => (prev + 1) % screenViews.length);
    }, 4000); // Change every 4 seconds
    
    return () => clearInterval(interval);
  }, []);

  // Ball movement animation - faster updates
  useEffect(() => {
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
        
        return { 
          x: nextX <= 0 ? 0 : nextX >= 100 ? 100 : nextX,
          y: nextY <= 0 ? 0 : nextY >= 100 ? 100 : nextY
        };
      });
    };
    
    const animationInterval = setInterval(moveBall, 40); // Faster updates (was 50ms)
    return () => clearInterval(animationInterval);
  }, [ballDirection]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Navigate carousel
  const nextView = () => {
    setActiveView(prev => (prev + 1) % screenViews.length);
  };

  const prevView = () => {
    setActiveView(prev => (prev - 1 + screenViews.length) % screenViews.length);
  };

  return (
    <div className="bg-navy-dark rounded-xl overflow-hidden border border-white/10 relative">
      {/* Header bar */}
      <div className="bg-gradient-to-r from-primary/20 to-[#0EA5E9]/20 px-4 py-2 border-b border-white/10 flex justify-between items-center">
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
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxMTE4MjgiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6TTAgMzBoMzB2MzBIMHoiIGZpbGw9IiMyQkNCNkUiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')]"></div>
        
        {/* Background gradients */}
        <div className="absolute inset-0 bg-navy-dark"
          style={{
            backgroundImage: `
              radial-gradient(circle at 85% 15%, rgba(14, 165, 233, 0.15), transparent 40%),
              radial-gradient(circle at 15% 85%, rgba(43, 203, 110, 0.15), transparent 40%)
            `,
            backgroundSize: "100% 100%"
          }}
        ></div>
        
        {/* First Row: Court and Rotating Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Court side */}
          <div className="relative h-64 p-6" ref={courtRef}>
            {/* Court */}
            <div className="absolute inset-4 rounded-lg border-2 border-[#0EA5E9]/60 overflow-hidden">
              {/* Court background - brighter blue as requested */}
              <div className="absolute inset-0 bg-[#0EA5E9]/10"></div> {/* Increased brightness */}
              
              {/* Court center line */}
              <div className="absolute top-0 bottom-0 left-1/2 w-px bg-[#0EA5E9]/60"></div> {/* More visible lines */}
              <div className="absolute top-1/2 left-0 right-0 h-px bg-[#0EA5E9]/60"></div>
              
              {/* Service boxes */}
              <div className="absolute top-0 right-0 left-1/2 bottom-1/2 border-b border-l border-[#0EA5E9]/60"></div>
              <div className="absolute top-0 left-0 right-1/2 bottom-1/2 border-b border-r border-[#0EA5E9]/60"></div>
              <div className="absolute top-1/2 right-0 left-1/2 bottom-0 border-t border-l border-[#0EA5E9]/60"></div>
              <div className="absolute top-1/2 left-0 right-1/2 bottom-0 border-t border-r border-[#0EA5E9]/60"></div>
              
              {/* Player positions */}
              <div className="absolute bottom-1/4 left-1/4 w-4 h-4 rounded-full bg-[#1a9dc3]/90 border border-white/50 shadow-sm"></div>
              <div className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-primary/90 border border-white/50 shadow-sm"></div>
              
              {/* Animated ball */}
              <div 
                className="absolute w-3 h-3 rounded-full bg-white shadow-md"
                style={{ 
                  left: `${ballPosition.x}%`, 
                  top: `${ballPosition.y}%`,
                  transform: 'translate(-50%, -50%)',
                  transition: 'left 0.05s linear, top 0.05s linear'
                }}
              ></div>
              
              {/* Ball trail - extended for more visibility */}
              <div 
                className="absolute w-3 h-3 rounded-full bg-white/20 blur-sm"
                style={{ 
                  left: `${ballPosition.x - ballDirection.x * 2}%`, 
                  top: `${ballPosition.y - ballDirection.y * 2}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              ></div>
              <div 
                className="absolute w-2 h-2 rounded-full bg-white/10 blur-sm"
                style={{ 
                  left: `${ballPosition.x - ballDirection.x * 4}%`, 
                  top: `${ballPosition.y - ballDirection.y * 4}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              ></div>
              
              {/* Shot meter */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-navy-dark/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-white/90 border border-white/10 flex items-center gap-1">
                <Zap className="w-3 h-3 text-[#0EA5E9]" />
                <span>{Math.floor(Math.random() * 20) + 30} mph</span>
              </div>
            </div>
            
            {/* Score overlay */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 flex items-center gap-3 bg-navy-dark/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
              <span className="text-[#1a9dc3] font-bold text-lg">{player1Score}</span>
              <span className="text-white/50">-</span>
              <span className="text-primary font-bold text-lg">{player2Score}</span>
            </div>
          </div>
          
          {/* Pillar rotation side */}
          <div className="relative h-64 p-6 border-l border-white/10 flex flex-col justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-navy-dark to-transparent opacity-50"></div>
            
            {/* Rotating pillars */}
            <div className="relative space-y-4">
              {pillars.map((pillar, index) => (
                <div 
                  key={pillar.id}
                  className={`transition-all duration-500 ${
                    index === activePillar 
                      ? 'opacity-100 transform-none' 
                      : 'opacity-0 translate-x-8 absolute inset-0'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`p-2 rounded-full`} style={{ backgroundColor: `${pillar.color}20` }}>
                      <div style={{ color: pillar.color }}>
                        {pillar.icon}
                      </div>
                    </div>
                    <h3 className="text-white font-semibold">{pillar.title}</h3>
                  </div>
                  <p className="text-white/70 text-sm">{pillar.description}</p>
                </div>
              ))}
              
              {/* Navigation dots */}
              <div className="flex gap-1.5 mt-4">
                {pillars.map((pillar, index) => (
                  <div 
                    key={`dot-${pillar.id}`}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      index === activePillar ? 'bg-white' : 'bg-white/30'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Second Row: Carousel of Screen Views */}
        <div className="relative h-44 border-t border-white/10 overflow-hidden" ref={carouselRef}>
          {/* Carousel navigation buttons */}
          <button 
            onClick={prevView}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-navy-dark/70 hover:bg-navy-dark transition-colors p-1 rounded-full backdrop-blur-sm border border-white/10 text-white"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={nextView}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-navy-dark/70 hover:bg-navy-dark transition-colors p-1 rounded-full backdrop-blur-sm border border-white/10 text-white"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          
          {/* Screen views carousel */}
          <div 
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeView * 100}%)` }}
          >
            {screenViews.map((view, index) => (
              <div 
                key={view.id} 
                className="min-w-full h-full relative flex-shrink-0"
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <img 
                    src={view.image} 
                    alt={view.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-navy-dark/70"></div>
                </div>
                
                {/* Overlay content */}
                <div className="relative z-10 p-4 flex flex-col h-full justify-end">
                  <h3 className="text-white font-bold text-lg">{view.title}</h3>
                  <p className="text-white/70 text-sm">{view.description}</p>
                  
                  {/* Progress indicator */}
                  <div className="flex gap-1 mt-4">
                    {screenViews.map((_, i) => (
                      <div 
                        key={i}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          i === activeView ? 'bg-primary w-8' : 'bg-white/30 w-4'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Button placed at the bottom of the carousel */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
            <AnimatedButton onClick={onLaunchFullView} size="sm">
              <div className="flex items-center gap-1">
                <Play className="w-4 h-4" />
                <span>Experience the Future of Play</span>
              </div>
            </AnimatedButton>
            <p className="text-white/50 text-xs text-center mt-2">
              Explore our comprehensive ecosystem that transforms racquet sports with digital innovation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcosystemScoreboardPreview;
