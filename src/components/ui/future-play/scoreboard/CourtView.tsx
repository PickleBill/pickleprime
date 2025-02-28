
import React, { useRef } from 'react';

interface PlayerPosition {
  x: number;
  y: number;
}

interface CourtViewProps {
  ballPosition: { x: number; y: number };
  ballTrajectory: { x: number; y: number }[];
  ballVelocity: number;
  player1: PlayerPosition;
  player2: PlayerPosition;
  player3: PlayerPosition;
  player4: PlayerPosition;
  player1Score: number;
  player2Score: number;
}

const CourtView: React.FC<CourtViewProps> = ({
  ballPosition,
  ballTrajectory,
  ballVelocity,
  player1,
  player2,
  player3,
  player4,
  player1Score,
  player2Score
}) => {
  const courtRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="w-full sm:flex-1 relative bg-[#092435] rounded-lg overflow-hidden border border-[#1A4258]/50 aspect-[4/3] sm:aspect-auto sm:h-[calc(100%-40px)]" ref={courtRef}>
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#092435] to-[#061620]"></div>
      
      {/* Pickleball Court with proper colors */}
      <div className="absolute inset-4 rounded-lg overflow-hidden">
        {/* Green outer area (pickleball court surroundings) */}
        <div className="absolute inset-0 bg-[#8BC34A]/70 shadow-inner"></div>
        
        {/* Blue court area */}
        <div className="absolute inset-[10%] bg-[#0EA5E9]/70 rounded-sm">
          {/* White lines */}
          <div className="absolute inset-0 border-2 border-white/90"></div>
          
          {/* Net area - center gray strip */}
          <div className="absolute top-[48%] bottom-[48%] left-0 right-0 bg-black/30 backdrop-blur-[1px]">
            <div className="h-full w-full border-t border-b border-white/90 bg-white/10"></div>
          </div>
          
          {/* Non-volley zone (kitchen) - top */}
          <div className="absolute top-0 left-0 right-0 h-[42%] border-b-2 border-white/90">
            <div className="absolute inset-0 bg-[#0EA5E9]/50"></div>
          </div>
          
          {/* Non-volley zone (kitchen) - bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[42%] border-t-2 border-white/90">
            <div className="absolute inset-0 bg-[#0EA5E9]/50"></div>
          </div>
          
          {/* Center line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/90 -translate-x-[0.25px]"></div>
        </div>
        
        {/* Additional green court borders */}
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
        <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center">
          <div className="absolute w-full h-full bg-[#1a9dc3]/40 rounded-full animate-pulse"></div>
          <div className="z-10 bg-[#1a9dc3] text-white text-xs font-bold w-5 h-5 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border-2 border-white/70">
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
        <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full flex items-center justify-center">
          <div className="absolute w-full h-full bg-[#1a9dc3]/40 rounded-full animate-pulse"></div>
          <div className="z-10 bg-[#1a9dc3] text-white text-xs font-bold w-4 h-4 sm:w-7 sm:h-7 rounded-full flex items-center justify-center border-2 border-white/70">
            P3
          </div>
        </div>
      </div>
      
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
        <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center">
          <div className="absolute w-full h-full bg-primary/40 rounded-full animate-pulse"></div>
          <div className="z-10 bg-primary text-white text-xs font-bold w-5 h-5 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border-2 border-white/70">
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
        <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full flex items-center justify-center">
          <div className="absolute w-full h-full bg-primary/40 rounded-full animate-pulse"></div>
          <div className="z-10 bg-primary text-white text-xs font-bold w-4 h-4 sm:w-7 sm:h-7 rounded-full flex items-center justify-center border-2 border-white/70">
            P4
          </div>
        </div>
      </div>
      
      {/* Score overlay - Desktop only, mobile version is in the header */}
      <div 
        className="absolute top-6 left-1/2 transform -translate-x-1/2 hidden sm:flex items-center gap-8 bg-[#092435]/90 backdrop-blur-sm px-8 py-4 rounded-full border border-[#1A4258]/50 z-20"
        style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)' }}
      >
        <span className="text-[#1a9dc3] font-bold text-3xl">{player1Score}</span>
        <span className="text-white/50 text-2xl">-</span>
        <span className="text-primary font-bold text-3xl">{player2Score}</span>
      </div>
      
      {/* Team labels for clarity */}
      <div className="absolute top-16 sm:top-20 left-3 sm:left-6 bg-[#1a9dc3]/20 backdrop-blur-sm px-2 py-1 rounded text-xs text-white border border-[#1a9dc3]/30 z-10">
        TEAM BLUE
      </div>
      
      <div className="absolute top-16 sm:top-20 right-3 sm:right-6 bg-primary/20 backdrop-blur-sm px-2 py-1 rounded text-xs text-white border border-primary/30 z-10">
        TEAM GREEN
      </div>
    </div>
  );
};

export default CourtView;
