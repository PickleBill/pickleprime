
import React from "react";
import { X } from "lucide-react";
import AnimatedButton from "../../AnimatedButton";

interface ModalContentProps {
  children: React.ReactNode;
  onClose: () => void;
}

const ModalContent: React.FC<ModalContentProps> = ({ children, onClose }) => {
  return (
    <div 
      className="relative w-full max-w-5xl max-h-[90vh] bg-navy-dark backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-white/10 animate-scale-in"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
        aria-label="Close modal"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Content */}
      {children}
      
      {/* Footer */}
      <div className="p-6 border-t border-white/10 flex justify-between items-center bg-navy-dark">
        <div className="text-white/60 text-sm">
          Powered by SwingNet AI
        </div>
        <AnimatedButton onClick={onClose} size="md">
          Back to Home
        </AnimatedButton>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1a9dc3]/5 rounded-full blur-3xl -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      {/* Animated corner accents */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/30 rounded-tl-xl pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#1a9dc3]/30 rounded-tr-xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#1a9dc3]/30 rounded-bl-xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/30 rounded-br-xl pointer-events-none"></div>
    </div>
  );
};

export default ModalContent;
