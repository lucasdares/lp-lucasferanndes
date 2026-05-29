import React, { useState } from 'react';
import { transformations } from '../data';
import { PremiumImage } from './PremiumImage';
import { ChevronLeft, ChevronRight, Scale, Calendar, Star, Milestone, Grid, ZoomIn } from 'lucide-react';

export function SliderTransformations() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'men' | 'women'>('all');

  const filteredTransformations = transformations.filter(item => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'women') return item.id === 't1';
    return item.id !== 't1'; // Men list
  });

  // Bound index on category toggle
  const listToUse = filteredTransformations.length > 0 ? filteredTransformations : transformations;
  const activeIndex = currentIndex >= listToUse.length ? 0 : currentIndex;
  const currentItem = listToUse[activeIndex] || transformations[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % listToUse.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + listToUse.length) % listToUse.length);
  };

  return (
    <section className="relative overflow-hidden py-24 bg-[#0F1318]" id="antes-depois">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-[-10%] w-[45%] h-[45%] bg-[#00D97E]/3 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#151A21] border border-[#1B2129] text-xs font-mono font-bold tracking-widest text-[#00D97E] mb-4">
            <Milestone className="h-4 w-4" />
            SISTEMA DE RESULTADOS COMPROVADOS
          </div>
          <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight mb-4">
            Resultados reais de pessoas reais
          </h2>
          <p className="text-base sm:text-lg text-[#AAB3BD] max-w-xl mx-auto">
            Nenhuma transformação física aconteceu por sorte. Todas seguiram um sistema de monitoramento rigoroso e consistente.
          </p>

          {/* Category Filters */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => { setSelectedCategory('all'); setCurrentIndex(0); }}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-[#00D97E] to-[#00C26E] text-[#0F1318] shadow-md'
                  : 'bg-[#151A21] text-[#AAB3BD] hover:text-white border border-[#1B2129]'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => { setSelectedCategory('women'); setCurrentIndex(0); }}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                selectedCategory === 'women'
                  ? 'bg-gradient-to-r from-[#00D97E] to-[#00C26E] text-[#0F1318] shadow-md'
                  : 'bg-[#151A21] text-[#AAB3BD] hover:text-white border border-[#1B2129]'
              }`}
            >
              Feminino
            </button>
            <button
              onClick={() => { setSelectedCategory('men'); setCurrentIndex(0); }}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                selectedCategory === 'men'
                  ? 'bg-gradient-to-r from-[#00D97E] to-[#00C26E] text-[#0F1318] shadow-md'
                  : 'bg-[#151A21] text-[#AAB3BD] hover:text-white border border-[#1B2129]'
              }`}
            >
              Masculino
            </button>
          </div>
        </div>

        {/* Dynamic Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left / Top - Transformation Image with border frame */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="relative group p-1.5 bg-[#151A21] rounded-2xl border border-[#1B2129] shadow-2xl overflow-hidden w-full aspect-[4/5] sm:aspect-square flex justify-center items-center">
              
              {/* Dynamic HUD Grid Overlay */}
              <div className="absolute inset-0 border-[0.5px] border-[#00D97E]/10 pointer-events-none z-10"></div>
              <div className="absolute top-4 left-4 z-20 flex px-2.5 py-1 rounded bg-[#0F1318]/90 border border-[#1B2129] font-mono text-[9px] text-[#00D97E] font-bold tracking-widest gap-1 items-center">
                <Grid className="h-3 w-3" />
                DADOS DE BIOMETRIA VERIFICADOS
              </div>

              {/* Transformation Image Block (handles fallback) */}
              <div className="w-full h-full relative overflow-hidden rounded-xl bg-[#0F1318]">
                <PremiumImage
                  src={currentItem.beforeImg}
                  alt={currentItem.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Floating watermark */}
              <div className="absolute bottom-4 right-4 z-20 px-2 py-1 bg-gradient-to-r from-[#00D97E] to-[#00C26E] text-[#0F1318] uppercase text-[9px] font-mono font-bold tracking-widest rounded shadow-lg flex items-center gap-1">
                <ZoomIn className="h-3 w-3" />
                MÉTODO EVO
              </div>
            </div>

            {/* Quick dot navigation indicator */}
            <div className="hidden sm:flex items-center gap-2 mt-4">
              {listToUse.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? 'w-8 bg-[#00D97E]' : 'w-2 bg-[#1B2129] hover:bg-[#AAB3BD]'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right / Bottom - Metrics & Profile Review */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Nav Arrows */}
            <div className="flex items-center justify-between lg:justify-start lg:gap-4 mb-6">
              <span className="text-xs font-mono text-[#AAB3BD] tracking-wider uppercase">
                {activeIndex + 1} de {listToUse.length} transformações
              </span>
              <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2 sm:p-2.5 rounded-full bg-[#151A21] border border-[#1B2129] text-[#AAB3BD] hover:text-white hover:border-[#AAB3BD]/30 transition-all duration-200"
                  aria-label="Anterior"
                  id="prev-slide-btn"
                >
                  <ChevronLeft className="h-4.5 w-4.5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 sm:p-2.5 rounded-full bg-[#151A21] border border-[#1B2129] text-[#AAB3BD] hover:text-white hover:border-[#AAB3BD]/30 transition-all duration-200"
                  aria-label="Próximo"
                  id="next-slide-btn"
                >
                  <ChevronRight className="h-4.5 w-4.5" />
                </button>
              </div>
            </div>

            {/* Client Card Title */}
            <div className="mb-6">
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                {currentItem.name}
              </h3>
              <div className="flex items-center gap-1.5 mt-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-mono text-[#00D97E] font-semibold uppercase tracking-wider bg-[#00D97E]/10 px-2 py-0.5 rounded border border-[#00D97E]/20">
                  {currentItem.isExpert ? 'LÍDER DE COMUNIDADE' : 'EVO ALUNO'}
                </span>
              </div>
            </div>

            {/* Stat Pills */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="p-3.5 bg-[#151A21] border border-[#1B2129] rounded-xl flex items-center gap-3">
                <span className="p-2 bg-[#00D97E]/10 text-[#00D97E] rounded-lg">
                  <Scale className="h-4 w-4" />
                </span>
                <div>
                  <span className="block text-[10px] font-mono text-[#AAB3BD] uppercase tracking-wider">Histórico</span>
                  <span className="block text-xs font-bold text-white mt-0.5">
                    {currentItem.beforeWeight} → {currentItem.afterWeight}
                  </span>
                </div>
              </div>

              <div className="p-3.5 bg-[#151A21] border border-[#1B2129] rounded-xl flex items-center gap-3">
                <span className="p-2 bg-[#00D97E]/10 text-[#00D97E] rounded-lg">
                  <Calendar className="h-4 w-4" />
                </span>
                <div>
                  <span className="block text-[10px] font-mono text-[#AAB3BD] uppercase tracking-wider">Tempo</span>
                  <span className="block text-xs font-bold text-white mt-0.5">{currentItem.duration}</span>
                </div>
              </div>
            </div>

            {/* Detailed narrative testimonial/description */}
            <div className="p-5 sm:p-6 bg-[#151A21] border border-[#1B2129] rounded-2xl relative overflow-hidden mb-6">
              <span className="absolute top-3 right-4 font-display font-black text-6xl text-[#1B2129] select-none pointer-events-none">“</span>
              <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-2 text-[#00D97E]">Conquista Principal</h4>
              <p className="text-sm text-[#AAB3BD] leading-relaxed relative z-10">
                {currentItem.achievedGoal}
              </p>
            </div>

            <div className="text-center sm:text-left">
              <span className="inline-block text-xs font-mono text-[#AAB3BD]">
                ⚠️ Todos os dados foram coletados sob o método biométrico de bioimpedância de consultoria médica autorizada.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
export default SliderTransformations;
