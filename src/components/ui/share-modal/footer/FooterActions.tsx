
import React from "react";
import { toast } from "@/components/ui/use-toast";
import { AnimatePresence, motion } from "framer-motion";

interface FooterActionsProps {
  onClose: () => void;
}

const FooterActions: React.FC<FooterActionsProps> = ({ onClose }) => {
  return (
    <div className="flex justify-end mt-4">
      <button 
        onClick={onClose}
        className="px-4 py-2 bg-navy-light/30 backdrop-blur-sm hover:bg-navy-light/50 text-white/90 rounded-md transition-all duration-300 mr-3 border border-white/5 hover:border-white/10 hover:scale-105"
      >
        Cancel
      </button>
      <button 
        onClick={() => {
          // Create a success animation
          toast({
            title: "Match update saved!",
            description: "Your match update has been saved as a draft.",
            duration: 3000,
          });
          setTimeout(onClose, 500);
        }}
        className="px-4 py-2 bg-gradient-to-r from-primary/90 to-[#1a9dc3]/90 backdrop-blur-sm text-white rounded-md transition-all duration-300 border border-primary/30 hover:shadow-[0_0_15px_rgba(43,203,110,0.5)] hover:scale-105"
        style={{
          boxShadow: '0 0 10px rgba(43, 203, 110, 0.3)'
        }}
      >
        Save as Draft
      </button>
    </div>
  );
};

export default FooterActions;
