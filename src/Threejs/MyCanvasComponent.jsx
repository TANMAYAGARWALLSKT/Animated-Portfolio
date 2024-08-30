import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows } from "@react-three/drei";
import * as Three from "three";
import Mesh from "./Mesh";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  ToneMapping,
} from "@react-three/postprocessing";

function MyCanvasComponent() {
  return (
    <Canvas
      flat
      camera={{ fov: 90, position: [0, 0, 5] }}
      gl={{ antialias: true }}
    >
      {/* Use Suspense for lazy loading of the Mesh component */}
      <Suspense fallback={null}>
        <ambientLight intensity={1} />

        <EffectComposer>
          <DepthOfField
            focusDistance={1}
            focalLength={1}
            bokehScale={2} // Added bokeh scale for enhanced depth
          />
          <Bloom
            mipmapBlur
            intensity={1.5} // Reduced intensity for a more balanced bloom effect
            luminanceThreshold={0.1} // Adjusted for better highlight management
            luminanceSmoothing={0.9}
          />
          <ToneMapping adaptive />
          <Noise opacity={0.02} /> {/* Slightly increased opacity for noise */}
        </EffectComposer>

        <Mesh />

        {/* Use ContactShadows with optimized parameters */}
        <ContactShadows
          opacity={0.5}
          scale={10}
          blur={2.5}
          far={10}
          resolution={256}
        />

        {/* Use OrbitControls with optimized performance */}
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.6}
          enableDamping
          dampingFactor={0.1}
          rotateSpeed={0.5}
        />
      </Suspense>
    </Canvas>
  );
}

export default MyCanvasComponent;
