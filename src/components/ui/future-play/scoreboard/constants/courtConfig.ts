
// Court configuration constants
export const courtBoundaries = {
  top: 10, // Top court boundary (%)
  bottom: 90, // Bottom court boundary (%)
  left: 15, // Left court boundary (%)
  right: 85, // Right court boundary (%)
  midLine: 50, // Middle horizontal line (%)
  centerLine: 50, // Center vertical line (%)
  kitchenLeft: 36, // Kitchen left boundary (%)
  kitchenRight: 64, // Kitchen right boundary (%)
};

// Court colors based on the reference image
export const courtColors = {
  surface: "#A7CC7B", // Outer court surface color (light green)
  kitchen: "#81D4E3", // Kitchen/central zone color (light blue)
  quadrant: "#5B9BD5", // Quadrant color (darker blue)
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
  color: "#FFEB3B", // Ball color (yellow)
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
