
import React, { useRef, useEffect, useState } from 'react';
import { X, Play, Pause, Volume2 } from 'lucide-react';

export interface HighlightViewProps {
  highlightTimer: number;
  onBackClick: () => void;
}

const HighlightView: React.FC<HighlightViewProps> = ({ 
  highlightTimer,
  onBackClick
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(80);
  const [showControls, setShowControls] = useState(false);

  // Video source - tennis highlight reel
  const videoSrc = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGRleHc0bzZsaDQ2cW9kZWQxMjRzd3RrNWR2MzF2YjluNXM5c256YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT0xejDDiMP0RcljMs/giphy.mp4';

  // Auto-play the video when mounted
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(err => {
          console.log('Auto-play was prevented:', err);
          setIsPlaying(false);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  // Update volume when it changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume / 100;
    }
  }, [volume]);

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative flex flex-col h-full bg-navy-dark/90">
      <div className="absolute top-3 right-3 z-10">
        <button 
          onClick={onBackClick}
          className="p-2 rounded-full bg-navy/50 hover:bg-navy/70 transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>
      </div>
      
      {/* Video content */}
      <div className="flex-1 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-emerald-500/20 z-0" />
        
        {/* Actual video element */}
        <div className="relative w-full h-full flex items-center justify-center">
          <video
            ref={videoRef}
            src={videoSrc}
            className="max-w-full max-h-full object-contain"
            loop
            muted={volume === 0}
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
          />
          
          {/* Video controls that appear on hover */}
          <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 z-10 
                          bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 
                          flex items-center gap-4 transition-opacity duration-300
                          ${showControls ? 'opacity-100' : 'opacity-0'}`}>
            <button 
              onClick={togglePlayback}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            >
              {isPlaying ? 
                <Pause className="w-5 h-5 text-white" /> : 
                <Play className="w-5 h-5 text-white" />
              }
            </button>
            
            <div className="flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-white/70" />
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={volume} 
                onChange={(e) => setVolume(parseInt(e.target.value))} 
                className="w-24 accent-emerald-500"
              />
            </div>
          </div>
          
          {/* Overlay title */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 text-white">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-sm font-medium">Highlight Replay</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Progress bar for the highlight */}
      <div className="p-4 bg-navy-dark border-t border-white/10">
        <div className="w-full bg-navy/50 rounded-full h-2 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-emerald-500 to-sky-500 h-full rounded-full transition-all duration-300 ease-linear"
            style={{ width: `${highlightTimer}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default HighlightView;
