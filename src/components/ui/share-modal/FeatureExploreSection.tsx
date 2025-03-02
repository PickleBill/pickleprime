
import React from "react";
import { Activity, Trophy, BarChart2, Users, Settings, Video } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: React.ReactNode;
  label: string;
  color: string;
  onClick: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, label, color, onClick }) => {
  return (
    <motion.div
      className={`relative p-6 rounded-lg flex flex-col items-center justify-center cursor-pointer 
                bg-gradient-to-br from-${color}/30 to-${color}/10 backdrop-blur-lg
                border border-${color}/20 overflow-hidden
                transition-colors duration-300 h-[100px]`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Animated gradient shine effect */}
      <div className={`absolute inset-0 bg-gradient-to-tr from-${color}/0 via-${color}/30 to-${color}/0 
                    opacity-50 -rotate-45 transform-gpu
                    animate-[slideRight_3s_infinite_linear]`} />
      
      {/* Glow effect behind icon */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    w-12 h-12 rounded-full bg-${color}/20 filter blur-md`} />
      
      <div className={`relative text-${color} mb-3 z-10`}>
        {icon}
      </div>
      <span className="relative text-white text-sm font-medium z-10">{label}</span>
      
      {/* EXPLORE badge */}
      <div className="absolute top-1 right-1 bg-white/10 rounded-full px-2 py-0.5">
        <span className="text-white/80 text-[9px] font-semibold tracking-wide">EXPLORE</span>
      </div>
    </motion.div>
  );
};

interface FeatureExploreSectionProps {
  onFeatureClick: (featureType: string) => void;
}

const FeatureExploreSection: React.FC<FeatureExploreSectionProps> = ({ onFeatureClick }) => {
  const features = [
    {
      id: "analytics",
      icon: <Activity className="w-7 h-7" />,
      label: "Analytics",
      color: "green-500"
    },
    {
      id: "tournaments",
      icon: <Trophy className="w-7 h-7" />,
      label: "Tournaments",
      color: "yellow-500"
    },
    {
      id: "stats",
      icon: <BarChart2 className="w-7 h-7" />,
      label: "Match Stats",
      color: "pink-500"
    },
    {
      id: "community",
      icon: <Users className="w-7 h-7" />,
      label: "Community",
      color: "purple-500"
    },
    {
      id: "settings",
      icon: <Settings className="w-7 h-7" />,
      label: "Settings",
      color: "blue-500"
    },
    {
      id: "videos",
      icon: <Video className="w-7 h-7" />,
      label: "Video Clips",
      color: "emerald-500"
    }
  ];

  return (
    <div>
      <h3 className="text-base font-semibold text-white mb-3">Explore features</h3>
      <div className="grid grid-cols-3 gap-3">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            icon={feature.icon}
            label={feature.label}
            color={feature.color}
            onClick={() => onFeatureClick(feature.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureExploreSection;
