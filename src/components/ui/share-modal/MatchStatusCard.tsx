
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
    <div className="bg-navy/80 rounded-lg p-3 border border-white/10">
      <div className="flex justify-between items-center">
        <div className="text-center flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold mb-1">A</div>
          <div>
            <p className="text-white text-xs mb-0">Team A</p>
            <p className="text-xl font-bold text-white leading-tight">{player1Score}</p>
          </div>
        </div>
        
        <div className="text-white text-opacity-70">
          <div className="text-xs">Time Played</div>
          <div className="text-center font-mono text-sm">
            {Math.floor(gameTime / 60)}:{gameTime % 60 < 10 ? '0' + gameTime % 60 : gameTime % 60}
          </div>
        </div>
        
        <div className="text-center flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mb-1">B</div>
          <div>
            <p className="text-white text-xs mb-0">Team B</p>
            <p className="text-xl font-bold text-white leading-tight">{player2Score}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-2">
        <textarea 
          className="w-full p-2 rounded-md bg-navy border border-white/20 text-white text-sm"
          rows={1}
          defaultValue={`Match update: Team A ${player1Score} - Team B ${player2Score} after an intense game! #Pickleball #CourtVisionary`}
        />
      </div>
    </div>
  );
};

export default MatchStatusCard;
