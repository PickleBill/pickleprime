
import React, { useState } from 'react';
import { Activity, Trophy, BarChart2, Users, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
  glowColor: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, icon, onClick, glowColor, delay = 0 }) => {
  return (
    <motion.div
      className="relative rounded-xl overflow-hidden backdrop-blur-md cursor-pointer group"
      whileHover={{ scale: 1.05, rotate: 2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: delay * 0.1 }}
    >
      <div 
        className="w-full h-full bg-navy-light/30 border border-white/10 rounded-xl p-2.5 flex flex-col items-center justify-center transition-all"
        style={{ 
          boxShadow: `0 0 15px 0 ${glowColor}40`,
          background: `radial-gradient(circle at center, ${glowColor}20 0%, transparent 70%)`,
        }}
      >
        <div 
          className="w-9 h-9 rounded-full flex items-center justify-center mb-1.5"
          style={{ backgroundColor: `${glowColor}30` }}
        >
          {icon}
        </div>
        <h3 className="text-white font-medium text-sm">{title}</h3>
      </div>
      
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center bg-navy-dark/70 transition-opacity"
      >
        <span 
          className="px-2.5 py-1 bg-white/10 hover:bg-white/20 rounded-md text-white font-medium text-xs uppercase"
        >
          EXPLORE
        </span>
      </div>
    </motion.div>
  );
};

interface FeatureExploreSectionProps {
  onFeatureClick: (featureType: string) => void;
}

const FeatureExploreSection: React.FC<FeatureExploreSectionProps> = ({ onFeatureClick }) => {
  const features = [
    { id: 'analytics', title: 'Analytics', icon: <Activity className="w-5 h-5 text-[#4CAF50]" />, glowColor: '#4CAF50' },
    { id: 'tournaments', title: 'Tournaments', icon: <Trophy className="w-5 h-5 text-[#FFD700]" />, glowColor: '#FFD700' },
    { id: 'stats', title: 'Match Stats', icon: <BarChart2 className="w-5 h-5 text-[#E91E63]" />, glowColor: '#E91E63' },
    { id: 'community', title: 'Community', icon: <Users className="w-5 h-5 text-[#9C27B0]" />, glowColor: '#9C27B0' },
    { id: 'settings', title: 'Settings', icon: <Settings className="w-5 h-5 text-[#2196F3]" />, glowColor: '#2196F3' },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-md font-medium text-white">Tap a card below to explore features</h3>
        <a href="#" className="text-[#1a9dc3] text-sm flex items-center hover:underline">
          Interactive dashboards →
        </a>
      </div>
      
      <div className="relative">
        {/* Feature cards in a circular arrangement */}
        <div className="grid grid-cols-5 gap-2">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              icon={feature.icon}
              glowColor={feature.glowColor}
              onClick={() => onFeatureClick(feature.id)}
              delay={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureExploreSection;
