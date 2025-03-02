
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
    <div className="relative w-full h-full" style={{ 
      width: "100%",
      height: "100%",
      maxWidth: "100%",
      maxHeight: "100%",
      marginTop: "-5%", // Adjusted to shift up by 2% (from -3% to -5%)
      backgroundColor: '#2E8B57', // Match the darker grass color
      borderRadius: '0.5rem',
      overflow: 'hidden',
      paddingBottom: '5px'
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
    </div>
  );
};

export default CourtView;
