import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CoffeeLoader from "./CoffeeLoader";

const Office = () => {
  const office = useGLTF("./models/portfolio-office-v5.glb");

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <primitive object={office.scene} />
    </mesh>
  );
};

const Gameboy = () => {
  const office = useGLTF("./models/gameboy-lit.glb");

  return (
    <mesh scale={1.3}>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <primitive object={office.scene} />
    </mesh>
  );
};

const GradCap = () => {
  const office = useGLTF("./models/gradcap-lit.glb");

  return (
    <mesh scale={1.4}>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <primitive object={office.scene} />
    </mesh>
  );
};

const Console = () => {
  const office = useGLTF("./models/console.glb");

  return (
    <mesh scale={0.6} position={[0, -1, 1]}>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <primitive object={office.scene} />
    </mesh>
  );
};

const ModelCanvas = ({ model, rotateforward }) => {
  const getSelectedModel = () => {
    switch (model) {
      case "office":
        return <Office />;
      case "gameboy":
        return <Gameboy />;
      case "gradcap":
        return <GradCap />;
      case "console":
      default:
        return <Console />;
    }
  };

  return (
    <Canvas
      className="flex w-24 h-24 model"
      frameloop="demand"
      camera={{ position: [-4, 3, 2.5], fov: 39.5978 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{
        position: "static",
        width: "16rem",
        height: "16rem",
      }}
    >
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={true}
        autoRotateSpeed={rotateforward ? 0.7 : -0.7}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      {getSelectedModel()}
      <Preload all />
    </Canvas>
  );
};

export default ModelCanvas;
