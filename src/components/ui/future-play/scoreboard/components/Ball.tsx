
import React from 'react';
import { Position, BallTrajectory } from '../types';
import { ballConfig } from '../constants/courtConfig';

interface BallProps {
  ballPosition: Position;
  ballTrajectory: BallTrajectory;
  ballVelocity: number;
}

const Ball: React.FC<BallProps> = ({ ballPosition, ballTrajectory, ballVelocity }) => {
  // Render the ball trail
  const renderBallTrail = () => {
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
            width: `${trailSize}px`,
            height: `${trailSize}px`,
            backgroundColor: ballConfig.trailColor,
            opacity: trailOpacity,
            left: `${trailX}%`,
            top: `${trailY}%`,
            transform: 'translate(-50%, -50%)',
            zIndex: 2
          }}
        />
      );
    }
    
    return trailElements;
  };
  
  // Render the ball trajectory line
  const renderTrajectoryLine = () => (
    <div
      className="absolute"
      style={{
        left: `${ballPosition.x}%`,
        top: `${ballPosition.y}%`,
        width: '1px',
        height: '1px',
        zIndex: 1
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: '1px',
          height: '40px',
          backgroundColor: ballConfig.trajectoryColor,
          opacity: 0.3,
          transformOrigin: 'top',
          transform: `rotate(${Math.atan2(
            ballTrajectory.endY - ballPosition.y,
            ballTrajectory.endX - ballPosition.x
          ) * (180 / Math.PI)}deg)`
        }}
      />
    </div>
  );
  
  // Render the main ball
  const renderBall = () => (
    <div
      className="absolute rounded-full border"
      style={{
        width: `${ballConfig.size}px`,
        height: `${ballConfig.size}px`,
        backgroundColor: ballConfig.color,
        borderColor: ballConfig.borderColor,
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
      {renderTrajectoryLine()}
      {renderBall()}
    </>
  );
};

export default Ball;
