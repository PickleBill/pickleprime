
import React, { useState } from "react";
import { Video, Play, Pause, Volume2, Download, Heart, MessageSquare, Share2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ShareFooter from "./share-modal/ShareFooter";

interface VideoClipsModalProps {
  isOpen: boolean;
  onClose: () => void;
  player1Score: number;
  player2Score: number;
  gameTime: number;
}

const VideoClipsModal: React.FC<VideoClipsModalProps> = ({
  isOpen,
  onClose,
  player1Score,
  player2Score,
  gameTime
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [volume, setVolume] = useState(75);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  // Mock video data
  const videoClips = [
    { id: 1, title: 'Match Point', duration: '0:15', thumbnail: 'bg-gradient-to-br from-blue-600/50 to-purple-600/50' },
    { id: 2, title: 'First Set', duration: '0:22', thumbnail: 'bg-gradient-to-br from-green-600/50 to-blue-600/50' },
    { id: 3, title: 'Best Rally', duration: '0:18', thumbnail: 'bg-gradient-to-br from-orange-600/50 to-red-600/50' },
    { id: 4, title: 'Game Winning Shot', duration: '0:12', thumbnail: 'bg-gradient-to-br from-purple-600/50 to-pink-600/50' }
  ];

  if (!isOpen) return null;

  const handleCloseClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleShare = () => {
    console.log("Sharing video clip:", videoClips[currentVideo]);
    onClose();
  };

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videoClips.length);
    setIsPlaying(false);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videoClips.length) % videoClips.length);
    setIsPlaying(false);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 animate-fade-in"
      onClick={handleCloseClick}
    >
      <div className="relative bg-navy-dark/90 rounded-xl border border-white/10 w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="border-b border-white/10 p-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-[#ea384c]/20">
              <Video className="w-5 h-5 text-[#ea384c]" />
            </div>
            <h3 className="text-xl font-semibold text-white">Video Clips</h3>
          </div>
          <button 
            onClick={onClose}
            className="text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-y-auto p-5">
          {/* Video player */}
          <div className="relative">
            <div className={`aspect-video rounded-lg overflow-hidden ${videoClips[currentVideo].thumbnail} relative`}>
              {/* Video placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={isPlaying ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Video className="w-24 h-24 text-white/70" />
                </motion.div>
              </div>

              {/* Video navigation arrows */}
              <button 
                onClick={(e) => {e.stopPropagation(); prevVideo();}}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 p-2 rounded-full hover:bg-black/50"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              <button 
                onClick={(e) => {e.stopPropagation(); nextVideo();}}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 p-2 rounded-full hover:bg-black/50"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
              
              {/* Video controls overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <motion.button 
                      onClick={() => setIsPlaying(!isPlaying)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-md rounded-full"
                    >
                      {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
                    </motion.button>
                    
                    <div className="text-sm text-white">
                      <div className="font-medium">{videoClips[currentVideo].title}</div>
                      <div className="text-xs text-white/70">00:05 / {videoClips[currentVideo].duration}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <motion.button
                        onClick={() => setShowVolumeSlider(!showVolumeSlider)}
                        className="p-2 text-white/80 hover:text-white rounded-full hover:bg-white/10"
                      >
                        <Volume2 className="w-5 h-5" />
                      </motion.button>
                      
                      {showVolumeSlider && (
                        <div className="absolute bottom-full mb-2 bg-navy-dark/90 p-2 rounded-md">
                          <input 
                            type="range" 
                            min="0" 
                            max="100" 
                            value={volume} 
                            onChange={(e) => setVolume(parseInt(e.target.value))} 
                            className="w-24 accent-[#1a9dc3]"
                          />
                        </div>
                      )}
                    </div>
                    
                    <motion.button 
                      className="p-2 text-white/80 hover:text-white rounded-full hover:bg-white/10"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Download className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
                
                {/* Progress bar */}
                <div className="w-full h-1.5 bg-white/30 rounded-full mt-3 overflow-hidden">
                  <motion.div 
                    className="h-full bg-[#ea384c]" 
                    initial={{ width: "0%" }}
                    animate={{ width: isPlaying ? "35%" : "0%" }}
                    transition={{ duration: isPlaying ? 5 : 0, ease: "linear" }}
                  ></motion.div>
                </div>
              </div>
            </div>
            
            {/* Video interaction bar */}
            <div className="flex items-center justify-between mt-3 px-1">
              <div className="flex items-center gap-5">
                <motion.button 
                  className="flex items-center gap-1.5 text-white/80 hover:text-white/100"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart className="w-5 h-5" />
                  <span className="text-sm">24</span>
                </motion.button>
                
                <motion.button 
                  className="flex items-center gap-1.5 text-white/80 hover:text-white/100"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageSquare className="w-5 h-5" />
                  <span className="text-sm">8</span>
                </motion.button>
              </div>
              
              <motion.button 
                className="flex items-center gap-1.5 text-white/80 hover:text-white/100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Share2 className="w-5 h-5" />
                <span className="text-sm">Share</span>
              </motion.button>
            </div>
          </div>
          
          {/* More clips section */}
          <div className="mt-6">
            <h4 className="text-lg font-medium text-white mb-3">More Clips</h4>
            <div className="grid grid-cols-4 gap-3">
              {videoClips.map((clip, index) => (
                <motion.button
                  key={clip.id}
                  onClick={() => {
                    setCurrentVideo(index);
                    setIsPlaying(false);
                  }}
                  className={`aspect-video rounded-lg overflow-hidden relative border-2 ${
                    currentVideo === index 
                      ? 'border-[#ea384c]' 
                      : 'border-transparent hover:border-white/30'
                  } transition-all duration-300`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`w-full h-full ${clip.thumbnail}`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="w-8 h-8 text-white/70" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-1.5">
                    <p className="text-xs text-white truncate">{clip.title}</p>
                    <p className="text-[10px] text-white/70">{clip.duration}</p>
                  </div>
                  {currentVideo === index && (
                    <motion.div 
                      className="absolute bottom-[-2px] left-0 right-0 h-1 bg-[#ea384c]"
                      layoutId="activeVideoIndicator"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <ShareFooter 
          onClose={onClose} 
          handleShare={handleShare} 
          isScheduling={false} 
        />
      </div>
    </div>
  );
};

export default VideoClipsModal;
