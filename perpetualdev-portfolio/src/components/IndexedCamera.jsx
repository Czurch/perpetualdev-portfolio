import { useEffect, useRef } from "react";
import * as TWEEN from "tween";
import { useFrame, useThree } from "@react-three/fiber";

const IndexedCamera = ({ camIndex, camVectors }) => {
  const state = useThree();
  const cameraRef = useRef();
  const cameraLookRef = useRef(null);
  const width = state.size.width;
  const height = state.size.height;

  /*To access the location use camVectors[camIndex][0] 
  and camVectors[camIndex][1] to access the lookAt Vector */

  useEffect(() => {
    // ----- Set Camera -----
    cameraRef.current = state.camera;

    cameraRef.current.position.set(
      camVectors[camIndex][0].x,
      camVectors[camIndex][0].y,
      camVectors[camIndex][0].z
    );
    cameraRef.current.lookAt(
      camVectors[camIndex][0].clone().add(camVectors[camIndex][1])
    );
    cameraLookRef.current = camVectors[camIndex][0]
      .clone()
      .add(camVectors[camIndex][1]);
  }, []);

  useEffect(() => {
    let cameraLocationTarget = camVectors[camIndex][0].clone();
    createVectorTween(
      cameraLookRef.current,
      camVectors[camIndex][1],
      999,
      TWEEN.Easing.Sinusoidal.Out
    );
    tweenCameraToTargetPosition(cameraLocationTarget, 1000);
    state.invalidate();
  }, [camIndex]);

  useFrame(({ gl, scene, delta, camera }) => {
    TWEEN.update(delta);
    gl.render(scene, camera);
  }, 1);

  function tweenCameraToTargetPosition(targetPosition, duration) {
    const currentPos = cameraRef.current.position.clone();
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
        state.invalidate();
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

  return null;
};

export default IndexedCamera;
