import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Cube = ({ position }) => {
  const cubeRef = useRef();

  useFrame((state, delta) => {
    cubeRef.current.rotation.x += delta;
  });

  return (
    <>
      <mesh ref={cubeRef} position={position}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color={"mediumpurple"} />
      </mesh>
    </>
  );
};

export default Cube;
