import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows } from "@react-three/drei";
import * as Three from "three";
import Mesh from "./Mesh";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  ToneMapping,
  Noise,
} from "@react-three/postprocessing";

function MyCanvasComponent() {
  return (
    <Canvas flat camera={{ fov: 90 }}>
      <ambientLight intensity={1} />

      <EffectComposer>
        <DepthOfField focusDistance={1} focalLength={1} />

        <Bloom
          mipmapBlur
          intensity={2.5}
          luminanceThreshold={0}
          luminanceSmoothing={0.5}
        />
        {/* <Autofocus blur={true} /> */}
        <ToneMapping adaptive />
        <Noise opacity={0.01} />
      </EffectComposer>
      <Mesh />
      <ContactShadows />
      <OrbitControls autoRotate autoRotateSpeed={0.6} />
    </Canvas>
  );
}

export default MyCanvasComponent;
