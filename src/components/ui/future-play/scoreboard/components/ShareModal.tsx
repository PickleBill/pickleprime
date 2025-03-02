
import React, { useState, useEffect } from "react";
import { Tabs } from "@/components/ui/tabs";
import ModalHeader from "./share-modal/ModalHeader";
import ShareFooter from "./share-modal/ShareFooter";
import ShareTabs from "./share-modal/ShareTabs";
import TabsHeader from "./share-modal/TabsHeader";
import { format } from "date-fns";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  player1Score: number;
  player2Score: number;
  gameTime: number;
}

const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  player1Score,
  player2Score,
  gameTime
}) => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("twitter");
  const [postText, setPostText] = useState(`Match update: Team A ${player1Score} - Team B ${player2Score} after ${Math.floor(gameTime / 60)}:${(gameTime % 60).toString().padStart(2, '0')} of play! #Pickleball #CourtVisionary`);
  const [isScheduling, setIsScheduling] = useState(false);
  const [scheduleDate, setScheduleDate] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");
  const [isPremiumTabHovered, setIsPremiumTabHovered] = useState(false);
  
  useEffect(() => {
    if (!isOpen) return;
    
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;

  const handleShare = () => {
    console.log("Sharing to", selectedPlatform);
    console.log("Post text:", postText);
    console.log("Is scheduled:", isScheduling);
    if (isScheduling) {
      console.log("Schedule date:", scheduleDate);
      console.log("Schedule time:", scheduleTime);
    }
    onClose();
  };

  const handleScheduleToggle = () => {
    setIsScheduling(!isScheduling);
  };

  const handlePremiumTabClick = () => {
    const premiumTab = document.querySelector('[data-value="premium"]');
    if (premiumTab) {
      (premiumTab as HTMLElement).click();
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-navy-dark/90 rounded-xl border border-white/10 w-full max-w-3xl max-h-[85vh] overflow-hidden flex flex-col">
        {/* Header */}
        <ModalHeader onClose={onClose} />
        
        {/* Tabs */}
        <Tabs defaultValue="share" className="flex-1 flex flex-col h-full">
          <TabsHeader onPremiumTabHover={setIsPremiumTabHovered} />
          
          {/* Tab Content */}
          <ShareTabs 
            selectedPlatform={selectedPlatform}
            setSelectedPlatform={setSelectedPlatform}
            postText={postText}
            setPostText={setPostText}
            isScheduling={isScheduling}
            handleScheduleToggle={handleScheduleToggle}
            scheduleDate={scheduleDate}
            setScheduleDate={setScheduleDate}
            scheduleTime={scheduleTime}
            setScheduleTime={setScheduleTime}
            player1Score={player1Score}
            player2Score={player2Score}
            gameTime={gameTime}
            onPremiumTabClick={handlePremiumTabClick}
          />
        </Tabs>
        
        {/* Footer */}
        <ShareFooter 
          onClose={onClose} 
          handleShare={handleShare} 
          isScheduling={isScheduling} 
        />

        {/* Premium tab shimmer effect */}
        <div 
          className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-1000 ease-in-out ${isPremiumTabHovered ? 'translate-x-full' : '-translate-x-full'}`}
          style={{ transformOrigin: 'left', pointerEvents: 'none', zIndex: -1 }}
        ></div>
      </div>
    </div>
  );
};

export default ShareModal;
