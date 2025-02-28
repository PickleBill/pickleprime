
import React from "react";
import { cn } from "@/lib/utils";
import * as LucideIcons from "lucide-react";

interface PillarCardProps {
  title: string;
  description: string;
  features?: string[];
  icon: string;
  primaryColor?: string;
  className?: string;
  onClick?: () => void;
}

const PillarCard = ({
  title,
  description,
  features,
  icon,
  primaryColor = "primary",
  className,
  onClick,
}: PillarCardProps) => {
  // Determine if the icon is a URL (uploaded image) or a Lucide icon name
  const isIconUrl = icon.startsWith('/') || icon.startsWith('http');
  
  // Handle Lucide icons
  const LucideIcon = !isIconUrl ? (LucideIcons as any)[icon] || LucideIcons.Circle : null;

  return (
    <div
      className={cn(
        "group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full",
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <div className="flex flex-col items-start h-full">
        <div className={`bg-${primaryColor}/10 rounded-lg p-3 mb-4 text-${primaryColor}`}>
          {isIconUrl ? (
            <img src={icon} alt={title} className="w-6 h-6" />
          ) : (
            LucideIcon && <LucideIcon className="w-6 h-6" />
          )}
        </div>
        <h3 className={`text-xl font-bold text-navy mb-2 group-hover:text-${primaryColor} transition-colors`}>
          {title}
        </h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {features && features.length > 0 && (
          <ul className="space-y-2 mt-auto">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className={`text-${primaryColor} mt-1`}>•</span>
                <span className="text-gray-700 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PillarCard;
