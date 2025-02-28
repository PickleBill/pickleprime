
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
    icon: "video",
  },
  {
    id: 2,
    title: "Advanced Analytics",
    description: "Real-time tracking of ball trajectory, player movement, spin rates, and speed. Detailed match statistics for performance improvement.",
    icon: "activity",
  },
  {
    id: 3,
    title: "Gamification",
    description: "Dynamic tournaments, skill-based challenges, and competitive leaderboards that keep players coming back for more.",
    icon: "trophy",
  },
  {
    id: 4,
    title: "Digital Displays",
    description: "Interactive scoreboards, sponsor overlays, and fan engagement tools that enhance the on-court experience for everyone.",
    icon: "monitor",
  },
  {
    id: 5,
    title: "Community Tools",
    description: "AI-powered skill-based matchmaking, coaching modules, and influencer event management to build vibrant communities.",
    icon: "users",
  },
];

export const marketStats: StatType[] = [
  {
    id: 1,
    value: "11M+",
    label: "U.S. Players",
    description: "Active pickleball players in the United States alone",
  },
  {
    id: 2,
    value: "21%",
    label: "CAGR",
    description: "Compound annual growth rate of the pickleball market",
  },
  {
    id: 3,
    value: "$2K",
    label: "MRR per Club",
    description: "Potential monthly recurring revenue for facility partners",
  },
  {
    id: 4,
    value: "0",
    label: "Courts Owned",
    description: "Capital-light model with zero facility ownership costs",
  },
];

export const teamMembers: TeamMemberType[] = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Founder & CEO",
    bio: "3x entrepreneur with extensive experience in sports technology and SaaS platforms.",
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
    bio: "Former Trackman executive with deep knowledge in sports tracking technology.",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Jordan Smith",
    role: "Growth Strategist",
    bio: "Ex-5 Iron executive specializing in sports facility optimization and scaling.",
    image: "/placeholder.svg",
  },
];
