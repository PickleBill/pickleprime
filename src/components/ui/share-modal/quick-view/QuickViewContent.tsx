
import React, { useState, useEffect } from "react";
import { Video, Activity, Trophy, BarChart2, Users, Settings } from "lucide-react";
import { AnimatePresence } from "framer-motion";

// Import view components
import VideoView from "./views/VideoView";
import AnalyticsView from "./views/AnalyticsView";
import TournamentsView from "./views/TournamentsView";
import StatsView from "./views/StatsView";
import ViewContainer from "./views/ViewContainer";

interface QuickViewContentProps {
  contentType: string | null;
  onClose: () => void;
}

const QuickViewContent: React.FC<QuickViewContentProps> = ({ 
  contentType, 
  onClose
}) => {
  // State for interactive features
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [volume, setVolume] = useState(80);
  const [selectedStat, setSelectedStat] = useState('all');
  const [selectedTimeRange, setSelectedTimeRange] = useState('match');

  // Add effect to handle Escape key
  useEffect(() => {
    if (!contentType) return;
    
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    
    // Clean up the event listener
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [contentType, onClose]);

  if (!contentType) return null;

  const getContent = () => {
    switch (contentType) {
      case 'video':
        return (
          <VideoView 
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            currentVideo={currentVideo}
            setCurrentVideo={setCurrentVideo}
            volume={volume}
            setVolume={setVolume}
          />
        );
        
      case 'analytics':
        return (
          <AnalyticsView 
            selectedStat={selectedStat}
            setSelectedStat={setSelectedStat}
            selectedTimeRange={selectedTimeRange}
            setSelectedTimeRange={setSelectedTimeRange}
          />
        );
        
      case 'tournaments':
        return (
          <TournamentsView />
        );
        
      case 'stats':
        return (
          <StatsView />
        );
        
      case 'community':
        return (
          <div className="bg-gradient-to-br from-navy-dark/90 to-navy/90 backdrop-blur-lg rounded-lg p-6 mb-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-[#9C27B0]/20">
                  <Users className="w-5 h-5 text-[#9C27B0]" />
                </div>
                <h3 className="text-lg font-semibold text-white">Community</h3>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-white/70">Connect with players, find partners, and join local events.</p>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-navy-light/30 backdrop-blur-sm border border-white/5 rounded-md p-3">
                  <h4 className="text-sm font-medium text-white/90 mb-2">Nearby Players</h4>
                  <div className="space-y-2">
                    {['Alex M.', 'Sarah K.', 'Jamie L.'].map((name, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"></div>
                        <span className="text-sm text-white">{name}</span>
                        <span className="text-xs text-white/50 ml-auto">2.3 mi</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-navy-light/30 backdrop-blur-sm border border-white/5 rounded-md p-3">
                  <h4 className="text-sm font-medium text-white/90 mb-2">Events</h4>
                  <div className="space-y-2">
                    {['Weekly Ladder', 'Skills Clinic', 'Mixer Night'].map((event, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#9C27B0]"></div>
                        <span className="text-sm text-white">{event}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-navy-light/30 backdrop-blur-sm border border-white/5 rounded-md p-3">
                <h4 className="text-sm font-medium text-white/90 mb-2">Discussion Board</h4>
                <div className="space-y-2">
                  {[
                    'Best paddle for spin?',
                    'Looking for a partner for Tuesday nights',
                    'Strategy tips for 4.0+ players'
                  ].map((topic, i) => (
                    <div key={i} className="p-2 bg-navy-dark/50 rounded">
                      <p className="text-sm text-white">{topic}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-white/50">12 replies</span>
                        <span className="text-xs text-white/50">3h ago</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'settings':
        return (
          <div className="bg-gradient-to-br from-navy-dark/90 to-navy/90 backdrop-blur-lg rounded-lg p-6 mb-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-[#2196F3]/20">
                  <Settings className="w-5 h-5 text-[#2196F3]" />
                </div>
                <h3 className="text-lg font-semibold text-white">Settings</h3>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-white/70">Customize your experience and manage account preferences.</p>
              
              <div className="space-y-3">
                <div className="bg-navy-light/30 backdrop-blur-sm border border-white/5 rounded-md p-3">
                  <h4 className="text-sm font-medium text-white/90 mb-3">Account</h4>
                  
                  <div className="space-y-3">
                    {['Profile', 'Subscriptions', 'Billing', 'Connected Accounts'].map((item, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-sm text-white">{item}</span>
                        <div className="w-5 h-5 rounded-full bg-navy-light/50 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70">
                            <path d="m9 18 6-6-6-6"/>
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-navy-light/30 backdrop-blur-sm border border-white/5 rounded-md p-3">
                  <h4 className="text-sm font-medium text-white/90 mb-3">Preferences</h4>
                  
                  <div className="space-y-3">
                    {[
                      { name: 'Notifications', enabled: true },
                      { name: 'Dark Mode', enabled: true },
                      { name: 'Stats Sharing', enabled: false }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-sm text-white">{item.name}</span>
                        <div className={`w-8 h-4 rounded-full flex items-center p-0.5 ${item.enabled ? 'bg-[#2196F3]' : 'bg-navy-light/50'}`}>
                          <div className={`w-3 h-3 rounded-full bg-white transform transition-transform ${item.enabled ? 'translate-x-4' : 'translate-x-0'}`}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-navy-light/30 backdrop-blur-sm border border-white/5 rounded-md p-3">
                  <h4 className="text-sm font-medium text-white/90 mb-3">Support</h4>
                  
                  <div className="space-y-3">
                    {['Help Center', 'Contact Support', 'Report an Issue', 'Privacy Policy'].map((item, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-sm text-white">{item}</span>
                        <div className="w-5 h-5 rounded-full bg-navy-light/50 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70">
                            <path d="m9 18 6-6-6-6"/>
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <ViewContainer onClose={onClose}>
        {getContent()}
      </ViewContainer>
    </AnimatePresence>
  );
};

export default QuickViewContent;
