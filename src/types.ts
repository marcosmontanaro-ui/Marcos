export interface SurveyStat {
  totalRespondents: number;
  totalConflictAreas: number;
  womenCount: number;
  menCount: number;
  ageDistribution: {
    label: string;
    count: number;
    percentage: number;
    color: string;
  }[];
}

export interface ProblemItem {
  id: string;
  rank: number;
  title: string;
  category: string;
  totalVotes: number;
  percentage: number;
  womenVotes: number;
  menVotes: number;
  description?: string;
}

export interface ThematicArea {
  id: string;
  code: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  items: {
    text: string;
    count: number;
    percentage: number;
  }[];
}

export interface SegmentPlan {
  id: string;
  ageRange: string;
  gender: 'Mujer' | 'Varon';
  title: string;
  color: string;
  topProblems: {
    text: string;
    count: number;
    percentage?: number;
  }[];
  actionFocus: string;
  keyPriorities: string[];
}

export interface QualitativeCategory {
  title: string;
  icon: string;
  highlight: string;
  description: string;
  quotes: string[];
  color: string;
}
