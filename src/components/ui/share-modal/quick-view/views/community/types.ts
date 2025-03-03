
export interface Friend {
  id: string;
  name: string;
  avatar: string;
  status: "online" | "offline" | "playing" | "away";
  level: string;
  lastMatch?: string;
  mutualFriends?: number;
}

export interface NetworkNode {
  angle: number;
  distance: number;
}

export interface NetworkGraphProps {
  centralNodeColor?: string;
  friendNodeColor?: string;
  centralNodeSize?: number;
  friendNodeSize?: number;
  pulseColor?: string;
  connectionColor?: string;
  animationDuration?: number;
  nodeAnimationDelay?: number;
  showLegend?: boolean;
}

export interface FriendItemProps {
  friend: Friend;
}
