import React, { Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const ModelLoader = ({ path, position }) => {
  const gltf = useLoader(GLTFLoader, path);

  // Scale factor based on model
  const scaleFactor = path.includes("Sonda") ? 10 : 1; // Adjust scale factor as needed

  return (
    <Suspense fallback={null}>
      <primitive
        position={position}
        object={gltf.scene}
        scale={[scaleFactor, scaleFactor, scaleFactor]}
      />
    </Suspense>
  );
};

export default ModelLoader;
