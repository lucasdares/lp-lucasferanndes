import React from 'react';
import { Sparkles, ClipboardList, Send, Network, TrendingUp, HelpCircle } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Faça o diagnóstico',
      description: 'Responda as perguntas antropométricas e biológicas rápidas em menos de 1 minuto.',
      icon: ClipboardList,
      color: 'from-[#00D97E]/20 to-[#00C26E]/5',
    },
    {
      num: '02',
      title: 'Receba seu perfil EVO',
      description: 'Nosso algoritmo de dados computa seu biótipo e gera o deficit ou superavit ideal.',
      icon: Send,
      color: 'from-[#00D97E]/30 to-[#00C26E]/10',
    },
    {
      num: '03',
      title: 'Entre para o ecossistema',
      description: 'Tenha acesso ao suporte do Lucas Fernandes, comunidade, missões e planos diários.',
      icon: Network,
      color: 'from-[#00D97E]/20 to-[#00C26E]/5',
    },
    {
      num: '04',
      title: 'Comece sua transformação',
      description: 'Monitore seus streaks, ganhe XP diário e assista à evolução física mais rápida da sua vida.',
      icon: TrendingUp,
      color: 'from-[#00D97E]/30 to-[#00C26E]/15',
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 bg-[#0F1318]" id="como-funciona">
      {/* Background gradients */}
      <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-[#00D97E]/2 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#151A21] border border-[#1B2129] text-xs font-mono font-bold tracking-widest text-[#00D97E] mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            JORNADA DE EXECUÇÃO FACILITADA
          </div>
          <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight mb-4">
            Como funciona o Ecossistema?
          </h2>
          <p className="text-base sm:text-lg text-[#AAB3BD] max-w-xl mx-auto">
            Sem processos complexos ou burocráticos. Um caminho de 4 passos direto rumo à evolução física.
          </p>
        </div>

        {/* Workflow Line Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connecting Line Backdrop for Desktop */}
          <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-[#1B2129] -translate-y-1/2 hidden lg:block z-0 pointer-events-none"></div>

          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={idx} 
                className="relative bg-[#151A21]/70 border border-[#1B2129] p-6 rounded-2xl shadow-xl transition-all duration-300 hover:border-[#00D97E]/30 hover:bg-[#151A21] group z-10" id={`workflow-step-${idx}`}
              >
                {/* Step badge */}
                <span className="absolute -top-4 -left-3 px-3 py-1 bg-[#1B2129] rounded-lg border border-[#00D97E]/20 font-mono text-xs font-black text-[#00D97E] shadow-md group-hover:scale-105 transition-all">
                  PASSO {step.num}
                </span>

                <div className="flex items-center gap-4 mb-4 mt-2">
                  <span className={`p-3 rounded-xl bg-gradient-to-br ${step.color} border border-[#00D97E]/10 text-[#00D97E] group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-5 w-5" />
                  </span>
                  <h3 className="font-display font-bold text-white text-base">
                    {step.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#AAB3BD] leading-relaxed">
                  {step.description}
                </p>

                {/* Flow pointer for desktop */}
                {idx < steps.length - 1 && (
                  <div className="absolute top-1/2 right-[-20px] -translate-y-1/2 hidden lg:flex items-center justify-center p-1 bg-[#0F1318] border border-[#1B2129] rounded-full z-20">
                    <span className="text-[10px] text-[#00D97E] font-bold">➔</span>
                  </div>
                )}
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
export default HowItWorks;
