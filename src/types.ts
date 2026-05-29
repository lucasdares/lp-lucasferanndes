export interface QuizAnswer {
  gender: 'M' | 'F' | '';
  age: number;
  height: number;
  weight: number;
  goal: 'loss' | 'mass' | 'definition' | 'performance' | '';
  frequency: number; // 0, 1, 2, 3, 4, 5+
  level: 'beginner' | 'intermediate' | 'advanced' | '';
  difficulty: 'discipline' | 'diet' | 'time' | 'consistency' | 'motivation' | '';
  name: string;
  email: string;
  phone: string;
}

export type EvoProfileType = 'EVO_CUT' | 'EVO_MASS' | 'EVO_RECOMP' | 'EVO_PERFORMANCE' | 'EVO_RESET' | 'EVO_DISCIPLINA';

export interface EvoProfileDetails {
  type: EvoProfileType;
  title: string;
  tagline: string;
  description: string;
  macroRatio: {
    protein: number; // percentage
    carb: number;
    fat: number;
  };
  focusAreas: string[];
  suggestedWeeklyWorkouts: number;
  xpBonus: number;
  badge: string;
  estimatedResultsDays: number;
}

export interface TransformationItem {
  id: string;
  name: string;
  age: number;
  beforeImg: string;
  afterImg: string;
  beforeWeight: string;
  afterWeight: string;
  duration: string;
  achievedGoal: string;
  isExpert?: boolean;
}

export interface MissionItem {
  id: string;
  title: string;
  xp: number;
  icon: string;
  isChecked: boolean;
}
