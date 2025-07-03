'use client';

import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { usePortfolioStore } from '@/lib/store';
import * as THREE from 'three';

interface ScrollAnimationProps {
  children: React.ReactNode;
  animationIntensity?: number;
  rotationSpeed?: number;
  scaleRange?: [number, number];
  positionRange?: [number, number];
}

const ScrollAnimation = ({ 
  children, 
  animationIntensity = 1,
  rotationSpeed = 0.5,
  scaleRange = [0.8, 1.2],
  positionRange = [-0.5, 0.5]
}: ScrollAnimationProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const [scrollY, setScrollY] = useState(0);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollProgress = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setScrollY(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Apply scroll-based animations
  useFrame((state) => {
    if (!groupRef.current) return;

    const time = state.clock.elapsedTime;
    const scrollProgress = scrollY * animationIntensity;

    // Rotation based on scroll
    groupRef.current.rotation.x = scrollProgress * rotationSpeed;
    groupRef.current.rotation.y = time * 0.1 + scrollProgress * rotationSpeed * 0.5;

    // Scale based on scroll
    const scale = THREE.MathUtils.lerp(scaleRange[0], scaleRange[1], 
      (Math.sin(scrollProgress * Math.PI * 2) + 1) / 2
    );
    groupRef.current.scale.setScalar(scale);

    // Position based on scroll
    const positionX = Math.sin(scrollProgress * Math.PI * 4) * positionRange[1];
    const positionY = Math.cos(scrollProgress * Math.PI * 3) * positionRange[1];
    
    groupRef.current.position.x = positionX;
    groupRef.current.position.y = positionY;
  });

  return (
    <group ref={groupRef}>
      {children}
    </group>
  );
};

// Specific scroll animation presets
export const HeroScrollAnimation = ({ children }: { children: React.ReactNode }) => (
  <ScrollAnimation
    animationIntensity={2}
    rotationSpeed={0.3}
    scaleRange={[1, 1.5]}
    positionRange={[-0.2, 0.2]}
  >
    {children}
  </ScrollAnimation>
);

export const SectionScrollAnimation = ({ 
  children, 
  sectionId 
}: { 
  children: React.ReactNode;
  sectionId: string;
}) => {
  const { currentSection } = usePortfolioStore();
  const isActive = currentSection === sectionId;

  return (
    <ScrollAnimation
      animationIntensity={isActive ? 1.5 : 0.5}
      rotationSpeed={0.2}
      scaleRange={isActive ? [0.9, 1.1] : [0.8, 1.0]}
      positionRange={[-0.1, 0.1]}
    >
      {children}
    </ScrollAnimation>
  );
};

// Parallax effect component
export const ParallaxGroup = ({ 
  children, 
  speed = 0.5 
}: { 
  children: React.ReactNode;
  speed?: number;
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.y = scrollY * speed * 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      {children}
    </group>
  );
};

// Mouse parallax effect
export const MouseParallax = ({ 
  children, 
  intensity = 0.1 
}: { 
  children: React.ReactNode;
  intensity?: number;
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x = mouse.y * intensity;
      groupRef.current.rotation.y = mouse.x * intensity;
    }
  });

  return (
    <group ref={groupRef}>
      {children}
    </group>
  );
};

// Visibility animation based on scroll position
export const VisibilityAnimation = ({ 
  children, 
  triggerPoint = 0.5 
}: { 
  children: React.ReactNode;
  triggerPoint?: number;
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollProgress = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setScrollY(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      const isVisible = scrollY > triggerPoint;
      const targetScale = isVisible ? 1 : 0.5;
      const targetOpacity = isVisible ? 1 : 0.3;
      
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
      
      // Apply opacity to all children materials
      groupRef.current.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach((material) => {
              if ('opacity' in material) {
                material.opacity = THREE.MathUtils.lerp(material.opacity, targetOpacity, 0.1);
              }
            });
          } else {
            if ('opacity' in child.material) {
              child.material.opacity = THREE.MathUtils.lerp(child.material.opacity, targetOpacity, 0.1);
            }
          }
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {children}
    </group>
  );
};

export default ScrollAnimation; 