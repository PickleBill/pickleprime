
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
          className="bg-[#0FA0CE] hover:bg-[#0FA0CE]/80 text-white px-5 py-2 rounded-md transition-colors"
        >
          Close Preview
        </button>
      </div>
    </div>
  );
};

export default PlayerModalFooter;
