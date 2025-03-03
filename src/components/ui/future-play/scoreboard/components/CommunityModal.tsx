
import React, { useState } from "react";
import { Users, Search, MessageCircle, UserPlus, X, UserPlus2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ShareFooter from "./share-modal/ShareFooter";
import AnimatedButton from "@/components/ui/AnimatedButton";

interface CommunityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Friend {
  id: string;
  name: string;
  status: "Online" | "Offline" | "Playing";
  skillLevel: "Beginner" | "Intermediate" | "Advanced";
  avatarColor: string;
  initial: string;
}

const CommunityModal: React.FC<CommunityModalProps> = ({
  isOpen,
  onClose
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"network" | "friends">("network");
  
  // Mock friends data
  const friends: Friend[] = [
    { id: "1", name: "Sarah Miller", status: "Offline", skillLevel: "Intermediate", avatarColor: "bg-purple-500", initial: "S" },
    { id: "2", name: "Michael Davis", status: "Playing", skillLevel: "Advanced", avatarColor: "bg-amber-500", initial: "M" },
    { id: "3", name: "Emma Wilson", status: "Online", skillLevel: "Beginner", avatarColor: "bg-green-500", initial: "E" },
    { id: "4", name: "James Thompson", status: "Online", skillLevel: "Advanced", avatarColor: "bg-green-500", initial: "J" },
    { id: "5", name: "Olivia Martinez", status: "Offline", skillLevel: "Intermediate", avatarColor: "bg-purple-500", initial: "O" },
  ];
  
  if (!isOpen) return null;
  
  const handleCloseClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  
  const handleShare = () => {
    console.log("Sharing community update");
    onClose();
  };
  
  const filteredFriends = friends.filter(friend => 
    friend.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to get status color
  const getStatusColor = (status: Friend["status"]) => {
    switch (status) {
      case "Online": return "bg-green-500";
      case "Playing": return "bg-amber-500";
      case "Offline": return "bg-gray-500";
    }
  };
  
  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 animate-fade-in"
      onClick={handleCloseClick}
    >
      <div className="relative bg-navy-dark/90 rounded-xl border border-white/10 w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="border-b border-white/10 p-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-[#8B5CF6]/20">
              <Users className="w-5 h-5 text-[#8B5CF6]" />
            </div>
            <h3 className="text-xl font-semibold text-white">Community</h3>
          </div>
          <button 
            onClick={onClose}
            className="text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex px-4 pt-4 border-b border-white/10">
          <button 
            className={`px-4 py-2 font-medium text-sm relative ${activeTab === 'network' ? 'text-white' : 'text-white/60 hover:text-white/80'}`}
            onClick={() => setActiveTab('network')}
          >
            Your Network
            {activeTab === 'network' && (
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8B5CF6]" 
                layoutId="activeTabIndicator"
              />
            )}
          </button>
          <button 
            className={`px-4 py-2 font-medium text-sm relative ${activeTab === 'friends' ? 'text-white' : 'text-white/60 hover:text-white/80'}`}
            onClick={() => setActiveTab('friends')}
          >
            Friends & Connections
            {activeTab === 'friends' && (
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8B5CF6]" 
                layoutId="activeTabIndicator"
              />
            )}
          </button>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-y-auto p-5">
          <AnimatePresence mode="wait">
            {activeTab === 'network' ? (
              <motion.div
                key="network"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                {/* Network Visualization */}
                <div className="bg-navy/70 border border-white/10 rounded-lg p-6 h-[300px] relative">
                  {/* You node (center) */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-14 h-14 rounded-full bg-[#0EA5E9] flex items-center justify-center text-white text-xl font-bold glow-cyan">
                      Y
                    </div>
                    {/* Connection lines */}
                    <div className="absolute w-[250px] h-[250px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-40">
                      {/* Lines to each friend */}
                      <div className="absolute w-px h-[80px] bg-white/30 left-1/2 top-[-40px] transform -translate-x-1/2 -rotate-45"></div>
                      <div className="absolute w-px h-[80px] bg-white/30 left-1/2 top-[-40px] transform -translate-x-1/2 rotate-45"></div>
                      <div className="absolute w-px h-[90px] bg-white/30 right-[-10px] top-1/2 transform -translate-y-1/2"></div>
                      <div className="absolute w-px h-[90px] bg-white/30 left-[-10px] top-1/2 transform -translate-y-1/2"></div>
                      <div className="absolute w-px h-[80px] bg-white/30 left-1/2 bottom-[-40px] transform -translate-x-1/2 rotate-45"></div>
                      <div className="absolute w-px h-[80px] bg-white/30 left-1/2 bottom-[-40px] transform -translate-x-1/2 -rotate-45"></div>
                    </div>
                  </div>
                  
                  {/* Friend nodes */}
                  <div className="absolute top-[30px] left-1/2 transform -translate-x-1/2">
                    <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">S</div>
                  </div>
                  <div className="absolute top-[80px] right-[80px]">
                    <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">O</div>
                  </div>
                  <div className="absolute right-[40px] top-1/2 transform -translate-y-1/2">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">E</div>
                  </div>
                  <div className="absolute left-[40px] top-1/2 transform -translate-y-1/2">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">J</div>
                  </div>
                  <div className="absolute bottom-[80px] right-[80px]">
                    <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold">M</div>
                  </div>
                  <div className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2">
                    <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-white font-bold">P</div>
                  </div>
                  
                  {/* Legend */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#0EA5E9]"></div>
                      <span className="text-white">You</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                      <span className="text-white">Friends</span>
                    </div>
                  </div>
                </div>
                
                {/* Stats summary */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="bg-navy/70 border border-white/10 rounded-lg p-4 text-center">
                    <h4 className="text-[#0EA5E9] font-medium mb-1">Network</h4>
                    <p className="text-3xl font-bold text-white">12</p>
                    <p className="text-xs text-white/60">Total Connections</p>
                  </div>
                  <div className="bg-navy/70 border border-white/10 rounded-lg p-4 text-center">
                    <h4 className="text-[#8B5CF6] font-medium mb-1">Active Now</h4>
                    <p className="text-3xl font-bold text-white">5</p>
                    <p className="text-xs text-white/60">Players Online</p>
                  </div>
                  <div className="bg-navy/70 border border-white/10 rounded-lg p-4 text-center">
                    <h4 className="text-[#F97316] font-medium mb-1">Matches</h4>
                    <p className="text-3xl font-bold text-white">8</p>
                    <p className="text-xs text-white/60">This Week</p>
                  </div>
                </div>
              </motion.div>
            ) : (
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
            )}
          </AnimatePresence>
        </div>
        
        {/* Footer */}
        <div className="p-4 border-t border-white/10 flex justify-between items-center">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-navy/40 hover:bg-navy/60 text-white/80 rounded-md text-sm transition-colors border border-[#0EA5E9]/30"
          >
            Close
          </button>
          
          <motion.button 
            onClick={() => console.log("Navigate to social dashboard")}
            className="px-6 py-2 bg-gradient-to-r from-[#8B5CF6]/90 to-[#9333EA]/90 
                     text-white rounded-md text-sm font-medium transition-colors 
                     border border-[#8B5CF6]/40 flex items-center gap-1"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 0 15px rgba(139, 92, 246, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Open Social Dashboard</span>
            <Users className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CommunityModal;
