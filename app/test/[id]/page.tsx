'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { tests, saveTestState, getTestState } from '../../data/tests';
import { Question, ResultadoTest as ResultadoTestType } from '../../types';
import QuestionItem from '../../components/QuestionItem';
import NavegacionTest from '../../components/NavegacionTest';
import ResultadoTest from '../../components/ResultadoTest';

export default function TestPage() {
  const params = useParams();
  const router = useRouter();
  const testId = params.id as string;
  
  const [test, setTest] = useState(() => {
    const testFound = tests.find(t => t.id === testId);
    if (!testFound) return null;
    return testFound;
  });
  
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [previousQuestionIndex, setPreviousQuestionIndex] = useState<number | null>(null); // Para seguir la pregunta anterior
  const [testFinalizado, setTestFinalizado] = useState(false);
  const [resultado, setResultado] = useState<ResultadoTestType | null>(null);
  
  useEffect(() => {
    // Limpiar localStorage para asegurar datos actualizados
    if (typeof window !== 'undefined') {
      localStorage.removeItem(`test_${testId}`);
    }

    if (!test) {
      router.push('/');
      return;
    }
    
    // Usar las preguntas directamente del test en lugar de localStorage
    setQuestions(test.questions);
    
    // Log para depuración
    console.log(`Cargadas ${test.questions.length} preguntas del test`);
  }, [test, testId, router]);
  
  // Guardar el estado cuando cambian las respuestas
  useEffect(() => {
    if (questions.length > 0) {
      saveTestState(testId, questions);
    }
  }, [questions, testId]);
  
  const handleAnswer = (questionId: string, optionIndex: number | null) => {
    setQuestions(prevQuestions => 
      prevQuestions.map(q => 
        q.id === questionId ? { ...q, respondida: optionIndex, corregida: false } : q
      )
    );
  };
  
  const handleCorrect = (questionId: string) => {
    setQuestions(prevQuestions => 
      prevQuestions.map(q => 
        q.id === questionId ? { ...q, corregida: true } : q
      )
    );
  };
  
  const handleNavigation = (index: number) => {
    // Guardar la pregunta actual como la anterior antes de cambiar
    setPreviousQuestionIndex(currentQuestionIndex);
    setCurrentQuestionIndex(index);
  };
  
  const calcularResultado = (): ResultadoTestType => {
    let aciertosNormales = 0;
    let fallosNormales = 0;
    let sinResponderNormales = 0;
    let aciertosPracticos = 0;
    let fallosPracticos = 0;
    let sinResponderPracticos = 0;
    
    questions.forEach(question => {
      const esNormal = question.tipo === 'normal';
      const esPractico = question.tipo === 'supuestoPractico';
      
      if (question.respondida === undefined || question.respondida === null) {
        if (esNormal) sinResponderNormales++;
        if (esPractico) sinResponderPracticos++;
      } else {
        const respuestaCorrecta = question.opciones.findIndex(opt => opt.correcta);
        const esAcierto = question.respondida === respuestaCorrecta;
        
        if (esNormal) {
          if (esAcierto) aciertosNormales++;
          else fallosNormales++;
        }
        
        if (esPractico) {
          if (esAcierto) aciertosPracticos++;
          else fallosPracticos++;
        }
      }
    });
    
    // Cálculo de puntuación según reglas:
    // Primer tipo: 1 punto por acierto, -3 por fallo
    // Segundo tipo: 4 puntos por acierto, -3 por fallo
    const puntosNormales = aciertosNormales - (fallosNormales * 3);
    const puntosPracticos = (aciertosPracticos * 4) - (fallosPracticos * 3);
    const puntuacionTotal = puntosNormales + puntosPracticos;
    
    // Porcentaje sobre 191 puntos (79 de la parte 1 + 112 de la parte 2)
    const porcentaje = (puntuacionTotal / 191) * 100;
    
    return {
      aciertosNormales,
      fallosNormales,
      sinResponderNormales,
      aciertosPracticos,
      fallosPracticos,
      sinResponderPracticos,
      puntuacionTotal,
      porcentaje
    };
  };
  
  const handleFinalizarTest = () => {
    const result = calcularResultado();
    setResultado(result);
    setTestFinalizado(true);
  };
  
  const handleReintentarTest = () => {
    // Resetear respuestas
    setQuestions(prevQuestions => 
      prevQuestions.map(q => ({ ...q, respondida: null, corregida: false }))
    );
    setCurrentQuestionIndex(0);
    setPreviousQuestionIndex(null);
    setTestFinalizado(false);
    setResultado(null);
  };
  
  if (!test) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Test no encontrado...</p>
      </div>
    );
  }
  
  if (testFinalizado && resultado) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">{test.titulo}</h1>
        <ResultadoTest resultado={resultado} onReintentar={handleReintentarTest} />
      </div>
    );
  }
  
  // Ya no necesitamos esto, ahora usaremos el campo corregida
  // const previousQuestionAnswered = previousQuestionIndex !== null && 
  //   questions[previousQuestionIndex]?.respondida !== null && 
  //   questions[previousQuestionIndex]?.respondida !== undefined;
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">{test.titulo}</h1>
      <p className="text-sm text-gray-500 text-center mb-4">Total de preguntas cargadas: {questions.length}</p>
      
      {questions.length > 0 ? (
        <>
          <NavegacionTest 
            preguntas={questions}
            preguntaActual={currentQuestionIndex}
            onNavegar={handleNavigation}
            onFinalizar={handleFinalizarTest}
          />
          
          {/* Ya no mostraremos automáticamente la pregunta anterior */}
          
          {/* Pregunta actual */}
          <QuestionItem 
            question={questions[currentQuestionIndex]} 
            index={currentQuestionIndex}
            onAnswer={handleAnswer}
            onCorrect={handleCorrect}
            showCorrectAnswer={false}
          />
        </>
      ) : (
        <p className="text-center p-8">No hay preguntas disponibles en este test.</p>
      )}
    </div>
  );
} 