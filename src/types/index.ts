export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  avatar?: string;
  createdAt: string;
}

export interface DataSource {
  id: string;
  type: 'gmail' | 'xmind' | 'notion' | 'bookmark';
  name: string;
  status: 'connected' | 'disconnected' | 'error';
  lastSync?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  level: number;
  relevance: number;
}

export interface Opportunity {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  source: string;
  matchScore: number;
  createdAt: string;
}

export interface ApiError {
  message: string;
  code: string;
  status: number;
}