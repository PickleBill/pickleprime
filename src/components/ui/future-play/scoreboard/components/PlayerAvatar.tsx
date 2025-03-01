
import React from "react";

interface PlayerAvatarProps {
  name: string;
  winRate: string;
  avatar: string;
  color: string;
  rightAlign?: boolean;
}

const PlayerAvatar: React.FC<PlayerAvatarProps> = ({ name, winRate, avatar, color, rightAlign = false }) => {
  return (
    <div className={`flex items-center gap-3 ${rightAlign ? 'flex-row-reverse' : ''}`}>
      {rightAlign && (
        <div>
          <div className={`text-white text-sm font-semibold ${rightAlign ? 'text-right' : ''}`}>{name}</div>
          <div className={`text-xs ${rightAlign ? 'text-right' : ''}`} style={{ color }}>{winRate} win rate</div>
        </div>
      )}
      
      <div className={`w-10 h-10 rounded-full overflow-hidden border-2 ring-2 ${rightAlign ? 'order-last' : ''}`} 
           style={{ borderColor: color, ringColor: `${color}30` }}>
        <img 
          src={avatar} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {!rightAlign && (
        <div>
          <div className="text-white text-sm font-semibold">{name}</div>
          <div className="text-xs" style={{ color }}>{winRate} win rate</div>
        </div>
      )}
    </div>
  );
};

export default PlayerAvatar;
