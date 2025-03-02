
import React, { useState } from "react";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award } from "lucide-react";

interface TabsHeaderProps {
  onPremiumTabHover: (isHovered: boolean) => void;
}

const TabsHeader: React.FC<TabsHeaderProps> = ({ onPremiumTabHover }) => {
  return (
    <TabsList className="w-full border-b border-white/10 bg-navy-light/30 p-0 h-auto">
      <TabsTrigger 
        value="share" 
        className="flex-1 py-3 data-[state=active]:bg-navy-dark/60 data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
      >
        Quick Share
      </TabsTrigger>
      <TabsTrigger 
        value="premium" 
        className="flex-1 py-3 data-[state=active]:bg-navy-dark/60 data-[state=active]:border-b-2 data-[state=active]:border-[#FFD700] rounded-none relative overflow-hidden"
        onMouseEnter={() => onPremiumTabHover(true)}
        onMouseLeave={() => onPremiumTabHover(false)}
      >
        <span className="flex items-center gap-1">
          Premium Analytics
          <Award className="w-4 h-4 text-[#FFD700]" />
        </span>
      </TabsTrigger>
    </TabsList>
  );
};

export default TabsHeader;
