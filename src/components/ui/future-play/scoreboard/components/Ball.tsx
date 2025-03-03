
import React, { useEffect, useState } from 'react';
import { BallState, BallTrajectory } from '../types';
import { ballConfig } from '../constants/courtConfig';

interface BallProps {
  ballPosition: BallState;
  ballTrajectory: BallTrajectory;
  ballVelocity: number;
}

const Ball: React.FC<BallProps> = ({ 
  ballPosition, 
  ballTrajectory, 
  ballVelocity
}) => {
  // Store previous positions for trail effect
  const [positionHistory, setPositionHistory] = useState<{x: number, y: number, opacity: number}[]>([]);
  
  // Update position history when ball moves
  useEffect(() => {
    setPositionHistory(prev => {
      // Add current position to history
      const newHistory = [
        { 
          x: ballPosition.x, 
          y: ballPosition.y, 
          opacity: 1.0 
        },
        ...prev.slice(0, ballConfig.trailLength - 1)
      ];
      
      // Update opacity of each trail segment based on its age
      return newHistory.map((pos, index) => ({
        ...pos,
        opacity: Math.max(0.1, 1 - (index * (0.9 / ballConfig.trailLength)))
      }));
    });
  }, [ballPosition.x, ballPosition.y]);
  
  // Calculate velocity-based scaling factors
  const normalizedVelocity = Math.min(1, ballVelocity / 60); // Cap at a reasonable max
  const glowOpacity = ballConfig.glowOpacity + (normalizedVelocity * 0.4); // Increase glow with velocity
  const glowSize = ballConfig.glowSize * (1 + normalizedVelocity * 0.5); // Increase glow size with velocity
  
  return (
    <>
      {/* Ball trails */}
      {positionHistory.map((pos, index) => (
        <div
          key={`trail-${index}`}
          className="absolute rounded-full"
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            width: `${ballConfig.size * (1 - index * 0.15)}px`,
            height: `${ballConfig.size * (1 - index * 0.15)}px`,
            backgroundColor: ballConfig.trailColor,
            opacity: pos.opacity * 0.6,
            transform: 'translate(-50%, -50%)',
            filter: `blur(${Math.max(1, index * 2)}px)`,
            zIndex: 10 - index,
            transition: 'all 0.15s linear'
          }}
        />
      ))}
      
      {/* Ball glow effect - dynamic based on velocity */}
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
      
      {/* Ball */}
      <div
        className="absolute rounded-full border-2 shadow-md"
        style={{
          left: `${ballPosition.x}%`,
          top: `${ballPosition.y}%`,
          width: `${ballConfig.size}px`,
          height: `${ballConfig.size}px`,
          backgroundColor: ballConfig.color,
          borderColor: ballConfig.borderColor,
          transform: 'translate(-50%, -50%)',
          zIndex: 20,
          transition: 'all 0.15s linear'
        }}
      />
      
      {/* Inner detailing (subtle markings on the ball) */}
      <div
        className="absolute"
        style={{
          left: `${ballPosition.x}%`,
          top: `${ballPosition.y}%`,
          width: `${ballConfig.size * 0.6}px`,
          height: `${ballConfig.size * 0.3}px`,
          borderRadius: '50%',
          border: '1px solid rgba(0,0,0,0.2)',
          transform: 'translate(-50%, -50%) rotate(15deg)',
          zIndex: 21,
          transition: 'all 0.15s linear'
        }}
      />
    </>
  );
};

export default Ball;
