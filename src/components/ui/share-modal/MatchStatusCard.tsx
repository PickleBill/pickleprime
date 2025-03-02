
import React from "react";

interface MatchStatusCardProps {
  player1Score: number;
  player2Score: number;
  gameTime: number;
}

const MatchStatusCard: React.FC<MatchStatusCardProps> = ({ 
  player1Score, 
  player2Score, 
  gameTime 
}) => {
  return (
    <div className="bg-navy/80 rounded-lg p-2 border border-white/10">
      <div className="flex justify-between items-center">
        <div className="text-center flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-sm">A</div>
          <div>
            <p className="text-white text-xs mb-0 opacity-80">Team A</p>
            <p className="text-lg font-bold text-white leading-tight">{player1Score}</p>
          </div>
        </div>
        
        <div className="text-white text-opacity-70 text-xs">
          <div className="flex items-center gap-1">
            <span>Time:</span>
            <span className="font-mono">
              {Math.floor(gameTime / 60)}:{gameTime % 60 < 10 ? '0' + gameTime % 60 : gameTime % 60}
            </span>
          </div>
        </div>
        
        <div className="text-center flex items-center gap-2">
          <div>
            <p className="text-white text-xs mb-0 opacity-80">Team B</p>
            <p className="text-lg font-bold text-white leading-tight">{player2Score}</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">B</div>
        </div>
      </div>
      
      <div className="mt-1">
        <textarea 
          className="w-full p-1.5 rounded-md bg-navy border border-white/20 text-white text-xs"
          rows={1}
          defaultValue={`Match update: Team A ${player1Score} - Team B ${player2Score} after an intense game! #Pickleball #CourtVisionary`}
        />
      </div>
    </div>
  );
};

export default MatchStatusCard;
