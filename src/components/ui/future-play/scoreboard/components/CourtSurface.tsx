
import React from 'react';
import { courtBoundaries, courtColors, teamLabels } from '../constants/courtConfig';

const CourtSurface: React.FC = () => {
  // Render court base with outer light blue background
  const renderCourtBase = () => (
    <>
      {/* Light blue outer background */}
      <div className="absolute inset-0 rounded-lg" style={{ backgroundColor: courtColors.surface }}></div>
      
      {/* Main court rectangle */}
      <div className="absolute" style={{ 
        top: `${courtBoundaries.top}%`, 
        bottom: `${courtBoundaries.bottom - 100}%`,
        left: `${courtBoundaries.left}%`,
        right: `${courtBoundaries.right - 100}%`,
        border: '2px solid white'
      }}></div>
    </>
  );

  // Render the four court quadrants
  const renderCourtQuadrants = () => (
    <>
      {/* Top Left quadrant - blue */}
      <div className="absolute" style={{ 
        top: `${courtBoundaries.top}%`, 
        bottom: `${courtBoundaries.midLine}%`,
        left: `${courtBoundaries.left}%`,
        right: `${courtBoundaries.centerLine}%`,
        backgroundColor: courtColors.quadrant
      }}></div>
      
      {/* Top Right quadrant - blue */}
      <div className="absolute" style={{ 
        top: `${courtBoundaries.top}%`, 
        bottom: `${courtBoundaries.midLine}%`,
        left: `${courtBoundaries.centerLine}%`,
        right: `${courtBoundaries.right - 100}%`,
        backgroundColor: courtColors.quadrant
      }}></div>
      
      {/* Bottom Left quadrant - blue */}
      <div className="absolute" style={{ 
        top: `${courtBoundaries.midLine}%`, 
        bottom: `${courtBoundaries.bottom - 100}%`,
        left: `${courtBoundaries.left}%`,
        right: `${courtBoundaries.centerLine}%`,
        backgroundColor: courtColors.quadrant
      }}></div>
      
      {/* Bottom Right quadrant - blue */}
      <div className="absolute" style={{ 
        top: `${courtBoundaries.midLine}%`, 
        bottom: `${courtBoundaries.bottom - 100}%`,
        left: `${courtBoundaries.centerLine}%`,
        right: `${courtBoundaries.right - 100}%`,
        backgroundColor: courtColors.quadrant
      }}></div>
    </>
  );

  // Render court lines
  const renderCourtLines = () => (
    <>
      {/* Center Net line */}
      <div className="absolute" style={{ 
        top: `${courtBoundaries.top}%`, 
        bottom: `${courtBoundaries.bottom - 100}%`,
        left: '50%',
        width: '2px',
        backgroundColor: 'white', // White for net
        transform: 'translateX(-50%)'
      }}></div>
      
      {/* Horizontal middle line */}
      <div className="absolute" style={{ 
        top: `${courtBoundaries.midLine}%`, 
        height: '2px',
        left: `${courtBoundaries.left}%`,
        right: `${courtBoundaries.right - 100}%`,
        backgroundColor: 'white',
        transform: 'translateY(-50%)'
      }}></div>
    </>
  );

  // Render team labels
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
    <>
      {renderCourtBase()}
      {renderCourtQuadrants()}
      {renderCourtLines()}
      {renderTeamLabels()}
    </>
  );
};

export default CourtSurface;
