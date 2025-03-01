
import React from 'react';
import { courtBoundaries, courtColors, teamLabels } from '../constants/courtConfig';

const CourtSurface: React.FC = () => {
  // Calculate the adjusted court dimensions (extended by 20%)
  const extendBy = 0.2; // 20% extension
  const originalTop = courtBoundaries.courtTop;
  const originalBottom = courtBoundaries.courtBottom;
  const originalLeft = courtBoundaries.courtLeft;
  const originalRight = courtBoundaries.courtRight;
  
  // Extend court to fill the entire container
  const extendedTop = 0; // Extended to the top edge
  const extendedBottom = 100; // Extended to the bottom edge
  const extendedLeft = 0; // Extended to the left edge
  const extendedRight = 100; // Extended to the right edge
  
  // Render main court with extended dimensions that fill the entire container
  const renderMainCourt = () => (
    <div className="absolute inset-0" style={{ 
      backgroundColor: "#2a6243", // Darker forest green color but still light enough to maintain visibility
      border: `2px solid ${courtColors.lines}`,
      zIndex: 1
    }}></div>
  );

  // Render court lines and middle area with adjusted positions
  const renderCourtLines = () => {
    // Calculate the positions of the vertical lines (31% from net to court edge)
    const netPos = courtBoundaries.netPosition;
    
    // Calculate the position at 31% from the net to the edges
    const leftLine1Position = netPos - (netPos * 0.31);
    const rightLine1Position = netPos + ((100 - netPos) * 0.31);
    
    return (
      <>
        {/* Render the greyish silver middle area - placed with lower z-index */}
        <div className="absolute" style={{ 
          top: `0%`, 
          bottom: `0%`,
          left: `${leftLine1Position}%`,
          right: `${100 - rightLine1Position}%`,
          backgroundColor: "#9F9EA1", // Greyish silver color
          zIndex: 0
        }}></div>
      
        {/* Center line (net) with shadow */}
        <div className="absolute" style={{ 
          top: `0%`, 
          bottom: `0%`,
          left: `${courtBoundaries.netPosition}%`,
          width: `${courtBoundaries.netThickness}px`,
          backgroundColor: courtColors.lines,
          transform: 'translateX(-50%)',
          boxShadow: `0 0 8px 4px ${courtColors.netShadow}`,
          zIndex: 2
        }}></div>
        
        {/* Left vertical line at 31% from net */}
        <div className="absolute" style={{ 
          top: `0%`, 
          bottom: `0%`,
          left: `${leftLine1Position}%`,
          width: '2px',
          backgroundColor: courtColors.lines,
          transform: 'translateX(-50%)',
          zIndex: 2
        }}></div>
        
        {/* Right vertical line at 31% from net */}
        <div className="absolute" style={{ 
          top: `0%`, 
          bottom: `0%`,
          left: `${rightLine1Position}%`,
          width: '2px',
          backgroundColor: courtColors.lines,
          transform: 'translateX(-50%)',
          zIndex: 2
        }}></div>
        
        {/* Horizontal center line only in the outer blue areas */}
        <div className="absolute" style={{ 
          top: `50%`, 
          height: '2px',
          left: `0%`,
          right: `${100 - leftLine1Position}%`,
          backgroundColor: courtColors.lines,
          zIndex: 2
        }}></div>
        
        <div className="absolute" style={{ 
          top: `50%`, 
          height: '2px',
          left: `${rightLine1Position}%`,
          right: `0%`,
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
      {renderMainCourt()}
      {renderCourtLines()}
      {renderTeamLabels()}
    </div>
  );
};

export default CourtSurface;
