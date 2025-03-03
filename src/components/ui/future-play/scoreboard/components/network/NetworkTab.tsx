
import React from "react";
import { motion } from "framer-motion";
import NetworkVisualization from "./NetworkVisualization";
import NetworkStats from "./NetworkStats";

const NetworkTab: React.FC = () => {
  return (
    <motion.div
      key="network"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="h-full flex flex-col space-y-4"
    >
      <div className="flex-1 min-h-0 bg-navy/40 rounded-lg p-3 border border-white/5 shadow-inner">
        <NetworkVisualization />
      </div>
      <NetworkStats />
    </motion.div>
  );
};

export default NetworkTab;
