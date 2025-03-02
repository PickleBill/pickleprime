
import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Share } from "lucide-react";

interface ShareMatchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShareMatchModal: React.FC<ShareMatchModalProps> = ({ isOpen, onClose }) => {
  const [gameTime, setGameTime] = useState(180); // 3 minutes in seconds
  const [player1Score, setPlayer1Score] = useState(20);
  const [player2Score, setPlayer2Score] = useState(18);

  const handleShare = (platform: string) => {
    toast({
      title: `Shared to ${platform}!`,
      description: "Match update has been shared to your followers.",
      duration: 3000,
    });
    setTimeout(onClose, 500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-navy-dark/90 backdrop-blur-md rounded-xl w-full max-w-lg overflow-hidden flex flex-col border border-white/10">
        {/* Header */}
        <div className="p-4 bg-navy-light/40 text-white flex justify-between items-center border-b border-white/10">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Share className="w-5 h-5" />
            Share Match Update
          </h2>
          <button 
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18"></path>
              <path d="M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="bg-navy/80 rounded-lg p-4 mb-6 border border-white/10">
            <h3 className="text-lg font-semibold text-primary mb-3">Match Status</h3>
            <div className="flex justify-between items-center mb-4">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold mx-auto mb-1">A</div>
                <p className="text-white">Team A</p>
                <p className="text-2xl font-bold text-white">{player1Score}</p>
              </div>
              
              <div className="text-white text-opacity-70">
                <div className="text-sm">Time Played</div>
                <div className="text-center font-mono">
                  {Math.floor(gameTime / 60)}:{gameTime % 60 < 10 ? '0' + gameTime % 60 : gameTime % 60}
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mx-auto mb-1">B</div>
                <p className="text-white">Team B</p>
                <p className="text-2xl font-bold text-white">{player2Score}</p>
              </div>
            </div>
            
            <div className="mb-4">
              <label className="text-white text-sm mb-1 block">Customize message</label>
              <textarea 
                className="w-full p-3 rounded-md bg-navy border border-white/20 text-white"
                rows={2}
                defaultValue={`Match update: Team A ${player1Score} - Team B ${player2Score} after an intense game! #Pickleball #CourtVisionary`}
              />
            </div>
          </div>
          
          <h3 className="text-lg font-semibold text-white mb-3">Share to</h3>
          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={() => handleShare('Twitter')}
              className="flex items-center gap-2 p-3 bg-[#1DA1F2]/20 hover:bg-[#1DA1F2]/30 rounded-lg transition-colors text-white"
            >
              <div className="w-8 h-8 rounded-full bg-[#1DA1F2] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </div>
              Twitter
            </button>
            
            <button 
              onClick={() => handleShare('Facebook')}
              className="flex items-center gap-2 p-3 bg-[#1877F2]/20 hover:bg-[#1877F2]/30 rounded-lg transition-colors text-white"
            >
              <div className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </div>
              Facebook
            </button>
            
            <button 
              onClick={() => handleShare('Instagram')}
              className="flex items-center gap-2 p-3 bg-[#E1306C]/20 hover:bg-[#E1306C]/30 rounded-lg transition-colors text-white"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#405DE6] via-[#E1306C] to-[#FFDC80] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              Instagram
            </button>
            
            <button 
              onClick={() => handleShare('Email')}
              className="flex items-center gap-2 p-3 bg-gray-500/20 hover:bg-gray-500/30 rounded-lg transition-colors text-white"
            >
              <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              Email
            </button>
          </div>
        </div>
        
        {/* Footer */}
        <div className="p-4 border-t border-white/10 flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-navy-light/50 hover:bg-navy-light/70 text-white rounded-md transition-colors mr-2"
          >
            Cancel
          </button>
          <button 
            onClick={() => {
              toast({
                title: "Match update saved!",
                description: "Your match update has been saved as a draft.",
                duration: 3000,
              });
              setTimeout(onClose, 500);
            }}
            className="px-4 py-2 bg-primary/80 hover:bg-primary text-white rounded-md transition-colors"
          >
            Save as Draft
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareMatchModal;
