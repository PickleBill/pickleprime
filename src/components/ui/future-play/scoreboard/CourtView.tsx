
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
      // Aspect ratio of the court is 30' x 60' = 1:2, so for every 2 units of width, we need 1 unit of height
      aspectRatio: '2/1',
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
