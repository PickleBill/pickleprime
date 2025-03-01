
import React, { ReactNode } from "react";

interface PillarItemProps {
  id: number;
  title: string;
  icon: ReactNode;
  color: string;
  bgImage: string;
  description: string;
  bullets: string[];
  activeSection: number | null;
  animationComplete: boolean;
  animationDelay: number;
  onClick: () => void;
}

const PillarItem: React.FC<PillarItemProps> = ({
  id,
  title,
  icon,
  color,
  bgImage,
  description,
  bullets,
  activeSection,
  animationComplete,
  animationDelay,
  onClick,
}) => {
  const isActive = activeSection === id;

  return (
    <div 
      className={`relative bg-navy-light/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 transition-all duration-500 ${
        isActive ? 'ring-2 ring-offset-2 ring-offset-navy ring-[' + color + ']' : 'hover:bg-navy-light'
      } ${
        animationComplete ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
      }`}
      style={{ 
        transitionDelay: `${animationDelay}ms`,
      }}
      onClick={onClick}
    >
      {/* Pillar background image - shown when active */}
      {isActive && (
        <div className="absolute inset-0 opacity-20 transition-opacity duration-500">
          <img 
            src={bgImage} 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/70 to-transparent"></div>
        </div>
      )}
      
      {/* Top bar with color */}
      <div 
        className="h-1 w-full" 
        style={{ backgroundColor: color }}
      ></div>
      
      <div className="p-4 md:p-5">
        {/* Icon and Title */}
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-full" style={{ backgroundColor: `${color}20` }}>
            <div style={{ color }}>
              {icon}
            </div>
          </div>
          <h3 className="text-white font-semibold leading-tight">
            {title}
          </h3>
        </div>
        
        {/* Description */}
        <p className="text-white/70 text-sm mb-4">
          {description}
        </p>
        
        {/* Bullets - shown when active */}
        {isActive && (
          <div className="space-y-2 animate-fade-in">
            {bullets.map((bullet, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full mt-1.5" style={{ backgroundColor: color }}></div>
                <span className="text-sm text-white/80">{bullet}</span>
              </div>
            ))}
          </div>
        )}
        
        {/* Learn more link */}
        <div className="mt-4 text-right">
          <button 
            className="text-sm font-medium hover:opacity-80 transition-opacity flex items-center gap-1"
            style={{ color }}
          >
            {isActive ? 'Close' : 'Learn more'}
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}
            >
              <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PillarItem;
