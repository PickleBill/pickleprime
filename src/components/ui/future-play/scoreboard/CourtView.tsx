
import React from 'react';
import { BallState, BallTrajectory } from './types';
import CourtSurface from './components/CourtSurface';
import Players from './components/Players';
import Ball from './components/Ball';
import TeamLabels from './components/TeamLabels';

interface CourtViewProps {
  ballPosition: BallState;
  ballTrajectory: BallTrajectory;
  ballVelocity: number;
  player1: {
    x: number;
    y: number;
    rotation: number;
  };
  player2: {
    x: number;
    y: number;
    rotation: number;
  };
  player3: {
    x: number;
    y: number;
    rotation: number;
  };
  player4: {
    x: number;
    y: number;
    rotation: number;
  };
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
      aspectRatio: "16/9",
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
      
      <TeamLabels />
    </div>
  );
};

export default CourtView;
