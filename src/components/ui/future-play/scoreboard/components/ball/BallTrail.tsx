
import React from 'react';
import { ballConfig } from '../../constants/courtConfig';

interface BallTrailProps {
  positionHistory: {x: number, y: number, opacity: number}[];
}

const BallTrail: React.FC<BallTrailProps> = ({ positionHistory }) => {
  // Create the electric trail effect
  return (
    <>
      {/* Electric trails - core trails first (inner glow) */}
      {positionHistory.map((pos, index) => (
        <div
          key={`ball-electric-core-${index}`}
          className="absolute rounded-full"
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            width: `${ballConfig.size * (0.5 - index * 0.05)}px`,
            height: `${ballConfig.size * (0.5 - index * 0.05)}px`,
            backgroundColor: index === 0 
              ? 'rgba(220, 255, 220, 0.9)'
              : 'rgba(180, 255, 200, 0.8)',
            opacity: pos.opacity * 0.9,
            transform: 'translate(-50%, -50%)',
            filter: `blur(${Math.max(0.5, index * 0.8)}px)`,
            boxShadow: `0 0 ${4 + index * 2}px rgba(120, 255, 160, ${0.9 - index * 0.1})`,
            zIndex: 12 - index,
            transition: 'all 0.08s linear'
          }}
        />
      ))}
      
      {/* Electric trails - outer glow (silver-green) */}
      {positionHistory.map((pos, index) => (
        <div
          key={`ball-electric-glow-${index}`}
          className="absolute"
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            width: `${ballConfig.size * (1 - index * 0.08)}px`,
            height: `${ballConfig.size * (0.4 - index * 0.03)}px`,
            background: index < 2 
              ? 'linear-gradient(90deg, rgba(220, 255, 220, 0.9), rgba(160, 240, 200, 0.7))'
              : 'linear-gradient(90deg, rgba(200, 250, 200, 0.7), rgba(140, 220, 180, 0.5))',
            opacity: Math.max(0.1, pos.opacity * 0.8 - index * 0.1),
            transform: `translate(-50%, -50%) rotate(${index * 20}deg)`,
            filter: `blur(${1 + index * 1.2}px)`,
            borderRadius: '40%',
            zIndex: 10 - index,
            transition: 'all 0.08s linear'
          }}
        />
      ))}
      
      {/* Lightning zaps - random electric lines connecting trail points */}
      {positionHistory.length > 1 && positionHistory.slice(0, -1).map((pos, index) => {
        // Skip some connections for a more natural look
        if (index % 2 !== 0 && index < positionHistory.length - 1) return null;
        
        const nextPos = positionHistory[index + 1];
        if (!nextPos) return null;
        
        // Calculate line properties
        const length = Math.sqrt(
          Math.pow(nextPos.x - pos.x, 2) + 
          Math.pow(nextPos.y - pos.y, 2)
        );
        
        const angle = Math.atan2(nextPos.y - pos.y, nextPos.x - pos.x) * (180 / Math.PI);
        
        return (
          <div
            key={`ball-zap-${index}`}
            className="absolute"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              width: `${length}%`,
              height: '1.5px',
              background: 'linear-gradient(90deg, rgba(190, 255, 200, 0.9), rgba(140, 240, 180, 0.6))',
              opacity: Math.max(0.1, pos.opacity * 0.7),
              transform: `translate(0, -50%) rotate(${angle}deg)`,
              transformOrigin: 'left center',
              filter: 'blur(0.8px)',
              boxShadow: '0 0 3px rgba(160, 255, 190, 0.8)',
              zIndex: 9 - index,
              transition: 'all 0.08s linear'
            }}
          />
        );
      })}
    </>
  );
};

export default BallTrail;
