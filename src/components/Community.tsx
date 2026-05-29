import React from 'react';
import { PremiumImage } from './PremiumImage';
import { Users, Milestone, Grid, ShieldPlus, MessagesSquare, HeartPulse } from 'lucide-react';

export function Community() {
  const values = [
    {
      title: 'Responsabilidade Compartilhada',
      desc: 'Compartilhe sua evolução, streaks diários e missões para ter feedback e cobrança amigável de outros membros.',
      icon: ShieldPlus
    },
    {
      title: 'Networking & Performance',
      desc: 'Conecte-se com engenheiros, médicos, empresários e atletas focados exclusivamente em alto rendimento e foco estético.',
      icon: MessagesSquare
    },
    {
      title: 'Suporte de Grupo Biométrico',
      desc: 'Acelere as dúvidas comuns da sua planilha através do canal oficial de monitoramento de bioimpedância.',
      icon: HeartPulse
    }
  ];

  return (
    <section className="relative overflow-hidden py-24 bg-[#0F1318]" id="comunidade">
      {/* Background radial glow */}
      <div className="absolute top-[30%] right-[-10%] w-[45%] h-[45%] bg-[#00D97E]/3 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left Grid: Community photos / Showcase stack */}
          <div className="lg:col-span-6 relative order-2 lg:order-1 flex justify-center">
            
            <div className="relative group p-1.5 bg-[#151A21] rounded-3xl border border-[#1B2129] shadow-2xl max-w-md w-full aspect-[4/3] overflow-hidden">
              <PremiumImage
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=700"
                alt="Comunidade EVO Academia Eventos"
                className="w-full h-full object-cover rounded-2xl group-hover:scale-[1.02] transition-transform duration-500 ease-out"
              />
              <div className="absolute top-4 left-4 px-2.5 py-1.5 bg-[#0F1318]/90 border border-[#1B2129] rounded font-mono text-[9px] text-[#00D97E] font-bold tracking-widest uppercase">
                COLETIVO ATIVO ➔ ECOSSISTEMA
              </div>
              
              {/* Badge Overlay */}
              <div className="absolute bottom-4 right-4 bg-gradient-to-r from-[#00D97E] to-[#00C26E] text-[#0F1318] text-xs font-black uppercase tracking-wider px-4 py-2 rounded-xl shadow-lg flex items-center gap-1.5">
                <Users className="h-4 w-4" />
                +1.500 Alunos Evoluindo
              </div>
            </div>

          </div>

          {/* Right Text / Core pitch */}
          <div className="lg:col-span-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left order-1 lg:order-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#151A21] border border-[#1B2129] text-xs font-mono font-bold tracking-widest text-[#00D97E] mb-4">
              <Users className="h-4 w-4" />
              INTEGRAÇÃO SOCIAL DE PRODUTIVIDADE
            </div>

            <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none mb-6">
              Você não evolui sozinho.
            </h2>

            <p className="text-base sm:text-lg text-[#AAB3BD] mb-8 leading-relaxed max-w-xl">
              A comunidade EVO foi especificamente estruturada para garantir a consistência de longo prazo dos alunos que cansam de começar e parar dietas genéricas sozinhos. Aqui você compartilha metas, resolve dúvidas em tempo real e evolui ao lado de pessoas de alta performance.
            </p>

            <div className="space-y-4 w-full">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div key={i} className="flex gap-4 items-start text-left bg-[#151A21]/30 p-4 rounded-xl border border-[#1B2129] hover:border-[#1B2129]/80 transition-colors">
                    <span className="p-2 bg-[#00D97E]/10 rounded-lg text-[#00D97E] flex-shrink-0">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <h4 className="font-display font-bold text-white text-sm">{v.title}</h4>
                      <p className="text-xs text-[#AAB3BD] mt-1.5 leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
export default Community;
