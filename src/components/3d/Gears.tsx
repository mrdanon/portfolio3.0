'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { usePortfolioStore } from '@/lib/store';

interface GearProps {
  position: [number, number, number];
  rotation: [number, number, number];
  scale?: number;
  speed?: number;
  direction?: 1 | -1;
  color?: string;
}

const Gear = ({ 
  position, 
  rotation, 
  scale = 1, 
  speed = 1, 
  direction = 1, 
  color = '#4f46e5' 
}: GearProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { theme } = usePortfolioStore();

  // Create gear geometry
  const gearGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    const outerRadius = 1;
    const innerRadius = 0.3;
    const teeth = 12;
    const toothHeight = 0.1;

    // Create gear tooth pattern
    for (let i = 0; i < teeth; i++) {
      const angle1 = (i / teeth) * Math.PI * 2;
      const angle2 = ((i + 0.5) / teeth) * Math.PI * 2;
      const angle3 = ((i + 1) / teeth) * Math.PI * 2;

      const x1 = Math.cos(angle1) * outerRadius;
      const y1 = Math.sin(angle1) * outerRadius;
      const x2 = Math.cos(angle2) * (outerRadius + toothHeight);
      const y2 = Math.sin(angle2) * (outerRadius + toothHeight);
      const x3 = Math.cos(angle3) * outerRadius;
      const y3 = Math.sin(angle3) * outerRadius;

      if (i === 0) {
        shape.moveTo(x1, y1);
      } else {
        shape.lineTo(x1, y1);
      }
      shape.lineTo(x2, y2);
      shape.lineTo(x3, y3);
    }

    // Create inner circle
    const innerHole = new THREE.Path();
    innerHole.absarc(0, 0, innerRadius, 0, Math.PI * 2, true);
    shape.holes.push(innerHole);

    return new THREE.ExtrudeGeometry(shape, {
      depth: 0.2,
      bevelEnabled: true,
      bevelSegments: 8,
      bevelSize: 0.02,
      bevelThickness: 0.02
    });
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += speed * direction * 0.01;
      
      // Add subtle floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <mesh 
      ref={meshRef} 
      position={position} 
      rotation={rotation} 
      scale={scale}
      geometry={gearGeometry}
    >
      <meshStandardMaterial
        color={theme === 'dark' ? color : new THREE.Color(color).multiplyScalar(0.8)}
        roughness={0.4}
        metalness={0.7}
        emissive={new THREE.Color(color).multiplyScalar(0.1)}
      />
    </mesh>
  );
};

const Gears = () => {
  const { theme } = usePortfolioStore();
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle rotation of the entire group
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main central gear */}
      <Gear 
        position={[0, 0, 0]} 
        rotation={[0, 0, 0]} 
        scale={1.5} 
        speed={0.5} 
        direction={1}
        color={theme === 'dark' ? '#4f46e5' : '#3b82f6'}
      />
      
      {/* Smaller surrounding gears */}
      <Gear 
        position={[2.5, 1.5, -0.5]} 
        rotation={[0, 0, 0]} 
        scale={0.8} 
        speed={0.8} 
        direction={-1}
        color={theme === 'dark' ? '#7c3aed' : '#8b5cf6'}
      />
      
      <Gear 
        position={[-2.5, -1.5, -0.5]} 
        rotation={[0, 0, 0]} 
        scale={0.6} 
        speed={1.2} 
        direction={1}
        color={theme === 'dark' ? '#06b6d4' : '#0ea5e9'}
      />
      
      <Gear 
        position={[1.8, -2.2, 0.5]} 
        rotation={[0, 0, 0]} 
        scale={0.9} 
        speed={0.7} 
        direction={-1}
        color={theme === 'dark' ? '#f59e0b' : '#f97316'}
      />
      
      <Gear 
        position={[-1.8, 2.2, 0.5]} 
        rotation={[0, 0, 0]} 
        scale={0.7} 
        speed={1.1} 
        direction={1}
        color={theme === 'dark' ? '#10b981' : '#22c55e'}
      />
      
      {/* Background decorative gears */}
      <Gear 
        position={[0, 0, -2]} 
        rotation={[0, 0, 0]} 
        scale={2.5} 
        speed={0.2} 
        direction={-1}
        color={theme === 'dark' ? '#374151' : '#d1d5db'}
      />
      
      <Gear 
        position={[3, 3, -3]} 
        rotation={[0, 0, 0]} 
        scale={1.2} 
        speed={0.3} 
        direction={1}
        color={theme === 'dark' ? '#374151' : '#d1d5db'}
      />
      
      <Gear 
        position={[-3, -3, -3]} 
        rotation={[0, 0, 0]} 
        scale={1.0} 
        speed={0.4} 
        direction={-1}
        color={theme === 'dark' ? '#374151' : '#d1d5db'}
      />
    </group>
  );
};

export default Gears; 