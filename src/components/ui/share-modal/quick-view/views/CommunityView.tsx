
import React from "react";
import { Users } from "lucide-react";
import NetworkVisualization from "./community/NetworkVisualization";
import FriendsList from "./community/FriendsList";
import ActionButtons from "./community/ActionButtons";

const CommunityView: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-navy-dark/90 to-navy/90 backdrop-blur-lg rounded-lg p-6 mb-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-white">Community</h3>
        <Users className="text-purple-400 w-5 h-5" />
      </div>

      {/* Network Graph Visualization */}
      <NetworkVisualization />

      {/* Friend List Section */}
      <FriendsList />

      {/* Action Buttons */}
      <ActionButtons />
    </div>
  );
};

export default CommunityView;
