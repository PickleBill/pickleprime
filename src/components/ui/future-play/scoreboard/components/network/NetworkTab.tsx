
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
      className="h-full"
    >
      <NetworkVisualization />
      <NetworkStats />
    </motion.div>
  );
};

export default NetworkTab;
