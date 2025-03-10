
import { Friend, NetworkNode } from "./types";

// Network nodes data
export const networkNodes: NetworkNode[] = [
  { angle: 30, distance: 60 },
  { angle: 70, distance: 75 },
  { angle: 110, distance: 65 },
  { angle: 150, distance: 55 },
  { angle: 190, distance: 70 },
  { angle: 230, distance: 60 },
  { angle: 270, distance: 50 },
  { angle: 310, distance: 65 },
  { angle: 350, distance: 55 },
];

// Friends mock data with properly typed status values
export const friends: Friend[] = [
  { 
    id: "1", 
    name: "Alex Johnson", 
    avatar: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", 
    status: "online" as const,
    level: "Advanced" 
  },
  { 
    id: "2", 
    name: "Sarah Miller", 
    avatar: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", 
    status: "offline" as const,
    level: "Intermediate" 
  },
  { 
    id: "3", 
    name: "Michael Davis", 
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80", 
    status: "playing" as const,
    level: "Advanced" 
  },
  { 
    id: "4", 
    name: "Emma Wilson", 
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", 
    status: "online" as const,
    level: "Beginner" 
  },
  { 
    id: "5", 
    name: "James Lee", 
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", 
    status: "online" as const,
    level: "Intermediate" 
  },
  { 
    id: "6", 
    name: "Sofia Rodriguez", 
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", 
    status: "playing" as const,
    level: "Advanced" 
  },
  { 
    id: "7", 
    name: "David Chen", 
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", 
    status: "offline" as const,
    level: "Beginner" 
  },
  { 
    id: "8", 
    name: "Olivia Taylor", 
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", 
    status: "online" as const,
    level: "Intermediate" 
  },
  { 
    id: "9", 
    name: "Noah Garcia", 
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", 
    status: "playing" as const,
    level: "Advanced" 
  }
];
