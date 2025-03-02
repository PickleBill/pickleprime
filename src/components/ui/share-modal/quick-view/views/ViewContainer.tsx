
import React from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

interface ViewContainerProps {
  onClose: () => void;
  children: React.ReactNode;
}

const ViewContainer: React.FC<ViewContainerProps> = ({ onClose, children }) => {
  return (
    <div className="relative">
      <motion.button 
        onClick={onClose}
        className="absolute top-6 right-6 p-1 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors z-10"
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
      >
        <X className="w-5 h-5" />
      </motion.button>
      
      {children}
    </div>
  );
};

export default ViewContainer;
