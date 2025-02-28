
import React from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  description: string;
  icon?: string;
  color?: string;
  className?: string;
}

const StatCard = ({ value, label, description, icon, color = "primary", className }: StatCardProps) => {
  return (
    <div
      className={cn(
        "bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100",
        className
      )}
    >
      <div className="flex flex-col items-start">
        <span className={`text-4xl md:text-5xl font-bold text-${color}`}>{value}</span>
        <span className="text-sm font-medium text-navy uppercase tracking-wider mt-1">
          {label}
        </span>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default StatCard;
