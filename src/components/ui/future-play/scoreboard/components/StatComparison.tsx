
import React from 'react';
import { ChevronUp } from 'lucide-react';

interface StatComparisonProps {
  player1Value: string;
  player2Value: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  // Adding a highestValueWins prop to determine which value should be considered "better"
  highestValueWins?: boolean;
}

const StatComparison: React.FC<StatComparisonProps> = ({
  player1Value,
  player2Value,
  label,
  icon,
  color,
  // Default to highest value being the winner (e.g., speed, accuracy)
  highestValueWins = true
}) => {
  // Convert string values to numbers for comparison
  // Remove any non-numeric characters except decimal points
  const cleanValue = (val: string) => {
    const numericValue = val.replace(/[^\d.]/g, '');
    return parseFloat(numericValue);
  };

  const player1Numeric = cleanValue(player1Value);
  const player2Numeric = cleanValue(player2Value);
  
  // Determine the winner based on the highestValueWins flag
  // For some stats like reaction time, lower is better (highestValueWins = false)
  const player1Winning = highestValueWins 
    ? player1Numeric > player2Numeric 
    : player1Numeric < player2Numeric;
  const player2Winning = highestValueWins 
    ? player2Numeric > player1Numeric 
    : player2Numeric < player1Numeric;
  const isTie = player1Numeric === player2Numeric;

  return (
    <div className="grid grid-cols-3 items-center">
      <div className="relative text-[#176840] text-xl font-semibold">
        {player1Value}
        {player1Winning && (
          <div className="absolute -right-4 top-1/2 -translate-y-1/2">
            <ChevronUp className="w-4 h-4 text-[#176840] fill-[#176840]/30" />
          </div>
        )}
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-1 mb-1">
          {icon}
          <span className="text-white/80 text-xs uppercase">{label}</span>
        </div>
        <span className="text-white/50 text-xs">vs</span>
      </div>
      <div className="relative text-[#0A4D73] text-xl font-semibold text-right">
        {player2Value}
        {player2Winning && (
          <div className="absolute -left-4 top-1/2 -translate-y-1/2">
            <ChevronUp className="w-4 h-4 text-[#0A4D73] fill-[#0A4D73]/30" />
          </div>
        )}
      </div>
    </div>
  );
};

export default StatComparison;
