import { TransformationItem, MissionItem, EvoProfileDetails, EvoProfileType } from './types';

export const transformations: TransformationItem[] = [
  {
    id: 'l1',
    name: 'Lucas Fernandes',
    age: 26,
    beforeImg: '/assets/input_file_9.png', // Lucas gym shape
    afterImg: '/assets/input_file_8.png', // Lucas stage comp shape
    beforeWeight: '78kg',
    afterWeight: '88kg (Seco & Competidor)',
    duration: 'Fase de Construção',
    achievedGoal: 'Fundador do Método EVO — De amador a campeão de fisiculturismo no palco nacional',
    isExpert: true
  },
  {
    id: 't1',
    name: 'Karla S.',
    age: 28,
    beforeImg: '/assets/input_file_0.png', // Woman back/front bikini (attached image 0)
    afterImg: '/assets/input_file_0.png',
    beforeWeight: '74kg',
    afterWeight: '61kg',
    duration: '12 semanas',
    achievedGoal: 'Gordura abdominal eliminada, alta definição de glúteos e pernas, postura remodelada.'
  },
  {
    id: 't2',
    name: 'Felipe M.',
    age: 32,
    beforeImg: '/assets/input_file_2.png', // Man in yellow shorts (attached image 2)
    afterImg: '/assets/input_file_2.png',
    beforeWeight: '82kg',
    afterWeight: '74kg',
    duration: '8 semanas',
    achievedGoal: 'Definição abdominal de elite e densidade muscular dorsal restabelecida.'
  },
  {
    id: 't3',
    name: 'Roberto K.',
    age: 29,
    beforeImg: '/assets/input_file_3.png', // Man back and shoulders (attached image 3)
    afterImg: '/assets/input_file_3.png',
    beforeWeight: '79kg',
    afterWeight: '77kg',
    duration: '10 semanas',
    achievedGoal: 'Hipertrofia de ombros e costas (V-Taper) com redução drástica de gordura lombar.'
  },
  {
    id: 't4',
    name: 'Jean P.',
    age: 23,
    beforeImg: '/assets/input_file_4.png', // Overweight to fit (attached image 4)
    afterImg: '/assets/input_file_4.png',
    beforeWeight: '102kg',
    afterWeight: '79kg',
    duration: '24 semanas',
    achievedGoal: 'Reconstrução corporal total: eliminação de 23kg de gordura e ganho de massa magra.'
  },
  {
    id: 't5',
    name: 'Mauricio G.',
    age: 31,
    beforeImg: '/assets/input_file_5.png', // Stage competitors and networking (attached image 2)
    afterImg: '/assets/input_file_5.png',
    beforeWeight: '86kg',
    afterWeight: '81kg (Palco)',
    duration: '16 semanas',
    achievedGoal: 'Consistência de Elite, ganhando troféus de fisiculturismo amador regional.'
  }
];

export const galleryExpert: string[] = [
  '/assets/input_file_8.png', // Lucas stage 291
  '/assets/input_file_9.png', // Lucas gym chest/bicep flex
  '/assets/input_file_10.png', // Lucas stage 208
  '/src/assets/images/lucas_fernandes_hero_1780062447733.png' // Studio portrait
];

export const initialMissions: MissionItem[] = [
  { id: 'm1', title: 'Beber 4 litros de água pura', xp: 50, icon: 'GlassWater', isChecked: false },
  { id: 'm2', title: 'Fazer 20 minutos de cardio metabólico', xp: 75, icon: 'Timer', isChecked: false },
  { id: 'm3', title: 'Concluir o treino periodizado do dia', xp: 120, icon: 'Dumbbell', isChecked: false },
  { id: 'm4', title: 'Garantir no mínimo 8 horas de sono', xp: 60, icon: 'Moon', isChecked: false },
  { id: 'm5', title: 'Bater a meta diária de proteínas limpas', xp: 90, icon: 'Apple', isChecked: false }
];

