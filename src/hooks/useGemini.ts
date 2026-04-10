import { useState, useEffect } from 'react';
import { GEMINI_CONFIG } from '../config/gemini';

export function useGemini() {
  const [conectado, setConectado] = useState(false);

  useEffect(() => {
    if (GEMINI_CONFIG.apiKey) {
      setConectado(true);
    }
  }, []);

  return { conectado };
}
