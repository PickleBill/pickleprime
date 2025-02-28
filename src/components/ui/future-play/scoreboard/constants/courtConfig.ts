
// Court configuration constants
export const courtBoundaries = {
  top: 15, // Top court boundary (%)
  bottom: 85, // Bottom court boundary (%)
  left: 10, // Left court boundary (%)
  right: 90, // Right court boundary (%)
  net: { top: 48, bottom: 52 }, // Net position (%)
  midLine: 50, // Middle line of the court (%)
  kitchenTop: 30, // Non-volley zone top line (%)
  kitchenBottom: 70, // Non-volley zone bottom line (%)
  serviceBoxes: {
    topLeft: { x1: 0, y1: 0, x2: 25, y2: 50 },
    topRight: { x1: 25, y1: 0, x2: 50, y2: 50 },
    bottomLeft: { x1: 0, y1: 50, x2: 25, y2: 100 },
    bottomRight: { x1: 25, y1: 50, x2: 50, y2: 100 }
  }
};

// Court colors
export const courtColors = {
  surface: "#0A4D73", // Main court surface color (dark blue)
  lines: "white", // Court line color
  boundary: "#1B4D2B", // Outer boundary color (dark green)
  team1: "#176840", // Team 1 color (green)
  team2: "#0A4D73" // Team 2 color (blue)
};

// Player configuration
export const playerConfig = {
  size: 10, // Size of player circles in pixels
  team1Color: "#176840", // Team 1 color (green)
  team2Color: "#0A4D73", // Team 2 color (blue)
  glowSize: 20, // Size of glow effect
  glowOpacity: 0.3 // Opacity of glow effect
};

// Ball configuration
export const ballConfig = {
  size: 5, // Size of ball in pixels
  color: "#FFFFFF", // Ball color (white)
  borderColor: "#F0F0F0", // Ball border color
  trajectoryColor: "#45D97E", // Ball trajectory line color (light green)
  glowSize: 15, // Size of glow effect
  glowOpacity: 0.6 // Opacity of glow effect
};

// Team labels
export const teamLabels = {
  team1: "TEAM GREEN",
  team2: "TEAM BLUE"
};
