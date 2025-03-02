
import React, { useState } from 'react';
import { Activity, Trophy, BarChart2, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
  glowColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, icon, onClick, glowColor }) => {
  return (
    <motion.div
      className="relative rounded-xl overflow-hidden backdrop-blur-md cursor-pointer group"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div 
        className="w-full aspect-square bg-navy-light/30 border border-white/10 rounded-xl p-5 flex flex-col items-center justify-center transition-all"
        style={{ 
          boxShadow: `0 0 15px 0 ${glowColor}30`,
          background: `radial-gradient(circle at center, ${glowColor}20 0%, transparent 70%)`,
        }}
      >
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
          style={{ backgroundColor: `${glowColor}30` }}
        >
          {icon}
        </div>
        <h3 className="text-white font-medium text-lg">{title}</h3>
      </div>
      
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center bg-navy-dark/70 transition-opacity"
      >
        <button 
          className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md text-white font-medium"
        >
          EXPLORE
        </button>
      </div>
    </motion.div>
  );
};

interface FeatureExploreSectionProps {
  onFeatureClick: (featureType: string) => void;
}

const FeatureExploreSection: React.FC<FeatureExploreSectionProps> = ({ onFeatureClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const features = [
    { id: 'analytics', title: 'Analytics', icon: <Activity className="w-6 h-6 text-[#4CAF50]" />, glowColor: '#4CAF50' },
    { id: 'tournaments', title: 'Tournaments', icon: <Trophy className="w-6 h-6 text-[#FFD700]" />, glowColor: '#FFD700' },
    { id: 'stats', title: 'Match Stats', icon: <BarChart2 className="w-6 h-6 text-[#E91E63]" />, glowColor: '#E91E63' },
    // Add more features as needed
  ];
  
  const totalFeatures = features.length;
  const visibleFeatures = window.innerWidth < 640 ? 1 : 3;
  const maxIndex = totalFeatures - visibleFeatures;
  
  const nextFeature = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };
  
  const prevFeature = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <div className="mb-2 mt-1">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-md font-medium text-white">Tap a card below to explore features</h3>
        <a href="#" className="text-[#1a9dc3] text-sm flex items-center hover:underline">
          Interactive dashboards 
          <ChevronRight className="w-4 h-4 ml-1" />
        </a>
      </div>
      
      <div className="relative">
        {/* Navigation buttons */}
        <button 
          onClick={prevFeature}
          disabled={currentIndex === 0}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full p-2 bg-navy-dark/80 border border-white/10 text-white ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-navy-light/50'}`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <button 
          onClick={nextFeature}
          disabled={currentIndex >= maxIndex}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full p-2 bg-navy-dark/80 border border-white/10 text-white ${currentIndex >= maxIndex ? 'opacity-50 cursor-not-allowed' : 'hover:bg-navy-light/50'}`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
        
        {/* Features cards */}
        <div className="grid grid-cols-3 gap-4 px-8 sm:px-0">
          {features.slice(currentIndex, currentIndex + visibleFeatures).map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              icon={feature.icon}
              glowColor={feature.glowColor}
              onClick={() => onFeatureClick(feature.id)}
            />
          ))}
        </div>
        
        {/* Pagination dots */}
        <div className="flex justify-center space-x-2 mt-4">
          {Array.from({ length: totalFeatures }).map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-[#1a9dc3] w-4' : 'bg-white/30'}`}
              onClick={() => setCurrentIndex(Math.min(i, maxIndex))}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureExploreSection;
