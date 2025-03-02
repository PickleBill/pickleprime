
import React from 'react';
import { courtBoundaries, courtColors, teamLabels } from '../constants/courtConfig';

const CourtSurface: React.FC = () => {
  // Light teal-blue color for the court
  const tealBlueColor = "#33C3F0"; // Bright teal-blue color
  // Dark navy color for the outer areas
  const darkNavyColor = "#0a192f"; // Dark navy blue color
  // Darker grass color for the buffer area
  const grassColor = "#2E8B57"; // Darker shade of green (SeaGreen)
  
  // Scale and position the court to be centered - shrink by 10%
  const paddingTop = 1.5; // Reduced by 2% from previous 3.5%
  const paddingBottom = 7; // Increased by 2% from previous 5%
  const paddingX = 0; // Remove horizontal padding to extend green area to edges
  
  // Render the grass buffer that fills the entire container
  const renderGrassBuffer = () => (
    <div className="absolute inset-0" style={{ 
      backgroundColor: grassColor,
      zIndex: 0
    }}></div>
  );
  
  // Render main court with dimensions that fill the container minus padding - shrunk by 10%
  const renderMainCourt = () => (
    <div className="absolute" style={{ 
      top: `${paddingTop + 5}%`, // Add 5% top padding (10% / 2)
      bottom: `${paddingBottom + 5}%`, // Add 5% bottom padding (10% / 2)
      left: `${paddingX + 5}%`, 
      right: `${paddingX + 5}%`,
      backgroundColor: darkNavyColor, // Dark navy for the main court
      border: `2px solid ${courtColors.lines}`,
      zIndex: 1
    }}></div>
  );

  // Render court lines and middle area with properly adjusted positions
  const renderCourtLines = () => {
    // Net position is in the middle
    const netPos = 50;
    
    // According to the diagram, the kitchen width is 213cm on each side of the net
    // Out of the total 1341cm, this is approximately 16% of the total width from the net
    const kitchenWidth = 16; // 16% of the court width on each side of the net
    const leftKitchenLine = netPos - kitchenWidth;
    const rightKitchenLine = netPos + kitchenWidth;
    
    return (
      <>
        {/* Light teal blue center area (kitchen zone) */}
        <div className="absolute" style={{ 
          top: `${paddingTop + 5}%`,
          bottom: `${paddingBottom + 5}%`,
          left: `${leftKitchenLine}%`,
          right: `${100 - rightKitchenLine}%`,
          backgroundColor: tealBlueColor,
          zIndex: 2
        }}></div>
        
        {/* Center line (net) with shadow */}
        <div className="absolute" style={{ 
          top: `${paddingTop + 5}%`,
          bottom: `${paddingBottom + 5}%`,
          left: `${netPos}%`,
          width: `${courtBoundaries.netThickness}px`,
          backgroundColor: courtColors.lines,
          transform: 'translateX(-50%)',
          boxShadow: `0 0 8px 4px ${courtColors.netShadow}`,
          zIndex: 3
        }}></div>
        
        {/* Left kitchen line */}
        <div className="absolute" style={{ 
          top: `${paddingTop + 5}%`,
          bottom: `${paddingBottom + 5}%`,
          left: `${leftKitchenLine}%`,
          width: '2px',
          backgroundColor: courtColors.lines,
          zIndex: 3
        }}></div>
        
        {/* Right kitchen line */}
        <div className="absolute" style={{ 
          top: `${paddingTop + 5}%`,
          bottom: `${paddingBottom + 5}%`,
          left: `${rightKitchenLine}%`,
          width: '2px',
          backgroundColor: courtColors.lines,
          zIndex: 3
        }}></div>
        
        {/* Horizontal center line in the outer areas */}
        <div className="absolute" style={{ 
          top: `50%`, 
          height: '2px',
          left: `${paddingX + 5}%`,
          right: `${100 - leftKitchenLine}%`,
          backgroundColor: courtColors.lines,
          zIndex: 3
        }}></div>
        
        <div className="absolute" style={{ 
          top: `50%`, 
          height: '2px',
          left: `${rightKitchenLine}%`,
          right: `${paddingX + 5}%`,
          backgroundColor: courtColors.lines,
          zIndex: 3
        }}></div>
      </>
    );
  };

  // Render team labels
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
      {renderGrassBuffer()}
      {renderMainCourt()}
      {renderCourtLines()}
      {renderTeamLabels()}
    </div>
  );
};

export default CourtSurface;
