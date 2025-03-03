
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
      color: "from-green-500 to-teal-600"
    },
    {
      id: "analytics",
      icon: <Activity className="w-5 h-5" />,
      label: "Analytics",
      handler: () => onActionButtonClick && onActionButtonClick("analytics"),
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: "tournaments",
      icon: <Trophy className="w-5 h-5" />,
      label: "Tournaments",
      handler: () => onActionButtonClick && onActionButtonClick("tournaments"),
      color: "from-amber-500 to-orange-600"
    },
    {
      id: "stats",
      icon: <BarChart2 className="w-5 h-5" />,
      label: "Stats",
      handler: () => onActionButtonClick && onActionButtonClick("stats"),
      color: "from-purple-500 to-pink-600"
    },
    {
      id: "community",
      icon: <Share2 className="w-5 h-5" />,
      label: "Community",
      handler: onHighlightClick,
      color: "from-primary to-blue-600"
    },
    {
      id: "profile",
      icon: <User className="w-5 h-5" />,
      label: "Profile",
      handler: onPlayerProfileClick,
      color: "from-gray-500 to-gray-700"
    }
  ];

  return (
    <div className="bg-navy-dark border-t border-white/10 p-4">
      <div className="grid grid-cols-6 gap-2">
        {actionButtons.map((button) => (
          <motion.button
            key={button.id}
            onClick={button.handler}
            className={`relative flex flex-col items-center text-white p-3 rounded-xl overflow-hidden 
                      bg-gradient-to-br ${button.color} shadow-lg border border-white/10
                      hover:shadow-xl transition-all duration-300`}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated background shine effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 
                          opacity-0 hover:opacity-100 transition-opacity duration-500 -rotate-45 
                          translate-x-full hover:translate-x-[-250%] transform-gpu" />
            
            <div className="p-1.5 mb-1">
              {button.icon}
            </div>
            <span className="text-xs font-medium">{button.label}</span>
            
            {/* Subtle ping effect to draw attention */}
            {button.id !== "profile" && button.id !== "community" && (
              <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white/50"></span>
              </span>
            )}
          </motion.button>
        ))}
      </div>
      
      {/* Instruction tooltip to make it clearer */}
      <div className="mt-3 bg-white/5 backdrop-blur-sm rounded-md p-2 text-center text-xs text-white/70">
        Tap any button above to explore detailed views and features
      </div>
    </div>
  );
};

export default ActionFooter;
