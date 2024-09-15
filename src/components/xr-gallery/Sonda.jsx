import React, { Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const Sonda = ({ position }) => {
  const gltf = useLoader(GLTFLoader, "/models/Sonda/result.gltf");
  return (
    <Suspense fallback={null}>
      <primitive position={position} object={gltf.scene} />
    </Suspense>
  );
};

export default Sonda;
