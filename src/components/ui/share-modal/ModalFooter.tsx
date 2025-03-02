
import React, { useState, useEffect } from "react";
import Carousel from "./carousel/Carousel";
import QuickViewContent from "./quick-view/QuickViewContent";
import FooterActions from "./footer/FooterActions";
import { getCarouselItems } from "./carousel/carouselData";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

interface ModalFooterProps {
  onClose: () => void;
}

const ModalFooter: React.FC<ModalFooterProps> = ({ onClose }) => {
  const [quickViewContent, setQuickViewContent] = useState<string | null>(null);
  const [hasSeenIntro, setHasSeenIntro] = useState(false);
  const visibleItems = 3; // Number of items visible at once

  const handleQuickView = (itemId: string) => {
    setQuickViewContent(itemId);
    setHasSeenIntro(true);
  };

  const closeQuickView = () => {
    setQuickViewContent(null);
  };

  useEffect(() => {
    // Show a brief intro animation to highlight the carousel
    const timer = setTimeout(() => {
      setHasSeenIntro(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // Get carousel items with the handleQuickView function
  const carouselItems = getCarouselItems(handleQuickView);

  return (
    <div className="border-t border-white/10 relative">
      {/* Intro highlight for new users */}
      <AnimatePresence>
        {!hasSeenIntro && (
          <motion.div
            className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#1a9dc3] to-[#4CAF50] px-4 py-2 rounded-full text-white text-xs font-medium z-50 flex items-center shadow-lg"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <span>Click these feature cards to explore!</span>
            <ChevronDown className="ml-1 w-3 h-3 animate-bounce" />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Quick View Area */}
      <QuickViewContent 
        contentType={quickViewContent} 
        onClose={closeQuickView} 
      />
      
      {/* Feature highlight when no content is selected */}
      {!quickViewContent && (
        <motion.div 
          className="py-1 px-4 bg-gradient-to-r from-[rgba(26,157,195,0.1)] to-[rgba(76,175,80,0.1)] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between text-white/80 text-xs">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Tap a card below to explore features
            </motion.span>
            <motion.div 
              className="flex items-center gap-1 text-[#1a9dc3] animate-pulse"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span>Interactive dashboards</span>
              <ArrowRight className="w-3 h-3" />
            </motion.div>
          </div>
        </motion.div>
      )}
      
      {/* Carousel Footer */}
      <div className="p-3 flex flex-col">
        <Carousel 
          items={carouselItems}
          visibleItems={visibleItems}
        />
        
        {/* Footer Actions */}
        <FooterActions onClose={onClose} />
      </div>
    </div>
  );
};

export default ModalFooter;
