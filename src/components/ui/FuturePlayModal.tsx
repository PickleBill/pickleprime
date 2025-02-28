
import React, { useState, useEffect } from "react";
import { X, Video, Activity, Trophy, Monitor, Users, Play, ChevronLeft, ChevronRight, Clock, Zap, Users2, Award, Heart, BarChart2, MessageSquare, Share2 } from "lucide-react";
import AnimatedButton from "./AnimatedButton";

interface FuturePlayModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FuturePlayModal = ({ isOpen, onClose }: FuturePlayModalProps) => {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [showScoreboard, setShowScoreboard] = useState(false);
  const [gameTime, setGameTime] = useState(0);
  const [player1Score, setPlayer1Score] = useState(7);
  const [player2Score, setPlayer2Score] = useState(5);
  const [currentSet, setCurrentSet] = useState(1);
  const [showHighlight, setShowHighlight] = useState(false);
  const [highlightTimer, setHighlightTimer] = useState(0);

  // Reset states when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setActiveSection(null);
      setAnimationComplete(false);
      setShowScoreboard(false);
      setShowHighlight(false);
      
      // Trigger the sequence animation after the modal appears
      const timer = setTimeout(() => {
        setAnimationComplete(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Game clock effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (showScoreboard && !showHighlight) {
      interval = setInterval(() => {
        setGameTime(prev => prev + 1);
        
        // Increased chance to trigger highlights for a more dynamic demo
        if (Math.random() < 0.03) {
          triggerHighlight();
        }
        
        // Increased chance for score to increase for a more dynamic demo
        if (Math.random() < 0.1) {
          if (Math.random() > 0.5) {
            setPlayer1Score(prev => prev + 1);
          } else {
            setPlayer2Score(prev => prev + 1);
          }
        }
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [showScoreboard, showHighlight]);
  
  // Highlight timer effect - faster for demo purposes
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (showHighlight) {
      interval = setInterval(() => {
        setHighlightTimer(prev => {
          if (prev >= 100) {
            setShowHighlight(false);
            return 0;
          }
          return prev + 1.5; // Faster progress for demo
        });
      }, 40); // Faster interval for demo
    }
    
    return () => clearInterval(interval);
  }, [showHighlight]);

  const handlePlayButtonClick = () => {
    setShowScoreboard(true);
  };

  const handleBackButtonClick = () => {
    setShowScoreboard(false);
    setShowHighlight(false);
  };
  
  const triggerHighlight = () => {
    setShowHighlight(true);
    setHighlightTimer(0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;
  
  // Pillar data
  const pillars = [
    {
      id: 1,
      title: "AI Video Capture & Highlights",
      icon: <Video className="w-6 h-6" />,
      color: "#2BCB6E",
      bgImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
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
      bgImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
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
      bgImage: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
      description: "Interactive challenges and competitions that keep players coming back.",
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
      icon: <Monitor className="w-6 h-6" />,
      color: "#7b61ff",
      bgImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
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
      icon: <Users className="w-6 h-6" />,
      color: "#ff617b",
      bgImage: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c",
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

  // Return futuristic scoreboard if active
  if (showScoreboard) {
    return (
      <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in bg-navy-dark">
        {/* Futuristic background */}
        <div 
          className="absolute inset-0 bg-navy-dark"
          style={{
            backgroundImage: `
              radial-gradient(circle at 85% 15%, rgba(26, 157, 195, 0.15), transparent 40%),
              radial-gradient(circle at 15% 85%, rgba(43, 203, 110, 0.15), transparent 40%)
            `,
            backgroundSize: "100% 100%"
          }}
        >
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxMTE4MjgiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6TTAgMzBoMzB2MzBIMHoiIGZpbGw9IiMyQkNCNkUiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')]"></div>
        </div>

        {/* Back button */}
        <button 
          onClick={handleBackButtonClick}
          className="absolute top-5 left-5 z-20 px-4 py-2 bg-navy-light/50 hover:bg-navy-light border border-white/10 rounded-full text-white/80 flex items-center gap-2 backdrop-blur-sm transition-all"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        {/* Main content */}
        <div className="relative w-full h-full flex flex-col">
          {/* Top Bar with logos, time, and indicators */}
          <div className="w-full px-6 py-4 border-b border-white/10 flex items-center justify-between bg-navy-dark/70 backdrop-blur-sm">
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
            
            <div className="flex items-center gap-4">
              <button className="text-white/60 hover:text-white transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="text-white/60 hover:text-white transition-colors">
                <MessageSquare className="w-5 h-5" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 transition-colors rounded-full px-4 py-1 text-white text-sm backdrop-blur-sm">
                UPGRADE VIEW
              </button>
            </div>
          </div>

          {/* Main Game Area with Scoreboard and Visualizations */}
          {showHighlight ? (
            // Highlight Replay View 
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
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ) : (
            // Main Game View
            <div className="flex-1 flex flex-col md:flex-row p-6 gap-6">
              {/* Court Visualization (Left Side) */}
              <div className="flex-1 relative bg-navy-light/30 rounded-2xl overflow-hidden border border-white/10">
                {/* Court background */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1626224583764-f87db24ac4ea')] bg-center bg-cover">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-dark"></div>
                </div>
                
                {/* Court AR overlay visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4/5 h-3/5 border-2 border-primary/40 rounded-lg relative">
                    {/* Court lines */}
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-primary/40"></div>
                    <div className="absolute top-0 bottom-0 left-1/3 w-px bg-primary/40"></div>
                    <div className="absolute top-0 bottom-0 right-1/3 w-px bg-primary/40"></div>
                    
                    {/* Player positions */}
                    <div className="absolute bottom-1/4 left-1/4 w-6 h-6 rounded-full bg-[#1a9dc3]/90 border-2 border-white/50 shadow-lg shadow-[#1a9dc3]/30 flex items-center justify-center text-xs text-white">P1</div>
                    <div className="absolute top-1/4 right-1/4 w-6 h-6 rounded-full bg-primary/90 border-2 border-white/50 shadow-lg shadow-primary/30 flex items-center justify-center text-xs text-white">P2</div>
                    
                    {/* Ball trajectory */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path 
                        d="M25,75 Q50,30 75,25" 
                        fill="none" 
                        stroke="#2BCB6E" 
                        strokeWidth="0.5" 
                        strokeDasharray="2 1"
                        className="animate-pulse"
                      />
                      <circle cx="75" cy="25" r="1.5" fill="#2BCB6E" className="animate-pulse" />
                    </svg>
                    
                    {/* Shot speed indicator */}
                    <div className="absolute top-1/3 right-1/3 bg-navy-dark/80 backdrop-blur-sm px-2 py-1 rounded-lg border border-white/10 text-white/90 text-xs">
                      38 mph
                    </div>
                  </div>
                </div>
                
                {/* Realtime analytics */}
                <div className="absolute bottom-4 left-4 right-4 bg-navy-dark/80 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-primary font-bold text-sm">REAL-TIME INSIGHTS</h3>
                    <div className="text-white/50 text-xs">UPDATING LIVE</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-navy-light/50 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Zap className="w-4 h-4 text-[#1a9dc3]" />
                        <span className="text-white/70 text-xs">RALLY LENGTH</span>
                      </div>
                      <div className="text-white font-bold">12 SHOTS</div>
                      <div className="text-[#1a9dc3] text-xs">+2 FROM AVG</div>
                    </div>
                    
                    <div className="bg-navy-light/50 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Zap className="w-4 h-4 text-primary" />
                        <span className="text-white/70 text-xs">TOP SPEED</span>
                      </div>
                      <div className="text-white font-bold">52 MPH</div>
                      <div className="text-primary text-xs">NEW MATCH HIGH</div>
                    </div>
                    
                    <div className="bg-navy-light/50 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Activity className="w-4 h-4 text-[#e89e25]" />
                        <span className="text-white/70 text-xs">SHOT SELECTION</span>
                      </div>
                      <div className="text-white font-bold">DINKS: 65%</div>
                      <div className="text-[#e89e25] text-xs">DRIVES: 35%</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Scoreboard and Stats (Right Side) */}
              <div className="w-full md:w-96 flex flex-col gap-4">
                {/* Score Display */}
                <div className="bg-navy-light/30 rounded-2xl overflow-hidden border border-white/10">
                  <div className="bg-gradient-to-r from-primary/20 to-[#1a9dc3]/20 px-6 py-3 border-b border-white/10">
                    <h2 className="text-white font-bold text-center">LIVE SCOREBOARD</h2>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#1a9dc3] mb-2">
                          <img src={player1Stats.avatar} alt="Player 1" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-white font-medium">{player1Stats.name}</div>
                      </div>
                      
                      <div className="flex items-center gap-6">
                        <div className="text-[#1a9dc3] text-6xl font-bold">{player1Score}</div>
                        <div className="text-white/30 text-xl">-</div>
                        <div className="text-primary text-6xl font-bold">{player2Score}</div>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary mb-2">
                          <img src={player2Stats.avatar} alt="Player 2" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-white font-medium">{player2Stats.name}</div>
                      </div>
                    </div>
                    
                    {/* Set History */}
                    <div className="flex justify-center gap-4 mb-6">
                      <div className="bg-navy-dark/50 px-3 py-1 rounded-lg border border-white/10 flex items-center gap-2">
                        <span className="text-white/70 text-sm">SET 1:</span>
                        <span className="text-[#1a9dc3] font-medium">11</span>
                        <span className="text-white/50">-</span>
                        <span className="text-primary font-medium">9</span>
                      </div>
                      {currentSet > 1 && (
                        <div className="bg-navy-dark/50 px-3 py-1 rounded-lg border border-white/10 flex items-center gap-2">
                          <span className="text-white/70 text-sm">SET 2:</span>
                          <span className="text-[#1a9dc3] font-medium">7</span>
                          <span className="text-white/50">-</span>
                          <span className="text-primary font-medium">5</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Stats comparison */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="text-right text-white/80 text-sm w-24">{player1Stats.topSpeed}</div>
                        <div className="flex-1 h-2 bg-navy-dark/50 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#1a9dc3] to-primary" style={{ width: "65%" }}></div>
                        </div>
                        <div className="text-left text-white/80 text-sm w-24">{player2Stats.topSpeed}</div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="text-right text-white/80 text-sm w-24">{player1Stats.shotAccuracy}</div>
                        <div className="flex-1 h-2 bg-navy-dark/50 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#1a9dc3] to-primary" style={{ width: "92%" }}></div>
                        </div>
                        <div className="text-left text-white/80 text-sm w-24">{player2Stats.shotAccuracy}</div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="text-right text-white/80 text-sm w-24">{player1Stats.spinRate}</div>
                        <div className="flex-1 h-2 bg-navy-dark/50 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#1a9dc3] to-primary" style={{ width: "45%" }}></div>
                        </div>
                        <div className="text-left text-white/80 text-sm w-24">{player2Stats.spinRate}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Game Feed & Highlights */}
                <div className="bg-navy-light/30 rounded-2xl overflow-hidden border border-white/10 flex-1">
                  <div className="bg-gradient-to-r from-primary/20 to-[#1a9dc3]/20 px-6 py-3 border-b border-white/10 flex justify-between items-center">
                    <h2 className="text-white font-bold">MATCH FEED</h2>
                    <div className="flex gap-2">
                      <button className="text-white/60 hover:text-white transition-colors">
                        <Users2 className="w-4 h-4" />
                      </button>
                      <button className="text-white/60 hover:text-white transition-colors">
                        <BarChart2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-4 h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                    <div className="space-y-4">
                      <div onClick={triggerHighlight} className="bg-navy-dark/50 rounded-lg p-3 border border-white/10 hover:bg-navy-dark/70 transition-colors cursor-pointer">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Video className="w-4 h-4 text-primary" />
                            <span className="text-primary font-medium text-sm">HIGHLIGHT</span>
                          </div>
                          <span className="text-white/50 text-xs">00:34</span>
                        </div>
                        <p className="text-white/80 text-sm mb-2">Amazing cross-court winner by Alex!</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <button className="text-white/60 hover:text-white transition-colors">
                              <Heart className="w-4 h-4" />
                            </button>
                            <span className="text-white/60 text-xs">24</span>
                          </div>
                          <div className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full">
                            CLICK TO VIEW
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-navy-dark/50 rounded-lg p-3 border border-white/10">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Award className="w-4 h-4 text-[#e89e25]" />
                            <span className="text-[#e89e25] font-medium text-sm">ACHIEVEMENT</span>
                          </div>
                          <span className="text-white/50 text-xs">01:12</span>
                        </div>
                        <p className="text-white/80 text-sm">Jordan reached 50+ mph serve for the first time!</p>
                      </div>
                      
                      <div className="bg-navy-dark/50 rounded-lg p-3 border border-white/10">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Activity className="w-4 h-4 text-[#1a9dc3]" />
                            <span className="text-[#1a9dc3] font-medium text-sm">STAT ALERT</span>
                          </div>
                          <span className="text-white/50 text-xs">02:45</span>
                        </div>
                        <p className="text-white/80 text-sm">Alex winning 80% of rallies longer than 8 shots.</p>
                      </div>
                      
                      <div onClick={triggerHighlight} className="bg-navy-dark/50 rounded-lg p-3 border border-white/10 hover:bg-navy-dark/70 transition-colors cursor-pointer">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Video className="w-4 h-4 text-primary" />
                            <span className="text-primary font-medium text-sm">HIGHLIGHT</span>
                          </div>
                          <span className="text-white/50 text-xs">03:17</span>
                        </div>
                        <p className="text-white/80 text-sm mb-2">Perfect drop shot by Jordan!</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <button className="text-white/60 hover:text-white transition-colors">
                              <Heart className="w-4 h-4" />
                            </button>
                            <span className="text-white/60 text-xs">18</span>
                          </div>
                          <div className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full">
                            CLICK TO VIEW
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Bottom bar with sponsor information */}
          <div className="w-full p-4 border-t border-white/10 bg-navy-dark/80 backdrop-blur-sm flex justify-between items-center">
            <div className="text-white/40 text-sm">POWERED BY SWINGNET</div>
            
            <div className="flex items-center gap-6">
              <div className="text-white/40 text-xs">SPONSORED BY</div>
              <div className="text-white/60 font-medium">PICKLEVILLE SPORTS</div>
              <div className="text-white/60 font-medium">PADDLE TECH PRO</div>
              <div className="text-white/60 font-medium">COURT KINGS</div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="h-1 w-10 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
              <div className="h-1 w-6 bg-white/20 rounded-full"></div>
              <div className="h-1 w-6 bg-white/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-4 md:p-0">
      {/* Backdrop with futuristic pattern */}
      <div 
        className="absolute inset-0 bg-navy/90 backdrop-blur-sm animate-fade-in"
        style={{
          backgroundImage: `
            radial-gradient(circle at 15% 85%, rgba(43, 203, 110, 0.1), transparent 25%),
            radial-gradient(circle at 85% 15%, rgba(26, 157, 195, 0.1), transparent 25%)
          `,
          backgroundSize: "100% 100%"
        }}
        onClick={onClose}
      >
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxMTE4MjgiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6TTAgMzBoMzB2MzBIMHoiIGZpbGw9IiMyQkNCNkUiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')]"></div>
        
        {/* Animated neon lines */}
        <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="absolute inset-y-0 left-1/3 w-px bg-gradient-to-b from-transparent via-[#1a9dc3]/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-primary/20 via-transparent to-primary/20"></div>
      </div>

      {/* Modal Content Container */}
      <div 
        className="relative w-full max-w-5xl max-h-[90vh] bg-navy-dark/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-white/10 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with tagline */}
        <div className="relative p-6 md:p-8 border-b border-white/10">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxMTE4MjgiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6TTAgMzBoMzB2MzBIMHoiIGZpbGw9IiMyQkNCNkUiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')]"></div>
          
          <div className="relative flex flex-col items-center text-center">
            <span className="inline-block bg-white/10 backdrop-blur-sm text-primary/80 px-4 py-1 rounded-full text-xs font-medium mb-2 border border-primary/20">
              SwingNet
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
              The Future of Play
            </h2>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative p-4 md:p-8 overflow-auto max-h-[calc(90vh-12rem)]">
          {/* Pillars layout moved up */}
          <div className="relative mb-6">
            {/* Overlay Play Button (centered absolute positioning) - moved higher */}
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className={`${animationComplete ? 'opacity-100 scale-100' : 'opacity-0 scale-50'} transition-all duration-700`}>
                <button 
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/90 hover:bg-primary shadow-lg shadow-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-105 backdrop-blur-sm animate-pulse-slow"
                  aria-label="Launch Digital Scoreboard"
                  onClick={handlePlayButtonClick}
                >
                  <Play className="w-10 h-10 md:w-12 md:h-12 text-white fill-white" />
                </button>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 text-sm whitespace-nowrap">
                  Click to experience live demo
                </div>
              </div>
            </div>
            
            {/* Pillars in a circle layout */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 relative">
              {pillars.map((pillar, index) => {
                // Calculate delay for sequential animation
                const animationDelay = 200 + (index * 150);
                
                return (
                  <div 
                    key={pillar.id}
                    className={`relative bg-navy-light/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 transition-all duration-500 ${
                      activeSection === pillar.id ? 'ring-2 ring-offset-2 ring-offset-navy ring-[' + pillar.color + ']' : 'hover:bg-navy-light'
                    } ${
                      animationComplete ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ 
                      transitionDelay: `${animationDelay}ms`,
                    }}
                    onClick={() => setActiveSection(activeSection === pillar.id ? null : pillar.id)}
                  >
                    {/* Pillar background image - shown when active */}
                    {activeSection === pillar.id && (
                      <div className="absolute inset-0 opacity-20 transition-opacity duration-500">
                        <img 
                          src={pillar.bgImage} 
                          alt="" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/70 to-transparent"></div>
                      </div>
                    )}
                    
                    {/* Top bar with color */}
                    <div 
                      className="h-1 w-full" 
                      style={{ backgroundColor: pillar.color }}
                    ></div>
                    
                    <div className="p-4 md:p-5">
                      {/* Icon and Title */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-full" style={{ backgroundColor: `${pillar.color}20` }}>
                          <div style={{ color: pillar.color }}>
                            {pillar.icon}
                          </div>
                        </div>
                        <h3 className="text-white font-semibold leading-tight">
                          {pillar.title}
                        </h3>
                      </div>
                      
                      {/* Description */}
                      <p className="text-white/70 text-sm mb-4">
                        {pillar.description}
                      </p>
                      
                      {/* Bullets - shown when active */}
                      {activeSection === pillar.id && (
                        <div className="space-y-2 animate-fade-in">
                          {pillar.bullets.map((bullet, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full mt-1.5" style={{ backgroundColor: pillar.color }}></div>
                              <span className="text-sm text-white/80">{bullet}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {/* Learn more link */}
                      <div className="mt-4 text-right">
                        <button 
                          className="text-sm font-medium hover:opacity-80 transition-opacity flex items-center gap-1"
                          style={{ color: pillar.color }}
                        >
                          {activeSection === pillar.id ? 'Close' : 'Learn more'}
                          <svg 
                            width="16" 
                            height="16" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                            className={`transition-transform duration-300 ${activeSection === pillar.id ? 'rotate-180' : ''}`}
                          >
                            <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    {/* Connecting lines (only visible in mobile view) */}
                    {index < pillars.length - 1 && (
                      <div className="absolute left-1/2 -bottom-4 w-px h-4 bg-primary/30 md:hidden"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Animated data flow visualization */}
          <div className="relative h-10 my-8 overflow-hidden">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-px bg-primary/20"></div>
            </div>
            <div className="absolute inset-y-0 left-0 animate-[slideRight_8s_linear_infinite]">
              <div className="flex items-center gap-12">
                {[...Array(10)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
                  ></div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Central Statement - moved below the data flow */}
          <div className={`text-center max-w-3xl mx-auto mt-4 mb-8 ${animationComplete ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'} transition-all duration-1000`}>
            <p className="text-white/60 text-sm md:text-base leading-relaxed">
              "We didn't just design a scheduling app; we built a full engagement ecosystem. 
              From highlight reels to analytics that keep players obsessed, 
              to interactive scoreboards for sponsor revenue— 
              it's a holistic flywheel of user attraction, revenue generation, and brand loyalty."
            </p>
          </div>
          
          {/* Bottom content */}
          <div className="text-center mb-4">
            <p className="text-white/50 text-xs max-w-2xl mx-auto">
              Our holistic platform creates a powerful network effect: more players generate more content, 
              which attracts more sponsors, driving more revenue for facilities and enabling greater innovation.
            </p>
          </div>
        </div>
          
        {/* Footer */}
        <div className="p-6 border-t border-white/10 flex justify-between items-center bg-navy-dark">
          <div className="text-white/60 text-sm">
            Powered by SwingNet AI
          </div>
          <AnimatedButton onClick={onClose} size="md">
            Back to Home
          </AnimatedButton>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1a9dc3]/5 rounded-full blur-3xl -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
        {/* Animated corner accents */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/30 rounded-tl-xl pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#1a9dc3]/30 rounded-tr-xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#1a9dc3]/30 rounded-bl-xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/30 rounded-br-xl pointer-events-none"></div>
      </div>
    </div>
  );
};

export default FuturePlayModal;
