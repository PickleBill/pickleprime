
import React from "react";
import { Video, Users, Share, Trophy, Activity, BarChart3 } from "lucide-react";

interface ActionFooterProps {
  onHighlightClick: () => void;
  onPlayerProfileClick: () => void;
  onShareClick: () => void;
  onActionButtonClick: (viewType: string) => void;
  onSocialBettingClick: () => void;
}

const ActionFooter: React.FC<ActionFooterProps> = ({
  onHighlightClick,
  onPlayerProfileClick,
  onShareClick,
  onActionButtonClick,
  onSocialBettingClick
}) => {
  const actionButtons = [
    {
      label: "Highlights",
      icon: <Video className="w-5 h-5" />,
      onClick: () => onActionButtonClick("video")
    },
    {
      label: "Community",
      icon: <Users className="w-5 h-5" />,
      onClick: () => onActionButtonClick("community")
    },
    {
      label: "Analytics",
      icon: <BarChart3 className="w-5 h-5" />,
      onClick: onHighlightClick
    },
    {
      label: "Betting",
      icon: <Trophy className="w-5 h-5" />,
      onClick: onSocialBettingClick
    }
  ];

  return (
    <div className="bg-[#0f172a] border-t border-[#1e293b] py-3 px-4">
      <div className="flex justify-between items-center">
        {actionButtons.map((button, index) => (
          <button
            key={index}
            onClick={button.onClick}
            className="flex items-center justify-center gap-2 bg-[#1e293b] hover:bg-[#2d3748] text-white rounded-full px-5 py-2.5 transition-all duration-300 min-w-28"
          >
            {button.icon}
            <span className="text-sm font-medium">{button.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ActionFooter;
