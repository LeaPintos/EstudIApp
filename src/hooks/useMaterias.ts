import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../db/database';
import { Materia } from '../types';

export function useMaterias() {
  const materias = useLiveQuery(() => db.materias.toArray());
  
  const crear = async (nombre: string) => {
    await db.materias.add({ nombre });
  };

  const eliminar = async (id: number) => {
    await db.materias.delete(id);
  };

  return { materias, crear, eliminar };
}
