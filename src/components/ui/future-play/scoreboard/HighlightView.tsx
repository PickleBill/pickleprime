
import React from 'react';
import { X } from 'lucide-react';

export interface HighlightViewProps {
  highlightTimer: number;
  onBackClick: () => void;
}

const HighlightView: React.FC<HighlightViewProps> = ({ 
  highlightTimer,
  onBackClick
}) => {
  return (
    <div className="relative flex flex-col h-full bg-navy-dark/90">
      <div className="absolute top-3 right-3 z-10">
        <button 
          onClick={onBackClick}
          className="p-2 rounded-full bg-navy/50 hover:bg-navy/70 transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>
      </div>
      
      {/* Simulated highlight video content */}
      <div className="flex-1 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-emerald-500/20" />
        
        <div className="text-center text-white p-6 z-10">
          <h3 className="text-xl font-bold mb-4">Highlight Replay</h3>
          <p className="text-white/70 mb-8">
            Showing the amazing point from the previous rally
          </p>
          
          {/* Video simulation overlay */}
          <div className="relative w-full max-w-md h-60 mx-auto bg-navy-dark rounded-lg overflow-hidden border border-white/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="animate-pulse w-16 h-16 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Progress bar for the highlight */}
      <div className="p-4 bg-navy-dark border-t border-white/10">
        <div className="w-full bg-navy/50 rounded-full h-2 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-emerald-500 to-sky-500 h-full rounded-full transition-all duration-300 ease-linear"
            style={{ width: `${highlightTimer}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default HighlightView;
