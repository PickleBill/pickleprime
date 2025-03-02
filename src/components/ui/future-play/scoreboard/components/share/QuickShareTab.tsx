
import React, { useState } from "react";
import { Twitter, Facebook, Instagram, Calendar, Award } from "lucide-react";
import { format } from "date-fns";
import PremiumTeaser from "./PremiumTeaser";

interface QuickShareTabProps {
  player1Score?: number;
  player2Score?: number;
  gameTime?: number;
  postText?: string;
  setPostText?: (text: string) => void;
  selectedPlatform?: string;
  setSelectedPlatform?: (platform: string) => void;
  isScheduling?: boolean;
  scheduleDate?: string;
  setScheduleDate?: (date: string) => void;
  scheduleTime?: string;
  setScheduleTime?: (time: string) => void;
  handleScheduleToggle?: () => void;
  isMatchShare?: boolean;
}

const QuickShareTab: React.FC<QuickShareTabProps> = ({
  player1Score = 0,
  player2Score = 0,
  gameTime = 0,
  postText = "",
  setPostText = () => {},
  selectedPlatform = "twitter",
  setSelectedPlatform = () => {},
  isScheduling = false,
  scheduleDate = format(new Date(), 'yyyy-MM-dd'),
  setScheduleDate = () => {},
  scheduleTime = "12:00",
  setScheduleTime = () => {},
  handleScheduleToggle = () => {},
  isMatchShare = false
}) => {
  // Use local state if no props are provided (for standalone usage)
  const [localPostText, setLocalPostText] = useState(postText);
  const [localSelectedPlatform, setLocalSelectedPlatform] = useState(selectedPlatform);
  const [localIsScheduling, setLocalIsScheduling] = useState(isScheduling);
  const [localScheduleDate, setLocalScheduleDate] = useState(scheduleDate);
  const [localScheduleTime, setLocalScheduleTime] = useState(scheduleTime);

  // Use either prop methods or local state methods
  const handlePostTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostText(e.target.value);
    setLocalPostText(e.target.value);
  };

  const handlePlatformSelect = (platform: string) => {
    setSelectedPlatform(platform);
    setLocalSelectedPlatform(platform);
  };

  const handleLocalScheduleToggle = () => {
    handleScheduleToggle();
    setLocalIsScheduling(!localIsScheduling);
  };

  const handleLocalScheduleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScheduleDate(e.target.value);
    setLocalScheduleDate(e.target.value);
  };

  const handleLocalScheduleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScheduleTime(e.target.value);
    setLocalScheduleTime(e.target.value);
  };

  // Use the actual or local state values
  const displayPostText = setPostText === (() => {}) ? localPostText : postText;
  const displaySelectedPlatform = setSelectedPlatform === (() => {}) ? localSelectedPlatform : selectedPlatform;
  const displayIsScheduling = handleScheduleToggle === (() => {}) ? localIsScheduling : isScheduling;
  const displayScheduleDate = setScheduleDate === (() => {}) ? localScheduleDate : scheduleDate;
  const displayScheduleTime = setScheduleTime === (() => {}) ? localScheduleTime : scheduleTime;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Left column: Post creation */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-white/90">Create Your Post</h3>
        
        {/* Platform selection */}
        <div className="space-y-2">
          <label className="text-sm text-white/70">Select Platform</label>
          <div className="flex gap-3">
            <button 
              onClick={() => handlePlatformSelect("twitter")}
              className={`p-3 rounded-lg border ${displaySelectedPlatform === "twitter" ? "border-[#1DA1F2] bg-[#1DA1F2]/10" : "border-white/20 hover:border-white/40"} transition-colors`}
            >
              <Twitter className="w-5 h-5 text-[#1DA1F2]" />
            </button>
            <button 
              onClick={() => handlePlatformSelect("facebook")}
              className={`p-3 rounded-lg border ${displaySelectedPlatform === "facebook" ? "border-[#4267B2] bg-[#4267B2]/10" : "border-white/20 hover:border-white/40"} transition-colors`}
            >
              <Facebook className="w-5 h-5 text-[#4267B2]" />
            </button>
            <button 
              onClick={() => handlePlatformSelect("instagram")}
              className={`p-3 rounded-lg border ${displaySelectedPlatform === "instagram" ? "border-[#E1306C] bg-[#E1306C]/10" : "border-white/20 hover:border-white/40"} transition-colors`}
            >
              <Instagram className="w-5 h-5 text-[#E1306C]" />
            </button>
          </div>
        </div>
        
        {/* Post text editor */}
        <div className="space-y-2">
          <label className="text-sm text-white/70">Message</label>
          <textarea 
            value={displayPostText}
            onChange={handlePostTextChange}
            className="w-full h-32 bg-navy-light/30 border border-white/20 rounded-lg p-3 text-white resize-none focus:border-primary focus:outline-none"
            placeholder="What's happening in your match?"
          />
          <div className="flex justify-between text-xs text-white/50">
            <span>{displayPostText.length} characters</span>
            <span>Hashtags: #Pickleball #CourtVisionary</span>
          </div>
        </div>
        
        {/* Scheduling */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm text-white/70 flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              Schedule for later
            </label>
            <button 
              onClick={handleLocalScheduleToggle}
              className={`relative w-10 h-5 rounded-full transition-colors ${displayIsScheduling ? 'bg-primary' : 'bg-white/20'}`}
            >
              <span 
                className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transform transition-transform ${displayIsScheduling ? 'translate-x-5' : ''}`}
              ></span>
            </button>
          </div>
          
          {displayIsScheduling && (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-white/70">Date</label>
                <input 
                  type="date" 
                  value={displayScheduleDate}
                  onChange={handleLocalScheduleDateChange}
                  className="w-full bg-navy-light/30 border border-white/20 rounded-lg p-2 text-white text-sm focus:border-primary focus:outline-none"
                  min={format(new Date(), 'yyyy-MM-dd')}
                />
              </div>
              <div>
                <label className="text-xs text-white/70">Time</label>
                <input 
                  type="time" 
                  value={displayScheduleTime}
                  onChange={handleLocalScheduleTimeChange}
                  className="w-full bg-navy-light/30 border border-white/20 rounded-lg p-2 text-white text-sm focus:border-primary focus:outline-none"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Right column: Preview and info */}
      <div className="space-y-6">
        <div className="bg-navy-light/20 border border-white/10 rounded-lg p-4 space-y-3">
          <h4 className="text-md font-medium text-white/90">Post Preview</h4>
          <div className="bg-white/5 rounded-lg p-3 text-white/80 text-sm">
            {displayPostText || "Check out my match on CourtVisionary!"}
          </div>
          <div className="bg-white/5 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-br from-navy-light/30 to-primary/10 p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="text-xl font-bold text-white">
                  {player1Score} - {player2Score}
                </div>
                <div className="text-xs text-white/70">
                  Match Time: {Math.floor(gameTime / 60)}:{(gameTime % 60).toString().padStart(2, '0')}
                </div>
              </div>
            </div>
            <div className="p-2 bg-navy/50 text-xs text-white/60 flex items-center justify-center">
              <span>Live on CourtVisionary</span>
            </div>
          </div>
        </div>
        
        {/* Premium teaser card */}
        <PremiumTeaser />
      </div>
    </div>
  );
};

export default QuickShareTab;
