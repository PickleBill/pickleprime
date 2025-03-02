
import React from "react";
import { TrendingUp, Users, Award, Clock, Share2 } from "lucide-react";

interface SocialMediaDashboardProps {
  openShareModal: () => void;
  openAdvancedShareModal: () => void;
}

const SocialMediaDashboard: React.FC<SocialMediaDashboardProps> = ({ 
  openShareModal, 
  openAdvancedShareModal 
}) => {
  return (
    <section className="py-16 bg-navy-dark">
      <div className="container">
        <div className="p-4 bg-navy-light/40 backdrop-blur-md text-white flex justify-between items-center rounded-t-xl border-b border-white/10 mb-6">
          <h2 className="text-xl sm:text-2xl font-bold">Community Connection Conduit</h2>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-sm text-white/70">Live Preview</span>
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-navy-light/30 backdrop-blur-md rounded-xl p-6 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Social Activity
            </h3>
            <div className="space-y-4">
              <div className="bg-navy-dark/80 rounded-lg p-4 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </div>
                    <span className="text-white">Twitter</span>
                  </div>
                  <span className="text-white/80 text-sm">2 minutes ago</span>
                </div>
                <p className="text-white/80 p-3 bg-navy/60 rounded-md text-sm">
                  Match update: Team A 20 - Team B 18 after an intense game! #Pickleball #CourtVisionary
                </p>
                <div className="mt-3 flex gap-3 text-white/60 text-xs">
                  <span>12 Likes</span>
                  <span>3 Retweets</span>
                </div>
              </div>
              
              <div className="bg-navy-dark/80 rounded-lg p-4 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </div>
                    <span className="text-white">Facebook</span>
                  </div>
                  <span className="text-white/80 text-sm">1 hour ago</span>
                </div>
                <p className="text-white/80 p-3 bg-navy/60 rounded-md text-sm">
                  Excited to share my new personal best! Thanks to SwingNet analytics for helping me improve my game.
                </p>
                <div className="mt-3 flex gap-3 text-white/60 text-xs">
                  <span>38 Likes</span>
                  <span>7 Comments</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-navy-light/30 backdrop-blur-md rounded-xl p-6 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-[#0FA0CE]" />
              Friend Activity
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-navy-dark/80 rounded-lg border border-white/10">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">M</div>
                <div className="flex-1">
                  <p className="text-white">Michael joined your match!</p>
                  <p className="text-white/60 text-sm">Just now</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-navy-dark/80 rounded-lg border border-white/10">
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">S</div>
                <div className="flex-1">
                  <p className="text-white">Sarah liked your highlight</p>
                  <p className="text-white/60 text-sm">5 minutes ago</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-navy-dark/80 rounded-lg border border-white/10">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">J</div>
                <div className="flex-1">
                  <p className="text-white">Jason commented on your game</p>
                  <p className="text-white/60 text-sm">25 minutes ago</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-navy-dark/80 rounded-lg border border-white/10">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">K</div>
                <div className="flex-1">
                  <p className="text-white">Kate shared your match results</p>
                  <p className="text-white/60 text-sm">1 hour ago</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-navy-light/30 backdrop-blur-md rounded-xl p-6 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#FFD700]" />
              Community Engagement
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-navy-dark/80 rounded-lg p-4 border border-white/10 text-center">
                <h4 className="text-sm font-semibold text-[#4CAF50] mb-1">Shares</h4>
                <p className="text-2xl font-bold text-white">24</p>
                <p className="text-white/60 text-xs">Last 7 days</p>
              </div>
              
              <div className="bg-navy-dark/80 rounded-lg p-4 border border-white/10 text-center">
                <h4 className="text-sm font-semibold text-[#FFC107] mb-1">Highlights</h4>
                <p className="text-2xl font-bold text-white">12</p>
                <p className="text-white/60 text-xs">Created</p>
              </div>
              
              <div className="bg-navy-dark/80 rounded-lg p-4 border border-white/10 text-center">
                <h4 className="text-sm font-semibold text-[#FF5722] mb-1">Reach</h4>
                <p className="text-2xl font-bold text-white">1.2k</p>
                <p className="text-white/60 text-xs">Impressions</p>
              </div>
            </div>
            
            <div className="bg-navy-dark/80 rounded-lg p-4 border border-white/10">
              <h4 className="text-lg font-semibold text-[#0C8068] mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Upcoming Events
              </h4>
              
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-2 bg-navy/60 rounded-md">
                  <div className="w-2 h-2 rounded-full bg-[#0FA0CE]"></div>
                  <div>
                    <p className="text-white text-sm">Community Tournament</p>
                    <p className="text-white/60 text-xs">Tomorrow, 10:00 AM</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-2 bg-navy/60 rounded-md">
                  <div className="w-2 h-2 rounded-full bg-[#0C8068]"></div>
                  <div>
                    <p className="text-white text-sm">Skills Workshop</p>
                    <p className="text-white/60 text-xs">Saturday, 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center gap-4">
          <button 
            onClick={openShareModal}
            className="px-8 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Quick Share
          </button>
          
          <button 
            onClick={openAdvancedShareModal}
            className="px-8 py-3 bg-gradient-to-r from-[#0C8068] to-[#0FA0CE] text-white rounded-md font-medium hover:shadow-lg hover:shadow-[#0C8068]/20 transition-all"
          >
            View Full Dashboard
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaDashboard;
