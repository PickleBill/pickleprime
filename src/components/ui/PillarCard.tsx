
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
        `hover:border-${primaryColor}/20`,
        onClick && "cursor-pointer",
        className
      )}
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
        <h3 className={`text-xl font-bold text-white mb-2 group-hover:text-${primaryColor} transition-colors`}>
          {title}
        </h3>
        <p className="text-white/70 mb-5">{description}</p>
        
        {/* Features List */}
        {features && features.length > 0 && (
          <ul className="space-y-3 mb-6 w-full">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className={`text-${primaryColor} mt-1 text-lg`}>•</span>
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
            className={`w-full justify-center border-${primaryColor} text-${primaryColor} hover:bg-${primaryColor}/10`}
          >
            {buttonText}
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
};

export default PillarCard;
