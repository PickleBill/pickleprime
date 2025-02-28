
import React, { useState, useEffect } from 'react';
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
  // State for ball trail
  const [trailPositions, setTrailPositions] = useState<Position[]>([]);
  
  // Update trail positions when ball moves
  useEffect(() => {
    setTrailPositions(prev => {
      const newTrail = [...prev, { ...ballPosition }];
      if (newTrail.length > ballConfig.trailLength) {
        return newTrail.slice(newTrail.length - ballConfig.trailLength);
      }
      return newTrail;
    });
  }, [ballPosition]);

  // Render court components
  const renderCourtOutline = () => (
    <>
      {/* Green boundary outside the court */}
      <div className="absolute inset-0 rounded-lg bg-[#76C043]"></div>
      
      {/* Main court area */}
      <div className="absolute inset-x-4 inset-y-4 bg-[#1A2D5A] rounded-lg">
        {/* Court lines */}
        <div className="absolute inset-0 flex flex-col"></div>
      </div>
    </>
  );

  // Render court lines
  const renderCourtLines = () => (
    <div className="absolute inset-0 flex flex-col">
      {/* Middle line (net) */}
      <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white transform -translate-x-1/2" />
      
      {/* Kitchen (Non-volley zone) - top half */}
      <div className="absolute top-[35%] left-0 right-0 h-0.5 bg-white" />
      
      {/* Kitchen (Non-volley zone) - bottom half */}
      <div className="absolute top-[65%] left-0 right-0 h-0.5 bg-white" />
      
      {/* Vertical sidelines */}
      <div className="absolute top-0 bottom-0 left-[15%] w-0.5 bg-white/80" />
      <div className="absolute top-0 bottom-0 right-[15%] w-0.5 bg-white/80" />
      
      {/* Kitchen coloring */}
      <div className="absolute top-[35%] bottom-[35%] left-0 right-0 bg-[#0FA0CE] -z-10" />
      
      {/* Service lines */}
      <div className="absolute top-[20%] left-[15%] right-[15%] h-0.5 bg-white/80" />
      <div className="absolute top-[80%] left-[15%] right-[15%] h-0.5 bg-white/80" />
      
      {/* Centerline */}
      <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/80 transform -translate-x-1/2" />
    </div>
  );

  // Render team labels
  const renderTeamLabels = () => (
    <>
      {/* Team Green label */}
      <div className="absolute top-2 left-4 bg-[#76C043]/90 text-white px-3 py-1 rounded-md font-bold text-sm">
        {teamLabels.team1}
      </div>
      
      {/* Team Blue label */}
      <div className="absolute bottom-2 right-4 bg-[#0FA0CE]/90 text-white px-3 py-1 rounded-md font-bold text-sm">
        {teamLabels.team2}
      </div>
    </>
  );

  // Render a player with glow effect
  const renderPlayer = (position: Position, teamId: number, playerLabel: string) => {
    const teamColor = teamId === 1 ? playerConfig.team1Color : playerConfig.team2Color;
    const glowColor = teamId === 1 ? "rgba(118, 192, 67, 0.5)" : "rgba(15, 160, 206, 0.5)";
    
    return (
      <div className="absolute" style={{ 
        left: `${position.x}%`, 
        top: `${position.y}%`,
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

  // Render ball trail
  const renderBallTrail = () => (
    <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
      {trailPositions.map((pos, i) => {
        const opacity = (i + 1) / trailPositions.length * 0.5;
        const size = (i + 1) / trailPositions.length * 6;
        
        return (
          <circle
            key={i}
            cx={`${pos.x}%`}
            cy={`${pos.y}%`}
            r={size}
            fill={ballConfig.trailColor}
            opacity={opacity}
          />
        );
      })}
    </svg>
  );

  // Render the ball with glow effect
  const renderBall = () => (
    <div className="absolute" style={{ 
      left: `${ballPosition.x}%`, 
      top: `${ballPosition.y}%`,
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
        d={`M ${ballPosition.x}% ${ballPosition.y}% L ${ballTrajectory.endX}% ${ballTrajectory.endY}%`}
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
      className="absolute top-[20%] right-[20%] px-3 py-1 bg-black/70 backdrop-blur-sm rounded text-white text-sm font-medium"
    >
      {Math.round(ballVelocity)} mph
    </div>
  );

  return (
    <div className="relative w-full aspect-[4/3] bg-navy-dark rounded-lg overflow-hidden">
      {/* Court structure */}
      {renderCourtOutline()}
      {renderCourtLines()}
      {renderTeamLabels()}
      
      {/* Ball trail */}
      {renderBallTrail()}
      
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
