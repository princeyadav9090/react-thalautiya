import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  // Load all provided textures
  const decals = useTexture(props.imgUrls);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/* Add multiple decals at different positions */}
        {decals.map((decal, index) => {
          // Calculate positions for each decal to spread them around the sphere
          const angle = (index / decals.length) * Math.PI * 2;
          const x = Math.cos(angle) * 0.7;
          const y = Math.sin(angle) * 0.7;
          const z = Math.sqrt(1 - Math.min(x*x + y*y, 1)) * (index % 2 ? 1 : -1);
          
          return (
            <Decal
              key={index}
              position={[x, y, z]}
              rotation={[Math.PI / 2, angle, 0]}
              scale={0.5}
              map={decal}
              flatShading
            />
          );
        })}
      </mesh>
    </Float>
  );
};

const multiIconball = ({ icons }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrls={icons} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default multiIconball;