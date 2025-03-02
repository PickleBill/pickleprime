
import React, { useEffect, useRef } from 'react';
import { Position, BallTrajectory } from '../types';

interface BallProps {
  ballPosition: Position;
  trajectory: BallTrajectory;
  velocity: number;
}

const Ball: React.FC<BallProps> = ({ ballPosition, trajectory, velocity }) => {
  const trailRef = useRef<SVGPathElement>(null);
  
  // Function to render the ball trail based on trajectory
  const renderBallTrail = () => {
    if (!trailRef.current || !trajectory.dx || !trajectory.dy) return;
    
    // Create control points for a quadratic curve
    const controlX = ballPosition.x + trajectory.dx * 0.5;
    const controlY = ballPosition.y + trajectory.dy * 0.5;
    
    // Set the path
    const pathData = `M${ballPosition.x},${ballPosition.y} Q${controlX},${controlY} ${trajectory.endX},${trajectory.endY}`;
    trailRef.current.setAttribute('d', pathData);
    
    // Adjust opacity based on velocity
    const opacityValue = Math.min(velocity / 20, 0.5);
    trailRef.current.setAttribute('opacity', opacityValue.toString());
  };
  
  // Update the trail whenever relevant props change
  useEffect(() => {
    renderBallTrail();
  }, [ballPosition, trajectory, velocity]);

  return (
    <>
      {/* Ball trail */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          ref={trailRef}
          stroke="url(#trailGradient)"
          strokeWidth="2"
          fill="none"
        />
      </svg>
      
      {/* Ball */}
      <div 
        className="absolute w-4 h-4 rounded-full bg-white shadow-md transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${ballPosition.x}px`,
          top: `${ballPosition.y}px`,
          boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
        }}
      >
        {/* Ball highlights */}
        <div className="absolute top-1 left-1 w-1 h-1 rounded-full bg-white opacity-80"></div>
      </div>
    </>
  );
};

export default Ball;
