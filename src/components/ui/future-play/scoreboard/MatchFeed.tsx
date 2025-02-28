
import React from 'react';
import { Video, Award, BarChart2, Heart } from 'lucide-react';

interface MatchFeedItem {
  id: number;
  type: string;
  content: string;
  time: string;
  likes?: number;
}

interface MatchFeedProps {
  feedItems: MatchFeedItem[];
  maxHeight?: string; // Optional prop to control the max height
}

const MatchFeed: React.FC<MatchFeedProps> = ({ 
  feedItems,
  maxHeight = "300px" // Default max height if not specified
}) => {
  // Helper function to get the appropriate icon for each feed item type
  const getItemIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'highlight':
        return <Video className="w-5 h-5 text-[#33C3F0]" />;
      case 'achievement':
        return <Award className="w-5 h-5 text-[#F97316]" />;
      case 'stat':
        return <BarChart2 className="w-5 h-5 text-[#2BCB6E]" />;
      default:
        return <Video className="w-5 h-5 text-[#33C3F0]" />;
    }
  };

  return (
    <div className="bg-navy-dark border border-white/5 rounded-lg">
      {/* Feed Header */}
      <div className="p-3 border-b border-white/10 flex items-center justify-between">
        <h3 className="text-white font-semibold uppercase text-sm tracking-wider">Match Feed</h3>
        <div className="flex gap-3">
          <button className="text-white/50 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"></path>
              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </button>
          <button className="text-white/50 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Feed Items - No max height to display all items */}
      <div 
        className="divide-y divide-white/5 overflow-auto" 
        style={{ maxHeight: maxHeight }}
      >
        {feedItems.map((item) => (
          <div key={item.id} className="p-3 hover:bg-white/5 transition-colors">
            <div className="flex items-start gap-2 mb-1">
              <div className="p-1.5 rounded-full bg-white/5">
                {getItemIcon(item.type)}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-semibold text-white/70 uppercase tracking-wider">
                    {item.type}
                  </span>
                  <span className="text-xs text-white/50">{item.time}</span>
                </div>
                <p className="text-white text-sm">{item.content}</p>
              </div>
            </div>
            
            {/* Likes section - only show if likes exist */}
            {item.likes !== undefined && (
              <div className="flex items-center gap-1 ml-10 text-xs text-white/50">
                <button className="flex items-center gap-1 hover:text-white transition-colors">
                  <Heart className="w-3.5 h-3.5" />
                  <span>{item.likes}</span>
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchFeed;
