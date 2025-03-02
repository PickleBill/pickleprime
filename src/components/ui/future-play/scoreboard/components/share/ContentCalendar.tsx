
import React from "react";
import { Clock, Calendar } from "lucide-react";

const ContentCalendar: React.FC = () => {
  return (
    <div className="bg-navy-light/20 border border-white/10 rounded-lg p-4 space-y-3">
      <h3 className="text-lg font-medium text-white/90 flex items-center gap-2">
        <Clock className="w-5 h-5 text-[#0C8068]" />
        Content Calendar
      </h3>
      
      <div className="space-y-2">
        <div className="flex items-center gap-3 p-2 bg-navy/40 rounded-lg">
          <div className="w-2 h-2 rounded-full bg-[#0FA0CE]"></div>
          <div className="flex-1">
            <p className="text-sm text-white/80">Match Recap</p>
            <p className="text-xs text-white/60">Today, 8:00 PM</p>
          </div>
          <button className="text-white/60 hover:text-white">
            <Calendar className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex items-center gap-3 p-2 bg-navy/40 rounded-lg">
          <div className="w-2 h-2 rounded-full bg-[#0C8068]"></div>
          <div className="flex-1">
            <p className="text-sm text-white/80">Player Interview</p>
            <p className="text-xs text-white/60">Tomorrow, 10:00 AM</p>
          </div>
          <button className="text-white/60 hover:text-white">
            <Calendar className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <button className="w-full py-2 bg-gradient-to-r from-[#0C8068] to-[#0FA0CE] text-white rounded-md text-sm font-medium hover:opacity-90 transition-opacity">
        Schedule New Post
      </button>
    </div>
  );
};

export default ContentCalendar;
