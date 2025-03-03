
import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedButton from "../ui/AnimatedButton";

const HeroProPanel = () => {
  const [showShareModal, setShowShareModal] = useState(false);

  // Function to show analytics view - directly open the stats view
  const handleAnalyticsClick = () => {
    setShowShareModal(true);
    
    // Set timeout to ensure the modal is rendered before accessing its content
    setTimeout(() => {
      // Find and open the Stats view
      const statsButtons = document.querySelectorAll('button');
      const statsButton = Array.from(statsButtons).find(button => 
        button.textContent?.includes('Stats')
      );
      
      if (statsButton) {
        statsButton.click();
      }
    }, 300);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="h-full relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-xl transition-all duration-300 group-hover:from-amber-500/30 group-hover:to-orange-600/30 group-hover:scale-[1.02]"></div>
      <div className="absolute inset-0 flex flex-col h-full items-center p-6">
        <div className="flex items-center justify-center space-x-2 mb-3">
          <div className="h-5 w-5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
          <h3 className="text-2xl md:text-3xl font-bold text-amber-400">For Pros</h3>
        </div>
        
        <p className="text-white/70 text-sm md:text-base text-center mb-6">
          Advanced analytics, coaching insights, and personalized training programs designed for competitive players
        </p>
        
        <ul className="text-white/80 text-sm space-y-2 mb-8 text-left w-full">
          <li className="flex items-start">
            <span className="text-amber-400 mr-2">✓</span>
            <span>Shot-by-shot performance analytics</span>
          </li>
          <li className="flex items-start">
            <span className="text-amber-400 mr-2">✓</span>
            <span>AI-powered coaching recommendations</span>
          </li>
          <li className="flex items-start">
            <span className="text-amber-400 mr-2">✓</span>
            <span>Opponent strategy breakdown</span>
          </li>
        </ul>
        
        <AnimatedButton
          variant="glass"
          className="mt-auto"
          onClick={handleAnalyticsClick}
        >
          Your AI Coach
        </AnimatedButton>
      </div>
    </motion.div>
  );
};

export default HeroProPanel;
