import React from "react";
import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";

import XrModels from "./XrModels";

const XrModelContainers = () => {
  return (
    <>
      <ARButton
        sessionInit={{
          requiredFeatures: ["hit-test"],
        }}
      />
      <Canvas>
        <XR>
          <XrModels />
        </XR>
      </Canvas>
    </>
  );
};

export default XrModelContainers;
