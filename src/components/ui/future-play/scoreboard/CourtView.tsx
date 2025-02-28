
import React from 'react';
import { Position, BallTrajectory } from './types';
import CourtSurface from './components/CourtSurface';
import Players from './components/Players';
import Ball from './components/Ball';

interface CourtViewProps {
  ballPosition: Position;
  ballTrajectory: BallTrajectory;
  ballVelocity: number;
  player1: Position;
  player2: Position;
  player3: Position;
  player4: Position;
}

const CourtView: React.FC<CourtViewProps> = ({
  ballPosition,
  ballTrajectory,
  ballVelocity,
  player1,
  player2,
  player3,
  player4
}) => {
  return (
    <div className="relative w-full" style={{ 
      // Aspect ratio of the court is 30' x 60' = 1:2, reduced by 10% in height
      aspectRatio: '2/0.9', // Changed from 2/1 to 2/0.9 to reduce height by 10%
      backgroundColor: '#92D36E', // Match the buffer color
      borderRadius: '0.5rem',
      overflow: 'hidden'
    }}>
      {/* Court structure */}
      <CourtSurface />
      
      {/* Players */}
      <Players 
        player1={player1}
        player2={player2}
        player3={player3}
        player4={player4}
      />
      
      {/* Ball and trajectory */}
      <Ball 
        ballPosition={ballPosition}
        ballTrajectory={ballTrajectory}
        ballVelocity={ballVelocity}
      />
    </div>
  );
};

export default CourtView;
