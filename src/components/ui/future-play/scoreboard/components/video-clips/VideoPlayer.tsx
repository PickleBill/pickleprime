import React, { useState, useRef, useEffect } from "react";
import { Video, Play, Pause, Volume2, Download, Share2, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { VideoClip } from "./types";
import VideoControls from "./VideoControls";
import VideoInteractionBar from "./VideoInteractionBar";

interface VideoPlayerProps {
  currentVideo: number;
  videoClips: VideoClip[];
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  volume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
  progress: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  showVolumeSlider: boolean;
  setShowVolumeSlider: React.Dispatch<React.SetStateAction<boolean>>;
  prevVideo: () => void;
  nextVideo: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  currentVideo,
  videoClips,
  isPlaying,
  setIsPlaying,
  volume,
  setVolume,
  progress,
  setProgress,
  showVolumeSlider,
  setShowVolumeSlider,
  prevVideo,
  nextVideo
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  const togglePlayback = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        if (progressInterval.current) {
          clearInterval(progressInterval.current);
          progressInterval.current = null;
        }
      } else {
        videoRef.current.play();
        progressInterval.current = setInterval(() => {
          if (videoRef.current) {
            setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
          }
        }, 100);
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume / 100;
    }
  }, [volume]);

  useEffect(() => {
    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, []);

  useEffect(() => {
    setProgress(0);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }, [currentVideo, setProgress]);

  return (
    <div className="relative">
      <div className="aspect-video rounded-lg overflow-hidden relative">
        <video
          ref={videoRef}
          src={videoClips[currentVideo].videoSrc}
          poster={videoClips[currentVideo].thumbnail}
          className="w-full h-full object-cover"
          loop
          muted={volume === 0}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onTimeUpdate={() => {
            if (videoRef.current) {
              setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
            }
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={isPlaying ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Video className="w-24 h-24 text-white/70" />
          </motion.div>
        </div>

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
        
        <VideoControls 
          isPlaying={isPlaying}
          togglePlayback={togglePlayback}
          volume={volume}
          setVolume={setVolume}
          progress={progress}
          showVolumeSlider={showVolumeSlider}
          setShowVolumeSlider={setShowVolumeSlider}
          currentVideo={videoClips[currentVideo]}
          videoRef={videoRef}
        />
      </div>
      
      <VideoInteractionBar currentVideo={currentVideo} />
    </div>
  );
};

export default VideoPlayer;
