
import React from "react";
import { TrendingUp, Users, Award, Clock, Share2, ArrowRight } from "lucide-react";

interface ConnectivitySectionProps {
  openShareModal: () => void;
  openAdvancedShareModal: () => void;
}

const ConnectivitySection: React.FC<ConnectivitySectionProps> = ({ 
  openShareModal, 
  openAdvancedShareModal 
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

export default ConnectivitySection;
