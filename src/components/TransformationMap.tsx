import React from 'react';
import { ShieldCheck, Award, Zap, ChevronDown, Check, Activity, Sparkles, Star } from 'lucide-react';

export function TransformationMap() {
  const roadmapSteps = [
    {
      phase: 'RESET',
      title: 'Fase de Limpeza',
      subtitle: 'Semana 1 - 2',
      impact: 'Sensibilidade insulínica e desintoxicação metabólica',
      unlocks: ['Macro-caluladora Básica', 'Hidratação Nível 1', 'Alertas de Sono'],
      isActive: true,
      glowColor: 'bg-emerald-500',
    },
    {
      phase: 'DISCIPLINA',
      title: 'Fase de Hábitos',
      subtitle: 'Semana 3 - 6',
      impact: 'Sólida rotina de treinos e consistência alimentar',
      unlocks: ['Check-in de Hábitos', 'Comunidade Global', 'XP & Conquistas'],
      isActive: true,
      glowColor: 'bg-teal-500',
    },
    {
      phase: 'PERFORMANCE',
      title: 'Fase Metalista',
      subtitle: 'Semana 7 - 12',
      impact: 'Hipertrofia densa e aceleração termogênica avançada',
      unlocks: ['Cluster Sets & Drops', 'Plano Nutricional Cíclico', 'Missões Diárias de Elite'],
      isActive: true,
      glowColor: 'bg-[#00D97E]',
    },
    {
      phase: 'SHAPE',
      title: 'Fase Estética',
      subtitle: 'Semana 13 - 24',
      impact: 'Simetria, definição extrema e ganho de força miofibrilar',
      unlocks: ['Análise de Bioimpedância', 'Acesso Direto ao Expert', 'Ranking de Ligas'],
      isActive: false,
      glowColor: 'bg-indigo-500',
    },
    {
      phase: 'ELITE',
      title: 'Fase Suprema',
      subtitle: 'Constante',
      impact: 'Manutenção duradoura, longevidade e biohacking geral',
      unlocks: ['Grupo Black', 'Eventos Presenciais do Lucas', 'Sorteios & Badges Físicas'],
      isActive: false,
      glowColor: 'bg-purple-500',
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 bg-[#0F1318]" id="roadmap">
      {/* Background radial overlays */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#00D97E]/3 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Title / Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#151A21] border border-[#1B2129] text-xs font-mono font-bold tracking-widest text-[#00D97E] mb-4">
            <Activity className="h-3.5 w-3.5" />
            EVOLUÇÃO CONTÍNUA PROGRAMADA
          </div>
          <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight mb-4">
            Mapa da Transformação EVO
          </h2>
          <p className="text-base sm:text-lg text-[#AAB3BD] max-w-xl mx-auto">
            Não suba degraus antes do tempo. Toda transformação física duradoura e inabalável segue uma jornada de bloqueios e fases progressivas.
          </p>
        </div>

        {/* Horizontal timeline layout for big screen, vertical on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative max-w-6xl mx-auto">
          
          {/* Connector line for large screens */}
          <div className="absolute top-1/4 left-8 right-8 h-0.5 bg-[#1B2129] hidden lg:block z-0 pointer-events-none"></div>

          {roadmapSteps.map((step, idx) => (
            <div 
              key={idx} 
              className={`relative bg-[#151A21] border p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 z-10 ${
                step.isActive 
                  ? 'border-[#00D97E]/30 bg-gradient-to-b from-[#151A21] to-[#12171E] shadow-[0_0_20px_rgba(0,217,126,0.02)]' 
                  : 'border-[#1B2129] opacity-70 group'
              }`}
              id={`roadmap-node-${idx}`}
            >
              
              {/* Phase badge */}
              <div className="flex justify-between items-center mb-4">
                <span className={`text-[10px] font-mono font-black px-2 py-0.5 rounded tracking-widest ${
                  step.isActive 
                    ? 'bg-[#00D97E]/10 border border-[#00D97E]/30 text-[#00D97E]' 
                    : 'bg-[#1B2129]/80 border border-[#1B2129] text-[#AAB3BD]'
                }`}>
                  {step.phase}
                </span>
                
                {/* Node Dot */}
                <span className={`h-3.5 w-3.5 rounded-full border border-[#0F1318] flex items-center justify-center relative ${
                  step.isActive ? 'bg-[#00D97E] ring-4 ring-[#00D97E]/10' : 'bg-[#1B2129]'
                }`}>
                  {step.isActive ? (
                    <Check className="h-2 w-2 text-[#0F1318] stroke-[4]" />
                  ) : (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1B2129]"></span>
                  )}
                </span>
              </div>

              {/* Title & Timing info */}
              <div className="mb-4">
                <h3 className="font-display font-bold text-white text-base sm:text-lg">
                  {step.title}
                </h3>
                <span className="text-[10px] font-mono text-[#AAB3BD] uppercase tracking-wider block mt-0.5">
                  ⏱ {step.subtitle}
                </span>
              </div>

              {/* Impact Description */}
              <p className="text-xs text-[#AAB3BD] mb-6 leading-relaxed">
                {step.impact}
              </p>

              {/* Unlocked items footer list */}
              <div className="pt-4 border-t border-[#1B2129] bg-[#0F1318]/40 -mx-6 -mb-6 px-6 py-4 rounded-b-2xl">
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#AAB3BD] block mb-2 font-bold">
                  Recursos Desbloqueados:
                </span>
                <ul className="space-y-1.5">
                  {step.unlocks.map((unlock, unlockIdx) => (
                    <li key={unlockIdx} className="flex items-center gap-1.5 text-[10px] text-white/80 font-medium font-sans">
                      <span className={`h-1.5 w-1.5 rounded-full ${step.isActive ? 'bg-[#00D97E]' : 'bg-[#1B2129]'}`}></span>
                      <span>{unlock}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}

        </div>

        {/* Call-to-action pointer block */}
        <div className="mt-16 text-center">
          <div className="inline-flex gap-2 items-center justify-center px-4 py-2.5 rounded-xl bg-[#151A21] border border-[#1B2129] font-mono text-[11px] text-[#AAB3BD]">
            <Sparkles className="h-3.5 w-3.5 text-amber-500" />
            <span>Todos os alunos iniciam na trilha <span className="text-white font-bold">RESET</span> e progridem de acordo com a validação do expert.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
export default TransformationMap;
