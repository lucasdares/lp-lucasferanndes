import React from 'react';
import { Activity, Instagram, Mail, ArrowUp, Send, Heart } from 'lucide-react';

interface FooterProps {
  onStartQuiz: () => void;
}

export function Footer({ onStartQuiz }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F1318] border-t border-[#1B2129] relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#00D97E]/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Final Action Hero Banner */}
      <div className="max-w-5xl mx-auto px-4 py-20 sm:py-24 text-center relative z-10 border-b border-[#1B2129]">
        <h2 className="font-display font-extrabold text-[#FFFFFF] text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight mb-4">
          Sua transformação começa com um diagnóstico.
        </h2>
        
        <p className="text-base sm:text-lg text-[#AAB3BD] max-w-xl mx-auto mb-10 leading-relaxed">
          Descubra agora qual é o plano de treino, nutrição e hábitos ideal para destravar seu físico de uma vez por todas.
        </p>

        <button
          onClick={onStartQuiz}
          className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-5 rounded-full bg-gradient-to-r from-[#00D97E] to-[#00C26E] text-[#0F1318] text-sm sm:text-base font-black uppercase tracking-wider overflow-hidden shadow-[0_8px_30px_rgba(0,217,126,0.35)] hover:shadow-[0_8px_35px_rgba(0,217,126,0.55)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
          id="footer-main-cta"
        >
          <span className="relative z-10 flex items-center gap-2">
            Fazer Diagnóstico Gratuito
            <Send className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
          </span>
        </button>
      </div>

      {/* Directory and copyright meta */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Brand block */}
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-gradient-to-br from-[#00D97E]/10 to-[#00C26E]/5 border border-[#00D97E]/30 text-[#00D97E]">
              <Activity className="h-5 w-5" />
            </span>
            <div className="flex flex-col text-left">
              <span className="font-display font-black tracking-wider text-lg text-white">
                EVO
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#00D97E] font-bold">
                SISTEMA DE EVOLUÇÃO CORPORAL
              </span>
            </div>
          </div>

          {/* Social connections */}
          <div className="flex items-center gap-4">
            <a 
              href="https://www.instagram.com/lucasfernandess___/"
              target="_blank"
              rel="noopener"
              className="p-3 rounded-full bg-[#151A21] border border-[#1B2129] text-[#AAB3BD] hover:text-[#00D97E] hover:border-[#00D97E]/30 transition-all"
              aria-label="Instagram de Lucas"
            >
              <Instagram className="h-4.5 w-4.5" />
            </a>
            <a 
              href="mailto:suporte@evosistema.com"
              className="p-3 rounded-full bg-[#151A21] border border-[#1B2129] text-[#AAB3BD] hover:text-[#00D97E] hover:border-[#00D97E]/30 transition-all"
              aria-label="Contato Suporte"
            >
              <Mail className="h-4.5 w-4.5" />
            </a>
            <button 
              onClick={scrollToTop}
              className="p-3 rounded-full bg-[#151A21] border border-[#1B2129] text-[#AAB3BD] hover:text-white hover:border-[#AAB3BD]/30 transition-all flex items-center gap-1.5 text-xs font-mono font-bold"
              aria-label="Scroll para o Topo"
            >
              Topo <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>

        </div>

        {/* Safe health warning and disclosures */}
        <div className="mt-8 pt-8 border-t border-[#1B2129] text-center md:text-left">
          <p className="text-[10px] text-[#AAB3BD]/80 leading-relaxed max-w-4xl">
            Aviso de Saúde: As informações geradas pelo diagnóstico do Método EVO representam sugestões biológicas estimadas com base em algoritmos matemáticos padrão. Nossos relatórios não substituem pareceres clínicos, nutricionistas ou orientação de educadores físicos licenciados. Sempre consulte profissionais de saúde registrados antes de alterar drasticamente suas rotinas de carga física e regimes de ingestão calórica.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4 text-[11px] font-mono text-[#AAB3BD]">
            <span>
              &copy; {new Date().getFullYear()} EVO — Lucas Fernandes. Todos os direitos reservados.
            </span>
            <span className="flex items-center gap-1.5">
              Criado com <Heart className="h-3 w-3 text-red-500 fill-current" /> no Brasil.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
