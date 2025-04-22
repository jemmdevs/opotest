import { ResultadoTest as ResultadoTestType } from '../types';

interface ResultadoTestProps {
  resultado: ResultadoTestType;
  onReintentar: () => void;
}

export default function ResultadoTest({ resultado, onReintentar }: ResultadoTestProps) {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-center mb-6">Resultados del Test</h2>
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-medium">Puntuación Total:</span>
          <span className="text-xl font-bold">{resultado.puntuacionTotal}/191</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
          <div 
            className={`h-4 rounded-full ${
              resultado.porcentaje >= 50 ? 'bg-green-500' : 'bg-red-500'
            }`}
            style={{ width: `${resultado.porcentaje}%` }}
          ></div>
        </div>
        <div className="text-right mt-1 text-sm font-medium">
          {resultado.porcentaje.toFixed(2)}%
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">
            Parte 1 (1 punto/pregunta)
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Aciertos:</span>
              <span className="font-medium text-green-600 dark:text-green-400">{resultado.aciertosNormales}</span>
            </div>
            <div className="flex justify-between">
              <span>Fallos:</span>
              <span className="font-medium text-red-600 dark:text-red-400">{resultado.fallosNormales}</span>
            </div>
            <div className="flex justify-between">
              <span>Sin responder:</span>
              <span className="font-medium text-gray-600 dark:text-gray-400">{resultado.sinResponderNormales}</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
              <span>Total de puntos:</span>
              <span className="font-medium">{resultado.aciertosNormales - (resultado.fallosNormales * 3)}</span>
            </div>
          </div>
        </div>
        
        <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 text-purple-600 dark:text-purple-400">
            Parte 2 (4 puntos/pregunta)
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Aciertos:</span>
              <span className="font-medium text-green-600 dark:text-green-400">{resultado.aciertosPracticos}</span>
            </div>
            <div className="flex justify-between">
              <span>Fallos:</span>
              <span className="font-medium text-red-600 dark:text-red-400">{resultado.fallosPracticos}</span>
            </div>
            <div className="flex justify-between">
              <span>Sin responder:</span>
              <span className="font-medium text-gray-600 dark:text-gray-400">{resultado.sinResponderPracticos}</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
              <span>Total de puntos:</span>
              <span className="font-medium">{(resultado.aciertosPracticos * 4) - (resultado.fallosPracticos * 3)}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center">
        <button 
          onClick={onReintentar}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Reintentar Test
        </button>
      </div>
    </div>
  );
} 