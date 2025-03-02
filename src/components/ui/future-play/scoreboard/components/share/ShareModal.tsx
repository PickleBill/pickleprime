import React, { useState } from "react";
import { X, Share, Award } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import QuickShareTab from "./QuickShareTab";
import PremiumAnalyticsTab from "./PremiumAnalyticsTab";

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
  
  if (!isOpen) return null;

  const handleShare = () => {
    // In a real implementation, this would connect to the social media APIs
    console.log("Sharing to", selectedPlatform);
    console.log("Post text:", postText);
    console.log("Is scheduled:", isScheduling);
    if (isScheduling) {
      console.log("Schedule date:", scheduleDate);
      console.log("Schedule time:", scheduleTime);
    }
    
    // Close the modal
    onClose();
  };

  const handleScheduleToggle = () => {
    setIsScheduling(!isScheduling);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 animate-fade-in">
      <div className="relative bg-navy-dark/90 rounded-xl border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Share className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold text-white">Share Match Update</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Tabs */}
        <Tabs defaultValue="share" className="flex-1 flex flex-col h-full">
          <TabsList className="w-full border-b border-white/10 bg-navy-light/30 p-0 h-auto">
            <TabsTrigger 
              value="share" 
              className="flex-1 py-3 data-[state=active]:bg-navy-dark/60 data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
            >
              Quick Share
            </TabsTrigger>
            <TabsTrigger 
              value="premium" 
              className="flex-1 py-3 data-[state=active]:bg-navy-dark/60 data-[state=active]:border-b-2 data-[state=active]:border-[#FFD700] rounded-none relative overflow-hidden"
              onMouseEnter={() => setIsPremiumTabHovered(true)}
              onMouseLeave={() => setIsPremiumTabHovered(false)}
            >
              <span className="flex items-center gap-1">
                Premium Analytics
                <Award className="w-4 h-4 text-[#FFD700]" />
              </span>
              
              {/* Shimmer effect on hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-1000 ease-in-out ${isPremiumTabHovered ? 'translate-x-full' : '-translate-x-full'}`}
                style={{ transformOrigin: 'left' }}
              ></div>
            </TabsTrigger>
          </TabsList>
          
          {/* Share Tab Content */}
          <TabsContent value="share" className="flex-1 p-4 overflow-auto">
            <QuickShareTab 
              player1Score={player1Score}
              player2Score={player2Score}
              gameTime={gameTime}
              postText={postText}
              setPostText={setPostText}
              selectedPlatform={selectedPlatform}
              setSelectedPlatform={setSelectedPlatform}
              isScheduling={isScheduling}
              scheduleDate={scheduleDate}
              setScheduleDate={setScheduleDate}
              scheduleTime={scheduleTime}
              setScheduleTime={setScheduleTime}
              handleScheduleToggle={handleScheduleToggle}
            />
          </TabsContent>
          
          {/* Premium Tab Content */}
          <TabsContent value="premium" className="flex-1 p-4 overflow-auto">
            <PremiumAnalyticsTab />
          </TabsContent>
        </Tabs>
        
        {/* Footer */}
        <div className="p-4 border-t border-white/10 flex justify-between items-center">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-navy/40 hover:bg-navy/60 text-white/80 rounded-md text-sm transition-colors"
          >
            Cancel
          </button>
          
          <button 
            onClick={handleShare}
            className="px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded-md text-sm font-medium transition-colors flex items-center gap-1"
          >
            {isScheduling ? 'Schedule Post' : 'Share Now'}
            <Share className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
