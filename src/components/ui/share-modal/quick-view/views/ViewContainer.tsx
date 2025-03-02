
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div 
        className="w-full max-w-[83%] md:max-w-[520px] lg:max-w-[580px] relative bg-gradient-to-br from-[#111a29] to-[#0c1624] border border-white/10 rounded-lg overflow-hidden shadow-2xl"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 bg-navy-dark/80 hover:bg-navy-dark text-white/70 hover:text-white rounded-full border border-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        {children}
      </motion.div>
    </motion.div>
  );
};

export default ViewContainer;
