
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
      className="relative rounded-lg overflow-hidden backdrop-blur-md cursor-pointer group flex-1"
      whileHover={{ scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: delay * 0.1 }}
    >
      <div 
        className="w-full h-full bg-navy-light/30 border border-white/10 rounded-lg p-1.5 flex flex-col items-center justify-center transition-all"
        style={{ 
          boxShadow: `0 0 15px 0 ${glowColor}40`,
          background: `radial-gradient(circle at center, ${glowColor}20 0%, transparent 70%)`,
        }}
      >
        <div 
          className="w-7 h-7 rounded-full flex items-center justify-center mb-1"
          style={{ backgroundColor: `${glowColor}30` }}
        >
          {icon}
        </div>
        <h3 className="text-white font-medium text-xs">{title}</h3>
      </div>
      
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center bg-navy-dark/70 transition-opacity"
      >
        <motion.span 
          className="px-2 py-0.5 bg-white/10 hover:bg-white/20 rounded text-white font-medium text-[10px] uppercase"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          EXPLORE
        </motion.span>
      </div>
    </motion.div>
  );
};

interface FeatureExploreSectionProps {
  onFeatureClick: (featureType: string) => void;
}

const FeatureExploreSection: React.FC<FeatureExploreSectionProps> = ({ onFeatureClick }) => {
  const features = [
    { id: 'analytics', title: 'Analytics', icon: <Activity className="w-4 h-4 text-[#4CAF50]" />, glowColor: '#4CAF50' },
    { id: 'tournaments', title: 'Tournaments', icon: <Trophy className="w-4 h-4 text-[#FFD700]" />, glowColor: '#FFD700' },
    { id: 'stats', title: 'Match Stats', icon: <BarChart2 className="w-4 h-4 text-[#E91E63]" />, glowColor: '#E91E63' },
    { id: 'community', title: 'Community', icon: <Users className="w-4 h-4 text-[#9C27B0]" />, glowColor: '#9C27B0' },
    { id: 'settings', title: 'Settings', icon: <Settings className="w-4 h-4 text-[#2196F3]" />, glowColor: '#2196F3' },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <h3 className="text-sm font-medium text-white">Explore features</h3>
        <a href="#" className="text-[#1a9dc3] text-xs flex items-center hover:underline">
          Dashboards →
        </a>
      </div>
      
      <div className="relative">
        {/* Feature cards in a row */}
        <div className="flex gap-1.5">
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
