
import React from "react";
import { motion } from "framer-motion";
import WinRateCard from "./metrics/WinRateCard";
import ShotAccuracyCard from "./metrics/ShotAccuracyCard";

const MetricsGrid: React.FC = () => {
  return (
    <>
      <WinRateCard />
      <ShotAccuracyCard />
    </>
  );
};

export default MetricsGrid;
