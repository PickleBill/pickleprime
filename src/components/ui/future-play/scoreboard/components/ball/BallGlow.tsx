
import React from 'react';
import { BallState } from '../../types';
import { ballConfig } from '../../constants/courtConfig';

interface BallGlowProps {
  ballPosition: BallState;
  normalizedVelocity: number;
}

const BallGlow: React.FC<BallGlowProps> = ({ ballPosition, normalizedVelocity }) => {
  // Calculate velocity-based glow properties
  const glowOpacity = ballConfig.glowOpacity + (normalizedVelocity * 0.4); // Increase glow with velocity
  const glowSize = ballConfig.glowSize * (1 + normalizedVelocity * 0.5); // Increase glow size with velocity
  
  return (
    <div
      className="absolute rounded-full"
      style={{
        left: `${ballPosition.x}%`,
        top: `${ballPosition.y}%`,
        width: `${glowSize}px`,
        height: `${glowSize}px`,
        backgroundColor: `rgba(255, 255, 0, ${glowOpacity})`,
        transform: 'translate(-50%, -50%)',
        filter: 'blur(5px)',
        zIndex: 15,
        transition: 'all 0.15s linear'
      }}
    />
  );
};

export default BallGlow;
