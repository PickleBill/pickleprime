
import React from "react";
import { cn } from "@/lib/utils";
import * as LucideIcons from "lucide-react";

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
  // Correctly dynamically get the icon component from Lucide
  const LucideIcon = (LucideIcons as Record<string, React.ComponentType<{ className?: string }>>)[icon] || LucideIcons.Circle;

  return (
    <div
      className={cn(
        "group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full",
        className
      )}
    >
      <div className="flex flex-col items-start h-full">
        <div className="bg-primary/10 rounded-lg p-3 mb-4 text-primary">
          <LucideIcon className="w-6 h-6" />
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
