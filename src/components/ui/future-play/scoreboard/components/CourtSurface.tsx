
import React, { useState, useEffect } from 'react';
import { courtBoundaries } from '../constants/courtConfig';

const CourtSurface: React.FC = () => {
  const [spotlightPosition, setSpotlightPosition] = useState({ x: 45, y: 30 });
  const [showSpotlight, setShowSpotlight] = useState(true);
  const [crowdEnthusiasm, setCrowdEnthusiasm] = useState(0); // 0-100 scale
  
  // Move spotlight randomly across the court
  useEffect(() => {
    const spotlightInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setSpotlightPosition({
          x: Math.random() * 80 + 10, // 10-90%
          y: Math.random() * 80 + 10  // 10-90%
        });
      }
      
      // Occasionally toggle spotlight
      if (Math.random() > 0.85) {
        setShowSpotlight(prev => !prev);
      }
    }, 3000);
    
    return () => clearInterval(spotlightInterval);
  }, []);
  
  // Simulate crowd enthusiasm
  useEffect(() => {
    const enthusiasmInterval = setInterval(() => {
      setCrowdEnthusiasm(prev => {
        // Random walk - increase or decrease slightly
        const change = (Math.random() * 20) - 10; // -10 to +10
        return Math.max(0, Math.min(100, prev + change));
      });
    }, 5000);
    
    return () => clearInterval(enthusiasmInterval);
  }, []);

  // Court dimensions and styling 
  const courtStyle = {
    width: '100%',
    height: '100%',
    position: 'relative' as 'relative',
    backgroundColor: '#2E8B57', // A darker grass color
    borderRadius: '0.5rem',
    boxShadow: 'inset 0 0 30px rgba(0, 0, 0, 0.3)', // Interior shadow for depth
    overflow: 'hidden',
  };
  
  // Court lines styling
  const lineStyle = {
    position: 'absolute' as 'absolute',
    backgroundColor: 'white',
    boxShadow: '0 0 3px rgba(255, 255, 255, 0.7)', // Subtle glow on the lines
  };
  
  // Spotlight effect
  const spotlightStyle = {
    position: 'absolute' as 'absolute',
    top: `${spotlightPosition.y}%`,
    left: `${spotlightPosition.x}%`,
    width: '60%',
    height: '60%',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
    opacity: showSpotlight ? 1 : 0,
    transition: 'opacity 1s ease-in-out',
    zIndex: 2
  };
  
  // Create an audience background effect
  const audienceStyle = {
    position: 'absolute' as 'absolute',
    top: '-10%',
    left: '-10%',
    width: '120%',
    height: '120%',
    background: `radial-gradient(ellipse at center, rgba(0,0,0,0) 75%, rgba(0,0,0,0.5) 100%)`,
    pointerEvents: 'none',
    zIndex: 1
  };
  
  // Crowd noise visual indicator 
  const crowdNoiseElements = [];
  const crowdNoiseCount = Math.floor(crowdEnthusiasm / 10); // 0-10 elements based on enthusiasm
  
  for (let i = 0; i < crowdNoiseCount; i++) {
    const size = Math.random() * 20 + 10; // 10-30px
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const delay = Math.random() * 2;
    const duration = Math.random() * 2 + 1;
    
    crowdNoiseElements.push(
      <div 
        key={`crowd-${i}`}
        className="absolute rounded-full"
        style={{
          top: `${posY}%`,
          left: `${posX}%`,
          width: `${size}px`,
          height: `${size}px`,
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
          animation: `pulse ${duration}s infinite ${delay}s`,
          zIndex: 1
        }}
      />
    );
  }

  return (
    <div style={courtStyle}>
      {/* Audience background effect */}
      <div style={audienceStyle} />
      
      {/* Spotlight effect */}
      {showSpotlight && <div style={spotlightStyle} />}
      
      {/* Crowd noise visual indicators */}
      {crowdNoiseElements}
      
      {/* Court outline */}
      <div style={{ 
        ...lineStyle, 
        top: `${courtBoundaries.top}%`, 
        left: `${courtBoundaries.left}%`, 
        width: `${courtBoundaries.right - courtBoundaries.left}%`, 
        height: `${courtBoundaries.bottom - courtBoundaries.top}%`,
        border: '2px solid white',
        backgroundColor: 'transparent'
      }} />
      
      {/* Center line */}
      <div style={{ 
        ...lineStyle, 
        top: `${courtBoundaries.top}%`, 
        left: '50%', 
        width: '2px', 
        height: `${courtBoundaries.bottom - courtBoundaries.top}%`,
        transform: 'translateX(-50%)'
      }} />
      
      {/* Non-volley zone (kitchen) lines */}
      {/* Left kitchen */}
      <div style={{ 
        ...lineStyle, 
        top: `${courtBoundaries.top}%`, 
        left: `${courtBoundaries.left}%`, 
        width: `${courtBoundaries.kitchen.width}%`, 
        height: `${courtBoundaries.kitchen.height}%`,
        border: '2px solid white',
        backgroundColor: 'transparent'
      }} />
      
      {/* Right kitchen */}
      <div style={{ 
        ...lineStyle, 
        top: `${courtBoundaries.top}%`, 
        right: `${courtBoundaries.left}%`, 
        width: `${courtBoundaries.kitchen.width}%`, 
        height: `${courtBoundaries.kitchen.height}%`,
        border: '2px solid white',
        backgroundColor: 'transparent'
      }} />
      
      {/* Court texture pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(255,255,255,0.03) 5px, rgba(255,255,255,0.03) 10px)',
        pointerEvents: 'none',
        zIndex: 2
      }} />
    </div>
  );
};

export default CourtSurface;
