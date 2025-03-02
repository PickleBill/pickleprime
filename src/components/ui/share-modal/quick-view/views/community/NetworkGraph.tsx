
import React from "react";
import { motion } from "framer-motion";
import { networkNodes } from "./data";
import { NetworkGraphProps } from "./types";
import { cn } from "@/lib/utils";

const NetworkGraph: React.FC<NetworkGraphProps> = ({ 
  centralNodeColor = "bg-teal-400",
  friendNodeColor = "bg-purple-400",
  centralNodeSize = 6,
  friendNodeSize = 4,
  pulseColor = "border-teal-400/30",
  connectionColor = "from-teal-400/70 to-purple-400/70",
  animationDuration = 3,
  nodeAnimationDelay = 0.2,
  showLegend = false,
}) => {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      {/* Central node (you) */}
      <motion.div 
        className={cn(`w-${centralNodeSize} h-${centralNodeSize} rounded-full ${centralNodeColor} border-2 border-white absolute z-20`)}
        initial={{ scale: 0.8 }}
        animate={{ 
          scale: [0.8, 1, 0.8],
          boxShadow: ['0 0 0px rgba(45,212,191,0.5)', '0 0 15px rgba(45,212,191,0.8)', '0 0 0px rgba(45,212,191,0.5)']
        }}
        transition={{ duration: animationDuration, repeat: Infinity }}
      />
      
      {/* Friend nodes */}
      {networkNodes.map((node, index) => (
        <React.Fragment key={index}>
          {/* Connection line */}
          <motion.div 
            className={cn(`absolute bg-gradient-to-r ${connectionColor} h-px origin-left z-10`)}
            style={{
              top: '50%',
              left: '50%',
              width: node.distance,
              transform: `rotate(${node.angle}deg)`
            }}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: animationDuration - 1, delay: index * (nodeAnimationDelay + 0.1), repeat: Infinity }}
          />
          
          {/* Friend node */}
          <motion.div 
            className={cn(`w-${friendNodeSize} h-${friendNodeSize} rounded-full ${friendNodeColor} border border-white absolute z-20`)}
            style={{
              left: `calc(50% + ${Math.cos(node.angle * Math.PI / 180) * node.distance - friendNodeSize/2}px)`,
              top: `calc(50% + ${Math.sin(node.angle * Math.PI / 180) * node.distance - friendNodeSize/2}px)`
            }}
            initial={{ scale: 0.8 }}
            animate={{ scale: [0.8, 1, 0.8] }}
            transition={{ duration: animationDuration - 1, delay: index * nodeAnimationDelay, repeat: Infinity }}
          />
        </React.Fragment>
      ))}
      
      {/* Background pulse effect */}
      <motion.div
        className={cn(`w-20 h-20 rounded-full border ${pulseColor} absolute`)}
        initial={{ scale: 0.5, opacity: 0.7 }}
        animate={{ 
          scale: [0.5, 1.8, 0.5],
          opacity: [0.7, 0, 0.7]
        }}
        transition={{ duration: animationDuration, repeat: Infinity }}
      />

      {/* Only render legend if showLegend is true */}
      {showLegend && (
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <div className={cn(`w-2 h-2 rounded-full ${centralNodeColor}`)}></div>
          <span className="text-white/70 text-xs">You</span>
          <div className={cn(`w-2 h-2 rounded-full ${friendNodeColor} ml-2`)}></div>
          <span className="text-white/70 text-xs">Friends</span>
        </div>
      )}
    </div>
  );
};

export default NetworkGraph;
