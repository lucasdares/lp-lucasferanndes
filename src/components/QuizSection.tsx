import React, { useState } from 'react';
import { QuizAnswer, EvoProfileDetails, EvoProfileType } from '../types';
import { evoProfiles } from '../data';
import { 
  ArrowRight, ArrowLeft, Check, ShieldCheck, Mail, User, Phone, 
  ChevronRight, Sparkles, Scale, Percent, Dumbbell, GlassWater, Award, Calendar, HeartPulse, Send
} from 'lucide-react';

interface QuizSectionProps {
  quizRef?: React.RefObject<HTMLDivElement | null>;
}

export function QuizSection({ quizRef }: QuizSectionProps) {
  // Setup standard state
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<QuizAnswer>({
    gender: '',
    age: 25,
    height: 175,
    weight: 75,
    goal: '',
    frequency: 3,
    level: '',
    difficulty: '',
    name: '',
    email: '',
    phone: ''
  });

  const [calculating, setCalculating] = useState(false);
  const [shoneResult, setShoneResult] = useState<EvoProfileDetails | null>(null);

  // Validation checkers for each step
  const isStepValid = () => {
    switch (step) {
      case 1: // Gender
        return form.gender !== '';
      case 2: // Age & Height & Weight
        return form.age >= 10 && form.age <= 100 && form.height >= 100 && form.height <= 250 && form.weight >= 30 && form.weight <= 250;
      case 3: // Goal
        return form.goal !== '';
      case 4: // Frequency & Level
        return form.level !== '';
      case 5: // Difficulty
        return form.difficulty !== '';
      case 6: // Contact Lead
        return form.name.trim().length >= 3 && form.email.includes('@') && form.phone.trim().length >= 8;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (isStepValid()) {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setStep((prev) => Math.max(1, prev - 1));
  };

  const selectGender = (val: 'M' | 'F') => {
    setForm(prev => ({ ...prev, gender: val }));
    setTimeout(() => setStep(2), 250); // Auto-advance for ultra slick UX
  };

  const selectGoal = (val: 'loss' | 'mass' | 'definition' | 'performance') => {
    setForm(prev => ({ ...prev, goal: val }));
    setTimeout(() => setStep(4), 250);
  };

  const selectLevel = (val: 'beginner' | 'intermediate' | 'advanced') => {
    setForm(prev => ({ ...prev, level: val }));
  };

  const selectDifficulty = (val: 'discipline' | 'diet' | 'time' | 'consistency' | 'motivation') => {
    setForm(prev => ({ ...prev, difficulty: val }));
    setTimeout(() => setStep(6), 250);
  };

  // Run calculation logic to determine the profile
  const runDiagnosis = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isStepValid()) return;

    setCalculating(true);
    
    // Simulate high tech diagnostic calculation steps
    setTimeout(() => {
      let selectedType: EvoProfileType = 'EVO_RESET';

      if (form.difficulty === 'discipline' || form.difficulty === 'motivation') {
        selectedType = 'EVO_DISCIPLINA';
      } else if (form.goal === 'mass') {
        selectedType = 'EVO_MASS';
      } else if (form.goal === 'loss') {
        selectedType = 'EVO_CUT';
      } else if (form.goal === 'definition') {
        selectedType = 'EVO_RECOMP';
      } else if (form.goal === 'performance') {
        selectedType = 'EVO_PERFORMANCE';
      }

      // Safeguards based on experience level
      if (form.level === 'beginner' && form.frequency <= 1) {
        selectedType = 'EVO_RESET';
      }

      setShoneResult(evoProfiles[selectedType]);
      setCalculating(false);
      setStep(7); // Show diagnostic results
    }, 2800);
  };

  // Reset quiz
  const resetQuiz = () => {
    setForm({
      gender: '',
      age: 25,
      height: 175,
      weight: 75,
      goal: '',
      frequency: 3,
      level: '',
      difficulty: '',
      name: '',
      email: '',
      phone: ''
    });
    setShoneResult(null);
    setStep(1);
  };

  // Calculated metrics
  const waterIntake = form.weight * 35; // Standard 35ml per kg recommendation
  const targetCaloriesMax = Math.round(form.goal === 'mass' ? form.weight * 36 : form.goal === 'loss' ? form.weight * 26 : form.weight * 31);

  return (
    <section 
      ref={quizRef} 
      className="relative overflow-hidden py-24 bg-[#151A21]/40 border-y border-[#1B2129]" 
      id="quiz-section"
    >
      {/* Glow backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] bg-[#00D97E]/3 rounded-full blur-[200px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        
        {/* Step progress bar (hide on results page) */}
        {step < 7 && (
          <div className="mb-12 max-w-lg mx-auto">
            <div className="text-center mb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00D97E]">
                PASSO 0{step} DE 06 — DIAGNÓSTICO ATIVO
              </span>
            </div>
            <div className="h-1.5 w-full bg-[#1B2129] rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#00D97E] to-[#00C26E] rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(step / 6) * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Multi-step Container */}
        <div className="bg-[#0F1318]/95 border border-[#1B2129]/80 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle grid elements */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00d97e04_1px,transparent_1px),linear-gradient(to_bottom,#00d97e04_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none rounded-3xl"></div>

          {/* STEP 1: Gender */}
          {step === 1 && (
            <div className="relative z-10 text-center py-6">
              <h3 className="font-display font-extrabold text-white text-2xl sm:text-3xl tracking-tight mb-3">
                Qual o seu sexo biológico?
              </h3>
              <p className="text-sm text-[#AAB3BD] mb-8">
                Isso nos permite estruturar e calibrar as taxas hormonais básicas do seu perfil.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
                <button
                  onClick={() => selectGender('M')}
                  className={`flex flex-col items-center justify-center p-8 rounded-2xl border transition-all duration-300 group ${
                    form.gender === 'M'
                      ? 'border-[#00D97E] bg-[#00D97E]/5 shadow-[0_0_20px_rgba(0,217,126,0.15)] text-white'
                      : 'border-[#1B2129] bg-[#151A21] hover:border-[#AAB3BD]/30 hover:bg-[#1E252E] text-[#AAB3BD] hover:text-white'
                  }`}
                >
                  <span className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">👨</span>
                  <span className="font-display font-bold text-lg">Masculino</span>
                  <span className="text-[10px] font-mono uppercase tracking-widest mt-1 opacity-70">Perfil Testosterona Base</span>
                </button>

                <button
                  onClick={() => selectGender('F')}
                  className={`flex flex-col items-center justify-center p-8 rounded-2xl border transition-all duration-300 group ${
                    form.gender === 'F'
                      ? 'border-[#00D97E] bg-[#00D97E]/5 shadow-[0_0_20px_rgba(0,217,126,0.15)] text-white'
                      : 'border-[#1B2129] bg-[#151A21] hover:border-[#AAB3BD]/30 hover:bg-[#1E252E] text-[#AAB3BD] hover:text-white'
                  }`}
                >
                  <span className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">👩</span>
                  <span className="font-display font-bold text-lg">Feminino</span>
                  <span className="text-[10px] font-mono uppercase tracking-widest mt-1 opacity-70">Perfil Progesterona/Estrogênio</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Age, Height, Weight */}
          {step === 2 && (
            <div className="relative z-10 text-center py-4">
              <h3 className="font-display font-extrabold text-white text-2xl sm:text-3xl tracking-tight mb-2">
                Suas informações antropométricas
              </h3>
              <p className="text-sm text-[#AAB3BD] mb-8">
                Parâmetros vitais para estipular suas taxas metabólicas e IMC inicial.
              </p>

              <div className="space-y-6 max-w-md mx-auto text-left">
                {/* Age */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#AAB3BD]">Idade</label>
                    <span className="text-sm font-bold text-[#00D97E] font-mono">{form.age} anos</span>
                  </div>
                  <input 
                    type="range" 
                    min="14" 
                    max="80" 
                    value={form.age}
                    onChange={(e) => setForm({ ...form, age: parseInt(e.target.value) })}
                    className="w-full accent-[#00D97E] bg-[#1B2129] h-2 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                {/* Height */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#AAB3BD]">Altura</label>
                    <span className="text-sm font-bold text-[#00D97E] font-mono">{form.height} cm</span>
                  </div>
                  <input 
                    type="range" 
                    min="120" 
                    max="220" 
                    value={form.height}
                    onChange={(e) => setForm({ ...form, height: parseInt(e.target.value) })}
                    className="w-full accent-[#00D97E] bg-[#1B2129] h-2 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                {/* Weight */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#AAB3BD]">Peso Atual</label>
                    <span className="text-sm font-bold text-[#00D97E] font-mono">{form.weight} kg</span>
                  </div>
                  <input 
                    type="range" 
                    min="35" 
                    max="180" 
                    value={form.weight}
                    onChange={(e) => setForm({ ...form, weight: parseInt(e.target.value) })}
                    className="w-full accent-[#00D97E] bg-[#1B2129] h-2 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>

              {/* Next/Prev Section */}
              <div className="flex gap-4 max-w-md mx-auto mt-10 pt-6 border-t border-[#1B2129]">
                <button 
                  onClick={handlePrev}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-6 py-3 border border-[#1B2129] bg-[#151A21] rounded-xl text-sm font-semibold text-[#AAB3BD] hover:text-white hover:bg-[#1C232B] transition-all"
                >
                  <ArrowLeft className="h-4 w-4" /> Voltar
                </button>
                <button 
                  onClick={handleNext}
                  disabled={!isStepValid()}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-6 py-3 bg-gradient-to-r from-[#00D97E] to-[#00C26E] rounded-xl text-sm font-bold text-[#0F1318] hover:shadow-[0_0_15px_rgba(0,217,126,0.3)] transition-all"
                >
                  Continuar <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Goal */}
          {step === 3 && (
            <div className="relative z-10 text-center py-4">
              <h3 className="font-display font-extrabold text-white text-2xl sm:text-3xl tracking-tight mb-2">
                Qual o seu objetivo fitness principal?
              </h3>
              <p className="text-sm text-[#AAB3BD] mb-8">
                Isso direciona a partição dos seus macronutrientes da planilha inteligente para corte ou ganho.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto text-left">
                {[
                  { key: 'loss', title: 'Emagrecer', icon: '🔥', text: 'Secar gordura com foco em deficit termogênico' },
                  { key: 'mass', title: 'Ganhar Massa', icon: '💪', text: 'Hipertrofia celular com foco em força muscular' },
                  { key: 'definition', title: 'Definir Corpo', icon: '⚡', text: 'Simetria corporal e queima localizada simultânea' },
                  { key: 'performance', title: 'Alta Performance', icon: '🚀', text: 'Ganho bioenergético, força bruta e resistência' }
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => selectGoal(item.key as any)}
                    className={`p-5 rounded-2xl border text-left transition-all duration-300 group ${
                      form.goal === item.key
                        ? 'border-[#00D97E] bg-[#00D97E]/5 shadow-[0_0_20px_rgba(0,217,126,0.15)] text-white'
                        : 'border-[#1B2129] bg-[#151A21] hover:border-[#AAB3BD]/30 hover:bg-[#1C232B] text-[#AAB3BD] hover:text-white'
                    }`}
                  >
                    <span className="text-2xl block mb-2">{item.icon}</span>
                    <h4 className="font-display font-bold text-base leading-none mb-1 text-white">{item.title}</h4>
                    <p className="text-xs text-[#AAB3BD] leading-snug">{item.text}</p>
                  </button>
                ))}
              </div>

              {/* Prev Button */}
              <div className="flex gap-4 max-w-md mx-auto mt-10 pt-6 border-t border-[#1B2129]">
                <button 
                  onClick={handlePrev}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-6 py-3 border border-[#1B2129] bg-[#151A21] rounded-xl text-sm font-semibold text-[#AAB3BD] hover:text-white hover:bg-[#1C232B] transition-all"
                >
                  <ArrowLeft className="h-4 w-4" /> Voltar
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Training weekly frequency & Level */}
          {step === 4 && (
            <div className="relative z-10 text-center py-4">
              <h3 className="font-display font-extrabold text-white text-2xl sm:text-3xl tracking-tight mb-2">
                Frequência e nível físico atual
              </h3>
              <p className="text-sm text-[#AAB3BD] mb-8">
                Isso calibra o volume de treino sugerido e do ciclo biomecânico.
              </p>

              <div className="space-y-6 max-w-md mx-auto text-left">
                {/* Frequency range */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#AAB3BD]">Treinos por semana</label>
                    <span className="text-sm font-bold text-[#00D97E] font-mono">
                      {form.frequency === 0 ? 'Nenhum' : `${form.frequency}x por semana`}
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="6" 
                    value={form.frequency}
                    onChange={(e) => setForm({ ...form, frequency: parseInt(e.target.value) })}
                    className="w-full accent-[#00D97E] bg-[#1B2129] h-2 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#AAB3BD] px-1 mt-1 font-mono">
                    <span>Sedentário</span>
                    <span>Moderado (3x)</span>
                    <span>Atleta (6x)</span>
                  </div>
                </div>

                {/* Experience Level Segmented Selector */}
                <div>
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#AAB3BD] block mb-2.5">
                    Seu nível de consistência
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { key: 'beginner', title: 'Iniciante', helper: 'Menos de 6 meses' },
                      { key: 'intermediate', title: 'Membro Ativo', helper: '6 meses a 2 anos' },
                      { key: 'advanced', title: 'Avançado', helper: 'Mais de 2 anos' }
                    ].map((item) => (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => selectLevel(item.key as any)}
                        className={`p-3 rounded-lg border text-center transition-all ${
                          form.level === item.key
                            ? 'border-[#00D97E] bg-[#00D97E]/5 text-white shadow-md'
                            : 'border-[#1B2129] bg-[#151A21] text-[#AAB3BD] hover:border-[#AAB3BD]/20 hover:text-white'
                        }`}
                      >
                        <span className="block font-bold text-xs sm:text-sm">{item.title}</span>
                        <span className="block text-[8px] sm:text-[9px] text-[#AAB3BD] mt-0.5">{item.helper}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Prev / Next buttons */}
              <div className="flex gap-4 max-w-md mx-auto mt-10 pt-6 border-t border-[#1B2129]">
                <button 
                  onClick={handlePrev}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-6 py-3 border border-[#1B2129] bg-[#151A21] rounded-xl text-sm font-semibold text-[#AAB3BD] hover:text-white hover:bg-[#1C232B] transition-all"
                >
                  <ArrowLeft className="h-4 w-4" /> Voltar
                </button>
                <button 
                  onClick={handleNext}
                  disabled={!isStepValid()}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-6 py-3 bg-gradient-to-r from-[#00D97E] to-[#00C26E] rounded-xl text-sm font-bold text-[#0F1318] hover:shadow-[0_0_15px_rgba(0,217,126,0.3)] transition-all"
                >
                  Continuar <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: Mayor Dificuldade (Obstacle) */}
          {step === 5 && (
            <div className="relative z-10 text-center py-4">
              <h3 className="font-display font-extrabold text-white text-2xl sm:text-3xl tracking-tight mb-2">
                Qual sua maior dificuldade em evoluir?
              </h3>
              <p className="text-sm text-[#AAB3BD] mb-8">
                Saber o obstáculo principal nos permite acionar alertas psicológicos e mecânicos de autocuidado personalizados.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 max-w-xl mx-auto text-left">
                {[
                  { key: 'discipline', label: 'Falta de Disciplina', emoji: '🧠', text: 'Sei o que fazer, mas não consigo executar' },
                  { key: 'diet', label: 'Bater Nutrição/Dieta', emoji: '🥦', text: 'Acho difícil cozinhar e manter rotina limpa' },
                  { key: 'time', label: 'Restrição de Tempo', emoji: '⏰', text: 'Trabalho/estudo me deixam sem janelas livres' },
                  { key: 'consistency', label: 'Falta de Constância', emoji: '🔄', text: 'Começo forte por 2 semanas e logo paro' },
                  { key: 'motivation', label: 'Falta de Motivação', emoji: '🔋', text: 'Cansaço diário e baixo foco motivacional' }
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => selectDifficulty(item.key as any)}
                    className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                      form.difficulty === item.key
                        ? 'border-[#00D97E] bg-[#00D97E]/5 text-white shadow-md'
                        : 'border-[#1B2129] bg-[#151A21] text-[#AAB3BD] hover:border-[#AAB3BD]/30 hover:bg-[#1E252E] hover:text-white'
                    }`}
                  >
                    <span className="text-xl block mb-1.5">{item.emoji}</span>
                    <h4 className="font-display font-bold text-xs sm:text-sm text-white">{item.label}</h4>
                    <p className="text-[10px] text-[#AAB3BD] mt-0.5 leading-snug">{item.text}</p>
                  </button>
                ))}
              </div>

              {/* Prev Button */}
              <div className="flex gap-4 max-w-md mx-auto mt-10 pt-6 border-t border-[#1B2129]">
                <button 
                  onClick={handlePrev}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-6 py-3 border border-[#1B2129] bg-[#151A21] rounded-xl text-sm font-semibold text-[#AAB3BD] hover:text-white hover:bg-[#1C232B] transition-all"
                >
                  <ArrowLeft className="h-4 w-4" /> Voltar
                </button>
              </div>
            </div>
          )}

          {/* STEP 6: Lead Capture Form */}
          {step === 6 && (
            <div className="relative z-10 text-center py-4">
              <h3 className="font-display font-extrabold text-white text-2xl sm:text-3xl tracking-tight mb-2">
                Para quem enviamos o seu Relatório?
              </h3>
              <p className="text-sm text-[#AAB3BD] mb-8">
                Estamos prontos para processar seu perfil. Por favor, preencha os dados abaixo para receber sua cópia em PDF e liberar o acesso ao ecossistema.
              </p>

              <form onSubmit={runDiagnosis} className="space-y-4 max-w-md mx-auto text-left">
                {/* Name */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#AAB3BD] mb-1.5">
                    Nome Completo
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#AAB3BD]">
                      <User className="h-4 w-4" />
                    </span>
                    <input 
                      type="text"
                      required
                      placeholder="Ex: Lucas Fernandes"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-[#151A21] hover:bg-[#1E252E] outline-none text-sm text-white pl-10 pr-4 py-3.5 rounded-xl border border-[#1B2129] focus:border-[#00D97E] transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#AAB3BD] mb-1.5">
                    E-mail Principal
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#AAB3BD]">
                      <Mail className="h-4 w-4" />
                    </span>
                    <input 
                      type="email"
                      required
                      placeholder="Ex: seu-email@gmail.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[#151A21] hover:bg-[#1E252E] outline-none text-sm text-white pl-10 pr-4 py-3.5 rounded-xl border border-[#1B2129] focus:border-[#00D97E] transition-all"
                    />
                  </div>
                </div>

                {/* WhatsApp Phone */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#AAB3BD] mb-1.5">
                    WhatsApp Comercial/Pessoal
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#AAB3BD]">
                      <Phone className="h-4 w-4" />
                    </span>
                    <input 
                      type="tel"
                      required
                      placeholder="Ex: (85) 99999-9999"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-[#151A21] hover:bg-[#1E252E] outline-none text-sm text-white pl-10 pr-4 py-3.5 rounded-xl border border-[#1B2129] focus:border-[#00D97E] transition-all"
                    />
                  </div>
                </div>

                {/* Consent disclaimer */}
                <div className="flex gap-2.5 items-start mt-4 pt-2">
                  <span className="p-1 rounded bg-[#00D97E]/10 border border-[#00D97E]/30 text-[#00D97E] flex-shrink-0 mt-0.5">
                    <ShieldCheck className="h-3 w-3" />
                  </span>
                  <p className="text-[10px] text-[#AAB3BD] leading-relaxed">
                    Privacidade garantida conforme LGPD. Seus dados cadastrais serão protegidos de forma segura e não serão compartilhados com terceiros.
                  </p>
                </div>

                {/* Submit button */}
                <div className="flex gap-3 pt-4">
                  <button 
                    type="button"
                    onClick={handlePrev}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-6 py-3.5 border border-[#1B2129] bg-[#151A21] rounded-xl text-sm font-semibold text-[#AAB3BD] hover:text-white transition-all"
                  >
                    Voltar
                  </button>
                  <button 
                    type="submit"
                    disabled={!isStepValid()}
                    className="flex-3 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#00D97E] to-[#00C26E] rounded-xl text-sm font-bold text-[#0F1318] shadow-[0_4px_20px_rgba(0,217,126,0.3)] hover:shadow-[0_4px_25px_rgba(0,217,126,0.5)] transition-all transform hover:-translate-y-0.5 hover:scale-[1.01]"
                  >
                    Gerar Diagnóstico <Sparkles className="h-4.5 w-4.5 fill-[#0F1318]" />
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* LOADER: Calculating diagnostics */}
          {calculating && (
            <div className="absolute inset-0 bg-[#0F1318]/98 z-30 flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-300">
              <div className="relative mb-6">
                <div className="h-16 w-16 rounded-full border-t-2 border-[#00D97E] animate-spin border-r-2 border-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <HeartPulse className="h-6 w-6 text-[#00D97E] animate-pulse" />
                </div>
              </div>

              <h4 className="font-display font-black text-white text-xl tracking-wide mb-1">
                ANALISANDO PERFIL EVO...
              </h4>
              <p className="text-xs font-mono text-[#00D97E] uppercase tracking-widest max-w-sm mb-6 animate-pulse">
                Calculando água ideal, macronutrientes & plano de treino adaptado...
              </p>

              <div className="max-w-md w-full bg-[#151A21] p-3.5 rounded-xl border border-[#1B2129] space-y-1.5 text-left font-mono text-[10px] text-[#AAB3BD]">
                <div className="flex justify-between">
                  <span>✔ Biometria (Gênero/Peso/Altura)</span>
                  <span className="text-[#00D97E]">Ok</span>
                </div>
                <div className="flex justify-between">
                  <span>✔ Taxa Metabólica de Descanso</span>
                  <span className="text-[#00D97E]">Computado</span>
                </div>
                <div className="flex justify-between">
                  <span>✔ Divisória de Carboidratos cíclicos</span>
                  <span className="text-[#00D97E]">Estabelecido</span>
                </div>
                <div className="flex justify-between animate-pulse">
                  <span>⚙ Mapeamento do perfil biológico e mental...</span>
                  <span className="text-[#00D97E]">Calculando</span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 7: Interactive Detailed Diagnosed Result Sheet */}
          {step === 7 && shoneResult && (
            <div className="relative z-10 animate-in zoom-in-95 duration-500 py-2">
              
              {/* Header Title Grid */}
              <div className="text-center max-w-2xl mx-auto mb-8">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#00D97E]/10 border border-[#00D97E]/30 text-[10px] font-mono font-bold tracking-widest text-[#00D97E] rounded mb-3">
                  <Award className="h-3.5 w-3.5" /> RELATÓRIO DO DIAGNÓSTICO LIBERADO
                </span>
                <h3 className="font-display font-black text-white text-3xl tracking-tight leading-none">
                  Olá, <span className="text-[#00D97E]">{form.name}</span>!
                </h3>
                <p className="text-xs font-mono text-[#AAB3BD] mt-1 tracking-wider uppercase">
                  Seu perfil físico foi diagnosticado com sucesso baseado em inteligência de dados.
                </p>
              </div>

              {/* Focus Showcase Banner */}
              <div className="p-6 bg-[#151A21] border-l-4 border-[#00D97E] rounded-xl mb-8 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="relative z-10 max-w-md">
                  <span className="text-[10px] font-mono font-bold text-[#00D97E] tracking-widest uppercase block mb-1">
                    PERFIL CORPORAL IDEAL:
                  </span>
                  <h4 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                    {shoneResult.title}
                  </h4>
                  <span className="text-xs font-medium text-[#AAB3BD] italic font-display block mt-1">
                    {shoneResult.tagline}
                  </span>
                  <p className="text-[13px] text-[#AAB3BD] mt-3 leading-relaxed">
                    {shoneResult.description}
                  </p>
                </div>

                <div className="bg-[#0F1318] p-4 rounded-xl border border-[#1B2129] flex flex-col items-center justify-center text-center self-start md:self-center min-w-[140px] shadow-lg">
                  <span className="text-2xl mb-1">🔬</span>
                  <span className="text-[8px] font-mono tracking-widest text-[#AAB3BD] uppercase">Biotipo Estimado</span>
                  <span className="text-[#00D97E] text-base font-display font-black tracking-wide mt-1 uppercase">
                    {form.gender === 'M' ? 'Miótipo' : 'Giotipo'} Evo
                  </span>
                </div>
              </div>

              {/* Complete Metric Grid Summary */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {/* Calories target */}
                <div className="bg-[#151A21] p-4 rounded-xl border border-[#1B2129]">
                  <span className="block text-[9px] font-mono tracking-widest text-[#AAB3BD] uppercase">Plano Calórico Sugerido</span>
                  <span className="block text-xl font-display font-black text-white mt-1.5">
                    {targetCaloriesMax} <span className="text-xs text-[#00D97E] font-medium font-mono">kcal/dia</span>
                  </span>
                </div>

                {/* Hydration target */}
                <div className="bg-[#151A21] p-4 rounded-xl border border-[#1B2129]">
                  <span className="block text-[9px] font-mono tracking-widest text-[#AAB3BD] uppercase">Alvo Hidratação Diária</span>
                  <span className="block text-xl font-display font-black text-white mt-1.5">
                    {(waterIntake / 1000).toFixed(1)} <span className="text-xs text-[#00D97E] font-medium font-mono">Litros/dia</span>
                  </span>
                </div>

                {/* Result estimation */}
                <div className="bg-[#151A21] p-4 rounded-xl border border-[#1B2129]">
                  <span className="block text-[9px] font-mono tracking-widest text-[#AAB3BD] uppercase">Janela de Primeiro Impacto</span>
                  <span className="block text-xl font-display font-black text-white mt-1.5 flex items-center gap-1.5">
                    {shoneResult.estimatedResultsDays} <span className="text-xs text-[#00D97E] font-medium font-mono">Dias</span>
                  </span>
                </div>
              </div>

              {/* Macros Matrix & Suggested work path side by side */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Protein/Carb/Fat Distribution Bars */}
                <div className="p-5 bg-[#151A21] border border-[#1B2129] rounded-2xl">
                  <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider mb-4 flex items-center gap-1.5">
                    <Percent className="h-4 w-4 text-[#00D97E]" />
                    Distribuição Teórica de Nutrientes
                  </h4>
                  <div className="space-y-4">
                    {/* Protein */}
                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-white font-mono font-bold">Proteínas Limpas</span>
                        <span className="text-[#00D97E] font-mono font-bold">{shoneResult.macroRatio.protein}%</span>
                      </div>
                      <div className="h-2 w-full bg-[#0F1318] rounded-full overflow-hidden">
                        <div className="h-full bg-[#00D97E] rounded-full" style={{ width: `${shoneResult.macroRatio.protein}%` }}></div>
                      </div>
                    </div>

                    {/* Carbs */}
                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-white font-mono font-bold">Carboidratos Complexos</span>
                        <span className="text-white font-mono font-bold">{shoneResult.macroRatio.carb}%</span>
                      </div>
                      <div className="h-2 w-full bg-[#0F1318] rounded-full overflow-hidden">
                        <div className="h-full bg-slate-300 rounded-full" style={{ width: `${shoneResult.macroRatio.carb}%` }}></div>
                      </div>
                    </div>

                    {/* Fat */}
                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-white font-mono font-bold">Lípideos Saudáveis</span>
                        <span className="text-white font-mono font-bold">{shoneResult.macroRatio.fat}%</span>
                      </div>
                      <div className="h-2 w-full bg-[#0F1318] rounded-full overflow-hidden">
                        <div className="h-full bg-slate-500 rounded-full" style={{ width: `${shoneResult.macroRatio.fat}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Focus Areas list */}
                <div className="p-5 bg-[#151A21] border border-[#1B2129] rounded-2xl flex flex-col justify-between">
                  <div>
                    <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <Dumbbell className="h-4 w-4 text-[#00D97E]" />
                      Pilares Mecânicos de Ação
                    </h4>
                    <ul className="space-y-2.5">
                      {shoneResult.focusAreas.map((area, idx) => (
                        <li key={idx} className="flex gap-2 items-start text-xs text-[#AAB3BD] leading-snug">
                          <Check className="h-4 w-4 text-[#00D97E] flex-shrink-0 mt-0.5" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-[#1B2129] flex items-center justify-between text-[11px] font-mono">
                    <span className="text-[#AAB3BD]">Treinos / Semana:</span>
                    <span className="text-white font-bold">{shoneResult.suggestedWeeklyWorkouts} Dias</span>
                  </div>
                </div>
              </div>

              {/* FINAL HIGH CONVERSION CTAs */}
              <div className="p-6 bg-gradient-to-r from-[#00D97E]/10 to-[#00C26E]/5 border border-[#00D97E]/30 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="font-display font-black text-white text-lg tracking-snug">
                    Quer pular as semanas de erro e acelerar esse resultado?
                  </h4>
                  <p className="text-xs text-[#AAB3BD] mt-1 max-w-lg">
                    Seu diagnóstico foi enviado para <span className="text-white font-mono font-bold">{form.email}</span>. Clique ao lado para iniciar sua jornada direcionada com Lucas Fernandes, com suporte direto no WhatsApp.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <button
                    onClick={resetQuiz}
                    className="px-5 py-3 rounded-xl border border-[#1B2129] bg-[#0F1318] font-mono text-[10px] uppercase font-bold text-[#AAB3BD] hover:text-white transition-all text-center"
                  >
                    Refazer Teste
                  </button>

                  <a
                    href={`https://wa.me/5585991823467?text=Ola%20Lucas!%20Acabei%20de%20fazer%2520o%2520diagnostico%2520EVO%2520da%2520sua%2520Landing%2520Page%2520e%2520meu%2520perfil%2520deu%2520${shoneResult.title}!%252520Gostaria%252520de%252520saber%252520como%252520entrar%252520no%252520sistema.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#00D97E] to-[#00C26E] text-[#0F1318] text-xs font-black uppercase tracking-wider rounded-xl shadow-[0_4px_15px_rgba(0,217,126,0.3)] hover:shadow-[0_4px_25px_rgba(0,217,126,0.5)] transition-all font-sans text-center"
                  >
                    Começar Transformação <Send className="h-4.5 w-4.5" />
                  </a>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
export default QuizSection;
