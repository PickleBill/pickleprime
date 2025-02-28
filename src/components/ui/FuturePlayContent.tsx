
import React from "react";
import { Video, Activity, Trophy, Monitor, Users, Play, Zap } from "lucide-react";
import AnimatedButton from "./AnimatedButton";

interface FuturePlayContentProps {
  onLaunchScoreboard: () => void;
}

const FuturePlayContent: React.FC<FuturePlayContentProps> = ({ onLaunchScoreboard }) => {
  // Pillar data
  const pillars = [
    {
      id: 1,
      title: "AI Video Capture",
      icon: <Video className="w-5 h-5" />,
      color: "#2BCB6E",
      description: "Smart cameras track gameplay and create instant highlights",
    },
    {
      id: 2,
      title: "Advanced Analytics",
      icon: <Activity className="w-5 h-5" />,
      color: "#1a9dc3",
      description: "Performance metrics help players improve their skills",
    },
    {
      id: 3,
      title: "Gamification",
      icon: <Trophy className="w-5 h-5" />,
      color: "#e89e25",
      description: "Interactive challenges and rewards keep players engaged",
    },
    {
      id: 4,
      title: "Digital Displays",
      icon: <Monitor className="w-5 h-5" />,
      color: "#7b61ff",
      description: "Interactive screens enhance the on-court experience",
    },
    {
      id: 5,
      title: "Community",
      icon: <Users className="w-5 h-5" />,
      color: "#ff617b",
      description: "Connect players and build thriving communities",
    }
  ];

  return (
    <div className="relative p-6 bg-navy-dark rounded-xl overflow-hidden border border-white/10">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxMTE4MjgiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6TTAgMzBoMzB2MzBIMHoiIGZpbGw9IiMyQkNCNkUiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')]"></div>
      
      <div 
        className="absolute inset-0 bg-navy-dark"
        style={{
          backgroundImage: `
            radial-gradient(circle at 85% 15%, rgba(14, 165, 233, 0.15), transparent 40%),
            radial-gradient(circle at 15% 85%, rgba(43, 203, 110, 0.15), transparent 40%)
          `,
          backgroundSize: "100% 100%"
        }}
      ></div>
      
      {/* Header with tagline */}
      <div className="relative mb-6">
        <div className="flex items-center justify-center mb-3">
          <span className="inline-block bg-white/10 text-primary/80 px-3 py-1 rounded-full text-xs font-medium border border-primary/20">
            SwingNet
          </span>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-4">
          The Future of Play
        </h3>
        <p className="text-white/70 text-sm text-center max-w-2xl mx-auto">
          Revolutionary digital experiences that transform racquet sports through technology.
        </p>
      </div>
      
      {/* Pillars */}
      <div className="grid grid-cols-5 gap-3 mb-6">
        {pillars.map((pillar) => (
          <div 
            key={pillar.id}
            className="bg-navy-light/50 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:bg-navy-light/70 transition-all duration-300"
          >
            {/* Top bar with color */}
            <div 
              className="h-1 w-full" 
              style={{ backgroundColor: pillar.color }}
            ></div>
            
            <div className="p-3">
              {/* Icon and Title */}
              <div className="flex flex-col items-center text-center mb-2">
                <div className="p-2 rounded-full mb-2" style={{ backgroundColor: `${pillar.color}20` }}>
                  <div style={{ color: pillar.color }}>
                    {pillar.icon}
                  </div>
                </div>
                <h4 className="text-white text-sm font-medium">
                  {pillar.title}
                </h4>
              </div>
              
              {/* Description */}
              <p className="text-white/70 text-xs text-center">
                {pillar.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Animated data flow visualization (green flashing lines) */}
      <div className="relative h-8 my-4 overflow-hidden">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-px bg-primary/20"></div>
        </div>
        <div className="absolute inset-y-0 left-0 animate-[dataFlow_8s_linear_infinite]">
          <div className="flex items-center gap-12">
            {[...Array(10)].map((_, i) => (
              <div 
                key={i} 
                className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
              ></div>
            ))}
          </div>
        </div>
        
        {/* Add animation to global styles with a standard style tag */}
        <style>
          {`
            @keyframes dataFlow {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(100%);
              }
            }
          `}
        </style>
      </div>
      
      {/* Live Scoreboard Preview */}
      <div className="flex flex-col items-center justify-center relative bg-navy-light/30 rounded-lg p-4 border border-white/10 mb-4">
        <div className="flex flex-col text-center mb-3">
          <div className="text-2xl font-bold flex items-center justify-center">
            <span className="text-[#1a9dc3]">17</span>
            <span className="text-white mx-2">-</span>
            <span className="text-primary">24</span>
          </div>
          <div className="flex justify-center gap-4 mt-2">
            <div className="bg-navy-dark/70 backdrop-blur-sm px-2 py-1 rounded text-xs flex items-center gap-1">
              <Zap className="w-3 h-3 text-[#1a9dc3]" />
              <span className="text-white">52 MPH</span>
            </div>
            <div className="bg-navy-dark/70 backdrop-blur-sm px-2 py-1 rounded text-xs flex items-center gap-1">
              <Activity className="w-3 h-3 text-primary" />
              <span className="text-white">92% Accuracy</span>
            </div>
          </div>
        </div>
        
        <AnimatedButton 
          onClick={onLaunchScoreboard} 
          size="sm" 
          className="bg-gradient-to-r from-primary to-[#1a9dc3]"
        >
          <div className="flex items-center gap-2">
            <Play className="w-4 h-4" />
            <span>Experience Live Scoreboard</span>
          </div>
        </AnimatedButton>
        
        <p className="text-white/50 text-xs mt-3 text-center">
          Digital court displays with real-time stats and AI highlights
        </p>
      </div>
      
      {/* Quote */}
      <div className="text-center border-t border-white/10 pt-4">
        <p className="text-white/60 text-xs italic">
          "We didn't just design a scheduling app; we built a full engagement ecosystem —
          it's a holistic flywheel of user attraction, revenue generation, and brand loyalty."
        </p>
      </div>
    </div>
  );
};

export default FuturePlayContent;
