import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";

import XrModels from "./XrModels";
import ModelSelector from "../dom/ModelSelector";
import { ModelProvider } from "../contexts/ModelContext";

const XrModelContainersMain = () => {
  // Create a ref for the XR container
  const xrContainerRef = useRef(null);

  useEffect(() => {
    if (xrContainerRef.current) {
      // Debugging: log to check if the ref is assigned correctly
      console.log("XR container is set: ", xrContainerRef.current);
    }
  }, [xrContainerRef]);

  return (
    <ModelProvider>
      {/* Assign the ref to the container */}
      <div className="xr-container" ref={xrContainerRef}>
        <ModelSelector />
        <ARButton
          sessionInit={{
            requiredFeatures: ["hit-test"],
            optionalFeatures: ["dom-overlay"],
            domOverlay: { root: xrContainerRef.current }, // Use the ref here
          }}
        />
        <Canvas>
          <XR>
            <XrModels />
          </XR>
        </Canvas>
      </div>
    </ModelProvider>
  );
};

export default XrModelContainersMain;
