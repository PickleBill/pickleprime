
import React from 'react';
import { courtBoundaries, courtColors, teamLabels } from '../constants/courtConfig';

const CourtSurface: React.FC = () => {
  // Light teal-blue color for the court
  const tealBlueColor = "#33C3F0"; // Bright teal-blue color
  
  // Scale and position the court to be 5% smaller with even spacing
  const courtScale = 0.95; // 95% of original size (5% smaller)
  const paddingTop = 2.5; // Add 2.5% padding to top to pull court up
  const paddingBottom = 2.5; // Add 2.5% padding to bottom 
  const paddingX = 2.5; // Add 2.5% padding to sides
  
  // Render main court with extended dimensions that fill the entire container
  const renderMainCourt = () => (
    <div className="absolute" style={{ 
      top: `${paddingTop}%`,
      bottom: `${paddingBottom}%`,
      left: `${paddingX}%`,
      right: `${paddingX}%`,
      backgroundColor: tealBlueColor, // Teal blue for the main court background
      border: `2px solid ${courtColors.lines}`,
      zIndex: 1
    }}></div>
  );

  // Render court lines and middle area with adjusted positions
  const renderCourtLines = () => {
    // Calculate the positions of the vertical lines (31% from net to court edge)
    const netPos = 50; // Net is in the middle
    
    // Calculate the position at 31% from the net to the edges
    const leftLine1Position = paddingX + ((50 - paddingX) * 0.31);
    const rightLine1Position = 100 - paddingX - ((50 - paddingX) * 0.31);
    
    return (
      <>
        {/* Dark navy blue inside area between the lines (kitchen) */}
        <div className="absolute" style={{ 
          top: `${paddingTop}%`, 
          bottom: `${paddingBottom}%`,
          left: `${leftLine1Position}%`,
          right: `${100 - rightLine1Position}%`,
          backgroundColor: "#0a192f", // Dark navy blue color for inside the lines
          zIndex: 2 // Increased z-index to ensure it appears above the teal background
        }}></div>
        
        {/* Center line (net) with shadow */}
        <div className="absolute" style={{ 
          top: `${paddingTop}%`, 
          bottom: `${paddingBottom}%`,
          left: `50%`,
          width: `${courtBoundaries.netThickness}px`,
          backgroundColor: courtColors.lines,
          transform: 'translateX(-50%)',
          boxShadow: `0 0 8px 4px ${courtColors.netShadow}`,
          zIndex: 3 // Higher z-index to appear above the blue
        }}></div>
        
        {/* Left vertical line at 31% from net */}
        <div className="absolute" style={{ 
          top: `${paddingTop}%`, 
          bottom: `${paddingBottom}%`,
          left: `${leftLine1Position}%`,
          width: '2px',
          backgroundColor: courtColors.lines,
          transform: 'translateX(-50%)',
          zIndex: 3 // Higher z-index to appear above the blue
        }}></div>
        
        {/* Right vertical line at 31% from net */}
        <div className="absolute" style={{ 
          top: `${paddingTop}%`, 
          bottom: `${paddingBottom}%`,
          left: `${rightLine1Position}%`,
          width: '2px',
          backgroundColor: courtColors.lines,
          transform: 'translateX(-50%)',
          zIndex: 3 // Higher z-index to appear above the blue
        }}></div>
        
        {/* Horizontal center line only in the outer areas */}
        <div className="absolute" style={{ 
          top: `50%`, 
          height: '2px',
          left: `${paddingX}%`,
          right: `${100 - leftLine1Position}%`,
          backgroundColor: courtColors.lines,
          zIndex: 3 // Higher z-index
        }}></div>
        
        <div className="absolute" style={{ 
          top: `50%`, 
          height: '2px',
          left: `${rightLine1Position}%`,
          right: `${paddingX}%`,
          backgroundColor: courtColors.lines,
          zIndex: 3 // Higher z-index
        }}></div>
      </>
    );
  };

  // Render team labels - adjusted positions to account for extended court
  const renderTeamLabels = () => (
    <>
      {/* Team Green label */}
      <div className="absolute top-2 left-4 bg-green-600/90 text-white px-3 py-1 rounded-md font-bold text-sm z-10">
        {teamLabels.team1}
      </div>
      
      {/* Team Blue label */}
      <div className="absolute bottom-2 right-4 bg-blue-600/90 text-white px-3 py-1 rounded-md font-bold text-sm z-10">
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
