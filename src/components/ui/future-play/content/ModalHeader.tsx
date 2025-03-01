
import React from "react";

const ModalHeader: React.FC = () => {
  return (
    <div className="relative p-6 md:p-8 border-b border-white/10">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxMTE4MjgiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6TTAgMzBoMzB2MzBIMHoiIGZpbGw9IiMyQkNCNkUiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')]"></div>
      
      <div className="relative flex flex-col items-center text-center">
        <span className="inline-block bg-white/10 backdrop-blur-sm text-primary/80 px-4 py-1 rounded-full text-xs font-medium mb-2 border border-primary/20">
          SwingNet
        </span>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
          The Future of Play
        </h2>
      </div>
    </div>
  );
};

export default ModalHeader;
