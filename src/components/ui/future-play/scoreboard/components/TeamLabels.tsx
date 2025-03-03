
import React from 'react';
import { teamLabels } from '../constants/courtConfig';

const TeamLabels: React.FC = () => {
  return (
    <>
      {/* Team labels */}
      <div className="absolute bottom-0 right-0 bg-blue-500 px-2.5 py-1 text-white text-xs font-medium rounded-tl-md">
        {teamLabels.team2}
      </div>
      <div className="absolute bottom-0 left-0 bg-green-500 px-2.5 py-1 text-white text-xs font-medium rounded-tr-md">
        {teamLabels.team1}
      </div>
    </>
  );
};

export default TeamLabels;
