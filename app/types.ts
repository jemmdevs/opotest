export type TipoQuestion = 'normal' | 'supuestoPractico';

export interface Opcion {
  texto: string;
  correcta: boolean;
}

export interface Question {
  id: string;
  texto: string;
  opciones: Opcion[];
  tipo: TipoQuestion;
  respondida?: number | null; // Índice de la opción seleccionada o null si no contestada
  corregida?: boolean; // Indica si la pregunta ha sido corregida
}

export interface Test {
  id: string;
  titulo: string;
  descripcion: string;
  questions: Question[];
}

export interface ResultadoTest {
  aciertosNormales: number;
  fallosNormales: number;
  sinResponderNormales: number;
  aciertosPracticos: number;
  fallosPracticos: number;
  sinResponderPracticos: number;
  puntuacionTotal: number;
  porcentaje: number;
} 