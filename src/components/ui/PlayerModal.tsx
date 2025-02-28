
import React from "react";
import { X, Trophy, Calendar, BarChart2, Users, Activity } from "lucide-react";

interface PlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PlayerModal = ({ isOpen, onClose }: PlayerModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-xl w-full max-w-5xl max-h-[95vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="sticky top-0 bg-white p-4 border-b flex items-center justify-between z-10">
          <h3 className="text-xl font-bold text-navy">PickleBills Player Dashboard</h3>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-auto">
          {/* Dashboard Preview */}
          <div className="border-b border-gray-200">
            <div className="relative bg-navy/5 h-24 md:h-48">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-navy/20"></div>
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
          
          {/* Stats Overview */}
          <div className="py-6 bg-white">
            <div className="container">
              <h3 className="text-lg font-semibold mb-4 text-navy">Performance Stats</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Trophy className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-gray-600">Win Rate</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-navy">68%</span>
                    <span className="text-xs text-green-600">↑ 4% this month</span>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Activity className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-gray-600">Avg Points</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-navy">11.2</span>
                    <span className="text-xs text-green-600">↑ 0.8 last week</span>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-gray-600">Sessions</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-navy">24</span>
                    <span className="text-xs text-gray-500">This month</span>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <BarChart2 className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-gray-600">Rating</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-navy">4.5</span>
                    <span className="text-xs text-green-600">↑ 0.2 last month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Recent Activity */}
          <div className="py-6 bg-gray-50">
            <div className="container">
              <h3 className="text-lg font-semibold mb-4 text-navy">Recent Matches</h3>
              <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                {/* Match 1 */}
                <div className="border-b border-gray-100 p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs font-bold">WIN</div>
                      <div>
                        <div className="font-medium text-navy">Doubles Match</div>
                        <div className="text-sm text-gray-500">Yesterday at 6:30 PM</div>
                      </div>
                    </div>
                    <div className="text-lg font-semibold text-navy">11-9, 11-7</div>
                  </div>
                  <div className="mt-2 flex justify-between">
                    <div className="text-sm text-gray-500">with Alex T. vs. Ryan M. & Sarah L.</div>
                    <button className="text-primary text-sm hover:underline">View Stats</button>
                  </div>
                </div>
                
                {/* Match 2 */}
                <div className="border-b border-gray-100 p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-xs font-bold">LOSS</div>
                      <div>
                        <div className="font-medium text-navy">Singles Match</div>
                        <div className="text-sm text-gray-500">Tue, Jun 4 at 5:15 PM</div>
                      </div>
                    </div>
                    <div className="text-lg font-semibold text-navy">8-11, 11-13</div>
                  </div>
                  <div className="mt-2 flex justify-between">
                    <div className="text-sm text-gray-500">vs. Chris P.</div>
                    <button className="text-primary text-sm hover:underline">View Stats</button>
                  </div>
                </div>
                
                {/* Match 3 */}
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs font-bold">WIN</div>
                      <div>
                        <div className="font-medium text-navy">Doubles Match</div>
                        <div className="text-sm text-gray-500">Sun, Jun 2 at 10:00 AM</div>
                      </div>
                    </div>
                    <div className="text-lg font-semibold text-navy">11-4, 11-8</div>
                  </div>
                  <div className="mt-2 flex justify-between">
                    <div className="text-sm text-gray-500">with Taylor K. vs. Jamie B. & Pat S.</div>
                    <button className="text-primary text-sm hover:underline">View Stats</button>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <button className="text-primary font-medium hover:underline text-sm">
                  View All Match History
                </button>
              </div>
            </div>
          </div>
          
          {/* Upcoming Reservations */}
          <div className="py-6 bg-white">
            <div className="container">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-navy">Upcoming Reservations</h3>
                <button className="text-primary text-sm font-medium hover:underline">Book a Court</button>
              </div>
              
              <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 shadow-sm p-6 text-center">
                <div className="mb-3">
                  <Calendar className="w-12 h-12 mx-auto text-gray-400" />
                </div>
                <h4 className="text-navy font-semibold mb-1">No Upcoming Reservations</h4>
                <p className="text-sm text-gray-500 mb-4">Book a court to play with friends or join a game</p>
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-white hover:bg-primary/90 h-10 px-4 py-2">
                  Reserve Court
                </button>
              </div>
            </div>
          </div>
          
          {/* Friends & Community */}
          <div className="py-6 bg-gray-50">
            <div className="container">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-navy">Friends & Community</h3>
                <button className="text-primary text-sm font-medium hover:underline">Find Players</button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-navy">Friends</span>
                  </div>
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
                </div>
                
                <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-navy">Leagues</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">Join a league to compete with players at your skill level.</p>
                  <button className="w-full py-2 border border-gray-200 rounded-md text-sm text-navy hover:bg-gray-50 transition-colors">
                    Browse Leagues
                  </button>
                </div>
                
                <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Trophy className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-navy">Tournaments</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">Upcoming tournaments in your area.</p>
                  <button className="w-full py-2 border border-gray-200 rounded-md text-sm text-navy hover:bg-gray-50 transition-colors">
                    See Tournaments
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="border-t p-4 bg-gray-50">
          <div className="flex justify-end">
            <button 
              onClick={onClose}
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-md transition-colors"
            >
              Close Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerModal;
