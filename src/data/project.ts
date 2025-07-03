import { Project } from '@/types'

export const projects: Project[] = [
  // Featured Projects
  {
    id: "showreel",
    title: "Professional Showreel",
    description: "A comprehensive showcase of my 3D animation, architectural visualization, and educational content work spanning multiple years.",
    category: "3d",
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
    category: "ai",
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
    category: "education",
    image: "/portfolio/Micor_cosmos_animation.webp",
    technologies: ["Blender", "Geometry Nodes", "Scientific Visualization"],
    featured: true,
    gallery: ["/portfolio/Micor_cosmos_animation.webp"]
  },
  {
    id: "silver-blood",
    title: "Silver Blood Animation",
    description: "Award-winning scientific visualization of blood cell interactions used in medical education.",
    category: "education",
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
    category: "addons",
    image: "/OhMyGear_addon.webp",
    technologies: ["Python", "Blender API", "Procedural Generation"],
    gallery: ["/OhMyGear_addon.webp", "/portfolio/OhMyGears_addon.webp"]
  },
  {
    id: "oh-my-graph",
    title: "Oh My Graph Addon",
    description: "Blender addon for creating and managing complex node-based workflows and data visualization.",
    category: "addons",
    image: "/OhMyGraph_addon.webp",
    technologies: ["Python", "Blender API", "Data Visualization"],
    gallery: ["/OhMyGraph_addon.webp", "/portfolio/OhMyGraph_addon.webp"]
  },
  {
    id: "oh-my-lights",
    title: "Oh My Lights Addon",
    description: "Professional lighting setup and management tool for Blender artists.",
    category: "addons",
    image: "/OhMyLight_addon.webp",
    technologies: ["Python", "Blender API", "Lighting Systems"],
    gallery: ["/OhMyLight_addon.webp", "/portfolio/OhMyLights_animations.webp"]
  },
  {
    id: "oh-my-time",
    title: "Oh My Time Addon",
    description: "Time management and animation timeline tools for efficient Blender workflows.",
    category: "addons",
    image: "/OhMyTime_addon.webp",
    technologies: ["Python", "Blender API", "Animation Tools"]
  },

  // Educational Animations
  {
    id: "educational-animations",
    title: "Educational Animations",
    description: "Collection of educational animations created for the Polish Ministry of Education, covering various scientific topics.",
    category: "education",
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
    category: "3d",
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
    category: "3d",
    image: "/portfolio/POS_system_animations.webp",
    technologies: ["Blender", "UI Animation", "Commercial Visualization"]
  },

  // Architectural Visualizations
  {
    id: "architectural-visualizations",
    title: "Architectural Visualizations",
    description: "High-quality architectural renderings and construction sequence animations for real estate and development projects.",
    category: "architectural",
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
    category: "architectural",
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
    category: "architectural",
    image: "/portfolio/Foto_woltaics_farm_renders.webp",
    technologies: ["Blender", "Renewable Energy", "Environmental Visualization"]
  },

  // Game Development
  {
    id: "kong-game",
    title: "Kong Game Animations",
    description: "Character animations and game concept development for a retro-style platformer game.",
    category: "games",
    image: "/portfolio/Kong_game_animations.webp",
    technologies: ["Blender", "Game Development", "Character Animation"]
  },
  {
    id: "board-game",
    title: "Board Game Design",
    description: "3D visualization and design elements for a strategic board game project.",
    category: "games",
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
    category: "games",
    image: "/portfolio/Game_concept_animations.webp",
    technologies: ["Blender", "Game Concepts", "Prototype Animation"]
  },

  // Master Studies Projects
  {
    id: "master-studies",
    title: "Master Studies Projects",
    description: "Collection of advanced 3D projects completed during Master's degree in Media Arts & Visual Education.",
    category: "education",
    image: "/Master_studies_cover.webp",
    technologies: ["Blender", "Academic Research", "Advanced 3D Techniques"],
    gallery: [
      "/Master_studies_cover.webp",
      "/portfolio/3D_tracking_vfx.webp",
      "/portfolio/Render_of_eclipse.webp"
    ]
  },

  // Highlighted Projects
  {
    id: "highlighted-projects",
    title: "Highlighted Projects",
    description: "Showcase of exceptional work including award-winning animations and innovative visualizations.",
    category: "3d",
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
    category: "education",
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
    category: "3d",
    image: "/portfolio/Post_office_animations.webp",
    technologies: ["Blender", "Service Animation", "Workflow Visualization"]
  },
  {
    id: "shoe-production",
    title: "Shoe Production Animation",
    description: "Manufacturing process animation showing shoe construction and assembly workflows.",
    category: "3d",
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
    category: "3d",
    image: "/portfolio/Pepco_bascet_renders.webp",
    technologies: ["Blender", "Product Visualization", "Commercial Rendering"]
  },
  {
    id: "transformer-animation",
    title: "Transformer Animation",
    description: "Technical animation of electrical transformer components and operation principles.",
    category: "education",
    image: "/portfolio/transformator_animation.webp",
    technologies: ["Blender", "Technical Animation", "Engineering Visualization"]
  },
  {
    id: "waiter-animation",
    title: "Waiter Service Animation",
    description: "Character animation showcasing restaurant service workflows and customer interactions.",
    category: "3d",
    image: "/portfolio/Waiter_animation.webp",
    technologies: ["Blender", "Character Animation", "Service Industry"]
  },
  {
    id: "comic-characters",
    title: "Comic Characters",
    description: "Stylized character designs and animations for comic book and graphic novel projects.",
    category: "3d",
    image: "/portfolio/comic_characters.webp",
    technologies: ["Blender", "Character Design", "Stylized Animation"]
  },
  {
    id: "pig-meat-animation",
    title: "Pig Meat Processing Animation",
    description: "Educational animation showing meat processing workflows for food industry training.",
    category: "education",
    image: "/portfolio/Pig_meat_animation.webp",
    technologies: ["Blender", "Food Industry", "Process Animation"]
  },
  {
    id: "printing-machine",
    title: "Offset Printing Machine",
    description: "Technical animation of industrial printing equipment and paper processing workflows.",
    category: "3d",
    image: "/portfolio/ofset_printing_machine.webp",
    technologies: ["Blender", "Industrial Animation", "Technical Visualization"]
  }
]

export const projectCategories = [
  { id: '3d', name: '3D & Animation', color: '#4F46E5' },
  { id: 'ai', name: 'AI Projects', color: '#DC2626' },
  { id: 'education', name: 'Educational', color: '#059669' },
  { id: 'addons', name: 'Blender Addons', color: '#EA580C' },
  { id: 'games', name: 'Game Development', color: '#7C3AED' },
  { id: 'architectural', name: 'Architectural', color: '#0891B2' }
]

export const featuredProjects = projects.filter(project => project.featured)