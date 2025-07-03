# Portfolio 3.1 - Product Requirements Document (PRD)

## Project Overview
Modern React portfolio for Piotr Dankowiakowski - 3D Artist, AI Specialist & Educator, built with Next.js, Three.js, and modern web technologies.

## Target Audience
- Potential employers in 3D animation, AI, and education sectors
- Clients seeking 3D artists and developers
- Educational institutions
- Tech companies looking for AI specialists

## Core Requirements

### ✅ Technology Stack
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS + DaisyUI + shadcn/ui
- **3D Graphics**: React Three Fiber + Drei
- **State Management**: Zustand
- **Icons**: Lucide React
- **UI Components**: MUI (Material-UI) for advanced components
- **Deployment**: Vercel

### ✅ Design Requirements
- Modern, centered, responsive design
- Fast loading with optimized assets
- Dark/Light theme support
- Smooth animations and transitions
- Mobile-first approach

### ✅ Content Requirements
- Portfolio showcase with project images
- Skills and expertise section
- Professional experience timeline
- Contact information and social links
- Easy content management system

## Implementation Checklist

### Phase 1: Project Setup & Foundation
- [x] **Initialize Next.js project**
  - [x] Create new Next.js 14+ project with TypeScript
  - [x] Configure Tailwind CSS and DaisyUI
  - [X] Set up shadcn/ui components
  - [X] Install and configure React Three Fiber + Drei
  - [X] Set up Zustand for state management
  - [X] Configure Lucide React icons
  - [X] Install MUI components

- [X] **Project Structure Setup**
  ```
  portfolio3.1/
  ├── src/
  │   ├── app/
  │   │   ├── layout.tsx
  │   │   ├── page.tsx
  │   │   └── globals.css
  │   ├── components/
  │   │   ├── ui/           # shadcn/ui components
  │   │   ├── 3d/           # Three.js components
  │   │   ├── layout/       # Layout components
  │   │   └── sections/     # Page sections
  │   ├── lib/
  │   │   ├── store.ts      # Zustand store
  │   │   └── utils.ts      # Utility functions
  │   ├── data/
  │   │   ├── projects.ts   # Project data
  │   │   ├── skills.ts     # Skills data
  │   │   └── experience.ts # Experience data
  │   └── types/
  │       └── index.ts      # TypeScript types
  ├── public/
  │   ├── images/           # Optimized images
  │   ├── models/           # 3D models
  │   └── icons/            # Skill icons
  └── components.json       # shadcn/ui config
  ```

### Phase 2: Core Components Development
- [ ] **Layout Components**
  - [ ] `Header.tsx` - Navigation with smooth scrolling
  - [ ] `Footer.tsx` - Social links and contact info
  - [ ] `ThemeProvider.tsx` - Dark/Light theme toggle
  - [ ] `LoadingSpinner.tsx` - Loading states

- [ ] **3D Components**
  - [ ] `Scene.tsx` - Main Three.js scene
  - [ ] `Gears.tsx` - Animated gears model
  - [ ] `Particles.tsx` - Particle system
  - [ ] `ScrollAnimation.tsx` - Scroll-based animations

- [ ] **Section Components**
  - [ ] `HeroSection.tsx` - Landing section with 3D elements
  - [ ] `AboutSection.tsx` - Professional summary
  - [ ] `SkillsSection.tsx` - Skills grid with icons
  - [ ] `ExperienceSection.tsx` - Timeline of work experience
  - [ ] `PortfolioSection.tsx` - Project showcase
  - [ ] `ContactSection.tsx` - Contact form and info

### Phase 3: Data Structure & Content
- [ ] **Data Models**
  ```typescript
  // types/index.ts
  interface Project {
    id: string;
    title: string;
    description: string;
    category: '3d' | 'ai' | 'education' | 'addons' | 'games';
    image: string;
    technologies: string[];
    link?: string;
    video?: string;
  }

  interface Skill {
    name: string;
    icon: string;
    category: '3d' | 'programming' | 'ai' | 'design';
    proficiency: number; // 0-100
  }

  interface Experience {
    company: string;
    position: string;
    period: string;
    description: string[];
    technologies: string[];
  }
  ```

