
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
  surface: "#5FAEDC", // Main court surface color
  lines: "white", // Court line color
  boundary: "#1B4D2B", // Outer boundary color
  team1: "#176840", // Team 1 color
  team2: "#0A4D73" // Team 2 color
};

// Player configuration
export const playerConfig = {
  size: 8, // Size of player circles in pixels
  team1Color: "#176840", // Team 1 color 
  team2Color: "#0A4D73" // Team 2 color
};

// Ball configuration
export const ballConfig = {
  size: 4, // Size of ball in pixels
  color: "#FACC15", // Ball color
  borderColor: "#F59E0B", // Ball border color
  trajectoryColor: "#e6ff05" // Ball trajectory line color
};
