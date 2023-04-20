import React, {useEffect, useRef } from 'react';
import {Text} from '@chakra-ui/react'
import * as THREE from 'three'
import * as TWEEN from 'tween'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'

function ThreeCanvas({className, children, hdr, model, camIndex, ...props }){
    //anything here is going to be run when the props change.
    const canvasRef = useRef(null)
    const rendererRef = useRef(null)
    const cameraRef = useRef(null)
    const scene = new THREE.Scene();
    const width = window.innerWidth;
    const height = window.innerHeight;

    const cameraLocations=[
        new THREE.Vector3( 0.75 , 3, -4),
        new THREE.Vector3( 0 , 2.5, 2.5),
        new THREE.Vector3( 2.75 , 3, -5.5)
    ]

    // Set Initial Scene State (runs once)
    useEffect(() => {
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            antialias: true
        });
        THREE.ColorManagement.enabled = true;
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize( width, height);

        rendererRef.current = renderer;

        // ----- Set Camera -----
        const camera = new THREE.PerspectiveCamera( 39.5978, width/ height, 0.1, 1000);
        cameraRef.current = camera;
        //const controls = new OrbitControls( camera, renderer.domElement );
        cameraRef.current.position.set(cameraLocations[camIndex].x, cameraLocations[camIndex].y, cameraLocations[camIndex].z);
        //controls.update();

        // ----- Load HDRI Lighting -----
        const hdrTextureURL = new URL(hdr, import.meta.url)
        const loader = new RGBELoader(); 
        loader.load(hdrTextureURL, function(texture) {
            texture.mapping = THREE.EquirectangularReflectionMapping;
            const rotationMatrix = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(0, 1, 0), Math.PI);
            texture.matrix.multiply(rotationMatrix);
            texture.matrixAutoUpdate = false;
            //scene.background = texture;
            scene.environment = texture;
        })

        // ----- Load GLB Model -----
        let glb_model = new THREE.Object3D;
        const modelLoader = new GLTFLoader();
        modelLoader.load(model, function ( gltf ) {
            //gltf.scenes[0].children[17]
            glb_model.add(gltf.scene);
        }, undefined, function (error) {
            console.error( error )
        });

        scene.add(glb_model);

        window.addEventListener( 'resize', onWindowResize, false );

        function onWindowResize(){

            cameraRef.current.aspect = window.innerWidth / window.innerHeight;
            cameraRef.current.updateProjectionMatrix();

            renderer.setSize( window.innerWidth, window.innerHeight );

        }

        function animate() {
            //cameraSmoothZoom(0.065);
            requestAnimationFrame( animate );
            TWEEN.update();
            renderer.render(scene, cameraRef.current);
            //controls.update();
        }
      
        animate();
    }, [])

    useEffect(() => {
        let cameraLocationTarget = cameraLocations[camIndex].clone();
        tweenCameraToTargetPosition(cameraLocationTarget, 1000);
    }, [camIndex])

    function tweenCameraToTargetPosition(targetPosition, duration) {
        const currentPos = cameraRef.current.position.clone();
        console.log(cameraRef.current.position);
        const newPos = targetPosition.clone();
        const tween = new TWEEN.Tween(currentPos)
          .to(newPos, duration)
          .easing(TWEEN.Easing.Cubic.Out)
          .onUpdate(() => {
            cameraRef.current.position.set(currentPos.x, currentPos.y, currentPos.z);
            //cameraRef.current.lookAt(targetPosition);
          })
          .start();
    }

    return(
        <div>
            <canvas style={{position:'fixed', top:0, left:0, zIndex: -1}} id="viewer" ref={canvasRef}></canvas>
            {/*children*/ }
        </div>
    )
}

export default ThreeCanvas