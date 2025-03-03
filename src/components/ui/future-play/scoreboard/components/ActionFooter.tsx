
import React from "react";
import { Video, Activity, Trophy, BarChart2, Share2, User } from "lucide-react";
import { motion } from "framer-motion";

interface ActionFooterProps {
  onHighlightClick: () => void;
  onPlayerProfileClick: () => void;
  onShareClick: () => void;
  onActionButtonClick?: (viewType: string) => void;
}

const ActionFooter: React.FC<ActionFooterProps> = ({
  onHighlightClick,
  onPlayerProfileClick,
  onShareClick,
  onActionButtonClick
}) => {
  // Define our action buttons with their respective handlers
  const actionButtons = [
    {
      id: "video",
      icon: <Video className="w-5 h-5" />,
      label: "Video Clips",
      handler: () => onActionButtonClick && onActionButtonClick("video"),
      iconBgColor: "from-red-500/20 to-red-500/30",
      iconColor: "text-red-400"
    },
    {
      id: "analytics",
      icon: <Activity className="w-5 h-5" />,
      label: "Analytics",
      handler: () => onActionButtonClick && onActionButtonClick("analytics"),
      iconBgColor: "from-green-500/20 to-green-500/30",
      iconColor: "text-green-400"
    },
    {
      id: "tournaments",
      icon: <Trophy className="w-5 h-5" />,
      label: "Tournaments",
      handler: () => onActionButtonClick && onActionButtonClick("tournaments"),
      iconBgColor: "from-amber-400/20 to-amber-400/30",
      iconColor: "text-amber-400"
    },
    {
      id: "stats",
      icon: <BarChart2 className="w-5 h-5" />,
      label: "Match Stats",
      handler: () => onActionButtonClick && onActionButtonClick("stats"),
      iconBgColor: "from-cyan-400/20 to-cyan-400/30",
      iconColor: "text-cyan-400"
    },
    {
      id: "community",
      icon: <Share2 className="w-5 h-5" />,
      label: "Community",
      handler: onHighlightClick,
      iconBgColor: "from-purple-500/20 to-purple-500/30",
      iconColor: "text-purple-400"
    },
    {
      id: "profile",
      icon: <User className="w-5 h-5" />,
      label: "Profile",
      handler: onPlayerProfileClick,
      iconBgColor: "from-gray-400/20 to-gray-400/30",
      iconColor: "text-gray-400"
    }
  ];

  return (
    <div className="bg-navy-dark border-t border-white/10 p-4">
      <h3 className="text-base font-semibold text-white mb-3">Explore features</h3>
      
      <div className="grid grid-cols-3 gap-3">
        {actionButtons.map((button) => (
          <motion.div
            key={button.id}
            onClick={button.handler}
            className="relative p-6 rounded-lg flex flex-col items-center justify-center cursor-pointer 
                      bg-gradient-to-br from-[#001a29] to-[#001525] backdrop-blur-lg
                      overflow-hidden shadow-lg border border-white/10
                      transition-colors duration-300 h-[100px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated gradient shine effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent 
                          opacity-50 -rotate-45 transform-gpu
                          animate-[slideRight_3s_infinite_linear]" />
            
            {/* Glow effect behind icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                          w-16 h-16 rounded-full bg-white/5 filter blur-md" />
            
            <div className="relative z-10">
              {/* Icon circle */}
              <div className={`p-3 rounded-full bg-gradient-to-br ${button.iconBgColor} border border-white/10 shadow-lg ${button.iconColor}`}>
                {button.icon}
              </div>
              <span className="text-white text-sm font-medium mt-3 block text-center">{button.label}</span>
            </div>

            {/* Subtle ping effect to draw attention */}
            {button.id !== "profile" && button.id !== "community" && (
              <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white/50"></span>
              </span>
            )}
          </motion.div>
        ))}
      </div>
      
      {/* Instruction tooltip */}
      <div className="mt-3 bg-white/5 backdrop-blur-sm rounded-md p-2 text-center text-xs text-white/70">
        Tap any button above to explore detailed views and features
      </div>
    </div>
  );
};

export default ActionFooter;
