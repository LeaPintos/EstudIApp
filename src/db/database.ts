import Dexie, { type EntityTable } from 'dexie';
import { Materia, Unidad, Archivo, Resumen, IntentoTest } from '../types';

interface EstudIAppDB extends Dexie {
  materias: EntityTable<Materia, 'id'>;
  unidades: EntityTable<Unidad, 'id'>;
  archivos: EntityTable<Archivo, 'id'>;
  resumenes: EntityTable<Resumen, 'id'>;
  intentos: EntityTable<IntentoTest, 'id'>;
}

const db = new Dexie('EstudIAppDB') as EstudIAppDB;

db.version(1).stores({
  materias: '++id, nombre',
  unidades: '++id, materiaId, nombre, orden',
  archivos: '++id, unidadId, nombre, prioridad',
  resumenes: '++id, unidadId, tipo',
  intentos: '++id, unidadId, fecha'
});

export { db };
