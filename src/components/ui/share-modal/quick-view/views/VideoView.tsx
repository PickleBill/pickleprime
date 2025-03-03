
import React, { useState, useRef } from "react";
import { Video, Play, Pause, Volume2, Download, Heart, MessageSquare, Share } from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { motion } from "framer-motion";

interface VideoViewProps {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  currentVideo: number;
  setCurrentVideo: React.Dispatch<React.SetStateAction<number>>;
  volume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
}

// Enhanced video data with actual videos/GIFs
const videoClips = [
  { 
    id: 1, 
    title: 'Match Point', 
    duration: '0:15', 
    thumbnail: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnAydWM0YnRuMHY0NjJqZW8zMXJkN2tzaHp2Y2R5dXp0cWxucjJnaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BGKHrjfTMZX4g9y/giphy.gif',
    videoSrc: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnAydWM0YnRuMHY0NjJqZW8zMXJkN2tzaHp2Y2R5dXp0cWxucjJnaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BGKHrjfTMZX4g9y/giphy.mp4'
  },
  { 
    id: 2, 
    title: 'First Set', 
    duration: '0:22', 
    thumbnail: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2JxeXd5ZDQ1bHV5MHJnY2tyNXYzMm5yMnhlZGl2cHlzMzlhc3dveCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohzdMk3uz9WSpdTvW/giphy.gif',
    videoSrc: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2JxeXd5ZDQ1bHV5MHJnY2tyNXYzMm5yMnhlZGl2cHlzMzlhc3dveCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohzdMk3uz9WSpdTvW/giphy.mp4'
  },
  { 
    id: 3, 
    title: 'Best Rally', 
    duration: '0:18', 
    thumbnail: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGRleHc0bzZsaDQ2cW9kZWQxMjRzd3RrNWR2MzF2YjluNXM5c256YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT0xejDDiMP0RcljMs/giphy.gif',
    videoSrc: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGRleHc0bzZsaDQ2cW9kZWQxMjRzd3RrNWR2MzF2YjluNXM5c256YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT0xejDDiMP0RcljMs/giphy.mp4'
  },
  { 
    id: 4, 
    title: 'Game Winning Shot', 
    duration: '0:12', 
    thumbnail: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHdjYWgwYXdqcXk3bmR1c3Q2bjdmeHNsMjJudnp1dDA3eXQxczBnOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlSOBBikMGcCzCM/giphy.gif',
    videoSrc: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHdjYWgwYXdqcXk3bmR1c3Q2bjdmeHNsMjJudnp1dDA3eXQxczBnOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlSOBBikMGcCzCM/giphy.mp4'
  }
];

const VideoView: React.FC<VideoViewProps> = ({ 
  isPlaying, 
  setIsPlaying, 
  currentVideo, 
  setCurrentVideo, 
  volume, 
  setVolume 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle video playback
  const togglePlayback = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Update video volume when volume state changes
  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume / 100;
    }
  }, [volume]);

  // Reset video and pause when changing clips
  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      if (isPlaying) {
        videoRef.current.play();
      }
    }
  }, [currentVideo]);

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
      </div>
      
      <div className="space-y-4">
        {/* Video player */}
        <div className="relative">
          <div className="aspect-video rounded-lg overflow-hidden relative">
            {/* Actual video element */}
            <video
              ref={videoRef}
              src={videoClips[currentVideo].videoSrc}
              poster={videoClips[currentVideo].thumbnail}
              className="w-full h-full object-cover"
              loop
              muted={volume === 0}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
            
            {/* Play icon overlay */}
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
                    onClick={togglePlayback}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white/20 backdrop-blur-md rounded-full"
                  >
                    {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white" />}
                  </motion.button>
                  
                  <div className="text-sm text-white/90">
                    {videoClips[currentVideo].title}
                    <span className="text-xs text-white/60 ml-2">
                      {videoRef.current ? 
                        `${Math.floor(videoRef.current.currentTime / 60)}:${Math.floor(videoRef.current.currentTime % 60).toString().padStart(2, '0')}` : 
                        '00:00'} / {videoClips[currentVideo].duration}
                    </span>
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
                  style={{ 
                    width: videoRef.current ? 
                      `${(videoRef.current.currentTime / videoRef.current.duration) * 100}%` : 
                      "0%" 
                  }}
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
                <img 
                  src={clip.thumbnail} 
                  alt={clip.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
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
};

export default VideoView;
