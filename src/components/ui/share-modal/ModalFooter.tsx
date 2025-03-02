
import React from "react";
import { toast } from "@/components/ui/use-toast";

interface ModalFooterProps {
  onClose: () => void;
}

const ModalFooter: React.FC<ModalFooterProps> = ({ onClose }) => {
  return (
    <div className="p-4 border-t border-white/10 flex justify-end">
      <button 
        onClick={onClose}
        className="px-4 py-2 bg-navy-light/50 hover:bg-navy-light/70 text-white rounded-md transition-colors mr-2"
      >
        Cancel
      </button>
      <button 
        onClick={() => {
          toast({
            title: "Match update saved!",
            description: "Your match update has been saved as a draft.",
            duration: 3000,
          });
          setTimeout(onClose, 500);
        }}
        className="px-4 py-2 bg-primary/80 hover:bg-primary text-white rounded-md transition-colors"
      >
        Save as Draft
      </button>
    </div>
  );
};

export default ModalFooter;
