
import React, { useState } from "react";
import { X, Calendar, Twitter, Facebook, Instagram, Share, ArrowRight, ExternalLink, Clock, TrendingUp, Users, Award } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
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
    
    // Show a toast or notification that the post was shared/scheduled
    // For now, just close the modal
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left column: Post creation */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white/90">Create Your Post</h3>
                
                {/* Platform selection */}
                <div className="space-y-2">
                  <label className="text-sm text-white/70">Select Platform</label>
                  <div className="flex gap-3">
                    <button 
                      onClick={() => setSelectedPlatform("twitter")}
                      className={`p-3 rounded-lg border ${selectedPlatform === "twitter" ? "border-primary bg-primary/10" : "border-white/20 hover:border-white/40"} transition-colors`}
                    >
                      <Twitter className="w-5 h-5 text-[#1DA1F2]" />
                    </button>
                    <button 
                      onClick={() => setSelectedPlatform("facebook")}
                      className={`p-3 rounded-lg border ${selectedPlatform === "facebook" ? "border-primary bg-primary/10" : "border-white/20 hover:border-white/40"} transition-colors`}
                    >
                      <Facebook className="w-5 h-5 text-[#4267B2]" />
                    </button>
                    <button 
                      onClick={() => setSelectedPlatform("instagram")}
                      className={`p-3 rounded-lg border ${selectedPlatform === "instagram" ? "border-primary bg-primary/10" : "border-white/20 hover:border-white/40"} transition-colors`}
                    >
                      <Instagram className="w-5 h-5 text-[#E1306C]" />
                    </button>
                  </div>
                </div>
                
                {/* Post text editor */}
                <div className="space-y-2">
                  <label className="text-sm text-white/70">Message</label>
                  <textarea 
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
                    className="w-full h-32 bg-navy-light/30 border border-white/20 rounded-lg p-3 text-white resize-none focus:border-primary focus:outline-none"
                    placeholder="What's happening in your match?"
                  />
                  <div className="flex justify-between text-xs text-white/50">
                    <span>{postText.length} characters</span>
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
                      onClick={handleScheduleToggle}
                      className={`relative w-10 h-5 rounded-full transition-colors ${isScheduling ? 'bg-primary' : 'bg-white/20'}`}
                    >
                      <span 
                        className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transform transition-transform ${isScheduling ? 'translate-x-5' : ''}`}
                      ></span>
                    </button>
                  </div>
                  
                  {isScheduling && (
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs text-white/70">Date</label>
                        <input 
                          type="date" 
                          value={scheduleDate}
                          onChange={(e) => setScheduleDate(e.target.value)}
                          className="w-full bg-navy-light/30 border border-white/20 rounded-lg p-2 text-white text-sm focus:border-primary focus:outline-none"
                          min={format(new Date(), 'yyyy-MM-dd')}
                        />
                      </div>
                      <div>
                        <label className="text-xs text-white/70">Time</label>
                        <input 
                          type="time" 
                          value={scheduleTime}
                          onChange={(e) => setScheduleTime(e.target.value)}
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
                    {postText}
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
                <div className="bg-gradient-to-r from-[#0C8068]/30 to-[#0FA0CE]/30 border border-[#FFD700]/20 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-md font-medium text-white/90 flex items-center gap-1">
                      <Award className="w-4 h-4 text-[#FFD700]" />
                      Premium Analytics
                    </h4>
                    <span className="text-xs bg-[#FFD700]/20 text-[#FFD700] px-2 py-0.5 rounded-full">PRO</span>
                  </div>
                  
                  <p className="text-sm text-white/70 mb-4">
                    Get deeper insights about your social reach, engagement metrics, and audience growth.
                  </p>
                  
                  <button 
                    onClick={() => {
                      const premiumTab = document.querySelector('[data-value="premium"]');
                      if (premiumTab) {
                        (premiumTab as HTMLElement).click();
                      }
                    }}
                    className="w-full py-2 bg-gradient-to-r from-[#0C8068] to-[#0FA0CE] text-white rounded-md text-sm font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-1"
                  >
                    Explore Premium Features
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Premium Tab Content */}
          <TabsContent value="premium" className="flex-1 p-4 overflow-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* First column - Social Engagement */}
              <div className="bg-navy-light/20 border border-white/10 rounded-lg p-4 space-y-4">
                <h3 className="text-lg font-medium text-white/90 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Engagement Metrics
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-white/70">Impressions</span>
                      <span className="text-sm font-medium text-white">12.4K</span>
                    </div>
                    <Progress value={78} className="h-2 bg-white/10" />
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-white/70">Engagement Rate</span>
                      <span className="text-sm font-medium text-white">7.2%</span>
                    </div>
                    <Progress value={72} className="h-2 bg-white/10" />
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-white/70">Click-through Rate</span>
                      <span className="text-sm font-medium text-white">3.8%</span>
                    </div>
                    <Progress value={38} className="h-2 bg-white/10" />
                  </div>
                </div>
                
                <div className="bg-navy/40 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-white/90 mb-2">Audience Growth</h4>
                  <div className="text-3xl font-bold text-white flex items-baseline gap-2">
                    +245
                    <span className="text-xs font-normal text-green-400">↑ 18.3%</span>
                  </div>
                  <p className="text-xs text-white/60 mt-1">New followers this week</p>
                </div>
              </div>
              
              {/* Second column - Player Social Feed */}
              <div className="bg-navy-light/20 border border-white/10 rounded-lg p-4 space-y-4">
                <h3 className="text-lg font-medium text-white/90 flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#0FA0CE]" />
                  Player Social Activity
                </h3>
                
                <div className="space-y-3">
                  <div className="bg-navy/40 p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-[#0C8068]"></div>
                      <div>
                        <p className="text-sm font-medium text-white">Alex Johnson</p>
                        <p className="text-xs text-white/60">@alexjpickleball</p>
                      </div>
                    </div>
                    <p className="text-sm text-white/80">
                      Excited for today's match! The preparation has been intense. #Pickleball #Championship
                    </p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-white/60">
                      <span>2h ago</span>
                      <span>•</span>
                      <span>345 likes</span>
                    </div>
                  </div>
                  
                  <div className="bg-navy/40 p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-[#0FA0CE]"></div>
                      <div>
                        <p className="text-sm font-medium text-white">Sarah Miller</p>
                        <p className="text-xs text-white/60">@sarahpickleballpro</p>
                      </div>
                    </div>
                    <p className="text-sm text-white/80">
                      Just finished the first set! Tough competition today. Thanks to all my fans for the support!
                    </p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-white/60">
                      <span>45m ago</span>
                      <span>•</span>
                      <span>129 likes</span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full py-2 bg-navy/40 hover:bg-navy/60 text-white/70 rounded-md text-sm transition-colors">
                  Show More Activity
                </button>
              </div>
              
              {/* Third column - Advanced Stats & Scheduling */}
              <div className="space-y-4">
                <div className="bg-navy-light/20 border border-white/10 rounded-lg p-4 space-y-3">
                  <h3 className="text-lg font-medium text-white/90 flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#FFD700]" />
                    Match Insights
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-navy/40 p-3 rounded-lg">
                      <p className="text-xs text-white/60">Top Ball Speed</p>
                      <p className="text-2xl font-bold text-white">72 mph</p>
                    </div>
                    <div className="bg-navy/40 p-3 rounded-lg">
                      <p className="text-xs text-white/60">Highlight Views</p>
                      <p className="text-2xl font-bold text-white">1.3K</p>
                    </div>
                    <div className="bg-navy/40 p-3 rounded-lg">
                      <p className="text-xs text-white/60">Sponsor Mentions</p>
                      <p className="text-2xl font-bold text-white">23</p>
                    </div>
                    <div className="bg-navy/40 p-3 rounded-lg">
                      <p className="text-xs text-white/60">Fan Engagement</p>
                      <p className="text-2xl font-bold text-white">86%</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-navy-light/20 border border-white/10 rounded-lg p-4 space-y-3">
                  <h3 className="text-lg font-medium text-white/90 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#0C8068]" />
                    Content Calendar
                  </h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-2 bg-navy/40 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-[#0FA0CE]"></div>
                      <div className="flex-1">
                        <p className="text-sm text-white/80">Match Recap</p>
                        <p className="text-xs text-white/60">Today, 8:00 PM</p>
                      </div>
                      <button className="text-white/60 hover:text-white">
                        <Calendar className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="flex items-center gap-3 p-2 bg-navy/40 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-[#0C8068]"></div>
                      <div className="flex-1">
                        <p className="text-sm text-white/80">Player Interview</p>
                        <p className="text-xs text-white/60">Tomorrow, 10:00 AM</p>
                      </div>
                      <button className="text-white/60 hover:text-white">
                        <Calendar className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  <button className="w-full py-2 bg-gradient-to-r from-[#0C8068] to-[#0FA0CE] text-white rounded-md text-sm font-medium hover:opacity-90 transition-opacity">
                    Schedule New Post
                  </button>
                </div>
                
                <div className="bg-gradient-to-r from-[#FFD700]/20 to-[#FFD700]/10 border border-[#FFD700]/30 rounded-lg p-4">
                  <h4 className="text-md font-medium text-white/90 mb-2">Upgrade to Premium</h4>
                  <p className="text-sm text-white/70 mb-3">
                    Get full access to all premium features including AI-powered content suggestions, competitor analysis, and more.
                  </p>
                  <button className="w-full py-2 bg-[#FFD700] text-navy-dark rounded-md text-sm font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-1">
                    Subscribe Now
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
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
