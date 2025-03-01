
import React from 'react';

interface ScoreboardFooterProps {
  sponsors: { name: string; id: number }[];
}

const ScoreboardFooter: React.FC<ScoreboardFooterProps> = ({ sponsors }) => {
  return (
    <div className="w-full py-2 px-3 bg-navy-light/30 backdrop-blur-sm flex items-center justify-center text-xs text-white/40 border-t border-white/5">
      <div>Powered by SwingNet Analytics</div>
    </div>
  );
};

export default ScoreboardFooter;
