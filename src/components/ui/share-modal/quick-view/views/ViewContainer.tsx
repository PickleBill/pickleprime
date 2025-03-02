
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

  return (
    <motion.div 
      className="relative z-20 bg-navy-dark/95 backdrop-blur-md rounded-lg border border-white/10 shadow-xl overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <motion.button 
        onClick={onClose}
        className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors z-10"
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
      >
        <X className="w-5 h-5" />
      </motion.button>
      
      <div className="max-h-[80vh] overflow-y-auto">
        {children}
      </div>
    </motion.div>
  );
};

export default ViewContainer;
