
import React from 'react';

interface PlayerTrailProps {
  trails: { x: number; y: number; opacity: number }[];
  teamId: number;
}

const PlayerTrail: React.FC<PlayerTrailProps> = ({ trails, teamId }) => {
  // Team colors with electric effect
  const teamColors = {
    1: {
      core: 'rgba(120, 255, 140, 0.9)',
      outer: 'rgba(74, 255, 94, 0.5)',
      glow: 'rgba(50, 200, 80, 0.7)'
    },
    2: {
      core: 'rgba(100, 220, 255, 0.9)',
      outer: 'rgba(51, 195, 240, 0.5)',
      glow: 'rgba(40, 160, 220, 0.7)'
    }
  };
  
  const colors = teamId === 1 ? teamColors[1] : teamColors[2];
  
  return (
    <>
      {/* Electric core trail (smaller, brighter) */}
      {trails.map((trail, index) => (
        <div 
          key={`trail-core-${index}`} 
          className="absolute"
          style={{ 
            left: `${trail.x}%`, 
            top: `${trail.y}%`,
            transform: 'translate(-50%, -50%)',
            width: `${1.5 + (3 * (1 - index * 0.2))}px`,
            height: `${1.5 + (3 * (1 - index * 0.2))}px`,
            backgroundColor: colors.core,
            borderRadius: '50%',
            opacity: trail.opacity * 0.9,
            zIndex: 6 - index,
            filter: `blur(${0.5 + index * 0.3}px)`,
            boxShadow: `0 0 ${3 + index}px ${colors.glow}`,
            transition: 'all 0.15s ease-out'
          }}
        />
      ))}
      
      {/* Outer electric glow (larger, more diffuse) */}
      {trails.map((trail, index) => (
        <div 
          key={`trail-glow-${index}`} 
          className="absolute"
          style={{ 
            left: `${trail.x}%`, 
            top: `${trail.y}%`,
            transform: 'translate(-50%, -50%)',
            width: `${(5.75 * 1.23 * 3) * (1 - index * 0.15)}px`,
            height: `${(5.75 * 1.23 * 3) * (1 - index * 0.15)}px`,
            backgroundColor: colors.outer,
            borderRadius: '50%',
            opacity: trail.opacity * 0.6,
            zIndex: 5 - index,
            filter: `blur(${2 + index * 1.5}px)`,
            transition: 'all 0.15s ease-out'
          }}
        />
      ))}
      
      {/* Connect trail points with electric lines (similar to ball zaps) */}
      {trails.length > 1 && trails.slice(0, -1).map((trail, index) => {
        // Skip some connections for a more natural look
        if (index % 2 !== 0 || index >= trails.length - 1) return null;
        
        const nextTrail = trails[index + 1];
        if (!nextTrail) return null;
        
        // Calculate line properties
        const length = Math.sqrt(
          Math.pow(nextTrail.x - trail.x, 2) + 
          Math.pow(nextTrail.y - trail.y, 2)
        );
        
        const angle = Math.atan2(nextTrail.y - trail.y, nextTrail.x - trail.x) * (180 / Math.PI);
        
        return (
          <div
            key={`player-zap-${index}`}
            className="absolute"
            style={{
              left: `${trail.x}%`,
              top: `${trail.y}%`,
              width: `${length}%`,
              height: '1px',
              backgroundColor: colors.core,
              opacity: trail.opacity * 0.5,
              transform: `translate(0, -50%) rotate(${angle}deg)`,
              transformOrigin: 'left center',
              filter: 'blur(0.5px)',
              boxShadow: `0 0 2px ${colors.glow}`,
              zIndex: 4 - index,
              transition: 'all 0.15s ease-out'
            }}
          />
        );
      })}
    </>
  );
};

export default PlayerTrail;
