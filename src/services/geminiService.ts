import { GEMINI_CONFIG, getGenerateUrl } from '../config/gemini';

export const geminiService = {
  async ask(prompt: string, context: string = ''): Promise<string> {
    const response = await fetch(getGenerateUrl(), {
      method: 'POST',
      body: JSON.stringify({
        contents: [{
          parts: [{ text: `Context: ${context}\n\nTask: ${prompt}` }]
        }]
      })
    });
    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  }
};
