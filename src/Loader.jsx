import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import { AnimatePresence, motion } from "framer-motion";
import Splittext from "./Framer Motion Effect/Splittext";
import { Howl, Howler } from "howler";

// Import audio files
import boomAudioSrc from "../public/boom-208750.mp3";
import interfaceAudioSrc from "../public/interface.mp3";
import loadingAudioSrc from "../public/Loading.mp3";

function Loader() {
  const [RenderPage, setRenderPage] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Function to preload audio files
    const preloadAudio = (src) => {
      return new Promise((resolve) => {
        const sound = new Howl({
          src: [src],
          html5: true,
          onload: () => resolve(),
          onloaderror: () => resolve(), // Handle error case
        });
        sound.load();
      });
    };

    // Load all audio files
    const loadAssets = async () => {
      await Promise.all([
        preloadAudio(boomAudioSrc),
        preloadAudio(interfaceAudioSrc),
        preloadAudio(loadingAudioSrc),
      ]);

      setRenderPage(true); // Set renderPage to true once all audio files are preloaded
      setShowLoader(false); // Hide loader
    };

    loadAssets();
    new Howl({
      src: ["Loading.mp3"],
      loop: false,
      volume: 1,
    }).play();
  }, []);
  // Play loading audio when renderPage is true

  return (
    <div>
      <AnimatePresence mode="wait">
        {showLoader && !RenderPage ? (
          <motion.div
            key="loader"
            exit={{ y: -1000, scale: 0.5 }}
            transition={{ duration: 1, ease: "circInOut" }}
            className="w-screen h-screen flex justify-center items-center"
          >
            <motion.div className="BoxLoader h-auto w-auto rounded-3xl mx-auto my-auto luckiest-guy">
              <Splittext duration={2} delay={0.15}>
                Hello
              </Splittext>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="hero"
            initial={{ y: 1000, scale: 0.5, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "circInOut" }}
          >
            <Hero />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Loader;
