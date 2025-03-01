
import React from "react";

interface PlayerModalFooterProps {
  onClose: () => void;
}

const PlayerModalFooter = ({ onClose }: PlayerModalFooterProps) => {
  return (
    <div className="border-t border-[#0FA0CE]/20 p-4 bg-[#0FA0CE]/5">
      <div className="flex justify-end">
        <button 
          onClick={onClose}
          className="bg-[#0FA0CE] hover:bg-[#0FA0CE]/90 text-white px-6 py-3 rounded-md transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-medium"
        >
          Close Preview
        </button>
      </div>
    </div>
  );
};

export default PlayerModalFooter;
