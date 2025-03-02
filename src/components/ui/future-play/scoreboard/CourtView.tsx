
import React from 'react';
import CourtSurface from './components/CourtSurface';
import PlayerAvatar from './components/PlayerAvatar';
import Ball from './components/Ball';
import { Position, BallTrajectory, PlayerPosition } from './types';

export interface CourtViewProps {
  courtId?: string;
  ballPosition: Position;
  ballTrajectory: BallTrajectory;
  ballVelocity: number;
  player1: PlayerPosition;
  player2: PlayerPosition;
  player3: PlayerPosition;
  player4: PlayerPosition;
}

const CourtView: React.FC<CourtViewProps> = ({
  courtId = "default-court",
  ballPosition,
  ballTrajectory,
  ballVelocity,
  player1,
  player2,
  player3,
  player4
}) => {
  return (
    <div className="relative w-full h-full">
      <CourtSurface id={courtId} />
      
      {/* Players */}
      <PlayerAvatar playerPosition={player1} playerId="1" side="bottom" />
      <PlayerAvatar playerPosition={player2} playerId="2" side="bottom" />
      <PlayerAvatar playerPosition={player3} playerId="3" side="top" />
      <PlayerAvatar playerPosition={player4} playerId="4" side="top" />
      
      {/* Ball */}
      <Ball 
        ballPosition={ballPosition} 
        trajectory={ballTrajectory}
        velocity={ballVelocity}
      />
    </div>
  );
};

export default CourtView;
