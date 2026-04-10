export interface Materia {
  id?: number;
  nombre: string;
}

export interface Unidad {
  id?: number;
  materiaId: number;
  nombre: string;
  orden: number;
}

export interface Archivo {
  id?: number;
  unidadId: number;
  nombre: string;
  tipo: string;
  prioridad: 'FUNDAMENTAL' | 'IMPORTANTE' | 'COMPLEMENTARIO';
  contenido: string;
}

export interface Resumen {
  id?: number;
  unidadId: number;
  tipo: 'largo' | 'corto';
  contenidoMarkdown: string;
}

export interface IntentoTest {
  id?: number;
  unidadId: number;
  fecha: Date;
  puntaje: number;
}
