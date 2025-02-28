
import React, { useState, useEffect } from "react";
import { X, Video, Activity, Trophy, Monitor, Users, Play } from "lucide-react";
import AnimatedButton from "./AnimatedButton";

interface FuturePlayModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FuturePlayModal = ({ isOpen, onClose }: FuturePlayModalProps) => {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [animationComplete, setAnimationComplete] = useState(false);

  // Reset states when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setActiveSection(null);
      setAnimationComplete(false);
      
      // Trigger the sequence animation after the modal appears
      const timer = setTimeout(() => {
        setAnimationComplete(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

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
              PickleBills
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
              SwingNet: The Future of Play
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
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/90 hover:bg-primary shadow-lg shadow-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                  aria-label="Launch Digital Scoreboard"
                >
                  <Play className="w-10 h-10 md:w-12 md:h-12 text-white fill-white" />
                </button>
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
            Powered by PickleBills AI
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
