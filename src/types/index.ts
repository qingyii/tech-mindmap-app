export interface TechNode {
  id: string;
  label: string;
  description?: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  subcategory?: string;
  children?: TechNode[];
  resources?: Resource[];
  relevanceForPM?: number;
  relevanceForBA?: number;
  learningMaterials?: LearningMaterial[];
  bestPractices?: BestPractice[];
  interviewQuestions?: InterviewQuestion[];
  handsOnExercises?: HandsOnExercise[];
  courseOutline?: CourseModule[];
}

export interface Resource {
  title: string;
  url: string;
  type: 'article' | 'video' | 'course' | 'documentation' | 'tool' | 'book';
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  duration?: string;
  isFree?: boolean;
}

export interface LearningMaterial {
  title: string;
  content: string;
  type: 'concept' | 'tutorial' | 'example' | 'case-study';
  duration?: string;
}

export interface BestPractice {
  title: string;
  description: string;
  role: 'PM' | 'BA' | 'both';
  category: 'communication' | 'analysis' | 'technical' | 'process';
  example?: string;
}

export interface InterviewQuestion {
  question: string;
  type: 'behavioral' | 'technical' | 'scenario';
  level: 'junior' | 'mid' | 'senior';
  role: 'PM' | 'BA' | 'both';
  sampleAnswer?: string;
  followUpQuestions?: string[];
}

export interface HandsOnExercise {
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  prerequisites?: string[];
  steps: ExerciseStep[];
  deliverables: string[];
  evaluation?: string;
}

export interface ExerciseStep {
  stepNumber: number;
  title: string;
  description: string;
  hints?: string[];
  resources?: string[];
}

export interface CourseModule {
  moduleNumber: number;
  title: string;
  description: string;
  duration: string;
  learningObjectives: string[];
  topics: string[];
  activities: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
}

export interface LearningPath {
  id: string;
  title: string;
  role: 'PM' | 'BA';
  description: string;
  nodes: string[];
  estimatedTime: string;
}