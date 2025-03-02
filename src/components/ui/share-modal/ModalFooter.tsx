
import React, { useState, useRef, useEffect } from "react";
import { toast } from "@/components/ui/use-toast";
import { 
  ChevronLeft, 
  ChevronRight, 
  Share, 
  Video, 
  Activity,
  Trophy, 
  BarChart2, 
  Users 
} from "lucide-react";

interface ModalFooterProps {
  onClose: () => void;
}

const ModalFooter: React.FC<ModalFooterProps> = ({ onClose }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Define the available actions in the footer carousel
  const actionItems = [
    {
      id: 'share',
      label: 'Share Now',
      icon: <Share className="w-5 h-5" />,
      active: true,
      color: '#1a9dc3',
      onClick: () => {
        toast({
          title: "Match shared!",
          description: "Your match update has been shared successfully.",
          duration: 3000,
        });
        setTimeout(onClose, 500);
      }
    },
    {
      id: 'video',
      label: 'Video Clips',
      icon: <Video className="w-5 h-5" />,
      active: false,
      color: '#6b7280',
      onClick: () => handleQuickView('video')
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: <Activity className="w-5 h-5" />,
      active: false,
      color: '#6b7280',
      onClick: () => handleQuickView('analytics')
    },
    {
      id: 'tournaments',
      label: 'Tournaments',
      icon: <Trophy className="w-5 h-5" />,
      active: false,
      color: '#6b7280',
      onClick: () => handleQuickView('tournaments')
    },
    {
      id: 'stats',
      label: 'Match Stats',
      icon: <BarChart2 className="w-5 h-5" />,
      active: false,
      color: '#6b7280',
      onClick: () => handleQuickView('stats')
    },
    {
      id: 'community',
      label: 'Community',
      icon: <Users className="w-5 h-5" />,
      active: true,
      color: '#1a9dc3',
      onClick: () => {
        toast({
          title: "Opening community feed",
          description: "Connecting to the player community...",
          duration: 3000,
        });
      }
    }
  ];

  const visibleItems = 3; // Number of items visible at once
  const [quickViewContent, setQuickViewContent] = useState<string | null>(null);

  const handleNextClick = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex(prev => (prev + 1) % actionItems.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handlePrevClick = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex(prev => (prev - 1 + actionItems.length) % actionItems.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handleQuickView = (itemId: string) => {
    setQuickViewContent(itemId);
  };

  const closeQuickView = () => {
    setQuickViewContent(null);
  };

  // Render the quick view content based on the selected item
  const renderQuickViewContent = () => {
    switch (quickViewContent) {
      case 'video':
        return (
          <div className="p-6 bg-navy-dark/90 text-white rounded-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Video className="w-5 h-5 text-[#1a9dc3]" />
              Video Clips (Coming Soon)
            </h3>
            <p className="mb-4">Generate and share AI-powered highlight clips from your match.</p>
            <div className="bg-navy-light/50 p-4 rounded-md">
              <p className="text-white/70 text-sm">
                Our advanced AI automatically identifies key moments from your match and compiles 
                them into shareable highlight clips.
              </p>
            </div>
            <button 
              onClick={closeQuickView}
              className="mt-4 px-4 py-2 bg-[#1a9dc3]/80 hover:bg-[#1a9dc3] text-white rounded-md transition-colors"
            >
              Close Preview
            </button>
          </div>
        );
      case 'analytics':
        return (
          <div className="p-6 bg-navy-dark/90 text-white rounded-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-[#1a9dc3]" />
              Performance Analytics (Coming Soon)
            </h3>
            <p className="mb-4">Deep dive into your performance metrics and improvement opportunities.</p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-navy-light/50 p-3 rounded-md">
                <p className="text-white/70 text-sm font-medium">Shot Accuracy</p>
                <div className="w-full bg-navy-light/80 h-2 rounded-full mt-2">
                  <div className="bg-[#1a9dc3] h-2 rounded-full" style={{width: '67%'}}></div>
                </div>
              </div>
              <div className="bg-navy-light/50 p-3 rounded-md">
                <p className="text-white/70 text-sm font-medium">Shot Selection</p>
                <div className="w-full bg-navy-light/80 h-2 rounded-full mt-2">
                  <div className="bg-[#1a9dc3] h-2 rounded-full" style={{width: '82%'}}></div>
                </div>
              </div>
            </div>
            <button 
              onClick={closeQuickView}
              className="mt-2 px-4 py-2 bg-[#1a9dc3]/80 hover:bg-[#1a9dc3] text-white rounded-md transition-colors"
            >
              Close Preview
            </button>
          </div>
        );
      case 'tournaments':
        return (
          <div className="p-6 bg-navy-dark/90 text-white rounded-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-[#1a9dc3]" />
              Tournaments (Coming Soon)
            </h3>
            <p className="mb-4">Join competitive tournaments and track your rankings.</p>
            <div className="bg-navy-light/50 p-4 rounded-md mb-4">
              <p className="text-white/70 text-sm">
                Participate in local and national tournaments, with automatic match scheduling
                and real-time leaderboard updates.
              </p>
            </div>
            <div className="flex items-center justify-between bg-navy-light/30 p-3 rounded-md">
              <div>
                <p className="font-medium">Spring Championship</p>
                <p className="text-white/70 text-xs">Registration open: Apr 15 - May 1</p>
              </div>
              <span className="px-2 py-1 bg-[#1a9dc3]/20 text-[#1a9dc3] text-xs rounded-full">Coming Soon</span>
            </div>
            <button 
              onClick={closeQuickView}
              className="mt-4 px-4 py-2 bg-[#1a9dc3]/80 hover:bg-[#1a9dc3] text-white rounded-md transition-colors"
            >
              Close Preview
            </button>
          </div>
        );
      case 'stats':
        return (
          <div className="p-6 bg-navy-dark/90 text-white rounded-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <BarChart2 className="w-5 h-5 text-[#1a9dc3]" />
              Match Statistics (Coming Soon)
            </h3>
            <p className="mb-4">Comprehensive breakdown of your match performance.</p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-navy-light/50 p-3 rounded-md">
                <div className="flex justify-between items-center">
                  <p className="text-white/70 text-sm">Winners</p>
                  <p className="font-medium">12</p>
                </div>
              </div>
              <div className="bg-navy-light/50 p-3 rounded-md">
                <div className="flex justify-between items-center">
                  <p className="text-white/70 text-sm">Errors</p>
                  <p className="font-medium">8</p>
                </div>
              </div>
              <div className="bg-navy-light/50 p-3 rounded-md">
                <div className="flex justify-between items-center">
                  <p className="text-white/70 text-sm">1st Serve %</p>
                  <p className="font-medium">74%</p>
                </div>
              </div>
              <div className="bg-navy-light/50 p-3 rounded-md">
                <div className="flex justify-between items-center">
                  <p className="text-white/70 text-sm">Net Points</p>
                  <p className="font-medium">15/20</p>
                </div>
              </div>
            </div>
            <button 
              onClick={closeQuickView}
              className="mt-2 px-4 py-2 bg-[#1a9dc3]/80 hover:bg-[#1a9dc3] text-white rounded-md transition-colors"
            >
              Close Preview
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="border-t border-white/10">
      {/* Quick View Area */}
      {quickViewContent && (
        <div className="p-4 bg-navy-light/30 border-b border-white/10">
          {renderQuickViewContent()}
        </div>
      )}
      
      {/* Carousel Footer */}
      <div className="p-4 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <button 
            onClick={handlePrevClick}
            className="p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Previous options"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="text-white/50 text-xs">
            Slide for more options
          </div>
          
          <button 
            onClick={handleNextClick}
            className="p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Next options"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        {/* Action Buttons Carousel */}
        <div 
          ref={carouselRef}
          className="relative overflow-hidden"
          style={{ height: '100px' }} // Increased height for larger buttons
        >
          <div 
            className="flex transition-transform duration-300 h-full"
            style={{ 
              transform: `translateX(-${activeIndex * (100 / visibleItems)}%)`,
              width: `${(actionItems.length / visibleItems) * 100}%`
            }}
          >
            {actionItems.map((item, index) => (
              <div 
                key={item.id}
                className="flex-shrink-0"
                style={{ width: `${100 / actionItems.length}%` }}
              >
                <button
                  onClick={item.onClick}
                  className={`w-[90%] h-full mx-auto flex flex-col items-center justify-center rounded-lg transition-all border ${
                    item.active 
                      ? 'bg-gradient-to-br from-[#1a9dc3]/20 to-[#1a9dc3]/5 border-[#1a9dc3]/30 text-white' 
                      : 'bg-navy-light/30 border-white/5 text-white/70 hover:bg-navy-light/50'
                  }`}
                  style={{ 
                    boxShadow: item.active ? `0 0 15px rgba(26, 157, 195, 0.2)` : 'none'
                  }}
                >
                  <div 
                    className={`p-2 rounded-full mb-2 ${
                      item.active ? 'bg-[#1a9dc3]/20' : 'bg-white/5'
                    }`}
                    style={{ color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium">{item.label}</span>
                  {!item.active && (
                    <span className="text-[10px] mt-1 text-white/50">Coming Soon</span>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer Actions */}
        <div className="flex justify-end mt-4">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-navy-light/50 hover:bg-navy-light/70 text-white rounded-md transition-colors mr-2"
          >
            Cancel
          </button>
          <button 
            onClick={() => {
              toast({
                title: "Match update saved!",
                description: "Your match update has been saved as a draft.",
                duration: 3000,
              });
              setTimeout(onClose, 500);
            }}
            className="px-4 py-2 bg-primary/80 hover:bg-primary text-white rounded-md transition-colors"
          >
            Save as Draft
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalFooter;
