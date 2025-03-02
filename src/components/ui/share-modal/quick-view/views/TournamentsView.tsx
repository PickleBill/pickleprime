
import React from "react";
import { Trophy, Clock, Filter, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface TournamentsViewProps {
  // Any specific props that might be needed
}

const TournamentsView: React.FC<TournamentsViewProps> = () => {
  return (
    <motion.div 
      className="bg-gradient-to-br from-navy-dark/90 to-navy/90 backdrop-blur-lg rounded-lg p-6 mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-full bg-[#1a9dc3]/20">
            <Trophy className="w-5 h-5 text-[#1a9dc3]" />
          </div>
          <h3 className="text-lg font-semibold text-white">Tournaments</h3>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center mb-2">
          <div className="flex gap-2">
            <motion.button
              className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#1a9dc3] text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Upcoming
            </motion.button>
            
            <motion.button
              className="px-3 py-1.5 rounded-full text-xs font-medium bg-navy-light/30 text-white/70 hover:bg-navy-light/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Registered
            </motion.button>
            
            <motion.button
              className="px-3 py-1.5 rounded-full text-xs font-medium bg-navy-light/30 text-white/70 hover:bg-navy-light/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Past
            </motion.button>
          </div>
          
          <motion.button
            className="p-1.5 bg-navy-light/30 rounded-md text-white/70 hover:bg-navy-light/50 hover:text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Filter className="w-3.5 h-3.5" />
          </motion.button>
        </div>
        
        {/* Featured tournament */}
        <motion.div 
          className="bg-gradient-to-br from-[#1a9dc3]/30 to-navy-light/30 backdrop-blur-sm border border-[#1a9dc3]/20 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="h-24 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMwMDFhMmMiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6TTAgMzBoMzB2MzBIMHoiIGZpbGw9IiMxYTlkYzMiIG9wYWNpdHk9Ii4yIi8+PC9nPjwvc3ZnPg==')]">
            <div className="w-full h-full flex items-center justify-center backdrop-blur-sm bg-navy-dark/50">
              <div className="text-center">
                <motion.div 
                  className="text-2xl font-bold text-white"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Summer Championship
                </motion.div>
                <motion.div 
                  className="text-sm text-white/70"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  July 15-18, 2023
                </motion.div>
              </div>
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-[#FFD700]" />
                <span className="text-sm font-medium text-white">$10,000 Prize Pool</span>
              </div>
              <div className="text-xs text-white/60 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                Registration ends in 5 days
              </div>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-xs">
                <span className="text-white/70">Location:</span>
                <span className="text-white">Central Sports Complex, San Diego</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-white/70">Format:</span>
                <span className="text-white">Double Elimination</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-white/70">Division:</span>
                <span className="text-white">Open, 5.0+</span>
              </div>
            </div>
            
            <motion.button 
              className="w-full py-2 bg-[#1a9dc3] text-white rounded-md text-sm font-medium flex items-center justify-center gap-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Register Now
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
        
        {/* Tournament list */}
        <div className="space-y-3 mt-2">
          {['Spring Championship', 'Summer Tournament Series', 'Regional Masters'].map((tournament, index) => (
            <motion.div 
              key={tournament} 
              className="bg-navy-light/30 hover:bg-navy-light/40 backdrop-blur-sm border border-white/5 rounded-md p-3 cursor-pointer transition-all duration-300 hover:scale-[1.02] flex justify-between items-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + (index * 0.1) }}
            >
              <div>
                <p className="text-sm font-medium text-white/90">{tournament}</p>
                <p className="text-xs text-white/50">Starts in {14 - (index * 3)} days</p>
              </div>
              <div className="p-1.5 bg-[#1a9dc3]/20 rounded-full">
                <Trophy className="w-4 h-4 text-[#1a9dc3]" />
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.button 
          className="w-full py-2 bg-navy-light/30 hover:bg-navy-light/50 text-white/70 hover:text-white rounded-md text-sm transition-all"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          View All Tournaments
        </motion.button>
      </div>
    </motion.div>
  );
};

export default TournamentsView;
