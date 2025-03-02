
import React, { useEffect } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

interface ViewContainerProps {
  onClose: () => void;
  children: React.ReactNode;
}

const ViewContainer: React.FC<ViewContainerProps> = ({ onClose, children }) => {
  // Add effect to handle Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    
    // Clean up the event listener
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <motion.div 
      className="relative z-20 bg-navy-dark/95 backdrop-blur-md rounded-lg border border-white/10 shadow-xl overflow-hidden w-full max-w-[92%] md:max-w-[85%] mx-auto"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      onClick={handleBackdropClick}
    >
      <motion.button 
        onClick={onClose}
        className="absolute top-3 right-3 p-1.5 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors z-10"
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
      >
        <X className="w-4 h-4" />
      </motion.button>
      
      <div className="max-h-[75vh] overflow-y-auto scrollbar-hide">
        {children}
      </div>
    </motion.div>
  );
};

export default ViewContainer;
