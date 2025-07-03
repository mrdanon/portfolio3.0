# Portfolio 3.1 - Implementation Guide

## Step-by-Step Implementation

### Step 1: Project Initialization

#### 1.1 Create Next.js Project
```bash
npx create-next-app@latest portfolio3.1 --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd portfolio3.1
```

#### 1.2 Install Dependencies
```bash
# Core dependencies
npm install @react-three/fiber @react-three/drei three
npm install zustand
npm install lucide-react
npm install @mui/material @emotion/react @emotion/styled
npm install framer-motion
npm install @vercel/analytics

# UI and styling
npm install daisyui
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-tooltip
npm install class-variance-authority clsx tailwind-merge

# Development dependencies
npm install -D @types/three
```

#### 1.3 Configure shadcn/ui
```bash
npx shadcn@latest init
```

### Step 2: Project Structure Setup

#### 2.1 Create Directory Structure
```bash
mkdir -p src/components/{ui,3d,layout,sections}
mkdir -p src/lib
mkdir -p src/data
mkdir -p src/types
mkdir -p public/{images/{projects,covers},models,icons}
```

#### 2.2 Configure Tailwind CSS
```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
}
```

### Step 3: Type Definitions

#### 3.1 Create TypeScript Types
```typescript
// src/types/index.ts
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
```

### Step 4: State Management

#### 4.1 Zustand Store Setup
```typescript
// src/lib/store.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface PortfolioStore {
  theme: 'light' | 'dark'
  currentSection: string
  isMenuOpen: boolean
  setTheme: (theme: 'light' | 'dark') => void
  setCurrentSection: (section: string) => void
  toggleMenu: () => void
  closeMenu: () => void
}

export const usePortfolioStore = create<PortfolioStore>()(
  persist(
    (set) => ({
      theme: 'dark',
      currentSection: 'home',
      isMenuOpen: false,
      setTheme: (theme) => set({ theme }),
      setCurrentSection: (section) => set({ currentSection: section }),
      toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
      closeMenu: () => set({ isMenuOpen: false }),
    }),
    {
      name: 'portfolio-storage',
    }
  )
)
```

### Step 5: Data Files

#### 5.1 Personal Information
```typescript
// src/data/personal.ts
import { Personal } from '@/types'

export const personal: Personal = {
  name: "Piotr Dankowiakowski",
  title: "3D Artist, AI Specialist & Educator",
  email: "piotr12451@gmail.com",
  phone: "(+48) 505 286 064",
  location: "Warsaw, Poland",
  website: "piotrdanon.vercel.app",
  about: "Experienced 3D artist, AI specialist, and educator with a strong foundation in Blender, Unreal Engine, and programming. Skilled in developing custom Blender addons, creating educational and architectural animations, integrating AI-driven solutions, and delivering interactive prototypes.",
  social: {
    youtube: "https://www.youtube.com/@dr.blender",
    instagram: "https://www.instagram.com/doctor.blender/",
    artstation: "https://www.artstation.com/drdanon",
    linkedin: "#",
    github: "#"
  }
}
```

#### 5.2 Projects Data
```typescript
// src/data/projects.ts
import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'showreel',
    title: 'Showreel',
    description: 'Little showreel with some of my projects.',
    category: '3d',
    image: '/images/covers/Showreel_cover.webp',
    technologies: ['Blender', 'After Effects', 'Premiere Pro'],
    video: 'https://www.youtube.com/embed/x8epLpXvGd4',
    featured: true
  },
  {
    id: 'blender-addons',
    title: 'Blender Addons',
    description: 'Collection of productivity-enhancing tools for 3D artists',
    category: 'addons',
    image: '/images/covers/Blender_addons_cover.webp',
    technologies: ['Python', 'Blender API', 'Geometry Nodes'],
    gallery: [
      '/images/OhMyGear_addon.webp',
      '/images/OhMyGraph_addon.webp',
      '/images/OhMyLight_addon.webp',
      '/images/OhMyTime_addon.webp'
    ],
    featured: true
  },
  {
    id: 'educational-animations',
    title: 'Educational Animations',
    description: 'For Polish Ministry of National Education',
    category: 'education',
    image: '/images/covers/Educational_animations_cover.webp',
    technologies: ['Blender', 'After Effects', 'DaVinci Resolve'],
    featured: true
  },
  {
    id: 'ai-avatars',
    title: 'AI Avatars',
    description: 'Unreal Engine with ConvAI integration',
    category: 'ai',
    image: '/images/covers/Games_and_ai_cover.webp',
    technologies: ['Unreal Engine', 'ConvAI', 'Python'],
    featured: true
  },
  {
    id: 'architectural-viz',
    title: 'Architectural Visualizations',
    description: 'High-quality renders and animations',
    category: 'architectural',
    image: '/images/covers/Archi_vis_cover.webp',
    technologies: ['Blender', 'Unreal Engine', 'Substance Painter'],
    featured: true
  },
  {
    id: 'award-winning',
    title: 'Award-Winning Projects',
    description: 'Recognized creative works',
    category: '3d',
    image: '/images/covers/Highlighted_projects_cover.webp',
    technologies: ['Blender', 'After Effects', 'Python'],
    featured: true
  },
  {
    id: 'game-development',
    title: 'Game Development',
    description: 'Prototypes and commercial projects',
    category: 'games',
    image: '/images/covers/Games_and_ai_cover.webp',
    technologies: ['Unreal Engine', 'Godot', 'Blender'],
    featured: false
  }
]
```

