
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, UserPlus2 } from "lucide-react";
import FriendItem from "./FriendItem";
import { Friend } from "./types";
import AnimatedButton from "@/components/ui/AnimatedButton";

// Sample friends data
const friendsData: Friend[] = [
  { id: "1", name: "Sarah Miller", status: "Offline", skillLevel: "Intermediate", avatarColor: "bg-purple-500", initial: "S" },
  { id: "2", name: "Michael Davis", status: "Playing", skillLevel: "Advanced", avatarColor: "bg-amber-500", initial: "M" },
  { id: "3", name: "Emma Wilson", status: "Online", skillLevel: "Beginner", avatarColor: "bg-green-500", initial: "E" },
  { id: "4", name: "James Thompson", status: "Online", skillLevel: "Advanced", avatarColor: "bg-green-500", initial: "J" },
  { id: "5", name: "Olivia Martinez", status: "Offline", skillLevel: "Intermediate", avatarColor: "bg-purple-500", initial: "O" },
];

const FriendsTab: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredFriends = friendsData.filter(friend => 
    friend.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      key="friends"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
        <input
          type="text"
          placeholder="Find players..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-navy/70 border border-white/10 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-[#8B5CF6]"
        />
      </div>
      
      <div className="space-y-2">
        {filteredFriends.map(friend => (
          <FriendItem key={friend.id} friend={friend} />
        ))}
      </div>
      
      <div className="mt-6 flex justify-center">
        <AnimatedButton 
          variant="glass" 
          size="md" 
          active={true} 
          glowColor="rgba(139, 92, 246, 0.5)"
          withArrow
        >
          <UserPlus2 className="w-4 h-4 mr-1" />
          Find New Players
        </AnimatedButton>
      </div>
    </motion.div>
  );
};

export default FriendsTab;
