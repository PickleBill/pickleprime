
import React from 'react';
import { Position, BallTrajectory } from '../types';
import { ballConfig } from '../constants/courtConfig';

interface BallProps {
  ballPosition: Position;
  ballTrajectory: BallTrajectory;
  ballVelocity: number;
}

const Ball: React.FC<BallProps> = ({ ballPosition, ballTrajectory, ballVelocity }) => {
  // Render a blended gradient trail instead of individual dots
  const renderBallTrail = () => {
    // Calculate direction from trajectory
    const dx = ballTrajectory.dx || (ballTrajectory.endX - ballPosition.x) / 5;
    const dy = ballTrajectory.dy || (ballTrajectory.endY - ballPosition.y) / 5;
    
    // Normalize the direction to get a unit vector
    const magnitude = Math.sqrt(dx * dx + dy * dy);
    const normalizedDx = dx / magnitude;
    const normalizedDy = dy / magnitude;
    
    // Calculate the trail length based on velocity
    const trailLength = ballVelocity * 0.4;
    
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
              <stop offset="0%" stopColor={ballConfig.trailColor} stopOpacity="0" />
              <stop offset="100%" stopColor={ballConfig.trailColor} stopOpacity="0.7" />
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
  
  // Render the main ball
  const renderBall = () => (
    <div
      className="absolute rounded-full border"
      style={{
        width: `${ballConfig.size}px`,
        height: `${ballConfig.size}px`,
        backgroundColor: '#FFEB3B', // Yellow ball color
        borderColor: 'rgba(255, 235, 59, 0.3)',
        left: `${ballPosition.x}%`,
        top: `${ballPosition.y}%`,
        transform: 'translate(-50%, -50%)',
        zIndex: 3,
        boxShadow: `0 0 ${ballConfig.glowSize}px rgba(255, 235, 59, ${ballConfig.glowOpacity})`
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
