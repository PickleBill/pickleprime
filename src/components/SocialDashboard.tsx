
import React from "react";

interface SocialDashboardProps {
  onReturn: () => void;
  player1Score: number;
  player2Score: number;
  gameTime: number;
}

const SocialDashboard: React.FC<SocialDashboardProps> = ({
  onReturn,
  player1Score,
  player2Score,
  gameTime
}) => {
  return (
    <div className="h-screen bg-navy-dark flex flex-col">
      <div className="p-4 bg-navy-light text-white flex justify-between items-center">
        <h2 className="text-xl font-bold">Community Connection Conduit</h2>
        <button 
          onClick={onReturn}
          className="px-4 py-2 bg-primary/80 hover:bg-primary rounded-md"
        >
          Return to Game
        </button>
      </div>
      
      <div className="flex-1 p-6 overflow-auto">
        <div className="bg-navy-light/70 backdrop-blur-md rounded-xl p-6 mb-6 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">Social Activity Dashboard</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-navy-dark/80 rounded-lg p-4 border border-white/10">
              <h4 className="text-lg font-semibold text-primary mb-3">Match Shares</h4>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">T</div>
                  <span className="text-white">Twitter</span>
                </div>
                <span className="text-white/80">2 minutes ago</span>
              </div>
              <p className="text-white/80 p-3 bg-navy rounded-md">
                Match update: Team A {player1Score} - Team B {player2Score} after {Math.floor(gameTime / 60)}:{gameTime % 60 < 10 ? '0' + gameTime % 60 : gameTime % 60} of play! #Pickleball #CourtVisionary
              </p>
            </div>
            
            <div className="bg-navy-dark/80 rounded-lg p-4 border border-white/10">
              <h4 className="text-lg font-semibold text-[#0FA0CE] mb-3">Friend Activity</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 bg-navy/60 rounded-md">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">M</div>
                  <div>
                    <p className="text-white">Michael has joined your match!</p>
                    <p className="text-white/60 text-sm">Just now</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 bg-navy/60 rounded-md">
                  <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">S</div>
                  <div>
                    <p className="text-white">Sarah liked your highlight</p>
                    <p className="text-white/60 text-sm">5 minutes ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-navy-light/70 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">Community Engagement</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-navy-dark/80 rounded-lg p-4 border border-white/10 text-center">
              <h4 className="text-lg font-semibold text-[#4CAF50] mb-2">Shares</h4>
              <p className="text-3xl font-bold text-white">24</p>
              <p className="text-white/60">Last 7 days</p>
            </div>
            <div className="bg-navy-dark/80 rounded-lg p-4 border border-white/10 text-center">
              <h4 className="text-lg font-semibold text-[#FFC107] mb-2">Highlights</h4>
              <p className="text-3xl font-bold text-white">12</p>
              <p className="text-white/60">Created this month</p>
            </div>
            <div className="bg-navy-dark/80 rounded-lg p-4 border border-white/10 text-center">
              <h4 className="text-lg font-semibold text-[#FF5722] mb-2">Social Reach</h4>
              <p className="text-3xl font-bold text-white">1.2k</p>
              <p className="text-white/60">Total impressions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialDashboard;
