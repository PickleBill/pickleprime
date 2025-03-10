
import React from 'react';
import { ballConfig } from '../../constants/courtConfig';

interface BallTrailProps {
  positionHistory: {x: number, y: number, opacity: number}[];
}

const BallTrail: React.FC<BallTrailProps> = ({ positionHistory }) => {
  // Create random lightning branches
  const renderLightningBranches = () => {
    if (positionHistory.length < 3) return null;
    
    return positionHistory.slice(0, -2).map((pos, index) => {
      // Only create branches for some positions (randomized)
      if (index % 2 !== 0 || Math.random() > 0.7) return null;
      
      // Calculate branch angle (perpendicular to main trail + random variation)
      const nextPos = positionHistory[index + 1];
      const mainAngle = Math.atan2(nextPos.y - pos.y, nextPos.x - pos.x);
      const branchAngle = mainAngle + (Math.PI / 2) * (Math.random() > 0.5 ? 1 : -1);
      const branchLength = 1.5 + Math.random() * 3.5; // Longer branches
      
      // Calculate end point of branch
      const branchEndX = pos.x + Math.cos(branchAngle) * branchLength;
      const branchEndY = pos.y + Math.sin(branchAngle) * branchLength;
      
      // Calculate rotation angle for the branch line in degrees
      const rotationAngle = branchAngle * (180 / Math.PI);
      
      return (
        <React.Fragment key={`branch-${index}`}>
          {/* Main branch */}
          <div
            className="absolute"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              width: `${branchLength}%`,
              height: '2px', // Slightly thicker for more visibility
              background: 'linear-gradient(90deg, rgba(220, 255, 230, 0.98), rgba(140, 255, 180, 0.15))',
              opacity: Math.max(0.15, pos.opacity * 0.95),
              transform: `translate(0, -50%) rotate(${rotationAngle}deg)`,
              transformOrigin: 'left center',
              filter: 'blur(0.5px)',
              boxShadow: '0 0 4px rgba(180, 255, 230, 0.9)',
              zIndex: 9 - index,
              transition: 'all 0.05s linear' // Faster transitions for speedy ball
            }}
          />
          
          {/* Sometimes add a smaller sub-branch */}
          {Math.random() > 0.5 && (
            <div
              className="absolute"
              style={{
                left: `${(pos.x + branchEndX) / 2}%`,
                top: `${(pos.y + branchEndY) / 2}%`,
                width: `${branchLength * 0.7}%`,
                height: '1.5px', // Slightly thicker
                background: 'linear-gradient(90deg, rgba(230, 255, 240, 0.95), rgba(150, 255, 210, 0.1))',
                opacity: Math.max(0.15, pos.opacity * 0.85),
                transform: `translate(0, -50%) rotate(${rotationAngle + (Math.random() > 0.5 ? 35 : -35)}deg)`,
                transformOrigin: 'left center',
                filter: 'blur(0.5px)',
                boxShadow: '0 0 3px rgba(180, 255, 220, 0.8)',
                zIndex: 8 - index,
                transition: 'all 0.05s linear' // Faster transitions
              }}
            />
          )}
        </React.Fragment>
      );
    });
  };
  
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
            width: `${ballConfig.size * (0.6 - index * 0.05)}px`, // Slightly larger core
            height: `${ballConfig.size * (0.6 - index * 0.05)}px`,
            backgroundColor: index === 0 
              ? 'rgba(240, 255, 230, 0.98)'
              : 'rgba(200, 255, 210, 0.9)',
            opacity: pos.opacity * 0.98,
            transform: 'translate(-50%, -50%)',
            filter: `blur(${Math.max(0.5, index * 0.6)}px)`,
            boxShadow: `0 0 ${6 + index * 3}px rgba(150, 255, 190, ${0.97 - index * 0.1})`,
            zIndex: 12 - index,
            transition: 'all 0.05s linear' // Faster transitions for speedy ball
          }}
        />
      ))}
      
      {/* Electric trails - outer glow (enhanced silver-green) */}
      {positionHistory.map((pos, index) => (
        <div
          key={`ball-electric-glow-${index}`}
          className="absolute"
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            width: `${ballConfig.size * (1.4 - index * 0.08)}px`, // Slightly larger
            height: `${ballConfig.size * (0.6 - index * 0.03)}px`, // Slightly taller
            background: index < 2 
              ? 'linear-gradient(90deg, rgba(240, 255, 230, 0.98), rgba(180, 255, 210, 0.85))'
              : 'linear-gradient(90deg, rgba(220, 255, 210, 0.85), rgba(160, 245, 190, 0.7))',
            opacity: Math.max(0.2, pos.opacity * 0.9 - index * 0.08),
            transform: `translate(-50%, -50%) rotate(${index * 30}deg)`, // More rotation
            filter: `blur(${1 + index * 0.9}px)`,
            borderRadius: '40%',
            zIndex: 10 - index,
            transition: 'all 0.05s linear' // Faster transitions
          }}
        />
      ))}
      
      {/* Lightning zaps - enhanced electric lines connecting trail points */}
      {positionHistory.length > 1 && positionHistory.slice(0, -1).map((pos, index) => {
        // Generate more connections for a denser effect
        if (index % 2 !== 0 && index % 3 !== 0 && index < positionHistory.length - 1) return null;
        
        const nextPos = positionHistory[index + 1];
        if (!nextPos) return null;
        
        // Calculate line properties
        const length = Math.sqrt(
          Math.pow(nextPos.x - pos.x, 2) + 
          Math.pow(nextPos.y - pos.y, 2)
        );
        
        const angle = Math.atan2(nextPos.y - pos.y, nextPos.x - pos.x) * (180 / Math.PI);
        
        // Add a slight curve or wobble to the zap
        const wobble = Math.sin(index * 0.8) * 0.35;
        
        return (
          <div
            key={`ball-zap-${index}`}
            className="absolute"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              width: `${length}%`,
              height: '2px', // Thicker
              background: 'linear-gradient(90deg, rgba(220, 255, 220, 0.98), rgba(160, 255, 190, 0.75))',
              opacity: Math.max(0.2, pos.opacity * 0.85),
              transform: `translate(0, -50%) rotate(${angle}deg) scaleY(${1 + wobble})`,
              transformOrigin: 'left center',
              filter: 'blur(0.7px)',
              boxShadow: '0 0 5px rgba(180, 255, 210, 0.9)',
              zIndex: 9 - index,
              transition: 'all 0.05s linear' // Faster transitions
            }}
          />
        );
      })}
      
      {/* Branching lightning effects */}
      {renderLightningBranches()}
    </>
  );
};

export default BallTrail;
