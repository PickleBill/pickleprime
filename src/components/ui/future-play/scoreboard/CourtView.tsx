
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
      {/* Blue background outside the court */}
      <div className="absolute inset-0 rounded-lg" style={{ backgroundColor: courtColors.surface }}></div>
      
      {/* White court boundary */}
      <div className="absolute" style={{ 
        top: `${courtBoundaries.top}%`, 
        bottom: `${courtBoundaries.bottom - 100}%`,
        left: `${courtBoundaries.left}%`,
        right: `${courtBoundaries.right - 100}%`,
        border: '2px solid white'
      }}></div>
    </>
  );

  // Render court areas
  const renderCourtAreas = () => (
    <>
      {/* Top playing area (green) */}
      <div className="absolute" style={{ 
        top: `${courtBoundaries.top}%`, 
        bottom: `${courtBoundaries.kitchenBottom}%`,
        left: `${courtBoundaries.left}%`,
        right: `${courtBoundaries.right - 100}%`,
        backgroundColor: courtColors.playArea
      }}></div>
      
      {/* Bottom playing area (green) */}
      <div className="absolute" style={{ 
        top: `${courtBoundaries.kitchenTop}%`, 
        bottom: `${courtBoundaries.bottom - 100}%`,
        left: `${courtBoundaries.left}%`,
        right: `${courtBoundaries.right - 100}%`,
        backgroundColor: courtColors.playArea
      }}></div>
      
      {/* Non-volley zone (kitchen) - orange */}
      <div className="absolute" style={{ 
        top: `${courtBoundaries.kitchenBottom}%`, 
        bottom: `${courtBoundaries.kitchenTop - 100}%`,
        left: `${courtBoundaries.left}%`,
        right: `${courtBoundaries.right - 100}%`,
        backgroundColor: courtColors.kitchen
      }}></div>
    </>
  );

  // Render court lines
  const renderCourtLines = () => (
    <>
      {/* Center line vertical (only visible in green areas) */}
      <div className="absolute" style={{ 
        top: `${courtBoundaries.top}%`, 
        bottom: `${courtBoundaries.kitchenBottom}%`,
        left: '50%',
        width: '2px',
        backgroundColor: 'white',
        transform: 'translateX(-50%)'
      }}></div>
      
      <div className="absolute" style={{ 
        top: `${courtBoundaries.kitchenTop}%`, 
        bottom: `${courtBoundaries.bottom - 100}%`,
        left: '50%',
        width: '2px',
        backgroundColor: 'white',
        transform: 'translateX(-50%)'
      }}></div>
      
      {/* Net line */}
      <div className="absolute" style={{ 
        top: `${courtBoundaries.midLine}%`, 
        height: '2px',
        left: `${courtBoundaries.left}%`,
        right: `${courtBoundaries.right - 100}%`,
        backgroundColor: 'white',
        transform: 'translateY(-50%)'
      }}></div>
    </>
  );

  // Render team labels
  const renderTeamLabels = () => (
    <>
      {/* Team Green label */}
      <div className="absolute top-2 left-4 bg-green-600/90 text-white px-3 py-1 rounded-md font-bold text-sm">
        {teamLabels.team1}
      </div>
      
      {/* Team Blue label */}
      <div className="absolute bottom-2 right-4 bg-blue-600/90 text-white px-3 py-1 rounded-md font-bold text-sm">
        {teamLabels.team2}
      </div>
    </>
  );

  // Render a player with glow effect
  const renderPlayer = (position: Position, teamId: number, playerLabel: string) => {
    const teamColor = teamId === 1 ? playerConfig.team1Color : playerConfig.team2Color;
    const glowColor = teamId === 1 ? "rgba(76, 175, 80, 0.5)" : "rgba(26, 112, 197, 0.5)";
    
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
      {renderCourtAreas()}
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
