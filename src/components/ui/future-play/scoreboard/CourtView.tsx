
import React from 'react';
import { PlayerPosition } from './types';

interface CourtViewProps {
  ballPosition: { x: number; y: number };
  ballTrajectory: { x: number; y: number }[];
  ballVelocity: number;
  player1: PlayerPosition;
  player2: PlayerPosition;
  player3: PlayerPosition;
  player4: PlayerPosition;
  courtColor: string;
}

const CourtView: React.FC<CourtViewProps> = ({
  ballPosition,
  ballTrajectory,
  ballVelocity,
  player1,
  player2,
  player3,
  player4,
  courtColor
}) => {
  // Team colors
  const greenTeamColor = "#176840"; // Darker green
  const blueTeamColor = "#0A4D73"; // Darker blue

  return (
    <div className="absolute inset-0">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#092435] to-[#061620]"></div>
      
      {/* Pickleball Court */}
      <div className="absolute inset-2 rounded-lg overflow-hidden">
        {/* Green outer area */}
        <div className="absolute inset-0 bg-[#1E3B20]/90 shadow-inner"></div>
        
        {/* Blue court area with dynamic court color */}
        <div 
          className="absolute rounded-sm"
          style={{ 
            inset: "5% 15%", 
            backgroundColor: courtColor, 
            opacity: 0.9 
          }}
        >
          {/* White lines */}
          <div className="absolute inset-0 border border-white/90"></div>
          
          {/* Net area - center gray strip */}
          <div className="absolute top-[48%] bottom-[48%] left-0 right-0 bg-black/40 backdrop-blur-[1px]">
            <div className="h-full w-full border-t border-b border-white/90 bg-white/10"></div>
          </div>
          
          {/* Non-volley zone (kitchen) - top */}
          <div className="absolute top-0 left-0 right-0 h-[42%] border-b border-white/90">
            <div 
              className="absolute inset-0"
              style={{ backgroundColor: courtColor, opacity: 0.7 }}
            ></div>
          </div>
          
          {/* Non-volley zone (kitchen) - bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[42%] border-t border-white/90">
            <div 
              className="absolute inset-0"
              style={{ backgroundColor: courtColor, opacity: 0.7 }}
            ></div>
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
          top: `${player1.y}%`,
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
          top: `${player2.y}%`,
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
          top: `${player3.y}%`,
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
          top: `${player4.y}%`,
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
      
      {/* Team labels for clarity */}
      <div className="absolute top-3 left-2 bg-[#176840]/30 backdrop-blur-sm px-1.5 py-0.5 rounded text-[10px] text-white border border-[#176840]/40 z-10">
        TEAM GREEN
      </div>
      
      <div className="absolute bottom-3 right-2 bg-[#0A4D73]/30 backdrop-blur-sm px-1.5 py-0.5 rounded text-[10px] text-white border border-[#0A4D73]/40 z-10">
        TEAM BLUE
      </div>
    </div>
  );
};

export default CourtView;
