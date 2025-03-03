
import React, { useEffect } from 'react';
import { BallState, BallTrajectory } from '../types';
import BallTrail from './ball/BallTrail';
import BallGlow from './ball/BallGlow';
import BallShape from './ball/BallShape';
import useBallTrail from './ball/useBallTrail';

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
  // Use custom hook for enhanced ball trail management
  const { positionHistory, updateTrail, trailVelocity } = useBallTrail();
  
  // Update trail positions when ball moves
  useEffect(() => {
    updateTrail(ballPosition);
  }, [ballPosition.x, ballPosition.y]);
  
  // Calculate velocity-based scaling factors
  // Use the higher of the two velocity measures for more dramatic effects
  const calculatedVelocity = Math.max(trailVelocity, ballVelocity);
  const normalizedVelocity = Math.min(1, calculatedVelocity / 60); // Cap at a reasonable max
  
  return (
    <>
      {/* Ball trails */}
      <BallTrail positionHistory={positionHistory} />
      
      {/* Ball glow effect */}
      <BallGlow 
        ballPosition={ballPosition} 
        normalizedVelocity={normalizedVelocity} 
      />
      
      {/* Ball shape */}
      <BallShape 
        ballPosition={ballPosition} 
        normalizedVelocity={normalizedVelocity} 
      />
    </>
  );
};

export default Ball;
