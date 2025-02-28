
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
  return (
    <div className="relative w-full h-full">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#092435] to-[#061620]"></div>
      
      {/* Pickleball Court */}
      <div className="absolute inset-4 rounded-lg overflow-hidden">
        {/* Green outer area */}
        <div className="absolute inset-0 bg-[#1E3B20]/90 shadow-inner"></div>
        
        {/* Court area with Carolina blue color */}
        <div 
          className="absolute inset-x-[15%] inset-y-[5%] rounded-sm"
          style={{ backgroundColor: `${courtColor}/90` }}
        >
          {/* White lines */}
          <div className="absolute inset-0 border-2 border-white/90"></div>
          
          {/* Net area - center gray strip */}
          <div className="absolute top-[48%] bottom-[48%] left-0 right-0 bg-black/40 backdrop-blur-[1px]">
            <div className="h-full w-full border-t border-b border-white/90 bg-white/10"></div>
          </div>
          
          {/* Non-volley zone (kitchen) - top */}
          <div className="absolute top-0 left-0 right-0 h-[42%] border-b-2 border-white/90">
            <div className="absolute inset-0" style={{ backgroundColor: `${courtColor}/70` }}></div>
          </div>
          
          {/* Non-volley zone (kitchen) - bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[42%] border-t-2 border-white/90">
            <div className="absolute inset-0" style={{ backgroundColor: `${courtColor}/70` }}></div>
          </div>
          
          {/* Center line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/90 -translate-x-[0.25px]"></div>
        </div>
      </div>
      
      {/* Ball trajectory line with glowing effect */}
      {ballTrajectory.length > 1 && (
        <svg className="absolute inset-0 z-10 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
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
      
      {/* Ball velocity indicator */}
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
        {/* Ball texture */}
        <div className="absolute inset-0 rounded-full overflow-hidden opacity-40">
          <div className="absolute top-1/4 left-1/4 w-0.5 h-0.5 bg-black/20 rounded-full"></div>
          <div className="absolute top-1/4 right-1/4 w-0.5 h-0.5 bg-black/20 rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/4 w-0.5 h-0.5 bg-black/20 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-0.5 h-0.5 bg-black/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 w-0.5 h-0.5 bg-black/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
      
      {/* Player positions */}
      {/* Player 1 - Green team, top left */}
      <div 
        className="absolute z-20 flex items-center justify-center transition-all duration-300"
        style={{ 
          left: `${player1.x}%`, 
          top: `${player1.y}%`,
          transform: 'translate(-50%, -50%)',
          filter: 'drop-shadow(0 0 5px rgba(23, 104, 64, 0.8))'
        }}
      >
        <div className="w-8 h-8 rounded-full flex items-center justify-center">
          <div className="absolute w-full h-full bg-[#176840]/70 rounded-full animate-pulse"></div>
          <div className="z-10 bg-[#176840] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border border-white/70">
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
          filter: 'drop-shadow(0 0 5px rgba(23, 104, 64, 0.8))'
        }}
      >
        <div className="w-8 h-8 rounded-full flex items-center justify-center">
          <div className="absolute w-full h-full bg-[#176840]/70 rounded-full animate-pulse"></div>
          <div className="z-10 bg-[#176840] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border border-white/70">
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
          filter: 'drop-shadow(0 0 5px rgba(10, 77, 115, 0.8))'
        }}
      >
        <div className="w-8 h-8 rounded-full flex items-center justify-center">
          <div className="absolute w-full h-full bg-[#0A4D73]/70 rounded-full animate-pulse"></div>
          <div className="z-10 bg-[#0A4D73] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border border-white/70">
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
          filter: 'drop-shadow(0 0 5px rgba(10, 77, 115, 0.8))'
        }}
      >
        <div className="w-8 h-8 rounded-full flex items-center justify-center">
          <div className="absolute w-full h-full bg-[#0A4D73]/70 rounded-full animate-pulse"></div>
          <div className="z-10 bg-[#0A4D73] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border border-white/70">
            P4
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourtView;
