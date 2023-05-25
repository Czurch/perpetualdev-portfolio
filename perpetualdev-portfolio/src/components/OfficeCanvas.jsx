import React, { Suspense, useEffect, useState, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Plane } from "@react-three/drei";
import CoffeeLoader from "./CoffeeLoader";
import IndexedCamera from "./IndexedCamera";
import tailwindConfig from "../../tailwind.config";

const Office = () => {
  const office = useGLTF("./models/portfolio-office-v5.glb");

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <primitive object={office.scene} />
    </mesh>
  );
};

const Desk = () => {
  const desk = useGLTF("./models/desk.glb");
  // position={[0, -1, 1]}
  return (
    <mesh scale={0.6} castshadow="true" receiveshadow="true">
      <primitive object={desk.scene} />
    </mesh>
  );
};

const EntertainmentCenter = () => {
  const center = useGLTF("./models/entertainment-center.glb");
  // position={[0, -1, 1]}
  return (
    <mesh scale={0.6} castshadow="true" receiveshadow="true">
      <primitive object={center.scene} />
    </mesh>
  );
};

const Corkboard = () => {
  const corkboard = useGLTF("./models/corkboard.glb");
  // position={[0, -1, 1]}
  return (
    <mesh scale={0.6} castshadow="true" receiveshadow="true">
      <primitive object={corkboard.scene} />
    </mesh>
  );
};

const Window = () => {
  const window = useGLTF("./models/window.glb");
  // position={[0, -1, 1]}
  return (
    <mesh scale={0.6} castshadow="true" receiveshadow="true">
      <primitive object={window.scene} />
    </mesh>
  );
};

const Weather = ({ weather }) => {
  const weatherModel = useGLTF(
    `./models/${weather.weatherStatus}-${weather.time}.glb`
  );
  return (
    <mesh scale={0.6} castshadow="true" receiveshadow="true">
      <primitive object={weatherModel.scene} />
    </mesh>
  );
};

const Ground = () => {
  return (
    <Plane
      receiveshadow="true" // highlight-line
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -1, 0]}
      args={[1000, 1000]}
    >
      <meshStandardMaterial
        attach="material"
        color={tailwindConfig.theme.extend.colors.secondary}
      />
    </Plane>
  );
};

const OfficeCanvas = ({ camIndex, weather, ...props }) => {
  const cameraVectors = [
    [new THREE.Vector3(-18, 10, 8), new THREE.Vector3(0, -4, -5)],
    [new THREE.Vector3(-12.25, 4, 3), new THREE.Vector3(0, -0.5, -2)],
    [new THREE.Vector3(-20, 20, 20), new THREE.Vector3(4, -5, -5)],
    [new THREE.Vector3(0, 8, 1), new THREE.Vector3(0, -1, -4)],
    [new THREE.Vector3(8.4, 8.7, 1.915), new THREE.Vector3(1, 0, 0)],
  ];

  return (
    <Canvas
      colormanagement="true"
      shadowmap="true" // highlight-line
      camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 0] }}
      className="fixed top-0 left-0 -z-10 w-screen h-screen bg-secondarybg"
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        zindex: "-2",
      }}
    >
      <fog
        attach="fog"
        args={[tailwindConfig.theme.extend.colors.secondarybg, 0, 160]}
      />
      <ambientLight intensity={0.1} />
      <directionalLight
        intensity={0.7}
        position={[0, 10, 10]}
        castshadow="true"
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
      />
      <IndexedCamera camIndex={camIndex} camVectors={cameraVectors} />
      <Desk />
      <Corkboard />
      <EntertainmentCenter />
      <Window />
      <Weather weather={weather} />
      <Ground />
      <Preload all />
    </Canvas>
  );
};

export default OfficeCanvas;
