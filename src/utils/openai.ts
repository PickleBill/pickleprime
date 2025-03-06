
/**
 * Utility functions for working with the OpenAI API
 */

// Function to get the API key from localStorage
export const getOpenAIApiKey = (): string | null => {
  return localStorage.getItem("openai-api-key");
};

// Basic function to send a request to OpenAI's chat completions endpoint
export const callOpenAIChatAPI = async (
  messages: Array<{ role: string; content: string }>,
  options?: {
    model?: string;
    temperature?: number;
    maxTokens?: number;
  }
) => {
  const apiKey = getOpenAIApiKey();
  
  if (!apiKey) {
    throw new Error("OpenAI API key not found");
  }
  
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: options?.model || "gpt-4o",
      messages,
      temperature: options?.temperature ?? 0.7,
      max_tokens: options?.maxTokens,
    }),
  });
  
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(`OpenAI API Error: ${response.status} - ${JSON.stringify(errorData)}`);
  }
  
  return await response.json();
};

// Example usage function for generating text with the OpenAI API
export const generateText = async (
  prompt: string,
  options?: {
    model?: string;
    temperature?: number;
    maxTokens?: number;
  }
): Promise<string> => {
  try {
    const result = await callOpenAIChatAPI(
      [{ role: "user", content: prompt }],
      options
    );
    
    return result.choices[0].message.content;
  } catch (error) {
    console.error("Error generating text with OpenAI:", error);
    throw error;
  }
};
