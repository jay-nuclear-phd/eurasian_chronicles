import { GoogleGenAI } from "@google/genai";

// Ensure API key is present
const apiKey = process.env.API_KEY || '';
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const analyzePostContent = async (text: string): Promise<string> => {
  if (!ai) {
    return "API Key is missing. Cannot generate analysis.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: text,
      config: {
        systemInstruction: "You are a literary critic and editor. Analyze the provided text excerpt from a book about life in Russia. Provide a brief, thoughtful commentary on the themes and writing style. Write in Korean."
      }
    });
    
    return response.text || "분석을 생성할 수 없습니다.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "AI 분석 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
  }
};

export const generateWelcomeMessage = async (): Promise<string> => {
    if (!ai) return "환영합니다! (AI 연결 안됨)";
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: "Write a short, poetic welcome message (1 sentence) for a website called 'Eurasian Chronicles' about a student's life in Russia. In Korean.",
        });
        return response.text || "유라시아의 깊은 겨울과 뜨거운 여름, 그 사이의 기록에 오신 것을 환영합니다.";
    } catch (e) {
        return "유라시아의 깊은 겨울과 뜨거운 여름, 그 사이의 기록에 오신 것을 환영합니다.";
    }
}