
import React, { useState, useEffect } from 'react';
import { Position } from '../types';
import { playerConfig } from '../constants/courtConfig';

interface PlayersProps {
  player1: Position;
  player2: Position;
  player3: Position;
  player4: Position;
}

const Players: React.FC<PlayersProps> = ({
  player1,
  player2,
  player3,
  player4
}) => {
  // State for player actions - randomly triggered effects
  const [playerActions, setPlayerActions] = useState({
    player1Action: '',
    player2Action: '',
    player3Action: '',
    player4Action: ''
  });
  
  // Trigger random player celebrations/actions
  useEffect(() => {
    const actionInterval = setInterval(() => {
      // 5% chance per player to trigger a celebration or action
      if (Math.random() < 0.05) {
        const playerIndex = Math.floor(Math.random() * 4) + 1;
        const actions = ['celebrate', 'dive', 'jump', 'tired'];
        const randomAction = actions[Math.floor(Math.random() * actions.length)];
        
        setPlayerActions(prev => ({
          ...prev,
          [`player${playerIndex}Action`]: randomAction
        }));
        
        // Clear the action after a short delay
        setTimeout(() => {
          setPlayerActions(prev => ({
            ...prev,
            [`player${playerIndex}Action`]: ''
          }));
        }, 1200);
      }
    }, 2000);
    
    return () => clearInterval(actionInterval);
  }, []);
  
  // Function to get more vibrant neon colors for each player
  const getPlayerColor = (teamId: number, playerIndex: number) => {
    // More vibrant neon colors
    const team1Colors = ["#4AFF5E", "#33FF99"]; // Bright neon green variations
    const team2Colors = ["#8B5CF6", "#0EA5E9"]; // Vivid purple and ocean blue for better contrast
    
    const playerColors = teamId === 1 ? team1Colors : team2Colors;
    return playerColors[playerIndex % playerColors.length];
  };
  
  // Get action-specific styles
  const getActionStyles = (playerNum: number, action: string) => {
    if (!action) return {};
    
    // Different animations based on action type
    switch(action) {
      case 'celebrate':
        return {
          transform: 'scale(1.2) translateY(-5px)',
          filter: 'brightness(1.3)',
          transition: 'all 0.3s ease-in-out'
        };
      case 'dive':
        return {
          transform: 'rotate(45deg) translateX(5px)',
          transition: 'all 0.2s ease-in-out'
        };
      case 'jump':
        return {
          transform: 'translateY(-10px)',
          transition: 'all 0.2s ease-in-out'
        };
      case 'tired':
        return {
          transform: 'scale(0.9)',
          opacity: 0.8,
          transition: 'all 0.3s ease-in-out'
        };
      default:
        return {};
    }
  };
  
  // Render a player with silhouette style
  const renderPlayer = (position: Position, teamId: number, playerLabel: string, playerIndex: number, playerAction: string) => {
    const playerColor = getPlayerColor(teamId, playerIndex);
    const glowColor = teamId === 1 
      ? "rgba(74, 255, 94, 0.6)" // Bright green glow
      : "rgba(139, 92, 246, 0.6)"; // Vivid purple glow for team 2
    
    // Label background color - using team colors
    const labelBgColor = teamId === 1 
      ? "rgba(74, 255, 94, 0.8)" // Green team label background
      : "rgba(139, 92, 246, 0.8)"; // Purple team label background
    
    // Label text color - darker for better contrast
    const labelTextColor = teamId === 1 
      ? "#004D00" // Dark green for green team labels
      : "#2E1065"; // Dark purple for blue team labels
    
    // Shadow properties for better visibility
    const shadowStyle = {
      filter: `drop-shadow(0 0 8px ${teamId === 1 ? 'rgba(0, 77, 0, 0.7)' : 'rgba(46, 16, 101, 0.7)'})`,
      WebkitFilter: `drop-shadow(0 0 8px ${teamId === 1 ? 'rgba(0, 77, 0, 0.7)' : 'rgba(46, 16, 101, 0.7)'})`
    };
    
    // Get action-specific styles
    const actionStyles = getActionStyles(playerIndex, playerAction);
    
    // Render action effect bubble when player has an action
    const renderActionBubble = () => {
      if (!playerAction) return null;
      
      const actionEmoji = playerAction === 'celebrate' ? '🎉' : 
                          playerAction === 'dive' ? '💨' : 
                          playerAction === 'jump' ? '⤴️' : '😓';
      
      return (
        <div className="absolute -top-5 -right-2 animate-bounce bg-white rounded-full px-1.5 py-0.5 text-xs">
          {actionEmoji}
        </div>
      );
    };
    
    return (
      <div className="absolute" style={{ 
        left: `${position.x}%`, 
        top: `${position.y}%`,
        transform: 'translate(-50%, -50%)',
        zIndex: 10
      }}>
        {/* Glow effect */}
        <div 
          className="absolute rounded-full"
          style={{ 
            width: `${playerConfig.glowSize * 1.15}px`, // Increased by 15%
            height: `${playerConfig.glowSize * 1.15}px`, // Increased by 15%
            backgroundColor: glowColor,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(6px)',
            opacity: playerConfig.glowOpacity + 0.1, // Slightly increased opacity
            zIndex: 5
          }}
        />
        
        {/* Player silhouette */}
        <div 
          className="relative flex items-center justify-center"
          style={{ 
            width: `${playerConfig.size * 4 * 1.15}px`, // Increased by 15%
            height: `${playerConfig.size * 6 * 1.15}px`, // Increased by 15%
            zIndex: 10,
            opacity: playerConfig.opacity,
            ...shadowStyle, // Added shadow
            ...actionStyles // Add action-specific styles
          }}
        >
          {/* Action bubble */}
          {renderActionBubble()}
          
          {/* SVG silhouette of a pickleball player - more detailed with action poses */}
          <div className="w-full h-full" style={{ color: playerColor }}>
            {getPlayerSilhouette(teamId, playerIndex)}
          </div>
          
          {/* Player label */}
          <div 
            className="absolute bottom-0 text-center text-[8px] font-bold rounded-sm px-1"
            style={{ 
              width: "100%", 
              backgroundColor: labelBgColor,
              color: labelTextColor,
              boxShadow: "0 2px 4px rgba(0,0,0,0.3)" // Added shadow to label
            }}
          >
            {playerLabel}
          </div>
        </div>
      </div>
    );
  };
  
  // Helper function to get detailed player silhouette based on team and position
  const getPlayerSilhouette = (teamId: number, playerIndex: number) => {
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

  return (
    <>
      {renderPlayer(player1, 1, "P1", 0, playerActions.player1Action)} {/* Green team player 1 - top left */}
      {renderPlayer(player2, 1, "P2", 1, playerActions.player2Action)} {/* Green team player 2 - bottom left */}
      {renderPlayer(player3, 2, "P3", 0, playerActions.player3Action)} {/* Blue team player 3 - top right */}
      {renderPlayer(player4, 2, "P4", 1, playerActions.player4Action)} {/* Blue team player 4 - bottom right */}
    </>
  );
};

export default Players;
