
import React from "react";
import { Video, Activity, Trophy, BarChart2, Share2, User, Flame } from "lucide-react";
import { motion } from "framer-motion";

interface ActionFooterProps {
  onHighlightClick: () => void;
  onPlayerProfileClick: () => void;
  onShareClick: () => void;
  onActionButtonClick?: (viewType: string) => void;
  onSocialBettingClick: () => void;
}

const ActionFooter: React.FC<ActionFooterProps> = ({
  onHighlightClick,
  onPlayerProfileClick,
  onShareClick,
  onActionButtonClick,
  onSocialBettingClick
}) => {
  // Define our action buttons with their respective handlers and colors
  const actionButtons = [
    {
      id: "video",
      icon: <Video className="w-5 h-5" />,
      label: "Video Clips",
      handler: () => onActionButtonClick && onActionButtonClick("video"),
      iconColor: "text-[#ea384c]",  // Red color for video
      borderColor: "border-[#ea384c]/40",
      bgColor: "bg-[#ea384c]/10"
    },
    {
      id: "analytics",
      icon: <Activity className="w-5 h-5" />,
      label: "Analytics",
      handler: () => onActionButtonClick && onActionButtonClick("analytics"),
      iconColor: "text-[#2BCB6E]",  // Green color for analytics
      borderColor: "border-[#2BCB6E]/40",
      bgColor: "bg-[#2BCB6E]/10"
    },
    {
      id: "betting",
      icon: <Flame className="w-5 h-5" />,
      label: "Social Betting",
      handler: onSocialBettingClick,
      iconColor: "text-[#8B5CF6]",  // Purple color for betting
      borderColor: "border-[#8B5CF6]/40",
      bgColor: "bg-[#8B5CF6]/10",
      highlight: true // Special highlight for this new feature
    },
    {
      id: "tournaments",
      icon: <Trophy className="w-5 h-5" />,
      label: "Tournaments",
      handler: () => onActionButtonClick && onActionButtonClick("tournaments"),
      iconColor: "text-[#FEC107]",  // Yellow/gold color for tournaments
      borderColor: "border-[#FEC107]/40",
      bgColor: "bg-[#FEC107]/10"
    },
    {
      id: "stats",
      icon: <BarChart2 className="w-5 h-5" />,
      label: "Match Stats",
      handler: () => onActionButtonClick && onActionButtonClick("stats"),
      iconColor: "text-[#33C3F0]",  // Cyan/blue color for stats
      borderColor: "border-[#33C3F0]/40",
      bgColor: "bg-[#33C3F0]/10"
    },
    {
      id: "community",
      icon: <Share2 className="w-5 h-5" />,
      label: "Community",
      handler: () => onActionButtonClick && onActionButtonClick("community"),
      iconColor: "text-[#8B5CF6]",  // Purple color for community
      borderColor: "border-[#8B5CF6]/40",
      bgColor: "bg-[#8B5CF6]/10"
    }
  ];

  return (
    <div className="bg-navy-dark border-t border-white/10 p-4">
      <div className="flex justify-between gap-3 overflow-x-auto pb-1 hide-scrollbar">
        {actionButtons.map((button) => (
          <motion.div
            key={button.id}
            onClick={button.handler}
            className={`relative py-4 px-1 rounded-lg flex flex-col items-center justify-center cursor-pointer 
                      bg-[#001a29] backdrop-blur-lg min-w-[15%]
                      overflow-hidden shadow-lg border ${button.highlight ? 'border-[#8B5CF6]' : 'border-[#0EA5E9]/20'}
                      transition-colors duration-300`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated gradient shine effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent 
                          opacity-50 -rotate-45 transform-gpu
                          animate-[slideRight_3s_infinite_linear]" />
            
            <div className="relative z-10 flex flex-col items-center">
              {/* Icon circle with colored background - using the oval style from first image */}
              <div className={`flex items-center justify-center w-14 h-10 rounded-full ${button.bgColor} ${button.borderColor} border shadow-lg ${button.iconColor}`}>
                {button.icon}
              </div>
              <span className="text-white text-[0.887rem] font-medium mt-2 block text-center">{button.label}</span>
            </div>

            {/* Special glow effect for betting button */}
            {button.highlight && (
              <div className="absolute inset-0 animate-pulse bg-[#8B5CF6]/10 rounded-lg"></div>
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
