import React from "react";
import { 
  Sponsor,
  PlayerStats, 
  MatchFeedItem
} from "../types";

// Sponsor Data
export const sponsors: Sponsor[] = [
  {
    id: 1,
    name: "Joola",
    logo: "/lovable-uploads/93ec8769-f4ff-4eba-aff7-a78b39986907.png"
  },
  {
    id: 2,
    name: "Fanatics",
    logo: "/lovable-uploads/ec4c1855-060c-49cf-afd6-3d56765fb726.png"
  },
  {
    id: 3,
    name: "Urban Pickleball Club",
    logo: "/lovable-uploads/d39d9c68-9778-4a89-b892-24f2e597b654.png"
  }
];

// Player Stats
export const player1Stats: PlayerStats = {
  name: "Alex Chen",
  winRate: "78%",
  topSpeed: "47 mph",
  reactionTime: "0.4s",
  accuracy: "92%",
  stamina: "89%",
  spinRate: "1800 rpm",
  shots: 42,
  avatar: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=150&h=150&crop=faces&auto=format&fit=crop"
};

export const player2Stats: PlayerStats = {
  name: "Jordan Smith",
  winRate: "71%",
  topSpeed: "52 mph",
  reactionTime: "0.5s",
  accuracy: "88%",
  stamina: "94%",
  spinRate: "2100 rpm",
  shots: 38,
  avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&crop=faces&auto=format&fit=crop"
};

// Match Feed Items
export const mockMatchFeedItems: MatchFeedItem[] = [
  {
    id: "1",
    type: "highlight",
    content: "Amazing cross-court winner by Alex!",
    time: "00:34",
    likes: 24
  },
  {
    id: "2",
    type: "achievement",
    content: "Jordan reached 50+ mph serve for the first time!",
    time: "01:12"
  },
  {
    id: "3",
    type: "stat",
    content: "Alex winning 80% of rallies longer than 8 shots.",
    time: "02:45"
  }
];
