import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SolutionSection from "@/components/SolutionSection";
import HighlightReels from "@/components/HighlightReels";
import MarketSection from "@/components/MarketSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ShareMatchModal from "@/components/ui/ShareMatchModal";
import AdvancedShareModal from "@/components/ui/AdvancedShareModal";
import { Twitter, Facebook, Instagram, TrendingUp, Users, Award, Clock, Share2, ArrowRight } from "lucide-react";

const ConnectivitySection = ({ openShareModal, openAdvancedShareModal }: { 
  openShareModal: () => void;
  openAdvancedShareModal: () => void;
}) => {
  return (
    <section id="connectivity" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Community Connection
          </h2>
          <p className="text-gray-600">
            Our platform creates meaningful connections between players, facilities, and the broader racquet sports community, 
            fostering engagement and building lasting relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-navy-dark rounded-xl overflow-hidden p-6 text-white">
            <h3 className="text-2xl font-bold mb-4">Your Connection Conduit</h3>
            <p className="text-white/80 mb-6">
              The Connection Conduit serves as your gateway to the vibrant racquet sports community, 
              enabling real-time social engagement, skill-based matchmaking, and virtual coaching.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-navy-light/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Social Engagement</h4>
                <p className="text-white/70 text-sm">Connect with friends, share achievements, and participate in community challenges</p>
              </div>
              
              <div className="bg-navy-light/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Match Finding</h4>
                <p className="text-white/70 text-sm">Advanced matchmaking based on skill level, play style, and location preferences</p>
              </div>
              
              <div className="bg-navy-light/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Virtual Coaching</h4>
                <p className="text-white/70 text-sm">Connect with professional coaches for remote analysis and improvement tips</p>
              </div>
              
              <div className="bg-navy-light/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Community Events</h4>
                <p className="text-white/70 text-sm">Discover and register for tournaments, clinics, and social gatherings</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <button
                onClick={openShareModal}
                className="px-4 py-2 bg-primary/80 hover:bg-primary text-white rounded-md transition-colors flex items-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                Share Match Update
              </button>
              
              <button
                onClick={openAdvancedShareModal}
                className="px-4 py-2 bg-gradient-to-r from-[#0C8068] to-[#0FA0CE] text-white rounded-md transition-colors flex items-center gap-2"
              >
                Advanced Analytics
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-navy mb-6">
              Building Connections That Last
            </h3>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-teal-500/10 p-3 rounded-lg text-teal-500 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="M7 10h2a2 2 0 0 0 2-2V7"></path>
                    <path d="M15 10h2a2 2 0 0 1 2 2v1"></path>
                    <path d="M8 14a4 4 0 0 0 8 0"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-navy font-bold text-lg">Player-to-Player Connections</h4>
                  <p className="text-gray-600">Find playing partners based on skill level, availability, and playing style preferences</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-lg text-primary shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                    <polyline points="17 2 12 7 7 2"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="text-navy font-bold text-lg">Digital Community Building</h4>
                  <p className="text-gray-600">Foster a sense of belonging with group challenges, achievement sharing, and community celebrations</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-purple-500/10 p-3 rounded-lg text-purple-500 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-navy font-bold text-lg">Cross-Platform Integration</h4>
                  <p className="text-gray-600">Seamlessly connect with friends from social media platforms and share achievements across networks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialMediaDashboard = ({ openShareModal, openAdvancedShareModal }: { 
  openShareModal: () => void;
  openAdvancedShareModal: () => void;
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
                      <Twitter className="w-4 h-4" />
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
                      <Facebook className="w-4 h-4" />
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

const Index = () => {
  const [showShareModal, setShowShareModal] = useState(false);
  const [showAdvancedShareModal, setShowAdvancedShareModal] = useState(false);
  
  useEffect(() => {
    const handleAnchorLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute("href");
      
      if (href && href.startsWith("#") && href !== "#") {
        e.preventDefault();
        const targetId = href.slice(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", handleAnchorLinkClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener("click", handleAnchorLinkClick);
      });
    };
  }, []);

  useEffect(() => {
    if (window.location.hash === '#future-play') {
      setTimeout(() => {
        const futurePlayButton = document.querySelector('button[aria-label="Launch Digital Scoreboard"]');
        if (futurePlayButton && futurePlayButton instanceof HTMLElement) {
          futurePlayButton.click();
        }
      }, 500);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <SolutionSection />
      <HighlightReels />
      <MarketSection />
      <ConnectivitySection 
        openShareModal={() => setShowShareModal(true)} 
        openAdvancedShareModal={() => setShowAdvancedShareModal(true)}
      />
      <SocialMediaDashboard 
        openShareModal={() => setShowShareModal(true)}
        openAdvancedShareModal={() => setShowAdvancedShareModal(true)}
      />
      <TeamSection />
      <ContactSection />
      <Footer />
      
      <ShareMatchModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
      />
      
      <AdvancedShareModal
        isOpen={showAdvancedShareModal}
        onClose={() => setShowAdvancedShareModal(false)}
      />
    </div>
  );
};

export default Index;
