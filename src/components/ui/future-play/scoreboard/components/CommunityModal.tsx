
import React, { useState } from "react";
import { Users, X, Filter, MessageSquare, Share2, UserPlus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NetworkTab from "./network/NetworkTab";
import FriendsTab from "./friends/FriendsTab";

interface CommunityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CommunityModal: React.FC<CommunityModalProps> = ({
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<"network" | "friends">("network");
  
  if (!isOpen) return null;
  
  const handleCloseClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  
  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 animate-fade-in backdrop-blur-sm"
      onClick={handleCloseClick}
    >
      <motion.div 
        className="relative bg-gradient-to-b from-navy-dark/95 to-navy/95 rounded-xl border border-white/10 w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        {/* Header */}
        <div className="border-b border-white/10 p-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-[#8B5CF6]/20">
              <Users className="w-5 h-5 text-[#8B5CF6]" />
            </div>
            <h3 className="text-xl font-semibold text-white">Community</h3>
          </div>
          <div className="flex items-center gap-3">
            <motion.button 
              className="p-2 rounded-full bg-navy-light/30 hover:bg-navy-light/50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Share2 className="w-4 h-4 text-white/70" />
            </motion.button>
            <motion.button 
              className="p-2 rounded-full bg-navy-light/30 hover:bg-navy-light/50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageSquare className="w-4 h-4 text-white/70" />
            </motion.button>
            <motion.button 
              onClick={onClose}
              className="text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>
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

        {/* Main content with subtle gradient overlay */}
        <div className="flex-1 overflow-y-auto p-5 relative">
          {/* Subtle gradient overlays for depth */}
          <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-navy-dark/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-navy-dark/80 to-transparent z-10 pointer-events-none"></div>
          
          <AnimatePresence mode="wait">
            {activeTab === 'network' ? (
              <NetworkTab />
            ) : (
              <FriendsTab />
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
      </motion.div>
    </div>
  );
};

export default CommunityModal;
