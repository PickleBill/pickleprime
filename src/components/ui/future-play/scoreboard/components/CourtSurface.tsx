
import React from 'react';
import { courtBoundaries, courtColors, teamLabels } from '../constants/courtConfig';

const CourtSurface: React.FC = () => {
  // Render buffer area (30' x 60' total playing area)
  const renderBufferArea = () => (
    <div className="absolute inset-0 rounded-lg" style={{ backgroundColor: courtColors.buffer }}></div>
  );

  // Render main court (20' x 44')
  const renderMainCourt = () => (
    <div className="absolute" style={{ 
      top: `${courtBoundaries.courtTop}%`, 
      bottom: `${100 - courtBoundaries.courtBottom}%`,
      left: `${courtBoundaries.courtLeft}%`,
      right: `${100 - courtBoundaries.courtRight}%`,
      backgroundColor: courtColors.court,
      border: `2px solid ${courtColors.lines}`
    }}></div>
  );

  // Render kitchen/non-volley zones (7' from net on each side)
  const renderKitchen = () => (
    <>
      {/* Top kitchen */}
      <div className="absolute" style={{ 
        top: `${courtBoundaries.courtTop}%`, 
        bottom: `${100 - courtBoundaries.kitchenTop}%`,
        left: `${courtBoundaries.courtLeft}%`,
        right: `${100 - courtBoundaries.courtRight}%`,
        backgroundColor: courtColors.kitchen,
        borderBottom: `2px solid ${courtColors.lines}`
      }}></div>
      
      {/* Bottom kitchen */}
      <div className="absolute" style={{ 
        top: `${courtBoundaries.kitchenBottom}%`, 
        bottom: `${100 - courtBoundaries.courtBottom}%`,
        left: `${courtBoundaries.courtLeft}%`,
        right: `${100 - courtBoundaries.courtRight}%`,
        backgroundColor: courtColors.kitchen,
        borderTop: `2px solid ${courtColors.lines}`
      }}></div>
    </>
  );

  // Render court lines
  const renderCourtLines = () => (
    <>
      {/* Center line (net) with shadow */}
      <div className="absolute" style={{ 
        top: `${courtBoundaries.courtTop}%`, 
        bottom: `${100 - courtBoundaries.courtBottom}%`,
        left: `${courtBoundaries.netPosition}%`,
        width: `${courtBoundaries.netThickness}px`,
        backgroundColor: courtColors.lines,
        transform: 'translateX(-50%)',
        boxShadow: `0 0 8px 4px ${courtColors.netShadow}`
      }}></div>
      
      {/* Vertical centerline in each court half */}
      <div className="absolute" style={{ 
        top: `${courtBoundaries.courtTop}%`, 
        bottom: `${100 - courtBoundaries.courtBottom}%`,
        left: `${(courtBoundaries.courtLeft + courtBoundaries.netPosition) / 2}%`,
        width: '2px',
        backgroundColor: courtColors.lines,
        transform: 'translateX(-50%)'
      }}></div>
      <div className="absolute" style={{ 
        top: `${courtBoundaries.courtTop}%`, 
        bottom: `${100 - courtBoundaries.courtBottom}%`,
        left: `${(courtBoundaries.courtRight + courtBoundaries.netPosition) / 2}%`,
        width: '2px',
        backgroundColor: courtColors.lines,
        transform: 'translateX(-50%)'
      }}></div>
      
      {/* Service lines */}
      <div className="absolute" style={{ 
        top: `${courtBoundaries.courtTop + courtBoundaries.serviceLinePosition}%`, 
        height: '2px',
        left: `${courtBoundaries.courtLeft}%`,
        right: `${100 - courtBoundaries.netPosition}%`,
        backgroundColor: courtColors.lines
      }}></div>
      <div className="absolute" style={{ 
        top: `${courtBoundaries.courtBottom - courtBoundaries.serviceLinePosition}%`, 
        height: '2px',
        left: `${courtBoundaries.netPosition}%`,
        right: `${100 - courtBoundaries.courtRight}%`,
        backgroundColor: courtColors.lines
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
    <div className="relative w-full h-full">
      {renderBufferArea()}
      {renderMainCourt()}
      {renderKitchen()}
      {renderCourtLines()}
      {renderTeamLabels()}
    </div>
  );
};

export default CourtSurface;
