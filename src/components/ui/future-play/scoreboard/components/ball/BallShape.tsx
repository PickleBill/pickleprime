
import React from 'react';
import { BallState } from '../../types';
import { ballConfig } from '../../constants/courtConfig';

interface BallShapeProps {
  ballPosition: BallState;
  normalizedVelocity?: number;
}

const BallShape: React.FC<BallShapeProps> = ({ ballPosition, normalizedVelocity = 0 }) => {
  // Add visual effect at high velocity
  const highVelocity = normalizedVelocity > 0.7;
  
  return (
    <>
      {/* Ball shadow */}
      <div
        className="absolute rounded-full"
        style={{
          left: `${ballPosition.x + 1}%`,
          top: `${ballPosition.y + 1}%`,
          width: `${ballConfig.size}px`,
          height: `${ballConfig.size}px`,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(3px)',
          zIndex: 19,
          transition: 'all 0.15s linear'
        }}
      />
      
      {/* Ball */}
      <div
        className={`absolute rounded-full border-2 shadow-md ${highVelocity ? 'animate-pulse-slow' : ''}`}
        style={{
          left: `${ballPosition.x}%`,
          top: `${ballPosition.y}%`,
          width: `${ballConfig.size}px`,
          height: `${ballConfig.size}px`,
          background: `radial-gradient(circle at 35% 35%, #FFFF80, ${ballConfig.color} 70%)`,
          borderColor: ballConfig.borderColor,
          transform: 'translate(-50%, -50%)',
          zIndex: 20,
          transition: 'all 0.15s linear'
        }}
      />
      
      {/* Inner detailing (subtle highlights and shadows) */}
      <div
        className="absolute"
        style={{
          left: `${ballPosition.x}%`,
          top: `${ballPosition.y}%`,
          width: `${ballConfig.size * 0.7}px`,
          height: `${ballConfig.size * 0.3}px`,
          borderRadius: '50%',
          background: 'linear-gradient(to right, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 100%)',
          transform: 'translate(-60%, -60%) rotate(25deg)',
          zIndex: 21,
          transition: 'all 0.15s linear',
          opacity: 0.7
        }}
      />
    </>
  );
};

export default BallShape;
