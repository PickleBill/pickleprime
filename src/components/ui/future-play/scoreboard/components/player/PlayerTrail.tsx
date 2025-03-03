
import React from 'react';

interface PlayerTrailProps {
  trails: { x: number; y: number; opacity: number }[];
  teamId: number;
}

const PlayerTrail: React.FC<PlayerTrailProps> = ({ trails, teamId }) => {
  return (
    <>
      {trails.map((trail, index) => (
        <div 
          key={`trail-${index}`} 
          className="absolute rounded-full transition-opacity duration-300"
          style={{ 
            left: `${trail.x}%`, 
            top: `${trail.y}%`,
            transform: 'translate(-50%, -50%)',
            width: `${(5.75 * 1.23 * 3) * (1 - index * 0.15)}px`, // Decreasing size based on age
            height: `${(5.75 * 1.23 * 3) * (1 - index * 0.15)}px`, // Decreasing size based on age
            backgroundColor: teamId === 1 ? 'rgba(74, 255, 94, 0.3)' : 'rgba(51, 195, 240, 0.3)',
            opacity: trail.opacity,
            zIndex: 5 - index,
            filter: `blur(${index + 2}px)`
          }}
        />
      ))}
    </>
  );
};

export default PlayerTrail;
