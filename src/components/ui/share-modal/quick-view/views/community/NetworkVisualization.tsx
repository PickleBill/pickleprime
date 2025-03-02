
import React from "react";
import NetworkGraph from "./NetworkGraph";

const NetworkVisualization: React.FC = () => {
  return (
    <div className="relative h-[180px] mb-6 bg-navy-dark/50 rounded-lg overflow-hidden border border-purple-500/30">
      <NetworkGraph 
        centralNodeColor="bg-teal-400"
        friendNodeColor="bg-purple-400"
        centralNodeSize={6}
        friendNodeSize={4}
        pulseColor="border-teal-400/30"
        connectionColor="from-teal-400/70 to-purple-400/70"
        animationDuration={3}
        nodeAnimationDelay={0.2}
        showLegend={false}
      />
      <div className="absolute top-3 right-3 bg-navy-dark/80 text-white text-xs py-1 px-2 rounded-full border border-white/20">
        Your Network
      </div>
      <div className="absolute bottom-3 left-3 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-teal-400"></div>
        <span className="text-white/70 text-xs">You</span>
        <div className="w-2 h-2 rounded-full bg-purple-400 ml-2"></div>
        <span className="text-white/70 text-xs">Friends</span>
      </div>
    </div>
  );
};

export default NetworkVisualization;
