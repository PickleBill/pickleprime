
import React from "react";
import { PlayerPosition, BallTrajectory } from "./types";

interface CourtViewProps {
  ballPosition: { x: number; y: number };
  ballTrajectory: BallTrajectory;
  player1: PlayerPosition;
  player2: PlayerPosition;
  player3: PlayerPosition;
  player4: PlayerPosition;
}

const CourtView: React.FC<CourtViewProps> = ({
  ballPosition,
  ballTrajectory,
  player1,
  player2,
  player3,
  player4
}) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Court background */}
      <div className="relative w-full h-full bg-emerald-800/90 overflow-hidden">
        {/* Court surface */}
        <div className="absolute inset-x-[15%] inset-y-[10%] bg-sky-400 rounded">
          {/* Center net */}
          <div className="absolute left-0 right-0 top-[48%] bottom-[48%] bg-gray-700/30 backdrop-blur-[1px]"></div>
          
          {/* Court lines */}
          <div className="absolute inset-0 border-2 border-white/80"></div>
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/80"></div>
          
          {/* Non-volley zones (kitchens) */}
          <div className="absolute inset-x-0 top-0 h-[20%] border-b-2 border-white/80"></div>
          <div className="absolute inset-x-0 bottom-0 h-[20%] border-t-2 border-white/80"></div>
        </div>
        
        {/* Ball trajectory line */}
        {ballTrajectory.points.length > 1 && (
          <svg className="absolute inset-0 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path 
              d={`M${ballTrajectory.points.map(point => `${point.x} ${point.y}`).join(' L')}`}
              stroke="rgba(255, 255, 255, 0.4)"
              strokeWidth="0.5"
              strokeDasharray="2 1"
              fill="none"
            />
          </svg>
        )}
        
        {/* Ball */}
        <div 
          className="absolute w-4 h-4 rounded-full bg-white shadow-glow-sm transition-all duration-75 ease-linear"
          style={{
            left: `${ballPosition.x}%`,
            top: `${ballPosition.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
        
        {/* Players */}
        {/* Player 1 - Green team */}
        <div 
          className="absolute w-6 h-6 rounded-full bg-green-700 border-2 border-white flex items-center justify-center text-white text-xs font-bold transition-all duration-150 ease-out"
          style={{
            left: `${player1.x}%`,
            top: `${player1.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          1
        </div>
        
        {/* Player 2 - Green team */}
        <div 
          className="absolute w-6 h-6 rounded-full bg-green-700 border-2 border-white flex items-center justify-center text-white text-xs font-bold transition-all duration-150 ease-out"
          style={{
            left: `${player2.x}%`,
            top: `${player2.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          2
        </div>
        
        {/* Player 3 - Blue team */}
        <div 
          className="absolute w-6 h-6 rounded-full bg-blue-700 border-2 border-white flex items-center justify-center text-white text-xs font-bold transition-all duration-150 ease-out"
          style={{
            left: `${player3.x}%`,
            top: `${player3.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          3
        </div>
        
        {/* Player 4 - Blue team */}
        <div 
          className="absolute w-6 h-6 rounded-full bg-blue-700 border-2 border-white flex items-center justify-center text-white text-xs font-bold transition-all duration-150 ease-out"
          style={{
            left: `${player4.x}%`,
            top: `${player4.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          4
        </div>
      </div>
    </div>
  );
};

export default CourtView;
