
import React from "react";
import { Play } from "lucide-react";

interface PlayButtonProps {
  animationComplete: boolean;
  onClick: () => void;
}

const PlayButton: React.FC<PlayButtonProps> = ({ animationComplete, onClick }) => {
  return (
    <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
      <div className={`${animationComplete ? 'opacity-100 scale-100' : 'opacity-0 scale-50'} transition-all duration-700`}>
        <button 
          className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/90 hover:bg-primary shadow-lg shadow-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-105 backdrop-blur-sm animate-pulse-slow"
          aria-label="Launch Digital Scoreboard"
          onClick={onClick}
        >
          <Play className="w-10 h-10 md:w-12 md:h-12 text-white fill-white" />
        </button>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 text-sm whitespace-nowrap">
          Click to experience live demo
        </div>
      </div>
    </div>
  );
};

export default PlayButton;
