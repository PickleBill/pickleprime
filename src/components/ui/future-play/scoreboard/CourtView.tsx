
import React from 'react';
import CourtSurface from './components/CourtSurface';
import PlayerAvatar from './components/PlayerAvatar';
import Ball from './components/Ball';
import { Position, BallTrajectory, PlayerPosition } from './types';

export interface CourtViewProps {
  courtId: string;
  ballPosition: Position;
  ballTrajectory: BallTrajectory;
  ballVelocity: number;
  player1: PlayerPosition;
  player2: PlayerPosition;
  player3: PlayerPosition;
  player4: PlayerPosition;
}

// Make sure the component props interface matches the components it's using
interface PlayerAvatarProps {
  position: PlayerPosition;
  playerId: string;
  side: string;
}

interface BallProps {
  position: Position;
  trajectory: BallTrajectory;
  velocity: number;
}

const CourtView: React.FC<CourtViewProps> = ({
  courtId,
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
      <CourtSurface courtId={courtId} />
      
      {/* Players */}
      <PlayerAvatar position={player1} playerId="1" side="bottom" />
      <PlayerAvatar position={player2} playerId="2" side="bottom" />
      <PlayerAvatar position={player3} playerId="3" side="top" />
      <PlayerAvatar position={player4} playerId="4" side="top" />
      
      {/* Ball */}
      <Ball 
        position={ballPosition} 
        trajectory={ballTrajectory}
        velocity={ballVelocity}
      />
    </div>
  );
};

export default CourtView;
