import React, {useEffect, useRef } from 'react';
import {Text} from '@chakra-ui/react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'

function ThreeCanvas({className, children, hdr, model, ...props }){
    const canvasRef = useRef(null)

    useEffect(() => {
        const scene = new THREE.Scene();
        const width = window.innerWidth;
        const height = window.innerHeight;



        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            antialias: true
        });
        THREE.ColorManagement.enabled = true;
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize( width, height);


        // ----- Set Camera -----
        const camera = new THREE.PerspectiveCamera( 39.5978, width/ height, 0.1, 1000);
        //const controls = new OrbitControls( camera, renderer.domElement );
        camera.position.set( 0 , 2.5, 2.5);
        //controls.update();


        // ----- Load HDRI Lighting -----
        const hdrTextureURL = new URL(hdr, import.meta.url)
        const loader = new RGBELoader();
        loader.load(hdrTextureURL, function(texture) {
            texture.mapping = THREE.EquirectangularReflectionMapping;
            const rotationMatrix = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(0, 1, 0), Math.PI);
            texture.matrix.multiply(rotationMatrix);
            texture.matrixAutoUpdate = false;
            scene.background = texture;
            scene.environment = texture;
            scene.environment.rotation
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

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize( window.innerWidth, window.innerHeight );

        }

        function animate() {
            //cameraSmoothZoom(0.065);
            requestAnimationFrame( animate );
            renderer.render(scene, camera);
            //controls.update();
        }
      
        animate();
        renderer.render(scene, camera);
    }, [])

    return(
        <div>
            <canvas style={{position:'fixed', top:0, left:0, zIndex: -1}} id="viewer" ref={canvasRef}></canvas>
            {/*children*/ }
        </div>
    )
}

export default ThreeCanvas