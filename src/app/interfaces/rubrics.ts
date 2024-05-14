export interface Rubrics {
  idevaluacion: number;
  seccion: null;
  curso: null;
  proposito: null;
  feeback: null;
  hora: null;
  idfactor: number;
  factor: string;
  recomendacion: null;
  compromiso: null;
  indicadores: Indicadore[];
}

export interface Indicadore {
  idindicador: number;
  indicador: string;
  valores: Valore[];
}

export interface Valore {
  idvaloracion: number;
  valoracion: string;
  descripcion: string;
  valor: number;
  idescala: number;
  dato: number;
}
