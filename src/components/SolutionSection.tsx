
import React, { useState } from "react";
import PillarCard from "./ui/PillarCard";
import { pillars } from "@/assets/data";
import { X } from "lucide-react";

const SolutionSection = () => {
  // State for handling the highlight reel modal
  const [showHighlightModal, setShowHighlightModal] = useState(false);

  // Sample highlight images/videos data
  const highlightContent = [
    {
      id: 1,
      type: "image",
      url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      caption: "Perfect backhand winner"
    },
    {
      id: 2,
      type: "image",
      url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      caption: "Analytics in action"
    },
    {
      id: 3,
      type: "image",
      url: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
      caption: "Incredible rally point"
    },
    {
      id: 4,
      type: "image", 
      url: "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0",
      caption: "Match-winning smash"
    }
  ];

  return (
    <section id="solution" className="bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            Our 5-Pillar Solution
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy">
            Comprehensive Platform for the Next Generation of Racket Sports
          </h2>
          <p className="text-gray-700">
            We've built a complete ecosystem that transforms the racket sports experience for players, facility owners, coaches, and fans alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <div 
              key={pillar.id} 
              className="animate-scale-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PillarCard
                title={pillar.title}
                description={pillar.description}
                icon={pillar.icon}
              />
            </div>
          ))}
        </div>

        {/* Example feature showcase */}
        <div className="mt-20 bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <span className="text-sm text-primary font-medium uppercase tracking-wider mb-2">
                Featured Technology
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-navy">
                One-Touch Highlight Reels
              </h3>
              <p className="text-gray-700 mb-6">
                Our proprietary "Boom Button" lets players instantly create, edit, and share their best moments. AI-powered cameras track the action and automatically generate highlight clips that can be shared across social media with a single tap.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span className="text-gray-700">Automated video capture and editing</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span className="text-gray-700">Instant social media sharing</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span className="text-gray-700">Branded overlays for facilities</span>
                </li>
              </ul>
            </div>
            <div className="lg:h-auto bg-gray-200 min-h-[300px] relative overflow-hidden">
              <img
                src="/lovable-uploads/d57ab558-dee0-4f1a-a7ba-17e0a656629e.png"
                alt="Pickleball Action Shot"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent"></div>
              <div 
                className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg cursor-pointer transition-transform hover:scale-105"
                onClick={() => setShowHighlightModal(true)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 3l14 9-14 9V3z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-navy">Amazing shot!</div>
                    <div className="text-xs text-gray-500">Tap to view highlight reels</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Highlight Reels Modal */}
      {showHighlightModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-4 border-b flex items-center justify-between z-10">
              <h3 className="text-xl font-bold text-navy">PickleBills Highlight Reels</h3>
              <button 
                onClick={() => setShowHighlightModal(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlightContent.map((item) => (
                <div key={item.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm border border-gray-100">
                  <div className="aspect-video bg-gray-200 relative">
                    <img 
                      src={item.url} 
                      alt={item.caption}
                      className="w-full h-full object-cover" 
                    />
                    {item.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center text-white cursor-pointer">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 3l14 9-14 9V3z" fill="currentColor"/>
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="text-navy font-medium">{item.caption}</div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-xs text-gray-500">Captured with PickleBills AI</span>
                      <button className="text-primary text-sm font-medium hover:underline">Share</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-6 border-t">
              <button 
                className="w-full py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
                onClick={() => setShowHighlightModal(false)}
              >
                Close Gallery
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SolutionSection;
