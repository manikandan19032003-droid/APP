
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

export const getTutorResponse = async (history: Message[], prompt: string) => {
  // Always initialize GoogleGenAI inside the function with process.env.API_KEY directly as per guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const model = 'gemini-3-flash-preview';
  
  const systemInstruction = `
    You are Lumina, a world-class AI Tutor. 
    Your tone is encouraging, patient, and highly intellectual. 
    Instead of just giving answers, you try to guide the student with Socratic questioning when appropriate. 
    Use analogies to explain complex concepts. 
    Keep responses formatted in clean Markdown.
  `;

  try {
    // Construct the contents array. Gemini API requires that a multi-turn conversation starts with a 'user' role.
    // We filter out the initial assistant greeting if it's the first message in history.
    const contents = [
      ...history
        .filter((m, i) => !(i === 0 && m.role === 'assistant'))
        .map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }]
        })),
      { role: 'user', parts: [{ text: prompt }] }
    ];

    const response = await ai.models.generateContent({
      model,
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
        topP: 0.9,
      }
    });

    // Access the response text via the .text property (not a method) as per guidelines
    return response.text || "I'm sorry, I couldn't process that. Could you rephrase your question?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The tutor is currently resting. Please try again in a moment.";
  }
};
