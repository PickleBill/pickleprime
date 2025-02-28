
import React, { useState, useRef, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedButton from "./ui/AnimatedButton";
import DashboardModal from "./ui/DashboardModal";

const AboutSection = () => {
  const [showDashboard, setShowDashboard] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Array of images for the carousel
  const carouselImages = [
    "/lovable-uploads/b772fd79-037c-4170-944c-392b4bdea72d.png",
    "/lovable-uploads/c8c26cf4-e8ff-48db-b3ff-a497749005b2.png",
    "/lovable-uploads/f6a5f1d2-6b3c-4940-bff5-e72057054635.png",
    "/lovable-uploads/52327bfd-294c-46cf-abbc-598425b4ed4a.png",
    "/lovable-uploads/7f9dd4fa-704a-467b-8951-44d38612abb5.png"
  ];

  // Auto-scroll the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <section id="about" className="bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Carousel */}
          <div className="relative animate-slide-in">
            <div className="rounded-xl overflow-hidden shadow-xl">
              {/* Carousel Container */}
              <div 
                ref={carouselRef}
                className="relative w-full h-80 sm:h-96 md:h-[450px] overflow-hidden"
              >
                {/* Carousel Images */}
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                      index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Pickleball Technology ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                
                {/* Carousel Controls */}
                <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
                  <button
                    onClick={goToPrevious}
                    className="h-10 w-10 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center text-navy hover:bg-white transition-colors shadow-md"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="h-10 w-10 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center text-navy hover:bg-white transition-colors shadow-md"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
                
                {/* Carousel Indicators */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentIndex 
                          ? "w-8 bg-primary" 
                          : "w-2 bg-white/70 hover:bg-white/90"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent z-10 pointer-events-none"></div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-navy/5 rounded-full -z-10"></div>
          </div>

          {/* Right Column - Content */}
          <div className="animate-slide-up">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Vision
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy">
              The Ultimate Tech Layer for Racket Sports
            </h2>
            <p className="text-gray-700 mb-6">
              PickleBills delivers a comprehensive AI and analytics platform for the rapidly growing pickleball and padel communities. We help facility operators create a hybrid digital to physical experience for their players, driving engagement and revenue.
            </p>

            <div className="space-y-4 mb-8">
              {/* Feature Item 1 */}
              <div className="flex items-start gap-3">
                <div className="shrink-0 bg-primary/10 rounded-full p-1">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-navy">Tech-Enhanced Experience</h3>
                  <p className="text-gray-600 text-sm">
                    Transform any venue into an interactive, high-tech entertainment center
                  </p>
                </div>
              </div>

              {/* Feature Item 2 */}
              <div className="flex items-start gap-3">
                <div className="shrink-0 bg-primary/10 rounded-full p-1">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-navy">Player Engagement</h3>
                  <p className="text-gray-600 text-sm">
                    Foster deeper loyalty through analytics, competition, and social sharing
                  </p>
                </div>
              </div>

              {/* Feature Item 3 */}
              <div className="flex items-start gap-3">
                <div className="shrink-0 bg-primary/10 rounded-full p-1">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-navy">Revenue Generation</h3>
                  <p className="text-gray-600 text-sm">
                    New streams through premium features, sponsorships, and increased player retention
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <AnimatedButton 
                variant="primary"
                size="md"
                onClick={() => setShowDashboard(true)}
                className="shadow-md"
              >
                See How it Works
              </AnimatedButton>
              
              <a
                href="#solution"
                className="inline-flex items-center text-primary font-medium hover:underline gap-1 group py-2"
              >
                Discover our solution
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Modal */}
      <DashboardModal isOpen={showDashboard} onClose={() => setShowDashboard(false)} />
    </section>
  );
};

export default AboutSection;
