
import React, { useState } from "react";
import { X, Video, Activity, Trophy, BarChart2, Users, Play, Clock, Download, Heart, MessageSquare, Share, Volume2, Pause, ChevronRight, Settings, Filter, Award } from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { motion, AnimatePresence } from "framer-motion";
import { Progress } from "@/components/ui/progress";

interface QuickViewContentProps {
  contentType: string | null;
  onClose: () => void;
}

const QuickViewContent: React.FC<QuickViewContentProps> = ({ contentType, onClose }) => {
  // State for video player functionality
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [volume, setVolume] = useState(80);
  const [selectedStat, setSelectedStat] = useState('all');
  const [selectedTimeRange, setSelectedTimeRange] = useState('match');

  // Mock video data
  const videoClips = [
    { id: 1, title: 'Match Point', duration: '0:15', thumbnail: 'bg-gradient-to-br from-blue-600/50 to-purple-600/50' },
    { id: 2, title: 'First Set', duration: '0:22', thumbnail: 'bg-gradient-to-br from-green-600/50 to-blue-600/50' },
    { id: 3, title: 'Best Rally', duration: '0:18', thumbnail: 'bg-gradient-to-br from-orange-600/50 to-red-600/50' },
    { id: 4, title: 'Game Winning Shot', duration: '0:12', thumbnail: 'bg-gradient-to-br from-purple-600/50 to-pink-600/50' }
  ];

  if (!contentType) return null;

  const renderVideoPlayer = () => (
    <div className="relative">
      <div className={`aspect-video rounded-lg overflow-hidden ${videoClips[currentVideo].thumbnail} relative`}>
        {/* Video placeholder - in real app, this would be an actual video player */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={isPlaying ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Video className="w-16 h-16 text-white/70" />
          </motion.div>
        </div>
        
        {/* Video controls overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <motion.button 
                onClick={() => setIsPlaying(!isPlaying)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-white/20 backdrop-blur-md rounded-full"
              >
                {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white" />}
              </motion.button>
              
              <div className="text-sm text-white/90">
                {videoClips[currentVideo].title}
                <span className="text-xs text-white/60 ml-2">00:05 / {videoClips[currentVideo].duration}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Volume2 className="w-3 h-3 text-white/60" />
                <div className="w-16 h-1 bg-white/30 rounded-full overflow-hidden">
                  <div className="h-full bg-white" style={{ width: `${volume}%` }}></div>
                </div>
              </div>
              
              <motion.button 
                className="p-1 text-white/60 hover:text-white/90"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Download className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="w-full h-1 bg-white/30 rounded-full mt-3 overflow-hidden">
            <motion.div 
              className="h-full bg-[#1a9dc3]" 
              initial={{ width: "0%" }}
              animate={{ width: isPlaying ? "35%" : "0%" }}
              transition={{ duration: isPlaying ? 5 : 0, ease: "linear" }}
            ></motion.div>
          </div>
        </div>
      </div>
      
      {/* Video interaction bar */}
      <div className="flex items-center justify-between mt-3 px-1">
        <div className="flex items-center gap-3">
          <motion.button 
            className="flex items-center gap-1 text-white/60 hover:text-white/90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Heart className="w-4 h-4" />
            <span className="text-xs">24</span>
          </motion.button>
          
          <motion.button 
            className="flex items-center gap-1 text-white/60 hover:text-white/90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageSquare className="w-4 h-4" />
            <span className="text-xs">8</span>
          </motion.button>
        </div>
        
        <motion.button 
          className="flex items-center gap-1 text-white/60 hover:text-white/90"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Share className="w-4 h-4" />
          <span className="text-xs">Share</span>
        </motion.button>
      </div>
    </div>
  );

  const renderAnalyticsDashboard = () => (
    <div className="space-y-4">
      {/* Dashboard filters */}
      <div className="flex justify-between items-center mb-4 gap-2">
        <div className="flex gap-2">
          <motion.button
            onClick={() => setSelectedStat('all')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              selectedStat === 'all' 
                ? 'bg-[#1a9dc3] text-white' 
                : 'bg-navy-light/30 text-white/70 hover:bg-navy-light/50'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Overview
          </motion.button>
          
          <motion.button
            onClick={() => setSelectedStat('personal')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              selectedStat === 'personal' 
                ? 'bg-[#1a9dc3] text-white' 
                : 'bg-navy-light/30 text-white/70 hover:bg-navy-light/50'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Personal
          </motion.button>
          
          <motion.button
            onClick={() => setSelectedStat('team')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              selectedStat === 'team' 
                ? 'bg-[#1a9dc3] text-white' 
                : 'bg-navy-light/30 text-white/70 hover:bg-navy-light/50'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Team
          </motion.button>
        </div>
        
        <div className="flex items-center gap-2">
          <motion.select
            className="bg-navy-light/30 border border-white/10 rounded-md text-xs text-white/70 py-1 px-2"
            onChange={(e) => setSelectedTimeRange(e.target.value)}
            value={selectedTimeRange}
          >
            <option value="match">This Match</option>
            <option value="season">Season</option>
            <option value="year">Year</option>
          </motion.select>
          
          <motion.button
            className="p-1.5 bg-navy-light/30 rounded-md text-white/70 hover:bg-navy-light/50 hover:text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Settings className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      </div>
      
      {/* Performance metrics */}
      <motion.div 
        className="grid grid-cols-2 gap-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="col-span-2 bg-navy-light/30 backdrop-blur-sm border border-white/5 rounded-md p-3">
          <div className="flex justify-between items-center mb-1">
            <h4 className="text-sm font-medium text-white/90">Performance Trend</h4>
            <span className="text-xs text-white/50">Last 5 matches</span>
          </div>
          <div className="h-32 bg-navy-dark/50 rounded overflow-hidden relative">
            {/* Mock line chart */}
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Background grid */}
              <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
              <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
              <line x1="0" y1="75" x2="100" y2="75" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
              
              <line x1="20" y1="0" x2="20" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
              <line x1="40" y1="0" x2="40" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
              <line x1="60" y1="0" x2="60" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
              <line x1="80" y1="0" x2="80" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
              
              {/* Performance line */}
              <motion.path 
                d="M0,70 L20,65 L40,40 L60,50 L80,30 L100,20" 
                fill="none" 
                stroke="#1a9dc3" 
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              
              {/* Area under the line */}
              <motion.path 
                d="M0,70 L20,65 L40,40 L60,50 L80,30 L100,20 L100,100 L0,100 Z" 
                fill="url(#gradient)"
                opacity="0.3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              
              {/* Gradient definition */}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1a9dc3" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#1a9dc3" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Data points */}
            <motion.div 
              className="absolute left-[20%] top-[65%] w-2 h-2 rounded-full bg-white border-2 border-[#1a9dc3]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6 }}
            />
            <motion.div 
              className="absolute left-[40%] top-[40%] w-2 h-2 rounded-full bg-white border-2 border-[#1a9dc3]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8 }}
            />
            <motion.div 
              className="absolute left-[60%] top-[50%] w-2 h-2 rounded-full bg-white border-2 border-[#1a9dc3]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 }}
            />
            <motion.div 
              className="absolute left-[80%] top-[30%] w-2 h-2 rounded-full bg-white border-2 border-[#1a9dc3]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2 }}
            />
          </div>
        </div>
        
        <motion.div 
          className="bg-navy-light/30 backdrop-blur-sm border border-white/5 rounded-md p-3"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <h4 className="text-sm font-medium text-white/90 mb-1">Win Rate</h4>
          <div className="h-24 bg-navy-dark/50 rounded flex flex-col items-center justify-center">
            <motion.div 
              className="text-3xl font-bold text-[#1a9dc3]"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              68%
            </motion.div>
            <motion.div 
              className="text-xs text-white/50 mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              +5% vs. last match
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-navy-light/30 backdrop-blur-sm border border-white/5 rounded-md p-3"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <h4 className="text-sm font-medium text-white/90 mb-1">Shot Accuracy</h4>
          <div className="h-24 bg-navy-dark/50 rounded flex items-center justify-center relative">
            {/* Circular progress indicator */}
            <svg className="w-16 h-16" viewBox="0 0 100 100">
              <circle 
                cx="50" 
                cy="50" 
                r="40" 
                fill="none" 
                stroke="rgba(255,255,255,0.1)" 
                strokeWidth="8"
              />
              <motion.circle 
                cx="50" 
                cy="50" 
                r="40" 
                fill="none" 
                stroke="#1a9dc3" 
                strokeWidth="8"
                strokeDasharray="251.2"
                strokeDashoffset="70.336" // 251.2 * (1 - 0.72)
                strokeLinecap="round"
                initial={{ strokeDashoffset: 251.2 }}
                animate={{ strokeDashoffset: 70.336 }}
                transition={{ duration: 1.5, delay: 0.3 }}
              />
            </svg>
            
            <motion.div 
              className="absolute text-2xl font-bold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              72%
            </motion.div>
          </div>
        </motion.div>
        
        {/* Key stats section */}
        <motion.div 
          className="col-span-2 bg-navy-light/30 backdrop-blur-sm border border-white/5 rounded-md p-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <h4 className="text-sm font-medium text-white/90 mb-3">Key Stats</h4>
          
          <div className="space-y-2">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-white/70">Aces</span>
                <span className="text-xs font-medium text-white">8</span>
              </div>
              <Progress value={80} className="h-1.5 bg-white/10" />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-white/70">First Serve %</span>
                <span className="text-xs font-medium text-white">65%</span>
              </div>
              <Progress value={65} className="h-1.5 bg-white/10" />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-white/70">Break Points</span>
                <span className="text-xs font-medium text-white">4/6</span>
              </div>
              <Progress value={67} className="h-1.5 bg-white/10" />
            </div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Premium badge */}
      <motion.div 
        className="bg-gradient-to-r from-[#FFD700]/20 to-[#FFD700]/10 border border-[#FFD700]/30 rounded-lg p-3 mt-2 flex justify-between items-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        <div className="flex items-start gap-2">
          <Award className="w-5 h-5 text-[#FFD700] mt-0.5" />
          <div>
            <h4 className="text-sm font-medium text-white/90">Advanced Analytics</h4>
            <p className="text-xs text-white/70">Unlock advanced stats and insights</p>
          </div>
        </div>
        
        <motion.button 
          className="px-3 py-1.5 bg-[#FFD700] text-navy-dark rounded text-xs font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Upgrade
        </motion.button>
      </motion.div>
    </div>
  );

  const renderTournamentsView = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-2">
        <div className="flex gap-2">
          <motion.button
            className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#1a9dc3] text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Upcoming
          </motion.button>
          
          <motion.button
            className="px-3 py-1.5 rounded-full text-xs font-medium bg-navy-light/30 text-white/70 hover:bg-navy-light/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Registered
          </motion.button>
          
          <motion.button
            className="px-3 py-1.5 rounded-full text-xs font-medium bg-navy-light/30 text-white/70 hover:bg-navy-light/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Past
          </motion.button>
        </div>
        
        <motion.button
          className="p-1.5 bg-navy-light/30 rounded-md text-white/70 hover:bg-navy-light/50 hover:text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Filter className="w-3.5 h-3.5" />
        </motion.button>
      </div>
      
      {/* Featured tournament */}
      <motion.div 
        className="bg-gradient-to-br from-[#1a9dc3]/30 to-navy-light/30 backdrop-blur-sm border border-[#1a9dc3]/20 rounded-lg overflow-hidden"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="h-24 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMwMDFhMmMiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6TTAgMzBoMzB2MzBIMHoiIGZpbGw9IiMxYTlkYzMiIG9wYWNpdHk9Ii4yIi8+PC9nPjwvc3ZnPg==')]">
          <div className="w-full h-full flex items-center justify-center backdrop-blur-sm bg-navy-dark/50">
            <div className="text-center">
              <motion.div 
                className="text-2xl font-bold text-white"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Summer Championship
              </motion.div>
              <motion.div 
                className="text-sm text-white/70"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                July 15-18, 2023
              </motion.div>
            </div>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-[#FFD700]" />
              <span className="text-sm font-medium text-white">$10,000 Prize Pool</span>
            </div>
            <div className="text-xs text-white/60 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              Registration ends in 5 days
            </div>
          </div>
          
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-xs">
              <span className="text-white/70">Location:</span>
              <span className="text-white">Central Sports Complex, San Diego</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-white/70">Format:</span>
              <span className="text-white">Double Elimination</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-white/70">Division:</span>
              <span className="text-white">Open, 5.0+</span>
            </div>
          </div>
          
          <motion.button 
            className="w-full py-2 bg-[#1a9dc3] text-white rounded-md text-sm font-medium flex items-center justify-center gap-1"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Register Now
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>
      </motion.div>
      
      {/* Tournament list */}
      <div className="space-y-3 mt-2">
        {['Spring Championship', 'Summer Tournament Series', 'Regional Masters'].map((tournament, index) => (
          <motion.div 
            key={tournament} 
            className="bg-navy-light/30 hover:bg-navy-light/40 backdrop-blur-sm border border-white/5 rounded-md p-3 cursor-pointer transition-all duration-300 hover:scale-[1.02] flex justify-between items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 + (index * 0.1) }}
          >
            <div>
              <p className="text-sm font-medium text-white/90">{tournament}</p>
              <p className="text-xs text-white/50">Starts in {14 - (index * 3)} days</p>
            </div>
            <div className="p-1.5 bg-[#1a9dc3]/20 rounded-full">
              <Trophy className="w-4 h-4 text-[#1a9dc3]" />
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.button 
        className="w-full py-2 bg-navy-light/30 hover:bg-navy-light/50 text-white/70 hover:text-white rounded-md text-sm transition-all"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        View All Tournaments
      </motion.button>
    </div>
  );

  const getContent = () => {
    switch (contentType) {
      case 'video':
        return (
          <motion.div 
            className="bg-gradient-to-br from-navy-dark/90 to-navy/90 backdrop-blur-lg rounded-lg p-6 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-[#1a9dc3]/20">
                  <Video className="w-5 h-5 text-[#1a9dc3]" />
                </div>
                <h3 className="text-lg font-semibold text-white">Video Clips</h3>
              </div>
              <motion.button 
                onClick={onClose}
                className="p-1 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>
            
            <div className="space-y-4">
              {/* Video player */}
              {renderVideoPlayer()}
              
              {/* Thumbnail selections */}
              <div>
                <h4 className="text-sm font-medium text-white/80 mb-2">More Clips</h4>
                <div className="grid grid-cols-4 gap-2">
                  {videoClips.map((clip, index) => (
                    <motion.button
                      key={clip.id}
                      onClick={() => setCurrentVideo(index)}
                      className={`aspect-video rounded overflow-hidden relative border-2 ${
                        currentVideo === index 
                          ? 'border-[#1a9dc3]' 
                          : 'border-transparent hover:border-white/30'
                      } transition-all duration-300`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className={`w-full h-full ${clip.thumbnail}`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="w-4 h-4 text-white/70" />
                      </div>
                      {currentVideo === index && (
                        <motion.div 
                          className="absolute bottom-0 left-0 right-0 h-1 bg-[#1a9dc3]"
                          layoutId="activeVideo"
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end mt-2">
                <AnimatedButton variant="glass" size="sm" active={true} glowColor="rgba(26, 157, 195, 0.5)">
                  See All Clips
                </AnimatedButton>
              </div>
            </div>
          </motion.div>
        );
        
      case 'analytics':
        return (
          <motion.div 
            className="bg-gradient-to-br from-navy-dark/90 to-navy/90 backdrop-blur-lg rounded-lg p-6 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-[#1a9dc3]/20">
                  <Activity className="w-5 h-5 text-[#1a9dc3]" />
                </div>
                <h3 className="text-lg font-semibold text-white">Analytics Dashboard</h3>
              </div>
              <motion.button 
                onClick={onClose}
                className="p-1 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>
            
            {renderAnalyticsDashboard()}
          </motion.div>
        );
        
      case 'tournaments':
        return (
          <motion.div 
            className="bg-gradient-to-br from-navy-dark/90 to-navy/90 backdrop-blur-lg rounded-lg p-6 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-[#1a9dc3]/20">
                  <Trophy className="w-5 h-5 text-[#1a9dc3]" />
                </div>
                <h3 className="text-lg font-semibold text-white">Tournaments</h3>
              </div>
              <motion.button 
                onClick={onClose}
                className="p-1 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>
            
            {renderTournamentsView()}
          </motion.div>
        );
        
      case 'stats':
        return (
          <motion.div 
            className="bg-gradient-to-br from-navy-dark/90 to-navy/90 backdrop-blur-lg rounded-lg p-6 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-[#1a9dc3]/20">
                  <BarChart2 className="w-5 h-5 text-[#1a9dc3]" />
                </div>
                <h3 className="text-lg font-semibold text-white">Match Statistics</h3>
              </div>
              <motion.button 
                onClick={onClose}
                className="p-1 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>
            
            <div className="space-y-4">
              <p className="text-white/70">Detailed match statistics and performance metrics.</p>
              
              <div className="space-y-3">
                <div className="bg-navy-light/30 backdrop-blur-sm border border-white/5 rounded-md p-3">
                  <h4 className="text-sm font-medium text-white/90 mb-2">Team Comparison</h4>
                  
                  {['Aces', 'First Serve %', 'Second Serve %', 'Break Points'].map((stat, index) => (
                    <motion.div 
                      key={stat} 
                      className="flex items-center justify-between mb-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <span className="text-xs text-white/70">{stat}</span>
                      <div className="flex-1 mx-3">
                        <div className="h-1.5 bg-navy-dark/70 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-gradient-to-r from-[#1a9dc3] to-[#4CAF50]" 
                            style={{ width: `${Math.floor(Math.random() * 70 + 30)}%` }}
                            initial={{ width: "0%" }}
                            animate={{ width: `${Math.floor(Math.random() * 70 + 30)}%` }}
                            transition={{ duration: 0.8, delay: 0.2 * index }}
                          />
                        </div>
                      </div>
                      <span className="text-xs font-medium text-white/90">{Math.floor(Math.random() * 100)}%</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <motion.div 
                    className="bg-navy-light/30 backdrop-blur-sm border border-white/5 rounded-md p-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h4 className="text-sm font-medium text-white/90 mb-1">Shot Distribution</h4>
                    <div className="h-24 bg-navy-dark/50 rounded flex items-center justify-center relative">
                      {/* Simple pie chart */}
                      <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                        <motion.path
                          d="M50 50 L50 10 A40 40 0 0 1 85 65 Z"
                          fill="#4CAF50"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.7 }}
                        />
                        <motion.path
                          d="M50 50 L85 65 A40 40 0 0 1 15 65 Z"
                          fill="#FFC107"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.8 }}
                        />
                        <motion.path
                          d="M50 50 L15 65 A40 40 0 0 1 50 10 Z"
                          fill="#2196F3"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.9 }}
                        />
                      </svg>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-navy-light/30 backdrop-blur-sm border border-white/5 rounded-md p-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h4 className="text-sm font-medium text-white/90 mb-1">Win Probability</h4>
                    <div className="h-24 bg-navy-dark/50 rounded flex items-center justify-center">
                      <motion.div 
                        className="text-2xl font-bold text-[#1a9dc3]"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                      >
                        76%
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              <div className="flex justify-end mt-2">
                <AnimatedButton variant="glass" size="sm" active={true} glowColor="rgba(26, 157, 195, 0.5)">
                  View Full Stats
                </AnimatedButton>
              </div>
            </div>
          </motion.div>
        );
      
      default:
        return null;
    }
  };

  return (
    <AnimatePresence mode="wait">
      {getContent()}
    </AnimatePresence>
  );
};

export default QuickViewContent;
