
import React from "react";
import { motion } from "framer-motion";
import { networkNodes } from "./data";

const NetworkGraph: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      {/* Central node (you) */}
      <motion.div 
        className="w-6 h-6 rounded-full bg-teal-400 border-2 border-white absolute z-20"
        initial={{ scale: 0.8 }}
        animate={{ 
          scale: [0.8, 1, 0.8],
          boxShadow: ['0 0 0px rgba(45,212,191,0.5)', '0 0 15px rgba(45,212,191,0.8)', '0 0 0px rgba(45,212,191,0.5)']
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      {/* Friend nodes */}
      {networkNodes.map((node, index) => (
        <React.Fragment key={index}>
          {/* Connection line */}
          <motion.div 
            className="absolute bg-gradient-to-r from-teal-400/70 to-purple-400/70 h-px origin-left z-10"
            style={{
              top: '50%',
              left: '50%',
              width: node.distance,
              transform: `rotate(${node.angle}deg)`
            }}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, delay: index * 0.3, repeat: Infinity }}
          />
          
          {/* Friend node */}
          <motion.div 
            className="w-4 h-4 rounded-full bg-purple-400 border border-white absolute z-20"
            style={{
              left: `calc(50% + ${Math.cos(node.angle * Math.PI / 180) * node.distance - 8}px)`,
              top: `calc(50% + ${Math.sin(node.angle * Math.PI / 180) * node.distance - 8}px)`
            }}
            initial={{ scale: 0.8 }}
            animate={{ scale: [0.8, 1, 0.8] }}
            transition={{ duration: 2, delay: index * 0.2, repeat: Infinity }}
          />
        </React.Fragment>
      ))}
      
      {/* Background pulse effect */}
      <motion.div
        className="w-20 h-20 rounded-full border border-teal-400/30 absolute"
        initial={{ scale: 0.5, opacity: 0.7 }}
        animate={{ 
          scale: [0.5, 1.8, 0.5],
          opacity: [0.7, 0, 0.7]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </div>
  );
};

export default NetworkGraph;
