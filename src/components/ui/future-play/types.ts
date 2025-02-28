
export interface PillarData {
  id: number;
  title: string;
  icon: React.ReactNode;
  color: string;
  bgImage: string;
  description: string;
  bullets: string[];
}

export interface PlayerStats {
  name: string;
  winRate: string;
  topSpeed: string;
  reactionTime: string;
  shotAccuracy: string;
  stamina: string;
  spinRate: string;
  avatar: string;
}

export interface FuturePlayModalProps {
  isOpen: boolean;
  onClose: () => void;
}
