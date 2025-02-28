
import React from 'react';
import { Position, BallTrajectory } from './types';

interface CourtViewProps {
  ballPosition: Position;
  ballTrajectory: BallTrajectory;
  ballVelocity: number;
  player1: Position;
  player2: Position;
  player3: Position;
  player4: Position;
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
  return (
    <div className="relative w-full aspect-[5/6] bg-[#2B82B5] rounded-lg overflow-hidden">
      {/* Court lines */}
      <div className="absolute inset-0 flex flex-col">
        {/* Middle line */}
        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/80 transform -translate-x-1/2" />
        
        {/* Non-volley zone line (Kitchen) - top half */}
        <div className="absolute top-[30%] left-0 right-0 h-0.5 bg-white/80" />
        
        {/* Non-volley zone line (Kitchen) - bottom half */}
        <div className="absolute top-[70%] left-0 right-0 h-0.5 bg-white/80" />
        
        {/* Horizontal center line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/80" />
        
        {/* Service court boxes - lines */}
        <div className="absolute top-0 left-1/4 bottom-1/2 w-0.5 bg-white/80" />
        <div className="absolute top-0 right-1/4 bottom-1/2 w-0.5 bg-white/80" />
        <div className="absolute top-1/2 left-1/4 bottom-0 w-0.5 bg-white/80" />
        <div className="absolute top-1/2 right-1/4 bottom-0 w-0.5 bg-white/80" />
      </div>
      
      {/* Players */}
      <div 
        className="absolute w-8 h-8 rounded-full bg-[#176840] text-white flex items-center justify-center border-2 border-white text-xs font-bold"
        style={{ 
          left: `${player1.x * 100}%`, 
          top: `${player1.y * 100}%`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        P1
      </div>
      
      <div 
        className="absolute w-8 h-8 rounded-full bg-[#176840] text-white flex items-center justify-center border-2 border-white text-xs font-bold"
        style={{ 
          left: `${player2.x * 100}%`, 
          top: `${player2.y * 100}%`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        P2
      </div>
      
      <div 
        className="absolute w-8 h-8 rounded-full bg-[#0A4D73] text-white flex items-center justify-center border-2 border-white text-xs font-bold"
        style={{ 
          left: `${player3.x * 100}%`, 
          top: `${player3.y * 100}%`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        P3
      </div>
      
      <div 
        className="absolute w-8 h-8 rounded-full bg-[#0A4D73] text-white flex items-center justify-center border-2 border-white text-xs font-bold"
        style={{ 
          left: `${player4.x * 100}%`, 
          top: `${player4.y * 100}%`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        P4
      </div>
      
      {/* Ball */}
      <div 
        className="absolute w-4 h-4 rounded-full bg-yellow-400 border border-yellow-600 shadow-lg"
        style={{ 
          left: `${ballPosition.x * 100}%`, 
          top: `${ballPosition.y * 100}%`,
          transform: 'translate(-50%, -50%)'
        }}
      />
      
      {/* Ball trajectory */}
      {ballTrajectory && (
        <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
          <path
            d={`M ${ballPosition.x * 100}% ${ballPosition.y * 100}% L ${ballTrajectory.endX * 100}% ${ballTrajectory.endY * 100}%`}
            stroke="#e6ff05"
            strokeWidth="2"
            strokeDasharray="5,5"
            fill="none"
            opacity="0.7"
          />
        </svg>
      )}
      
      {/* Ball velocity indicator */}
      <div 
        className="absolute right-2 top-2 px-2 py-1 bg-black/40 backdrop-blur-sm rounded text-white text-xs"
      >
        {Math.round(ballVelocity)} mph
      </div>
    </div>
  );
};

export default CourtView;
