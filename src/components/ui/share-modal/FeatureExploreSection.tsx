
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
      className={`p-4 rounded-lg flex flex-col items-center justify-center cursor-pointer 
                 bg-${color}/10 hover:bg-${color}/20 transition-colors duration-200 h-[90px]`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className={`text-${color} mb-2`}>{icon}</div>
      <span className="text-white text-sm font-medium">{label}</span>
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
      icon: <Activity className="w-6 h-6" />,
      label: "Analytics",
      color: "green-500"
    },
    {
      id: "tournaments",
      icon: <Trophy className="w-6 h-6" />,
      label: "Tournaments",
      color: "yellow-500"
    },
    {
      id: "stats",
      icon: <BarChart2 className="w-6 h-6" />,
      label: "Match Stats",
      color: "pink-500"
    },
    {
      id: "community",
      icon: <Users className="w-6 h-6" />,
      label: "Community",
      color: "purple-500"
    },
    {
      id: "settings",
      icon: <Settings className="w-6 h-6" />,
      label: "Settings",
      color: "blue-500"
    },
    {
      id: "videos",
      icon: <Video className="w-6 h-6" />,
      label: "Video Clips",
      color: "emerald-500"
    }
  ];

  return (
    <div>
      <h3 className="text-base font-semibold text-white mb-2">Explore features</h3>
      <div className="grid grid-cols-3 gap-2">
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
