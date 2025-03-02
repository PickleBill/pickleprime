
import React from "react";
import { toast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

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
    <motion.button
      onClick={onClick}
      className={`w-[90%] h-full mx-auto flex flex-col items-center justify-center rounded-lg transition-all duration-300 backdrop-blur-sm border relative overflow-hidden
        ${active 
          ? 'bg-gradient-to-br from-[rgba(255,255,255,0.15)] to-[rgba(255,255,255,0.05)] border-[rgba(255,255,255,0.2)] text-white' 
          : 'bg-navy-light/20 border-white/10 text-white/70 hover:bg-navy-light/30'
        }`}
      style={{ 
        boxShadow: active 
          ? `0 10px 25px ${color}40, 0 2px 5px rgba(0,0,0,0.1), inset 0 0 10px ${color}20` 
          : 'none',
        transform: active ? 'translateY(-2px)' : 'translateY(0)'
      }}
      whileHover={{ 
        scale: 1.05,
        y: -5,
        boxShadow: `0 15px 30px ${color}50, 0 5px 15px rgba(0,0,0,0.2), inset 0 0 15px ${color}30`
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Glassmorphism effect */}
      <div className="absolute inset-0 backdrop-blur-md bg-white/5" />
      
      {/* Animated glowing border */}
      {active && (
        <motion.div 
          className="absolute inset-0 rounded-lg"
          style={{ 
            border: `1px solid ${color}80`,
            boxShadow: `inset 0 0 15px ${color}40`
          }}
          animate={{ 
            boxShadow: [
              `inset 0 0 5px ${color}20`, 
              `inset 0 0 20px ${color}40`, 
              `inset 0 0 5px ${color}20`
            ] 
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}

      {/* Background shimmer effect */}
      {active && (
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: '200%' }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear", repeatDelay: 0.5 }}
        />
      )}
      
      <div 
        className="p-3 rounded-full mb-2 transition-all duration-300 relative z-10"
        style={{ 
          background: `linear-gradient(135deg, ${color}40, ${color}10)`,
          boxShadow: active ? `0 0 15px ${color}50` : 'none'
        }}
      >
        {/* 3D floating effect for the icon */}
        <motion.div
          animate={active ? {
            y: [0, -3, 0],
            transition: { repeat: Infinity, duration: 2, ease: "easeInOut" }
          } : {}}
          style={{ color }}
        >
          {icon}
        </motion.div>
        
        {/* Radial glow behind icon when active */}
        {active && (
          <div className="absolute inset-0 rounded-full" 
            style={{
              background: `radial-gradient(circle, ${color}70 0%, transparent 70%)`,
              filter: 'blur(6px)',
              zIndex: -1
            }}
          />
        )}
      </div>
      
      <motion.span 
        className="text-sm font-medium transition-all duration-300 z-10 drop-shadow-lg"
        animate={active ? { 
          textShadow: [`0 0 5px ${color}90`, `0 0 10px ${color}90`, `0 0 5px ${color}90`]
        } : {}}
        transition={{ duration: 2, repeat: active ? Infinity : 0 }}
      >
        {label}
      </motion.span>
      
      {/* Highlight text - NEW or EXPLORE to increase visibility */}
      {active && (
        <motion.span 
          className="absolute top-1 right-1 bg-gradient-to-r from-[#ffffff50] to-[#ffffff20] text-[9px] font-bold px-1.5 py-0.5 rounded-full text-white z-20"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          EXPLORE
        </motion.span>
      )}
      
      {/* Card-style bottom edge for 3D effect */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1 opacity-60 z-10"
        style={{ 
          background: color,
          transform: 'translateY(0.5px)'
        }}
      />
    </motion.button>
  );
};

export default CarouselItem;
