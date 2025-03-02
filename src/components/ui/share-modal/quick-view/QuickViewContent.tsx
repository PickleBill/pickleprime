
import React from "react";
import { X, Video, Activity, Trophy, BarChart2, Users } from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";

interface QuickViewContentProps {
  contentType: string | null;
  onClose: () => void;
}

const QuickViewContent: React.FC<QuickViewContentProps> = ({ contentType, onClose }) => {
  if (!contentType) return null;

  const getContent = () => {
    switch (contentType) {
      case 'video':
        return (
          <div className="bg-gradient-to-br from-navy-dark/80 to-navy/90 backdrop-blur-sm rounded-lg p-6 mb-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-[#1a9dc3]/20">
                  <Video className="w-5 h-5 text-[#1a9dc3]" />
                </div>
                <h3 className="text-lg font-semibold text-white">Video Clips</h3>
              </div>
              <button 
                onClick={onClose}
                className="p-1 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <p className="text-white/70">Select from available match highlights and clips to share with your network.</p>
              
              <div className="grid grid-cols-2 gap-3">
                {['Match Point', 'First Set', 'Best Rally', 'Game Winning Shot'].map((clip) => (
                  <div key={clip} className="bg-navy-light/30 hover:bg-navy-light/40 backdrop-blur-sm border border-white/5 rounded-md p-3 cursor-pointer transition-all duration-300 hover:scale-105">
                    <div className="aspect-video bg-navy-dark/50 rounded mb-2 flex items-center justify-center">
                      <Video className="w-8 h-8 text-white/30" />
                    </div>
                    <p className="text-sm text-white/90">{clip}</p>
                    <p className="text-xs text-white/50">Duration: 0:15</p>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-end mt-2">
                <AnimatedButton variant="glass" size="sm" active={true} glowColor="rgba(26, 157, 195, 0.5)">
                  Coming Soon
                </AnimatedButton>
              </div>
            </div>
          </div>
        );
        
      case 'analytics':
        return (
          <div className="bg-gradient-to-br from-navy-dark/80 to-navy/90 backdrop-blur-sm rounded-lg p-6 mb-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-[#1a9dc3]/20">
                  <Activity className="w-5 h-5 text-[#1a9dc3]" />
                </div>
                <h3 className="text-lg font-semibold text-white">Analytics Dashboard</h3>
              </div>
              <button 
                onClick={onClose}
                className="p-1 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <p className="text-white/70">Advanced performance metrics and analytics for your match.</p>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2 bg-navy-light/30 backdrop-blur-sm border border-white/5 rounded-md p-3">
                  <h4 className="text-sm font-medium text-white/90 mb-1">Performance Trend</h4>
                  <div className="h-32 bg-navy-dark/50 rounded flex items-center justify-center">
                    <Activity className="w-8 h-8 text-white/30" />
                  </div>
                </div>
                
                <div className="bg-navy-light/30 backdrop-blur-sm border border-white/5 rounded-md p-3">
                  <h4 className="text-sm font-medium text-white/90 mb-1">Win Rate</h4>
                  <div className="h-24 bg-navy-dark/50 rounded flex items-center justify-center">
                    <div className="text-2xl font-bold text-[#1a9dc3]">68%</div>
                  </div>
                </div>
                
                <div className="bg-navy-light/30 backdrop-blur-sm border border-white/5 rounded-md p-3">
                  <h4 className="text-sm font-medium text-white/90 mb-1">Shot Accuracy</h4>
                  <div className="h-24 bg-navy-dark/50 rounded flex items-center justify-center">
                    <div className="text-2xl font-bold text-[#1a9dc3]">72%</div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end mt-2">
                <AnimatedButton variant="glass" size="sm" active={true} glowColor="rgba(26, 157, 195, 0.5)">
                  Coming Soon
                </AnimatedButton>
              </div>
            </div>
          </div>
        );
        
      case 'tournaments':
        return (
          <div className="bg-gradient-to-br from-navy-dark/80 to-navy/90 backdrop-blur-sm rounded-lg p-6 mb-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-[#1a9dc3]/20">
                  <Trophy className="w-5 h-5 text-[#1a9dc3]" />
                </div>
                <h3 className="text-lg font-semibold text-white">Tournaments</h3>
              </div>
              <button 
                onClick={onClose}
                className="p-1 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <p className="text-white/70">View and register for upcoming tournaments in your area.</p>
              
              <div className="space-y-3">
                {['Spring Championship', 'Summer Tournament Series', 'Regional Masters'].map((tournament) => (
                  <div key={tournament} className="bg-navy-light/30 hover:bg-navy-light/40 backdrop-blur-sm border border-white/5 rounded-md p-3 cursor-pointer transition-all duration-300 hover:scale-[1.02] flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-white/90">{tournament}</p>
                      <p className="text-xs text-white/50">Starts in 14 days</p>
                    </div>
                    <div className="p-1.5 bg-[#1a9dc3]/20 rounded-full">
                      <Trophy className="w-4 h-4 text-[#1a9dc3]" />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-end mt-2">
                <AnimatedButton variant="glass" size="sm" active={true} glowColor="rgba(26, 157, 195, 0.5)">
                  Coming Soon
                </AnimatedButton>
              </div>
            </div>
          </div>
        );
        
      case 'stats':
        return (
          <div className="bg-gradient-to-br from-navy-dark/80 to-navy/90 backdrop-blur-sm rounded-lg p-6 mb-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-[#1a9dc3]/20">
                  <BarChart2 className="w-5 h-5 text-[#1a9dc3]" />
                </div>
                <h3 className="text-lg font-semibold text-white">Match Statistics</h3>
              </div>
              <button 
                onClick={onClose}
                className="p-1 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <p className="text-white/70">Detailed match statistics and performance metrics.</p>
              
              <div className="space-y-3">
                <div className="bg-navy-light/30 backdrop-blur-sm border border-white/5 rounded-md p-3">
                  <h4 className="text-sm font-medium text-white/90 mb-2">Team Comparison</h4>
                  
                  {['Aces', 'First Serve %', 'Second Serve %', 'Break Points'].map((stat) => (
                    <div key={stat} className="flex items-center justify-between mb-2">
                      <span className="text-xs text-white/70">{stat}</span>
                      <div className="flex-1 mx-3">
                        <div className="h-1.5 bg-navy-dark/70 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-[#1a9dc3] to-[#4CAF50]" 
                            style={{ width: `${Math.floor(Math.random() * 70 + 30)}%` }}
                          ></div>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-white/90">{Math.floor(Math.random() * 100)}%</span>
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-navy-light/30 backdrop-blur-sm border border-white/5 rounded-md p-3">
                    <h4 className="text-sm font-medium text-white/90 mb-1">Shot Distribution</h4>
                    <div className="h-24 bg-navy-dark/50 rounded flex items-center justify-center">
                      <BarChart2 className="w-8 h-8 text-white/30" />
                    </div>
                  </div>
                  
                  <div className="bg-navy-light/30 backdrop-blur-sm border border-white/5 rounded-md p-3">
                    <h4 className="text-sm font-medium text-white/90 mb-1">Win Probability</h4>
                    <div className="h-24 bg-navy-dark/50 rounded flex items-center justify-center">
                      <div className="text-2xl font-bold text-[#1a9dc3]">76%</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end mt-2">
                <AnimatedButton variant="glass" size="sm" active={true} glowColor="rgba(26, 157, 195, 0.5)">
                  Coming Soon
                </AnimatedButton>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return getContent();
};

export default QuickViewContent;
