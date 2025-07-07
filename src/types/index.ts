export interface Project {
    id: string;
    title: string;
    description: string;
    categories: string[];
    image: string;
    technologies: string[];
    link?: string;
    video?: string;
    gallery?: string[];
    featured?: boolean;
  }
  
  export interface Skill {
    name: string;
    icon: string;
    categories: string[];
    proficiency: number; // 0-100
    color: string;
  }
  
  export interface SkillCategory {
    id: string;
    name: string;
    color: string;
    description?: string;
  }
  
  export interface ProjectCategory {
    id: string;
    name: string;
    color: string;
    description?: string;
  }
  
  export interface Experience {
    id: string;
    company: string;
    position: string;
    period: string;
    description: string[];
    technologies: string[];
    location?: string;
    type?: 'full-time' | 'part-time' | 'contract' | 'freelance' | 'remote';
    current?: boolean;
    logo?: string;
  }
  
  export interface Achievement {
    id: string;
    title: string;
    description: string;
    date: string;
    category: string;
    link?: string;
  }
  
  export interface Education {
    id: string;
    institution: string;
    degree: string;
    field: string;
    period: string;
    description?: string;
    achievements?: string[];
  }
  
  export interface PersonalInfo {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    website: string;
    about: string;
    social: {
      youtube: string;
      instagram: string;
      artstation: string;
      github?: string;
    };
  }
  
  export interface PortfolioState {
    theme: 'light' | 'dark';
    currentSection: string;
    isMenuOpen: boolean;
    isLoading: boolean;
    error: string | null;
    setTheme: (theme: 'light' | 'dark') => void;
    setCurrentSection: (section: string) => void;
    toggleMenu: () => void;
    closeMenu: () => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
  }