#### 5.3 Skills Data
```typescript
// src/data/skills.ts
import { Skill } from '@/types'

export const skills: Skill[] = [
  // 3D & Graphics
  { name: 'Blender', icon: '/icons/blender.png', category: '3d', proficiency: 95, color: '#f5792a' },
  { name: 'Unreal Engine', icon: '/icons/unreal-icon.png', category: '3d', proficiency: 85, color: '#000000' },
  { name: 'Substance Painter', icon: '/icons/substance-painter.png', category: '3d', proficiency: 80, color: '#ff6b35' },
  { name: 'Godot', icon: '/icons/Godot.png', category: '3d', proficiency: 75, color: '#478cbf' },
  
  // Animation & VFX
  { name: 'Geometry Nodes', icon: '/icons/geometry-nodes.png', category: '3d', proficiency: 90, color: '#f5792a' },
  { name: 'Rigging', icon: '/icons/rigging.png', category: '3d', proficiency: 85, color: '#f5792a' },
  { name: 'After Effects', icon: '/icons/after-effects.png', category: 'design', proficiency: 80, color: '#d291ff' },
  { name: 'Premiere Pro', icon: '/icons/premiere-pro.png', category: 'design', proficiency: 75, color: '#ea4335' },
  
  // Programming
  { name: 'Python', icon: '/icons/python.png', category: 'programming', proficiency: 85, color: '#3776ab' },
  { name: 'JavaScript', icon: '/icons/js.webp', category: 'programming', proficiency: 75, color: '#f7df1e' },
  { name: 'HTML/CSS', icon: '/icons/html-css.png', category: 'programming', proficiency: 80, color: '#e34f26' },
  
  // AI & ML
  { name: 'AI Integration', icon: '/icons/ai_brain.png', category: 'ai', proficiency: 85, color: '#ff6b6b' },
  { name: 'ConvAI', icon: '/icons/convai.png', category: 'ai', proficiency: 80, color: '#4ecdc4' },
  { name: 'ChatGPT API', icon: '/icons/chatgpt.png', category: 'ai', proficiency: 75, color: '#10a37f' },
  
  // Languages
  { name: 'Polish (Native)', icon: '/icons/poland.png', category: 'languages', proficiency: 100, color: '#dc143c' },
  { name: 'English (C1)', icon: '/icons/english.png', category: 'languages', proficiency: 90, color: '#1e3a8a' }
]
```

#### 5.4 Experience Data
```typescript
// src/data/experience.ts
import { Experience } from '@/types'

export const experience: Experience[] = [
  {
    id: 'american-elite',
    company: 'American Elite School (EXPERTUS.EDU.PL SPÓŁKA Zo.o)',
    position: 'Teacher of Mathematics, Physics, and Computer Science in English',
    period: 'February 16, 2025 - Present',
    description: [
      'Deliver MHM (Mathematical Habits of Mind) and Oxford International curricula in English',
      'Develop lesson plans, assessments, and interactive learning materials',
      'Track and report student progress, adapting instruction to diverse learning needs',
      'Supporting students in preparing for international examinations and university admissions'
    ],
    technologies: ['Mathematics', 'Physics', 'Computer Science', 'English Teaching'],
    current: true
  },
  {
    id: 'greenenergy',
    company: 'GreenEnergy Sp.Z.o.o',
    position: 'AI Specialist & Graphic Designer',
    period: 'May 2024 - February 28, 2025',
    description: [
      'Designed and implemented 3D AI avatars in Unreal Engine with ConvAI integration',
      'Managed animation pipelines, UI creation, lighting setups, and rendering workflows',
      'Produced high-quality architectural visualizations and construction sequence animations',
      'Created AI avatars, development in Unreal Engine, UI/UX designing',
      'Implemented AI functionality, served as key photographer, movie editor, managed workspaces'
    ],
    technologies: ['Unreal Engine', 'ConvAI', 'Python', 'Blender', 'After Effects']
  },
  {
    id: 'eduexpert',
    company: 'EduExpert Sp.Z.o.o',
    position: 'Graphic Designer & 3D Animator',
    period: 'November 2020 - March 2024',
    description: [
      'Created educational animations for the Polish Ministry of National Education',
      'Utilized Blender, After Effects, Premiere Pro, and DaVinci Resolve to produce engaging multimedia content',
      'Coordinated end-to-end production: modeling, texturing, rigging, animating, and final editing',
      'Developed animations for schools and textbooks covering various technical subjects'
    ],
    technologies: ['Blender', 'After Effects', 'Premiere Pro', 'DaVinci Resolve']
  },
  {
    id: 'freelance',
    company: 'Freelance 3D Artist & Developer',
    position: 'Self-employed',
    period: 'September 2018 - April 2020',
    description: [
      'Delivered client projects in 3D modeling, graphic design, and custom app development',
      'Built and maintained client relationships, managed invoices and project timelines',
      'Created custom Blender addons for procedural generation and workflow optimization',
      'Developed game concepts through Blender-animated prototypes',
      'Created architectural visualizations for conference rooms, halls, and other interiors'
    ],
    technologies: ['Blender', 'Python', 'JavaScript', 'Unreal Engine', 'Godot']
  }
]
```

