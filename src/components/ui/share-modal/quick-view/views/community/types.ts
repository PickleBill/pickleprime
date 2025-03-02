
export interface Friend {
  id: number;
  name: string;
  avatar: string;
  status: "online" | "offline" | "playing";
  level: string;
}

export interface NetworkNode {
  angle: number;
  distance: number;
}
