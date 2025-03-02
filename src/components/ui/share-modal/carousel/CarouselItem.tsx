
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
      className={`w-[90%] h-full mx-auto flex flex-col items-center justify-center rounded-lg transition-all duration-300 backdrop-blur-sm border ${
        active 
          ? 'bg-gradient-to-br from-[#1a9dc3]/30 to-[#1a9dc3]/10 border-[#1a9dc3]/40 text-white shadow-[0_0_15px_rgba(26,157,195,0.4)]' 
          : 'bg-navy-light/20 border-white/10 text-white/70 hover:bg-navy-light/30 hover:scale-105'
      }`}
      style={{ 
        boxShadow: active ? `0 0 20px rgba(26, 157, 195, 0.3), inset 0 0 10px rgba(26, 157, 195, 0.2)` : 'none',
      }}
    >
      <div 
        className={`p-2 rounded-full mb-2 transition-all duration-300 ${
          active 
            ? 'bg-[#1a9dc3]/30 scale-110' 
            : 'bg-white/10 group-hover:bg-white/20'
        }`}
        style={{ 
          color,
          filter: active ? `drop-shadow(0 0 8px ${color})` : 'none'
        }}
      >
        {icon}
      </div>
      <span className={`text-sm font-medium transition-all duration-300 ${active ? 'text-white scale-105' : ''}`}>{label}</span>
      {!active && (
        <span className="text-[10px] mt-1 text-white/50">Coming Soon</span>
      )}
    </button>
  );
};

export default CarouselItem;
