/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { SliderTransformations } from './components/SliderTransformations';
import { QuizSection } from './components/QuizSection';
import { HowItWorks } from './components/HowItWorks';
import { AppMissions } from './components/AppMissions';
import { TransformationMap } from './components/TransformationMap';
import { Authority } from './components/Authority';
import { Community } from './components/Community';
import { Footer } from './components/Footer';

export default function App() {
  const quizRef = useRef<HTMLDivElement | null>(null);

  const handleStartQuiz = () => {
    if (quizRef.current) {
      quizRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      const element = document.getElementById('quiz-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0F1318] text-white selection:bg-[#00D97E]/30 selection:text-[#00D97E] overflow-x-hidden">
      {/* Header */}
      <Header onStartQuiz={handleStartQuiz} />

      {/* Main Sections flow strictly following user structural blocks */}
      <main>
        {/* Bloco 1: HERO SECTION */}
        <Hero onStartQuiz={handleStartQuiz} />

        {/* Bloco 2: PROBLEMA */}
        <Problem />

        {/* Bloco 3: ANTES E DEPOIS (Slider transformations) */}
        <SliderTransformations />

        {/* Bloco 5: QUIZ (SEÇÃO MAIS IMPORTANTE DA LP) */}
        <QuizSection quizRef={quizRef} />

        {/* Bloco 6: COMO FUNCIONA */}
        <HowItWorks />

        {/* Bloco 7 & Bloco 9: APRESENTAÇÃO DO APP & GAMIFICAÇÃO */}
        <AppMissions />

        {/* Bloco 10: MAPA DA TRANSFORMAÇÃO */}
        <TransformationMap />

        {/* Bloco 4: AUTORIDADE */}
        <Authority />

        {/* Bloco 8: COMUNIDADE */}
        <Community />
      </main>

      {/* Bloco 11 & FINAL CTA / FOOTER */}
      <Footer onStartQuiz={handleStartQuiz} />
    </div>
  );
}

