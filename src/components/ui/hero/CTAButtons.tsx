
import React from "react";
import AnimatedButton from "../AnimatedButton";

interface CTAButtonsProps {
  onFuturePlayClick: () => void;
}

const CTAButtons: React.FC<CTAButtonsProps> = ({ onFuturePlayClick }) => {
  return (
    <div className="mt-8 flex justify-center flex-col items-center">
      <AnimatedButton 
        size="lg" 
        withArrow 
        onClick={onFuturePlayClick}
        className="px-12 py-4 text-lg bg-gradient-to-r from-primary to-[#1a9dc3] hover:shadow-lg hover:shadow-primary/20 transition-all max-w-xl w-full sm:w-auto"
      >
        See the Future of Play
      </AnimatedButton>
      
      {/* Hidden CTA button - invisible until hovered */}
      <div className="relative w-full sm:w-auto max-w-xl mt-4">
        <button 
          onClick={() => window.open('https://picklerickroll.lovable.app/', '_blank')}
          className="w-full sm:w-auto px-12 py-4 rounded-lg text-gray-100 bg-gray-100 
                     hover:bg-[#0EA5E9] transition-colors duration-300 
                     relative overflow-hidden group"
        >
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col">
            <span>Enter Super Secret Playground Lab</span>
            <span className="text-sm italic mt-1">(you won't do it)</span>
          </span>
          {/* Subtle reveal hint - almost invisible dots */}
          <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-center">
            <div className="flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-gray-200/20"></div>
              ))}
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CTAButtons;
