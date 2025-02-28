
import React from "react";
import { Video, Activity, Trophy, Monitor, Users } from "lucide-react";
import { PillarData, PlayerStats } from "./types";

export const pillarsData: PillarData[] = [
  {
    id: 1,
    title: "AI Video Capture & Highlights",
    icon: <Video className="w-6 h-6" />,
    color: "#2BCB6E",
    bgImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    description: "Smart cameras that track the action and generate instant highlight reels.",
    bullets: [
      "One-touch clip creation & sharing",
      "Auto-tracking of key moments",
      "Custom branding overlays",
      "Social media integration"
    ]
  },
  {
    id: 2,
    title: "Advanced Analytics",
    icon: <Activity className="w-6 h-6" />,
    color: "#1a9dc3",
    bgImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    description: "Real-time performance data to improve player skills and engagement.",
    bullets: [
      "Shot velocity & placement tracking",
      "Performance improvement metrics",
      "Skill level assessment",
      "Personalized coaching insights"
    ]
  },
  {
    id: 3,
    title: "Gamification",
    icon: <Trophy className="w-6 h-6" />,
    color: "#e89e25",
    bgImage: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
    description: "Interactive challenges and competitions that keep players coming back.",
    bullets: [
      "Skill-based achievements",
      "Dynamic leaderboards",
      "Weekly challenges & tournaments",
      "Digital rewards & recognition"
    ]
  },
  {
    id: 4,
    title: "Digital Displays & Fan Engagement",
    icon: <Monitor className="w-6 h-6" />,
    color: "#7b61ff",
    bgImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    description: "Interactive screens that enhance the on-court experience.",
    bullets: [
      "Live scorekeeping & replays",
      "Sponsor integration opportunities",
      "Fan engagement features",
      "Digital signage solutions"
    ]
  },
  {
    id: 5,
    title: "Community & Matchmaking",
    icon: <Users className="w-6 h-6" />,
    color: "#ff617b",
    bgImage: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c",
    description: "Tools to connect players and build thriving racquet sports communities.",
    bullets: [
      "AI-powered skill matching",
      "League & tournament management",
      "Social connections & messaging",
      "Community event planning"
    ]
  }
];

export const player1Stats: PlayerStats = {
  name: "Alex Chen",
  winRate: "78%",
  topSpeed: "47 mph",
  reactionTime: "0.4s",
  shotAccuracy: "92%",
  stamina: "89%",
  spinRate: "1800 rpm",
  avatar: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=150&h=150&crop=faces&auto=format&fit=crop"
};

export const player2Stats: PlayerStats = {
  name: "Jordan Smith",
  winRate: "71%",
  topSpeed: "52 mph",
  reactionTime: "0.5s",
  shotAccuracy: "88%",
  stamina: "94%",
  spinRate: "2100 rpm",
  avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&crop=faces&auto=format&fit=crop"
};
