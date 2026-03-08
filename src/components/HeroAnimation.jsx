// src/components/HeroAnimation.jsx
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Particles() {
  const group = useRef();
  const particleCount = 300;
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      position: [
        THREE.MathUtils.randFloatSpread(14),
        THREE.MathUtils.randFloatSpread(6),
        THREE.MathUtils.randFloatSpread(14),
      ],
      size: THREE.MathUtils.randFloat(0.02, 0.06),
      speed: THREE.MathUtils.randFloat(0.001, 0.003),
    });
  }

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.001;
      group.current.rotation.x += 0.0005;
      group.current.children.forEach((child, i) => {
        child.position.y += Math.sin(Date.now() * particles[i].speed + i) * 0.0007;
      });
    }
  });

  return (
    <group ref={group}>
      {particles.map((p, i) => (
        <mesh key={i} position={p.position}>
          <sphereGeometry args={[p.size, 8, 8]} />
          <meshStandardMaterial
            color="#ffb6c1"
            emissive="#ffb6c1"
            emissiveIntensity={0.8}
            metalness={0.5}
            roughness={0.1}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function HeroAnimation() {
  return (
    <Canvas camera={{ position: [0, 0, 12], fov: 75 }} className="w-full h-full">
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Particles />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.03} />
    </Canvas>
  );
}