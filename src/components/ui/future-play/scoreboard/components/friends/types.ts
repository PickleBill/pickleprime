
export interface Friend {
  id: string;
  name: string;
  status: "Online" | "Offline" | "Playing";
  skillLevel: "Beginner" | "Intermediate" | "Advanced";
  avatarColor: string;
  initial: string;
}
