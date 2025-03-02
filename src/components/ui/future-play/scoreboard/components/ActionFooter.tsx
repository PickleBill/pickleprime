
import React, { useState, useRef } from "react";
import { Video, User, Share2, ChevronLeft, ChevronRight, Trophy, Activity, Monitor, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { pillarsData } from "../../data/pillarsData";

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

  // Define all action buttons including the pillar-based ones
  const actionButtons = [
    {
      id: "highlights",
      label: "Highlights",
      icon: <Video className="w-4 h-4" />,
      onClick: onHighlightClick,
      color: "#1A8D50"
    },
    {
      id: "player-profile",
      label: "Player Profile",
      icon: <User className="w-4 h-4" />,
      onClick: onPlayerProfileClick,
      color: "#0a2d4a"
    },
    {
      id: "share",
      label: "Share",
      icon: <Share2 className="w-4 h-4" />,
      onClick: onShareClick,
      color: "#0a2d4a"
    },
    ...pillarsData.map(pillar => ({
      id: pillar.id.toString(),
      label: pillar.title.split(' ')[0], // Just use the first word to keep it short
      icon: pillar.icon,
      onClick: () => console.log(`Clicked on ${pillar.title}`),
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

  return (
    <div className="bg-[#001a2c] border-t border-[#0a2d4a] py-5 px-4 w-full relative">
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
          <button 
            onClick={() => handleScroll('left')}
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#001a2c]/80 p-1 rounded-full text-white/80 hover:text-white transition-all", 
              !showLeftArrow && "opacity-0 pointer-events-none"
            )}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          {/* Scrollable Button Container */}
          <div 
            ref={scrollRef}
            className="flex items-center gap-4 overflow-x-auto scrollbar-hide py-2 px-8"
            onScroll={handleScrollEvent}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {actionButtons.map((button) => (
              <button
                key={button.id}
                onClick={button.onClick}
                className="flex flex-col items-center gap-1 min-w-[80px] transition-transform hover:scale-105"
              >
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white" 
                  style={{ backgroundColor: button.color }}
                >
                  {button.icon}
                </div>
                <span className="text-white text-xs font-medium whitespace-nowrap">{button.label}</span>
              </button>
            ))}
          </div>
          
          {/* Right Scroll Arrow */}
          <button 
            onClick={() => handleScroll('right')}
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#001a2c]/80 p-1 rounded-full text-white/80 hover:text-white transition-all",
              !showRightArrow && "opacity-0 pointer-events-none"
            )}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
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
