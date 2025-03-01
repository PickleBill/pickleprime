
import React from "react";
import { BallTrajectory } from "../types";

interface BallProps {
  position: { x: number; y: number };
  trajectory: BallTrajectory;
}

const Ball: React.FC<BallProps> = ({ position, trajectory }) => {
  return (
    <>
      {/* Ball trajectory line */}
      {trajectory.points && trajectory.points.length > 1 && (
        <svg className="absolute inset-0 z-10 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          <path 
            d={`M${trajectory.points.map(point => `${point.x} ${point.y}`).join(' L')}`}
            fill="none" 
            stroke="#00C6AD" 
            strokeWidth="0.7" 
            strokeDasharray="2 1"
            filter="url(#glow)"
          />
        </svg>
      )}
      
      {/* Ball */}
      <div 
        className="absolute z-20 w-4 h-4 rounded-full bg-white shadow-lg transition-transform"
        style={{ 
          left: `${position.x}%`, 
          top: `${position.y}%`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        {/* Ball texture */}
        <div className="absolute inset-0 rounded-full overflow-hidden opacity-40">
          <div className="absolute top-1/4 left-1/4 w-0.5 h-0.5 bg-black/20 rounded-full"></div>
          <div className="absolute top-1/4 right-1/4 w-0.5 h-0.5 bg-black/20 rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/4 w-0.5 h-0.5 bg-black/20 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-0.5 h-0.5 bg-black/20 rounded-full"></div>
        </div>
      </div>
      
      {/* Ball trails/shadows for more dynamic movement */}
      {trajectory.points && trajectory.points.length > 2 && (
        <>
          <div 
            className="absolute z-10 w-4 h-4 rounded-full bg-white/40 blur-sm"
            style={{ 
              left: `${trajectory.points[trajectory.points.length - 2]?.x || position.x}%`, 
              top: `${trajectory.points[trajectory.points.length - 2]?.y || position.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
          ></div>
          <div 
            className="absolute z-10 w-3 h-3 rounded-full bg-white/20 blur-md"
            style={{ 
              left: `${trajectory.points[trajectory.points.length - 3]?.x || position.x}%`, 
              top: `${trajectory.points[trajectory.points.length - 3]?.y || position.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
          ></div>
        </>
      )}
    </>
  );
};

export default Ball;
