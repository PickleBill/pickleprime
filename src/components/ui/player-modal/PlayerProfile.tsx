
import React from "react";

const PlayerProfile = () => {
  return (
    <div className="border-b border-[#0FA0CE]/20">
      <div className="relative bg-[#0FA0CE]/5 h-28 md:h-52">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0FA0CE]/20 to-[#0FA0CE]/10"></div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent h-16"></div>
        <div className="container relative h-full flex items-end">
          <div className="absolute bottom-0 left-6 transform translate-y-1/2 bg-white rounded-full p-1 shadow-lg border-2 border-white">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="/lovable-uploads/f73f8efb-cdd6-42c9-97ed-45ef8b69aad9.png" 
                alt="Player profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="container pt-10 pb-4">
        <div className="flex flex-wrap justify-between items-end gap-4">
          <div>
            <h2 className="text-2xl font-bold text-navy">Mike Johnson</h2>
            <p className="text-gray-500">4.5 Skill Level • Member Since Oct 2023</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-primary hover:bg-primary-dark transition-colors text-white font-medium py-2 px-4 rounded-md text-sm">
              Book a Court
            </button>
            <button className="border border-navy/20 hover:border-navy/40 transition-colors text-navy font-medium py-2 px-4 rounded-md text-sm">
              Join League
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerProfile;
