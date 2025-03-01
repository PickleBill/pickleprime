
import React from "react";
import { Activity } from "lucide-react";

interface SponsorsBannerProps {
  sponsors: { name: string; id: number }[];
}

const SponsorsBanner: React.FC<SponsorsBannerProps> = ({ sponsors }) => {
  return (
    <div className="w-full px-4 py-2 bg-[#E5DEFF] flex items-center justify-between border-b border-white/10">
      <div className="flex items-center gap-2">
        <Activity className="w-4 h-4 text-[#F97316]" />
        <span className="text-navy-dark/80 text-sm font-medium">LIVE</span>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-1 text-navy-dark/70 text-xs">
          <span>SPONSORED BY</span>
        </div>
        <div className="flex items-center gap-5">
          <img 
            src="/lovable-uploads/f4783ae6-927e-4dc0-a01c-3cb8466f4062.png" 
            alt="Joola" 
            className="h-7 w-auto object-contain"
          />
          <img 
            src="/lovable-uploads/73338dad-0d30-4c2b-a39b-b4c1f13ebe72.png" 
            alt="Fanatics" 
            className="h-7 w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SponsorsBanner;
