import React, { useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { Interactive, useHitTest, useXR } from "@react-three/xr";
import { useThree } from "@react-three/fiber";

import Linga from "./Sonda";

const XrModels = () => {
  const reticleRef = useRef();
  const [models, setModels] = useState([]);

  const { isPresenting } = useXR();

  useThree(({ camera }) => {
    if (!isPresenting) {
      camera.position.z = 3;
    }
  });

  useHitTest((hitMatrix) => {
    hitMatrix.decompose(
      reticleRef.current.position,
      reticleRef.current.quaternion,
      reticleRef.current.scale
    );
    reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
  });

  const placeModel = (e) => {
    const position = e.intersection.object.position.clone();
    const id = Date.now();
    setModels([{ position, id }]);
  };

  return (
    <>
      <OrbitControls />
      <ambientLight />
      {isPresenting &&
        models.map(({ position, id }) => (
          <Linga key={id} position={position} />
        ))}
      {isPresenting && (
        <Interactive onSelect={placeModel}>
          <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
            <ringGeometry args={[0.1, 0.25, 32]} />
            <meshStandardMaterial color={"white"} />
          </mesh>
        </Interactive>
      )}

      {!isPresenting && <Linga />}
    </>
  );
};

export default XrModels;
