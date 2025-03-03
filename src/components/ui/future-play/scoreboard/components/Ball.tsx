
/**
 * Ball Component
 * 
 * Renders the ball with its position, trajectory, and velocity visualization.
 * Includes a glowing trail effect that follows the ball's movement.
 */
import React from 'react';
import { BallState, BallTrajectory } from '../types';
import { ballConfig } from '../constants/courtConfig';

interface BallProps {
  ballPosition: BallState;
  ballTrajectory: BallTrajectory;
  ballVelocity: number;
}

const Ball: React.FC<BallProps> = ({ ballPosition, ballTrajectory, ballVelocity }) => {
  // Calculate a more vibrant trail with enhanced visuals
  const renderBallTrail = () => {
    // Calculate direction from trajectory
    const dx = ballTrajectory.dx || 0;
    const dy = ballTrajectory.dy || 0;
    
    // Normalize the direction to get a unit vector
    const magnitude = Math.sqrt(dx * dx + dy * dy) || 1; // Avoid division by zero
    const normalizedDx = dx / magnitude;
    const normalizedDy = dy / magnitude;
    
    // Calculate the trail length based on velocity (more speed = longer trail)
    const trailLength = Math.min(ballVelocity * 0.9, 30); // Cap at 30% of screen width
    
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
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
              <stop offset="30%" stopColor="rgba(255, 235, 59, 0.2)" />
              <stop offset="70%" stopColor="rgba(255, 235, 59, 0.6)" />
              <stop offset="100%" stopColor="rgba(255, 235, 59, 0.9)" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <line
            x1={`${trailStartX}%`}
            y1={`${trailStartY}%`}
            x2={`${ballPosition.x}%`}
            y2={`${ballPosition.y}%`}
            stroke="url(#trailGradient)"
            strokeWidth={ballConfig.size * 0.95}
            strokeLinecap="round"
            filter="url(#glow)"
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
        backgroundColor: '#FFEB3B', // Bright yellow
        borderColor: 'rgba(255, 255, 255, 0.8)',
        left: `${ballPosition.x}%`,
        top: `${ballPosition.y}%`,
        transform: 'translate(-50%, -50%)',
        zIndex: 3,
        boxShadow: `0 0 ${ballConfig.glowSize}px 10px rgba(255, 235, 59, 0.8)`,
        filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.9))',
        transition: 'transform 0.05s ease-out'
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
