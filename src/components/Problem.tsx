import React from 'react';
import { XCircle, CheckCircle2, ChevronRight, HelpCircle, Compass, Target } from 'lucide-react';

export function Problem() {
  const genericCycle = [
    { text: 'Inicia dieta ultra-restritiva ou academia', active: true },
    { text: 'Segue treinos genéricos sem acompanhamento', active: true },
    { text: 'Sobrecarga de rotina gera desmotivação crônica', active: true },
    { text: 'Abandono completo e retorno ao ponto zero', active: true },
  ];

  const evoWay = [
    { text: 'Diagnóstico metabólico e de perfil', active: true },
    { text: 'Metodologia integrada (Treino, Nutrição, Hábitos)', active: true },
    { text: 'Suporte de comunidade ativa e gamificação', active: true },
    { text: 'Progresso incremental e manutenção de elite', active: true },
  ];

  return (
    <section className="relative overflow-hidden py-24 bg-[#151A21]/50 border-y border-[#1B2129]" id="o-problema">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[#00D97E]/3 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Title Group */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#0F1318] border border-[#1B2129] text-xs font-mono font-bold tracking-widest text-[#text-premium-gray] mb-4">
            <HelpCircle className="h-4.5 w-4.5 text-[#00D97E]" />
            O DIAGNÓSTICO DO FRACASSO COMUM
          </div>
          <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight mb-6">
            Você não está sem força de vontade.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-[#00D97E]">
              Você está sem direção.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#AAB3BD] max-w-xl mx-auto">
            Mais de 85% das pessoas desistem nas primeiras 6 semanas. A culpa não é da sua disciplina; é de seguir estratégias incompatíveis com seu biotipo e rotina.
          </p>
        </div>

        {/* Binary Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          {/* Card 1: Generic Route */}
          <div className="relative p-6 sm:p-8 rounded-2xl bg-[#0F1318]/90 border border-red-500/10 shadow-xl overflow-hidden group">
            <div className="absolute top-0 right-0 h-24 w-24 bg-red-550/5 rounded-full blur-2xl"></div>
            
            <div className="flex items-center gap-3 mb-6">
              <span className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                <XCircle className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display font-bold text-white text-lg">O Ciclo Frustrante Comum</h3>
                <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest">Tentativas Aleatórias</span>
              </div>
            </div>

            <p className="text-sm text-[#AAB3BD] mb-8">
              O método tradicional joga você na vala comum. Sem dados ou individualidade, seu corpo reage acumulando mais cansaço do que resultados.
            </p>

            <ul className="space-y-4">
              {genericCycle.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 text-red-500/60 font-mono text-xs">0{index + 1}.</span>
                  <p className="text-sm text-white/80 select-none">
                    <span className="line-through decoration-red-500/40 text-[#AAB3BD]">{item.text}</span>
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-[#1B2129] flex justify-between items-center bg-[#151A21]/30 -mx-8 -mb-8 px-8 py-4">
              <span className="text-xs font-mono text-red-400 tracking-wider">RESULTADO FINAL:</span>
              <span className="text-xs font-bold text-white uppercase bg-red-950/20 px-2.5 py-1 rounded border border-red-500/20">
                Reganho de Peso & Frustração
              </span>
            </div>
          </div>

          {/* Card 2: EVO Route */}
          <div className="relative p-6 sm:p-8 rounded-2xl bg-[#151A21] border border-[#00D97E]/20 shadow-[0_0_30px_rgba(0,217,126,0.02)] overflow-hidden group">
            <div className="absolute top-0 right-0 h-32 w-32 bg-[#00D97E]/5 rounded-full blur-3xl"></div>
            
            <div className="flex items-center gap-3 mb-6">
              <span className="p-2.5 rounded-xl bg-[#00D97E]/10 border border-[#00D97E]/30 text-[#00D97E]">
                <Target className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display font-bold text-white text-lg">O Ecossistema Integrado EVO</h3>
                <span className="text-[10px] font-mono text-[#00D97E] uppercase tracking-widest font-bold">Direcionamento de Elite</span>
              </div>
            </div>

            <p className="text-sm text-[#AAB3BD] mb-8">
              Nossa abordagem une biologia de dados, gamificação e comunidade real para que cada grama de esforço gere evolução mensurável.
            </p>

            <ul className="space-y-4">
              {evoWay.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 text-[#00D97E]/80 font-mono text-xs font-bold">0{index + 1}.</span>
                  <span className="h-5 w-5 rounded-full bg-[#00D97E]/10 border border-[#00D97E]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="h-3 w-3 text-[#00D97E]" />
                  </span>
                  <p className="text-sm font-medium text-white select-none">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-[#1B2129] flex justify-between items-center bg-[#0F1318]/40 -mx-8 -mb-8 px-8 py-4">
              <span className="text-xs font-mono text-[#00D97E] tracking-wider">MARCO ALCANÇADO:</span>
              <span className="text-xs font-bold text-white uppercase bg-[#00D97E]/10 px-2.5 py-1 rounded border border-[#00D97E]/30">
                Consistência Vitalícia & Alta Performance
              </span>
            </div>
          </div>

        </div>

        {/* Centered Pitch Quote */}
        <div className="mt-16 text-center max-w-xl mx-auto">
          <p className="text-sm sm:text-base text-[#AAB3BD] italic leading-relaxed">
            "Não porque você é incapaz. Mas porque segue um plano prescrito para outra pessoa. Para resultados fora da curva, você precisa de dados calculados para o seu perfil único."
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <Compass className="h-4 w-4 text-[#00D97E]" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00D97E]">MÉTODO EVO</span>
          </div>
        </div>

      </div>
    </section>
  );
}
export default Problem;
