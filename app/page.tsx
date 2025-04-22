'use client';

import { useState } from 'react';
import Link from 'next/link';
import { tests } from './data/tests';

export default function Home() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">OpoTest</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Plataforma de tests para estudiantes de oposiciones
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Tests Disponibles
            </h2>
          </div>
          
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {tests.map(test => (
              <div key={test.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 dark:text-white">
                      {test.titulo}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                      {test.descripcion}
                    </p>
                  </div>
                  <Link
                    href={`/test/${test.id}`}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Iniciar Test
                  </Link>
                </div>
              </div>
            ))}
            
            {tests.length === 0 && (
              <div className="p-6 text-center text-gray-500 dark:text-gray-400">
                No hay tests disponibles por el momento.
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Información sobre los Tests
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <p>
              Cada test está dividido en dos partes:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-medium">Primera parte:</span> 79 preguntas tipo test, cada una vale 1 punto.</li>
              <li><span className="font-medium">Segunda parte:</span> 28 supuestos prácticos, cada uno vale 4 puntos.</li>
            </ul>
            <p className="font-medium text-red-600 dark:text-red-400">
              ¡Atención! Cada pregunta fallada penaliza 3 puntos.
            </p>
            <p>
              Las preguntas sin responder no suman ni restan puntos.
            </p>
            <p>
              La puntuación máxima es de 191 puntos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
