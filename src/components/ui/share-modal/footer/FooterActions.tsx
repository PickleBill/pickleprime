
import React from "react";
import { toast } from "@/components/ui/use-toast";

interface FooterActionsProps {
  onClose: () => void;
}

const FooterActions: React.FC<FooterActionsProps> = ({ onClose }) => {
  return (
    <div className="flex justify-end mt-4">
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

export default FooterActions;
