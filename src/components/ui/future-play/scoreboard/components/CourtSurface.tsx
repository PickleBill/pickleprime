
import React from 'react';
import { courtBoundaries, courtColors, teamLabels } from '../constants/courtConfig';

const CourtSurface: React.FC = () => {
  // Render court components
  const renderCourtOutline = () => (
    <>
      {/* Blue background outside the court */}
      <div className="absolute inset-0 rounded-lg" style={{ backgroundColor: courtColors.surface }}></div>
      
      {/* White court boundary */}
      <div className="absolute" style={{ 
        top: `${courtBoundaries.top}%`, 
        bottom: `${courtBoundaries.bottom - 100}%`,
        left: `${courtBoundaries.left}%`,
        right: `${courtBoundaries.right - 100}%`,
        border: '2px solid white'
      }}></div>
    </>
  );

  // Render court areas
  const renderCourtAreas = () => (
    <>
      {/* Top playing area (green) */}
      <div className="absolute" style={{ 
        top: `${courtBoundaries.top}%`, 
        bottom: `${courtBoundaries.kitchenBottom}%`,
        left: `${courtBoundaries.left}%`,
        right: `${courtBoundaries.right - 100}%`,
        backgroundColor: courtColors.playArea
      }}></div>
      
      {/* Bottom playing area (green) */}
      <div className="absolute" style={{ 
        top: `${courtBoundaries.kitchenTop}%`, 
        bottom: `${courtBoundaries.bottom - 100}%`,
        left: `${courtBoundaries.left}%`,
        right: `${courtBoundaries.right - 100}%`,
        backgroundColor: courtColors.playArea
      }}></div>
      
      {/* Non-volley zone (kitchen) - orange */}
      <div className="absolute" style={{ 
        top: `${courtBoundaries.kitchenBottom}%`, 
        bottom: `${courtBoundaries.kitchenTop - 100}%`,
        left: `${courtBoundaries.left}%`,
        right: `${courtBoundaries.right - 100}%`,
        backgroundColor: courtColors.kitchen
      }}></div>
    </>
  );

  // Render court lines
  const renderCourtLines = () => (
    <>
      {/* Center line vertical (only visible in green areas) */}
      <div className="absolute" style={{ 
        top: `${courtBoundaries.top}%`, 
        bottom: `${courtBoundaries.kitchenBottom}%`,
        left: '50%',
        width: '2px',
        backgroundColor: 'white',
        transform: 'translateX(-50%)'
      }}></div>
      
      <div className="absolute" style={{ 
        top: `${courtBoundaries.kitchenTop}%`, 
        bottom: `${courtBoundaries.bottom - 100}%`,
        left: '50%',
        width: '2px',
        backgroundColor: 'white',
        transform: 'translateX(-50%)'
      }}></div>
      
      {/* Net line */}
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
      {renderCourtOutline()}
      {renderCourtAreas()}
      {renderCourtLines()}
      {renderTeamLabels()}
    </>
  );
};

export default CourtSurface;