### Step 6: Core Components

#### 6.1 Layout Components
```typescript
// src/components/layout/Header.tsx
'use client'

import { useState, useEffect } from 'react'
import { usePortfolioStore } from '@/lib/store'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const { theme, setTheme, isMenuOpen, toggleMenu, closeMenu } = usePortfolioStore()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-primary">Piotr D.</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground/80 hover:text-primary transition-colors"
                  onClick={closeMenu}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
```

#### 6.2 3D Components
```typescript
// src/components/3d/Scene.tsx
'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import { Suspense } from 'react'
import Gears from './Gears'
import Particles from './Particles'

export default function Scene() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 35 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <Gears />
          <Particles />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  )
}
```

```typescript
// src/components/3d/Gears.tsx
'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export default function Gears() {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials } = useGLTF('/models/gears.glb')

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.5
    }
  })

  return (
    <group ref={group} position={[0, 0, 0]}>
      <mesh
        geometry={nodes.gear1.geometry}
        material={materials.material}
        position={[0, 0, 0]}
      />
      <mesh
        geometry={nodes.gear2.geometry}
        material={materials.material}
        position={[1.5, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/gears.glb')
```

### Step 7: Section Components

#### 7.1 Hero Section
```typescript
// src/components/sections/HeroSection.tsx
'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ChevronDown, Download } from 'lucide-react'
import { personal } from '@/data/personal'

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0
        
        if (isVisible) {
          // Trigger animations or 3D effects
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {personal.name}
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-foreground/80">
            {personal.title}
          </h2>
          
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-foreground/70">
            Creating immersive digital experiences through cutting-edge 3D art, AI integration, and innovative education.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3">
              View Portfolio
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="h-8 w-8 text-foreground/50" />
      </motion.div>
    </section>
  )
}
```

### Step 8: Main Page Layout

#### 8.1 Root Layout
```typescript
// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ThemeProvider } from '@/components/layout/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Piotr Dankowiakowski - 3D Artist, AI Specialist & Educator',
  description: 'Experienced 3D artist, AI specialist, and educator with expertise in Blender, Unreal Engine, and programming. Creating immersive digital experiences and educational content.',
  keywords: ['3D Artist', 'AI Specialist', 'Blender', 'Unreal Engine', 'Python', 'Education'],
  authors: [{ name: 'Piotr Dankowiakowski' }],
  openGraph: {
    title: 'Piotr Dankowiakowski - Portfolio',
    description: '3D Artist, AI Specialist & Educator',
    url: 'https://piotrdanon.vercel.app',
    siteName: 'Piotr Dankowiakowski Portfolio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Piotr Dankowiakowski Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Piotr Dankowiakowski - Portfolio',
    description: '3D Artist, AI Specialist & Educator',
    images: ['/images/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
```

#### 8.2 Main Page
```typescript
// src/app/page.tsx
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import PortfolioSection from '@/components/sections/PortfolioSection'
import ContactSection from '@/components/sections/ContactSection'
import Scene from '@/components/3d/Scene'

export default function Home() {
  return (
    <>
      <Scene />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <PortfolioSection />
      <ContactSection />
    </>
  )
}
```

### Step 9: Content Migration

#### 9.1 Asset Migration Script
```bash
#!/bin/bash
# migrate-assets.sh

# Create directories
mkdir -p public/images/{projects,covers}
mkdir -p public/icons
mkdir -p public/models

# Copy project images
cp static/portfolio/* public/images/projects/
cp static/*.webp public/images/covers/

# Copy icons
cp static/icons/* public/icons/

# Copy 3D models
cp static/models/* public/models/

echo "Assets migrated successfully!"
```

### Step 10: Performance Optimization

#### 10.1 Next.js Configuration
```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: 'asset/resource',
    })
    return config
  },
}

module.exports = nextConfig
```

This implementation guide provides a comprehensive roadmap for building your modern React portfolio. Each step includes specific code examples and file structures to ensure a smooth development process. 