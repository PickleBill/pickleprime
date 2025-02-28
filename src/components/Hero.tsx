
import React, { useEffect, useRef, useState } from "react";
import AnimatedButton from "./ui/AnimatedButton";
import PlayerModal from "./ui/PlayerModal";
import FacilityModal from "./ui/FacilityModal";

const Hero = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [showPlayerModal, setShowPlayerModal] = useState(false);
  const [showFacilityModal, setShowFacilityModal] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return;
      
      const { clientX, clientY } = e;
      const x = clientX / window.innerWidth;
      const y = clientY / window.innerHeight;
      
      // Subtle movement effect
      backgroundRef.current.style.transform = `translate(${x * -20}px, ${y * -20}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          ref={backgroundRef}
          className="absolute inset-0 scale-110"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 30%, rgba(43, 203, 110, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(1, 44, 61, 0.1) 0%, transparent 40%)",
            transition: "transform 0.8s cubic-bezier(0.33, 1, 0.68, 1)"
          }}
        ></div>
        
        {/* Abstract Court Lines */}
        <div className="absolute top-1/4 right-0 w-96 h-96 border-t-2 border-r-2 border-primary/20 rounded-tr-full"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 border-b-2 border-l-2 border-primary/20 rounded-bl-full"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxMTE4MjgiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6TTAgMzBoMzB2MzBIMHoiIGZpbGw9IiMyQkNCNkUiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-slide-up">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Transform Your Racquet Sports Experience
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-navy">
              <span className="text-gradient">AI-Powered</span> Analytics for Pickleball & Padel
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Upgrade any venue into a tech-enabled, social-entertainment hub — driving revenue, brand differentiation, and deeper player loyalty.
            </p>
            
            {/* Updated button layout: For Players & For Facilities side by side, followed by Schedule a Demo below */}
            <div className="flex flex-col space-y-4 items-center">
              {/* First row: For Players & For Facilities */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
                <AnimatedButton variant="outline" size="lg" onClick={() => setShowPlayerModal(true)}>
                  For Players
                </AnimatedButton>
                <AnimatedButton variant="outline" size="lg" onClick={() => setShowFacilityModal(true)}>
                  For Facilities
                </AnimatedButton>
              </div>
              
              {/* Second row: Schedule a Demo */}
              <div className="w-full sm:w-auto mt-4">
                <AnimatedButton size="lg" withArrow>
                  Schedule a Demo
                </AnimatedButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse-slow">
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 mb-2">Scroll to discover</span>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="text-primary"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Player Modal */}
      <PlayerModal 
        isOpen={showPlayerModal}
        onClose={() => setShowPlayerModal(false)}
      />

      {/* Facility Modal */}
      <FacilityModal 
        isOpen={showFacilityModal}
        onClose={() => setShowFacilityModal(false)}
      />
    </section>
  );
};

export default Hero;
