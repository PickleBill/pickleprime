
import React, { useState, useEffect } from "react";
import { X, Check, Key } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface APIKeyManagerProps {
  isOpen: boolean;
  onClose: () => void;
}

const APIKeyManager: React.FC<APIKeyManagerProps> = ({ isOpen, onClose }) => {
  const [openaiApiKey, setOpenaiApiKey] = useState<string>("");
  
  useEffect(() => {
    // Load the API key from localStorage when component mounts
    const savedKey = localStorage.getItem("openai-api-key");
    if (savedKey) {
      setOpenaiApiKey(savedKey);
    }
  }, []);

  const handleSaveKey = () => {
    if (!openaiApiKey.trim()) {
      toast({
        title: "Error",
        description: "API key cannot be empty",
        variant: "destructive",
      });
      return;
    }
    
    // Save to localStorage
    localStorage.setItem("openai-api-key", openaiApiKey);
    
    toast({
      title: "Success",
      description: "OpenAI API key saved successfully",
      variant: "default",
    });
    
    onClose();
  };

  const handleClearKey = () => {
    localStorage.removeItem("openai-api-key");
    setOpenaiApiKey("");
    toast({
      title: "API Key Removed",
      description: "Your OpenAI API key has been removed",
      variant: "default",
    });
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-navy-dark border border-teal-400/30 rounded-lg max-w-md w-full p-5 shadow-xl animate-in fade-in slide-in-from-bottom-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <Key className="w-5 h-5 text-teal-400" />
            API Key Manager
          </h2>
          <button 
            onClick={onClose}
            className="text-white/70 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mb-6">
          <p className="text-white/80 mb-4 text-sm">
            Enter your OpenAI API key below. This key will be stored in your browser's local storage
            and will be available for all your Lovable projects when accessed from this browser.
          </p>
          
          <div className="space-y-3">
            <div>
              <label className="block text-white/80 text-sm mb-1">
                OpenAI API Key
              </label>
              <input 
                type="password"
                value={openaiApiKey}
                onChange={(e) => setOpenaiApiKey(e.target.value)}
                placeholder="sk-..."
                className="w-full bg-navy-light/60 border border-white/20 rounded px-3 py-2 text-white 
                         focus:outline-none focus:border-teal-400/70"
              />
              <div className="flex justify-between">
                <p className="text-xs text-white/60 mt-1">
                  Your key is stored locally and never sent to our servers
                </p>
                {openaiApiKey && (
                  <button
                    onClick={handleClearKey}
                    className="text-xs text-red-400 hover:text-red-300 mt-1"
                  >
                    Clear key
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-white/20 rounded text-white/80 hover:bg-white/10"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveKey}
            className="px-4 py-2 bg-teal-500 hover:bg-teal-600 rounded text-white flex items-center gap-1"
          >
            <Check className="w-4 h-4" />
            Save API Key
          </button>
        </div>
      </div>
    </div>
  );
};

export default APIKeyManager;
