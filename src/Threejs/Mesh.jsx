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
    <mesh castShadow rotation={[0, 1.5, 0]}>
      <boxGeometry args={[5, 7, 0.02]} />

      {/* If you want reflections, use MeshReflectorMaterial. Otherwise, use meshStandardMaterial */}
      {/* Uncomment and configure the MeshReflectorMaterial if needed */}
      {/* <MeshReflectorMaterial 
          map={texture} 
          blur={[400, 100]} 
          resolution={1024} 
          mixBlur={1} 
          mixStrength={2} 
          roughness={1} 
          depthScale={0.5} 
          minDepthThreshold={0.85} 
          maxDepthThreshold={1} 
        /> 
      */}

      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default Mesh;
