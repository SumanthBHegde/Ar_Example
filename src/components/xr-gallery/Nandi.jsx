import React, { Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const Nandi = ({ position }) => {
  const gltf = useLoader(GLTFLoader, "/models/Nandi/scene.gltf");
  return (
    <Suspense fallback={null}>
      <primitive position={position} object={gltf.scene} />
    </Suspense>
  );
};

export default Nandi;
