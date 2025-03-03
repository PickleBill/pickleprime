
import React, { useState, useEffect } from 'react';

interface PlayerSilhouetteProps {
  teamId: number;
  playerIndex: number;
}

const PlayerSilhouette: React.FC<PlayerSilhouetteProps> = ({ teamId, playerIndex }) => {
  // Use state to track the current pose
  const [currentPose, setCurrentPose] = useState(0);
  
  // Randomize poses occasionally
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Randomly select a new pose (0-3 range)
      setCurrentPose(Math.floor(Math.random() * 4));
    }, 5000 + Math.random() * 8000); // Random interval between 5-13 seconds
    
    return () => clearInterval(intervalId);
  }, []);

  if (teamId === 1) {
    // Team 1 (Green) silhouettes
    if (currentPose === 0) {
      return (
        // Pose 0: Forehand strike with paddle
        <svg viewBox="0 0 100 160" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M45,25 C50,25 54,21 54,16 C54,11 50,7 45,7 C40,7 36,11 36,16 C36,21 40,25 45,25 Z" /> {/* Head */}
          <path d="M45,30 L35,50 L38,75 L42,80 L47,110 L52,110 L55,75 L58,70 L60,45 Z" /> {/* Torso */}
          <path d="M58,45 L80,30 L83,35 L65,55 Z" /> {/* Right arm with paddle */}
          <path d="M35,50 L20,65 L15,60 L25,45 Z" /> {/* Left arm */}
          <path d="M47,110 L35,155 L40,155 L50,125 L60,155 L65,155 L52,110 Z" /> {/* Legs */}
          <path d="M83,35 L90,25 L95,30 L88,40 Z" /> {/* Paddle */}
        </svg>
      );
    } else if (currentPose === 1) {
      return (
        // Pose 1: Ready position with paddle up
        <svg viewBox="0 0 100 160" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M50,25 C55,25 59,21 59,16 C59,11 55,7 50,7 C45,7 41,11 41,16 C41,21 45,25 50,25 Z" /> {/* Head */}
          <path d="M40,30 L60,30 L63,70 L50,75 L37,70 Z" /> {/* Torso */}
          <path d="M60,30 L70,20 L85,10 L90,15 L75,35 Z" /> {/* Right arm raised with paddle */}
          <path d="M40,30 L25,35 L15,25 L20,20 L35,25 Z" /> {/* Left arm */}
          <path d="M50,75 L35,115 L30,155 L40,155 L45,120 L55,120 L60,155 L70,155 L65,115 L50,75 Z" /> {/* Legs spread in ready position */}
          <path d="M85,10 L95,5 L100,10 L90,15 Z" /> {/* Paddle */}
        </svg>
      );
    } else if (currentPose === 2) {
      return (
        // Pose 2: Running position
        <svg viewBox="0 0 100 160" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M45,25 C50,25 54,21 54,16 C54,11 50,7 45,7 C40,7 36,11 36,16 C36,21 40,25 45,25 Z" /> {/* Head */}
          <path d="M45,30 L35,45 L40,70 L45,75 L50,105 L55,105 L60,70 L55,50 Z" /> {/* Torso leaning forward */}
          <path d="M55,50 L75,40 L80,45 L65,60 Z" /> {/* Right arm forward */}
          <path d="M35,45 L15,50 L10,45 L25,40 Z" /> {/* Left arm back with paddle */}
          <path d="M50,105 L70,125 L75,155 L65,155 L55,130 L35,145 L30,155 L20,155 L40,120 L50,105 Z" /> {/* Legs in running stride */}
          <path d="M15,50 L5,45 L0,50 L10,55 Z" /> {/* Paddle */}
        </svg>
      );
    } else {
      return (
        // Pose 3: Defensive position
        <svg viewBox="0 0 100 160" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M45,25 C50,25 54,21 54,16 C54,11 50,7 45,7 C40,7 36,11 36,16 C36,21 40,25 45,25 Z" /> {/* Head */}
          <path d="M45,30 L30,40 L35,70 L50,80 L65,70 L70,40 L55,30 Z" /> {/* Torso wider in defensive stance */}
          <path d="M30,40 L10,50 L5,45 L20,35 Z" /> {/* Left arm out with paddle */}
          <path d="M70,40 L90,50 L95,45 L80,35 Z" /> {/* Right arm out */}
          <path d="M50,80 L30,110 L25,155 L35,155 L45,120 L55,120 L65,155 L75,155 L70,110 L50,80 Z" /> {/* Legs in wide stance */}
          <path d="M10,50 L0,45 L0,50 L5,55 Z" /> {/* Paddle */}
        </svg>
      );
    }
  } else {
    // Team 2 (Blue) silhouettes
    if (currentPose === 0) {
      return (
        // Pose 0: Diving for ball
        <svg viewBox="0 0 100 160" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M20,30 C25,30 29,26 29,21 C29,16 25,12 20,12 C15,12 11,16 11,21 C11,26 15,30 20,30 Z" /> {/* Head */}
          <path d="M20,35 L50,40 L70,35 L65,55 L40,60 L25,45 Z" /> {/* Torso twisted */}
          <path d="M70,35 L85,45 L90,40 L80,30 Z" /> {/* Right arm */}
          <path d="M20,35 L5,55 L10,60 L25,45 Z" /> {/* Left arm with paddle */}
          <path d="M25,45 L40,60 L45,80 L50,110 L45,115 L30,90 L20,70 Z" /> {/* Legs in diving motion */}
          <path d="M5,55 L0,65 L5,70 L10,60 Z" /> {/* Paddle */}
        </svg>
      );
    } else if (currentPose === 1) {
      return (
        // Pose 1: Jumping to hit
        <svg viewBox="0 0 100 160" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M50,25 C55,25 59,21 59,16 C59,11 55,7 50,7 C45,7 41,11 41,16 C41,21 45,25 50,25 Z" /> {/* Head */}
          <path d="M50,30 L40,55 L45,80 L55,80 L60,55 Z" /> {/* Torso */}
          <path d="M60,55 L80,40 L85,45 L70,65 Z" /> {/* Right arm */}
          <path d="M40,55 L20,35 L15,40 L30,65 Z" /> {/* Left arm with paddle */}
          <path d="M45,80 L35,110 L40,130 L50,120 L60,130 L65,110 L55,80 Z" /> {/* Legs in jump position */}
          <path d="M20,35 L10,25 L5,30 L15,40 Z" /> {/* Paddle */}
        </svg>
      );
    } else if (currentPose === 2) {
      return (
        // Pose 2: Defensive ready position
        <svg viewBox="0 0 100 160" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M50,25 C55,25 59,21 59,16 C59,11 55,7 50,7 C45,7 41,11 41,16 C41,21 45,25 50,25 Z" /> {/* Head */}
          <path d="M40,35 L60,35 L65,70 L50,85 L35,70 Z" /> {/* Torso crouched */}
          <path d="M60,35 L80,25 L85,30 L70,45 Z" /> {/* Right arm with paddle */}
          <path d="M40,35 L20,25 L15,30 L30,45 Z" /> {/* Left arm */}
          <path d="M50,85 L30,100 L25,155 L35,155 L45,115 L55,115 L65,155 L75,155 L70,100 L50,85 Z" /> {/* Legs in wide stance */}
          <path d="M80,25 L90,15 L95,20 L85,30 Z" /> {/* Paddle */}
        </svg>
      );
    } else {
      return (
        // Pose 3: Overhead smash
        <svg viewBox="0 0 100 160" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M50,35 C55,35 59,31 59,26 C59,21 55,17 50,17 C45,17 41,21 41,26 C41,31 45,35 50,35 Z" /> {/* Head */}
          <path d="M50,40 L40,55 L35,90 L65,90 L60,55 Z" /> {/* Torso */}
          <path d="M60,55 L75,35 L95,15 L100,20 L85,45 Z" /> {/* Right arm raised for smash */}
          <path d="M40,55 L25,65 L20,60 L30,50 Z" /> {/* Left arm */}
          <path d="M35,90 L25,130 L30,155 L40,155 L45,115 L55,115 L60,155 L70,155 L75,130 L65,90 Z" /> {/* Legs in wide stance */}
          <path d="M95,15 L105,10 L110,15 L100,20 Z" /> {/* Paddle overhead */}
        </svg>
      );
    }
  }
};

export default PlayerSilhouette;
