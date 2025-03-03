
import React from "react";
import { motion } from "framer-motion";
import AnimatedButton from "../ui/AnimatedButton";
import { useNavigate } from "react-router-dom";

const HeroButtons = () => {
  const navigate = useNavigate();
  
  const handleLaunchScoreboard = () => {
    navigate('/scoreboard');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="aspect-square relative group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 rounded-2xl backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:from-blue-500/20 group-hover:to-indigo-600/20 group-hover:scale-[1.02] shadow-lg"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-3 text-center">
            Ready Player One?
          </h3>
          <p className="text-white/80 text-sm md:text-base text-center mb-6">
            Launch our digital scoreboard and experience pickleball like never before
          </p>
          <AnimatedButton
            variant="glass"
            aria-label="Launch Digital Scoreboard"
            className="mt-auto px-8"
            onClick={handleLaunchScoreboard}
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
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-600/10 rounded-2xl backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:from-green-500/20 group-hover:to-teal-600/20 group-hover:scale-[1.02] shadow-lg"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
          <h3 className="text-2xl md:text-3xl font-bold text-green-400 mb-3 text-center">
            QuantumCourt Peek
          </h3>
          <p className="text-white/80 text-sm md:text-base text-center mb-6">
            See our smart court technology in action with real-time tracking and analytics
          </p>
          <AnimatedButton
            variant="glass"
            className="mt-auto px-8"
            onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}
          >
            View Demo
          </AnimatedButton>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="md:col-span-2 aspect-[2/1] relative group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-2xl backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:from-purple-500/20 group-hover:to-pink-600/20 group-hover:scale-[1.02] shadow-lg"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
          <h3 className="text-2xl md:text-3xl font-bold text-purple-400 mb-3 text-center">
            See the Future of Play
          </h3>
          <p className="text-white/80 text-sm md:text-base text-center mb-6">
            Experience the full ecosystem of Court Visionary technology
          </p>
          <AnimatedButton
            variant="glass"
            className="mt-auto px-10"
            onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore
          </AnimatedButton>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroButtons;
