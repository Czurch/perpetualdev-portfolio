import React, { Suspense, useEffect, useRef } from "react";
import { Text } from "@chakra-ui/react";
import * as THREE from "three";
import * as TWEEN from "tween";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import {
  CSS3DRenderer,
  CSS3DObject,
} from "three/addons/renderers/CSS3DRenderer.js";

function ThreeCanvas({ className, children, hdr, model, camIndex, ...props }) {
  //anything here is going to be run when the props change.
  const canvasRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const cameraLookRef = useRef(null);
  const contentRef = useRef(null);

  const width = window.innerWidth;
  const height = window.innerHeight;

  const cameraLocations = [
    new THREE.Vector3(0.75, 3.5, -7.1),
    new THREE.Vector3(-3.5, 4, -7),
    new THREE.Vector3(-4, 1.5, 2.5),
    new THREE.Vector3(3.25, 3, -6),
    new THREE.Vector3(3.25, 3, -6),
  ];
  /*      These are the global coords 
    const cameraLookLocations = [
        new THREE.Vector3(0.75, 1, -7.1),
        new THREE.Vector3(2 , 2.75, -10),
        new THREE.Vector3(4.25, 2.75, -10),
    ]
    */
  //  These are the new camera local diff style coords
  const cameraLookLocations = [
    new THREE.Vector3(0, -2.5, -0.1),
    new THREE.Vector3(0, -2, -2),
    new THREE.Vector3(5, 1.25, -12.5),
    new THREE.Vector3(1, -0.1, -4),
    new THREE.Vector3(1, 0, 0),
  ];

  // Set Initial Scene State (runs once)
  useEffect(() => {
    // ----- Set WebGL Renderer -----
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    THREE.ColorManagement.enabled = true;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    rendererRef.current = renderer;

    /* ----- Set CSS Renderer -----
    let cssRenderer = new CSS3DRenderer({
      element: cssCanvasRef.current,
      antialias: true,
    });
    cssRenderer.outputEncoding = THREE.sRGBEncoding;
    cssRenderer.setSize(width, height);*/

    const scene = new THREE.Scene();
    //const cssScene = new THREE.Scene();

    // ----- Set Camera -----
    const camera = new THREE.PerspectiveCamera(
      39.5978,
      width / height,
      0.1,
      1000
    );
    cameraRef.current = camera;
    //const controls = new OrbitControls( camera, renderer.domElement );
    cameraRef.current.position.set(
      cameraLocations[camIndex].x,
      cameraLocations[camIndex].y,
      cameraLocations[camIndex].z
    );
    cameraRef.current.lookAt(
      cameraLocations[camIndex].clone().add(cameraLookLocations[camIndex])
    );
    cameraLookRef.current = cameraLocations[camIndex]
      .clone()
      .add(cameraLookLocations[camIndex]);
    //controls.update();

    // ----- Load HDRI Lighting -----
    if (hdr) {
      const hdrTextureURL = new URL(hdr, import.meta.url);
      const loader = new RGBELoader();
      loader.load(hdrTextureURL, function (texture) {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        const rotationMatrix = new THREE.Matrix4().makeRotationAxis(
          new THREE.Vector3(0, 1, 0),
          Math.PI
        );
        texture.matrix.multiply(rotationMatrix);
        texture.matrixAutoUpdate = false;
        //scene.background = texture;
        scene.environment = texture;
      });
    } else {
      const exteriorLight = new THREE.PointLight(0xf9fece, 10, 20);
      exteriorLight.position.set(-8.811, 8, -14.264);
      scene.add(exteriorLight);
      const RoomLight = new THREE.PointLight(0xfee59f, 5, 11);
      RoomLight.position.set(-1.602, 5.331, 0.035);
      scene.add(RoomLight);
      const ambientGold = new THREE.PointLight(0xffd285, 5, 7);
      ambientGold.position.set(3.711, 3.617, -1.5);
      scene.add(ambientGold);
      const ambientBlue = new THREE.PointLight(0xdbf1fe, 7.5, 10);
      ambientBlue.position.set(-7.313, 3.842, 0);
      scene.add(ambientBlue);
      scene.background = new THREE.Color(139, 159, 223);
    }

    // ----- Load GLB Model -----
    let glb_model = new THREE.Object3D();
    const modelLoader = new GLTFLoader();
    modelLoader.load(
      model,
      function (gltf) {
        //gltf.scenes[0].children[17]
        glb_model.add(gltf.scene);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    scene.add(glb_model);

    window.addEventListener("resize", onWindowResize, false);

    // let el = document.createElement('div');
    // let element = <div><h1>HERE'S THE GUY</h1></div>
    // el.innerHTML = "<h1>StinkyDinky</h1>" + "";
    // let cssObj = new CSS3DObject(contentRef.current)
    // cssObj.position.set(cameraRef.current.position.clone().add(new THREE.Vector3(0, 0, -2)))
    // console.log(contentRef.current)
    // console.log(cssObj);
    // cssScene.add(cssObj)

    function onWindowResize() {
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
      //cssRenderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
      //cameraSmoothZoom(0.065);
      requestAnimationFrame(animate);
      TWEEN.update();
      renderer.render(scene, cameraRef.current);
      //cssRenderer.render(cssScene, cameraRef.current);
      //controls.update();
    }

    animate();
  }, []);

  useEffect(() => {
    let cameraLocationTarget = cameraLocations[camIndex].clone();
    createVectorTween(
      cameraLookRef.current,
      cameraLookLocations[camIndex],
      999,
      TWEEN.Easing.Sinusoidal.Out
    );
    tweenCameraToTargetPosition(cameraLocationTarget, 1000);
  }, [camIndex]);

  function tweenCameraToTargetPosition(targetPosition, duration) {
    const currentPos = cameraRef.current.position.clone();
    //console.log(cameraRef.current.position);
    const newPos = targetPosition.clone();
    const tween = new TWEEN.Tween(currentPos)
      .to(newPos, duration)
      .easing(TWEEN.Easing.Cubic.Out)
      .onUpdate(() => {
        cameraRef.current.position.set(
          currentPos.x,
          currentPos.y,
          currentPos.z
        );
        cameraRef.current.lookAt(
          cameraRef.current.position.clone().add(cameraLookRef.current)
        );
        //cameraRef.current.lookAt(targetPosition);
      })
      .onComplete(() => {
        console.log(
          cameraRef.current.position.clone().add(cameraLookRef.current)
        );
      })
      .start();
  }

  function createVectorTween(from, to, duration, easing) {
    const currentPos = from.clone();
    const newPos = to.clone();
    const tween = new TWEEN.Tween(currentPos)
      .to(newPos, duration)
      .easing(easing)
      .onUpdate(() => {
        from.copy(currentPos);
      })
      .start();
  }

  return (
    <div>
      <canvas
        style={{ position: "fixed", top: 0, left: 0, zIndex: -2 }}
        id="viewer"
        ref={canvasRef}
      ></canvas>

      {/*children*/}
    </div>
  );
}

export default ThreeCanvas;
