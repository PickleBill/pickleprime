
import React from "react";
import { Activity } from "lucide-react";
import { Zap } from "lucide-react";

const CourtVisualization: React.FC = () => {
  return (
    <div className="flex-1 relative bg-navy-light/30 rounded-2xl overflow-hidden border border-white/10">
      {/* Court background */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1626224583764-f87db24ac4ea')] bg-center bg-cover">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-dark"></div>
      </div>
      
      {/* Court AR overlay visualization */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-4/5 h-3/5 border-2 border-primary/40 rounded-lg relative">
          {/* Court lines */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-primary/40"></div>
          <div className="absolute top-0 bottom-0 left-1/3 w-px bg-primary/40"></div>
          <div className="absolute top-0 bottom-0 right-1/3 w-px bg-primary/40"></div>
          
          {/* Player positions */}
          <div className="absolute bottom-1/4 left-1/4 w-6 h-6 rounded-full bg-[#1a9dc3]/90 border-2 border-white/50 shadow-lg shadow-[#1a9dc3]/30 flex items-center justify-center text-xs text-white">P1</div>
          <div className="absolute top-1/4 right-1/4 w-6 h-6 rounded-full bg-primary/90 border-2 border-white/50 shadow-lg shadow-primary/30 flex items-center justify-center text-xs text-white">P2</div>
          
          {/* Ball trajectory */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path 
              d="M25,75 Q50,30 75,25" 
              fill="none" 
              stroke="#2BCB6E" 
              strokeWidth="0.5" 
              strokeDasharray="2 1"
              className="animate-pulse"
            />
            <circle cx="75" cy="25" r="1.5" fill="#2BCB6E" className="animate-pulse" />
          </svg>
          
          {/* Shot speed indicator */}
          <div className="absolute top-1/3 right-1/3 bg-navy-dark/80 backdrop-blur-sm px-2 py-1 rounded-lg border border-white/10 text-white/90 text-xs">
            38 mph
          </div>
        </div>
      </div>
      
      {/* Realtime analytics */}
      <div className="absolute bottom-4 left-4 right-4 bg-navy-dark/80 backdrop-blur-sm rounded-xl p-4 border border-white/10">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-primary font-bold text-sm">REAL-TIME INSIGHTS</h3>
          <div className="text-white/50 text-xs">UPDATING LIVE</div>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-navy-light/50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <Zap className="w-4 h-4 text-[#1a9dc3]" />
              <span className="text-white/70 text-xs">RALLY LENGTH</span>
            </div>
            <div className="text-white font-bold">12 SHOTS</div>
            <div className="text-[#1a9dc3] text-xs">+2 FROM AVG</div>
          </div>
          
          <div className="bg-navy-light/50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-white/70 text-xs">TOP SPEED</span>
            </div>
            <div className="text-white font-bold">52 MPH</div>
            <div className="text-primary text-xs">NEW MATCH HIGH</div>
          </div>
          
          <div className="bg-navy-light/50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <Activity className="w-4 h-4 text-[#e89e25]" />
              <span className="text-white/70 text-xs">SHOT SELECTION</span>
            </div>
            <div className="text-white font-bold">DINKS: 65%</div>
            <div className="text-[#e89e25] text-xs">DRIVES: 35%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourtVisualization;
