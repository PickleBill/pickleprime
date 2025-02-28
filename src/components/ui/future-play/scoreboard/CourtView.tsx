import React from "react";

interface CourtViewProps {
  ballPosition: { x: number, y: number };
  ballTrajectory: Array<{ x: number, y: number }>;
  ballVelocity: number;
  player1: { x: number, y: number };
  player2: { x: number, y: number };
  player3: { x: number, y: number };
  player4: { x: number, y: number };
}

const CourtView: React.FC<CourtViewProps> = ({
  ballPosition,
  ballTrajectory,
  ballVelocity,
  player1,
  player2,
  player3,
  player4
}) => {
  // Carolina blue court color - brighter and more vibrant
  const carolinaBlue = "#33C3F0"; // A true Carolina blue shade
  
  // Team colors - more vibrant
  const greenTeamColor = "#176840"; // Darker green
  const blueTeamColor = "#0A4D73"; // Darker blue
  
  return (
    <div className="flex-1 relative bg-[#092435] rounded-lg overflow-hidden border border-[#1A4258]/50">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#092435] to-[#061620]"></div>
      
      {/* Pickleball Court with Carolina blue color */}
      <div className="absolute inset-3 rounded-lg overflow-hidden">
        {/* Green outer area - keep the same green buffer */}
        <div className="absolute inset-0 bg-[#1E3B20]/90 shadow-inner"></div>
        
        {/* Court area with Carolina blue */}
        <div 
          className="absolute inset-x-[15%] inset-y-[5%] rounded-sm"
          style={{ backgroundColor: `${carolinaBlue}/90` }}
        >
          {/* White lines */}
          <div className="absolute inset-0 border-2 border-white/90"></div>
          
          {/* Net area - center gray strip */}
          <div className="absolute top-[48%] bottom-[48%] left-0 right-0 bg-black/40 backdrop-blur-[1px]">
            <div className="h-full w-full border-t border-b border-white/90 bg-white/10"></div>
          </div>
          
          {/* Non-volley zone (kitchen) - top */}
          <div className="absolute top-0 left-0 right-0 h-[42%] border-b-2 border-white/90">
            <div className="absolute inset-0" style={{ backgroundColor: `${carolinaBlue}/70` }}></div>
          </div>
          
          {/* Non-volley zone (kitchen) - bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[42%] border-t-2 border-white/90">
            <div className="absolute inset-0" style={{ backgroundColor: `${carolinaBlue}/70` }}></div>
          </div>
          
          {/* Center line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/90 -translate-x-[0.25px]"></div>
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
          transform: 'translate(-50%, -50%)'
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
      
      {/* Player positions - Green Team (1 & 2) on top, Blue Team (3 & 4) on bottom */}
      {/* Player 1 - Green team, top left */}
      <div 
        className="absolute z-20 flex items-center justify-center transition-all duration-300"
        style={{ 
          left: `${player1.x}%`, 
          top: `25%`,
          transform: 'translate(-50%, -50%)',
          filter: 'drop-shadow(0 0 10px rgba(23, 104, 64, 0.8))'
        }}
      >
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center">
          <div className="absolute w-full h-full bg-[#176840]/70 rounded-full animate-pulse"></div>
          <div className="z-10 bg-[#176840] text-white text-xs font-bold w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center border-2 border-white/70">
            P1
          </div>
        </div>
      </div>
      
      {/* Player 2 - Green team, top right */}
      <div 
        className="absolute z-20 flex items-center justify-center transition-all duration-300"
        style={{ 
          left: `${player2.x}%`, 
          top: `25%`,
          transform: 'translate(-50%, -50%)',
          filter: 'drop-shadow(0 0 10px rgba(23, 104, 64, 0.8))'
        }}
      >
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center">
          <div className="absolute w-full h-full bg-[#176840]/70 rounded-full animate-pulse"></div>
          <div className="z-10 bg-[#176840] text-white text-xs font-bold w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center border-2 border-white/70">
            P2
          </div>
        </div>
      </div>
      
      {/* Player 3 - Blue team, bottom left */}
      <div 
        className="absolute z-20 flex items-center justify-center transition-all duration-300"
        style={{ 
          left: `${player3.x}%`, 
          top: `75%`,
          transform: 'translate(-50%, -50%)',
          filter: 'drop-shadow(0 0 8px rgba(10, 77, 115, 0.8))'
        }}
      >
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center">
          <div className="absolute w-full h-full bg-[#0A4D73]/70 rounded-full animate-pulse"></div>
          <div className="z-10 bg-[#0A4D73] text-white text-xs font-bold w-5 h-5 md:w-7 md:h-7 rounded-full flex items-center justify-center border-2 border-white/70">
            P3
          </div>
        </div>
      </div>
      
      {/* Player 4 - Blue team, bottom right */}
      <div 
        className="absolute z-20 flex items-center justify-center transition-all duration-300"
        style={{ 
          left: `${player4.x}%`, 
          top: `75%`,
          transform: 'translate(-50%, -50%)',
          filter: 'drop-shadow(0 0 8px rgba(10, 77, 115, 0.8))'
        }}
      >
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center">
          <div className="absolute w-full h-full bg-[#0A4D73]/70 rounded-full animate-pulse"></div>
          <div className="z-10 bg-[#0A4D73] text-white text-xs font-bold w-5 h-5 md:w-7 md:h-7 rounded-full flex items-center justify-center border-2 border-white/70">
            P3
          </div>
        </div>
      </div>
      
      {/* Team labels for clarity */}
      <div className="absolute top-12 left-3 bg-[#176840]/30 backdrop-blur-sm px-2 py-1 rounded text-xs text-white border border-[#176840]/40 z-10">
        TEAM GREEN
      </div>
      
      <div className="absolute bottom-12 right-3 bg-[#0A4D73]/30 backdrop-blur-sm px-2 py-1 rounded text-xs text-white border border-[#0A4D73]/40 z-10">
        TEAM BLUE
      </div>
    </div>
  );
};

export default CourtView;
