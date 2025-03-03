
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
    },
    {
      id: "analytics",
      icon: <Activity className="w-5 h-5" />,
      label: "Analytics",
      handler: () => onActionButtonClick && onActionButtonClick("analytics"),
    },
    {
      id: "tournaments",
      icon: <Trophy className="w-5 h-5" />,
      label: "Tournaments",
      handler: () => onActionButtonClick && onActionButtonClick("tournaments"),
    },
    {
      id: "stats",
      icon: <BarChart2 className="w-5 h-5" />,
      label: "Match Stats",
      handler: () => onActionButtonClick && onActionButtonClick("stats"),
    },
    {
      id: "community",
      icon: <Share2 className="w-5 h-5" />,
      label: "Community",
      handler: onHighlightClick,
    },
    {
      id: "profile",
      icon: <User className="w-5 h-5" />,
      label: "Profile",
      handler: onPlayerProfileClick,
    }
  ];

  return (
    <div className="bg-navy-dark border-t border-white/10 p-4">
      <div className="grid grid-cols-6 gap-2">
        {actionButtons.map((button) => (
          <motion.div
            key={button.id}
            onClick={button.handler}
            className="relative py-4 px-1 rounded-lg flex flex-col items-center justify-center cursor-pointer 
                      bg-[#001a29] backdrop-blur-lg
                      overflow-hidden shadow-lg border border-[#0EA5E9]/60
                      transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated gradient shine effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent 
                          opacity-50 -rotate-45 transform-gpu
                          animate-[slideRight_3s_infinite_linear]" />
            
            <div className="relative z-10">
              {/* Icon circle with teal background */}
              <div className="p-2.5 rounded-full bg-[#0EA5E9]/20 border border-[#0EA5E9]/40 shadow-lg text-[#0EA5E9]">
                {button.icon}
              </div>
              <span className="text-white text-xs font-medium mt-2 block text-center">{button.label}</span>
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
