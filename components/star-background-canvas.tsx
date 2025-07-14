// components/star-background-canvas.tsx
"use client";

import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Use proper TypeScript types instead of any
interface StarsProps {
  [key: string]: unknown;
}

function Stars(props: StarsProps) {
  const ref = useRef<THREE.Points>(null);
  const numStars = 5000;
  const [sphere] = useState(() => {
    // 3 values per star (x, y, z)
    const arr = new Float32Array(numStars * 3);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = (Math.random() - 0.5) * 2.4;
    }
    return arr;
  });

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function StarBackgroundCanvas() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none opacity-70">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  );
}