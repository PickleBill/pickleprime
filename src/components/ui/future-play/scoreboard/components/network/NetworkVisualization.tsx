
import React from "react";
import { motion } from "framer-motion";

const NetworkVisualization: React.FC = () => {
  return (
    <div className="bg-navy/70 border border-white/10 rounded-lg p-6 h-[300px] relative">
      {/* You node (center) */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-14 h-14 rounded-full bg-[#0EA5E9] flex items-center justify-center text-white text-xl font-bold glow-cyan">
          Y
        </div>
        {/* Connection lines */}
        <div className="absolute w-[250px] h-[250px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-40">
          {/* Lines to each friend */}
          <div className="absolute w-px h-[80px] bg-white/30 left-1/2 top-[-40px] transform -translate-x-1/2 -rotate-45"></div>
          <div className="absolute w-px h-[80px] bg-white/30 left-1/2 top-[-40px] transform -translate-x-1/2 rotate-45"></div>
          <div className="absolute w-px h-[90px] bg-white/30 right-[-10px] top-1/2 transform -translate-y-1/2"></div>
          <div className="absolute w-px h-[90px] bg-white/30 left-[-10px] top-1/2 transform -translate-y-1/2"></div>
          <div className="absolute w-px h-[80px] bg-white/30 left-1/2 bottom-[-40px] transform -translate-x-1/2 rotate-45"></div>
          <div className="absolute w-px h-[80px] bg-white/30 left-1/2 bottom-[-40px] transform -translate-x-1/2 -rotate-45"></div>
        </div>
      </div>
      
      {/* Friend nodes */}
      <div className="absolute top-[30px] left-1/2 transform -translate-x-1/2">
        <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">S</div>
      </div>
      <div className="absolute top-[80px] right-[80px]">
        <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">O</div>
      </div>
      <div className="absolute right-[40px] top-1/2 transform -translate-y-1/2">
        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">E</div>
      </div>
      <div className="absolute left-[40px] top-1/2 transform -translate-y-1/2">
        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">J</div>
      </div>
      <div className="absolute bottom-[80px] right-[80px]">
        <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold">M</div>
      </div>
      <div className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2">
        <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-white font-bold">P</div>
      </div>
      
      {/* Legend */}
      <div className="absolute bottom-4 left-4 flex items-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#0EA5E9]"></div>
          <span className="text-white">You</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-purple-500"></div>
          <span className="text-white">Friends</span>
        </div>
      </div>
    </div>
  );
};

export default NetworkVisualization;
