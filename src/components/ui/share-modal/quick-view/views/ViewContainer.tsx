
import React from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

interface ViewContainerProps {
  children: React.ReactNode;
  onClose: () => void;
}

const ViewContainer: React.FC<ViewContainerProps> = ({ children, onClose }) => {
  return (
    <motion.div 
      className="w-full max-w-[95%] md:max-w-[575px] lg:max-w-[650px] relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 bg-navy-dark/80 hover:bg-navy-dark text-white/70 hover:text-white rounded-full border border-white/10 transition-colors"
      >
        <X className="w-5 h-5" />
      </button>
      
      {children}
    </motion.div>
  );
};

export default ViewContainer;
