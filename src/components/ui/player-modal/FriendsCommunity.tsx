
import React from "react";
import { Users, Calendar, Trophy } from "lucide-react";

const FriendsCommunity = () => {
  return (
    <div className="py-6 bg-[#0FA0CE]/5">
      <div className="container">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-[#0FA0CE]">Friends & Community</h3>
          <button className="text-[#0FA0CE] text-sm font-medium hover:underline">Find Players</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CommunityCard 
            icon={<Users className="w-5 h-5 text-primary" />}
            title="Friends"
          >
            <div className="flex -space-x-2 overflow-hidden mb-3">
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-2 ring-white">
                <span className="text-xs font-medium text-gray-500">+12</span>
              </div>
            </div>
            <button className="w-full py-2 border border-gray-200 rounded-md text-sm text-navy hover:bg-gray-50 transition-colors">
              View All
            </button>
          </CommunityCard>
          
          <CommunityCard 
            icon={<Calendar className="w-5 h-5 text-primary" />}
            title="Leagues"
          >
            <p className="text-sm text-gray-500 mb-3">Join a league to compete with players at your skill level.</p>
            <button className="w-full py-2 border border-gray-200 rounded-md text-sm text-navy hover:bg-gray-50 transition-colors">
              Browse Leagues
            </button>
          </CommunityCard>
          
          <CommunityCard 
            icon={<Trophy className="w-5 h-5 text-primary" />}
            title="Tournaments"
          >
            <p className="text-sm text-gray-500 mb-3">Upcoming tournaments in your area.</p>
            <button className="w-full py-2 border border-gray-200 rounded-md text-sm text-navy hover:bg-gray-50 transition-colors">
              See Tournaments
            </button>
          </CommunityCard>
        </div>
      </div>
    </div>
  );
};

interface CommunityCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const CommunityCard = ({ icon, title, children }: CommunityCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm p-4">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-primary/10 rounded-full">
          {icon}
        </div>
        <span className="font-medium text-navy">{title}</span>
      </div>
      {children}
    </div>
  );
};

export default FriendsCommunity;
