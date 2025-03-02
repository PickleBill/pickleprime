
import React from "react";
import { Share } from "lucide-react";

interface ShareFooterProps {
  onClose: () => void;
  handleShare: () => void;
  isScheduling: boolean;
}

const ShareFooter: React.FC<ShareFooterProps> = ({ 
  onClose, 
  handleShare, 
  isScheduling 
}) => {
  return (
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
  );
};

export default ShareFooter;
