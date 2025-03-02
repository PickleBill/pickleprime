import React, { useState, useRef } from "react";
import { Video, User, Share2, ChevronLeft, ChevronRight, Trophy, Activity, Monitor, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { pillarsData } from "../../data/pillarsData";
import { toast } from "@/components/ui/use-toast";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { motion } from "framer-motion";

interface ActionFooterProps {
  onHighlightClick: () => void;
  onPlayerProfileClick: () => void;
  onShareClick: () => void;
}

const ActionFooter: React.FC<ActionFooterProps> = ({
  onHighlightClick,
  onPlayerProfileClick,
  onShareClick
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  
  // Track active item for demo purposes
  const [activeItem, setActiveItem] = useState<string>("highlights");

  // Define all action buttons including the pillar-based ones
  const actionButtons = [
    {
      id: "highlights",
      label: "Highlights",
      icon: <Video className="w-4 h-4" />,
      onClick: () => {
        setActiveItem("highlights");
        onHighlightClick();
      },
      color: "#1A8D50"
    },
    {
      id: "player-profile",
      label: "Player Profile",
      icon: <User className="w-4 h-4" />,
      onClick: () => {
        setActiveItem("player-profile");
        onPlayerProfileClick();
      },
      color: "#0a2d4a"
    },
    {
      id: "share",
      label: "Share",
      icon: <Share2 className="w-4 h-4" />,
      onClick: () => {
        setActiveItem("share");
        onShareClick();
      },
      color: "#0a2d4a"
    },
    ...pillarsData.map(pillar => ({
      id: pillar.id.toString(),
      label: pillar.title.split(' ')[0], // Just use the first word to keep it short
      icon: pillar.icon,
      onClick: () => {
        setActiveItem(pillar.id.toString());
        
        if (pillar.id === 1) { // Coaching
          toast({
            title: "Coaching View",
            description: "Opening coaching analysis dashboard...",
            duration: 3000,
          });
        } else if (pillar.id === 2) { // Health
          toast({
            title: "Health Metrics",
            description: "Loading player health analytics...",
            duration: 3000,
          });
        } else if (pillar.id === 3) { // Data
          toast({
            title: "Match Data",
            description: "Retrieving advanced match statistics...",
            duration: 3000,
          });
        } else if (pillar.id === 4) { // Connection
          toast({
            title: "Community Feed",
            description: "Loading community engagement metrics...",
            duration: 3000,
          });
        }
      },
      color: pillar.color
    }))
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    
    const scrollAmount = 200; // Pixels to scroll each time
    const currentScroll = scrollRef.current.scrollLeft;
    const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
    
    let newScrollPosition;
    if (direction === 'left') {
      newScrollPosition = Math.max(0, currentScroll - scrollAmount);
    } else {
      newScrollPosition = Math.min(maxScroll, currentScroll + scrollAmount);
    }
    
    scrollRef.current.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth'
    });
    
    // Update state after scroll completes
    setTimeout(() => {
      if (!scrollRef.current) return;
      setScrollPosition(scrollRef.current.scrollLeft);
      setShowLeftArrow(scrollRef.current.scrollLeft > 0);
      setShowRightArrow(scrollRef.current.scrollLeft < (scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 10));
    }, 300);
  };

  // Handle scroll events to update arrow visibility
  const handleScrollEvent = () => {
    if (!scrollRef.current) return;
    setScrollPosition(scrollRef.current.scrollLeft);
    setShowLeftArrow(scrollRef.current.scrollLeft > 0);
    setShowRightArrow(scrollRef.current.scrollLeft < (scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 10));
  };

  // Hexagon dimensions
  const hexSize = 30; // Size of the hexagon (adjust as needed)

  return (
    <div className="bg-[#001a2c]/90 backdrop-blur-md border-t border-[#0a2d4a] py-5 px-4 w-full relative">
      <div className="max-w-screen-lg mx-auto flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <span className="text-white/70 text-sm">Court Visionary™</span>
          </div>
          <div>
            <span className="text-white/70 text-sm">© 2023</span>
          </div>
        </div>
        
        <div className="relative">
          {/* Left Scroll Arrow */}
          <motion.button 
            onClick={() => handleScroll('left')}
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#001a2c]/80 p-1 rounded-full text-white/80 hover:text-white transition-all border border-white/10 backdrop-blur-sm", 
              !showLeftArrow && "opacity-0 pointer-events-none"
            )}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          
          {/* Scrollable Button Container */}
          <div 
            ref={scrollRef}
            className="flex items-center gap-4 overflow-x-auto scrollbar-hide py-2 px-8"
            onScroll={handleScrollEvent}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {actionButtons.map((button) => (
              <motion.button
                key={button.id}
                onClick={button.onClick}
                className="flex flex-col items-center gap-1 min-w-[80px] transition-all duration-300 group"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative">
                  {/* Hexagonal shape with CSS clip-path */}
                  <motion.div 
                    className={`w-12 h-12 flex items-center justify-center text-white transition-all duration-300`}
                    style={{ 
                      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      background: activeItem === button.id 
                        ? `linear-gradient(135deg, ${button.color}, ${button.color}90)`
                        : `linear-gradient(135deg, ${button.color}60, ${button.color}40)`,
                      boxShadow: activeItem === button.id 
                        ? `0 0 15px ${button.color}, 0 0 25px ${button.color}80, inset 0 0 8px rgba(255,255,255,0.4)` 
                        : 'none',
                      border: `1px solid ${activeItem === button.id ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)'}`,
                    }}
                    animate={{ 
                      boxShadow: activeItem === button.id 
                        ? [
                            `0 0 12px ${button.color}90, inset 0 0 6px rgba(255,255,255,0.3)`,
                            `0 0 18px ${button.color}, inset 0 0 10px rgba(255,255,255,0.4)`,
                            `0 0 12px ${button.color}90, inset 0 0 6px rgba(255,255,255,0.3)`
                          ]
                        : 'none'
                    }}
                    transition={{ 
                      repeat: activeItem === button.id ? Infinity : 0, 
                      duration: 2,
                    }}
                  >
                    {/* Inner content with 3D effect */}
                    <div className="flex items-center justify-center w-full h-full transform translate-y-[1px] hover:translate-y-0 transition-transform">
                      {button.icon}
                    </div>
                  </motion.div>
                  
                  {/* 3D bottom edge effect */}
                  {activeItem !== button.id && (
                    <div 
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-11 h-1 opacity-50"
                      style={{ 
                        clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
                        background: `${button.color}30`,
                      }}
                    />
                  )}
                </div>
                
                <motion.span 
                  className={`text-white text-xs font-medium whitespace-nowrap transition-all duration-300
                    ${activeItem === button.id ? 'text-white' : 'text-white/70 group-hover:text-white/90'}`
                  }
                  animate={activeItem === button.id ? {
                    scale: [1, 1.08, 1],
                    transition: { duration: 2, repeat: Infinity }
                  } : {}}
                >
                  {button.label}
                </motion.span>
              </motion.button>
            ))}
          </div>
          
          {/* Right Scroll Arrow */}
          <motion.button 
            onClick={() => handleScroll('right')}
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#001a2c]/80 p-1 rounded-full text-white/80 hover:text-white transition-all border border-white/10 backdrop-blur-sm",
              !showRightArrow && "opacity-0 pointer-events-none"
            )}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
          
          {/* Left Fade Gradient */}
          <div 
            className={cn(
              "absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-[#001a2c] to-transparent pointer-events-none z-[5] transition-opacity",
              !showLeftArrow && "opacity-0"
            )}
          />
          
          {/* Right Fade Gradient */}
          <div 
            className={cn(
              "absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#001a2c] to-transparent pointer-events-none z-[5] transition-opacity",
              !showRightArrow && "opacity-0"
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default ActionFooter;
