
import React, { useState, useEffect } from 'react';
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
  // State for ball trail
  const [trailPositions, setTrailPositions] = useState<Position[]>([]);
  
  // Update trail positions when ball moves
  useEffect(() => {
    setTrailPositions(prev => {
      const newTrail = [...prev, { ...ballPosition }];
      if (newTrail.length > ballConfig.trailLength) {
        return newTrail.slice(newTrail.length - ballConfig.trailLength);
      }
      return newTrail;
    });
  }, [ballPosition]);

  // Render ball trail
  const renderBallTrail = () => (
    <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
      {trailPositions.map((pos, i) => {
        const opacity = (i + 1) / trailPositions.length * 0.5;
        const size = (i + 1) / trailPositions.length * 6;
        
        return (
          <circle
            key={i}
            cx={`${pos.x}%`}
            cy={`${pos.y}%`}
            r={size}
            fill={ballConfig.trailColor}
            opacity={opacity}
          />
        );
      })}
    </svg>
  );

  // Render the ball with glow effect
  const renderBall = () => (
    <div className="absolute" style={{ 
      left: `${ballPosition.x}%`, 
      top: `${ballPosition.y}%`,
      transform: 'translate(-50%, -50%)',
    }}>
      {/* Glow effect */}
      <div 
        className="absolute rounded-full"
        style={{ 
          width: `${ballConfig.glowSize * 0.4}rem`,
          height: `${ballConfig.glowSize * 0.4}rem`,
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(8px)',
          opacity: ballConfig.glowOpacity
        }}
      />
      
      {/* Ball */}
      <div 
        className="relative rounded-full border shadow-lg z-10"
        style={{ 
          width: `${ballConfig.size * 0.4}rem`,
          height: `${ballConfig.size * 0.4}rem`,
          backgroundColor: ballConfig.color,
          borderColor: ballConfig.borderColor
        }}
      />
    </div>
  );

  // Render ball trajectory
  const renderBallTrajectory = () => (
    <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
      <path
        d={`M ${ballPosition.x}% ${ballPosition.y}% L ${ballTrajectory.endX}% ${ballTrajectory.endY}%`}
        stroke={ballConfig.trajectoryColor}
        strokeWidth="3"
        strokeDasharray="5,5"
        fill="none"
        opacity="0.8"
      />
    </svg>
  );

  // Render ball velocity indicator
  const renderBallVelocity = () => (
    <div 
      className="absolute top-[20%] right-[20%] px-3 py-1 bg-black/70 backdrop-blur-sm rounded text-white text-sm font-medium"
    >
      {Math.round(ballVelocity)} mph
    </div>
  );

  return (
    <>
      {renderBallTrail()}
      {renderBall()}
      {ballTrajectory && renderBallTrajectory()}
      {renderBallVelocity()}
    </>
  );
};

export default Ball;
