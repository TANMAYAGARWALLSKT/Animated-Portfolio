import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Splittext from "./Framer Motion Effect/Splittext";
import { LiaGripLinesSolid } from "react-icons/lia";
import Marquee from "./Marquee";
import Menu1 from "./Menu1";

function Hero() {
  return (
    <>
      <div className="relative h-screen flex justify-center flex-col text-center">
        <motion.h1
          style={{
            textShadow:
              "1px 1px 2px rgba(10, 10, 10, 0.5), 0 0 25px rgba(10, 10, 10, 0.4), 0 0 5px rgba(10, 10, 10,)",
          }}
          className="font-bold font-serif w-auto text-glow lg:text-9xl sm:text-4xl md:text-5xl "
        >
          Tanmay Agarwal
        </motion.h1>
        <motion.h1 className=" sm:text-4xl md:text-5xl lg:text-4xl  pt-2 ClashDisplay-light  w-auto">
          <Splittext duration={1} delay={0.05}>
            Front End Developer
          </Splittext>
        </motion.h1>
        <Marquee />
      </div>
    </>
  );
}

export default Hero;
