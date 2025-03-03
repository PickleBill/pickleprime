
import React from "react";
import { Users, Network, UserPlus } from "lucide-react";
import { motion } from "framer-motion";
import NetworkVisualization from "./community/NetworkVisualization";
import FriendsList from "./community/FriendsList";
import ActionButtons from "./community/ActionButtons";

const CommunityView: React.FC = () => {
  return (
    <motion.div 
      className="bg-gradient-to-br from-navy-dark/90 to-navy/90 backdrop-blur-lg rounded-lg p-6 mb-4 border border-purple-500/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-full bg-purple-500/20">
            <Network className="text-purple-400 w-5 h-5" />
          </div>
          <h3 className="text-xl font-semibold text-white">Community</h3>
        </div>
        <div className="flex gap-2">
          <button className="p-1.5 rounded-full bg-navy-light/40 hover:bg-navy-light/60 transition-colors">
            <Users className="text-white/70 w-4 h-4" />
          </button>
          <button className="p-1.5 rounded-full bg-purple-500/20 hover:bg-purple-500/30 transition-colors">
            <UserPlus className="text-purple-400 w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Network Graph Visualization */}
      <NetworkVisualization />

      {/* Friend List Section with subtle shadow */}
      <div className="bg-navy-dark/40 backdrop-blur-sm rounded-lg p-4 mb-5 border border-white/5 shadow-inner">
        <FriendsList />
      </div>

      {/* Action Buttons */}
      <ActionButtons />
    </motion.div>
  );
};

export default CommunityView;
