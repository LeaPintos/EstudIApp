export const GEMINI_CONFIG = {
  apiKey: import.meta.env.VITE_GEMINI_API_KEY as string,
  model: 'gemini-2.0-flash',
  baseUrl: 'https://generativelanguage.googleapis.com/v1beta',
  maxRequestsPorMinuto: 15,
  maxRequestsPorDia: 1500,
  defaults: {
    temperature: 0.7,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
  },
  resumen: {
    temperature: 0.4,
    topP: 0.9,
    topK: 30,
    maxOutputTokens: 8192,
  },
  test: {
    temperature: 0.8,
    topP: 0.95,
    topK: 50,
    maxOutputTokens: 8192,
  },
} as const;

export function getGenerateUrl(): string {
  return `${GEMINI_CONFIG.baseUrl}/models/${GEMINI_CONFIG.model}:generateContent?key=${GEMINI_CONFIG.apiKey}`;
}
