import { useState, useEffect, useCallback } from 'react';

export function usePomodoro() {
  const [tiempo, setTiempo] = useState(25 * 60);
  const [activo, setActivo] = useState(false);

  const iniciar = useCallback(() => setActivo(true), []);
  const pausar = useCallback(() => setActivo(false), []);

  useEffect(() => {
    let interval: any;
    if (activo && tiempo > 0) {
      interval = setInterval(() => setTiempo(t => t - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [activo, tiempo]);

  return { tiempo, activo, iniciar, pausar };
}
