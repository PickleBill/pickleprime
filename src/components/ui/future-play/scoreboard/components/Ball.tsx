
import React from 'react';
import { BallState, BallTrajectory } from '../types';
import { ballConfig } from '../constants/courtConfig';

interface BallProps {
  ballPosition: BallState;
  ballTrajectory: BallTrajectory;
  ballVelocity: number;
}

const Ball: React.FC<BallProps> = ({ ballPosition, ballTrajectory, ballVelocity }) => {
  // Render a blended gradient trail with enhanced visuals
  const renderBallTrail = () => {
    // Calculate direction from trajectory
    const dx = ballTrajectory.dx || 0;
    const dy = ballTrajectory.dy || 0;
    
    // Normalize the direction to get a unit vector
    const magnitude = Math.sqrt(dx * dx + dy * dy) || 1; // Avoid division by zero
    const normalizedDx = dx / magnitude;
    const normalizedDy = dy / magnitude;
    
    // Calculate the trail length based on velocity
    const trailLength = ballVelocity * 0.5;
    
    // Get the start position of the trail (behind the ball)
    const trailStartX = ballPosition.x - normalizedDx * trailLength;
    const trailStartY = ballPosition.y - normalizedDy * trailLength;
    
    return (
      <div
        className="absolute"
        style={{
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      >
        <svg width="100%" height="100%" style={{ position: 'absolute' }}>
          <defs>
            <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255, 235, 59, 0)" />
              <stop offset="100%" stopColor="rgba(255, 235, 59, 0.8)" />
            </linearGradient>
          </defs>
          <line
            x1={`${trailStartX}%`}
            y1={`${trailStartY}%`}
            x2={`${ballPosition.x}%`}
            y2={`${ballPosition.y}%`}
            stroke="url(#trailGradient)"
            strokeWidth={ballConfig.size * 0.8}
            strokeLinecap="round"
            transform={`rotate(${Math.atan2(dy, dx) * 180 / Math.PI}, ${ballPosition.x}, ${ballPosition.y})`}
          />
        </svg>
      </div>
    );
  };
  
  // Render the main ball with enhanced glow effect
  const renderBall = () => (
    <div
      className="absolute rounded-full border"
      style={{
        width: `${ballConfig.size}px`,
        height: `${ballConfig.size}px`,
        backgroundColor: '#FFEB3B', // Yellow ball color
        borderColor: 'rgba(255, 255, 255, 0.6)',
        left: `${ballPosition.x}%`,
        top: `${ballPosition.y}%`,
        transform: 'translate(-50%, -50%)',
        zIndex: 3,
        boxShadow: `0 0 ${ballConfig.glowSize}px rgba(255, 235, 59, ${ballConfig.glowOpacity + 0.2})`,
        filter: 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.7))'
      }}
    />
  );
  
  return (
    <>
      {renderBallTrail()}
      {renderBall()}
    </>
  );
};

export default Ball;
