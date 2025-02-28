
// Mock player stats
import { MatchFeedItem, PlayerStats, Sponsor } from "../types";

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

// Mock match feed
export const mockMatchFeedItems: MatchFeedItem[] = [
  {
    id: 1,
    type: "highlight",
    content: "Amazing cross-court winner by Alex!",
    time: "00:34",
    likes: 24
  },
  {
    id: 2,
    type: "achievement",
    content: "Jordan reached 50+ mph serve for the first time!",
    time: "01:12"
  },
  {
    id: 3,
    type: "stat",
    content: "Alex winning 80% of rallies longer than 8 shots.",
    time: "02:45"
  }
];

// Mock sponsors
export const sponsors: Sponsor[] = [
  { id: 1, name: "Pickleville Sports" },
  { id: 2, name: "Paddle Tech Pro" },
  { id: 3, name: "Court Kings" }
];
