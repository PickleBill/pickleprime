
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
      // Shrink by 8% and move up by 10%
      maxWidth: "92%",
      maxHeight: "92%",
      marginTop: "-10%",
      marginLeft: "auto",
      marginRight: "auto",
      backgroundColor: '#0EA5E9', // Matching the new teal blue color
      borderRadius: '0.5rem',
      overflow: 'hidden',
      // Add padding-bottom to create more space
      paddingBottom: '5px'
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
