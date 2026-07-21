export interface SystemMetric {
  label: string;
  value: string;
  subtext?: string;
  change?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'ai' | 'backend' | 'saas';
  summary: string;
  highlights: string[];
  techStack: string[];
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  architectureDiagram?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  bullets: string[];
  skillsUsed: string[];
  metrics: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    context: string;
    badge?: string;
  }[];
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  description: string;
  badge: string;
  iconName: 'trophy' | 'award' | 'code' | 'star';
}

export interface TerminalCommand {
  command: string;
  description: string;
  output: string | string[] | { type: 'json' | 'table' | 'text'; data: any };
}
