import React from "react";
import { Canvas } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

function Mesh() {
  const texture1 = useTexture("./ClyBg.png");
  const texture2 = useTexture("./asphalt_track.webp");

  return (
    <mesh rotation={[0, 1.5, 0]} castShadow receiveShadow>
      <boxGeometry args={[5, 7, 0.02]} />
      <meshStandardMaterial
        map={texture1}
        roughnessMap={texture2}
        side={DoubleSide}
      />
    </mesh>
  );
}

export default Mesh;
