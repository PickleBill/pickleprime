
export interface PillarType {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface StatType {
  id: number;
  value: string;
  label: string;
  description: string;
}

export interface TeamMemberType {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const pillars: PillarType[] = [
  {
    id: 1,
    title: "AI Video Capture",
    description: "Instant highlight reels and social media content created through our advanced AI system. One-touch sharing to boost engagement.",
    icon: "Video",
  },
  {
    id: 2,
    title: "Advanced Analytics",
    description: "Real-time tracking of ball trajectory, player movement, spin rates, and speed. Detailed match statistics for performance improvement.",
    icon: "Activity",
  },
  {
    id: 3,
    title: "Gamification",
    description: "Dynamic tournaments, skill-based challenges, and competitive leaderboards that keep players coming back for more.",
    icon: "Trophy",
  },
  {
    id: 4,
    title: "Digital Displays",
    description: "Interactive scoreboards, sponsor overlays, and fan engagement tools that enhance the on-court experience for everyone.",
    icon: "Monitor",
  },
  {
    id: 5,
    title: "Community Tools",
    description: "AI-powered skill-based matchmaking, coaching modules, and influencer event management to build vibrant communities.",
    icon: "Users",
  },
];

export const marketStats: StatType[] = [
  {
    id: 1,
    value: "30%",
    label: "Engagement",
    description: "Higher player return rates with interactive technology",
  },
  {
    id: 2,
    value: "3x",
    label: "Social Sharing",
    description: "More visibility through player-generated content",
  },
  {
    id: 3,
    value: "25%",
    label: "Revenue Growth",
    description: "Average increase in per-player spending",
  },
  {
    id: 4,
    value: "48hrs",
    label: "Quick Setup",
    description: "From installation to fully operational system",
  },
];

export const teamMembers: TeamMemberType[] = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Founder & CEO",
    bio: "Former pro player with extensive experience in sports technology and digital experiences.",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Morgan Chen",
    role: "Product Lead",
    bio: "AI specialist with background in human-centered design and sports analytics.",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Taylor Wilson",
    role: "Technical Advisor",
    bio: "Sports technology expert with deep knowledge in tracking technology and digital experiences.",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Jordan Smith",
    role: "Growth Strategist",
    bio: "Specializing in sports facility optimization and enhancing player experiences.",
    image: "/placeholder.svg",
  },
];
