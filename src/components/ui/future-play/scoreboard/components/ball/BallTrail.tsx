
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
            backgroundColor: ballConfig.trailColor,
            opacity: pos.opacity * 0.6,
            transform: 'translate(-50%, -50%)',
            filter: `blur(${Math.max(1, index * 2)}px)`,
            zIndex: 10 - index,
            transition: 'all 0.15s linear'
          }}
        />
      ))}
    </>
  );
};

export default BallTrail;
