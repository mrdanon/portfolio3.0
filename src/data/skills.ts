import { Skill, SkillCategory } from '@/types'

export const skillCategories: SkillCategory[] = [
  {
    id: '3d',
    name: '3D & Animation',
    color: '#6B7280',
    description: '3D modeling, animation, and visualization'
  },
  {
    id: 'programming',
    name: 'Programming',
    color: '#6B7280',
    description: 'Software development and scripting'
  },
  {
    id: 'ai',
    name: 'AI & Machine Learning',
    color: '#6B7280',
    description: 'Artificial intelligence and automation'
  },
  {
    id: 'design',
    name: 'Design & Graphics',
    color: '#6B7280',
    description: 'Graphic design and visual arts'
  },
  {
    id: 'video',
    name: 'Video Production',
    color: '#6B7280',
    description: 'Video editing, motion graphics, and post-production'
  },
  {
    id: 'photo',
    name: 'Photography',
    color: '#6B7280',
    description: 'Photo editing and image processing'
  },
  {
    id: 'devops',
    name: 'DevOps & Cloud',
    color: '#6B7280',
    description: 'Development operations and cloud infrastructure'
  },
  {
    id: 'languages',
    name: 'Languages',
    color: '#6B7280',
    description: 'Spoken and written languages'
  }
]

export const skills: Skill[] = [
  // 3D & Graphics
  {
    name: "Blender",
    icon: "/icons/blender.png",
    categories: ["3d"],
    proficiency: 95,
    color: "#E87D0D"
  },
  {
    name: "Unreal Engine",
    icon: "/icons/unreal-icon.png",
    categories: ["3d"],
    proficiency: 85,
    color: "#ADADAD"
  },
  {
    name: "Nomad Sculpt",
    icon: "/icons/nomad.webp",
    categories: ["3d"],
    proficiency: 70,
    color: "#4ECDC4"
  },
  {
    name: "Toon Boom Harmony",
    icon: "/icons/harmony.png",
    categories: ["3d", "video"],
    proficiency: 60,
    color: "#FF6B6B"
  },

  // Programming
  {
    name: "Python",
    icon: "/icons/python.png",
    categories: ["programming"],
    proficiency: 85,
    color: "#3776AB"
  },
  {
    name: "Three.js",
    icon: "/icons/threejs.png",
    categories: ["programming", "3d"],
    proficiency: 80,
    color: "#ADADAD"
  },
  {
    name: "JavaScript",
    icon: "/icons/js.webp",
    categories: ["programming"],
    proficiency: 75,
    color: "#F7DF1E"
  },
  {
    name: "React",
    icon: "/icons/react-512.webp",
    categories: ["programming"],
    proficiency: 70,
    color: "#61DAFB"
  },
  {
    name: "HTML/CSS",
    icon: "/icons/vscode.png",
    categories: ["programming"],
    proficiency: 80,
    color: "#E44D26"
  },
  {
    name: "Godot",
    icon: "/icons/Godot.png",
    categories: ["programming", "3d"],
    proficiency: 70,
    color: "#478CBF"
  },
  {
    name: "VS Code",
    icon: "/icons/vscode.png",
    categories: ["programming"],
    proficiency: 90,
    color: "#007ACC"
  },
  {
    name: "GitHub",
    icon: "/icons/github.png",
    categories: ["programming"],
    proficiency: 80,
    color: "#181717"
  },

  // DevOps & Cloud
  {
    name: "CapRover",
    icon: "/icons/cap_rover.png",
    categories: ["devops"],
    proficiency: 70,
    color: "#4ECDC4"
  },
  {
    name: "Docker",
    icon: "/icons/Docer_icon.webp",
    categories: ["devops", "programming"],
    proficiency: 50,
    color: "#2496ED"
  },
  {
    name: "Hetzner Cloud",
    icon: "/icons/hetzner_cloud.jpg",
    categories: ["devops"],
    proficiency: 65,
    color: "#D50C2D"
  },

  // AI & Machine Learning
  {
    name: "AI Integration",
    icon: "/icons/ai_brain.png",
    categories: ["ai"],
    proficiency: 85,
    color: "#FF6B6B"
  },
  {
    name: "AI Networks",
    icon: "/icons/AI_Network.png",
    categories: ["ai"],
    proficiency: 80,
    color: "#4ECDC4"
  },
  {
    name: "Cursor AI",
    icon: "/icons/curosr_ai.webp",
    categories: ["ai"],
    proficiency: 85,
    color: "#9B59B6"
  },
  {
    name: "ChatGPT API",
    icon: "/icons/gpt.webp",
    categories: ["ai"],
    proficiency: 75,
    color: "#00A67E"
  },
  {
    name: "N8N",
    icon: "/icons/n8n.png",
    categories: ["ai"],
    proficiency: 70,
    color: "#EA4B71"
  },

  // Design & Graphics
  {
    name: "Photoshop",
    icon: "/icons/photoshop.png",
    categories: ["design"],
    proficiency: 75,
    color: "#31A8FF"
  },
  {
    name: "Illustrator",
    icon: "/icons/illustrator.png",
    categories: ["design"],
    proficiency: 70,
    color: "#FF9A00"
  },
  {
    name: "InDesign",
    icon: "/icons/indesign.png",
    categories: ["design"],
    proficiency: 65,
    color: "#FF3366"
  },
  {
    name: "Affinity Designer",
    icon: "/icons/designer_icon.png",
    categories: ["design"],
    proficiency: 80,
    color: "#1B72BE"
  },
  {
    name: "Affinity Publisher",
    icon: "/icons/publisher_icon.png",
    categories: ["design"],
    proficiency: 80,
    color: "#C9284D"
  },
  {
    name: "Krita",
    icon: "/icons/krita.png",
    categories: ["design"],
    proficiency: 60,
    color: "#3BABFF"
  },
  {
    name: "Procreate",
    icon: "/icons/procreate.png",
    categories: ["design"],
    proficiency: 65,
    color: "#7540e5"
  },
  {
    name: "Character Creator",
    icon: "/icons/character_creator.webp",
    categories: ["design", "3d"],
    proficiency: 70,
    color: "#FF6B6B"
  },

  // Photography
  {
    name: "Affinity Photo",
    icon: "/icons/photo_icon.png",
    categories: ["photo", "design"],
    proficiency: 70,
    color: "#7E4DD2"
  },
  {
    name: "Capture One",
    icon: "/icons/Capture_One.png",
    categories: ["photo", "design"],
    proficiency: 65,
    color: "#7540e5"
  },

  // Video Production
  {
    name: "After Effects",
    icon: "/icons/after-effects.png",
    categories: ["video", "design"],
    proficiency: 80,
    color: "#9999FF"
  },
  {
    name: "DaVinci Resolve",
    icon: "/icons/Davinci_resolve.png",
    categories: ["video"],
    proficiency: 85,
    color: "#FF6B6B"
  },
  {
    name: "Premiere Pro",
    icon: "/icons/premiere-pro.png",
    categories: ["video"],
    proficiency: 80,
    color: "#9999FF"
  },
  {
    name: "Audition",
    icon: "/icons/adobe_audition.png",
    categories: ["video"],
    proficiency: 60,
    color: "#9999FF"
  },

  // Languages
  {
    name: "Polish",
    icon: "/icons/PL_flag.webp",
    categories: ["languages"],
    proficiency: 100,
    color: "#DC143C"
  },
  {
    name: "English",
    icon: "/icons/UK_flag.webp",
    categories: ["languages"],
    proficiency: 90,
    color: "#4169E1"
  }
]

export default skills