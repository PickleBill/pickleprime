
import React from 'react';
import { courtBoundaries, courtColors, teamLabels } from '../constants/courtConfig';

const CourtSurface: React.FC = () => {
  // Calculate the adjusted court dimensions (extended by 20%)
  const extendBy = 0.2; // 20% extension
  const originalTop = courtBoundaries.courtTop;
  const originalBottom = courtBoundaries.courtBottom;
  const originalLeft = courtBoundaries.courtLeft;
  const originalRight = courtBoundaries.courtRight;
  
  // Extend court in all directions by 20%
  const extendedTop = originalTop - (originalTop * extendBy);
  const extendedBottom = originalBottom + ((100 - originalBottom) * extendBy);
  const extendedLeft = originalLeft - (originalLeft * extendBy);
  const extendedRight = originalRight + ((100 - originalRight) * extendBy);
  
  // Render buffer area (now smaller due to court extension and further reduced by 10%)
  const renderBufferArea = () => {
    // Calculate buffer size reduction (50% smaller - increased from 40%)
    const bufferReduction = 0.5;
    const topBuffer = courtBoundaries.courtTop * bufferReduction;
    const bottomBuffer = courtBoundaries.courtBottom * bufferReduction;
    const leftBuffer = courtBoundaries.courtLeft * bufferReduction;
    const rightBuffer = courtBoundaries.courtRight * bufferReduction;
    
    return (
      <div className="absolute rounded-lg" style={{ 
        top: `${topBuffer}%`,
        bottom: `${topBuffer}%`,
        left: `${leftBuffer}%`,
        right: `${leftBuffer}%`,
        backgroundColor: courtColors.buffer
      }}></div>
    );
  };

  // Render main court with extended dimensions
  const renderMainCourt = () => (
    <div className="absolute" style={{ 
      top: `${extendedTop}%`, 
      bottom: `${100 - extendedBottom}%`,
      left: `${extendedLeft}%`,
      right: `${100 - extendedRight}%`,
      backgroundColor: courtColors.court,
      border: `2px solid ${courtColors.lines}`,
      zIndex: 1
    }}></div>
  );

  // Render court lines and middle area with adjusted positions
  const renderCourtLines = () => {
    // Calculate the positions of the vertical lines (31% from net to court edge)
    const leftEdge = extendedLeft;
    const rightEdge = extendedRight;
    const netPos = courtBoundaries.netPosition;
    
    // Calculate distance from net to each edge
    const distanceToLeftEdge = netPos - leftEdge;
    const distanceToRightEdge = rightEdge - netPos;
    
    // Calculate the position at 31% of that distance
    const leftLine1Position = netPos - (distanceToLeftEdge * 0.31);
    const rightLine1Position = netPos + (distanceToRightEdge * 0.31);
    
    return (
      <>
        {/* Render the greyish silver middle area - placed with lower z-index */}
        <div className="absolute" style={{ 
          top: `${extendedTop}%`, 
          bottom: `${100 - extendedBottom}%`,
          left: `${leftLine1Position}%`,
          right: `${100 - rightLine1Position}%`,
          backgroundColor: "#9F9EA1", // Greyish silver color
          zIndex: 0
        }}></div>
      
        {/* Center line (net) with shadow */}
        <div className="absolute" style={{ 
          top: `${extendedTop}%`, 
          bottom: `${100 - extendedBottom}%`,
          left: `${courtBoundaries.netPosition}%`,
          width: `${courtBoundaries.netThickness}px`,
          backgroundColor: courtColors.lines,
          transform: 'translateX(-50%)',
          boxShadow: `0 0 8px 4px ${courtColors.netShadow}`,
          zIndex: 2
        }}></div>
        
        {/* Left vertical line at 31% from net */}
        <div className="absolute" style={{ 
          top: `${extendedTop}%`, 
          bottom: `${100 - extendedBottom}%`,
          left: `${leftLine1Position}%`,
          width: '2px',
          backgroundColor: courtColors.lines,
          transform: 'translateX(-50%)',
          zIndex: 2
        }}></div>
        
        {/* Right vertical line at 31% from net */}
        <div className="absolute" style={{ 
          top: `${extendedTop}%`, 
          bottom: `${100 - extendedBottom}%`,
          left: `${rightLine1Position}%`,
          width: '2px',
          backgroundColor: courtColors.lines,
          transform: 'translateX(-50%)',
          zIndex: 2
        }}></div>
        
        {/* Horizontal center line only in the outer blue areas */}
        <div className="absolute" style={{ 
          top: `${(extendedTop + extendedBottom) / 2}%`, 
          height: '2px',
          left: `${extendedLeft}%`,
          right: `${100 - leftLine1Position}%`,
          backgroundColor: courtColors.lines,
          zIndex: 2
        }}></div>
        
        <div className="absolute" style={{ 
          top: `${(extendedTop + extendedBottom) / 2}%`, 
          height: '2px',
          left: `${rightLine1Position}%`,
          right: `${100 - extendedRight}%`,
          backgroundColor: courtColors.lines,
          zIndex: 2
        }}></div>
      </>
    );
  };

  // Render team labels - adjusted positions to account for extended court
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

  return (
    <div className="relative w-full h-full">
      {renderBufferArea()}
      {renderMainCourt()}
      {renderCourtLines()}
      {renderTeamLabels()}
    </div>
  );
};

export default CourtSurface;
