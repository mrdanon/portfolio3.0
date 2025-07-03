export interface Project {
    id: string;
    title: string;
    description: string;
    category: '3d' | 'ai' | 'education' | 'addons' | 'games' | 'architectural';
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
    category: '3d' | 'programming' | 'ai' | 'design' | 'languages';
    proficiency: number; // 0-100
    color?: string;
  }
  
  export interface Experience {
    id: string;
    company: string;
    position: string;
    period: string;
    description: string[];
    technologies: string[];
    logo?: string;
    current?: boolean;
  }
  
  export interface Personal {
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
      linkedin?: string;
      github?: string;
    };
  }
  
  export interface Education {
    degree: string;
    institution: string;
    period: string;
    description: string;
  }