export const evoProfiles: Record<EvoProfileType, EvoProfileDetails> = {
  EVO_CUT: {
    type: 'EVO_CUT',
    title: 'EVO CUT',
    tagline: 'Termogênese e Deficit Calórico Altamente Eficiente',
    description: 'Indicado para quem precisa acelerar a queima de gordura visceral e subcutânea preservando 100% da massa muscular magra. O foco principal é otimização hormonal aliado a cardio liss e musculação densa.',
    macroRatio: { protein: 40, carb: 30, fat: 30 },
    focusAreas: ['Deficit calórico estratégico moderado (ciclos de refeed)', 'Estímulos de treino focados em densidade de carga', 'Protocolo intensificado de cardio em jejum (AER)'],
    suggestedWeeklyWorkouts: 4,
    xpBonus: 500,
    badge: 'Falcão Solitário (Queima Máxima)',
    estimatedResultsDays: 21
  },
  EVO_MASS: {
    type: 'EVO_MASS',
    title: 'EVO MASS',
    tagline: 'Anabolismo Ativo e Sobrecarga Progressiva Mapeada',
    description: 'Especialmente desenhado para ganho de massa muscular sólida por hipertrofia miofibrilar. Foca no superavit calórico limpo (lean bulking) e manipulação do tempo sob tensão celular.',
    macroRatio: { protein: 30, carb: 50, fat: 20 },
    focusAreas: ['Superavit calórico limpo focado em glicogênio celular', 'Exercícios multiarticulares compostos com progressão de carga', 'Suplementação direcionada e tempos cirúrgicos de descanso'],
    suggestedWeeklyWorkouts: 5,
    xpBonus: 600,
    badge: 'Colosso EVO (Força Total)',
    estimatedResultsDays: 30
  },
  EVO_RECOMP: {
    type: 'EVO_RECOMP',
    title: 'EVO RECOMP',
    tagline: 'Queima de Gordura e Ganho de Massa Simultâneo',
    description: 'O "santo graal" da evolução física. Recomendado para perfis que possuem boa base muscular mas necessitam reorganizar a composição corporal: reduzindo gordura localizada enquanto aumentam tônus e firmeza.',
    macroRatio: { protein: 35, carb: 40, fat: 25 },
    focusAreas: ['Dieta normocalórica cíclica (carb cycling)', 'Hipertrofia metabólica aliada a cardio pós-treino curto', 'Otimização digestiva e redução de inflamações sistêmicas'],
    suggestedWeeklyWorkouts: 4,
    xpBonus: 550,
    badge: 'Remodelador EVO (Simetria Cósmica)',
    estimatedResultsDays: 28
  },
  EVO_PERFORMANCE: {
    type: 'EVO_PERFORMANCE',
    title: 'EVO PERFORMANCE',
    tagline: 'Otimização Biomecânica e Rendimento Máximo',
    description: 'Para quem já possui nível avançado e estagnou nos resultados comuns. Buscaremos a quebra de platô através de novas intensidades de treino e readequação de rotinas metabólicas.',
    macroRatio: { protein: 30, carb: 45, fat: 25 },
    focusAreas: ['Treinos em formato cluster sets, rest-pause e super-sets', 'Recuperação muscular ativa e liberação miofascial assistida', 'Gasto energético diário ultra-meticuloso'],
    suggestedWeeklyWorkouts: 5,
    xpBonus: 750,
    badge: 'Predador EVO (Elite Absoluta)',
    estimatedResultsDays: 14
  },
  EVO_RESET: {
    type: 'EVO_RESET',
    title: 'EVO RESET',
    tagline: 'Readequação Neuromuscular e Desinflamação Orgânica',
    description: 'Indicado para quem está há meses inativo ou sofrendo com altíssima exaustão metabólica. O EVO Reset restaura o eixo de sensibilidade à insulina e treina a mobilidade articular básica.',
    macroRatio: { protein: 35, carb: 35, fat: 30 },
    focusAreas: ['Treinos adaptativos e reeducação mioneural ativa', 'Dieta low-glycemic rica em micronutrientes desinflamatórios', 'Prioridade máxima em hidratação e sono profundo cronometrado'],
    suggestedWeeklyWorkouts: 3,
    xpBonus: 400,
    badge: 'Sinergia EVO (A Nova Base)',
    estimatedResultsDays: 15
  },
  EVO_DISCIPLINA: {
    type: 'EVO_DISCIPLINA',
    title: 'EVO DISCIPLINA',
    tagline: 'Ancoragem de Hábitos e Superação de Barreiras Mentais',
    description: 'Focado nos alunos que sabem o que fazer, mas falham sistematicamente na consistência. Construiremos gatilhos mentais fortes, rastreadores de hábitos e suporte de microcomunidades.',
    macroRatio: { protein: 35, carb: 35, fat: 30 },
    focusAreas: ['Gamificação extrema para gerar consistência', 'Sessões de mentoria e responsabilidade diária compartilhada', 'Metas comportamentais simples baseadas em streaks/combos diários'],
    suggestedWeeklyWorkouts: 3,
    xpBonus: 450,
    badge: 'Titã da Vontade (Inabalável)',
    estimatedResultsDays: 10
  }
};
