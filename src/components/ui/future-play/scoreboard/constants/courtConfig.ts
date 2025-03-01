
// Court configuration constants based on standard pickleball dimensions
// Standard court is 20' x 44' with a 30' x 60' total playing area

export const courtBoundaries = {
  // Court boundaries as percentages of the container
  // Main court: 20' x 44'
  courtTop: 25, // Top of main court boundary (%)
  courtBottom: 75, // Bottom of main court boundary (%)
  courtLeft: 13.33, // Left of main court boundary (%)
  courtRight: 86.67, // Right of main court boundary (%)
  
  // Add property aliases for backward compatibility with existing code
  top: 25, // Alias for courtTop
  bottom: 75, // Alias for courtBottom
  left: 13.33, // Alias for courtLeft
  right: 86.67, // Alias for courtRight
  midLine: 50, // Alias for centerLine
  
  // Center line
  centerLine: 50, // Center vertical line (%)
  
  // Non-volley zone (kitchen) - 7' from net on each side
  kitchenTop: 39.17, // Kitchen top boundary (%) - 7' from net
  kitchenBottom: 60.83, // Kitchen bottom boundary (%) - 7' from net
  
  // Net
  netPosition: 50, // Net position (%) - middle of court
  netThickness: 2, // Thickness of net line (px)
  
  // Net properties for backward compatibility
  net: {
    top: 39.17, // Same as kitchenTop
    bottom: 60.83 // Same as kitchenBottom
  },
  
  // Service boxes
  serviceLinePosition: 32.5, // Service line position from baseline (%)
};

// Court colors for the visualization
export const courtColors = {
  // Play area
  buffer: "#92D36E", // Grass green for buffer area
  court: "#3897C8", // Medium blue for main court
  kitchen: "#A7EBFD", // Light blue for kitchen/non-volley zone
  
  // Lines
  lines: "#FFFFFF", // White for court lines
  netShadow: "rgba(0, 0, 0, 0.2)", // Shadow for the net
  
  // Teams
  team1: "#4CAF50", // Team 1 color (green)
  team2: "#1A70C5" // Team 2 color (blue)
};

// Player configuration
export const playerConfig = {
  size: 5.75, // Increased by 15% from 5 to 5.75 pixels
  team1Color: "#4CAF50", // Base color for team 1 (will be made more vibrant in component)
  team2Color: "#1A70C5", // Base color for team 2 (will be made more vibrant in component)
  glowSize: 9, // Size of glow effect (adjusted proportionally)
  glowOpacity: 0.4, // Glow opacity
  opacity: 0.9 // Adjusted opacity for player silhouettes
};

// Ball configuration
export const ballConfig = {
  size: 15, // Size of ball in pixels (increased from 5 to 15 - 3x larger)
  color: "#FFFF00", // Bright neon yellow color
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

// Export the combined court configuration
export const courtConfig = {
  bounds: courtBoundaries,
  colors: courtColors,
  player: playerConfig,
  ball: ballConfig,
  teams: teamLabels
};
