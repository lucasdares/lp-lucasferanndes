import React from 'react';
import { Activity, Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onStartQuiz: () => void;
}

export function Header({ onStartQuiz }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { name: 'O Sistema', href: '#o-sistema' },
    { name: 'Antes & Depois', href: '#antes-depois' },
    { name: 'O Expert', href: '#expert' },
    { name: 'Aplicativo', href: '#aplicativo' },
    { name: 'Comunidade', href: '#comunidade' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0F1318]/80 backdrop-blur-md border-b border-[#1B2129] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20" id="header-container">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-gradient-to-br from-[#00D97E]/20 to-[#00C26E]/5 border border-[#00D97E]/30 shadow-[0_0_15px_rgba(0,217,126,0.15)]">
              <Activity className="h-5 w-5 text-[#00D97E]" />
            </span>
            <div className="flex flex-col">
              <span className="font-display font-black tracking-wider text-xl text-white">
                EVO
              </span>
              <span className="text-[9px] uppercase tracking-widest font-mono text-[#00D97E]/80 font-bold -mt-1">
                Evolução Corporal
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-[#AAB3BD] hover:text-[#00D97E] transition-colors duration-200 relative group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00D97E] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onStartQuiz}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#00D97E] to-[#00C26E] text-[#0F1318] text-xs font-bold uppercase tracking-wider overflow-hidden shadow-[0_4px_20px_rgba(0,217,126,0.3)] hover:shadow-[0_4px_25px_rgba(0,217,126,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              id="cta-header-btn"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Diagnóstico Gratuito
                <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#AAB3BD] hover:text-white hover:bg-[#1B2129] transition-all duration-200"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#151A21] border-b border-[#1B2129] animate-in slide-in-from-top-4 duration-200" id="mobile-menu">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-4 py-2.5 rounded-xl text-base font-medium text-[#AAB3BD] hover:text-[#00D97E] hover:bg-[#1C242E] transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-[#1B2129]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onStartQuiz();
                }}
                className="w-full justify-center inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00D97E] to-[#00C26E] text-[#0F1318] text-sm font-bold uppercase tracking-wider shadow-lg"
              >
                Fazer Diagnóstico Gratuito
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
export default Header;
