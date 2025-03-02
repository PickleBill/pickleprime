
import React from "react";
import { Award, ArrowRight } from "lucide-react";

interface PostPreviewProps {
  postText: string;
  player1Score: number;
  player2Score: number;
  gameTime: number;
  onPremiumClick: () => void;
}

const PostPreview: React.FC<PostPreviewProps> = ({
  postText,
  player1Score,
  player2Score,
  gameTime,
  onPremiumClick
}) => {
  return (
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
          onClick={onPremiumClick}
          className="w-full py-2 bg-gradient-to-r from-[#0C8068] to-[#0FA0CE] text-white rounded-md text-sm font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-1"
        >
          Explore Premium Features
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default PostPreview;
