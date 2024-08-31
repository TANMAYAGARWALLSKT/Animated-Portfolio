import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows } from "@react-three/drei";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
} from "@react-three/postprocessing";
import Mesh from "./Mesh";

function MyCanvasComponent() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.addEventListener("webglcontextlost", handleContextLost, false);
      canvas.addEventListener(
        "webglcontextrestored",
        handleContextRestored,
        false
      );
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener("webglcontextlost", handleContextLost);
        canvas.removeEventListener(
          "webglcontextrestored",
          handleContextRestored
        );
      }
    };
  }, []);

  const handleContextLost = (event) => {
    event.preventDefault();
    console.warn("WebGL context lost");
    // Optional: Implement logic to pause rendering or notify the user
  };

  const handleContextRestored = () => {
    console.warn("WebGL context restored");
    // Reinitialize your scene and resources here
  };

  return (
    <Canvas
      ref={canvasRef}
      flat
      camera={{ fov: 90, position: [0, 0, 5] }}
      gl={{ antialias: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={1} />
        <Mesh />
        <EffectComposer>
          <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} />
          <Bloom
            mipmapBlur
            intensity={1.5}
            luminanceThreshold={0.1}
            luminanceSmoothing={0.9}
          />
          <Noise opacity={0.02} />
        </EffectComposer>
        <ContactShadows
          opacity={0.5}
          scale={10}
          blur={2.5}
          far={10}
          resolution={256}
        />
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
