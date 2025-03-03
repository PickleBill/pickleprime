
import { useEffect, useRef } from "react";

export const useAnimationManager = (
  isHighlightActive: boolean,
  animateCallback: (deltaTime: number) => void
) => {
  // Animation frame reference
  const animationFrameRef = useRef<number>();
  const lastTimestampRef = useRef<number>(0);
  const intervalRef = useRef<NodeJS.Timeout>();
  
  // Set up and manage animation frames
  useEffect(() => {
    if (isHighlightActive) return;
    
    const animate = (timestamp: number) => {
      if (!lastTimestampRef.current) lastTimestampRef.current = timestamp;
      const deltaTime = timestamp - lastTimestampRef.current;
      lastTimestampRef.current = timestamp;
      
      // Call the animation callback with the delta time
      animateCallback(deltaTime);
      
      // Continue the animation loop
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    // Start the animation
    animationFrameRef.current = requestAnimationFrame(animate);
    
    // Cleanup function
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHighlightActive, animateCallback]);
  
  // Function to register an interval
  const registerInterval = (callback: () => void, interval: number) => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Set new interval
    intervalRef.current = setInterval(callback, interval);
    
    // Return cleanup function
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  };
  
  return {
    registerInterval
  };
};

export default useAnimationManager;
