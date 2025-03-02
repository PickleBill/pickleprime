
import React from "react";
import { Share, Video, Activity, Trophy, BarChart2, Users } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { CarouselItemProps } from "./CarouselItem";

type QuickViewHandler = (itemId: string) => void;

export const getCarouselItems = (handleQuickView: QuickViewHandler): CarouselItemProps[] => [
  {
    id: 'share',
    label: 'Share Now',
    icon: <Share className="w-5 h-5" />,
    active: true,
    color: '#1a9dc3',
    onClick: () => {
      toast({
        title: "Match shared!",
        description: "Your match update has been shared successfully.",
        duration: 3000,
      });
    }
  },
  {
    id: 'video',
    label: 'Video Clips',
    icon: <Video className="w-5 h-5" />,
    active: false,
    color: '#6b7280',
    onClick: () => handleQuickView('video')
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: <Activity className="w-5 h-5" />,
    active: false,
    color: '#6b7280',
    onClick: () => handleQuickView('analytics')
  },
  {
    id: 'tournaments',
    label: 'Tournaments',
    icon: <Trophy className="w-5 h-5" />,
    active: false,
    color: '#6b7280',
    onClick: () => handleQuickView('tournaments')
  },
  {
    id: 'stats',
    label: 'Match Stats',
    icon: <BarChart2 className="w-5 h-5" />,
    active: false,
    color: '#6b7280',
    onClick: () => handleQuickView('stats')
  },
  {
    id: 'community',
    label: 'Community',
    icon: <Users className="w-5 h-5" />,
    active: true,
    color: '#1a9dc3',
    onClick: () => {
      toast({
        title: "Opening community feed",
        description: "Connecting to the player community...",
        duration: 3000,
      });
    }
  }
];
