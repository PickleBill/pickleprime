
import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import PostCreation from "./PostCreation";
import PostPreview from "./PostPreview";
import PremiumTab from "./PremiumTab";

interface ShareTabsProps {
  selectedPlatform: string;
  setSelectedPlatform: (platform: string) => void;
  postText: string;
  setPostText: (text: string) => void;
  isScheduling: boolean;
  handleScheduleToggle: () => void;
  scheduleDate: string;
  setScheduleDate: (date: string) => void;
  scheduleTime: string;
  setScheduleTime: (time: string) => void;
  player1Score: number;
  player2Score: number;
  gameTime: number;
  onPremiumTabClick: () => void;
}

const ShareTabs: React.FC<ShareTabsProps> = ({
  selectedPlatform,
  setSelectedPlatform,
  postText,
  setPostText,
  isScheduling,
  handleScheduleToggle,
  scheduleDate,
  setScheduleDate,
  scheduleTime,
  setScheduleTime,
  player1Score,
  player2Score,
  gameTime,
  onPremiumTabClick
}) => {
  return (
    <>
      <TabsContent value="share" className="flex-1 p-4 overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left column: Post creation */}
          <PostCreation 
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
          />
          
          {/* Right column: Preview and info */}
          <PostPreview 
            postText={postText}
            player1Score={player1Score}
            player2Score={player2Score}
            gameTime={gameTime}
            onPremiumClick={onPremiumTabClick}
          />
        </div>
      </TabsContent>
      
      {/* Premium Tab Content */}
      <TabsContent value="premium" className="flex-1 p-4 overflow-auto">
        <PremiumTab />
      </TabsContent>
    </>
  );
};

export default ShareTabs;
