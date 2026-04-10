import { useState, useCallback } from 'react';
import { db } from '../db/database';
import { extractorService } from '../services/extractorService';
import { Archivo } from '../types';

export function useArchivos(unidadId: number) {
  const [archivos, setArchivos] = useState<Archivo[]>([]);
  const [procesando, setProcesando] = useState<string | null>(null);

  const subir = useCallback(async (file: File, prioridad: Archivo['prioridad'] = 'IMPORTANTE') => {
    setProcesando(file.name);
    try {
      const contenido = await extractorService.extraerTexto(file);
      const nuevoArchivo: Archivo = {
        unidadId,
        nombre: file.name,
        tipo: file.type,
        prioridad,
        contenido
      };
      await db.archivos.add(nuevoArchivo);
    } finally {
      setProcesando(null);
    }
  }, [unidadId]);

  return { archivos, procesando, subir };
}
