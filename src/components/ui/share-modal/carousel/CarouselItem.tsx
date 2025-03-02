
import React from "react";
import { toast } from "@/components/ui/use-toast";

export interface CarouselItemProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  active: boolean;
  color: string;
  onClick: () => void;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
  id,
  label,
  icon,
  active,
  color,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-[90%] h-full mx-auto flex flex-col items-center justify-center rounded-lg transition-all border ${
        active 
          ? 'bg-gradient-to-br from-[#1a9dc3]/20 to-[#1a9dc3]/5 border-[#1a9dc3]/30 text-white' 
          : 'bg-navy-light/30 border-white/5 text-white/70 hover:bg-navy-light/50'
      }`}
      style={{ 
        boxShadow: active ? `0 0 15px rgba(26, 157, 195, 0.2)` : 'none'
      }}
    >
      <div 
        className={`p-2 rounded-full mb-2 ${
          active ? 'bg-[#1a9dc3]/20' : 'bg-white/5'
        }`}
        style={{ color }}
      >
        {icon}
      </div>
      <span className="text-sm font-medium">{label}</span>
      {!active && (
        <span className="text-[10px] mt-1 text-white/50">Coming Soon</span>
      )}
    </button>
  );
};

export default CarouselItem;
