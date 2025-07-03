import { Skill } from '@/types'

export const skills: Skill[] = [
  // 3D & Graphics
  {
    name: "Blender",
    icon: "/icons/blender.png",
    category: "3d",
    proficiency: 95,
    color: "#E87D0D"
  },
  {
    name: "Unreal Engine",
    icon: "/icons/unreal-icon.png",
    category: "3d",
    proficiency: 85,
    color: "#000000"
  },
  {
    name: "Three.js",
    icon: "/icons/threejs.png",
    category: "3d",
    proficiency: 80,
    color: "#000000"
  },
  {
    name: "After Effects",
    icon: "/icons/after-effects.png",
    category: "3d",
    proficiency: 80,
    color: "#9999FF"
  },
  {
    name: "DaVinci Resolve",
    icon: "/icons/Davinci_resolve.png",
    category: "3d",
    proficiency: 75,
    color: "#FF6B6B"
  },
  {
    name: "Nomad Sculpt",
    icon: "/icons/nomad.webp",
    category: "3d",
    proficiency: 70,
    color: "#4ECDC4"
  },

  // Programming
  {
    name: "Python",
    icon: "/icons/python.png",
    category: "programming",
    proficiency: 85,
    color: "#3776AB"
  },
  {
    name: "JavaScript",
    icon: "/icons/js.webp",
    category: "programming",
    proficiency: 75,
    color: "#F7DF1E"
  },
  {
    name: "HTML/CSS",
    icon: "/icons/vscode.png",
    category: "programming",
    proficiency: 80,
    color: "#E44D26"
  },
  {
    name: "Godot",
    icon: "/icons/Godot.png",
    category: "programming",
    proficiency: 70,
    color: "#478CBF"
  },
  {
    name: "VS Code",
    icon: "/icons/vscode.png",
    category: "programming",
    proficiency: 90,
    color: "#007ACC"
  },

  // AI & Machine Learning
  {
    name: "AI Integration",
    icon: "/icons/ai_brain.png",
    category: "ai",
    proficiency: 85,
    color: "#FF6B6B"
  },
  {
    name: "AI Networks",
    icon: "/icons/AI_Network.png",
    category: "ai",
    proficiency: 80,
    color: "#4ECDC4"
  },
  {
    name: "Cursor AI",
    icon: "/icons/curosr_ai.webp",
    category: "ai",
    proficiency: 85,
    color: "#9B59B6"
  },
  {
    name: "ChatGPT API",
    icon: "/icons/ai_brain.png",
    category: "ai",
    proficiency: 75,
    color: "#00A67E"
  },
  {
    name: "N8N",
    icon: "/icons/n8n.png",
    category: "ai",
    proficiency: 70,
    color: "#EA4B71"
  },

  // Design & Graphics
  {
    name: "Photoshop",
    icon: "/icons/photoshop.png",
    category: "design",
    proficiency: 75,
    color: "#31A8FF"
  },
  {
    name: "Illustrator",
    icon: "/icons/illustrator.png",
    category: "design",
    proficiency: 70,
    color: "#FF9A00"
  },
  {
    name: "InDesign",
    icon: "/icons/indesign.png",
    category: "design",
    proficiency: 65,
    color: "#FF3366"
  },
  {
    name: "Krita",
    icon: "/icons/krita.png",
    category: "design",
    proficiency: 60,
    color: "#3BABFF"
  },
  {
    name: "Procreate",
    icon: "/icons/procreate.png",
    category: "design",
    proficiency: 65,
    color: "#000000"
  },
  {
    name: "Character Creator",
    icon: "/icons/character_creator.webp",
    category: "design",
    proficiency: 70,
    color: "#FF6B6B"
  },

  // Languages
  {
    name: "Polish",
    icon: "/icons/photo_icon.png",
    category: "languages",
    proficiency: 100,
    color: "#DC143C"
  },
  {
    name: "English",
    icon: "/icons/photo_icon.png",
    category: "languages",
    proficiency: 90,
    color: "#4169E1"
  },

  // Additional Tools
  {
    name: "Capture One",
    icon: "/icons/Capture_One.png",
    category: "design",
    proficiency: 65,
    color: "#000000"
  },
  {
    name: "Audition",
    icon: "/icons/adobe_audition.png",
    category: "design",
    proficiency: 60,
    color: "#9999FF"
  },
  {
    name: "Premiere Pro",
    icon: "/icons/premiere-pro.png",
    category: "design",
    proficiency: 70,
    color: "#9999FF"
  },
  {
    name: "Notion",
    icon: "/icons/Notion_app_logo.png",
    category: "design",
    proficiency: 80,
    color: "#000000"
  }
]

export const skillCategories = [
  { id: '3d', name: '3D & Graphics', color: '#4F46E5' },
  { id: 'programming', name: 'Programming', color: '#059669' },
  { id: 'ai', name: 'AI & ML', color: '#DC2626' },
  { id: 'design', name: 'Design', color: '#7C3AED' },
  { id: 'languages', name: 'Languages', color: '#EA580C' }
]