
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
      {/* Central node (you) with glow effect */}
      <motion.div 
        className={cn(`w-${centralNodeSize} h-${centralNodeSize} rounded-full ${centralNodeColor} border-2 border-white/80 absolute z-20`)}
        style={{
          boxShadow: `0 0 15px rgba(45,212,191,0.5)`
        }}
        initial={{ scale: 0.8 }}
        animate={{ 
          scale: [0.8, 1, 0.8],
          boxShadow: ['0 0 5px rgba(45,212,191,0.5)', '0 0 20px rgba(45,212,191,0.8)', '0 0 5px rgba(45,212,191,0.5)']
        }}
        transition={{ duration: animationDuration, repeat: Infinity }}
      />
      
      {/* Friend nodes with connections */}
      {networkNodes.map((node, index) => (
        <React.Fragment key={index}>
          {/* Connection line with gradient */}
          <motion.div 
            className={cn(`absolute bg-gradient-to-r ${connectionColor} h-0.5 origin-left z-10 rounded-full`)}
            style={{
              top: '50%',
              left: '50%',
              width: node.distance,
              transform: `rotate(${node.angle}deg)`
            }}
            initial={{ opacity: 0.3, width: 0 }}
            animate={{ 
              opacity: [0.3, 0.7, 0.3], 
              width: node.distance,
              boxShadow: ['0 0 1px rgba(139,92,246,0.1)', '0 0 3px rgba(139,92,246,0.4)', '0 0 1px rgba(139,92,246,0.1)']
            }}
            transition={{ 
              opacity: { duration: animationDuration - 1, delay: index * (nodeAnimationDelay + 0.1), repeat: Infinity },
              boxShadow: { duration: animationDuration - 1, delay: index * (nodeAnimationDelay + 0.1), repeat: Infinity },
              width: { duration: 0.8, delay: index * 0.1 }
            }}
          />
          
          {/* Friend node with subtle glow */}
          <motion.div 
            className={cn(`w-${friendNodeSize} h-${friendNodeSize} rounded-full ${friendNodeColor} border border-white/80 absolute z-20`)}
            style={{
              left: `calc(50% + ${Math.cos(node.angle * Math.PI / 180) * node.distance - friendNodeSize/2}px)`,
              top: `calc(50% + ${Math.sin(node.angle * Math.PI / 180) * node.distance - friendNodeSize/2}px)`,
              boxShadow: `0 0 8px rgba(168,85,247,0.4)`
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0.8, 1, 0.8], 
              opacity: 1,
              boxShadow: ['0 0 3px rgba(168,85,247,0.2)', '0 0 10px rgba(168,85,247,0.6)', '0 0 3px rgba(168,85,247,0.2)']
            }}
            transition={{ 
              scale: { duration: animationDuration - 1, delay: index * nodeAnimationDelay + 0.5, repeat: Infinity },
              boxShadow: { duration: animationDuration - 1, delay: index * nodeAnimationDelay + 0.5, repeat: Infinity },
              opacity: { duration: 0.5, delay: index * nodeAnimationDelay + 0.5 }
            }}
          />
        </React.Fragment>
      ))}
      
      {/* Multiple background pulse effects for richer visual */}
      <motion.div
        className={cn(`w-20 h-20 rounded-full border ${pulseColor} absolute`)}
        initial={{ scale: 0.5, opacity: 0.7 }}
        animate={{ 
          scale: [0.5, 1.8, 0.5],
          opacity: [0.7, 0, 0.7]
        }}
        transition={{ duration: animationDuration, repeat: Infinity }}
      />
      
      <motion.div
        className={cn(`w-36 h-36 rounded-full border border-purple-400/20 absolute`)}
        initial={{ scale: 0.7, opacity: 0.5 }}
        animate={{ 
          scale: [0.7, 1.4, 0.7],
          opacity: [0.5, 0, 0.5]
        }}
        transition={{ duration: animationDuration * 1.5, repeat: Infinity, delay: animationDuration / 3 }}
      />

      {/* Render legend if showLegend is true */}
      {showLegend && (
        <div className="absolute bottom-3 left-3 flex items-center gap-3 bg-navy-dark/60 px-3 py-1.5 rounded-full backdrop-blur-sm">
          <div className="flex items-center gap-1.5">
            <div className={cn(`w-2.5 h-2.5 rounded-full ${centralNodeColor} border border-white/30`)}></div>
            <span className="text-white/90 text-xs">You</span>
          </div>
          <div className="h-3 w-px bg-white/20"></div>
          <div className="flex items-center gap-1.5">
            <div className={cn(`w-2.5 h-2.5 rounded-full ${friendNodeColor} border border-white/30`)}></div>
            <span className="text-white/90 text-xs">Friends</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default NetworkGraph;
