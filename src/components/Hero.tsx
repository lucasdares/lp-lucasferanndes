import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Activity, Award } from 'lucide-react';
import { PremiumImage } from './PremiumImage';

interface HeroProps {
  onStartQuiz: () => void;
}

export function Hero({ onStartQuiz }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:py-32" id="o-sistema">
      {/* Background gradients / blur grids */}
      <div className="absolute top-[-10%] left-[-15%] w-[50%] h-[50%] bg-[#00D97E]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-15%] w-[60%] h-[60%] bg-[#00C26E]/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1B2129]/80 border border-[#00D97E]/30 text-xs font-mono font-semibold tracking-wider text-[#00D97E] mb-6 shadow-[0_0_15px_rgba(0,217,126,0.1)]">
              <Zap className="h-3.5 w-3.5 fill-[#00D97E]" />
              SISTEMA DE DIAGNÓSTICO ATIVO — VER 3.5
            </div>

            {/* Giant Title */}
            <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.08] mb-6">
              Descubra o que está <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D97E] to-[#00C26E] drop-shadow-[0_2px_15px_rgba(0,217,126,0.15)]">
                impedindo sua evolução
              </span>{' '}
              física.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-[#AAB3BD] font-normal leading-relaxed max-w-2xl mb-8">
              Em menos de <span className="text-white font-semibold">60 segundos</span> descubra seu perfil corporal exato e receba um plano de ação completo baseado na metodologia científica do <span className="text-white font-semibold">Método EVO</span>.
            </p>

            {/* Call to Action Container */}
            <div className="w-full flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button
                onClick={onStartQuiz}
                className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full bg-gradient-to-r from-[#00D97E] to-[#00C26E] text-[#0F1318] text-base font-bold uppercase tracking-wider overflow-hidden shadow-[0_8px_30px_rgba(0,217,126,0.35)] hover:shadow-[0_8px_35px_rgba(0,217,126,0.55)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
                id="hero-main-cta"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00C26E] to-[#00D97E] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center gap-2">
                  Fazer Diagnóstico Gratuito
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </button>
            </div>

            {/* Social Trust Metrics */}
            <div className="mt-10 pt-8 border-t border-[#1B2129] w-full grid grid-cols-3 gap-4 max-w-lg lg:max-w-none">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="text-2xl sm:text-3xl font-display font-black text-white">100%</span>
                <span className="text-[10px] sm:text-xs text-[#AAB3BD] uppercase tracking-wider font-mono">Personalizado</span>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left border-x border-[#1B2129] px-2">
                <span className="text-2xl sm:text-3xl font-display font-black text-[#00D97E] flex items-center gap-1 justify-center lg:justify-start">
                  &lt; 60s
                </span>
                <span className="text-[10px] sm:text-xs text-[#AAB3BD] uppercase tracking-wider font-mono">Tempo Estimado</span>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="text-2xl sm:text-3xl font-display font-black text-white">4.9/5</span>
                <span className="text-[10px] sm:text-xs text-[#AAB3BD] uppercase tracking-wider font-mono">Avaliação Alunos</span>
              </div>
            </div>

          </div>

          {/* Graphical Coach Presentation */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
            {/* Glowing HUD underlay */}
            <div className="absolute inset-x-0 bottom-0 top-12 bg-gradient-to-t from-[#0F1318] via-transparent to-transparent z-10"></div>
            <div className="absolute rounded-full w-[280px] h-[280px] bg-[#00D97E]/10 blur-[60px] top-[15%] left-[15%] z-0 pointer-events-none"></div>

            {/* Outer Frame Wrapper */}
            <div className="relative group p-1.5 bg-gradient-to-b from-[#11161d] to-[#151b22] rounded-3xl border border-[#1B2129] shadow-2xl max-w-xs sm:max-w-sm transition-all duration-500 hover:border-[#00D97E]/30" id="hero-image-pod">
              
              {/* Image element (using local expert photo) */}
              <div className="relative overflow-hidden rounded-2xl bg-[#0F1318] aspect-[3/4]">
                <PremiumImage
                  src="/src/assets/images/lucas_fernandes_hero_1780062447733.png"
                  alt="Lucas Fernandes - Expert EVO"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Float Hud Widget 1 */}
              <div className="absolute top-6 left-[-16px] z-20 flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#151A21]/95 border border-[#1B2129] shadow-xl backdrop-blur-md animate-[bounce_5s_infinite_ease-in-out]">
                <span className="h-3 w-3 rounded-full bg-[#00D97E] animate-pulse"></span>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-[#AAB3BD] tracking-wider uppercase leading-none">Status</span>
                  <span className="text-xs font-bold text-white leading-none mt-1">LUCAS FERNANDES ONLINE</span>
                </div>
              </div>

              {/* Float Hud Widget 2 */}
              <div className="absolute bottom-16 right-[-16px] z-20 flex items-center gap-3 px-4 py-3 rounded-xl bg-[#151A21]/95 border border-[#00D97E]/30 shadow-2xl backdrop-blur-md">
                <span className="p-1.5 rounded-lg bg-[#00D97E]/10 border border-[#00D97E]/30">
                  <Award className="h-4 w-4 text-[#00D97E]" />
                </span>
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono text-[#AAB3BD] tracking-wider uppercase leading-none">Metodologia</span>
                  <span className="text-sm font-bold text-white leading-tight mt-0.5">Foco em Performance</span>
                </div>
              </div>

              {/* Label Bar */}
              <div className="absolute bottom-4 left-4 right-4 z-20 px-4 py-3 rounded-xl bg-[#0F1318]/90 border border-[#1B2129] backdrop-blur-sm text-center">
                <span className="block text-xs font-mono font-semibold text-[#00D97E] uppercase tracking-wider">LUCAS FERNANDES</span>
                <span className="block text-[10px] text-[#AAB3BD] mt-0.5">Criador do Ecossistema EVO & Fisiculturista</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
export default Hero;
