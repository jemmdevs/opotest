import { Question } from '../types';

interface NavegacionTestProps {
  preguntas: Question[];
  preguntaActual: number;
  onNavegar: (index: number) => void;
  onFinalizar: () => void;
}

export default function NavegacionTest({ 
  preguntas, 
  preguntaActual, 
  onNavegar, 
  onFinalizar 
}: NavegacionTestProps) {
  return (
    <>
      {/* Botones de navegación laterales fijos */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-10">
        <button
          onClick={() => onNavegar(Math.max(0, preguntaActual - 1))}
          disabled={preguntaActual === 0}
          className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
          aria-label="Pregunta anterior"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-10">
        <button
          onClick={() => onNavegar(Math.min(preguntas.length - 1, preguntaActual + 1))}
          disabled={preguntaActual === preguntas.length - 1}
          className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
          aria-label="Siguiente pregunta"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <button
              onClick={() => onNavegar(Math.max(0, preguntaActual - 1))}
              disabled={preguntaActual === 0}
              className="px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Anterior
            </button>
            <div className="mx-4 font-medium">
              {preguntaActual + 1} / {preguntas.length}
            </div>
            <button
              onClick={() => onNavegar(Math.min(preguntas.length - 1, preguntaActual + 1))}
              disabled={preguntaActual === preguntas.length - 1}
              className="px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Siguiente
            </button>
          </div>
          
          <button
            onClick={onFinalizar}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Finalizar Test
          </button>
        </div>
        
        <div className="grid grid-cols-10 gap-2">
          {preguntas.map((pregunta, index) => {
            // Verificar si la respuesta es correcta o incorrecta
            let isCorrect = false;
            let isAnswered = pregunta.respondida !== undefined && pregunta.respondida !== null;
            let isCorrected = pregunta.corregida === true;
            
            if (isAnswered && isCorrected) {
              const correctOptionIndex = pregunta.opciones.findIndex(opt => opt.correcta);
              isCorrect = pregunta.respondida === correctOptionIndex;
            }
            
            // Determinar el estilo del botón basado en el estado de la pregunta
            let buttonStyle = "flex items-center justify-center w-full h-10 rounded";
            
            if (index === preguntaActual) {
              // Pregunta actual
              buttonStyle += " bg-blue-600 text-white";
            } else if (isAnswered && isCorrected) {
              // Pregunta corregida: verde si es correcta, rojo si es incorrecta
              if (isCorrect) {
                buttonStyle += " bg-green-500 text-white dark:bg-green-600 dark:text-white";
              } else {
                buttonStyle += " bg-red-500 text-white dark:bg-red-600 dark:text-white";
              }
            } else if (isAnswered && !isCorrected) {
              // Pregunta respondida pero no corregida: azul claro
              buttonStyle += " bg-blue-200 text-blue-800 dark:bg-blue-800/50 dark:text-blue-200";
            } else {
              // Pregunta no respondida: gris
              buttonStyle += " bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
            }
            
            if (pregunta.tipo === 'supuestoPractico') {
              buttonStyle += " border-l-4 border-purple-500";
            }
            
            return (
              <button
                key={pregunta.id}
                onClick={() => onNavegar(index)}
                className={buttonStyle}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
} 