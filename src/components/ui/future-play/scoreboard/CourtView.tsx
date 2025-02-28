
import React from 'react';
import { Zap } from 'lucide-react';

interface PlayerPosition {
  x: number;
  y: number;
  targetX?: number;
  targetY?: number;
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
  // Carolina blue court color
  const courtColor = "#33C3F0";
  
  return (
    <div className="relative w-full h-full aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-[#071a27]">
      {/* Court outer area (green) */}
      <div className="absolute inset-4 rounded-lg overflow-hidden bg-[#1E3B20]/90 shadow-inner">
        {/* Court area (Carolina blue) */}
        <div 
          className="absolute rounded-sm"
          style={{ 
            inset: "5% 15%", 
            backgroundColor: courtColor,
            opacity: 0.9
          }}
        >
          {/* White lines */}
          <div className="absolute inset-0 border-2 border-white/90"></div>
          
          {/* Net */}
          <div className="absolute top-[48%] bottom-[48%] left-0 right-0 bg-white/20 backdrop-blur-[1px]">
            <div className="h-full w-full border-t border-b border-white/80"></div>
          </div>
          
          {/* Non-volley zone (kitchen) - top */}
          <div className="absolute top-0 left-0 right-0 h-[42%] border-b-2 border-white/90">
            <div 
              className="absolute"
              style={{ 
                inset: 0, 
                backgroundColor: courtColor,
                opacity: 0.7
              }}
            ></div>
          </div>
          
          {/* Non-volley zone (kitchen) - bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[42%] border-t-2 border-white/90">
            <div 
              className="absolute"
              style={{ 
                inset: 0, 
                backgroundColor: courtColor,
                opacity: 0.7
              }}
            ></div>
          </div>
          
          {/* Center line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/90 -translate-x-[0.5px]"></div>
        </div>
      </div>
      
      {/* Ball trajectory line */}
      {ballTrajectory.length > 1 && (
        <svg className="absolute inset-0 z-10 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path 
            d={`M${ballTrajectory.map(point => `${point.x} ${point.y}`).join(' L')}`}
            fill="none" 
            stroke="#2BCB6E" 
            strokeWidth="0.5" 
            strokeDasharray="2 1"
            className="animate-pulse"
          />
        </svg>
      )}
      
      {/* Player positions */}
      <div 
        className="absolute z-20 w-6 h-6 rounded-full bg-[#0A4D73] border-2 border-white flex items-center justify-center text-[10px] font-bold text-white"
        style={{ 
          left: `${player1.x}%`, 
          top: `${player1.y}%`,
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 0 2px rgba(255,255,255,0.1), 0 0 10px rgba(0,0,0,0.5)'
        }}
      >
        P1
      </div>
      
      <div 
        className="absolute z-20 w-6 h-6 rounded-full bg-[#4D1A0A] border-2 border-white flex items-center justify-center text-[10px] font-bold text-white"
        style={{ 
          left: `${player2.x}%`, 
          top: `${player2.y}%`,
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 0 2px rgba(255,255,255,0.1), 0 0 10px rgba(0,0,0,0.5)'
        }}
      >
        P2
      </div>
      
      <div 
        className="absolute z-20 w-6 h-6 rounded-full bg-[#0A4D73] border-2 border-white flex items-center justify-center text-[10px] font-bold text-white"
        style={{ 
          left: `${player3.x}%`, 
          top: `${player3.y}%`,
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 0 2px rgba(255,255,255,0.1), 0 0 10px rgba(0,0,0,0.5)'
        }}
      >
        P3
      </div>
      
      <div 
        className="absolute z-20 w-6 h-6 rounded-full bg-[#4D1A0A] border-2 border-white flex items-center justify-center text-[10px] font-bold text-white"
        style={{ 
          left: `${player4.x}%`, 
          top: `${player4.y}%`,
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 0 2px rgba(255,255,255,0.1), 0 0 10px rgba(0,0,0,0.5)'
        }}
      >
        P4
      </div>
      
      {/* Ball with trail effect */}
      {ballTrajectory.length > 2 && (
        <>
          <div 
            className="absolute z-10 w-3 h-3 rounded-full blur-sm"
            style={{ 
              left: `${ballTrajectory[ballTrajectory.length - 3]?.x || ballPosition.x}%`, 
              top: `${ballTrajectory[ballTrajectory.length - 3]?.y || ballPosition.y}%`,
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(255, 255, 255, 0.2)'
            }}
          ></div>
          <div 
            className="absolute z-10 w-4 h-4 rounded-full blur-sm"
            style={{ 
              left: `${ballTrajectory[ballTrajectory.length - 2]?.x || ballPosition.x}%`, 
              top: `${ballTrajectory[ballTrajectory.length - 2]?.y || ballPosition.y}%`,
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(255, 255, 255, 0.4)'
            }}
          ></div>
        </>
      )}
      
      {/* Animated ball */}
      <div 
        className="absolute z-30 w-5 h-5 rounded-full bg-white shadow-md"
        style={{ 
          left: `${ballPosition.x}%`, 
          top: `${ballPosition.y}%`,
          transform: 'translate(-50%, -50%)',
          transition: 'left 0.05s linear, top 0.05s linear',
          boxShadow: '0 0 10px rgba(255,255,255,0.5)'
        }}
      ></div>
      
      {/* Shot velocity indicator */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-navy-dark/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-white/90 border border-white/10 flex items-center gap-1 z-20">
        <Zap className="w-3 h-3 text-[#33C3F0]" />
        <span>{ballVelocity} mph</span>
      </div>
      
      {/* Score overlay */}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 flex items-center gap-3 bg-navy-dark/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 z-20">
        <span className="text-[#0A4D73] font-bold text-lg">{player1Score}</span>
        <span className="text-white/50">-</span>
        <span className="text-[#4D1A0A] font-bold text-lg">{player2Score}</span>
      </div>
      
      {/* Team labels */}
      <div className="absolute top-2 left-2 bg-[#0A4D73]/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-white font-semibold z-20">
        TEAM BLUE
      </div>
      
      <div className="absolute top-2 right-2 bg-[#4D1A0A]/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-white font-semibold z-20">
        TEAM RED
      </div>
    </div>
  );
};

export default CourtView;
