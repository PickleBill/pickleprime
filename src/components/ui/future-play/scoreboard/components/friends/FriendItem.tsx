
import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Friend } from "./types";

interface FriendItemProps {
  friend: Friend;
}

const FriendItem: React.FC<FriendItemProps> = ({ friend }) => {
  // Function to get status color
  const getStatusColor = (status: Friend["status"]) => {
    switch (status) {
      case "Online": return "bg-green-500";
      case "Playing": return "bg-amber-500";
      case "Offline": return "bg-gray-500";
    }
  };

  return (
    <motion.div
      key={friend.id}
      className="bg-navy/70 border border-white/10 rounded-lg p-3 flex items-center justify-between"
      whileHover={{ backgroundColor: 'rgba(30, 41, 59, 0.9)' }}
    >
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className={`w-12 h-12 rounded-full ${friend.avatarColor} flex items-center justify-center text-white text-lg font-bold`}>
            {friend.initial}
          </div>
          <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-navy-dark ${getStatusColor(friend.status)}`}></div>
        </div>
        <div>
          <h4 className="text-white font-medium">{friend.name}</h4>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-white/60">{friend.status}</span>
            <span className="w-1 h-1 bg-white/30 rounded-full"></span>
            <span className="text-white/60">{friend.skillLevel}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="p-2 bg-[#0EA5E9]/20 hover:bg-[#0EA5E9]/30 rounded-full text-[#0EA5E9]">
          <MessageCircle className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
};

export default FriendItem;
