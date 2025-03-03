
import React from "react";
import { motion } from "framer-motion";
import NetworkGraph from "@/components/ui/share-modal/quick-view/views/community/NetworkGraph";
import { Filter, UserPlus } from "lucide-react";

const NetworkVisualization: React.FC = () => {
  return (
    <div className="bg-navy/70 border border-white/10 rounded-lg p-6 relative overflow-hidden">
      {/* Network Graph Section */}
      <div className="relative h-[300px] mb-1">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-radial from-[#8B5CF6]/10 to-transparent opacity-40 z-0"></div>
        
        {/* "Your Network" label */}
        <motion.div 
          className="absolute top-3 right-3 bg-navy-dark/80 text-white text-xs py-1 px-2.5 rounded-full border border-white/20 backdrop-blur-sm z-20"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Your Network
        </motion.div>
        
        {/* Network Graph Component */}
        <NetworkGraph 
          centralNodeColor="bg-[#0EA5E9]"
          friendNodeColor="bg-purple-500"
          centralNodeSize={12}
          friendNodeSize={8}
          pulseColor="border-[#0EA5E9]/30"
          connectionColor="from-[#0EA5E9]/70 to-purple-500/70"
          animationDuration={4}
          nodeAnimationDelay={0.3}
          showLegend={true}
        />
      </div>
      
      {/* Network Stats Summary */}
      <div className="mt-4 flex justify-between items-center">
        <div className="flex space-x-6">
          <div className="text-center">
            <p className="text-white/60 text-xs">Total Connections</p>
            <p className="text-white text-lg font-semibold">24</p>
          </div>
          <div className="text-center">
            <p className="text-white/60 text-xs">Active Today</p>
            <p className="text-white text-lg font-semibold">8</p>
          </div>
          <div className="text-center">
            <p className="text-white/60 text-xs">Playing Now</p>
            <p className="text-white text-lg font-semibold">3</p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <motion.button 
            className="bg-navy-light/40 p-1.5 rounded-full text-white/60 hover:text-white/90 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Filter className="w-4 h-4" />
          </motion.button>
          <motion.button 
            className="bg-[#0EA5E9]/20 p-1.5 rounded-full text-[#0EA5E9] hover:bg-[#0EA5E9]/30 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <UserPlus className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default NetworkVisualization;
