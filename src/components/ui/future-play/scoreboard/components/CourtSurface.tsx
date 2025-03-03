
/**
 * CourtSurface Component
 * 
 * Renders the pickleball court surface including:
 * - Grass buffer area (outer court)
 * - Main court playing surface
 * - Kitchen (non-volley zone)
 * - Court lines and net
 * 
 * Uses configuration from courtConfig constants.
 */
import React from 'react';
import { courtBoundaries, courtColors } from '../constants/courtConfig';

const CourtSurface: React.FC = () => {
  // Light blue color for the court
  const lightBlueColor = "#33C3F0"; // Bright blue color
  // Dark navy color for the outer areas
  const darkNavyColor = "#0a192f"; // Dark navy blue color
  // Dark forest green color for the buffer area (updated from the image)
  const grassColor = "#1D4D3D"; // Dark forest green from the provided image
  
  // Scale and position the court to be centered
  const paddingTop = 1.5;
  const paddingBottom = 7;
  const paddingX = 0;
  
  // Render the grass buffer that fills the entire container
  const renderGrassBuffer = () => (
    <div className="absolute inset-0" style={{ 
      backgroundColor: grassColor,
      zIndex: 0
    }}></div>
  );
  
  // Render main court with dimensions that fill the container minus padding
  const renderMainCourt = () => (
    <div className="absolute" style={{ 
      top: `${paddingTop + 5}%`,
      bottom: `${paddingBottom + 5}%`,
      left: `${paddingX + 5}%`, 
      right: `${paddingX + 5}%`,
      backgroundColor: darkNavyColor,
      border: `2px solid ${courtColors.lines}`,
      zIndex: 1
    }}></div>
  );

  // Render court lines and middle area with properly adjusted positions
  const renderCourtLines = () => {
    // Net position is in the middle
    const netPos = 50;
    
    // Kitchen width (no-volley zone)
    const kitchenWidth = 16;
    const leftKitchenLine = netPos - kitchenWidth;
    const rightKitchenLine = netPos + kitchenWidth;
    
    return (
      <>
        {/* Light blue center area (kitchen zone) */}
        <div className="absolute" style={{ 
          top: `${paddingTop + 5}%`,
          bottom: `${paddingBottom + 5}%`,
          left: `${leftKitchenLine}%`,
          right: `${100 - rightKitchenLine}%`,
          backgroundColor: lightBlueColor,
          zIndex: 2
        }}></div>
        
        {/* Center line (net) with enhanced shadow */}
        <div className="absolute" style={{ 
          top: `${paddingTop + 5}%`,
          bottom: `${paddingBottom + 5}%`,
          left: `${netPos}%`,
          width: `${courtBoundaries.netThickness}px`,
          backgroundColor: courtColors.lines,
          transform: 'translateX(-50%)',
          boxShadow: `0 0 10px 4px ${courtColors.netShadow}`,
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

  return (
    <div className="relative w-full h-full">
      {renderGrassBuffer()}
      {renderMainCourt()}
      {renderCourtLines()}
    </div>
  );
};

export default CourtSurface;
