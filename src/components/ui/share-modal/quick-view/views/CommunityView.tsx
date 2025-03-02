
import React from "react";
import { motion } from "framer-motion";
import { Users, UserPlus, Search, MessageCircle } from "lucide-react";

const CommunityView: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-navy-dark/90 to-navy/90 backdrop-blur-lg rounded-lg p-6 mb-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-white">Community</h3>
        <Users className="text-purple-400 w-5 h-5" />
      </div>

      {/* Network Graph Visualization */}
      <div className="relative h-[180px] mb-6 bg-navy-dark/50 rounded-lg overflow-hidden border border-purple-500/30">
        <NetworkGraph />
        <div className="absolute top-3 right-3 bg-navy-dark/80 text-white text-xs py-1 px-2 rounded-full border border-white/20">
          Your Network
        </div>
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-teal-400"></div>
          <span className="text-white/70 text-xs">You</span>
          <div className="w-2 h-2 rounded-full bg-purple-400 ml-2"></div>
          <span className="text-white/70 text-xs">Friends</span>
        </div>
      </div>

      {/* Friend List Section */}
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

      {/* Action Buttons */}
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
    </div>
  );
};

// Network graph visualization with animated connections
const NetworkGraph: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      {/* Central node (you) */}
      <motion.div 
        className="w-6 h-6 rounded-full bg-teal-400 border-2 border-white absolute z-20"
        initial={{ scale: 0.8 }}
        animate={{ 
          scale: [0.8, 1, 0.8],
          boxShadow: ['0 0 0px rgba(45,212,191,0.5)', '0 0 15px rgba(45,212,191,0.8)', '0 0 0px rgba(45,212,191,0.5)']
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      {/* Friend nodes */}
      {networkNodes.map((node, index) => (
        <React.Fragment key={index}>
          {/* Connection line */}
          <motion.div 
            className="absolute bg-gradient-to-r from-teal-400/70 to-purple-400/70 h-px origin-left z-10"
            style={{
              top: '50%',
              left: '50%',
              width: node.distance,
              transform: `rotate(${node.angle}deg)`
            }}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, delay: index * 0.3, repeat: Infinity }}
          />
          
          {/* Friend node */}
          <motion.div 
            className="w-4 h-4 rounded-full bg-purple-400 border border-white absolute z-20"
            style={{
              left: `calc(50% + ${Math.cos(node.angle * Math.PI / 180) * node.distance - 8}px)`,
              top: `calc(50% + ${Math.sin(node.angle * Math.PI / 180) * node.distance - 8}px)`
            }}
            initial={{ scale: 0.8 }}
            animate={{ scale: [0.8, 1, 0.8] }}
            transition={{ duration: 2, delay: index * 0.2, repeat: Infinity }}
          />
        </React.Fragment>
      ))}
      
      {/* Background pulse effect */}
      <motion.div
        className="w-20 h-20 rounded-full border border-teal-400/30 absolute"
        initial={{ scale: 0.5, opacity: 0.7 }}
        animate={{ 
          scale: [0.5, 1.8, 0.5],
          opacity: [0.7, 0, 0.7]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </div>
  );
};

// Network nodes data
const networkNodes = [
  { angle: 30, distance: 60 },
  { angle: 80, distance: 70 },
  { angle: 150, distance: 55 },
  { angle: 210, distance: 65 },
  { angle: 270, distance: 50 },
  { angle: 330, distance: 40 },
];

// Friends mock data
const friends = [
  { 
    id: 1, 
    name: "Alex Johnson", 
    avatar: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", 
    status: "online",
    level: "Advanced" 
  },
  { 
    id: 2, 
    name: "Sarah Miller", 
    avatar: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", 
    status: "offline",
    level: "Intermediate" 
  },
  { 
    id: 3, 
    name: "Michael Davis", 
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80", 
    status: "playing",
    level: "Advanced" 
  },
  { 
    id: 4, 
    name: "Emma Wilson", 
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", 
    status: "online",
    level: "Beginner" 
  },
  { 
    id: 5, 
    name: "James Lee", 
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", 
    status: "online",
    level: "Intermediate" 
  }
];

interface FriendItemProps {
  friend: {
    id: number;
    name: string;
    avatar: string;
    status: "online" | "offline" | "playing";
    level: string;
  };
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

export default CommunityView;
