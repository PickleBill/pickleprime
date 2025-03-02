
import React, { useState } from "react";
import Carousel from "./carousel/Carousel";
import QuickViewContent from "./quick-view/QuickViewContent";
import FooterActions from "./footer/FooterActions";
import { getCarouselItems } from "./carousel/carouselData";

interface ModalFooterProps {
  onClose: () => void;
}

const ModalFooter: React.FC<ModalFooterProps> = ({ onClose }) => {
  const [quickViewContent, setQuickViewContent] = useState<string | null>(null);
  const visibleItems = 3; // Number of items visible at once

  const handleQuickView = (itemId: string) => {
    setQuickViewContent(itemId);
  };

  const closeQuickView = () => {
    setQuickViewContent(null);
  };

  // Get carousel items with the handleQuickView function
  const carouselItems = getCarouselItems(handleQuickView);

  return (
    <div className="border-t border-white/10">
      {/* Quick View Area */}
      <QuickViewContent 
        contentType={quickViewContent} 
        onClose={closeQuickView} 
      />
      
      {/* Carousel Footer */}
      <div className="p-4 flex flex-col">
        <Carousel 
          items={carouselItems}
          visibleItems={visibleItems}
        />
        
        {/* Footer Actions */}
        <FooterActions onClose={onClose} />
      </div>
    </div>
  );
};

export default ModalFooter;
