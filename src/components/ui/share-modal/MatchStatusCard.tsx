
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
    <div className="bg-navy/80 rounded-lg p-4 mb-4 md:mb-0 border border-white/10">
      <h3 className="text-lg font-semibold text-primary mb-2">Match Status</h3>
      <div className="flex justify-between items-center mb-2">
        <div className="text-center">
          <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold mx-auto mb-1">A</div>
          <p className="text-white text-sm">Team A</p>
          <p className="text-xl font-bold text-white">{player1Score}</p>
        </div>
        
        <div className="text-white text-opacity-70">
          <div className="text-xs">Time Played</div>
          <div className="text-center font-mono">
            {Math.floor(gameTime / 60)}:{gameTime % 60 < 10 ? '0' + gameTime % 60 : gameTime % 60}
          </div>
        </div>
        
        <div className="text-center">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mx-auto mb-1">B</div>
          <p className="text-white text-sm">Team B</p>
          <p className="text-xl font-bold text-white">{player2Score}</p>
        </div>
      </div>
      
      <div className="mb-2">
        <label className="text-white text-xs mb-1 block">Customize message</label>
        <textarea 
          className="w-full p-2 rounded-md bg-navy border border-white/20 text-white text-sm"
          rows={2}
          defaultValue={`Match update: Team A ${player1Score} - Team B ${player2Score} after an intense game! #Pickleball #CourtVisionary`}
        />
      </div>
    </div>
  );
};

export default MatchStatusCard;
