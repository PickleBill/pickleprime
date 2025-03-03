
import React from "react";
import { motion } from "framer-motion";

const HeroHeading = () => {
  return (
    <>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
        The Next Generation of{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#2BCBD8] to-secondary">
          Pickleball
        </span>{" "}
        Technology
      </h1>
      <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
        Transform your game with our advanced AI and smart court technology.
        Enhance your play, track performance, and join a growing global
        community.
      </p>
      <motion.div
        className="flex justify-center mt-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <span className="inline-flex items-center rounded-full border border-white/30 px-2.5 py-0.5 text-xs text-white/70">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse mr-1"></span>
          Court Visionary AI Beta is Now Available
        </span>
      </motion.div>
    </>
  );
};

export default HeroHeading;
