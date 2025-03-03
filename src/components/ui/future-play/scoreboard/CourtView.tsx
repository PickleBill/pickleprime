
import React from 'react';
import { Position, BallState, BallTrajectory } from './types';
import CourtSurface from './components/CourtSurface';
import Players from './components/Players';
import Ball from './components/Ball';

interface CourtViewProps {
  ballPosition: BallState;
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
    <div className="relative w-full h-full overflow-hidden rounded-md shadow-inner" style={{ 
      width: "100%",
      height: "100%",
      maxWidth: "100%",
      maxHeight: "100%",
      backgroundColor: '#3EB264', // Green court background
      borderRadius: '0.375rem',
      overflow: 'hidden',
    }}>
      <CourtSurface />
      
      <Players 
        player1={player1}
        player2={player2}
        player3={player3}
        player4={player4}
      />
      
      <Ball 
        ballPosition={ballPosition}
        ballTrajectory={ballTrajectory}
        ballVelocity={ballVelocity}
      />
      
      {/* Team labels */}
      <div className="absolute bottom-0 right-0 bg-blue-500 px-2.5 py-1 text-white text-xs font-medium rounded-tl-md">
        TEAM BLUE
      </div>
      <div className="absolute bottom-0 left-0 bg-green-500 px-2.5 py-1 text-white text-xs font-medium rounded-tr-md">
        TEAM GREEN
      </div>
    </div>
  );
};

export default CourtView;
