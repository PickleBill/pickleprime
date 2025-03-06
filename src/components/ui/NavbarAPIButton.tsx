
import React, { useState, useEffect } from "react";
import { Key } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const NavbarAPIButton: React.FC = () => {
  const [showAPIForm, setShowAPIForm] = useState(false);
  const [apiKey, setApiKey] = useState<string>("");
  const [hasKey, setHasKey] = useState(false);

  useEffect(() => {
    // Check if API key exists in localStorage
    const savedKey = localStorage.getItem("openai-api-key");
    setHasKey(!!savedKey);
    if (savedKey) {
      setApiKey(savedKey);
    }
  }, []);

  const handleSaveKey = () => {
    if (!apiKey.trim()) {
      toast({
        title: "Error",
        description: "API key cannot be empty",
        variant: "destructive",
      });
      return;
    }
    
    // Save to localStorage
    localStorage.setItem("openai-api-key", apiKey);
    setHasKey(true);
    
    toast({
      title: "Success",
      description: "OpenAI API key saved successfully",
      variant: "default",
    });
    
    setShowAPIForm(false);
  };

  const handleClearKey = () => {
    localStorage.removeItem("openai-api-key");
    setApiKey("");
    setHasKey(false);
    toast({
      title: "API Key Removed",
      description: "Your OpenAI API key has been removed",
      variant: "default",
    });
  };

  return (
    <>
      <button
        onClick={() => setShowAPIForm(true)}
        className={`p-2 rounded-md flex items-center gap-1.5 text-sm ${
          hasKey 
            ? "bg-teal-500/20 text-teal-400 hover:bg-teal-500/30" 
            : "bg-amber-500/20 text-amber-400 hover:bg-amber-500/30"
        }`}
        title={hasKey ? "OpenAI API Key Configured" : "Configure OpenAI API Key"}
      >
        <Key className="w-4 h-4" />
        <span className="hidden md:inline">
          {hasKey ? "API Key" : "Set API Key"}
        </span>
      </button>
      
      {showAPIForm && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowAPIForm(false);
          }}
        >
          <div className="bg-navy-dark border border-teal-400/30 rounded-lg max-w-md w-full p-5 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                <Key className="w-5 h-5 text-teal-400" />
                API Key
              </h2>
              <button 
                onClick={() => setShowAPIForm(false)}
                className="text-white/70 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
              </button>
            </div>

            <div className="mb-6">
              <label className="block text-white/80 text-sm mb-1">
                OpenAI API Key
              </label>
              <input 
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk-..."
                className="w-full bg-navy-light/60 border border-white/20 rounded px-3 py-2 text-white 
                         focus:outline-none focus:border-teal-400/70"
              />
              <div className="flex justify-between">
                <p className="text-xs text-white/60 mt-1">
                  Your key is stored locally in this browser
                </p>
                {apiKey && (
                  <button
                    onClick={handleClearKey}
                    className="text-xs text-red-400 hover:text-red-300 mt-1"
                  >
                    Clear key
                  </button>
                )}
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowAPIForm(false)}
                className="px-4 py-2 border border-white/20 rounded text-white/80 hover:bg-white/10"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveKey}
                className="px-4 py-2 bg-teal-500 hover:bg-teal-600 rounded text-white flex items-center gap-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M20 6 9 17l-5-5"></path></svg>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarAPIButton;
