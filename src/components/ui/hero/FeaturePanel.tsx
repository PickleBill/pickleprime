
import React from "react";
import AnimatedButton from "../AnimatedButton";

interface FeaturePanelProps {
  title: string;
  description: string;
  buttonText: string;
  buttonColor: string;
  onClick: () => void;
  borderColor?: string;
}

const FeaturePanel: React.FC<FeaturePanelProps> = ({
  title,
  description,
  buttonText,
  buttonColor,
  onClick,
  borderColor = "border-primary/20"
}) => {
  return (
    <div className={`md:col-span-1 bg-navy/5 rounded-xl p-6 border ${borderColor} flex flex-col items-center`}>
      <h2 className="text-2xl font-bold text-navy mb-4">{title}</h2>
      <p className="text-gray-600 mb-6 text-center">
        {description}
      </p>
      <AnimatedButton 
        size="lg" 
        onClick={onClick}
        className={`w-full px-6 py-4 text-lg ${buttonColor} text-white hover:shadow-lg hover:shadow-primary/20 transition-all`}
      >
        {buttonText}
      </AnimatedButton>
    </div>
  );
};

export default FeaturePanel;
