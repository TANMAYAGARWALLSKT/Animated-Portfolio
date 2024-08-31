import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  MeshReflectorMaterial,
  OrbitControls,
  useTexture,
} from "@react-three/drei";

function Mesh() {
  const texture = useTexture("./ClyBg.png");

  return (
    <mesh rotation={[0, 1.5, 0]}>
      <boxGeometry args={[5, 7, 0.02]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default Mesh;
