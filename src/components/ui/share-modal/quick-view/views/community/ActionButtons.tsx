
import React from "react";
import { UserPlus, MessageCircle } from "lucide-react";

const ActionButtons: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <button className="flex items-center justify-center gap-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 py-2.5 rounded-md transition-colors">
        <UserPlus className="w-4 h-4" />
        <span>Find Players</span>
      </button>
      <button className="flex items-center justify-center gap-2 bg-teal-500/20 hover:bg-teal-500/30 text-teal-400 py-2.5 rounded-md transition-colors">
        <MessageCircle className="w-4 h-4" />
        <span>Chat</span>
      </button>
    </div>
  );
};

export default ActionButtons;
