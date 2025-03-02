
import React from 'react';

interface CourtSurfaceProps {
  id?: string;
}

const CourtSurface: React.FC<CourtSurfaceProps> = ({ id = 'default-court' }) => {
  return (
    <div className="absolute inset-0 bg-green-700">
      {/* Court lines */}
      <div className="absolute inset-0 flex flex-col">
        {/* Center line */}
        <div className="w-full h-1 bg-white my-auto"></div>
        
        {/* Center circle */}
        <div className="absolute top-1/2 left-1/2 w-24 h-24 border-4 border-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Sidelines */}
        <div className="absolute top-0 left-0 w-full h-full border-2 border-white"></div>
        
        {/* Service boxes */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1/4 border-b-2 border-white"></div>
        <div className="absolute bottom-0 left-1/4 w-1/2 h-1/4 border-t-2 border-white"></div>
        
        {/* Court ID indicator */}
        <div className="absolute bottom-2 right-2 text-xs text-white/50">{id}</div>
      </div>
    </div>
  );
};

export default CourtSurface;
