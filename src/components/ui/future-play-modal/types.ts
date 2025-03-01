
import { ReactNode } from "react";

export interface PillarData {
  id: number;
  title: string;
  icon: ReactNode;
  color: string;
  bgImage: string;
  description: string;
  bullets: string[];
}

export interface FuturePlayModalProps {
  isOpen: boolean;
  onClose: () => void;
}
