
import React from "react";
import { MessageCircle } from "lucide-react";
import { Friend } from "./types";

interface FriendItemProps {
  friend: Friend;
}

const FriendItem: React.FC<FriendItemProps> = ({ friend }) => {
  const statusColors = {
    online: "bg-green-500",
    offline: "bg-gray-500",
    playing: "bg-amber-500"
  };

  return (
    <div className="flex items-center justify-between bg-navy-dark/60 rounded-lg p-2 hover:bg-navy-dark/80 transition-colors">
      <div className="flex items-center gap-3">
        <div className="relative">
          <img 
            src={friend.avatar} 
            alt={friend.name} 
            className="w-10 h-10 rounded-full object-cover border border-white/20" 
          />
          <div className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full ${statusColors[friend.status]} border border-navy-dark`}></div>
        </div>
        <div>
          <h5 className="text-white font-medium text-sm">{friend.name}</h5>
          <div className="flex items-center gap-2">
            <span className="text-white/60 text-xs capitalize">{friend.status}</span>
            <span className="w-1 h-1 bg-white/30 rounded-full"></span>
            <span className="text-white/60 text-xs">{friend.level}</span>
          </div>
        </div>
      </div>
      <button className="text-purple-400 hover:text-purple-300 transition-colors">
        <MessageCircle className="w-4 h-4" />
      </button>
    </div>
  );
};

export default FriendItem;
