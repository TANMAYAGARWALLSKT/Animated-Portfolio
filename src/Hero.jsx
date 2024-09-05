import React from "react";
import { motion } from "framer-motion";
import Splittext from "./Framer Motion Effect/Splittext";
import Marquee from "./Marquee";

function Hero() {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.h1
        style={{
          textShadow:
            "1px 1px 2px rgba(10, 10, 10, 0.5), 0 0 25px rgba(10, 10, 10, 0.4), 0 0 5px rgba(10, 10, 10,)",
        }}
        className="font-bold font-serif w-auto text-glow text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl"
      >
        Tanmay Agarwal
      </motion.h1>
      <motion.h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl pt-2 ClashDisplay-light w-auto">
        <Splittext duration={1} delay={0.05}>
          Front End Developer
        </Splittext>
      </motion.h1>
      <Marquee />
    </div>
  );
}

export default Hero;
