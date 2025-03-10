
import React from "react";
import { Activity, Trophy, BarChart2, Users, Settings, Video } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: React.ReactNode;
  label: string;
  iconColor: string;
  onClick: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, label, iconColor, onClick }) => {
  return (
    <motion.div
      className="relative p-6 rounded-lg flex flex-col items-center justify-center cursor-pointer 
                bg-gradient-to-br from-[#001a29] to-[#001525] backdrop-blur-lg
                overflow-hidden shadow-lg border border-teal-400/40
                transition-colors duration-300 h-[100px]"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Animated gradient shine effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent 
                    opacity-50 -rotate-45 transform-gpu
                    animate-[slideRight_3s_infinite_linear]" />
      
      {/* Glow effect behind icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    w-16 h-16 rounded-full bg-white/5 filter blur-md" />
      
      <div className={`relative z-10`}>
        <div className="p-1.5 rounded-full border border-teal-400/30 shadow-[0_0_6px_rgba(45,212,191,0.3)]">
          {React.cloneElement(icon as React.ReactElement, { 
            className: iconColor === "amber-400" ? "text-amber-400" : 
                     iconColor === "cyan-400" ? "text-cyan-400" : 
                     `text-${iconColor}` 
          })}
        </div>
      </div>
      <span className="relative text-white text-sm font-medium z-10 mt-3">{label}</span>
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
      iconColor: "green-500"
    },
    {
      id: "tournaments",
      icon: <Trophy className="w-7 h-7" />,
      label: "Tournaments",
      iconColor: "amber-400" // Gold-yellow color
    },
    {
      id: "stats",
      icon: <BarChart2 className="w-7 h-7" />,
      label: "Match Stats",
      iconColor: "cyan-400" // Teal-ish color
    },
    {
      id: "community",
      icon: <Users className="w-7 h-7" />,
      label: "Community",
      iconColor: "purple-500"
    },
    {
      id: "videos",
      icon: <Video className="w-7 h-7" />,
      label: "Video Clips",
      iconColor: "red-500" // Vibrant red color
    },
    {
      id: "settings",
      icon: <Settings className="w-7 h-7" />,
      label: "Settings",
      iconColor: "gray-400" // Greyish color
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
            iconColor={feature.iconColor}
            onClick={() => onFeatureClick(feature.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureExploreSection;
