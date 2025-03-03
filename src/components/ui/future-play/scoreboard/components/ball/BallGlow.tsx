
import React from 'react';
import { BallState } from '../../types';
import { ballConfig } from '../../constants/courtConfig';

interface BallGlowProps {
  ballPosition: BallState;
  normalizedVelocity: number;
}

const BallGlow: React.FC<BallGlowProps> = ({ ballPosition, normalizedVelocity }) => {
  // Enhanced velocity-based glow properties - more intense for faster ball
  const glowOpacity = Math.min(0.98, ballConfig.glowOpacity + (normalizedVelocity * 0.7));
  const glowSize = ballConfig.glowSize * (1 + normalizedVelocity * 1.2); // More size variation with velocity
  const pulseAnimation = normalizedVelocity > 0.4 ? 'animate-pulse' : ''; // Lower threshold to pulse more often
  
  // Create multiple glow layers for a more impressive effect
  return (
    <>
      {/* Outer glow - larger, softer */}
      <div
        className={`absolute rounded-full ${pulseAnimation}`}
        style={{
          left: `${ballPosition.x}%`,
          top: `${ballPosition.y}%`,
          width: `${glowSize * 2.2}px`, // Larger outer glow
          height: `${glowSize * 2.2}px`,
          background: `radial-gradient(circle, rgba(255, 255, 50, ${glowOpacity * 0.4}) 0%, rgba(255, 255, 0, 0) 75%)`,
          transform: 'translate(-50%, -50%)',
          filter: 'blur(8px)',
          zIndex: 14,
          transition: 'all 0.05s ease-out' // Even faster for more responsive glow
        }}
      />
      
      {/* Middle glow */}
      <div
        className="absolute rounded-full"
        style={{
          left: `${ballPosition.x}%`,
          top: `${ballPosition.y}%`,
          width: `${glowSize * 1.6}px`, // Increased middle glow
          height: `${glowSize * 1.6}px`,
          background: `radial-gradient(circle, rgba(255, 255, 50, ${glowOpacity * 0.7}) 0%, rgba(255, 255, 0, 0) 75%)`,
          transform: 'translate(-50%, -50%)',
          filter: 'blur(5px)',
          zIndex: 15,
          transition: 'all 0.05s ease-out' // Even faster transitions
        }}
      />
      
      {/* Inner glow - brightest */}
      <div
        className="absolute rounded-full"
        style={{
          left: `${ballPosition.x}%`,
          top: `${ballPosition.y}%`,
          width: `${glowSize * 1.2}px`, // Slightly larger inner glow
          height: `${glowSize * 1.2}px`,
          background: `radial-gradient(circle, rgba(255, 255, 180, ${glowOpacity}) 0%, rgba(255, 255, 30, ${glowOpacity * 0.8}) 70%)`,
          transform: 'translate(-50%, -50%)',
          filter: 'blur(4px)',
          zIndex: 16,
          transition: 'all 0.05s ease-out' // Even faster transitions
        }}
      />
      
      {/* Core glow - ultra bright central point */}
      <div
        className="absolute rounded-full"
        style={{
          left: `${ballPosition.x}%`,
          top: `${ballPosition.y}%`,
          width: `${glowSize * 0.6}px`, // Slightly larger central core
          height: `${glowSize * 0.6}px`,
          background: `radial-gradient(circle, rgba(255, 255, 255, ${glowOpacity * 1.2}) 0%, rgba(255, 255, 100, ${glowOpacity}) 80%)`,
          transform: 'translate(-50%, -50%)',
          filter: 'blur(2px)',
          boxShadow: `0 0 ${5 + normalizedVelocity * 8}px rgba(255, 255, 100, ${Math.min(1, normalizedVelocity * 1.1)})`,
          zIndex: 17,
          transition: 'all 0.05s ease-out' // Even faster transitions
        }}
      />
    </>
  );
};

export default BallGlow;
