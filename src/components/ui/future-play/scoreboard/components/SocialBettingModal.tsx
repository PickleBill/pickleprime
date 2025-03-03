
import React, { useState } from 'react';
import { X, Flame, Trophy, AlertCircle, TrendingUp, DollarSign } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import AnimatedButton from '@/components/ui/AnimatedButton';

interface SocialBettingModalProps {
  isOpen: boolean;
  onClose: () => void;
  player1Name?: string;
  player2Name?: string;
}

interface Match {
  id: number;
  team1: string;
  team2: string;
  odds1: number;
  odds2: number;
  betsPlaced: number;
}

interface ActiveBet {
  team: string;
  amount: number;
  odds: number;
  potential: number;
  progress: number;
}

interface Payout {
  date: string;
  event: string;
  amount: number;
}

const SocialBettingModal: React.FC<SocialBettingModalProps> = ({ 
  isOpen, 
  onClose,
  player1Name = "Rodriguez/Chen",
  player2Name = "Johnson/Swift"
}) => {
  const [selectedTab, setSelectedTab] = useState<'odds' | 'bets'>('odds');
  const [selectedBetAmount, setSelectedBetAmount] = useState<number | null>(null);
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  
  // Mock data for tournament matches
  const matches: Match[] = [
    {
      id: 1,
      team1: player1Name,
      team2: player2Name,
      odds1: 1.85,
      odds2: 2.15,
      betsPlaced: 234
    },
    {
      id: 2,
      team1: "Smith/Wilson",
      team2: "Thompson/Garcia",
      odds1: 2.45,
      odds2: 1.65,
      betsPlaced: 187
    },
    {
      id: 3,
      team1: "Lee/Brown",
      team2: "Miller/Davis",
      odds1: 1.95,
      odds2: 1.95,
      betsPlaced: 156
    }
  ];
  
  // Mock data for active bets
  const activeBets: ActiveBet[] = [
    {
      team: "Rodriguez/Chen",
      amount: 25,
      odds: 1.85,
      potential: 46.25,
      progress: 30
    },
    {
      team: "Thompson/Garcia",
      amount: 50,
      odds: 1.65,
      potential: 82.5,
      progress: 60
    }
  ];
  
  // Mock data for payouts
  const payouts: Payout[] = [
    {
      date: "Aug 5",
      event: "Weekend Tournament",
      amount: 125
    },
    {
      date: "Jul 28",
      event: "Mixed Doubles Night",
      amount: 87.5
    },
    {
      date: "Jul 21",
      event: "Challenge Series",
      amount: 75
    }
  ];
  
  // Total earnings data
  const totalEarnings = 287.50;
  const weeklyGoal = 400;
  const progressPercentage = (totalEarnings / weeklyGoal) * 100;
  
  if (!isOpen) return null;
  
  const handleBetClick = (team: string, odds: number) => {
    setSelectedTeam(team);
    setSelectedBetAmount(25); // Default amount
  };
  
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  
  const handleConfirmBet = () => {
    if (selectedTeam && selectedBetAmount) {
      // In a real app, this would send the bet to a backend
      alert(`Bet of $${selectedBetAmount} placed on ${selectedTeam}`);
      setSelectedTeam(null);
      setSelectedBetAmount(null);
    }
  };
  
  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={handleBackdropClick}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", bounce: 0.3 }}
        className="w-full max-w-3xl bg-[#0A1928] rounded-xl overflow-hidden shadow-2xl border border-[#1A3B55]/40"
      >
        {/* Header with gradient effect */}
        <div className="relative bg-gradient-to-r from-[#1A1F2C] to-[#0F2D40] px-6 py-4 border-b border-[#1A3B55]/60">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Flame className="h-6 w-6 text-[#8B5CF6] animate-pulse" />
              <h2 className="text-[#8B5CF6] font-bold text-xl">Social Betting</h2>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* Tabs */}
          <div className="flex mt-4 space-x-1">
            <button
              onClick={() => setSelectedTab('odds')}
              className={`px-4 py-2 rounded-t-lg text-sm font-medium transition-colors ${
                selectedTab === 'odds' 
                  ? 'bg-[#0A1928] text-white border-t border-l border-r border-[#1A3B55]/60' 
                  : 'bg-transparent text-white/70 hover:text-white/90'
              }`}
            >
              Live Tournament Odds
            </button>
            <button
              onClick={() => setSelectedTab('bets')}
              className={`px-4 py-2 rounded-t-lg text-sm font-medium transition-colors ${
                selectedTab === 'bets' 
                  ? 'bg-[#0A1928] text-white border-t border-l border-r border-[#1A3B55]/60' 
                  : 'bg-transparent text-white/70 hover:text-white/90'
              }`}
            >
              My Betting Dashboard
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-5">
          {selectedTab === 'odds' ? (
            <div className="space-y-6">
              {/* Active matches */}
              {matches.map((match) => (
                <div key={match.id} className="bg-[#0F1D2A] rounded-lg overflow-hidden shadow-md border border-[#1A3B55]/30">
                  <div className="px-4 py-3 border-b border-[#1A3B55]/30">
                    <div className="text-xs text-white/60 mb-1">Match {match.id}</div>
                    <div className="text-white font-medium">{match.team1} vs {match.team2}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 p-4">
                    {/* Team 1 odds button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleBetClick(match.team1, match.odds1)}
                      className={`bg-[#071621] relative overflow-hidden p-4 rounded-lg border-2 transition-colors ${
                        selectedTeam === match.team1 ? 'border-[#8B5CF6]' : 'border-transparent hover:border-[#1A3B55]'
                      }`}
                    >
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-transparent opacity-40"></div>
                      
                      <div className="relative z-10">
                        <div className="text-[#8B5CF6] text-2xl font-bold text-center mb-1">{match.odds1.toFixed(2)}</div>
                        <div className="text-white/70 text-sm text-center">Team 1</div>
                      </div>
                    </motion.button>
                    
                    {/* Team 2 odds button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleBetClick(match.team2, match.odds2)}
                      className={`bg-[#071621] relative overflow-hidden p-4 rounded-lg border-2 transition-colors ${
                        selectedTeam === match.team2 ? 'border-[#8B5CF6]' : 'border-transparent hover:border-[#1A3B55]'
                      }`}
                    >
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-transparent opacity-40"></div>
                      
                      <div className="relative z-10">
                        <div className="text-[#8B5CF6] text-2xl font-bold text-center mb-1">{match.odds2.toFixed(2)}</div>
                        <div className="text-white/70 text-sm text-center">Team 2</div>
                      </div>
                    </motion.button>
                  </div>
                  
                  <div className="px-4 py-2 bg-[#071621] text-right text-xs text-white/60">
                    {match.betsPlaced} bets placed
                  </div>
                </div>
              ))}
              
              {/* Bet placement UI */}
              {selectedTeam && selectedBetAmount && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 bg-[#1A1F2C] rounded-lg p-4 border border-[#8B5CF6]/40"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-white font-medium">Place your bet</h3>
                    <button onClick={() => { setSelectedTeam(null); setSelectedBetAmount(null); }} className="text-white/60 hover:text-white">
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-white/70 text-sm">Team:</div>
                      <div className="text-white font-medium">{selectedTeam}</div>
                    </div>
                    
                    <div>
                      <div className="text-white/70 text-sm">Amount:</div>
                      <div className="flex items-center space-x-2">
                        {[10, 25, 50, 100].map((amount) => (
                          <button
                            key={amount}
                            onClick={() => setSelectedBetAmount(amount)}
                            className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                              selectedBetAmount === amount
                                ? 'bg-[#8B5CF6] text-white'
                                : 'bg-[#071621] text-white/70 hover:bg-[#0F2D40]'
                            }`}
                          >
                            ${amount}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleConfirmBet}
                    className="w-full py-2.5 bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] text-white font-medium rounded-md hover:opacity-90 
                              transition-opacity flex items-center justify-center space-x-2"
                  >
                    <DollarSign className="h-4 w-4" />
                    <span>Confirm Bet</span>
                  </button>
                </motion.div>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left column - My Active Bets */}
              <div>
                <h3 className="text-white/90 font-semibold text-lg mb-3 flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-[#FEC107]" />
                  My Active Bets
                </h3>
                
                <div className="space-y-4">
                  {activeBets.map((bet, index) => (
                    <div key={index} className="bg-[#0F1D2A] rounded-lg p-4 border border-[#1A3B55]/30">
                      <div className="flex justify-between items-start mb-2">
                        <div className="text-white font-medium">{bet.team}</div>
                        <div className="text-[#8B5CF6] font-bold">${bet.amount}</div>
                      </div>
                      
                      <div className="flex justify-between text-xs text-white/60 mb-1.5">
                        <div>Odds: {bet.odds}</div>
                        <div>Potential: ${bet.potential.toFixed(2)}</div>
                      </div>
                      
                      <div className="text-xs text-white/60 mb-1">In progress</div>
                      <div className="flex items-center space-x-2">
                        <Progress 
                          value={bet.progress} 
                          className="h-1.5 bg-[#071621] flex-1"
                          style={{ '--indicator-color': '#8B5CF6' } as React.CSSProperties}
                        />
                        <span className="text-xs text-[#8B5CF6]">{bet.progress}%</span>
                      </div>
                    </div>
                  ))}
                  
                  {activeBets.length === 0 && (
                    <div className="bg-[#0F1D2A] rounded-lg p-4 text-center text-white/60">
                      You have no active bets
                    </div>
                  )}
                </div>
              </div>
              
              {/* Right column - Earnings Overview */}
              <div>
                <h3 className="text-white/90 font-semibold text-lg mb-3 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-[#2BCB6E]" />
                  Earnings Overview
                </h3>
                
                <div className="bg-[#0F1D2A] rounded-lg p-4 border border-[#1A3B55]/30 mb-4">
                  <div className="text-white/70 text-sm mb-1">Total Earnings</div>
                  <div className="text-[#2BCB6E] text-3xl font-bold mb-2">${totalEarnings.toFixed(2)}</div>
                  
                  <Progress
                    value={progressPercentage}
                    className="h-2.5 bg-[#071621] mb-2 rounded-full overflow-hidden"
                    style={{ '--indicator-color': '#2BCB6E' } as React.CSSProperties}
                  />
                  
                  <div className="flex justify-between text-xs text-white/60">
                    <div>Weekly Goal: ${weeklyGoal}</div>
                    <div className="text-[#2BCB6E]">{progressPercentage.toFixed(1)}%</div>
                  </div>
                </div>
                
                <h4 className="text-white/90 font-medium text-base mb-2">Recent Payouts</h4>
                
                <div className="space-y-2">
                  {payouts.map((payout, index) => (
                    <div key={index} className="bg-[#0F1D2A] rounded-lg p-3 border border-[#1A3B55]/30">
                      <div className="flex justify-between">
                        <div>
                          <div className="text-white/90 text-sm">{payout.date}</div>
                          <div className="text-white/60 text-xs">{payout.event}</div>
                        </div>
                        <div className="text-[#2BCB6E] font-bold">${payout.amount}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="bg-[#071621] px-6 py-3 border-t border-[#1A3B55]/60 text-center text-white/50 text-xs">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <AlertCircle className="h-3.5 w-3.5 mr-1.5 text-white/60" />
              <span>Virtual currency only. No real money wagering.</span>
            </div>
            <div>Powered by FanaticsBet</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SocialBettingModal;