- [ ] **Content Data Files**
  - [ ] `data/projects.ts` - All portfolio projects
  - [ ] `data/skills.ts` - Skills and proficiency levels
  - [ ] `data/experience.ts` - Work experience timeline
  - [ ] `data/personal.ts` - Personal information and contact

### Phase 4: Key Features Implementation
- [ ] **Hero Section**
  - [ ] Animated 3D scene with gears
  - [ ] Particle system background
  - [ ] Smooth scroll animations
  - [ ] Professional introduction

- [ ] **Portfolio Showcase**
  - [ ] Grid layout with project cards
  - [ ] Modal popups for project details
  - [ ] Category filtering
  - [ ] Image optimization with Next.js Image

- [ ] **Skills Section**
  - [ ] Interactive skill icons grid
  - [ ] Proficiency bars with animations
  - [ ] Category-based organization
  - [ ] Hover effects and tooltips

- [ ] **Experience Timeline**
  - [ ] Vertical timeline design
  - [ ] Company logos and details
  - [ ] Responsive layout
  - [ ] Smooth scroll animations

### Phase 5: Advanced Features
- [ ] **3D Interactions**
  - [ ] Mouse-based camera controls
  - [ ] Scroll-triggered animations
  - [ ] Model loading and optimization
  - [ ] Performance optimization

- [ ] **Performance Optimization**
  - [ ] Image optimization with WebP format
  - [ ] Lazy loading for 3D models
  - [ ] Code splitting and dynamic imports
  - [ ] Bundle size optimization

- [ ] **Accessibility**
  - [ ] ARIA labels and roles
  - [ ] Keyboard navigation
  - [ ] Screen reader compatibility
  - [ ] Color contrast compliance

### Phase 6: Content Migration & Enhancement
- [ ] **Portfolio Projects**
  - [ ] Showreel video integration
  - [ ] Blender addons showcase
  - [ ] Educational animations gallery
  - [ ] AI avatar projects
  - [ ] Architectural visualizations
  - [ ] Award-winning projects

- [ ] **Professional Information**
  - [ ] Updated work experience from CV
  - [ ] Skills proficiency levels
  - [ ] Education background
  - [ ] Contact information
  - [ ] Social media links

### Phase 7: Testing & Deployment
- [ ] **Testing**
  - [ ] Responsive design testing
  - [ ] Performance testing
  - [ ] Cross-browser compatibility
  - [ ] Mobile device testing

- [ ] **Deployment**
  - [ ] Vercel deployment setup
  - [ ] Environment variables configuration
  - [ ] Analytics integration
  - [ ] SEO optimization

## Content Migration Guide

### From Current Portfolio
1. **Project Images**: Move from `static/portfolio/` to `public/images/projects/`
2. **Skill Icons**: Move from `static/icons/` to `public/icons/`
3. **3D Models**: Move from `static/models/` to `public/models/`
4. **Cover Images**: Move from `static/` to `public/images/covers/`

### From CV (depsiek_cv2.html)
1. **Personal Information**:
   - Name: Piotr Dankowiakowski
   - Title: 3D Artist, AI Specialist & Educator
   - Email: piotr12451@gmail.com
   - Phone: (+48) 505 286 064
   - Location: Warsaw, Poland
   - Website: piotrdanon.vercel.app

2. **Work Experience**:
   - American Elite School (2025-Present): Teacher of Mathematics, Physics, and Computer Science
   - GreenEnergy (2024-2025): AI Specialist & Graphic Designer
   - EduExpert (2020-2024): Graphic Designer & 3D Animator
   - Freelance (2018-2020): 3D Artist & Developer

