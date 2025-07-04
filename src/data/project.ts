import { Project, ProjectCategory } from '@/types'

export const projectCategories: ProjectCategory[] = [
  {
    id: '3d',
    name: '3D & Animation',
    color: '#E87D0D',
    description: '3D modeling, animation, and visualization'
  },
  {
    id: 'ai',
    name: 'AI & Machine Learning',
    color: '#FF6B6B',
    description: 'Artificial intelligence and automation'
  },
  {
    id: 'education',
    name: 'Educational',
    color: '#22C55E',
    description: 'Educational content and teaching materials'
  },
  {
    id: 'addons',
    name: 'Blender Addons',
    color: '#3B82F6',
    description: 'Custom Blender addons and tools'
  },
  {
    id: 'games',
    name: 'Game Development',
    color: '#8B5CF6',
    description: 'Game development and interactive media'
  },
  {
    id: 'architectural',
    name: 'Architectural',
    color: '#06B6D4',
    description: 'Architectural visualization and design'
  },
  {
    id: 'animation',
    name: 'Animation',
    color: '#F59E0B',
    description: 'Character and motion animation'
  },
  {
    id: 'video',
    name: 'Video Production',
    color: '#FF3366',
    description: 'Video editing and post-production'
  }
]

export const projects: Project[] = [
  // Featured Projects
  {
    id: "showreel",
    title: "Professional Showreel",
    description: "A comprehensive showcase of my 3D animation, architectural visualization, and educational content work spanning multiple years.",
    categories: ["3d", "animation", "video"],
    image: "/Showreel_cover.webp",
    video: "https://www.youtube.com/@dr.blender",
    technologies: ["Blender", "After Effects", "Premiere Pro", "DaVinci Resolve"],
    featured: true,
    gallery: ["/Showreel_cover.webp"]
  },
  {
    id: "ai-avatars",
    title: "AI Avatar Integration",
    description: "Interactive AI-powered characters using Unreal Engine and ConvAI for real-time conversations and presentations.",
    categories: ["ai", "3d", "animation"],
    image: "/portfolio/avatar_ai(1).webp",
    technologies: ["Unreal Engine", "ConvAI", "AI Integration", "Character Animation"],
    featured: true,
    gallery: [
      "/portfolio/avatar_ai(1).webp",
      "/portfolio/avatar_ai(2).webp",
      "/portfolio/avatar_ai(3).webp"
    ]
  },
  {
    id: "microcosmos",
    title: "Microcosmos Animation",
    description: "Award-winning educational animation showcasing cellular processes and microscopic world interactions.",
    categories: ["education", "3d", "animation"],
    image: "/portfolio/Micor_cosmos_animation.webp",
    technologies: ["Blender", "Geometry Nodes", "Scientific Visualization"],
    featured: true,
    gallery: ["/portfolio/Micor_cosmos_animation.webp"]
  },
  {
    id: "silver-blood",
    title: "Silver Blood Animation",
    description: "Award-winning scientific visualization of blood cell interactions used in medical education.",
    categories: ["education", "3d", "animation"],
    image: "/portfolio/Silver_blod_animation.webp",
    technologies: ["Blender", "Medical Visualization", "After Effects"],
    featured: true,
    gallery: ["/portfolio/Silver_blod_animation.webp"]
  },

  // Blender Addons
  {
    id: "oh-my-gear",
    title: "Oh My Gear Addon",
    description: "Custom Blender addon for procedural gear generation and mechanical animation workflows.",
    categories: ["addons", "3d"],
    image: "/OhMyGear_addon.webp",
    technologies: ["Python", "Blender API", "Procedural Generation"],
    gallery: ["/OhMyGear_addon.webp", "/portfolio/OhMyGears_addon.webp"]
  },
  {
    id: "oh-my-graph",
    title: "Oh My Graph Addon",
    description: "Blender addon for creating and managing complex node-based workflows and data visualization.",
    categories: ["addons", "3d"],
    image: "/OhMyGraph_addon.webp",
    technologies: ["Python", "Blender API", "Data Visualization"],
    gallery: ["/OhMyGraph_addon.webp", "/portfolio/OhMyGraph_addon.webp"]
  },
  {
    id: "oh-my-lights",
    title: "Oh My Lights Addon",
    description: "Professional lighting setup and management tool for Blender artists.",
    categories: ["addons", "3d"],
    image: "/OhMyLight_addon.webp",
    technologies: ["Python", "Blender API", "Lighting Systems"],
    gallery: ["/OhMyLight_addon.webp", "/portfolio/OhMyLights_animations.webp"]
  },
  {
    id: "oh-my-time",
    title: "Oh My Time Addon",
    description: "Time management and animation timeline tools for efficient Blender workflows.",
    categories: ["addons", "3d"],
    image: "/OhMyTime_addon.webp",
    technologies: ["Python", "Blender API", "Animation Tools"]
  },

  // Educational Animations
  {
    id: "educational-animations",
    title: "Educational Animations",
    description: "Collection of educational animations created for the Polish Ministry of Education, covering various scientific topics.",
    categories: ["education", "3d", "animation"],
    image: "/Educational_animations_cover.webp",
    technologies: ["Blender", "Educational Content", "Scientific Visualization"],
    gallery: [
      "/Educational_animations_cover.webp",
      "/portfolio/Cubes_animation_teaching.webp",
      "/portfolio/Piano_animation.webp",
      "/portfolio/National_parks_motion_design.webp"
    ]
  },
  {
    id: "gastronomic-animations",
    title: "Gastronomic Machine Animations",
    description: "Technical animations showcasing industrial kitchen equipment and food processing machinery.",
    categories: ["3d", "animation"],
    image: "/portfolio/Gastronomic_animations_machines(1).webp",
    technologies: ["Blender", "Technical Animation", "Industrial Design"],
    gallery: [
      "/portfolio/Gastronomic_animations_machines(1).webp",
      "/portfolio/Gastronomic_animations_machines(2).webp",
      "/portfolio/Gastronomic_animations_machines(3).webp"
    ]
  },
  {
    id: "pos-system",
    title: "POS System Animation",
    description: "Interactive Point of Sale system demonstration animation for retail environments.",
    categories: ["3d", "animation"],
    image: "/portfolio/POS_system_animations.webp",
    technologies: ["Blender", "UI Animation", "Commercial Visualization"]
  },

  // Architectural Visualizations
  {
    id: "architectural-visualizations",
    title: "Architectural Visualizations",
    description: "High-quality architectural renderings and construction sequence animations for real estate and development projects.",
    categories: ["architectural", "3d"],
    image: "/Archi_vis_cover.webp",
    technologies: ["Blender", "Architectural Visualization", "Photorealistic Rendering"],
    gallery: [
      "/Archi_vis_cover.webp",
      "/portfolio/Archi_vis(1).webp",
      "/portfolio/Archi_vis(2).webp",
      "/portfolio/Archi_vis(3).webp",
      "/portfolio/Archi_vis(4).webp",
      "/portfolio/Archi_vis(5).webp",
      "/portfolio/Archi_vis(6).webp"
    ]
  },
  {
    id: "roof-animation",
    title: "Roof Construction Animation",
    description: "Detailed construction sequence animation showing roof assembly and installation processes.",
    categories: ["architectural", "3d", "animation"],
    image: "/portfolio/roof_animation(1).webp",
    technologies: ["Blender", "Construction Visualization", "Technical Animation"],
    gallery: [
      "/portfolio/roof_animation(1).webp",
      "/portfolio/roof_animation(2).webp"
    ]
  },
  {
    id: "photovoltaic-farm",
    title: "Photovoltaic Farm Renders",
    description: "Solar energy installation visualization for renewable energy projects.",
    categories: ["architectural", "3d"],
    image: "/portfolio/Foto_woltaics_farm_renders.webp",
    technologies: ["Blender", "Renewable Energy", "Environmental Visualization"]
  },

  // Game Development
  {
    id: "kong-game",
    title: "Kong Game Animations",
    description: "Character animations and game concept development for a retro-style platformer game.",
    categories: ["games", "3d", "animation"],
    image: "/portfolio/Kong_game_animations.webp",
    technologies: ["Blender", "Game Development", "Character Animation"]
  },
  {
    id: "board-game",
    title: "Board Game Design",
    description: "3D visualization and design elements for a strategic board game project.",
    categories: ["games", "3d"],
    image: "/portfolio/Board_game1.webp",
    technologies: ["Blender", "Game Design", "3D Modeling"],
    gallery: [
      "/portfolio/Board_game1.webp",
      "/portfolio/Board_game2.webp",
      "/portfolio/Board_game3.webp"
    ]
  },
  {
    id: "game-concepts",
    title: "Game Concept Animations",
    description: "Animated prototypes and concept visualizations for various game projects.",
    categories: ["games", "3d", "animation"],
    image: "/portfolio/Game_concept_animations.webp",
    technologies: ["Blender", "Game Concepts", "Prototype Animation"]
  },

  // Master Studies Projects
  {
    id: "master-studies",
    title: "Master Studies Projects",
    description: "Collection of advanced 3D projects completed during Master's degree in Media Arts & Visual Education.",
    categories: ["education", "3d"],
    image: "/Master_studies_cover.webp",
    technologies: ["Blender", "Academic Research", "Advanced 3D Techniques"],
    gallery: ["/Master_studies_cover.webp"]
  },

  // Highlighted Projects
  {
    id: "highlighted-projects",
    title: "Highlighted Projects",
    description: "Showcase of exceptional work including award-winning animations and innovative visualizations.",
    categories: ["3d", "animation"],
    image: "/Highlighted_projects_cover.webp",
    technologies: ["Blender", "Advanced Animation", "Creative Visualization"],
    gallery: [
      "/Highlighted_projects_cover.webp",
      "/portfolio/Character_animation.webp",
      "/portfolio/Snail_animations.webp",
      "/portfolio/marble_symulations_animation.webp"
    ]
  },

  // Additional Projects
  {
    id: "apparatus-modeling",
    title: "Scientific Apparatus Modeling",
    description: "Detailed 3D models of scientific equipment for educational and research purposes.",
    categories: ["education", "3d"],
    image: "/portfolio/Model_aparatu (1).webp",
    technologies: ["Blender", "Scientific Modeling", "Technical Accuracy"],
    gallery: [
      "/portfolio/Model_aparatu (1).webp",
      "/portfolio/Model_aparatu (2).webp",
      "/portfolio/Model_aparatu (3).webp"
    ]
  },
  {
    id: "post-office",
    title: "Post Office Animation",
    description: "Service workflow animation for postal service operations and customer interactions.",
    categories: ["3d", "animation"],
    image: "/portfolio/Post_office_animations.webp",
    technologies: ["Blender", "Service Animation", "Workflow Visualization"]
  },
  {
    id: "shoe-production",
    title: "Shoe Production Animation",
    description: "Manufacturing process animation showing shoe construction and assembly workflows.",
    categories: ["3d", "animation"],
    image: "/portfolio/Schoe_sawing_animations.webp",
    technologies: ["Blender", "Manufacturing", "Process Animation"],
    gallery: [
      "/portfolio/Schoe_sawing_animations.webp",
      "/portfolio/shoe_animation.webp"
    ]
  },
  {
    id: "pepco-basket",
    title: "Pepco Basket Renders",
    description: "Product visualization and commercial renders for retail basket designs.",
    categories: ["3d", "animation"],
    image: "/portfolio/Pepco_bascet_renders.webp",
    technologies: ["Blender", "Product Visualization", "Commercial Rendering"]
  },
  {
    id: "transformer-animation",
    title: "Transformer Animation",
    description: "Technical animation of electrical transformer components and operation principles.",
    categories: ["education", "3d"],
    image: "/portfolio/transformator_animation.webp",
    technologies: ["Blender", "Technical Animation", "Engineering Visualization"]
  },
  {
    id: "waiter-animation",
    title: "Waiter Service Animation",
    description: "Character animation showcasing restaurant service workflows and customer interactions.",
    categories: ["3d", "animation"],
    image: "/portfolio/Waiter_animation.webp",
    technologies: ["Blender", "Character Animation", "Service Industry"]
  },
  {
    id: "comic-characters",
    title: "Comic Characters",
    description: "Stylized character designs and animations for comic book and graphic novel projects.",
    categories: ["3d", "animation"],
    image: "/portfolio/comic_characters.webp",
    technologies: ["Blender", "Character Design", "Stylized Animation"]
  },
  {
    id: "pig-meat-animation",
    title: "Pig Meat Processing Animation",
    description: "Educational animation showing meat processing workflows for food industry training.",
    categories: ["education", "3d"],
    image: "/portfolio/Pig_meat_animation.webp",
    technologies: ["Blender", "Food Industry", "Process Animation"]
  },
  {
    id: "printing-machine",
    title: "Offset Printing Machine",
    description: "Technical animation of industrial printing equipment and paper processing workflows.",
    categories: ["3d", "animation"],
    image: "/portfolio/ofset_printing_machine.webp",
    technologies: ["Blender", "Industrial Animation", "Technical Visualization"]
  }
]

export const featuredProjects = projects.filter(project => project.featured)

export default projects