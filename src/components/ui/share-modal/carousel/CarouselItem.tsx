
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
          ? 'bg-gradient-to-br from-[#1a9dc3]/30 to-[#1a9dc3]/10 border-[#1a9dc3]/40 text-white' 
          : 'bg-navy-light/20 border-white/10 text-white/70 hover:bg-navy-light/30'
        }`}
      style={{ 
        boxShadow: active 
          ? `0 0 20px rgba(26, 157, 195, 0.3), inset 0 0 10px rgba(26, 157, 195, 0.2)` 
          : 'none',
        transform: active ? 'translateY(-2px)' : 'translateY(0)'
      }}
      whileHover={{ 
        scale: active ? 1.05 : 1.08,
        y: -2,
        boxShadow: active 
          ? '0 10px 25px rgba(26, 157, 195, 0.4), inset 0 0 15px rgba(26, 157, 195, 0.3)' 
          : '0 10px 15px rgba(0, 0, 0, 0.1), inset 0 0 5px rgba(255, 255, 255, 0.1)' 
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
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
        className={`p-2 rounded-full mb-2 transition-all duration-300 relative
          ${active 
            ? 'bg-[#1a9dc3]/30 scale-110' 
            : 'bg-white/10 group-hover:bg-white/20'
          }`}
        style={{ 
          color,
          filter: active ? `drop-shadow(0 0 8px ${color})` : 'none'
        }}
      >
        {/* 3D floating effect for the icon */}
        <motion.div
          animate={active ? {
            y: [0, -3, 0],
            transition: { repeat: Infinity, duration: 2, ease: "easeInOut" }
          } : {}}
        >
          {icon}
        </motion.div>
        
        {/* Radial glow behind icon when active */}
        {active && (
          <div className="absolute inset-0 rounded-full" 
            style={{
              background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`,
              filter: 'blur(6px)',
              zIndex: -1
            }}
          />
        )}
      </div>
      
      <motion.span 
        className={`text-sm font-medium transition-all duration-300 
          ${active ? 'text-white scale-105' : ''}`}
        animate={active ? { 
          textShadow: ['0 0 4px rgba(255,255,255,0.3)', '0 0 8px rgba(255,255,255,0.5)', '0 0 4px rgba(255,255,255,0.3)']
        } : {}}
        transition={{ duration: 2, repeat: active ? Infinity : 0 }}
      >
        {label}
      </motion.span>
      
      {!active && (
        <motion.span 
          className="text-[10px] mt-1 text-white/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Coming Soon
        </motion.span>
      )}
      
      {/* Card-style bottom edge for 3D effect */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1 opacity-30"
        style={{ 
          background: active ? color : 'rgba(255,255,255,0.1)',
          transform: 'translateY(0.5px)'
        }}
      />
    </motion.button>
  );
};

export default CarouselItem;
