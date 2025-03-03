
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
  
  // Dynamic glow based on velocity
  const glowOpacity = 0.3 + (normalizedVelocity * 0.6); // 0.3 to 0.9 based on velocity
  const glowSize = 1 + (normalizedVelocity * 0.5); // Up to 50% larger glow at high velocity
  const glowColor = highVelocity ? 'rgba(255, 220, 0, 0.8)' : 'rgba(255, 255, 255, 0.5)';
  
  return (
    <>
      {/* Enhanced ball shadow */}
      <div
        className="absolute rounded-full"
        style={{
          left: `${ballPosition.x + 1 + (normalizedVelocity * 0.5)}%`,
          top: `${ballPosition.y + 1 + (normalizedVelocity * 0.3)}%`,
          width: `${ballConfig.size * 0.8}px`,
          height: `${ballConfig.size * 0.6}px`,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(3px)',
          zIndex: 19,
          transition: 'all 0.15s linear'
        }}
      />
      
      {/* Ball glow effect - enhanced for high velocity */}
      {normalizedVelocity > 0.3 && (
        <div
          className={`absolute rounded-full ${highVelocity ? 'animate-pulse-slow' : ''}`}
          style={{
            left: `${ballPosition.x}%`,
            top: `${ballPosition.y}%`,
            width: `${ballConfig.size * glowSize}px`,
            height: `${ballConfig.size * glowSize}px`,
            backgroundColor: glowColor,
            opacity: glowOpacity,
            transform: 'translate(-50%, -50%)',
            filter: `blur(${3 + (normalizedVelocity * 4)}px)`,
            zIndex: 20,
            transition: 'all 0.15s linear'
          }}
        />
      )}
      
      {/* Ball */}
      <div
        className={`absolute rounded-full border-2 shadow-md ${highVelocity ? 'animate-pulse-slow' : ''}`}
        style={{
          left: `${ballPosition.x}%`,
          top: `${ballPosition.y}%`,
          width: `${ballConfig.size}px`,
          height: `${ballConfig.size}px`,
          background: `radial-gradient(circle at 35% 35%, #FFFF80, ${highVelocity ? '#FFCC00' : ballConfig.color} 70%)`,
          borderColor: highVelocity ? '#FFCC00' : ballConfig.borderColor,
          boxShadow: highVelocity ? '0 0 10px rgba(255, 220, 0, 0.7)' : 'none',
          transform: 'translate(-50%, -50%)',
          zIndex: 21,
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
          background: 'linear-gradient(to right, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%)',
          transform: 'translate(-60%, -60%) rotate(25deg)',
          zIndex: 22,
          transition: 'all 0.15s linear',
          opacity: 0.8
        }}
      />
    </>
  );
};

export default BallShape;
