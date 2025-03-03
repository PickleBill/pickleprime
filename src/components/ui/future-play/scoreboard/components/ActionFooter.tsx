
import React from "react";
import { Video, Activity, Trophy, BarChart2, Share2, User } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedButton from "@/components/ui/AnimatedButton";

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
      color: "from-green-500/80 to-teal-600/80",
      borderColor: "border-teal-400/40",
      hoverGlow: "green"
    },
    {
      id: "analytics",
      icon: <Activity className="w-5 h-5" />,
      label: "Analytics",
      handler: () => onActionButtonClick && onActionButtonClick("analytics"),
      color: "from-blue-500/80 to-cyan-600/80",
      borderColor: "border-cyan-400/40",
      hoverGlow: "cyan"
    },
    {
      id: "tournaments",
      icon: <Trophy className="w-5 h-5" />,
      label: "Tournaments",
      handler: () => onActionButtonClick && onActionButtonClick("tournaments"),
      color: "from-amber-500/80 to-orange-600/80",
      borderColor: "border-amber-400/40",
      hoverGlow: "amber"
    },
    {
      id: "stats",
      icon: <BarChart2 className="w-5 h-5" />,
      label: "Stats",
      handler: () => onActionButtonClick && onActionButtonClick("stats"),
      color: "from-purple-500/80 to-pink-600/80",
      borderColor: "border-purple-400/40",
      hoverGlow: "purple"
    },
    {
      id: "community",
      icon: <Share2 className="w-5 h-5" />,
      label: "Community",
      handler: onHighlightClick,
      color: "from-primary/80 to-blue-600/80",
      borderColor: "border-primary/40",
      hoverGlow: "primary"
    },
    {
      id: "profile",
      icon: <User className="w-5 h-5" />,
      label: "Profile",
      handler: onPlayerProfileClick,
      color: "from-gray-500/80 to-gray-700/80",
      borderColor: "border-gray-400/40",
      hoverGlow: "gray"
    }
  ];

  return (
    <div className="bg-[#001525] border-t border-white/10 p-4">
      <div className="grid grid-cols-6 gap-3">
        {actionButtons.map((button) => (
          <motion.div
            key={button.id}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <button
              onClick={button.handler}
              className={`w-full h-full flex flex-col items-center justify-center p-3 rounded-lg
                      bg-gradient-to-br ${button.color} backdrop-blur-sm border ${button.borderColor}
                      shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden
                      focus:outline-none focus:ring-2 focus:ring-white/20`}
            >
              {/* Animated gradient shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent 
                            opacity-0 hover:opacity-100 transition-opacity duration-500 -rotate-45 
                            translate-x-full hover:translate-x-[-250%] transform-gpu" />
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="p-1.5 rounded-full bg-white/10 mb-2">
                  {button.icon}
                </div>
                <span className="text-xs font-medium text-white">{button.label}</span>
              </div>
              
              {/* Subtle ping effect to draw attention */}
              {button.id !== "profile" && button.id !== "community" && (
                <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white/50"></span>
                </span>
              )}
            </button>
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
