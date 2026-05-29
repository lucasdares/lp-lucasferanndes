import React, { useState } from 'react';
import { initialMissions } from '../data';
import { PremiumImage } from './PremiumImage';
import { 
  GlassWater, Timer, Dumbbell, Moon, Apple, 
  Award, ShieldAlert, Sparkles, Trophy, Zap, Flame, BarChart3, Users, Check
} from 'lucide-react';

export function AppMissions() {
  const [missions, setMissions] = useState(initialMissions);
  const [userXp, setUserXp] = useState(3550);
  const [totalXp, setTotalXp] = useState(5000);
  const [streak, setStreak] = useState(14);
  const [rankIndex, setRankIndex] = useState(4); // Out of 100 on leaderboard

  const getIcon = (type: string) => {
    switch (type) {
      case 'GlassWater': return GlassWater;
      case 'Timer': return Timer;
      case 'Dumbbell': return Dumbbell;
      case 'Moon': return Moon;
      case 'Apple': return Apple;
      default: return Zap;
    }
  };

  const handleToggleMission = (id: string, xp: number) => {
    setMissions((prev) =>
      prev.map((m) => {
        if (m.id === id) {
          const newState = !m.isChecked;
          // Dynamically calculate XP, Streak & Leaderboard status
          if (newState) {
            setUserXp((xpPrev) => Math.min(totalXp, xpPrev + xp));
            setStreak((s) => s + 1);
            setRankIndex((r) => Math.max(1, r - 1));
          } else {
            setUserXp((xpPrev) => Math.max(0, xpPrev - xp));
            setStreak((s) => Math.max(0, s - 1));
            setRankIndex((r) => r + 1);
          }
          return { ...m, isChecked: newState };
        }
        return m;
      })
    );
  };

  const completedCount = missions.filter((m) => m.isChecked).length;
  const xpPercent = (userXp / totalXp) * 100;

  return (
    <section className="relative overflow-hidden py-24 bg-[#151A21]/50 border-y border-[#1B2129]" id="aplicativo">
      {/* Background radial effects */}
      <div className="absolute top-[30%] left-[-15%] w-[55%] h-[55%] bg-[#00D97E]/3 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Title / Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F1318] border border-[#1B2129] text-xs font-mono font-bold tracking-widest text-[#00D97E] mb-4">
            <Trophy className="h-3.5 w-3.5" />
            ECOSISTEMA INTEGRADO DE AUTO-MONITORAMENTO
          </div>
          <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight mb-4">
            Muito mais que um aplicativo.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D97E] to-[#00C26E]">
              Uma plataforma de evolução.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#AAB3BD] max-w-xl mx-auto">
            Integre nutrição calibrada, rotina de treinos pesada e hábitos sob controle contínuo através da gamificação de elite.
          </p>
        </div>

        {/* Dashboard and Quests Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-6xl mx-auto">
          
          {/* Column 1: App Mockup Vector Frame */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <div className="relative group p-1.5 bg-[#0F1318] rounded-[40px] border border-[#1B2129] shadow-2xl overflow-hidden w-full max-w-sm">
              {/* Camera Notch simulation */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#000000] rounded-full z-30 flex items-center justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0F1318] mr-2"></span>
                <span className="h-1 w-8 bg-[#151A21] rounded-full"></span>
              </div>
              
              {/* App Image container */}
              <div className="relative overflow-hidden rounded-[34px] aspect-[9/18] bg-[#0F1318]">
                <PremiumImage
                  src="/src/assets/images/evo_app_mockup_1780062469009.png"
                  alt="EVO App Dashboard Mockup"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating micro indicators */}
              <div className="absolute bottom-6 left-6 right-6 z-20 px-4 py-3 bg-[#151A21]/95 border border-[#1B2129]/80 backdrop-blur-md rounded-2xl flex items-center justify-between shadow-xl">
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-[#00D97E] animate-ping"></span>
                  <p className="text-[10px] font-mono text-white font-bold tracking-wide">
                    FEED DE MACROS ATIVO
                  </p>
                </div>
                <span className="text-[10px] font-mono font-medium text-[#00D97E]">
                  98.4% Consistente
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Interactive Gamifier (Bloco 9) */}
          <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2">
            
            {/* Gamification Stats Header */}
            <div className="p-5 bg-[#0F1318] border border-[#1B2129] rounded-2xl mb-8 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500">
                  <Flame className="h-5 w-5 animate-pulse" />
                </span>
                <div>
                  <span className="block text-[8px] font-mono text-[#AAB3BD] uppercase tracking-wider">Combinação Semanal</span>
                  <span className="block text-base font-bold text-white font-mono">{streak} dias seguidos (Streak)</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="p-2.5 rounded-xl bg-[#00D97E]/10 text-[#00D97E]">
                  <Trophy className="h-5 w-5" />
                </span>
                <div>
                  <span className="block text-[8px] font-mono text-[#AAB3BD] uppercase tracking-wider">Ranking Geral</span>
                  <span className="block text-base font-bold text-white font-mono">#{rankIndex} Lugar</span>
                </div>
              </div>
            </div>

            {/* Interactive Quests Console */}
            <div className="p-6 bg-[#0F1318] border border-[#1B2129] rounded-3xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#1B2129]">
                <div>
                  <span className="text-[10px] font-mono text-[#00D97E] font-bold tracking-widest uppercase block">MISSOES DIARIAS EVO</span>
                  <h3 className="font-display font-bold text-white text-lg">Check-in de Hábitos</h3>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-[#151A21] border border-[#1B2129] text-xs font-mono text-[#AAB3BD] rounded-lg">
                  <span>Concluídas:</span>
                  <span className="text-[#00D97E] font-bold">{completedCount}/{missions.length}</span>
                </div>
              </div>

              {/* Progress XP Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#AAB3BD]">XP para próximo nível (Nível Elite)</span>
                  <span className="text-xs font-mono font-bold text-[#00D97E]">{userXp}/{totalXp} XP</span>
                </div>
                <div className="h-2 w-full bg-[#1B2129] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#00D97E] to-[#00C26E] rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${xpPercent}%` }}
                  ></div>
                </div>
              </div>

              {/* Missions Checklist */}
              <div className="space-y-3">
                {missions.map((mission) => {
                  const Icon = getIcon(mission.icon);
                  return (
                    <button
                      key={mission.id}
                      onClick={() => handleToggleMission(mission.id, mission.xp)}
                      className={`w-full p-4 rounded-xl border flex items-center justify-between text-left transition-all duration-200 ${
                        mission.isChecked
                          ? 'border-[#00D97E]/40 bg-[#00D97E]/3 text-white shadow-sm'
                          : 'border-[#1B2129] bg-[#151A21]/70 text-[#AAB3BD] hover:border-[#AAB3BD]/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`p-2 rounded-lg transition-colors ${
                          mission.isChecked ? 'bg-[#00D97E]/10 text-[#00D97E]' : 'bg-[#0F1318] text-[#AAB3BD]'
                        }`}>
                          <Icon className="h-4.5 w-4.5" />
                        </span>
                        <div>
                          <span className={`block text-xs sm:text-sm font-semibold transition-colors ${
                            mission.isChecked ? 'text-white line-through' : 'text-white/90'
                          }`}>
                            {mission.title}
                          </span>
                          <span className="block text-[9px] font-mono text-[#AAB3BD] mt-0.5">Bônus: +{mission.xp} XP</span>
                        </div>
                      </div>

                      {/* Check Circle */}
                      <span className={`h-5 w-5 rounded-full border transition-all flex items-center justify-center flex-shrink-0 ${
                        mission.isChecked
                          ? 'bg-[#00D97E] border-[#00D97E] text-[#0F1318]'
                          : 'border-[#1B2129] bg-[#0F1318]'
                      }`}>
                        {mission.isChecked && <Check className="h-3 w-3 stroke-[3]" />}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-[#1B2129] text-center">
                <span className="text-[10px] font-mono text-[#AAB3BD]">
                  💡 Clique nos botões acima para simular a conclusão de metas diárias. Verifique seu progresso em tempo real!
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
export default AppMissions;
