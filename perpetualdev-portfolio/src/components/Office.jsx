import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CoffeeLoader from "./CoffeeLoader";

const Office = () => {
  const office = useGLTF("./models/console.glb");

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <primitive object={office.scene} />
    </mesh>
  );
};

const OfficeCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [-4, 8, 2.5], fov: 39.5978 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
    >
      <Suspense fallback={<CoffeeLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Office />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default OfficeCanvas;
