
import React from "react";

interface ModalBackdropProps {
  onClick: () => void;
}

const ModalBackdrop: React.FC<ModalBackdropProps> = ({ onClick }) => {
  return (
    <div 
      className="absolute inset-0 bg-navy/90 backdrop-blur-sm animate-fade-in"
      style={{
        backgroundImage: `
          radial-gradient(circle at 15% 85%, rgba(43, 203, 110, 0.1), transparent 25%),
          radial-gradient(circle at 85% 15%, rgba(26, 157, 195, 0.1), transparent 25%)
        `,
        backgroundSize: "100% 100%"
      }}
      onClick={onClick}
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxMTE4MjgiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6TTAgMzBoMzB2MzBIMHoiIGZpbGw9IiMyQkNCNkUiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')]"></div>
      
      {/* Animated neon lines */}
      <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute inset-y-0 left-1/3 w-px bg-gradient-to-b from-transparent via-[#1a9dc3]/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-primary/20 via-transparent to-primary/20"></div>
    </div>
  );
};

export default ModalBackdrop;
