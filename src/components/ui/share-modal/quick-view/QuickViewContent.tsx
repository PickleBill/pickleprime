
import React from "react";
import { Video, Activity, Trophy, BarChart2 } from "lucide-react";

interface QuickViewContentProps {
  contentType: string | null;
  onClose: () => void;
}

const QuickViewContent: React.FC<QuickViewContentProps> = ({ contentType, onClose }) => {
  if (!contentType) return null;

  return (
    <div className="p-4 bg-navy-light/30 border-b border-white/10">
      {contentType === 'video' && (
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
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-[#1a9dc3]/80 hover:bg-[#1a9dc3] text-white rounded-md transition-colors"
          >
            Close Preview
          </button>
        </div>
      )}

      {contentType === 'analytics' && (
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
            onClick={onClose}
            className="mt-2 px-4 py-2 bg-[#1a9dc3]/80 hover:bg-[#1a9dc3] text-white rounded-md transition-colors"
          >
            Close Preview
          </button>
        </div>
      )}

      {contentType === 'tournaments' && (
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
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-[#1a9dc3]/80 hover:bg-[#1a9dc3] text-white rounded-md transition-colors"
          >
            Close Preview
          </button>
        </div>
      )}

      {contentType === 'stats' && (
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
            onClick={onClose}
            className="mt-2 px-4 py-2 bg-[#1a9dc3]/80 hover:bg-[#1a9dc3] text-white rounded-md transition-colors"
          >
            Close Preview
          </button>
        </div>
      )}
    </div>
  );
};

export default QuickViewContent;