3. **Education**:
   - Master's Degree in Media Arts & Visual Education (2018-2023)
   - High School Diploma (2013-2016)

4. **Skills**:
   - 3D & Graphics: Blender (95%), Unreal Engine (85%), Substance Painter (80%)
   - Animation & VFX: Geometry Nodes (90%), Rigging (85%), After Effects (80%)
   - Programming: Python (85%), JavaScript (75%), HTML/CSS (80%)
   - AI & ML: AI Integration (85%), ConvAI (80%), ChatGPT API (75%)
   - Languages: Polish (Native), English (C1)

5. **Portfolio Highlights**:
   - Custom Blender Addons (Oh My Gear, Oh My Graph, Oh My Lights, Oh My Time)
   - Educational Animations for Polish Ministry of Education
   - AI Avatars with Unreal Engine and ConvAI
   - Architectural Visualizations
   - Award-winning Projects (Microcosmos, Silver Blood)
   - Game Development Prototypes

## File Structure Details

### Key Files to Create/Modify

1. **`src/app/layout.tsx`**
   - Root layout with theme provider
   - Font configuration
   - Meta tags and SEO

2. **`src/app/page.tsx`**
   - Main page component
   - Section imports and layout

3. **`src/components/3d/Scene.tsx`**
   - Main Three.js scene setup
   - Camera and renderer configuration
   - Animation loop

4. **`src/lib/store.ts`**
   - Zustand store for theme and UI state
   - Portfolio data management

5. **`src/data/projects.ts`**
   - All project data with images and descriptions
   - Category-based organization

6. **`tailwind.config.js`**
   - Custom color scheme
   - DaisyUI configuration
   - Animation utilities

7. **`next.config.js`**
   - Image optimization settings
   - 3D model handling
   - Performance configurations

## Technology Integration Notes

### React Three Fiber Setup
```typescript
// src/components/3d/Scene.tsx
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 35 }}
      gl={{ alpha: true }}
    >
      <Gears />
      <Particles />
      <OrbitControls enableZoom={false} />
      <Preload all />
    </Canvas>
  )
}
```

### Zustand Store Example
```typescript
// src/lib/store.ts
import { create } from 'zustand'

interface PortfolioStore {
  theme: 'light' | 'dark'
  currentSection: string
  setTheme: (theme: 'light' | 'dark') => void
  setCurrentSection: (section: string) => void
}

export const usePortfolioStore = create<PortfolioStore>((set) => ({
  theme: 'dark',
  currentSection: 'home',
  setTheme: (theme) => set({ theme }),
  setCurrentSection: (section) => set({ currentSection: section })
}))
```

### shadcn/ui Component Usage
```typescript
// src/components/ui/Button.tsx
import { Button } from "@/components/ui/button"

export function ContactButton() {
  return (
    <Button variant="default" size="lg">
      Contact Me
    </Button>
  )
}
```

## Performance Optimization Checklist

- [ ] Use Next.js Image component for all images
- [ ] Implement lazy loading for 3D models
- [ ] Optimize bundle size with dynamic imports
- [ ] Use WebP format for all images
- [ ] Implement proper caching strategies
- [ ] Minimize JavaScript bundle size
- [ ] Use CSS-in-JS sparingly
- [ ] Implement proper loading states

## SEO & Analytics

- [ ] Meta tags for all pages
- [ ] Open Graph images
- [ ] Structured data markup
- [ ] Vercel Analytics integration
- [ ] Google Analytics setup
- [ ] Sitemap generation
- [ ] Robots.txt configuration

## Maintenance & Updates

- [ ] Easy content management system
- [ ] Modular component structure
- [ ] TypeScript for type safety
- [ ] Comprehensive documentation
- [ ] Version control best practices
- [ ] Regular dependency updates

This PRD provides a comprehensive roadmap for creating your modern React portfolio. Each phase builds upon the previous one, ensuring a structured and efficient development process. 