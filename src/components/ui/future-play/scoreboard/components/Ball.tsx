import React, { useState, useEffect } from 'react';
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
  // Keep track of recent positions for trail
  const [trailPositions, setTrailPositions] = useState<{x: number, y: number, opacity: number}[]>([]);
  
  // Update trail when ball position changes
  useEffect(() => {
    setTrailPositions(prev => {
      // Add current position to the start of array
      const newPositions = [
        { x: ballPosition.x, y: ballPosition.y, opacity: 1 },
        ...prev
      ];
      
      // Keep only recent positions and fade them out
      return newPositions
        .slice(0, ballConfig.trailLength)  // Keep only the most recent positions
        .map((pos, index) => ({ 
          ...pos, 
          opacity: Math.max(0.1, 1 - (index * (1 / ballConfig.trailLength))) 
        }));
    });
  }, [ballPosition]);
  
  // Calculate motion blur and glow based on velocity
  const velocityFactor = Math.min(1, ballVelocity / 50); // Normalize velocity to 0-1 range
  const blurAmount = Math.max(1, velocityFactor * 8); // 1-8px blur based on velocity
  const glowSize = ballConfig.size * (1 + velocityFactor * 0.5); // Increase glow by up to 50%
  const glowOpacity = Math.min(0.8, ballConfig.glowOpacity + (velocityFactor * 0.3)); // Increase opacity by up to 0.3
  
  return (
    <>
      {/* Ball trail */}
      {trailPositions.map((trail, index) => (
        <div 
          key={`ball-trail-${index}`}
          className="absolute rounded-full"
          style={{
            left: `${trail.x}%`,
            top: `${trail.y}%`,
            transform: 'translate(-50%, -50%)',
            width: `${ballConfig.size * (1 - (index * 0.15))}px`,
            height: `${ballConfig.size * (1 - (index * 0.15))}px`,
            backgroundColor: ballConfig.trailColor,
            opacity: trail.opacity * 0.6,
            filter: `blur(${index + 2}px)`,
            zIndex: 20 - index,
            transition: 'opacity 0.1s ease-out'
          }}
        />
      ))}
    
      {/* Ball glow effect */}
      <div
        className="absolute rounded-full"
        style={{
          left: `${ballPosition.x}%`,
          top: `${ballPosition.y}%`,
          transform: 'translate(-50%, -50%)',
          width: `${glowSize * 1.5}px`,
          height: `${glowSize * 1.5}px`,
          backgroundColor: 'rgba(255, 255, 0, 0.4)',
          boxShadow: `0 0 ${8 + velocityFactor * 12}px ${velocityFactor * 4}px rgba(255, 255, 0, ${glowOpacity})`,
          filter: `blur(${4 + velocityFactor * 4}px)`,
          opacity: glowOpacity,
          zIndex: 22,
          transition: 'all 0.2s ease-out'
        }}
      />
    
      {/* Ball itself */}
      <div
        className="absolute rounded-full border-2 flex items-center justify-center shadow-md"
        style={{
          left: `${ballPosition.x}%`,
          top: `${ballPosition.y}%`,
          transform: 'translate(-50%, -50%)',
          width: `${ballConfig.size}px`,
          height: `${ballConfig.size}px`,
          backgroundColor: ballConfig.color,
          borderColor: ballConfig.borderColor,
          zIndex: 25,
          filter: `blur(${velocityFactor > 0.5 ? blurAmount / 3 : 0}px)`,
          transition: 'all 0.15s linear'
        }}
      >
        {/* Ball detail lines */}
        <div className="absolute w-full h-[1px] bg-black/30" />
        <div className="absolute w-[1px] h-full bg-black/30" />
      </div>
    </>
  );
};

export default Ball;
