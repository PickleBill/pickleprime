
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
