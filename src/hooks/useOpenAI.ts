
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

  const callOpenAI = async (
    endpoint: string, 
    body: any, 
    options?: RequestInit
  ): Promise<any> => {
    if (!checkApiKey()) return null;
    
    try {
      const response = await fetch(`https://api.openai.com/v1/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(body),
        ...options
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`OpenAI API Error: ${response.status} - ${JSON.stringify(errorData)}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error("OpenAI API call failed:", error);
      toast({
        title: "API Call Failed",
        description: error instanceof Error ? error.message : "Unknown error occurred",
        variant: "destructive",
      });
      return null;
    }
  };

  return {
    apiKey,
    isLoading,
    hasKey: !!apiKey,
    checkApiKey,
    callOpenAI
  };
}
