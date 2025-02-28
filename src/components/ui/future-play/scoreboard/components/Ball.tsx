
import React from 'react';
import { Position, BallTrajectory } from '../types';
import { ballConfig } from '../constants/courtConfig';

interface BallProps {
  ballPosition: Position;
  ballTrajectory: BallTrajectory;
  ballVelocity: number;
}

const Ball: React.FC<BallProps> = ({
  ballPosition,
  ballTrajectory,
  ballVelocity
}) => {
  // Generate trail based on velocity and direction
  const renderTrail = () => {
    const segments = ballConfig.trailLength;
    const trailElements = [];
    
    // Calculate direction from trajectory if available, or use default
    const dx = ballTrajectory.dx || (ballTrajectory.endX - ballPosition.x) / 5;
    const dy = ballTrajectory.dy || (ballTrajectory.endY - ballPosition.y) / 5;
    
    for (let i = 1; i <= segments; i++) {
      const trailOpacity = 1 - (i / segments);
      const trailSize = ballConfig.size * (1 - i / (segments * 2));
      
      // Calculate trail segment position based on trajectory
      const trailX = ballPosition.x - (dx * i * (ballVelocity / 10));
      const trailY = ballPosition.y - (dy * i * (ballVelocity / 10));
      
      trailElements.push(
        <div 
          key={`trail-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${trailX}%`,
            top: `${trailY}%`,
            width: `${trailSize * 0.5}rem`,
            height: `${trailSize * 0.5}rem`,
            backgroundColor: ballConfig.trailColor,
            opacity: trailOpacity,
            transform: 'translate(-50%, -50%)',
            zIndex: 20 - i,
          }}
        />
      );
    }
    
    return trailElements;
  };
  
  return (
    <>
      {/* Ball trail */}
      {renderTrail()}
      
      {/* Ball glow effect */}
      <div
        className="absolute rounded-full"
        style={{
          left: `${ballPosition.x}%`,
          top: `${ballPosition.y}%`,
          width: `${ballConfig.glowSize * 0.4}rem`,
          height: `${ballConfig.glowSize * 0.4}rem`,
          backgroundColor: `${ballConfig.color}`,
          opacity: ballConfig.glowOpacity,
          transform: 'translate(-50%, -50%)',
          filter: 'blur(8px)',
          zIndex: 29,
        }}
      />
      
      {/* Ball */}
      <div
        className="absolute rounded-full border"
        style={{
          left: `${ballPosition.x}%`,
          top: `${ballPosition.y}%`,
          width: `${ballConfig.size * 0.4}rem`,
          height: `${ballConfig.size * 0.4}rem`,
          backgroundColor: ballConfig.color,
          borderColor: ballConfig.borderColor,
          transform: 'translate(-50%, -50%)',
          zIndex: 30,
        }}
      />
    </>
  );
};

export default Ball;
