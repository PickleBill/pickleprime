
import React from 'react';

interface PlayerSilhouetteProps {
  teamId: number;
  playerIndex: number;
}

const PlayerSilhouette: React.FC<PlayerSilhouetteProps> = ({ teamId, playerIndex }) => {
  if (teamId === 1) {
    // Team 1 (Green) silhouettes
    return playerIndex === 0 ? (
      // Team 1, Player 1 - forehand strike with paddle
      <svg viewBox="0 0 100 160" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M45,25 C50,25 54,21 54,16 C54,11 50,7 45,7 C40,7 36,11 36,16 C36,21 40,25 45,25 Z" /> {/* Head */}
        <path d="M45,30 L35,50 L38,75 L42,80 L47,110 L52,110 L55,75 L58,70 L60,45 Z" /> {/* Torso */}
        <path d="M58,45 L80,30 L83,35 L65,55 Z" /> {/* Right arm with paddle */}
        <path d="M35,50 L20,65 L15,60 L25,45 Z" /> {/* Left arm */}
        <path d="M47,110 L35,155 L40,155 L50,125 L60,155 L65,155 L52,110 Z" /> {/* Legs */}
        <path d="M83,35 L90,25 L95,30 L88,40 Z" /> {/* Paddle */}
      </svg>
    ) : (
      // Team 1, Player 2 - ready position with paddle up
      <svg viewBox="0 0 100 160" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M50,25 C55,25 59,21 59,16 C59,11 55,7 50,7 C45,7 41,11 41,16 C41,21 45,25 50,25 Z" /> {/* Head */}
        <path d="M40,30 L60,30 L63,70 L50,75 L37,70 Z" /> {/* Torso */}
        <path d="M60,30 L70,20 L85,10 L90,15 L75,35 Z" /> {/* Right arm raised with paddle */}
        <path d="M40,30 L25,35 L15,25 L20,20 L35,25 Z" /> {/* Left arm */}
        <path d="M50,75 L35,115 L30,155 L40,155 L45,120 L55,120 L60,155 L70,155 L65,115 L50,75 Z" /> {/* Legs spread in ready position */}
        <path d="M85,10 L95,5 L100,10 L90,15 Z" /> {/* Paddle */}
      </svg>
    );
  } else {
    // Team 2 (Blue) silhouettes
    return playerIndex === 0 ? (
      // Team 2, Player 1 - diving for ball
      <svg viewBox="0 0 100 160" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M20,30 C25,30 29,26 29,21 C29,16 25,12 20,12 C15,12 11,16 11,21 C11,26 15,30 20,30 Z" /> {/* Head */}
        <path d="M20,35 L50,40 L70,35 L65,55 L40,60 L25,45 Z" /> {/* Torso twisted */}
        <path d="M70,35 L85,45 L90,40 L80,30 Z" /> {/* Right arm */}
        <path d="M20,35 L5,55 L10,60 L25,45 Z" /> {/* Left arm with paddle */}
        <path d="M25,45 L40,60 L45,80 L50,110 L45,115 L30,90 L20,70 Z" /> {/* Legs in diving motion */}
        <path d="M5,55 L0,65 L5,70 L10,60 Z" /> {/* Paddle */}
      </svg>
    ) : (
      // Team 2, Player 2 - jumping to hit
      <svg viewBox="0 0 100 160" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M50,25 C55,25 59,21 59,16 C59,11 55,7 50,7 C45,7 41,11 41,16 C41,21 45,25 50,25 Z" /> {/* Head */}
        <path d="M50,30 L40,55 L45,80 L55,80 L60,55 Z" /> {/* Torso */}
        <path d="M60,55 L80,40 L85,45 L70,65 Z" /> {/* Right arm */}
        <path d="M40,55 L20,35 L15,40 L30,65 Z" /> {/* Left arm with paddle */}
        <path d="M45,80 L35,110 L40,130 L50,120 L60,130 L65,110 L55,80 Z" /> {/* Legs in jump position */}
        <path d="M20,35 L10,25 L5,30 L15,40 Z" /> {/* Paddle */}
      </svg>
    );
  }
};

export default PlayerSilhouette;
