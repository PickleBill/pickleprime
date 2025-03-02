
import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CarouselItem, { CarouselItemProps } from "./CarouselItem";

interface CarouselProps {
  items: CarouselItemProps[];
  visibleItems: number;
}

const Carousel: React.FC<CarouselProps> = ({ items, visibleItems }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
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

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <button 
          onClick={handlePrevClick}
          className="p-2 text-white/70 hover:text-white transition-colors"
          aria-label="Previous options"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <div className="text-white/50 text-xs">
          Slide for more options
        </div>
        
        <button 
          onClick={handleNextClick}
          className="p-2 text-white/70 hover:text-white transition-colors"
          aria-label="Next options"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      
      <div 
        ref={carouselRef}
        className="relative overflow-hidden"
        style={{ height: '100px' }}
      >
        <div 
          className="flex transition-transform duration-300 h-full"
          style={{ 
            transform: `translateX(-${activeIndex * (100 / visibleItems)}%)`,
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
