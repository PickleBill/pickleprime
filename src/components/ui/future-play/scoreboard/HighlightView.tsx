
import React from 'react';
import { ChevronLeft, Play, Zap } from 'lucide-react';

interface HighlightViewProps {
  highlightTimer: number;
}

const HighlightView: React.FC<HighlightViewProps> = ({ highlightTimer }) => {
  return (
    <div className="flex-1 relative overflow-hidden animate-fade-in">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-dark/90"></div>
      
      {/* Highlight video background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511067007398-7e4b90cfa4bc')] bg-center bg-cover">
        <div className="absolute inset-0 bg-navy-dark/40 backdrop-blur-[2px]"></div>
      </div>
      
      {/* Highlight overlay data */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary/80 to-[#1a9dc3]/80 text-white px-8 py-2 rounded-full font-bold backdrop-blur-sm border border-white/20 text-lg flex items-center gap-3">
        <Zap className="w-5 h-5" />
        INSTANT HIGHLIGHT DETECTED
      </div>
      
      <div className="absolute bottom-20 left-0 right-0 px-10 flex justify-between items-end">
        <div className="bg-navy-dark/80 backdrop-blur-sm rounded-xl p-4 border border-white/10 max-w-xs">
          <h3 className="text-primary font-bold mb-2">AI ANALYSIS</h3>
          <p className="text-white/90 text-sm">
            Perfect topspin shot from Alex with 78° approach angle and 1890 RPM. Ball velocity: 43 mph.
          </p>
        </div>
        
        <div className="bg-navy-dark/80 backdrop-blur-sm rounded-xl p-4 border border-white/10 flex flex-col items-center">
          <div className="text-3xl font-bold text-white mb-2">
            +15 <span className="text-primary text-lg">XP</span>
          </div>
          <span className="text-white/70 text-sm">TOP 5% SHOTS TODAY</span>
        </div>
      </div>
      
      {/* Highlight progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-primary transition-all duration-100"
          style={{ width: `${highlightTimer}%` }}
        ></div>
      </div>
      
      {/* Video controls */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
        <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors">
          <Play className="w-6 h-6" />
        </button>
        <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors">
          <ChevronLeft className="w-5 h-5 rotate-180" />
        </button>
      </div>
    </div>
  );
};

export default HighlightView;
