
import { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";

export function useOpenAI() {
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load the API key from localStorage
    const savedKey = localStorage.getItem("openai-api-key");
    setApiKey(savedKey);
    setIsLoading(false);
  }, []);

  const checkApiKey = (): boolean => {
    if (!apiKey) {
      toast({
        title: "API Key Required",
        description: "Please add your OpenAI API key in settings",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  return {
    apiKey,
    isLoading,
    hasKey: !!apiKey,
    checkApiKey,
  };
}
