
import React from "react";

const DataFlowAnimation: React.FC = () => {
  return (
    <div className="relative h-10 my-8 overflow-hidden">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full h-px bg-primary/20"></div>
      </div>
      <div className="absolute inset-y-0 left-0 animate-[slideRight_8s_linear_infinite]">
        <div className="flex items-center gap-12">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i} 
              className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataFlowAnimation;
