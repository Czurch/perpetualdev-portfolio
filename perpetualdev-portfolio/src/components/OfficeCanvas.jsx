import React, { Suspense, useEffect, useState, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CoffeeLoader from "./CoffeeLoader";
import IndexedCamera from "./IndexedCamera";

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
  const office = useGLTF("./models/desk.glb");
  // position={[0, -1, 1]}
  return (
    <mesh scale={0.6}>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <primitive object={office.scene} />
    </mesh>
  );
};

const Corkboard = () => {
  const office = useGLTF("./models/corkboard.glb");
  // position={[0, -1, 1]}
  return (
    <mesh scale={0.6}>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <primitive object={office.scene} />
    </mesh>
  );
};

const Window = () => {
  const office = useGLTF("./models/window-day-clear.glb");
  // position={[0, -1, 1]}
  return (
    <mesh scale={0.6}>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <primitive object={office.scene} />
    </mesh>
  );
};

const OfficeCanvas = ({ camIndex, ...props }) => {
  const cameraVectors = [
    [new THREE.Vector3(-20, 15, 20), new THREE.Vector3(4, 0, -5)],
    [new THREE.Vector3(-3.5, 4, -7), new THREE.Vector3(0, -2, -2)],
    [new THREE.Vector3(-10, 15, 15), new THREE.Vector3(4, -5, -5)],
    [new THREE.Vector3(0, 8, 1), new THREE.Vector3(0, -1, -4)],
    [new THREE.Vector3(15.95, 8.7, 1.915), new THREE.Vector3(1, 0, 0)],
  ];

  return (
    <Canvas
      camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 0] }}
      className="fixed top-0 left-0 -z-10 w-screen h-screen"
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        zindex: "-2",
      }}
    >
      <IndexedCamera camIndex={camIndex} camVectors={cameraVectors} />
      <Desk />
      <Corkboard />
      <Window />
      <Preload all />
    </Canvas>
  );
};

export default OfficeCanvas;
