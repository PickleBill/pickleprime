
import React from "react";
import { toast } from "@/components/ui/use-toast";

interface SocialShareButtonsProps {
  onClose: () => void;
}

const SocialShareButtons: React.FC<SocialShareButtonsProps> = ({ onClose }) => {
  const handleShare = (platform: string) => {
    toast({
      title: `Shared to ${platform}!`,
      description: "Match update has been shared to your followers.",
      duration: 3000,
    });
    setTimeout(onClose, 500);
  };

  return (
    <div className="flex justify-center space-x-6">
      <button 
        onClick={() => handleShare('Twitter')}
        className="p-3 bg-[#1DA1F2]/20 hover:bg-[#1DA1F2]/30 rounded-full transition-colors text-white"
        aria-label="Share to Twitter"
      >
        <div className="w-10 h-10 rounded-full bg-[#1DA1F2] flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
          </svg>
        </div>
      </button>
      
      <button 
        onClick={() => handleShare('Facebook')}
        className="p-3 bg-[#1877F2]/20 hover:bg-[#1877F2]/30 rounded-full transition-colors text-white"
        aria-label="Share to Facebook"
      >
        <div className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </div>
      </button>
      
      <button 
        onClick={() => handleShare('Instagram')}
        className="p-3 bg-[#E1306C]/20 hover:bg-[#E1306C]/30 rounded-full transition-colors text-white"
        aria-label="Share to Instagram"
      >
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#405DE6] via-[#E1306C] to-[#FFDC80] flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </div>
      </button>
      
      <button 
        onClick={() => handleShare('Email')}
        className="p-3 bg-gray-500/20 hover:bg-gray-500/30 rounded-full transition-colors text-white"
        aria-label="Share via Email"
      >
        <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </div>
      </button>
    </div>
  );
};

export default SocialShareButtons;
