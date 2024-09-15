import React, { Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const ModelLoader = ({ path, position }) => {
  const gltf = useLoader(GLTFLoader, path);

  return (
    <Suspense fallback={null}>
      <primitive position={position} object={gltf.scene} />
    </Suspense>
  );
};

export default ModelLoader;
