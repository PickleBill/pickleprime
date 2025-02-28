
import React from 'react';
import { Position, BallTrajectory } from './types';
import { courtBoundaries, courtColors, playerConfig, ballConfig } from './constants/courtConfig';

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
  // Render court components
  const renderCourtOutline = () => (
    <>
      {/* Green buffer outside the lines */}
      <div className="absolute inset-x-2 inset-y-2 bg-[#1B4D2B] rounded"></div>
      
      {/* Court area */}
      <div className="absolute inset-x-6 inset-y-6 bg-[#5FAEDC] rounded-md">
        {/* Court lines */}
        <div className="absolute inset-0 flex flex-col"></div>
      </div>
    </>
  );

  // Render court lines
  const renderCourtLines = () => (
    <div className="absolute inset-0 flex flex-col">
      {/* Middle line */}
      <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/80 transform -translate-x-1/2" />
      
      {/* Non-volley zone line (Kitchen) - top half */}
      <div className="absolute top-[30%] left-0 right-0 h-0.5 bg-white/80" />
      
      {/* Non-volley zone line (Kitchen) - bottom half */}
      <div className="absolute top-[70%] left-0 right-0 h-0.5 bg-white/80" />
      
      {/* Horizontal center line */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/80" />
      
      {/* Service court boxes - lines */}
      <div className="absolute top-0 left-1/4 bottom-1/2 w-0.5 bg-white/80" />
      <div className="absolute top-0 right-1/4 bottom-1/2 w-0.5 bg-white/80" />
      <div className="absolute top-1/2 left-1/4 bottom-0 w-0.5 bg-white/80" />
      <div className="absolute top-1/2 right-1/4 bottom-0 w-0.5 bg-white/80" />
    </div>
  );

  // Render a player
  const renderPlayer = (position: Position, teamId: number, playerLabel: string) => {
    const teamColor = teamId === 1 ? playerConfig.team1Color : playerConfig.team2Color;
    
    return (
      <div 
        className="absolute rounded-full text-white flex items-center justify-center border-2 border-white text-xs font-bold"
        style={{ 
          left: `${position.x * 100}%`, 
          top: `${position.y * 100}%`,
          transform: 'translate(-50%, -50%)',
          width: `${playerConfig.size * 0.4}rem`,
          height: `${playerConfig.size * 0.4}rem`,
          backgroundColor: teamColor
        }}
      >
        {playerLabel}
      </div>
    );
  };

  // Render the ball
  const renderBall = () => (
    <div 
      className="absolute rounded-full border shadow-lg"
      style={{ 
        left: `${ballPosition.x * 100}%`, 
        top: `${ballPosition.y * 100}%`,
        transform: 'translate(-50%, -50%)',
        width: `${ballConfig.size * 0.4}rem`,
        height: `${ballConfig.size * 0.4}rem`,
        backgroundColor: ballConfig.color,
        borderColor: ballConfig.borderColor
      }}
    />
  );

  // Render ball trajectory
  const renderBallTrajectory = () => (
    <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
      <path
        d={`M ${ballPosition.x * 100}% ${ballPosition.y * 100}% L ${ballTrajectory.endX * 100}% ${ballTrajectory.endY * 100}%`}
        stroke={ballConfig.trajectoryColor}
        strokeWidth="2"
        strokeDasharray="5,5"
        fill="none"
        opacity="0.7"
      />
    </svg>
  );

  // Render ball velocity indicator
  const renderBallVelocity = () => (
    <div 
      className="absolute right-2 top-2 px-2 py-1 bg-black/40 backdrop-blur-sm rounded text-white text-xs"
    >
      {Math.round(ballVelocity)} mph
    </div>
  );

  return (
    <div className="relative w-full aspect-[5/6] bg-[#5FAEDC] rounded-lg overflow-hidden">
      {/* Court structure */}
      {renderCourtOutline()}
      {renderCourtLines()}
      
      {/* Players */}
      {renderPlayer(player1, 1, "P1")}
      {renderPlayer(player2, 1, "P2")}
      {renderPlayer(player3, 2, "P3")}
      {renderPlayer(player4, 2, "P4")}
      
      {/* Ball and trajectory */}
      {renderBall()}
      {ballTrajectory && renderBallTrajectory()}
      
      {/* Ball velocity */}
      {renderBallVelocity()}
    </div>
  );
};

export default CourtView;
