'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, Environment } from '@react-three/drei';
import { usePortfolioStore } from '@/lib/store';
import LoadingSpinner from '@/components/layout/LoadingSpinner';

interface SceneProps {
  children?: React.ReactNode;
  enableControls?: boolean;
  cameraPosition?: [number, number, number];
  fov?: number;
  className?: string;
}

const Scene = ({ 
  children, 
  enableControls = true, 
  cameraPosition = [0, 0, 6], 
  fov = 35,
  className = ""
}: SceneProps) => {
  const { theme } = usePortfolioStore();

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ 
          position: cameraPosition, 
          fov: fov,
          near: 0.1,
          far: 1000
        }}
        gl={{ 
          alpha: true, 
          antialias: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]} // Adaptive pixel ratio
        performance={{ min: 0.5 }} // Performance management
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={theme === 'dark' ? 0.3 : 0.5} />
          <directionalLight 
            position={[5, 5, 5]} 
            intensity={theme === 'dark' ? 0.8 : 1.2}
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          <pointLight 
            position={[-5, -5, -5]} 
            intensity={theme === 'dark' ? 0.4 : 0.6}
            color={theme === 'dark' ? '#4f46e5' : '#3b82f6'}
          />

          {/* Environment */}
          <Environment preset={theme === 'dark' ? 'night' : 'dawn'} />

          {/* Fog for depth */}
          <fog 
            attach="fog" 
            args={[theme === 'dark' ? '#111827' : '#f3f4f6', 10, 50]} 
          />

          {/* Controls */}
          {enableControls && (
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableRotate={true}
              autoRotate={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 4}
              rotateSpeed={0.5}
            />
          )}

          {/* Scene content */}
          {children}

          {/* Preload all assets */}
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

// Fallback component for 3D content
export const SceneFallback = ({ className = "" }: { className?: string }) => (
  <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 ${className}`}>
    <LoadingSpinner 
      size="large" 
      variant="gears" 
      text="Loading 3D Scene..." 
    />
  </div>
);

export default Scene; 