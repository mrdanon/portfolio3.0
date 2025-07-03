import { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    id: "american-elite-school",
    company: "American Elite School",
    position: "Teacher of Mathematics, Physics, and Computer Science",
    period: "2025 - Present",
    current: true,
    description: [
      "Teaching mathematics, physics, and computer science to high school students",
      "Developing interactive educational content using 3D animations and simulations",
      "Integrating AI tools and modern technology into curriculum",
      "Creating engaging lesson plans with visual and interactive elements"
    ],
    technologies: [
      "Educational Technology",
      "Blender",
      "3D Animation",
      "AI Integration",
      "Curriculum Development"
    ],
    logo: "/icons/designer_icon.png"
  },
  {
    id: "green-energy",
    company: "GreenEnergy",
    position: "AI Specialist & Graphic Designer",
    period: "2024 - 2025",
    current: false,
    description: [
      "Developed AI-powered solutions for renewable energy visualization",
      "Created technical documentation and promotional materials",
      "Implemented automated design workflows using AI tools",
      "Collaborated with engineering teams on project presentations",
      "Designed infographics and technical illustrations for solar energy projects"
    ],
    technologies: [
      "AI Integration",
      "Blender",
      "Photoshop",
      "Illustrator",
      "Technical Documentation",
      "Python",
      "Data Visualization"
    ],
    logo: "/icons/ai_brain.png"
  },
  {
    id: "eduexpert",
    company: "EduExpert",
    position: "Graphic Designer & 3D Animator",
    period: "2020 - 2024",
    current: false,
    description: [
      "Created educational animations for the Polish Ministry of Education",
      "Developed 3D models and animations for science curriculum",
      "Designed interactive learning materials and visual aids",
      "Collaborated with educational specialists on content development",
      "Managed multiple concurrent animation projects with tight deadlines"
    ],
    technologies: [
      "Blender",
      "After Effects",
      "Premiere Pro",
      "3D Animation",
      "Educational Content",
      "Motion Graphics",
      "Geometry Nodes"
    ],
    logo: "/icons/designer_icon.png"
  },
  {
    id: "freelance",
    company: "Freelance",
    position: "3D Artist & Developer",
    period: "2018 - 2020",
    current: false,
    description: [
      "Developed custom Blender addons (Oh My Gear, Oh My Graph, Oh My Lights, Oh My Time)",
      "Created architectural visualizations and product animations",
      "Built interactive 3D experiences and prototypes",
      "Collaborated with clients on diverse creative projects",
      "Established expertise in Python scripting for Blender automation"
    ],
    technologies: [
      "Blender",
      "Python",
      "Addon Development",
      "Architectural Visualization",
      "Product Animation",
      "Unreal Engine",
      "3D Modeling"
    ],
    logo: "/icons/blender.png"
  }
]

export const education = [
  {
    degree: "Master's Degree in Media Arts & Visual Education",
    institution: "University of Education",
    period: "2018 - 2023",
    description: "Specialized in digital media, 3D animation, and educational technology. Thesis focused on integrating 3D visualization in science education."
  },
  {
    degree: "High School Diploma",
    institution: "Technical High School",
    period: "2013 - 2016",
    description: "Focus on mathematics, physics, and computer science. Early interest in 3D graphics and programming."
  }
]

export const achievements = [
  {
    title: "Award-winning Project: Microcosmos Animation",
    description: "Educational animation showcasing cellular processes, recognized by the Polish Ministry of Education",
    year: "2023"
  },
  {
    title: "Award-winning Project: Silver Blood Animation",
    description: "Scientific visualization of blood cell interactions, used in medical education",
    year: "2022"
  },
  {
    title: "Custom Blender Addon Developer",
    description: "Created multiple successful Blender addons used by 3D artists worldwide",
    year: "2019-2024"
  },
  {
    title: "AI Avatar Integration Specialist",
    description: "Pioneer in integrating ConvAI with Unreal Engine for interactive character experiences",
    year: "2024"
  }
]