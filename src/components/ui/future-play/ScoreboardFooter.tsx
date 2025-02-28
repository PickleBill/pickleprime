
import React from "react";

const ScoreboardFooter: React.FC = () => {
  return (
    <div className="w-full p-4 border-t border-white/10 bg-navy-dark/80 backdrop-blur-sm flex justify-between items-center">
      <div className="text-white/40 text-sm">POWERED BY SWINGNET</div>
      
      <div className="flex items-center gap-6">
        <div className="text-white/40 text-xs">SPONSORED BY</div>
        <div className="text-white/60 font-medium">PICKLEVILLE SPORTS</div>
        <div className="text-white/60 font-medium">PADDLE TECH PRO</div>
        <div className="text-white/60 font-medium">COURT KINGS</div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="h-1 w-10 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
        <div className="h-1 w-6 bg-white/20 rounded-full"></div>
        <div className="h-1 w-6 bg-white/20 rounded-full"></div>
      </div>
    </div>
  );
};

export default ScoreboardFooter;
