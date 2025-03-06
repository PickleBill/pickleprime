
import React, { useState } from "react";
import { Key } from "lucide-react";
import APIKeyManager from "./APIKeyManager";
import { useOpenAI } from "@/hooks/useOpenAI";

const NavbarAPIButton: React.FC = () => {
  const [showAPIManager, setShowAPIManager] = useState(false);
  const { hasKey } = useOpenAI();

  return (
    <>
      <button
        onClick={() => setShowAPIManager(true)}
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
      
      <APIKeyManager
        isOpen={showAPIManager}
        onClose={() => setShowAPIManager(false)}
      />
    </>
  );
};

export default NavbarAPIButton;
