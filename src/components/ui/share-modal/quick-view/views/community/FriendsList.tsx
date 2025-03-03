
import React from "react";
import { Search, UserPlus, Filter } from "lucide-react";
import { motion } from "framer-motion";
import FriendItem from "./FriendItem";
import { friends } from "./data";

const FriendsList: React.FC = () => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <h4 className="text-white font-medium">Friends & Connections</h4>
          <span className="bg-purple-500/30 text-xs px-2 py-0.5 rounded-full text-white/90">{friends.length}</span>
        </div>
        <div className="flex gap-2">
          <motion.button 
            className="bg-navy-light/40 p-1.5 rounded-full text-white/60 hover:text-white/90 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Filter className="w-3.5 h-3.5" />
          </motion.button>
          <motion.button 
            className="bg-purple-500/20 p-1.5 rounded-full text-purple-400 hover:bg-purple-500/30 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <UserPlus className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      </div>

      {/* Search Box with cleaner design */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Find players..."
          className="w-full bg-navy-dark/70 border border-white/10 rounded-lg py-2 pl-9 pr-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
      </div>

      {/* Friends List with animations */}
      <motion.div 
        className="space-y-2.5 max-h-[220px] overflow-y-auto pr-2 custom-scrollbar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {friends.map((friend, index) => (
          <motion.div
            key={friend.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + (index * 0.05), duration: 0.3 }}
          >
            <FriendItem friend={friend} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FriendsList;
