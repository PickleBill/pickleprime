
import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CarouselItem, { CarouselItemProps } from "./CarouselItem";
import { motion } from "framer-motion";

interface CarouselProps {
  items: CarouselItemProps[];
  visibleItems: number;
}

const Carousel: React.FC<CarouselProps> = ({ items, visibleItems }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleNextClick = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex(prev => (prev + 1) % items.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handlePrevClick = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex(prev => (prev - 1 + items.length) % items.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  // Auto-rotation effect for discoverability
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        handleNextClick();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex, isDragging]);

  // Touch and mouse events for swiping
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    if ('touches' in e) {
      setStartX(e.touches[0].clientX);
    } else {
      setStartX(e.clientX);
    }
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    
    const currentX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diff = currentX - startX;
    setOffsetX(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    if (offsetX > 50) {
      handlePrevClick();
    } else if (offsetX < -50) {
      handleNextClick();
    }
    
    setOffsetX(0);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <motion.button 
          onClick={handlePrevClick}
          className="p-2 bg-gradient-to-br from-white/10 to-transparent rounded-full text-white transition-colors"
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          whileTap={{ scale: 0.95 }}
          aria-label="Previous options"
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>
        
        <motion.div 
          className="text-white/80 text-xs font-medium flex items-center gap-1 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-[#1a9dc3]">Explore</span> features
        </motion.div>
        
        <motion.button 
          onClick={handleNextClick}
          className="p-2 bg-gradient-to-br from-white/10 to-transparent rounded-full text-white transition-colors"
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          whileTap={{ scale: 0.95 }}
          aria-label="Next options"
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>
      
      {/* Carousel pagination indicators */}
      <div className="flex justify-center gap-1 mb-2">
        {items.map((_, index) => (
          <motion.button
            key={index}
            className="w-1.5 h-1.5 rounded-full bg-white/30"
            onClick={() => {
              setIsTransitioning(true);
              setActiveIndex(index);
              setTimeout(() => setIsTransitioning(false), 300);
            }}
            animate={{
              backgroundColor: activeIndex === index ? 'rgba(26, 157, 195, 0.8)' : 'rgba(255, 255, 255, 0.3)',
              scale: activeIndex === index ? 1.3 : 1
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
      
      <div 
        ref={carouselRef}
        className="relative overflow-hidden"
        style={{ height: '120px' }}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        {/* Visual indicator of swipe functionality */}
        <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 pointer-events-none z-10 flex justify-between px-2 opacity-0 hover:opacity-20 transition-opacity">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-white to-transparent blur-md"></div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-l from-white to-transparent blur-md"></div>
        </div>

        <div 
          className="flex transition-transform duration-300 h-full"
          style={{ 
            transform: `translateX(calc(-${activeIndex * (100 / visibleItems)}% + ${offsetX}px))`,
            width: `${(items.length / visibleItems) * 100}%`
          }}
        >
          {items.map((item) => (
            <div 
              key={item.id}
              className="flex-shrink-0"
              style={{ width: `${100 / items.length}%` }}
            >
              <CarouselItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
