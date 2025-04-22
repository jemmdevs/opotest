import { useState } from 'react';
import { Question } from '../types';

interface QuestionItemProps {
  question: Question;
  index: number;
  onAnswer: (questionId: string, optionIndex: number | null) => void;
  onCorrect?: (questionId: string) => void;
  showCorrectAnswer?: boolean;
}

export default function QuestionItem({ 
  question, 
  index, 
  onAnswer, 
  onCorrect,
  showCorrectAnswer = false 
}: QuestionItemProps) {
  const handleOptionClick = (optionIndex: number) => {
    onAnswer(question.id, question.respondida === optionIndex ? null : optionIndex);
  };

  const handleCorrect = () => {
    if (onCorrect && question.respondida !== null && question.respondida !== undefined) {
      onCorrect(question.id);
    }
  };

  const isPractico = question.tipo === 'supuestoPractico';
  const correctOptionIndex = question.opciones.findIndex(opt => opt.correcta);
  const hasAnswered = question.respondida !== null && question.respondida !== undefined;
  const isCorrect = hasAnswered && question.respondida === correctOptionIndex;

  return (
    <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-start mb-3">
        <span className={`font-bold text-sm px-2 py-1 rounded mr-2 ${
          isPractico ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' 
                     : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
        }`}>
          {isPractico ? '4 pts' : '1 pt'}
        </span>
        <h3 className="text-lg font-semibold flex-1">
          {index + 1}. {question.texto}
        </h3>
      </div>
      
      <div className="space-y-2">
        {question.opciones.map((opcion, optIndex) => {
          let bgColorClass = '';
          
          if (showCorrectAnswer || question.corregida) {
            if (opcion.correcta) {
              bgColorClass = 'bg-green-100 border-green-300 dark:bg-green-900/30 dark:border-green-700';
            } else if (question.respondida === optIndex) {
              bgColorClass = 'bg-red-100 border-red-300 dark:bg-red-900/30 dark:border-red-700';
            } else {
              bgColorClass = 'bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700';
            }
          } else {
            bgColorClass = question.respondida === optIndex
              ? 'bg-blue-50 border-blue-300 dark:bg-blue-900/30 dark:border-blue-700'
              : 'bg-gray-50 border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700';
          }
          
          return (
            <button
              key={optIndex}
              onClick={() => handleOptionClick(optIndex)}
              className={`w-full text-left p-3 rounded-md border transition-colors ${bgColorClass}`}
              disabled={showCorrectAnswer || question.corregida}
            >
              <span className="font-medium">{String.fromCharCode(65 + optIndex)}.</span> {opcion.texto}
            </button>
          );
        })}
      </div>
      
      {!showCorrectAnswer && !question.corregida && onCorrect && (
        <div className="mt-4 flex justify-end">
          <button
            onClick={handleCorrect}
            disabled={!hasAnswered}
            className={`px-4 py-2 rounded-md transition-colors ${
              !hasAnswered 
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            Corregir pregunta
          </button>
        </div>
      )}
      
      {question.corregida && !showCorrectAnswer && (
        <div className={`mt-4 p-3 rounded-md ${
          isCorrect 
            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200' 
            : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200'
        }`}>
          {isCorrect 
            ? '¡Respuesta correcta!' 
            : `Respuesta incorrecta. La opción correcta es: ${String.fromCharCode(65 + correctOptionIndex)}`
          }
        </div>
      )}
    </div>
  );
} 