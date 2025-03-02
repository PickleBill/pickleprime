
import React from "react";
import { toast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

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

  // Define social platforms with their icons and colors
  const socialPlatforms = [
    { 
      name: 'Twitter', 
      color: '#1DA1F2',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
      )
    },
    { 
      name: 'Facebook', 
      color: '#1877F2',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      )
    },
    { 
      name: 'Instagram', 
      color: '#E1306C',
      gradient: 'from-[#405DE6] via-[#E1306C] to-[#FFDC80]',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    { 
      name: 'Email', 
      color: '#6B7280',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      )
    },
    { 
      name: 'WhatsApp', 
      color: '#25D366',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      color: '#0A66C2',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    }
  ];

  return (
    <div className="flex justify-center space-x-4">
      {socialPlatforms.map((platform, index) => (
        <motion.button 
          key={platform.name} 
          onClick={() => handleShare(platform.name)}
          className="group transition-transform"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          aria-label={`Share to ${platform.name}`}
        >
          <div 
            className={`w-12 h-12 rounded-full flex items-center justify-center ${platform.gradient ? `bg-gradient-to-tr ${platform.gradient}` : ''}`}
            style={{ backgroundColor: platform.gradient ? undefined : platform.color }}
          >
            {platform.icon}
          </div>
          <div className="opacity-0 group-hover:opacity-100 text-xs text-white/70 text-center mt-1 transition-opacity">
            {platform.name}
          </div>
        </motion.button>
      ))}
    </div>
  );
};

export default SocialShareButtons;
