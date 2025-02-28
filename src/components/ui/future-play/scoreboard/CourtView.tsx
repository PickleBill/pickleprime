import React, { useRef, useEffect, useState } from 'react';

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
  ballPosition: externalBallPosition,
  ballTrajectory: externalBallTrajectory,
  ballVelocity: externalBallVelocity,
  player1,
  player2,
  player3,
  player4,
  player1Score,
  player2Score
}) => {
  const courtRef = useRef<HTMLDivElement>(null);
  
  const [ballPosition, setBallPosition] = useState({ x: 50, y: 50 });
  const [ballDirection, setBallDirection] = useState({ x: 3, y: -3 });
  const [ballTrajectory, setBallTrajectory] = useState<{x: number, y: number}[]>([]);
  const [ballVelocity, setBallVelocity] = useState(38);
  
  const courtBoundaries = {
    top: 10,
    bottom: 90,
    left: 15,
    right: 85,
    net: { top: 48, bottom: 52 },
  };

  useEffect(() => {
    const moveBall = () => {
      setBallPosition(prev => {
        const nextX = prev.x + ballDirection.x;
        const nextY = prev.y + ballDirection.y;
        
        let newDirX = ballDirection.x;
        let newDirY = ballDirection.y;
        let hitBoundary = false;
        
        if (nextX <= courtBoundaries.left || nextX >= courtBoundaries.right) {
          newDirX = -ballDirection.x;
          hitBoundary = true;
          
          if (Math.random() > 0.5) {
            newDirY = ballDirection.y + (Math.random() * 2 - 1);
            newDirY = Math.max(-4, Math.min(4, newDirY));
          }
        }
        
        if (nextY <= courtBoundaries.top || nextY >= courtBoundaries.bottom) {
          newDirY = -ballDirection.y;
          hitBoundary = true;
          
          if (Math.random() > 0.5) {
            newDirX = ballDirection.x + (Math.random() * 2 - 1);
            newDirX = Math.max(-4, Math.min(4, newDirX));
          }
        }
        
        if ((prev.y < courtBoundaries.net.top && nextY >= courtBoundaries.net.top) || 
            (prev.y > courtBoundaries.net.bottom && nextY <= courtBoundaries.net.bottom)) {
          if (nextX > 40 && nextX < 60) {
            newDirY = -ballDirection.y * 1.2;
            newDirX = ballDirection.x * 0.8;
            hitBoundary = true;
          }
        }
        
        if (hitBoundary) {
          if (Math.random() < 0.3) {
            setBallVelocity(Math.floor(Math.random() * 15) + 30);
            
            if (Math.random() < 0.2) {
              newDirX = newDirX * (0.8 + Math.random() * 0.4);
              newDirY = newDirY * (0.8 + Math.random() * 0.4);
            }
          }
          
          setBallDirection({ x: newDirX, y: newDirY });
        }
        
        const newPos = { 
          x: Math.max(courtBoundaries.left, Math.min(courtBoundaries.right, nextX)),
          y: Math.max(courtBoundaries.top, Math.min(courtBoundaries.bottom, nextY))
        };
        
        setBallTrajectory(prev => {
          const newTrajectory = [...prev, newPos];
          if (newTrajectory.length > 12) {
            return newTrajectory.slice(newTrajectory.length - 12);
          }
          return newTrajectory;
        });
        
        return newPos;
      });
    };
    
    const animationInterval = setInterval(moveBall, 40);
    return () => clearInterval(animationInterval);
  }, [ballDirection]);
  
  useEffect(() => {
    const velocityInterval = setInterval(() => {
      if (Math.random() < 0.2) {
        setBallVelocity(Math.floor(Math.random() * 15) + 25);
      }
      
      if (Math.random() < 0.1) {
        setBallDirection(prev => {
          const newX = (Math.random() * 6 - 3);
          const newY = (Math.random() * 6 - 3);
          return { x: newX, y: newY };
        });
      }
    }, 2000);
    
    return () => clearInterval(velocityInterval);
  }, []);
  
  return (
    <div className="w-full h-full relative bg-[#092435] rounded-lg overflow-hidden border border-[#1A4258]/50 sm:flex-1" ref={courtRef}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#092435] to-[#061620]"></div>
      
      <div className="absolute inset-2 sm:inset-4 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-[#1E3B20]/90 shadow-inner"></div>
        <div className="absolute inset-x-[15%] inset-y-[5%] bg-[#0A3A5C]/90 rounded-sm">
          <div className="absolute inset-0 border border-white/90 sm:border-2"></div>
          <div className="absolute top-[48%] bottom-[48%] left-0 right-0 bg-black/40 backdrop-blur-[1px]">
            <div className="h-full w-full border-t border-b border-white/90 bg-white/10"></div>
          </div>
          <div className="absolute top-0 left-0 right-0 h-[42%] border-b border-white/90 sm:border-b-2">
            <div className="absolute inset-0 bg-[#0A3A5C]/70"></div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[42%] border-t border-white/90 sm:border-t-2">
            <div className="absolute inset-0 bg-[#0A3A5C]/70"></div>
          </div>
          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] sm:w-0.5 bg-white/90 -translate-x-[0.5px]"></div>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-x-[13%] inset-y-[3%] border-2 border-[#2A4F2D]/50 rounded-sm"></div>
        </div>
      </div>
      
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
      
      <div 
        className="absolute z-10 px-1.5 py-0.5 sm:px-2 sm:py-1 bg-[#092435]/80 text-white text-[10px] sm:text-xs rounded backdrop-blur-sm border border-[#1A4258]/50"
        style={{ 
          left: `${ballPosition.x}%`,
          top: `${ballPosition.y + 5}%`,
          transform: 'translateX(-50%)'
        }}
      >
        {ballVelocity} mph
      </div>
      
      <div 
        className="absolute z-20 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-b from-[#F2FCE2] to-[#FEF7CD] shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        style={{ 
          left: `${ballPosition.x}%`, 
          top: `${ballPosition.y}%`,
          transform: 'translate(-50%, -50%)',
          transition: 'left 0.05s linear, top 0.05s linear'
        }}
      >
        <div className="absolute inset-0 rounded-full overflow-hidden opacity-40">
          <div className="absolute top-1/4 left-1/4 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-black/20 rounded-full"></div>
          <div className="absolute top-1/4 right-1/4 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-black/20 rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/4 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-black/20 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-black/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-black/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
      
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
      
      <div 
        className="absolute z-20 flex items-center justify-center transition-all duration-300"
        style={{ 
          left: `${player1.x}%`, 
          top: `25%`,
          transform: 'translate(-50%, -50%)',
          filter: 'drop-shadow(0 0 10px rgba(43, 203, 110, 0.8))'
        }}
      >
        <div className="w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center">
          <div className="absolute w-full h-full bg-[#176840]/70 rounded-full animate-pulse"></div>
          <div className="z-10 bg-[#176840] text-white text-[8px] sm:text-xs font-bold w-4 h-4 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center border-[1px] sm:border-2 border-white/70">
            P1
          </div>
        </div>
      </div>
      
      <div 
        className="absolute z-20 flex items-center justify-center transition-all duration-300"
        style={{ 
          left: `${player2.x}%`, 
          top: `25%`,
          transform: 'translate(-50%, -50%)',
          filter: 'drop-shadow(0 0 10px rgba(43, 203, 110, 0.8))'
        }}
      >
        <div className="w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center">
          <div className="absolute w-full h-full bg-[#176840]/70 rounded-full animate-pulse"></div>
          <div className="z-10 bg-[#176840] text-white text-[8px] sm:text-xs font-bold w-4 h-4 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center border-[1px] sm:border-2 border-white/70">
            P2
          </div>
        </div>
      </div>
      
      <div 
        className="absolute z-20 flex items-center justify-center transition-all duration-300"
        style={{ 
          left: `${player3.x}%`, 
          top: `75%`,
          transform: 'translate(-50%, -50%)',
          filter: 'drop-shadow(0 0 8px rgba(26, 157, 195, 0.8))'
        }}
      >
        <div className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center">
          <div className="absolute w-full h-full bg-[#0A4D73]/70 rounded-full animate-pulse"></div>
          <div className="z-10 bg-[#0A4D73] text-white text-[8px] sm:text-xs font-bold w-3 h-3 sm:w-5 sm:h-5 md:w-7 md:h-7 rounded-full flex items-center justify-center border-[1px] sm:border-2 border-white/70">
            P3
          </div>
        </div>
      </div>
      
      <div 
        className="absolute z-20 flex items-center justify-center transition-all duration-300"
        style={{ 
          left: `${player4.x}%`, 
          top: `75%`,
          transform: 'translate(-50%, -50%)',
          filter: 'drop-shadow(0 0 8px rgba(26, 157, 195, 0.8))'
        }}
      >
        <div className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center">
          <div className="absolute w-full h-full bg-[#0A4D73]/70 rounded-full animate-pulse"></div>
          <div className="z-10 bg-[#0A4D73] text-white text-[8px] sm:text-xs font-bold w-3 h-3 sm:w-5 sm:h-5 md:w-7 md:h-7 rounded-full flex items-center justify-center border-[1px] sm:border-2 border-white/70">
            P4
          </div>
        </div>
      </div>
      
      <div 
        className="absolute top-3 left-1/2 transform -translate-x-1/2 flex sm:hidden items-center gap-4 bg-[#092435]/90 backdrop-blur-sm px-4 py-2 rounded-full border border-[#1A4258]/50 z-20"
        style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)' }}
      >
        <span className="text-[#0A4D73] font-bold text-2xl">{player1Score}</span>
        <span className="text-white/50 text-xl">-</span>
        <span className="text-[#176840] font-bold text-2xl">{player2Score}</span>
      </div>
      
      <div className="absolute top-12 left-2 sm:left-3 bg-[#176840]/30 backdrop-blur-sm px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-[10px] sm:text-xs text-white border border-[#176840]/40 z-10">
        TEAM GREEN
      </div>
      
      <div className="absolute bottom-12 right-2 sm:right-3 bg-[#0A4D73]/30 backdrop-blur-sm px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-[10px] sm:text-xs text-white border border-[#0A4D73]/40 z-10">
        TEAM BLUE
      </div>
    </div>
  );
};

export default CourtView;
