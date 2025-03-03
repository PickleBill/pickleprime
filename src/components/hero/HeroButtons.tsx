
import React from "react";
import { motion } from "framer-motion";
import AnimatedButton from "../ui/AnimatedButton";

const HeroButtons = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="aspect-square relative group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-xl transition-all duration-300 group-hover:from-blue-500/30 group-hover:to-indigo-600/30 group-hover:scale-[1.02]"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-500 mb-2 text-center">
            Ready Player One?
          </h3>
          <p className="text-white/70 text-sm md:text-base text-center mb-4">
            Launch our digital scoreboard and experience pickleball like never before
          </p>
          <AnimatedButton
            variant="glass"
            aria-label="Launch Digital Scoreboard"
            className="mt-auto"
          >
            Launch Scoreboard
          </AnimatedButton>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="aspect-square relative group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-teal-600/20 rounded-xl transition-all duration-300 group-hover:from-green-500/30 group-hover:to-teal-600/30 group-hover:scale-[1.02]"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
          <h3 className="text-2xl md:text-3xl font-bold text-green-400 mb-2 text-center">
            QuantumCourt Peek
          </h3>
          <p className="text-white/70 text-sm md:text-base text-center mb-4">
            See our smart court technology in action with real-time tracking and analytics
          </p>
          <AnimatedButton
            variant="glass"
            className="mt-auto"
          >
            View Demo
          </AnimatedButton>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="col-span-2 aspect-[2/1] relative group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-xl transition-all duration-300 group-hover:from-purple-500/30 group-hover:to-pink-600/30 group-hover:scale-[1.02]"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
          <h3 className="text-2xl md:text-3xl font-bold text-purple-400 mb-2 text-center">
            See the Future of Play
          </h3>
          <p className="text-white/70 text-sm md:text-base text-center mb-4">
            Experience the full ecosystem of Court Visionary technology
          </p>
          <AnimatedButton
            variant="glass"
            className="mt-auto w-40"
          >
            Explore
          </AnimatedButton>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroButtons;
