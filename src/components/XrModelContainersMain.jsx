import React, { useCallback, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import XrModels from "./XrModels";
import ModelSelector from "../dom/ModelSelector";
import { ModelProvider } from "../contexts/ModelContext";

const XrModelContainersMain = () => {
  const [overlayContent, setOverlayContent] = useState(null);

  // Set the DOM overlay reference
  const interfaceRef = useCallback((node) => {
    if (node !== null) {
      setOverlayContent(node);
    }
  }, []);

  return (
    <ModelProvider>
      {/* Model Selector as DOM Overlay */}
      <div ref={interfaceRef}>
        <ModelSelector />
      </div>

      {/* ARButton with domOverlay configuration */}
      <ARButton
        sessionInit={{
          requiredFeatures: ["hit-test"],
          optionalFeatures: ["dom-overlay"],
          domOverlay: { root: overlayContent },
        }}
        className="ar-button"
      />

      {/* 3D Canvas */}
      <Canvas>
        <XR>
          <XrModels />
        </XR>
      </Canvas>
    </ModelProvider>
  );
};

export default XrModelContainersMain;
