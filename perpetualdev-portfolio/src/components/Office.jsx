import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CoffeeLoader from "./CoffeeLoader";

const Office = () => {
  const office = useGLTF("./models/portfolio-office-v4.glb");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive object={office.scene} />
    </mesh>
  );
};

const OfficeCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [-4, 1.5, 2.5], fov: 39.5978 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Office />
      <Preload all />
    </Canvas>
  );
};

export default OfficeCanvas;
