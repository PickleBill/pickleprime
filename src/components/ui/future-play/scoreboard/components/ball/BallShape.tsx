
import React from 'react';
import { BallState } from '../../types';
import { ballConfig } from '../../constants/courtConfig';

interface BallShapeProps {
  ballPosition: BallState;
}

const BallShape: React.FC<BallShapeProps> = ({ ballPosition }) => {
  return (
    <>
      {/* Ball */}
      <div
        className="absolute rounded-full border-2 shadow-md"
        style={{
          left: `${ballPosition.x}%`,
          top: `${ballPosition.y}%`,
          width: `${ballConfig.size}px`,
          height: `${ballConfig.size}px`,
          backgroundColor: ballConfig.color,
          borderColor: ballConfig.borderColor,
          transform: 'translate(-50%, -50%)',
          zIndex: 20,
          transition: 'all 0.15s linear'
        }}
      />
      
      {/* Inner detailing (subtle markings on the ball) */}
      <div
        className="absolute"
        style={{
          left: `${ballPosition.x}%`,
          top: `${ballPosition.y}%`,
          width: `${ballConfig.size * 0.6}px`,
          height: `${ballConfig.size * 0.3}px`,
          borderRadius: '50%',
          border: '1px solid rgba(0,0,0,0.2)',
          transform: 'translate(-50%, -50%) rotate(15deg)',
          zIndex: 21,
          transition: 'all 0.15s linear'
        }}
      />
    </>
  );
};

export default BallShape;
