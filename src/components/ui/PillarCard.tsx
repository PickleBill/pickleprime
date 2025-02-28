
import React from "react";
import { cn } from "@/lib/utils";
import * as Icons from "lucide-react";

interface PillarCardProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
}

const PillarCard = ({
  title,
  description,
  icon,
  className,
}: PillarCardProps) => {
  // Dynamically get the icon component
  const IconComponent = Icons[icon as keyof typeof Icons] || Icons.Circle;

  return (
    <div
      className={cn(
        "group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full",
        className
      )}
    >
      <div className="flex flex-col items-start h-full">
        <div className="bg-primary/10 rounded-lg p-3 mb-4 text-primary">
          <IconComponent className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default PillarCard;
