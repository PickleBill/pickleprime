
import React from 'react';
import { BallState } from '../../types';
import { ballConfig } from '../../constants/courtConfig';

interface BallGlowProps {
  ballPosition: BallState;
  normalizedVelocity: number;
}

const BallGlow: React.FC<BallGlowProps> = ({ ballPosition, normalizedVelocity }) => {
  // Enhanced velocity-based glow properties
  const glowOpacity = Math.min(0.9, ballConfig.glowOpacity + (normalizedVelocity * 0.5));
  const glowSize = ballConfig.glowSize * (1 + normalizedVelocity * 0.8);
  const pulseAnimation = normalizedVelocity > 0.6 ? 'animate-pulse' : '';
  
  // Create multiple glow layers for a more impressive effect
  return (
    <>
      {/* Outer glow - larger, softer */}
      <div
        className={`absolute rounded-full ${pulseAnimation}`}
        style={{
          left: `${ballPosition.x}%`,
          top: `${ballPosition.y}%`,
          width: `${glowSize * 1.8}px`,
          height: `${glowSize * 1.8}px`,
          background: `radial-gradient(circle, rgba(255, 255, 0, ${glowOpacity * 0.3}) 0%, rgba(255, 255, 0, 0) 70%)`,
          transform: 'translate(-50%, -50%)',
          filter: 'blur(8px)',
          zIndex: 14,
          transition: 'all 0.15s ease-out'
        }}
      />
      
      {/* Middle glow */}
      <div
        className="absolute rounded-full"
        style={{
          left: `${ballPosition.x}%`,
          top: `${ballPosition.y}%`,
          width: `${glowSize * 1.4}px`,
          height: `${glowSize * 1.4}px`,
          background: `radial-gradient(circle, rgba(255, 255, 0, ${glowOpacity * 0.5}) 0%, rgba(255, 255, 0, 0) 70%)`,
          transform: 'translate(-50%, -50%)',
          filter: 'blur(6px)',
          zIndex: 15,
          transition: 'all 0.15s ease-out'
        }}
      />
      
      {/* Inner glow - brightest */}
      <div
        className="absolute rounded-full"
        style={{
          left: `${ballPosition.x}%`,
          top: `${ballPosition.y}%`,
          width: `${glowSize}px`,
          height: `${glowSize}px`,
          background: `radial-gradient(circle, rgba(255, 255, 150, ${glowOpacity}) 0%, rgba(255, 255, 0, ${glowOpacity * 0.7}) 70%)`,
          transform: 'translate(-50%, -50%)',
          filter: 'blur(5px)',
          zIndex: 16,
          transition: 'all 0.15s ease-out'
        }}
      />
    </>
  );
};

export default BallGlow;
