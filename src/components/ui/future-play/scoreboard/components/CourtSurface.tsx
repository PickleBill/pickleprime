
import React from 'react';
import { courtBoundaries, courtColors, teamLabels } from '../constants/courtConfig';

const CourtSurface: React.FC = () => {
  // Light teal-blue color for the court
  const tealBlueColor = "#33C3F0"; // Bright teal-blue color
  // Dark navy color for the outer areas
  const darkNavyColor = "#0a192f"; // Dark navy blue color
  // Darker grass color for the buffer area
  const grassColor = "#2E8B57"; // Darker shade of green (SeaGreen)
  
  // Scale and position the court to be centered - shrink by 9%
  const paddingTop = 4.5; // Added padding to center the court
  const paddingBottom = 4.5; // Added padding to center the court
  const paddingSides = 4.5; // Added side padding for horizontal centering
  
  // Render the grass buffer that fills the container minus padding (9% shrink)
  const renderGrassBuffer = () => (
    <div className="absolute" style={{ 
      top: `${paddingTop}%`,
      bottom: `${paddingBottom}%`,
      left: `${paddingSides}%`,
      right: `${paddingSides}%`,
      backgroundColor: grassColor,
      borderRadius: "0.5rem",
      zIndex: 0
    }}></div>
  );
  
  // Render main court with dimensions that fill the container minus padding - shrunk by 9%
  const renderMainCourt = () => (
    <div className="absolute" style={{ 
      top: `${paddingTop + 5}%`, 
      bottom: `${paddingBottom + 5}%`, 
      left: `${paddingSides + 5}%`, 
      right: `${paddingSides + 5}%`,
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
          left: `${paddingSides + leftKitchenLine}%`,
          right: `${paddingSides + (100 - rightKitchenLine)}%`,
          backgroundColor: tealBlueColor,
          zIndex: 2
        }}></div>
        
        {/* Center line (net) with shadow */}
        <div className="absolute" style={{ 
          top: `${paddingTop + 5}%`,
          bottom: `${paddingBottom + 5}%`,
          left: `${50}%`,
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
          left: `${paddingSides + leftKitchenLine}%`,
          width: '2px',
          backgroundColor: courtColors.lines,
          zIndex: 3
        }}></div>
        
        {/* Right kitchen line */}
        <div className="absolute" style={{ 
          top: `${paddingTop + 5}%`,
          bottom: `${paddingBottom + 5}%`,
          left: `${paddingSides + rightKitchenLine}%`,
          width: '2px',
          backgroundColor: courtColors.lines,
          zIndex: 3
        }}></div>
        
        {/* Horizontal center line in the outer areas */}
        <div className="absolute" style={{ 
          top: `50%`, 
          height: '2px',
          left: `${paddingSides + 5}%`,
          right: `${paddingSides + (100 - leftKitchenLine)}%`,
          backgroundColor: courtColors.lines,
          zIndex: 3
        }}></div>
        
        <div className="absolute" style={{ 
          top: `50%`, 
          height: '2px',
          left: `${paddingSides + rightKitchenLine}%`,
          right: `${paddingSides + 5}%`,
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
