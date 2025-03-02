
import React from "react";
import { toast } from "@/components/ui/use-toast";
import { AnimatePresence, motion } from "framer-motion";

interface FooterActionsProps {
  onClose: () => void;
}

const FooterActions: React.FC<FooterActionsProps> = ({ onClose }) => {
  return (
    <div className="flex justify-end mt-4">
      <motion.button 
        onClick={onClose}
        className="relative px-6 py-2.5 bg-navy-light/30 backdrop-blur-xl hover:bg-navy-light/50 text-white/90 rounded-md transition-all duration-300 mr-4 border border-white/5 hover:border-white/20 overflow-hidden"
        whileHover={{ 
          scale: 1.05, 
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
          textShadow: '0 0 5px rgba(255,255,255,0.5)'
        }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        style={{ 
          transformStyle: 'preserve-3d',
          perspective: '1000px'
        }}
      >
        {/* Button shine effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: '-100%', opacity: 0 }}
          whileHover={{ x: '200%', opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        
        {/* Button contents with 3D depth perception */}
        <span className="relative inline-block transform transition-transform">
          Cancel
        </span>
        
        {/* Bottom edge for 3D effect */}
        <div className="absolute bottom-0 left-1 right-1 h-1 bg-navy-dark/40 rounded-b-full" />
      </motion.button>
      
      <motion.button 
        onClick={() => {
          // Create a success animation
          toast({
            title: "Match update saved!",
            description: "Your match update has been saved as a draft.",
            duration: 3000,
          });
          setTimeout(onClose, 500);
        }}
        className="relative px-6 py-2.5 bg-gradient-to-r from-primary/90 to-[#1a9dc3]/90 backdrop-blur-sm text-white rounded-md transition-all duration-300 border border-primary/30 overflow-hidden"
        whileHover={{ 
          scale: 1.05, 
          boxShadow: '0 0 20px rgba(43, 203, 110, 0.5), 0 0 40px rgba(43, 203, 110, 0.3)',
          textShadow: '0 0 5px rgba(255,255,255,0.7)'
        }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        style={{ 
          boxShadow: '0 0 10px rgba(43, 203, 110, 0.3)',
          transformStyle: 'preserve-3d',
          perspective: '1000px'
        }}
      >
        {/* Button glow animation */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{ 
            x: ['100%', '-100%'],
            opacity: [0, 1, 0],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            repeatDelay: 3,
            ease: "easeInOut"
          }}
        />
        
        {/* Button contents with 3D depth perception */}
        <motion.span 
          className="relative inline-block"
          animate={{ 
            textShadow: ['0 0 0px rgba(255,255,255,0)', '0 0 10px rgba(255,255,255,0.7)', '0 0 0px rgba(255,255,255,0)']
          }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        >
          Save as Draft
        </motion.span>
        
        {/* Bottom edge for 3D effect */}
        <div className="absolute bottom-0 left-1 right-1 h-1 bg-primary/50 rounded-b-full" />
      </motion.button>
    </div>
  );
};

export default FooterActions;
