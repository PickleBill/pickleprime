
import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const PremiumBadge: React.FC = () => {
  return (
    <motion.div 
      className="bg-gradient-to-r from-[#FFD700]/20 to-[#FFD700]/10 border border-[#FFD700]/30 rounded-lg p-3 mt-2 flex justify-between items-center"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.6 }}
    >
      <div className="flex items-start gap-2">
        <Award className="w-5 h-5 text-[#FFD700] mt-0.5" />
        <div>
          <h4 className="text-sm font-medium text-white/90">Advanced Analytics</h4>
          <p className="text-xs text-white/70">Unlock advanced stats and insights</p>
        </div>
      </div>
      
      <motion.button 
        className="px-3 py-1.5 bg-[#FFD700] text-navy-dark rounded text-xs font-medium"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Upgrade
      </motion.button>
    </motion.div>
  );
};

export default PremiumBadge;
