
export interface Friend {
  id: string;
  name: string;
  status: "Online" | "Offline" | "Playing";
  skillLevel: "Beginner" | "Intermediate" | "Advanced";
  avatarColor: string;
  initial: string;
  lastActive?: string; // Optional timestamp for last activity
  wins?: number;       // Optional win count
  losses?: number;     // Optional loss count
  favoriteGame?: string; // Optional favorite game type
  isOnline?: boolean;  // Quick check for online status
  matchHistory?: {
    result: "win" | "loss";
    date: string;
    opponent: string;
    score: string;
  }[];
}
