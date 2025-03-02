
import React from "react";
import { Search, UserPlus } from "lucide-react";
import FriendItem from "./FriendItem";
import { friends } from "./data";

const FriendsList: React.FC = () => {
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-3">
        <h4 className="text-white font-medium">Friends & Connections</h4>
        <div className="flex gap-2">
          <button className="bg-navy-light/40 p-1.5 rounded-full text-white/60 hover:text-white/90 transition-colors">
            <Search className="w-4 h-4" />
          </button>
          <button className="bg-purple-500/20 p-1.5 rounded-full text-purple-400 hover:bg-purple-500/30 transition-colors">
            <UserPlus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Search Box */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Find players..."
          className="w-full bg-navy-dark/50 border border-white/10 rounded-lg py-2 pl-9 pr-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-purple-500/50"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
      </div>

      {/* Friends List */}
      <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1 custom-scrollbar">
        {friends.map((friend) => (
          <FriendItem key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default FriendsList;
