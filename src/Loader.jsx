import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import { AnimatePresence, motion } from "framer-motion";
import Splittext from "./Framer Motion Effect/Splittext";
import { Howl, Howler } from "howler";

function Loader() {
  const [RenderPage, setRenderPage] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const renderTimeout = setTimeout(() => {
      setRenderPage(true);
    }, 2000); // Toggle the state after 2 seconds

    const soundTimeout = setTimeout(() => {
      const sound = new Howl({
        src: ["Loading.mp3"],
        loop: false,
        volume: 1,
      });
      sound.play();
    }, 1);

    const loaderTimeout = setTimeout(() => {
      setShowLoader(false);
    }, 3000); // Hide the loader after 3 seconds

    return () => {
      clearTimeout(renderTimeout);
      clearTimeout(soundTimeout);
      clearTimeout(loaderTimeout);
    };
  }, []);

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
