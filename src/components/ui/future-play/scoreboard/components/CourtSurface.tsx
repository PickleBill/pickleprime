
import React from 'react';
import { courtBoundaries, courtColors, teamLabels } from '../constants/courtConfig';

const CourtSurface: React.FC = () => {
  // Light teal-blue color for the court
  const tealBlueColor = "#33C3F0"; // Bright teal-blue color
  // Dark navy color for the outer areas
  const darkNavyColor = "#0a192f"; // Dark navy blue color
  
  // Scale and position the court to be 7% smaller with even spacing
  const paddingTop = 3.5; // Add 3.5% padding to top 
  const paddingBottom = 5; // Increase bottom padding to 5% to show more of the bottom area
  const paddingX = 3.5; // Add 3.5% padding to sides
  
  // Render main court with dimensions that fill the container minus padding
  const renderMainCourt = () => (
    <div className="absolute" style={{ 
      top: `${paddingTop}%`,
      bottom: `${paddingBottom}%`,
      left: `${paddingX}%`,
      right: `${paddingX}%`,
      backgroundColor: darkNavyColor, // Changed to dark navy for the main court (4 square boxes)
      border: `2px solid ${courtColors.lines}`,
      zIndex: 1
    }}></div>
  );

  // Render court lines and middle area with adjusted positions
  const renderCourtLines = () => {
    // Net is in the middle
    const netPos = 50; 
    
    // Calculate the position at exactly 31% from the net to each side
    const leftLine1Position = netPos - (netPos - paddingX) * 0.31;
    const rightLine1Position = netPos + (100 - netPos - paddingX) * 0.31;
    
    return (
      <>
        {/* Light teal blue inside area between the lines (kitchen) - changed from dark to light */}
        <div className="absolute" style={{ 
          top: `${paddingTop}%`, 
          bottom: `${paddingBottom}%`,
          left: `${leftLine1Position}%`,
          right: `${100 - rightLine1Position}%`,
          backgroundColor: tealBlueColor, // Changed to teal blue for the inside vertical rectangle
          zIndex: 2 // Increased z-index to ensure it appears above the dark background
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

  // Render team labels - adjusted positions to account for court size
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
