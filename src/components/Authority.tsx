import React from 'react';
import { PremiumImage } from './PremiumImage';
import { Award, Zap, Instagram, Compass, Check, Trophy, Heart } from 'lucide-react';

export function Authority() {
  const credentials = [
    { title: 'Treinador de Elite', doc: 'Metodologias certificadas de biomecânica muscular extrema.' },
    { title: 'Atleta Competidor', doc: 'Sólida vivência prática no palco nacional de fisiculturismo (Mens Physique).' },
    { title: 'Líder de Comunidade', doc: 'Mentor e líder de dezenas de homens e mulheres em busca de performance.' },
  ];

  return (
    <section className="relative overflow-hidden py-24 bg-[#151A21]/40 border-y border-[#1B2129]" id="expert">
      {/* Background gradients */}
      <div className="absolute top-[30%] left-[-15%] w-[50%] h-[50%] bg-[#00D97E]/3 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-6xl mx-auto">
          
          {/* Text Story & Credentials */}
          <div className="lg:col-span-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F1318] border border-[#1B2129] text-xs font-mono font-bold tracking-widest text-[#00D97E] mb-4">
              <Award className="h-4 w-4" />
              O DESIGNER DO ECOSSISTEMA
            </div>
            
            <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none mb-6">
              Conheça Lucas Fernandes
            </h2>
            
            <p className="text-base sm:text-lg text-[#AAB3BD] mb-8 leading-relaxed max-w-xl">
              Lucas Fernandes não desenvolveu o Método EVO atrás de uma mesa de escritório. Ele transformou seu próprio físico, testou cada hipótese na própria pele e competiu com sucesso no palco nacional de fisiculturismo. No ecossistema EVO, você segue quem joga a própria pele em campo.
            </p>

            {/* List of items */}
            <div className="space-y-4 w-full mb-8">
              {credentials.map((cred, idx) => (
                <div key={idx} className="p-4 bg-[#0F1318]/90 border border-[#1B2129] rounded-xl flex gap-3.5 text-left transition-colors hover:border-[#00D97E]/10">
                  <span className="p-2 rounded bg-[#00D97E]/10 border border-[#00D97E]/30 text-[#00D97E] h-fit">
                    <Check className="h-4 w-4 stroke-[3]" />
                  </span>
                  <div>
                    <h4 className="font-display font-bold text-white text-sm uppercase tracking-wide">{cred.title}</h4>
                    <p className="text-xs text-[#AAB3BD] mt-1 leading-normal">{cred.doc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Link to Instagram profile (high conversion detail) */}
            <a
              href="https://www.instagram.com/lucasfernandess___/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[#1B2129] bg-[#151A21] text-xs text-white uppercase tracking-wider font-bold transition-all hover:border-[#00D97E]/30"
              id="expert-instagram-btn"
            >
              <Instagram className="h-4.5 w-4.5 text-[#00D97E] group-hover:scale-110 transition-transform" />
              Verificar Instagram do Lucas
            </a>

          </div>

          {/* Right Layout: Grid of Lucas Photos */}
          <div className="lg:col-span-6 relative">
            
            {/* Grid display of bodybuilder stage pics */}
            <div className="grid grid-cols-2 gap-4 max-w-sm sm:max-w-md mx-auto relative z-10">
              
              {/* Photo 1: Left tall before/after */}
              <div className="relative group p-1 bg-[#0F1318] border border-[#1B2129] rounded-2xl overflow-hidden shadow-lg aspect-[3/4]">
                <PremiumImage
                  src="/assets/input_file_8.png"
                  alt="Lucas Fernandes - Atleta de Palco"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 right-2 p-1.5 bg-[#0F1318]/90 border border-[#1B2129] rounded-lg text-center backdrop-blur-sm">
                  <span className="block text-[8px] font-mono text-[#00D97E] font-bold uppercase tracking-widest">Performance de Palco</span>
                </div>
              </div>

              {/* Photo 2: Gym shape */}
              <div className="relative group p-1 bg-[#0F1318] border border-[#1B2129] rounded-2xl overflow-hidden shadow-lg aspect-[3/4]">
                <PremiumImage
                  src="/assets/input_file_9.png"
                  alt="Lucas Fernandes - Shape de Treino"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 right-2 p-1.5 bg-[#0F1318]/90 border border-[#1B2129] rounded-lg text-center backdrop-blur-sm">
                  <span className="block text-[8px] font-mono text-[#00D97E] font-bold uppercase tracking-widest">Foco em Hipertrofia</span>
                </div>
              </div>

              {/* Photo 3: Competition blue boardshorts */}
              <div className="relative group p-1 bg-[#0F1318] border border-[#1B2129] rounded-2xl overflow-hidden shadow-lg aspect-[3/4]">
                <PremiumImage
                  src="/assets/input_file_10.png"
                  alt="Lucas Fernandes - Simetria Superior"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 right-2 p-1.5 bg-[#0F1318]/90 border border-[#1B2129] rounded-lg text-center backdrop-blur-sm">
                  <span className="block text-[8px] font-mono text-[#00D97E] font-bold uppercase tracking-widest">Simetria de Elite</span>
                </div>
              </div>

              {/* Photo 4: Studio Professional branding portrait */}
              <div className="relative group p-1 bg-[#0F1318] border border-[#1B2129] rounded-2xl overflow-hidden shadow-lg aspect-[3/4]">
                <PremiumImage
                  src="/src/assets/images/lucas_fernandes_hero_1780062447733.png"
                  alt="Lucas Fernandes - Criador do EVO"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 right-2 p-1.5 bg-[#0F1318]/90 border border-[#1B2129] rounded-lg text-center backdrop-blur-sm">
                  <span className="block text-[8px] font-mono text-[#00D97E] font-bold uppercase tracking-widest">Mentor do Método</span>
                </div>
              </div>

            </div>

            {/* Glowing circle behind grid */}
            <div className="absolute inset-x-12 bottom-12 top-12 bg-gradient-to-tr from-[#00D97E]/10 to-transparent blur-3xl rounded-full z-0 pointer-events-none"></div>

          </div>

        </div>
      </div>
    </section>
  );
}
export default Authority;
