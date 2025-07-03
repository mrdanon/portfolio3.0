'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { usePortfolioStore } from '@/lib/store';

interface ParticlesProps {
  count?: number;
  size?: number;
  area?: number;
  speed?: number;
  color?: string;
}

const Particles = ({ 
  count = 1000, 
  size = 0.02, 
  area = 10, 
  speed = 0.5,
  color 
}: ParticlesProps) => {
  const pointsRef = useRef<THREE.Points>(null);
  const { theme } = usePortfolioStore();

  // Generate random particle positions
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Random positions in a sphere
      const radius = Math.random() * area;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
      
      // Random colors with theme-based variations
      const baseColor = new THREE.Color(
        color || (theme === 'dark' ? '#4f46e5' : '#3b82f6')
      );
      
      // Add variation to the color
      const hsl = { h: 0, s: 0, l: 0 };
      baseColor.getHSL(hsl);
      
      const colorVariation = new THREE.Color().setHSL(
        hsl.h + (Math.random() - 0.5) * 0.1,
        hsl.s + (Math.random() - 0.5) * 0.2,
        hsl.l + (Math.random() - 0.5) * 0.3
      );
      
      colors[i3] = colorVariation.r;
      colors[i3 + 1] = colorVariation.g;
      colors[i3 + 2] = colorVariation.b;
    }
    
    return [positions, colors];
  }, [count, area, color, theme]);

  // Animation
  useFrame((state) => {
    if (pointsRef.current) {
      const time = state.clock.elapsedTime * speed;
      
      // Rotate the entire particle system
      pointsRef.current.rotation.x = time * 0.1;
      pointsRef.current.rotation.y = time * 0.05;
      
      // Individual particle movement
      const positionAttribute = pointsRef.current.geometry.attributes.position;
      if (positionAttribute) {
        const positions = positionAttribute.array as Float32Array;
        
        for (let i = 0; i < count; i++) {
          const i3 = i * 3;
          
          // Wave-like movement
          positions[i3] += Math.sin(time + i * 0.1) * 0.001;
          positions[i3 + 1] += Math.cos(time + i * 0.1) * 0.001;
          positions[i3 + 2] += Math.sin(time * 0.5 + i * 0.05) * 0.0005;
        }
        
        positionAttribute.needsUpdate = true;
      }
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} colors={colors}>
      <PointMaterial
        size={size}
        vertexColors
        transparent
        opacity={theme === 'dark' ? 0.8 : 0.6}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

// Preset particle configurations
export const FloatingParticles = () => (
  <Particles 
    count={800} 
    size={0.015} 
    area={8} 
    speed={0.3} 
  />
);

export const BackgroundParticles = () => (
  <Particles 
    count={1500} 
    size={0.008} 
    area={15} 
    speed={0.1} 
  />
);

export const AccentParticles = () => {
  const { theme } = usePortfolioStore();
  
  return (
    <Particles 
      count={200} 
      size={0.03} 
      area={5} 
      speed={0.8} 
      color={theme === 'dark' ? '#f59e0b' : '#f97316'}
    />
  );
};

export default Particles; 