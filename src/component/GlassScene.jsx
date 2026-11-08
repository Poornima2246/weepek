 


import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Float,
  OrbitControls,
  ContactShadows,
  SpotLight,
} from "@react-three/drei";
import SunglassesModel from "./Model";

export default function SunglassesScene({ activeColor }) {
  return (
    <Canvas
      camera={{
        position: [0, 0.4, 6],
        fov: 35,
      }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
    >
      {/* 1. Lower ambient light so the focus light creates high contrast */}
      <ambientLight intensity={0.3} />

      {/* 2. Main Overhead/Front Focus Spotlight */}
      <SpotLight
        position={[0, 6, 5]}
        angle={0.4}
        penumbra={0.8}
        intensity={8}
        distance={12}
        color="#ffffff"
        castShadow
      />

      {/* 3. Subtle Rim/Backlight for frame definition */}
      <directionalLight position={[-4, 3, -3]} intensity={1.5} color="#e0e7ff" />

      {/* 4. Soft studio reflections */}
      <Environment preset="studio" environmentIntensity={0.6} />

      <Suspense fallback={null}>
        <Float
          speed={1.3}
          rotationIntensity={0.15}
          floatIntensity={0.50}
        >
          <SunglassesModel color={activeColor} />
        </Float>

        <ContactShadows
          position={[0, -1.7, 0]}
          opacity={0.5}
          scale={6}
          blur={2.0}
          far={4}
        />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2.4}
        maxPolarAngle={Math.PI / 1.8}
      />
    </Canvas>
  );
}