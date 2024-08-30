import React from "react";
import * as Three from "three";
import { Canvas } from "@react-three/fiber";
import {
  MeshReflectorMaterial,
  OrbitControls,
  useTexture,
} from "@react-three/drei";

function Mesh() {
  const texture = useTexture("./ClyBg.png");

  return (
    <mesh castShadow="true" rotation={[0, 1.5, 0]}>
      <boxGeometry args={[5, 7, 0.02]} />
      {/* <MeshReflectorMaterial map={texture} s ?/> */}

      <meshStandardMaterial map={texture}  />
    </mesh>
  );
}
export default Mesh;
