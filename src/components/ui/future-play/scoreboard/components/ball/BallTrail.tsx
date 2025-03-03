
import React from 'react';
import { ballConfig } from '../../constants/courtConfig';

interface BallTrailProps {
  positionHistory: {x: number, y: number, opacity: number}[];
}

const BallTrail: React.FC<BallTrailProps> = ({ positionHistory }) => {
  return (
    <>
      {positionHistory.map((pos, index) => (
        <div
          key={`ball-trail-${index}`}
          className="absolute rounded-full"
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            width: `${ballConfig.size * (1 - index * 0.15)}px`,
            height: `${ballConfig.size * (1 - index * 0.15)}px`,
            backgroundColor: index === 0 
              ? `rgba(255, 255, 0, ${Math.max(0.1, 0.8 - index * 0.1)})`
              : index < 3 
                ? `rgba(255, 200, 0, ${Math.max(0.05, 0.6 - index * 0.15)})`
                : ballConfig.trailColor,
            opacity: pos.opacity * 0.7,
            transform: 'translate(-50%, -50%)',
            filter: `blur(${Math.max(1, index * 2)}px)`,
            zIndex: 10 - index,
            transition: 'all 0.1s ease-out'
          }}
        />
      ))}
    </>
  );
};

export default BallTrail;
