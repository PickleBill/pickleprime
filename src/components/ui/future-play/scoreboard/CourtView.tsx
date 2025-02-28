
import React from 'react';
import { Position, BallTrajectory } from './types';
import { courtBoundaries, courtColors, playerConfig, ballConfig, teamLabels } from './constants/courtConfig';

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
      {/* Green boundary outside the court */}
      <div className="absolute inset-0 rounded-lg bg-[#1B4D2B]"></div>
      
      {/* Main court area */}
      <div className="absolute inset-x-6 inset-y-6 bg-[#0A4D73] rounded-lg">
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
    </div>
  );

  // Render team labels
  const renderTeamLabels = () => (
    <>
      {/* Team Green label */}
      <div className="absolute top-4 left-6 bg-[#176840]/90 text-white px-3 py-1 rounded-md font-bold text-sm">
        {teamLabels.team1}
      </div>
      
      {/* Team Blue label */}
      <div className="absolute bottom-4 right-6 bg-[#0A4D73]/90 text-white px-3 py-1 rounded-md font-bold text-sm">
        {teamLabels.team2}
      </div>
    </>
  );

  // Render a player with glow effect
  const renderPlayer = (position: Position, teamId: number, playerLabel: string) => {
    const teamColor = teamId === 1 ? playerConfig.team1Color : playerConfig.team2Color;
    const glowColor = teamId === 1 ? "rgba(23, 104, 64, 0.5)" : "rgba(10, 77, 115, 0.5)";
    
    return (
      <div className="absolute" style={{ 
        left: `${position.x * 100}%`, 
        top: `${position.y * 100}%`,
        transform: 'translate(-50%, -50%)',
      }}>
        {/* Glow effect */}
        <div 
          className="absolute rounded-full"
          style={{ 
            width: `${playerConfig.glowSize * 0.4}rem`,
            height: `${playerConfig.glowSize * 0.4}rem`,
            backgroundColor: glowColor,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(10px)',
            opacity: playerConfig.glowOpacity
          }}
        />
        
        {/* Player circle */}
        <div 
          className="relative rounded-full flex items-center justify-center text-white font-bold border-2 border-white shadow-lg z-10"
          style={{ 
            width: `${playerConfig.size * 0.4}rem`,
            height: `${playerConfig.size * 0.4}rem`,
            backgroundColor: teamColor,
          }}
        >
          {playerLabel}
        </div>
      </div>
    );
  };

  // Render the ball with glow effect
  const renderBall = () => (
    <div className="absolute" style={{ 
      left: `${ballPosition.x * 100}%`, 
      top: `${ballPosition.y * 100}%`,
      transform: 'translate(-50%, -50%)',
    }}>
      {/* Glow effect */}
      <div 
        className="absolute rounded-full"
        style={{ 
          width: `${ballConfig.glowSize * 0.4}rem`,
          height: `${ballConfig.glowSize * 0.4}rem`,
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(8px)',
          opacity: ballConfig.glowOpacity
        }}
      />
      
      {/* Ball */}
      <div 
        className="relative rounded-full border shadow-lg z-10"
        style={{ 
          width: `${ballConfig.size * 0.4}rem`,
          height: `${ballConfig.size * 0.4}rem`,
          backgroundColor: ballConfig.color,
          borderColor: ballConfig.borderColor
        }}
      />
    </div>
  );

  // Render ball trajectory
  const renderBallTrajectory = () => (
    <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
      <path
        d={`M ${ballPosition.x * 100}% ${ballPosition.y * 100}% L ${ballTrajectory.endX * 100}% ${ballTrajectory.endY * 100}%`}
        stroke={ballConfig.trajectoryColor}
        strokeWidth="3"
        strokeDasharray="5,5"
        fill="none"
        opacity="0.8"
      />
    </svg>
  );

  // Render ball velocity indicator
  const renderBallVelocity = () => (
    <div 
      className="absolute top-[25%] right-[25%] px-3 py-1 bg-black/70 backdrop-blur-sm rounded text-white text-sm font-medium"
    >
      {Math.round(ballVelocity)} mph
    </div>
  );

  return (
    <div className="relative w-full aspect-[5/6] bg-navy-dark rounded-lg overflow-hidden">
      {/* Court structure */}
      {renderCourtOutline()}
      {renderCourtLines()}
      {renderTeamLabels()}
      
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
