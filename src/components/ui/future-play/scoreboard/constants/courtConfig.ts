
// Court configuration constants
export const courtBoundaries = {
  top: 10, // Top court boundary (%)
  bottom: 90, // Bottom court boundary (%)
  left: 15, // Left court boundary (%)
  right: 85, // Right court boundary (%)
  net: { top: 49, bottom: 51 }, // Net position (%)
  midLine: 50, // Middle line of the court (%)
  kitchenTop: 35, // Non-volley zone top line (%)
  kitchenBottom: 65, // Non-volley zone bottom line (%)
};

// Court colors based on the image
export const courtColors = {
  surface: "#1A70C5", // Main court surface color (blue)
  kitchen: "#E6A639", // Non-volley zone color (orange/gold)
  playArea: "#4CAF50", // Playing area color (green)
  lines: "white", // Court line color
  boundary: "#FFFFFF", // Outer boundary color (white)
  team1: "#4CAF50", // Team 1 color (green)
  team2: "#1A70C5" // Team 2 color (blue)
};

// Player configuration
export const playerConfig = {
  size: 10, // Size of player circles in pixels
  team1Color: "#4CAF50", // Team 1 color (green)
  team2Color: "#1A70C5", // Team 2 color (blue)
  glowSize: 20, // Size of glow effect
  glowOpacity: 0.3 // Opacity of glow effect
};

// Ball configuration
export const ballConfig = {
  size: 5, // Size of ball in pixels
  color: "#FFFFFF", // Ball color (white)
  borderColor: "#F0F0F0", // Ball border color
  trajectoryColor: "#4CAF50", // Ball trajectory line color (green)
  trailColor: "#4CAF50", // Ball trail color (green)
  glowSize: 15, // Size of glow effect
  glowOpacity: 0.6, // Opacity of glow effect
  trailLength: 8 // Number of trail segments
};

// Team labels
export const teamLabels = {
  team1: "TEAM GREEN",
  team2: "TEAM BLUE"
};
