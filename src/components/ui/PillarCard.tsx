
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import AnimatedButton from "./AnimatedButton";

interface PillarCardProps {
  title: string;
  description: string;
  features?: string[];
  icon?: ReactNode;
  iconBgColor?: string;
  iconColor?: string;
  primaryColor?: string;
  className?: string;
  buttonText?: string;
  onClick?: () => void;
}

const PillarCard = ({
  title,
  description,
  features,
  icon,
  iconBgColor,
  iconColor,
  primaryColor = "primary",
  className,
  buttonText = "Learn More",
  onClick,
}: PillarCardProps) => {
  return (
    <div
      className={cn(
        "group bg-navy-dark rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-white/10 h-full text-white",
        onClick && "cursor-pointer",
        className
      )}
      style={{
        borderColor: onClick ? `${iconBgColor}20` : 'rgba(255, 255, 255, 0.1)',
        boxShadow: onClick ? `0 4px 20px ${iconBgColor}10` : ''
      }}
    >
      <div className="flex flex-col items-start h-full">
        {/* Icon Header */}
        <div 
          className="p-4 rounded-lg mb-4 flex items-center justify-center" 
          style={{ backgroundColor: iconBgColor }}
        >
          {icon}
        </div>
        
        {/* Title and Description */}
        <h3 
          className="text-xl font-bold text-white mb-2 transition-colors"
          style={{ color: onClick ? 'white' : iconBgColor }}
        >
          {title}
        </h3>
        <p className="text-white/70 mb-5">{description}</p>
        
        {/* Features List */}
        {features && features.length > 0 && (
          <ul className="space-y-3 mb-6 w-full">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="mt-1 text-lg" style={{ color: iconBgColor }}>•</span>
                <span className="text-white/80 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        )}
        
        {/* CTA Button */}
        <div className="mt-auto w-full">
          <AnimatedButton 
            onClick={onClick} 
            size="sm" 
            variant="outline" 
            className="w-full justify-center hover:bg-opacity-10"
            style={{
              borderColor: iconBgColor,
              color: iconBgColor
            }}
          >
            {buttonText}
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
};

export default PillarCard;
