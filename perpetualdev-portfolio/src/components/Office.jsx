import {Suspense, useEffect, useState} from 'react';
import { Canvas } from '@react-three/fiber'
import {OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader';

const Office = () => {
    const office = useGLTF('./src/assets/models/portfolio-office-AO.glb')

    return (
        <mesh>
            <hemisphereLight intensity={0.15}
            groundColor="black"/>
            <pointLight intensity={1} />
            <primitive
                object={office.scene}
            />
        </mesh>
    )
}

const OfficeCanvas = () => {
    <Canvas
        frameLoop="demand"
        shadows
        camera=({position: [20, 3, 5], fov: 25})>

    </Canvas>
}

export default Office;